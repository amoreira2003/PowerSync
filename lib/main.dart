import 'package:flutter/material.dart';
import 'package:flutter_reactive_ble/flutter_reactive_ble.dart';
import 'package:intl/intl.dart';
import 'package:raizen_obd/components/SmallInfoBlock.dart';
import 'package:raizen_obd/methods/BluetoothManager.dart';
import 'package:raizen_obd/methods/PermissionHandler.dart';
import 'components/BigInfoBlock.dart';
import 'components/InfoHeader.dart';
import 'package:flutter/services.dart';
import 'package:google_fonts/google_fonts.dart';
import 'components/DiagnosticoInfo.dart';
import 'package:permission_handler/permission_handler.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatefulWidget {
  const MainApp({super.key});

  @override
  State<MainApp> createState() => _MainAppState();
}

class _MainAppState extends State<MainApp> {
  int kmRodado = 0;
  double gasolina = 0;

  bool combustivel = true;
  bool motor = true;
  bool cambio = true;
  bool freios = true;
  bool cabine = true;
  bool eletrico = true;
  String currentTime = '';

  @override
  Widget build(BuildContext context) {
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitUp,
      DeviceOrientation.portraitDown,
    ]);

// Request Bluetooth permissions
    PermissionHandler permissionHandler = PermissionHandler();
    BluetoothManager bluetoothManager = BluetoothManager(permissionHandler);

    String characteristicId = "0000fff1-0000-1000-8000-00805f9b34fb";
    String serviceId = "0000fff0-0000-1000-8000-00805f9b34fb";

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Column(
          children: [
            Container(
              margin: const EdgeInsetsDirectional.all(37),
              child: const Icon(Icons.menu, color: Colors.black, size: 25),
            ),
            Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  BigInfoBlock(
                    child: Column(
                      children: [
                        const InfoHeader(),
                        SizedBox(
                            width: 276,
                            height: 137,
                            child: Image.asset("assets/images/Car.png")),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Container(
                              margin: const EdgeInsets.only(left: 25),
                              child: Align(
                                alignment: Alignment.centerLeft,
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  children: [
                                    Text("Hyundai",
                                        style: GoogleFonts.barlow(
                                            fontSize: 10,
                                            fontWeight: FontWeight.normal,
                                            color: const Color(0xFF787878))),
                                    Text("HB 20",
                                        style: GoogleFonts.barlow(
                                            fontSize: 20,
                                            fontWeight: FontWeight.w600,
                                            color: const Color(0xFF2C2B34))),
                                    Text("2022 Platinum Plus 1.0 TGDI AT",
                                        style: GoogleFonts.barlow(
                                            fontSize: 10,
                                            fontWeight: FontWeight.normal,
                                            color: const Color(0xFF787878))),
                                  ],
                                ),
                              ),
                            ),
                            Container(
                              margin:
                                  const EdgeInsets.only(left: 25, right: 25),
                              child: Align(
                                alignment: Alignment.centerRight,
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Container(
                                      margin: const EdgeInsets.only(
                                          bottom: 6, right: 5.7),
                                      child: Row(
                                        children: [
                                          Container(
                                            width: 10.3,
                                            height: 10.5,
                                            margin: const EdgeInsets.only(
                                                right: 5.7),
                                            child: Image.asset(
                                                "assets/images/Arrow.png"),
                                          ),
                                          Text("$kmRodado KM",
                                              style: GoogleFonts.barlow(
                                                  fontSize: 10,
                                                  fontWeight: FontWeight.normal,
                                                  color:
                                                      const Color(0xFF787878))),
                                        ],
                                      ),
                                    ),
                                    Container(
                                      child: Row(
                                        children: [
                                          Container(
                                            width: 10.3,
                                            height: 10.5,
                                            margin: const EdgeInsets.only(
                                                right: 5.7),
                                            child: Image.asset(
                                                "assets/images/Pump.png"),
                                          ),
                                          Text("$gasolina L",
                                              style: GoogleFonts.barlow(
                                                  fontSize: 10,
                                                  fontWeight: FontWeight.normal,
                                                  color:
                                                      const Color(0xFF787878))),
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
                  SmallInfoBlock(
                    childFirst: Container(
                      margin: const EdgeInsets.only(
                        left: 20,
                        top: 16,
                      ),
                      child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Container(
                                margin: const EdgeInsets.only(bottom: 10),
                                child: Text("Localização",
                                    style: GoogleFonts.barlow(
                                        fontSize: 12,
                                        fontWeight: FontWeight.normal,
                                        color: const Color(0xFF787878)))),
                            Container(
                              margin: const EdgeInsets.only(bottom: 10),
                              child: Text("Av Lins De Vasconselos, 1222",
                                  style: GoogleFonts.barlow(
                                      fontSize: 20,
                                      fontWeight: FontWeight.w600,
                                      color: const Color(0xFF2C2B34))),
                            ),
                            Container(
                              margin: const EdgeInsets.only(bottom: 10),
                              child: StreamBuilder(
                                  stream: Stream.periodic(
                                      const Duration(seconds: 1)),
                                  builder: (context, snapshot) {
                                    String currentTime = DateFormat('HH:mm')
                                        .format(DateTime.now());
                                    return Text("Hoje, $currentTime",
                                        style: GoogleFonts.barlow(
                                            fontSize: 12,
                                            fontWeight: FontWeight.normal,
                                            color: const Color(0xFF787878)));
                                  }),
                            ),
                          ]),
                    ),
                    childSecond: Container(),
                  ),
                  Container(
                    margin: const EdgeInsets.only(bottom: 19),
                    width: 319,
                    height: 234,
                    decoration: const BoxDecoration(
                      image: DecorationImage(
                          fit: BoxFit.cover,
                          image: AssetImage(
                            "assets/images/back.png",
                          )),
                      borderRadius: BorderRadius.all(Radius.circular(20)),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Container(
                          margin: const EdgeInsets.only(top: 21),
                          child: Text("Diagnóstico",
                              style: GoogleFonts.barlow(
                                  fontSize: 12,
                                  fontWeight: FontWeight.normal,
                                  color: const Color.fromARGB(
                                      255, 212, 212, 212))),
                        ),
                        Container(
                          margin: EdgeInsets.only(top: 15),
                          child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceAround,
                              children: [
                                Column(
                                  children: [
                                    Container(
                                      margin: const EdgeInsets.only(top: 24),
                                      child: DiagnosticoInfo(
                                          displayName: "Combustível",
                                          value: combustivel),
                                    ),
                                    Container(
                                      margin: const EdgeInsets.only(top: 24),
                                      child: DiagnosticoInfo(
                                          displayName: "Motor", value: motor),
                                    ),
                                    Container(
                                      margin: const EdgeInsets.only(top: 24),
                                      child: DiagnosticoInfo(
                                          displayName: "Câmbio", value: cambio),
                                    ),
                                  ],
                                ),
                                Column(
                                  children: [
                                    Container(
                                      margin: const EdgeInsets.only(
                                          top: 24, left: 15),
                                      child: DiagnosticoInfo(
                                          displayName: "Freios", value: freios),
                                    ),
                                    Container(
                                      margin: const EdgeInsets.only(top: 24),
                                      child: DiagnosticoInfo(
                                          displayName: "Cabine", value: cabine),
                                    ),
                                    Container(
                                      margin: const EdgeInsets.only(top: 24),
                                      child: DiagnosticoInfo(
                                          displayName: "Elétrico",
                                          value: eletrico),
                                    ),
                                  ],
                                )
                              ]),
                        )
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
