import 'package:flutter/material.dart';
import 'package:raizen_obd/components/SmallInfoBlock.dart';
import 'components/BigInfoBlock.dart';
import 'components/InfoHeader.dart';
import 'components/SmallInfoBlock.dart';
import 'package:flutter/services.dart';
import 'package:google_fonts/google_fonts.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitUp,
      DeviceOrientation.portraitDown,
    ]);

    return MaterialApp(
      home: Scaffold(
        body: Column(
          children: [
            Container(
              margin: EdgeInsetsDirectional.all(37),
              child: Row(
                children: [Icon(Icons.menu, color: Colors.black, size: 25)],
              ),
            ),
            Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  BigInfoBlock(
                    child: Column(
                      children: [
                        InfoHeader(),
                        Container(
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
                                            color: Color(0xFF787878))),
                                    Text("HB 20",
                                        style: GoogleFonts.barlow(
                                            fontSize: 20,
                                            fontWeight: FontWeight.w600,
                                            color: Color(0xFF2C2B34))),
                                    Text("2022 Platinum Plus 1.0 TGDI AT",
                                        style: GoogleFonts.barlow(
                                            fontSize: 10,
                                            fontWeight: FontWeight.normal,
                                            color: Color(0xFF787878))),
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
                                      margin: EdgeInsets.only(
                                          bottom: 6, right: 5.7),
                                      child: Row(
                                        children: [
                                          Container(
                                            width: 10.3,
                                            height: 10.5,
                                            margin: EdgeInsets.only(right: 5.7),
                                            child: Image.asset(
                                                "assets/images/Arrow.png"),
                                          ),
                                          Text("12.870 KM",
                                              style: GoogleFonts.barlow(
                                                  fontSize: 10,
                                                  fontWeight: FontWeight.normal,
                                                  color: Color(0xFF787878))),
                                        ],
                                      ),
                                    ),
                                    Container(
                                      child: Row(
                                        children: [
                                          Container(
                                            width: 10.3,
                                            height: 10.5,
                                            margin: EdgeInsets.only(right: 5.7),
                                            child: Image.asset(
                                                "assets/images/Pump.png"),
                                          ),
                                          Text("30.5 L",
                                              style: GoogleFonts.barlow(
                                                  fontSize: 10,
                                                  fontWeight: FontWeight.normal,
                                                  color: Color(0xFF787878))),
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
                      margin: EdgeInsets.only(
                        left: 20,
                        top: 16,
                      ),
                      child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Container(
                              margin: EdgeInsets.only(bottom: 10),
                              child: Text("Localização",
                                  style: GoogleFonts.barlow(
                                      fontSize: 12,
                                      fontWeight: FontWeight.normal,
                                      color: Color(0xFF787878))),
                            ),
                            Container(
                              margin: EdgeInsets.only(bottom: 10),
                              child: Text("Av Lins De Vasconselos, 1222",
                                  style: GoogleFonts.barlow(
                                      fontSize: 20,
                                      fontWeight: FontWeight.w600,
                                      color: Color(0xFF2C2B34))),
                            ),
                            Container(
                              margin: EdgeInsets.only(bottom: 10),
                              child: Text("Hoje, 12:29",
                                  style: GoogleFonts.barlow(
                                      fontSize: 12,
                                      fontWeight: FontWeight.normal,
                                      color: Color(0xFF787878))),
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
                    child: Container(
                      margin: EdgeInsets.only(top: 21, left: 24),
                      child: Text("Diagnóstico",
                          style: GoogleFonts.barlow(
                              fontSize: 12,
                              fontWeight: FontWeight.normal,
                              color: Color.fromARGB(255, 212, 212, 212))),
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
