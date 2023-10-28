import 'package:flutter/material.dart';
import 'package:flutter_reactive_ble/flutter_reactive_ble.dart';
import 'package:flutter_svg/svg.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:raizen_obd/methods/Scale.dart';
import 'package:raizen_obd/pages/Chat.dart';
import 'package:raizen_obd/websocket/pages/ChatWebsocket.dart';

class DiagnosisInfoWebsocket extends StatelessWidget {
  const DiagnosisInfoWebsocket({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onDoubleTap: () {
        Navigator.of(context).push(
          MaterialPageRoute(
            builder: (context) => ChatWebsocket(),
          ),
        );
      },
      onLongPress: () {
        print("Long Pressed");
        _showDialog(context);
      },
      child: Container(
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
        child: Container(
          margin: EdgeInsets.only(top: Scale.scaleHeight(context, 21)),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                margin: EdgeInsets.only(left: Scale.scaleWidth(context, 24)),
                child: Text("Diagnóstico",
                    style: GoogleFonts.openSans(
                        fontSize: Scale.scaleWidth(context, 12),
                        fontWeight: FontWeight.normal,
                        color: const Color.fromARGB(255, 212, 212, 212))),
              ),
              Container(
                margin: EdgeInsets.only(top: Scale.scaleHeight(context, 23)),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    Column(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        Container(
                          margin: EdgeInsets.only(
                              top: Scale.scaleHeight(context, 0),
                              bottom: Scale.scaleHeight(context, 20)),
                          child: Text("Motor      ",
                              style: GoogleFonts.openSans(
                                  fontSize: Scale.scaleWidth(context, 18),
                                  fontWeight: FontWeight.w700,
                                  color: const Color(0xFFFFFFFF))),
                        ),
                        Container(
                          margin: EdgeInsets.only(
                              top: Scale.scaleHeight(context, 10),
                              bottom: Scale.scaleHeight(context, 20)),
                          child: Text("Freios      ",
                              style: GoogleFonts.openSans(
                                  fontSize: Scale.scaleWidth(context, 18),
                                  fontWeight: FontWeight.w700,
                                  color: const Color(0xFFFFFFFF))),
                        ),
                        Container(
                          margin: EdgeInsets.only(
                              top: Scale.scaleHeight(context, 10),
                              bottom: Scale.scaleHeight(context, 20)),
                          child: Text("Radiador ",
                              style: GoogleFonts.openSans(
                                  fontSize: Scale.scaleWidth(context, 18),
                                  fontWeight: FontWeight.w700,
                                  color: const Color(0xFFFFFFFF))),
                        ),
                      ],
                    ),
                    Column(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        Container(
                          margin: EdgeInsets.only(
                              top: Scale.scaleHeight(context, 0),
                              bottom: Scale.scaleHeight(context, 20)),
                          width: Scale.scaleWidth(context, 20),
                          height: Scale.scaleHeight(context, 20),
                          child: SvgPicture.asset('assets/images/Check.svg',
                              colorFilter: const ColorFilter.mode(
                                  Color.fromARGB(255, 34, 201, 30),
                                  BlendMode.srcIn),
                              semanticsLabel: 'A red up arrow'),
                        ),
                        Container(
                          margin: EdgeInsets.only(
                              top: Scale.scaleHeight(context, 10),
                              bottom: Scale.scaleHeight(context, 20)),
                          width: Scale.scaleWidth(context, 20),
                          height: Scale.scaleHeight(context, 20),
                          child: SvgPicture.asset('assets/images/Check.svg',
                              colorFilter: const ColorFilter.mode(
                                  Color.fromARGB(255, 34, 201, 30),
                                  BlendMode.srcIn),
                              semanticsLabel: 'A red up arrow'),
                        ),
                        Container(
                          margin: EdgeInsets.only(
                              top: Scale.scaleHeight(context, 14),
                              bottom: Scale.scaleHeight(context, 20)),
                          width: Scale.scaleWidth(context, 20),
                          height: Scale.scaleHeight(context, 20),
                          child: SvgPicture.asset('assets/images/Check.svg',
                              colorFilter: const ColorFilter.mode(
                                  Color.fromARGB(255, 34, 201, 30),
                                  BlendMode.srcIn),
                              semanticsLabel: 'A red up arrow'),
                        )
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
                                  fontSize: Scale.scaleWidth(context, 18),
                                  fontWeight: FontWeight.w700,
                                  color: const Color(0xFFFFFFFF))),
                        ),
                        Container(
                          margin: EdgeInsets.only(
                              top: Scale.scaleHeight(context, 10),
                              bottom: Scale.scaleHeight(context, 20)),
                          child: Text("Airbag",
                              style: GoogleFonts.openSans(
                                  fontSize: Scale.scaleWidth(context, 18),
                                  fontWeight: FontWeight.w700,
                                  color: const Color(0xFFFFFFFF))),
                        ),
                        Container(
                          margin: EdgeInsets.only(
                              top: Scale.scaleHeight(context, 10),
                              bottom: Scale.scaleHeight(context, 20)),
                          child: Text("Tração",
                              style: GoogleFonts.openSans(
                                  fontSize: Scale.scaleWidth(context, 18),
                                  fontWeight: FontWeight.w700,
                                  color: const Color(0xFFFFFFFF))),
                        ),
                      ],
                    ),
                    Column(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        Container(
                          margin: EdgeInsets.only(
                              top: Scale.scaleHeight(context, 0),
                              bottom: Scale.scaleHeight(context, 20)),
                          width: Scale.scaleWidth(context, 20),
                          height: Scale.scaleHeight(context, 20),
                          child: SvgPicture.asset('assets/images/Check.svg',
                              colorFilter: const ColorFilter.mode(
                                  Color.fromARGB(255, 34, 201, 30),
                                  BlendMode.srcIn),
                              semanticsLabel: 'A red up arrow'),
                        ),
                        Container(
                          margin: EdgeInsets.only(
                              top: Scale.scaleHeight(context, 10),
                              bottom: Scale.scaleHeight(context, 20)),
                          width: Scale.scaleWidth(context, 20),
                          height: Scale.scaleHeight(context, 20),
                          child: SvgPicture.asset('assets/images/Check.svg',
                              colorFilter: const ColorFilter.mode(
                                  Color.fromARGB(255, 34, 201, 30),
                                  BlendMode.srcIn),
                              semanticsLabel: 'A red up arrow'),
                        ),
                        Container(
                          margin: EdgeInsets.only(
                              top: Scale.scaleHeight(context, 14),
                              bottom: Scale.scaleHeight(context, 20)),
                          width: Scale.scaleWidth(context, 20),
                          height: Scale.scaleHeight(context, 20),
                          child: SvgPicture.asset('assets/images/Check.svg',
                              colorFilter: const ColorFilter.mode(
                                  Color.fromARGB(255, 34, 201, 30),
                                  BlendMode.srcIn),
                              semanticsLabel: 'A red up arrow'),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
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
}
