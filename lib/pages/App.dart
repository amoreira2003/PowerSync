import 'dart:async';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_reactive_ble/flutter_reactive_ble.dart';
import 'package:flutter_svg/svg.dart';
import 'package:geocoding/geocoding.dart';
import 'package:geolocator/geolocator.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:intl/intl.dart';
import 'package:raizen_obd/components/BigInfoBlock.dart';
import 'package:raizen_obd/components/BluetoothDebugPage.dart';
import 'package:raizen_obd/components/CarInfo.dart';
import 'package:raizen_obd/components/DiagnosisInfo.dart';
import 'package:raizen_obd/components/LocInfo.dart';
import 'package:raizen_obd/components/SmallInfoBlock.dart';
import 'package:raizen_obd/components/WidgetCarousel.dart';
import 'package:raizen_obd/methods/BluetoothManager.dart';
import 'package:raizen_obd/methods/PermissionHandler.dart';
import 'package:raizen_obd/methods/Scale.dart';
import 'package:raizen_obd/methods/StreamManager.dart';
import 'package:raizen_obd/pages/Map.dart';
import 'package:raizen_obd/pages/MapFullScreen.dart';
import 'package:raizen_obd/pages/VehicleForm.dart';
import 'package:webview_flutter/webview_flutter.dart';

class App extends StatefulWidget {
  const App({
    super.key,
  });

  @override
  State<App> createState() => _AppState();
}

class _AppState extends State<App> {
  final GlobalKey<ScaffoldState> _key = GlobalKey();

  DiscoveredDevice? currentDevice;
  Stream<ConnectionStateUpdate>? connectionState;
  Stream<String>? dataStream;
  Stream<String>? coolantStream;

  String isBluetoothConnected = 'disconnected';

  PermissionHandler permissionHandler = PermissionHandler();
  late BluetoothManager bluetoothManager;

  String characteristicId = "0000fff1-0000-1000-8000-00805f9b34fb";
  String serviceId = "0000fff0-0000-1000-8000-00805f9b34fb";

  @override
  void initState() {
    super.initState();

    bluetoothManager = BluetoothManager(permissionHandler);
    bluetoothConnect();
  }

  void bluetoothConnect() async {
    await Future.delayed(const Duration(seconds: 4));
    print("Trying to connect");
    permissionHandler.checkPermission();
    DiscoveredDevice obdFound;
    try {
      obdFound = await bluetoothManager.recon(permissionHandler);
    } catch (e) {
      showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text("Ocorreu um Erro"),
            content: Text(
                "Não foi possível encontrar o dispositivo OBD2.\n\nVerifique se a antena de bluetooth esta ligada."),
            actions: [
              TextButton(
                child: Text("Reniciar Aplicação"),
                onPressed: () {
                  exit(0);
                },
              ),
            ],
          );
        },
      );

      return;
    }

    setState(() {
      currentDevice = obdFound;
    });

    Stream<ConnectionStateUpdate> device =
        await bluetoothManager.connect(obdFound);

    setState(() {
      connectionState = device.asBroadcastStream();
    });

    bluetoothManager.populateCharacteristic(characteristicId, serviceId);
    await bluetoothManager.send(bluetoothManager.convertToBinary("AT E0"));
    await bluetoothManager.send(bluetoothManager.convertToBinary("AT L0"));
    await bluetoothManager.send(bluetoothManager.convertToBinary("AT ST 7D"));
    await bluetoothManager.send(bluetoothManager.convertToBinary("AT SP 0"));

    Stream<List<int>> listener = await bluetoothManager.registerListener();

    Stream<List<int>> coolantListener =
        await bluetoothManager.registerListener();

    Stream<String> rpmDataStream =
        StreamManager.convertAndFilterStreamToRPM(listener);

    Stream<String> coolantDataStream =
        StreamManager.convertAndFilterStreamToCoolant(coolantListener);

    setState(() {
      dataStream = rpmDataStream;
      coolantStream = coolantDataStream;

      isBluetoothConnected = 'connected $coolantDataStream';
    });

    while (true) {
      await Future.delayed(const Duration(milliseconds: 500));
      await bluetoothManager.send(bluetoothManager.convertToBinary("01 0C"));
      await Future.delayed(const Duration(milliseconds: 500));
      await bluetoothManager.send(bluetoothManager.convertToBinary("01 05"));
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _key,
      body: SafeArea(
        left: false,
        bottom: false,
        right: false,
        top: true,
        child: Column(
          children: [
            Align(
              alignment: Alignment.center,
              child: Container(
                margin: EdgeInsetsDirectional.only(
                    start: Scale.scaleWidth(context, 0),
                    top: Scale.scaleHeight(context, 10),
                    bottom: Scale.scaleHeight(context, 15),
                    end: Scale.scaleWidth(context, 0)),
                child: Column(
                  children: [
                    SvgPicture.asset(
                      'assets/images/shell.svg',
                      width: Scale.scaleWidth(context, 30),
                      height: Scale.scaleHeight(context, 30),
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Center(
                          child: Text("Shell",
                              style: TextStyle(
                                fontFamily: 'FuturaBold',
                                fontWeight: FontWeight.w700,
                                fontSize: Scale.scaleWidth(context, 20),
                                color: Color.fromARGB(255, 218, 41, 18),
                              )),
                        ),
                        Center(
                          child: Text("PowerSync",
                              style: TextStyle(
                                  fontFamily: 'FuturaCondensed',
                                  fontWeight: FontWeight.w500,
                                  color: Color.fromARGB(255, 255, 205, 0),
                                  fontSize: Scale.scaleWidth(context, 21.2))),
                        )
                      ],
                    )
                  ],
                ),
              ),
            ),
            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                CarInfo(
                    connectionState: connectionState,
                    dataStream: dataStream,
                    bluetoothManager: bluetoothManager,
                    coolantStream: coolantStream),
                LocInfo(),
                WidgetCarousel(widgets: [
                  DiagnosisInfo(connectionState: connectionState),
                  DiagnosisInfo(connectionState: connectionState)
                ]),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
