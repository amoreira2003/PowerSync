import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_reactive_ble/flutter_reactive_ble.dart';
import 'package:flutter_svg/svg.dart';
import 'package:geocoding/geocoding.dart';
import 'package:geolocator/geolocator.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:intl/intl.dart';
import 'package:raizen_obd/components/BigInfoBlock.dart';
import 'package:raizen_obd/components/BluetoothDebugPage.dart';
import 'package:raizen_obd/components/SmallInfoBlock.dart';
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

  final int kmRodado = 0;
  final double gasolina = 0;
  final bool combustivel = true;
  final bool motor = true;
  final bool cambio = true;
  final bool freios = true;
  final bool cabine = true;
  final bool eletrico = true;

  PermissionHandler permissionHandler = PermissionHandler();
  late BluetoothManager bluetoothManager;

  String characteristicId = "0000fff1-0000-1000-8000-00805f9b34fb";
  String serviceId = "0000fff0-0000-1000-8000-00805f9b34fb";

  late WebViewController controller;

  @override
  void initState() {
    super.initState();

    bluetoothManager = BluetoothManager(permissionHandler);
    controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..loadRequest(Uri.parse("https://raizen.alxsmooth.dev/"));

    bluetoothConnect();
  }

  void bluetoothConnect() async {
    await Future.delayed(const Duration(seconds: 4));
    print("Trying to connect");
    permissionHandler.checkPermission();

    DiscoveredDevice obdFound = await bluetoothManager.recon(permissionHandler);

    setState(() {
      currentDevice = obdFound;
    });

    Stream<ConnectionStateUpdate> device =
        await bluetoothManager.connect(obdFound);

    setState(() {
      connectionState = device.asBroadcastStream();
    });

    bluetoothManager.populateCharacteristic(characteristicId, serviceId);

    print("Sending AT E0");
    await bluetoothManager.send(bluetoothManager.convertToBinary("AT E0"));

    print("Sent AT E0");

    print("Sending AT L0");
    await bluetoothManager.send(bluetoothManager.convertToBinary("AT L0"));

    print("Sent AT L0");
    print("Sending AT ST 7D");
    await bluetoothManager.send(bluetoothManager.convertToBinary("AT ST 7D"));

    print("Sent AT ST 7D");
    print("Sending AT SP 0");
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
      drawer: Drawer(
        child: Container(
          margin: EdgeInsets.only(
            top: Scale.scaleHeight(context, 50),
          ),
          child: Column(
            children: [
              Text('$isBluetoothConnected Connection'),
              ElevatedButton(
                  child: const Text("Bluetooth Debug"),
                  onPressed: () {
                    Navigator.of(context).push(MaterialPageRoute(
                        builder: (context) => const BluetoothDebugPage()));
                  }),
              ElevatedButton(
                  child: const Text("Formulario"),
                  onPressed: () {
                    Navigator.of(context).push(MaterialPageRoute(
                        builder: (context) => const ShellForm()));
                  }),
              ElevatedButton(
                  child: const Text("OBD Chat"),
                  onPressed: () {
                    Navigator.of(context).push(MaterialPageRoute(
                        builder: (context) => const BluetoothDebugPage()));
                  })
            ],
          ),
        ),
      ),
      body: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Align(
                alignment: Alignment.centerLeft,
                child: Container(
                  margin: EdgeInsetsDirectional.only(
                      start: Scale.scaleWidth(context, 10),
                      top: Scale.scaleHeight(context, 30),
                      bottom: Scale.scaleHeight(context, 27),
                      end: Scale.scaleWidth(context, 67)),
                  child: Container(
                    margin: EdgeInsetsDirectional.only(
                        start: Scale.scaleWidth(context, 10)),
                    child: IconButton(
                      icon:
                          const Icon(Icons.menu, color: Colors.black, size: 25),
                      onPressed: () => _key.currentState!.openDrawer(),
                    ),
                  ),
                ),
              ),
              Container(
                width: Scale.scaleWidth(context, 114),
                height: Scale.scaleHeight(context, 50),
                margin: EdgeInsets.only(top: Scale.scaleHeight(context, 35)),
                child: Column(
                  children: [
                    Image.asset(
                      'assets/images/shell.png',
                    ),
                    Image.asset(
                      'assets/images/textLogo.png',
                    )
                  ],
                ),
              ),
            ],
          ),
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              GestureDetector(
                onDoubleTap: () async {
                  controller.reload();
                },
                child: BigInfoBlock(
                  child: Column(
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                            margin: EdgeInsets.only(
                                left: Scale.scaleWidth(context, 25),
                                top: Scale.scaleHeight(context, 17)),
                            child: Text("Seu Carro",
                                style: GoogleFonts.barlow(
                                    fontSize: Scale.scaleWidth(context, 12),
                                    fontWeight: FontWeight.normal,
                                    color: const Color(0xFF787878))),
                          ),
                          StreamBuilder<ConnectionStateUpdate>(
                              stream: connectionState,
                              builder: (context, snapshot) {
                                if (snapshot.hasData) {
                                  if (snapshot.data!.connectionState ==
                                      DeviceConnectionState.connected) {
                                    return Container(
                                      margin: EdgeInsets.only(
                                          top: Scale.scaleHeight(context, 17)),
                                      child: SvgPicture.asset(
                                          'assets/images/Wifi.svg',
                                          colorFilter: const ColorFilter.mode(
                                              Color.fromARGB(255, 34, 201, 30),
                                              BlendMode.srcIn),
                                          semanticsLabel: 'A red up arrow'),
                                    );
                                  }
                                }

                                return Container(
                                  margin: EdgeInsets.only(
                                      top: Scale.scaleHeight(context, 17)),
                                  child: SvgPicture.asset(
                                      'assets/images/Wifi.svg',
                                      colorFilter: const ColorFilter.mode(
                                          Color.fromARGB(255, 127, 127, 127),
                                          BlendMode.srcIn),
                                      semanticsLabel: 'A red up arrow'),
                                );
                              }),
                          Container(
                            margin: EdgeInsets.only(
                                right: Scale.scaleWidth(context, 18),
                                top: Scale.scaleHeight(context, 18)),
                            child: Text("GIS4820",
                                style: GoogleFonts.barlow(
                                    fontSize: Scale.scaleWidth(context, 12),
                                    fontWeight: FontWeight.normal,
                                    color: const Color(0xFF787878))),
                          ),
                        ],
                      ),
                      SizedBox(
                          width: Scale.scaleWidth(context, 276),
                          height: Scale.scaleHeight(context, 137),
                          child: Image.asset("assets/images/Car.png")),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Container(
                            margin: EdgeInsets.only(
                                left: Scale.scaleWidth(context, 25)),
                            child: Align(
                              alignment: Alignment.centerLeft,
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: [
                                  Text("Hyundai",
                                      style: GoogleFonts.barlow(
                                          fontSize:
                                              Scale.scaleWidth(context, 10),
                                          fontWeight: FontWeight.normal,
                                          color: const Color(0xFF787878))),
                                  Text("HB 20",
                                      style: GoogleFonts.barlow(
                                          fontSize:
                                              Scale.scaleWidth(context, 20),
                                          fontWeight: FontWeight.w600,
                                          color: const Color(0xFF2C2B34))),
                                  Text("2017 Ocean 1.6 A/T",
                                      style: GoogleFonts.barlow(
                                          fontSize:
                                              Scale.scaleWidth(context, 10),
                                          fontWeight: FontWeight.normal,
                                          color: const Color(0xFF787878))),
                                ],
                              ),
                            ),
                          ),
                          Container(
                            margin: EdgeInsets.only(
                                left: Scale.scaleWidth(context, 25),
                                right: Scale.scaleWidth(context, 25)),
                            child: Align(
                              alignment: Alignment.centerRight,
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  Container(
                                    margin: EdgeInsets.only(
                                        bottom: Scale.scaleHeight(context, 6),
                                        right: Scale.scaleWidth(context, 5.7)),
                                    child: Row(
                                      children: [
                                        Container(
                                          width: Scale.scaleWidth(context, 12),
                                          height:
                                              Scale.scaleHeight(context, 12),
                                          margin: EdgeInsets.only(
                                              right: Scale.scaleWidth(
                                                  context, 5.7)),
                                          child: SvgPicture.asset(
                                              'assets/images/Arrow.svg',
                                              colorFilter:
                                                  const ColorFilter.mode(
                                                      Color.fromARGB(
                                                          255, 120, 120, 120),
                                                      BlendMode.srcIn),
                                              semanticsLabel: 'A red up arrow'),
                                        ),
                                        StreamBuilder<String>(
                                            stream: dataStream,
                                            builder: (context, snapshot) {
                                              print("Printing Snapshot");
                                              print(snapshot);

                                              if (!snapshot.hasData) {
                                                return Text("0 RPM",
                                                    style: GoogleFonts.barlow(
                                                        fontSize:
                                                            Scale.scaleWidth(
                                                                context, 12),
                                                        fontWeight:
                                                            FontWeight.normal,
                                                        color: const Color(
                                                            0xFF787878)));
                                              }

                                              return Text(
                                                  "${bluetoothManager.convertRPM(snapshot.data!)} RPM",
                                                  style: GoogleFonts.barlow(
                                                      fontSize:
                                                          Scale.scaleWidth(
                                                              context, 12),
                                                      fontWeight:
                                                          FontWeight.normal,
                                                      color: const Color(
                                                          0xFF787878)));
                                            }),
                                      ],
                                    ),
                                  ),
                                  Container(
                                    child: Row(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.center,
                                      mainAxisAlignment:
                                          MainAxisAlignment.center,
                                      children: [
                                        Container(
                                          width: Scale.scaleWidth(context, 12),
                                          height:
                                              Scale.scaleHeight(context, 12),
                                          margin: EdgeInsets.only(
                                              right: Scale.scaleWidth(
                                                  context, 5.7)),
                                          child: SvgPicture.asset(
                                              'assets/images/Pump.svg',
                                              colorFilter:
                                                  const ColorFilter.mode(
                                                      Color.fromARGB(
                                                          255, 120, 120, 120),
                                                      BlendMode.srcIn),
                                              semanticsLabel: 'A red up arrow'),
                                        ),
                                        StreamBuilder<String>(
                                            stream: coolantStream,
                                            builder: (context, snapshot) {
                                              print("Printing Snapshot");
                                              print(snapshot);

                                              if (!snapshot.hasData) {
                                                return Text("0 ºC",
                                                    style: GoogleFonts.barlow(
                                                        fontSize:
                                                            Scale.scaleWidth(
                                                                context, 12),
                                                        fontWeight:
                                                            FontWeight.normal,
                                                        color: const Color(
                                                            0xFF787878)));
                                              }

                                              print("Converting Temperature");
                                              print(snapshot.data!);

                                              return Text(
                                                  "${bluetoothManager.convertTemperature(snapshot.data!)} ºC",
                                                  style: GoogleFonts.barlow(
                                                      fontSize:
                                                          Scale.scaleWidth(
                                                              context, 12),
                                                      fontWeight:
                                                          FontWeight.normal,
                                                      color: const Color(
                                                          0xFF787878)));
                                            }),
                                      ],
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
              SmallInfoBlock(
                childFirst: GestureDetector(
                  onDoubleTap: () {
                    Navigator.of(context).push(MaterialPageRoute(
                        builder: (context) => const MapFullScreen()));
                  },
                  child: Container(
                    margin: EdgeInsets.only(
                      left: Scale.scaleWidth(context, 20),
                      top: Scale.scaleHeight(context, 16),
                    ),
                    child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                              margin: EdgeInsets.only(
                                  bottom: Scale.scaleHeight(context, 10)),
                              child: Text("Localização",
                                  style: GoogleFonts.barlow(
                                      fontSize: Scale.scaleWidth(context, 12),
                                      fontWeight: FontWeight.normal,
                                      color: const Color(0xFF787878)))),
                          Container(
                            margin: EdgeInsets.only(
                                bottom: Scale.scaleHeight(context, 10)),
                            child: StreamBuilder(
                                stream:
                                    Stream.periodic(const Duration(seconds: 5)),
                                builder: (context, snapshot) {
                                  final Future<Position> position =
                                      Geolocator.getCurrentPosition(
                                          desiredAccuracy:
                                              LocationAccuracy.high);

                                  return FutureBuilder<String>(
                                      future: getAddressFromPosition(position),
                                      builder: (context, snapshot) {
                                        return Text("${snapshot.data}",
                                            style: GoogleFonts.barlow(
                                                fontSize: Scale.scaleWidth(
                                                    context, 17),
                                                fontWeight: FontWeight.w600,
                                                color:
                                                    const Color(0xFF2C2B34)));
                                      });
                                }),
                          ),
                          Container(
                            margin: EdgeInsets.only(
                                bottom: Scale.scaleWidth(context, 10)),
                            child: StreamBuilder(
                                stream:
                                    Stream.periodic(const Duration(seconds: 1)),
                                builder: (context, snapshot) {
                                  String currentTime = DateFormat('HH:mm')
                                      .format(DateTime.now());

                                  return Text("Hoje, $currentTime",
                                      style: GoogleFonts.barlow(
                                          fontSize:
                                              Scale.scaleWidth(context, 12),
                                          fontWeight: FontWeight.normal,
                                          color: const Color(0xFF787878)));
                                }),
                          ),
                        ]),
                  ),
                ),
                childSecond: ClipRRect(
                    borderRadius: const BorderRadius.all(Radius.circular(20)),
                    child: MapShell()),
              ),
              GestureDetector(
                onLongPress: () {
                  print("Long Pressed");
                  _showDialog(context);
                },
                child: Container(
                  margin:
                      EdgeInsets.only(bottom: Scale.scaleHeight(context, 19)),
                  width: Scale.scaleWidth(context, 319),
                  height: Scale.scaleHeight(context, 234),
                  decoration: const BoxDecoration(
                    image: DecorationImage(
                        fit: BoxFit.cover,
                        image: AssetImage(
                          "assets/images/back.png",
                        )),
                    borderRadius: BorderRadius.all(Radius.circular(20)),
                  ),
                  child: Container(
                    margin:
                        EdgeInsets.only(top: Scale.scaleHeight(context, 21)),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Container(
                          margin: EdgeInsets.only(
                              left: Scale.scaleWidth(context, 24)),
                          child: Text("Diagnóstico",
                              style: GoogleFonts.openSans(
                                  fontSize: Scale.scaleWidth(context, 12),
                                  fontWeight: FontWeight.normal,
                                  color: const Color.fromARGB(
                                      255, 212, 212, 212))),
                        ),
                        Container(
                          margin: EdgeInsets.only(
                              top: Scale.scaleHeight(context, 23)),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                            children: [
                              Column(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceEvenly,
                                children: [
                                  Container(
                                    margin: EdgeInsets.only(
                                        top: Scale.scaleHeight(context, 0),
                                        bottom: Scale.scaleHeight(context, 20)),
                                    child: Text("Motor      ",
                                        style: GoogleFonts.openSans(
                                            fontSize:
                                                Scale.scaleWidth(context, 18),
                                            fontWeight: FontWeight.w700,
                                            color: const Color(0xFFFFFFFF))),
                                  ),
                                  Container(
                                    margin: EdgeInsets.only(
                                        top: Scale.scaleHeight(context, 10),
                                        bottom: Scale.scaleHeight(context, 20)),
                                    child: Text("Freios      ",
                                        style: GoogleFonts.openSans(
                                            fontSize:
                                                Scale.scaleWidth(context, 18),
                                            fontWeight: FontWeight.w700,
                                            color: const Color(0xFFFFFFFF))),
                                  ),
                                  Container(
                                    margin: EdgeInsets.only(
                                        top: Scale.scaleHeight(context, 10),
                                        bottom: Scale.scaleHeight(context, 20)),
                                    child: Text("Radiador ",
                                        style: GoogleFonts.openSans(
                                            fontSize:
                                                Scale.scaleWidth(context, 18),
                                            fontWeight: FontWeight.w700,
                                            color: const Color(0xFFFFFFFF))),
                                  ),
                                ],
                              ),
                              Column(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceEvenly,
                                children: [
                                  StreamBuilder<ConnectionStateUpdate>(
                                      stream: connectionState,
                                      builder: (context, snapshot) {
                                        if (snapshot.hasData) {
                                          if (snapshot.data!.connectionState ==
                                              DeviceConnectionState.connected) {
                                            return Container(
                                              margin: EdgeInsets.only(
                                                  top: Scale.scaleHeight(
                                                      context, 0),
                                                  bottom: Scale.scaleHeight(
                                                      context, 20)),
                                              width:
                                                  Scale.scaleWidth(context, 20),
                                              height: Scale.scaleHeight(
                                                  context, 20),
                                              child: SvgPicture.asset(
                                                  'assets/images/Check.svg',
                                                  colorFilter:
                                                      const ColorFilter.mode(
                                                          Color.fromARGB(
                                                              255, 34, 201, 30),
                                                          BlendMode.srcIn),
                                                  semanticsLabel:
                                                      'A red up arrow'),
                                            );
                                          }
                                        }
                                        return Container(
                                          margin: EdgeInsets.only(
                                              top:
                                                  Scale.scaleHeight(context, 0),
                                              bottom: Scale.scaleHeight(
                                                  context, 20)),
                                          width: Scale.scaleWidth(context, 20),
                                          height:
                                              Scale.scaleHeight(context, 20),
                                          child: Image.asset(
                                              'assets/images/Loading.gif'),
                                        );
                                      }),
                                  StreamBuilder<ConnectionStateUpdate>(
                                      stream: connectionState,
                                      builder: (context, snapshot) {
                                        if (snapshot.hasData) {
                                          if (snapshot.data!.connectionState ==
                                              DeviceConnectionState.connected) {
                                            return Container(
                                              margin: EdgeInsets.only(
                                                  top: Scale.scaleHeight(
                                                      context, 10),
                                                  bottom: Scale.scaleHeight(
                                                      context, 20)),
                                              width:
                                                  Scale.scaleWidth(context, 20),
                                              height: Scale.scaleHeight(
                                                  context, 20),
                                              child: SvgPicture.asset(
                                                  'assets/images/Check.svg',
                                                  colorFilter:
                                                      const ColorFilter.mode(
                                                          Color.fromARGB(
                                                              255, 34, 201, 30),
                                                          BlendMode.srcIn),
                                                  semanticsLabel:
                                                      'A red up arrow'),
                                            );
                                          }
                                        }
                                        return Container(
                                          margin: EdgeInsets.only(
                                              top: Scale.scaleHeight(
                                                  context, 10),
                                              bottom: Scale.scaleHeight(
                                                  context, 20)),
                                          width: Scale.scaleWidth(context, 20),
                                          height:
                                              Scale.scaleHeight(context, 20),
                                          child: Image.asset(
                                              'assets/images/Loading.gif'),
                                        );
                                      }),
                                  StreamBuilder<ConnectionStateUpdate>(
                                      stream: connectionState,
                                      builder: (context, snapshot) {
                                        if (snapshot.hasData) {
                                          if (snapshot.data!.connectionState ==
                                              DeviceConnectionState.connected) {
                                            return Container(
                                              margin: EdgeInsets.only(
                                                  top: Scale.scaleHeight(
                                                      context, 14),
                                                  bottom: Scale.scaleHeight(
                                                      context, 20)),
                                              width:
                                                  Scale.scaleWidth(context, 20),
                                              height: Scale.scaleHeight(
                                                  context, 20),
                                              child: SvgPicture.asset(
                                                  'assets/images/Check.svg',
                                                  colorFilter:
                                                      const ColorFilter.mode(
                                                          Color.fromARGB(
                                                              255, 34, 201, 30),
                                                          BlendMode.srcIn),
                                                  semanticsLabel:
                                                      'A red up arrow'),
                                            );
                                          }
                                        }
                                        return Container(
                                          margin: EdgeInsets.only(
                                              top: Scale.scaleHeight(
                                                  context, 14),
                                              bottom: Scale.scaleHeight(
                                                  context, 20)),
                                          width: Scale.scaleWidth(context, 20),
                                          height:
                                              Scale.scaleHeight(context, 20),
                                          child: Image.asset(
                                              'assets/images/Loading.gif'),
                                        );
                                      })
                                ],
                              ),
                              Column(
                                children: [
                                  Container(
                                    margin: EdgeInsets.only(
                                        top: Scale.scaleHeight(context, 0),
                                        bottom: Scale.scaleHeight(context, 20)),
                                    child: Text("Elétrico",
                                        style: GoogleFonts.openSans(
                                            fontSize:
                                                Scale.scaleWidth(context, 18),
                                            fontWeight: FontWeight.w700,
                                            color: const Color(0xFFFFFFFF))),
                                  ),
                                  Container(
                                    margin: EdgeInsets.only(
                                        top: Scale.scaleHeight(context, 10),
                                        bottom: Scale.scaleHeight(context, 20)),
                                    child: Text("Airbag",
                                        style: GoogleFonts.openSans(
                                            fontSize:
                                                Scale.scaleWidth(context, 18),
                                            fontWeight: FontWeight.w700,
                                            color: const Color(0xFFFFFFFF))),
                                  ),
                                  Container(
                                    margin: EdgeInsets.only(
                                        top: Scale.scaleHeight(context, 10),
                                        bottom: Scale.scaleHeight(context, 20)),
                                    child: Text("Tração",
                                        style: GoogleFonts.openSans(
                                            fontSize:
                                                Scale.scaleWidth(context, 18),
                                            fontWeight: FontWeight.w700,
                                            color: const Color(0xFFFFFFFF))),
                                  ),
                                ],
                              ),
                              Column(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceEvenly,
                                children: [
                                  StreamBuilder<ConnectionStateUpdate>(
                                      stream: connectionState,
                                      builder: (context, snapshot) {
                                        if (snapshot.hasData) {
                                          if (snapshot.data!.connectionState ==
                                              DeviceConnectionState.connected) {
                                            return Container(
                                              margin: EdgeInsets.only(
                                                  top: Scale.scaleHeight(
                                                      context, 0),
                                                  bottom: Scale.scaleHeight(
                                                      context, 20)),
                                              width:
                                                  Scale.scaleWidth(context, 20),
                                              height: Scale.scaleHeight(
                                                  context, 20),
                                              child: SvgPicture.asset(
                                                  'assets/images/Check.svg',
                                                  colorFilter:
                                                      const ColorFilter.mode(
                                                          Color.fromARGB(
                                                              255, 34, 201, 30),
                                                          BlendMode.srcIn),
                                                  semanticsLabel:
                                                      'A red up arrow'),
                                            );
                                          }
                                        }
                                        return Container(
                                          margin: EdgeInsets.only(
                                              top:
                                                  Scale.scaleHeight(context, 0),
                                              bottom: Scale.scaleHeight(
                                                  context, 20)),
                                          width: Scale.scaleWidth(context, 20),
                                          height:
                                              Scale.scaleHeight(context, 20),
                                          child: Image.asset(
                                              'assets/images/Loading.gif'),
                                        );
                                      }),
                                  StreamBuilder<ConnectionStateUpdate>(
                                      stream: connectionState,
                                      builder: (context, snapshot) {
                                        if (snapshot.hasData) {
                                          if (snapshot.data!.connectionState ==
                                              DeviceConnectionState.connected) {
                                            return Container(
                                              margin: EdgeInsets.only(
                                                  top: Scale.scaleHeight(
                                                      context, 10),
                                                  bottom: Scale.scaleHeight(
                                                      context, 20)),
                                              width:
                                                  Scale.scaleWidth(context, 20),
                                              height: Scale.scaleHeight(
                                                  context, 20),
                                              child: SvgPicture.asset(
                                                  'assets/images/Check.svg',
                                                  colorFilter:
                                                      const ColorFilter.mode(
                                                          Color.fromARGB(
                                                              255, 34, 201, 30),
                                                          BlendMode.srcIn),
                                                  semanticsLabel:
                                                      'A red up arrow'),
                                            );
                                          }
                                        }
                                        return Container(
                                          margin: EdgeInsets.only(
                                              top: Scale.scaleHeight(
                                                  context, 10),
                                              bottom: Scale.scaleHeight(
                                                  context, 20)),
                                          width: Scale.scaleWidth(context, 20),
                                          height:
                                              Scale.scaleHeight(context, 20),
                                          child: Image.asset(
                                              'assets/images/Loading.gif'),
                                        );
                                      }),
                                  StreamBuilder<ConnectionStateUpdate>(
                                      stream: connectionState,
                                      builder: (context, snapshot) {
                                        print("Snapshot of Connection State");
                                        print(snapshot);
                                        if (snapshot.hasData) {
                                          if (snapshot.data!.connectionState ==
                                              DeviceConnectionState.connected) {
                                            return Container(
                                              margin: EdgeInsets.only(
                                                  top: Scale.scaleHeight(
                                                      context, 14),
                                                  bottom: Scale.scaleHeight(
                                                      context, 20)),
                                              width:
                                                  Scale.scaleWidth(context, 20),
                                              height: Scale.scaleHeight(
                                                  context, 20),
                                              child: SvgPicture.asset(
                                                  'assets/images/Check.svg',
                                                  colorFilter:
                                                      const ColorFilter.mode(
                                                          Color.fromARGB(
                                                              255, 34, 201, 30),
                                                          BlendMode.srcIn),
                                                  semanticsLabel:
                                                      'A red up arrow'),
                                            );
                                          }
                                        }
                                        return Container(
                                          margin: EdgeInsets.only(
                                              top: Scale.scaleHeight(
                                                  context, 14),
                                              bottom: Scale.scaleHeight(
                                                  context, 20)),
                                          width: Scale.scaleWidth(context, 20),
                                          height:
                                              Scale.scaleHeight(context, 20),
                                          child: Image.asset(
                                              'assets/images/Loading.gif'),
                                        );
                                      })
                                ],
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

Future<String> getAddressFromPosition(Future<Position> pos) async {
  try {
    Position position = await pos;
    List<Placemark> placemarks = await placemarkFromCoordinates(
      position.latitude,
      position.longitude,
    );

    if (placemarks.isNotEmpty) {
      Placemark placemark = placemarks[0];
      String address = '';
      if (placemark.street != null) {
        address += placemark.street! + ', ';
      }
      if (placemark.name != null) {
        address += placemark.name! + ', ';
      }
      if (placemark.subLocality != null) {
        address += placemark.subLocality! + ', ';
      }
      if (placemark.locality != null) {
        address += placemark.locality! + ' ';
      }
      if (placemark.administrativeArea != null) {
        address += placemark.administrativeArea!;
      }

      return address;
    } else {
      return 'Address not found';
    }
  } catch (e) {
    return 'Error: $e';
  }
}

void _showDialog(BuildContext context) {
  showDialog(
    context: context,
    builder: (BuildContext context) {
      return AlertDialog(
        title: const Text("Resetar Diagnóstico?"),
        content: const Text(
            "Ao resetar o diagnóstico, perderá todos os dados e o veículo pode ter sua performance afetada durante a recalibração"),
        actions: <Widget>[
          ElevatedButton(
            style: ElevatedButton.styleFrom(
                backgroundColor: Colors.transparent, elevation: 0),
            child: const Text(
              "Cancelar",
              style: TextStyle(color: Colors.black),
            ),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
          ElevatedButton(
            style: ElevatedButton.styleFrom(
                backgroundColor: const Color.fromARGB(255, 255, 205, 0),
                elevation: 0),
            child: Text(
              "Resetar",
              style: TextStyle(color: Colors.grey[800]),
            ),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
        ],
      );
    },
  );
}
