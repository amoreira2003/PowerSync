import 'package:flutter/material.dart';
import 'package:flutter_reactive_ble/flutter_reactive_ble.dart';
import 'package:flutter_svg/svg.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:raizen_obd/methods/Scale.dart';
import 'package:raizen_obd/pages/Chat.dart';
import 'package:raizen_obd/websocket/pages/ChatWebsocket.dart';

class DiagnosisInfoWebsocket extends StatelessWidget {
  DiagnosisInfoWebsocket({
    required this.hasProblem,
    required this.title,
    required this.iconPath,
    super.key,
  });

  String iconPath = "";
  String title = "";
  bool hasProblem = false;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
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
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Container(
                width: Scale.scaleWidth(context, 50),
                height: Scale.scaleHeight(context, 50),
                margin: EdgeInsets.only(
                    top: Scale.scaleHeight(context, 20),
                    bottom: Scale.scaleHeight(context, 20)),
                decoration: BoxDecoration(
                    color: Colors.black,
                    borderRadius: BorderRadius.circular(25)),
                child: SvgPicture.asset(
                  iconPath,
                  fit: BoxFit.scaleDown,
                  width: Scale.scaleWidth(context, 40),
                  height: Scale.scaleHeight(context, 40),
                ),
              ),
              Text("$title",
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 14,
                    fontFamily: 'Barlow',
                    fontWeight: FontWeight.w700,
                    height: 0.09,
                  )),
              Container(
                  margin: EdgeInsets.only(
                    top: Scale.scaleHeight(context, 20),
                  ),
                  child: !hasProblem
                      ? Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Container(
                              margin: EdgeInsets.only(
                                  top: Scale.scaleHeight(context, 14),
                                  right: Scale.scaleWidth(context, 9.27),
                                  bottom: Scale.scaleHeight(context, 20)),
                              width: Scale.scaleWidth(context, 20),
                              height: Scale.scaleHeight(context, 20),
                              child: SvgPicture.asset('assets/images/Check.svg',
                                  colorFilter: const ColorFilter.mode(
                                      Color.fromARGB(255, 34, 201, 30),
                                      BlendMode.srcIn),
                                  semanticsLabel: 'A red up arrow'),
                            ),
                            Text(
                              'Nenhum Código de Erro Encontrado',
                              style: TextStyle(
                                color: Color(0xFFD4D4D4),
                                fontSize: 12,
                                fontFamily: 'Open Sans',
                                fontWeight: FontWeight.w400,
                                height: 0.10,
                              ),
                            )
                          ],
                        )
                      : Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Container(
                              decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(25),
                                  color: Color(0xFFDA291C)),
                              margin: EdgeInsets.only(
                                  top: Scale.scaleHeight(context, 14),
                                  right: Scale.scaleWidth(context, 9.27),
                                  bottom: Scale.scaleHeight(context, 20)),
                              width: Scale.scaleWidth(context, 20),
                              height: Scale.scaleHeight(context, 20),
                              child: SvgPicture.asset(
                                  'assets/images/delete.svg',
                                  colorFilter: const ColorFilter.mode(
                                      Color.fromARGB(255, 0, 0, 0),
                                      BlendMode.srcIn),
                                  semanticsLabel: 'A red up arrow'),
                            ),
                            Text(
                              'Códigos de erro encontrados!',
                              style: TextStyle(
                                color: Color(0xFFD4D4D4),
                                fontSize: 12,
                                fontFamily: 'Open Sans',
                                fontWeight: FontWeight.w400,
                                height: 0.10,
                              ),
                            )
                          ],
                        )),
              Spacer(),
              Container(
                margin: EdgeInsets.only(
                  bottom: Scale.scaleHeight(context, 17),
                ),
                child: Text(
                  'Ver Códigos',
                  style: TextStyle(
                    color: Color(0xFFEFEFEF),
                    fontSize: 12,
                    fontFamily: 'Open Sans',
                    fontWeight: FontWeight.w400,
                    height: 0.10,
                  ),
                ),
              )
            ],
          )),
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
