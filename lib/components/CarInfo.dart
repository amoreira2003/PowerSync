import 'package:flutter/material.dart';
import 'package:flutter_reactive_ble/flutter_reactive_ble.dart';
import 'package:flutter_svg/svg.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:raizen_obd/components/BigInfoBlock.dart';
import 'package:raizen_obd/methods/BluetoothManager.dart';
import 'package:raizen_obd/methods/Scale.dart';
import 'package:web_socket_channel/web_socket_channel.dart';

class CarInfo extends StatelessWidget {
  const CarInfo({
    super.key,
    required this.connectionState,
    required this.dataStream,
    required this.bluetoothManager,
    required this.coolantStream,
  });

  final Stream<ConnectionStateUpdate>? connectionState;
  final Stream<String>? dataStream;
  final BluetoothManager bluetoothManager;
  final Stream<String>? coolantStream;

  @override
  Widget build(BuildContext context) {
    return BigInfoBlock(
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              Container(
                margin: EdgeInsets.only(top: Scale.scaleHeight(context, 17)),
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
                          child: SvgPicture.asset('assets/images/Wifi.svg',
                              colorFilter: const ColorFilter.mode(
                                  Color.fromARGB(255, 34, 201, 30),
                                  BlendMode.srcIn),
                              semanticsLabel: 'A red up arrow'),
                        );
                      }
                    }

                    return Container(
                      margin:
                          EdgeInsets.only(top: Scale.scaleHeight(context, 17)),
                      child: SvgPicture.asset('assets/images/Wifi.svg',
                          colorFilter: const ColorFilter.mode(
                              Color.fromARGB(255, 127, 127, 127),
                              BlendMode.srcIn),
                          semanticsLabel: 'A red up arrow'),
                    );
                  }),
              Container(
                margin: EdgeInsets.only(top: Scale.scaleHeight(context, 18)),
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
                margin: EdgeInsets.only(left: Scale.scaleWidth(context, 25)),
                child: Align(
                  alignment: Alignment.centerLeft,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      Text("Hyundai",
                          style: GoogleFonts.barlow(
                              fontSize: Scale.scaleWidth(context, 10),
                              fontWeight: FontWeight.normal,
                              color: const Color(0xFF787878))),
                      Text("HB 20",
                          style: GoogleFonts.barlow(
                              fontSize: Scale.scaleWidth(context, 20),
                              fontWeight: FontWeight.w600,
                              color: const Color(0xFF2C2B34))),
                      Text("2017 Ocean 1.6 A/T",
                          style: GoogleFonts.barlow(
                              fontSize: Scale.scaleWidth(context, 10),
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
                              height: Scale.scaleHeight(context, 12),
                              margin: EdgeInsets.only(
                                  right: Scale.scaleWidth(context, 5.7)),
                              child: SvgPicture.asset('assets/images/Arrow.svg',
                                  colorFilter: const ColorFilter.mode(
                                      Color.fromARGB(255, 120, 120, 120),
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
                                                Scale.scaleWidth(context, 12),
                                            fontWeight: FontWeight.normal,
                                            color: const Color(0xFF787878)));
                                  }

                                  return Text(
                                      "${bluetoothManager.convertRPM(snapshot.data!)} RPM",
                                      style: GoogleFonts.barlow(
                                          fontSize:
                                              Scale.scaleWidth(context, 12),
                                          fontWeight: FontWeight.normal,
                                          color: const Color(0xFF787878)));
                                }),
                          ],
                        ),
                      ),
                      Container(
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Container(
                              width: Scale.scaleWidth(context, 12),
                              height: Scale.scaleHeight(context, 12),
                              margin: EdgeInsets.only(
                                  right: Scale.scaleWidth(context, 5.7)),
                              child: SvgPicture.asset('assets/images/Pump.svg',
                                  colorFilter: const ColorFilter.mode(
                                      Color.fromARGB(255, 120, 120, 120),
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
                                                Scale.scaleWidth(context, 12),
                                            fontWeight: FontWeight.normal,
                                            color: const Color(0xFF787878)));
                                  }

                                  print("Converting Temperature");
                                  print(snapshot.data!);

                                  return Text(
                                      "${bluetoothManager.convertTemperature(snapshot.data!)} ºC",
                                      style: GoogleFonts.barlow(
                                          fontSize:
                                              Scale.scaleWidth(context, 12),
                                          fontWeight: FontWeight.normal,
                                          color: const Color(0xFF787878)));
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
    );
  }
}