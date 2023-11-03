import 'dart:async';
import 'dart:convert';
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
import 'package:raizen_obd/websocket/components/CarInfoWebsocket.dart';
import 'package:raizen_obd/websocket/components/DiagnosisInfoWebsocket.dart';
import 'package:raizen_obd/websocket/pages/ChatWebsocket.dart';
import 'package:web_socket_channel/web_socket_channel.dart';
import 'package:webview_flutter/webview_flutter.dart';

class AppWebsocket extends StatefulWidget {
  AppWebsocket({
    super.key,
  });

  @override
  State<AppWebsocket> createState() => _AppWebsocketState();
}

class _AppWebsocketState extends State<AppWebsocket> {
  final GlobalKey<ScaffoldState> _key = GlobalKey();

  int rpm = 0;
  int coolant = 0;

  final channel = WebSocketChannel.connect(Uri.parse('ws://192.168.15.4:3100'));

  @override
  void initState() {
    super.initState();
  }

  // Assume that `message` is the JSON string received from the WebSocket

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _key,
      body: SafeArea(
        left: false,
        bottom: false,
        right: false,
        top: true,
        child: StreamBuilder(
            stream: channel.stream,
            builder: (context, snapshot) {
              if (!snapshot.hasData)
                return Center(child: CircularProgressIndicator());

              final data = jsonDecode(snapshot.data.toString());
              dynamic rpm = data['data']['rpm'];
              dynamic coolant = data['data']['coolantTemp'];
              dynamic battery = data['data']['batteryVoltage'];

              bool power = data['data']['codes']['power'];
              bool chassis = data['data']['codes']['chassis'];
              bool body = data['data']['codes']['body'];
              bool network = data['data']['codes']['network'];

              return Column(
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
                                        fontSize:
                                            Scale.scaleWidth(context, 21.2))),
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
                      CarInfoWebsocket(rpm: rpm, coolant: coolant),
                      LocInfo(),
                      GestureDetector(
                        onDoubleTap: () {
                          Navigator.of(context).push(
                            MaterialPageRoute(
                              builder: (context) => ChatWebsocket(
                                  rpm: rpm, coolant: coolant, battery: battery),
                            ),
                          );
                        },
                        child: WidgetCarousel(widgets: [
                          DiagnosisInfoWebsocket(
                            iconPath: 'assets/images/engine.svg',
                            title: 'Unidade de Potência',
                            hasProblem: power,
                          ),
                          DiagnosisInfoWebsocket(
                              iconPath: 'assets/images/car.svg',
                              title: 'Habitáculo',
                              hasProblem: body),
                          DiagnosisInfoWebsocket(
                              iconPath: 'assets/images/cara.svg',
                              title: 'Chassis',
                              hasProblem: chassis),
                          DiagnosisInfoWebsocket(
                              iconPath: 'assets/images/battery.svg',
                              title: 'Sistema Elétrico',
                              hasProblem: network)
                        ]),
                      ),
                    ],
                  ),
                ],
              );
            }),
      ),
    );
  }
}
