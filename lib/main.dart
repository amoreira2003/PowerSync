import 'package:flutter/material.dart';
import 'package:flutter_reactive_ble/flutter_reactive_ble.dart';
import 'package:intl/intl.dart';
import 'package:raizen_obd/components/BluetoothDebugPage.dart';
import 'package:raizen_obd/components/SmallInfoBlock.dart';
import 'package:raizen_obd/methods/BluetoothManager.dart';
import 'package:raizen_obd/methods/PermissionHandler.dart';
import 'package:raizen_obd/methods/Scale.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'components/BigInfoBlock.dart';
import 'components/InfoHeader.dart';
import 'package:flutter/services.dart';
import 'package:google_fonts/google_fonts.dart';
import 'components/DiagnosticoInfo.dart';
import 'package:permission_handler/permission_handler.dart';

void main() {
  runApp(const MaterialApp(debugShowCheckedModeBanner: false, home: MainApp()));
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

    WebViewController controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..loadRequest(Uri.parse("https://raizen.alxsmooth.dev/"));

    return Scaffold(
      body: Column(
        children: [
          Container(
            margin: EdgeInsetsDirectional.symmetric(
                horizontal: Scale.scaleWidth(context, 37),
                vertical: Scale.scaleHeight(context, 37)),
            child: const Icon(Icons.menu, color: Colors.black, size: 25),
          ),
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              GestureDetector(
                onDoubleTap: () => Navigator.of(context).push(MaterialPageRoute(
                    builder: (context) => const BluetoothDebugPage())),
                child: BigInfoBlock(
                  child: Column(
                    children: [
                      const InfoHeader(),
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
                                  Text("2022 Platinum Plus 1.0 TGDI AT",
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
                                          width:
                                              Scale.scaleWidth(context, 10.3),
                                          height:
                                              Scale.scaleHeight(context, 10.5),
                                          margin: EdgeInsets.only(
                                              right: Scale.scaleWidth(
                                                  context, 5.7)),
                                          child: Image.asset(
                                              "assets/images/Arrow.png"),
                                        ),
                                        Text("$kmRodado KM",
                                            style: GoogleFonts.barlow(
                                                fontSize: Scale.scaleWidth(
                                                    context, 10),
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
                                          width:
                                              Scale.scaleWidth(context, 10.3),
                                          height:
                                              Scale.scaleHeight(context, 10.5),
                                          margin: EdgeInsets.only(
                                              right: Scale.scaleWidth(
                                                  context, 5.7)),
                                          child: Image.asset(
                                              "assets/images/Pump.png"),
                                        ),
                                        Text("$gasolina L",
                                            style: GoogleFonts.barlow(
                                                fontSize: Scale.scaleWidth(
                                                    context, 10),
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
              ),
              SmallInfoBlock(
                  childFirst: GestureDetector(
                    onDoubleTap: () {
                      controller.reload();
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
                              child: Text("Av Lins De Vasconselos, 1222",
                                  style: GoogleFonts.barlow(
                                      fontSize: Scale.scaleWidth(context, 20),
                                      fontWeight: FontWeight.w600,
                                      color: const Color(0xFF2C2B34))),
                            ),
                            Container(
                              margin: EdgeInsets.only(
                                  bottom: Scale.scaleWidth(context, 10)),
                              child: StreamBuilder(
                                  stream: Stream.periodic(
                                      const Duration(seconds: 1)),
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
                      borderRadius: BorderRadius.all(Radius.circular(20)),
                      child: WebViewWidget(controller: controller))),
              Container(
                margin: EdgeInsets.only(bottom: Scale.scaleHeight(context, 19)),
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
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Container(
                      margin:
                          EdgeInsets.only(top: Scale.scaleHeight(context, 21)),
                      child: Text("Diagnóstico",
                          style: GoogleFonts.barlow(
                              fontSize: Scale.scaleWidth(context, 12),
                              fontWeight: FontWeight.normal,
                              color: const Color.fromARGB(255, 212, 212, 212))),
                    ),
                    Container(
                      margin:
                          EdgeInsets.only(top: Scale.scaleWidth(context, 15)),
                      child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceAround,
                          children: [
                            Column(
                              children: [
                                Container(
                                  margin: EdgeInsets.only(
                                      top: Scale.scaleHeight(context, 24)),
                                  child: DiagnosticoInfo(
                                      displayName: "Combustível",
                                      value: combustivel),
                                ),
                                Container(
                                  margin: EdgeInsets.only(
                                      top: Scale.scaleHeight(context, 24)),
                                  child: DiagnosticoInfo(
                                      displayName: "Motor", value: motor),
                                ),
                                Container(
                                  margin: EdgeInsets.only(
                                      top: Scale.scaleHeight(context, 24)),
                                  child: DiagnosticoInfo(
                                      displayName: "Câmbio", value: cambio),
                                ),
                              ],
                            ),
                            Column(
                              children: [
                                Container(
                                  margin: EdgeInsets.only(
                                      top: Scale.scaleHeight(context, 24),
                                      left: Scale.scaleWidth(context, 15)),
                                  child: DiagnosticoInfo(
                                      displayName: "Freios", value: freios),
                                ),
                                Container(
                                  margin: EdgeInsets.only(
                                      top: Scale.scaleHeight(context, 24)),
                                  child: DiagnosticoInfo(
                                      displayName: "Cabine", value: cabine),
                                ),
                                Container(
                                  margin: EdgeInsets.only(
                                      top: Scale.scaleHeight(context, 24)),
                                  child: DiagnosticoInfo(
                                      displayName: "Elétrico", value: eletrico),
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
        ],
      ),
    );
  }
}
