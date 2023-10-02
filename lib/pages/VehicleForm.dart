import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:raizen_obd/methods/Scale.dart';
import 'package:raizen_obd/pages/App.dart';

class ShellForm extends StatefulWidget {
  const ShellForm({super.key});

  @override
  State<ShellForm> createState() => _ShellFormState();
}

class _ShellFormState extends State<ShellForm> {
  String marcaSelectedValue = 'Marca';
  String modeloSelectedValue = 'Modelo';
  String anoSelectedValue = 'Ano';
  String versaoSelectedValue = 'Versão';
  String placaSelectedValue = 'Placa';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(clipBehavior: Clip.antiAlias, children: [
        Container(
          width: double.infinity,
          height: double.infinity,
          color: const Color.fromARGB(255, 255, 205, 0),
        ),
        Align(
          alignment: Alignment.bottomCenter,
          child: ClipRRect(
            borderRadius: const BorderRadius.only(
                topLeft: Radius.circular(30), topRight: Radius.circular(30)),
            child: Container(
              width: double.infinity,
              height: MediaQuery.of(context).size.height * 0.85,
              color: Colors.white,
              child: Column(
                children: [
                  Container(
                    width: Scale.scaleWidth(context, 400),
                    height: Scale.scaleHeight(context, 90),
                    margin: EdgeInsets.only(
                        top: Scale.scaleHeight(context, 41),
                        left: Scale.scaleWidth(context, 34),
                        right: 0),
                    child: Align(
                      alignment: Alignment.topLeft,
                      child: Text("Cadastre Seu Carro",
                          textAlign: TextAlign.left,
                          style: GoogleFonts.rubik(
                              fontSize: Scale.scaleWidth(context, 38),
                              fontWeight: FontWeight.w700,
                              color: Colors.black)),
                    ),
                  ),
                  Container(
                    decoration: BoxDecoration(
                      color: const Color.fromARGB(255, 243, 243, 243),
                      borderRadius: BorderRadius.circular(10),
                    ),
                    margin: EdgeInsets.only(
                        top: Scale.scaleHeight(context, 21),
                        left: Scale.scaleWidth(context, 32),
                        right: Scale.scaleWidth(context, 34)),
                    width: Scale.scaleWidth(
                        context, 324), // Adjust width as needed
                    height: Scale.scaleHeight(
                        context, 56), // Adjust height as needed
                    child: Align(
                      alignment: Alignment.centerLeft,
                      child: Container(
                        margin: EdgeInsets.only(
                            left: Scale.scaleWidth(context, 20)),
                        child: DropdownButtonHideUnderline(
                          child: DropdownButton<String>(
                            icon: Container(),
                            value: marcaSelectedValue,
                            onChanged: (newMarcaValue) {
                              setState(() {
                                marcaSelectedValue = newMarcaValue!;
                              });
                            },
                            items: <String>[
                              'Marca',
                              'Hyundai',
                              'Honda',
                              'Toyota',
                              'Chevrolet',
                              'Ford',
                              'Volkswagen',
                            ].map((String value) {
                              return DropdownMenuItem<String>(
                                value: value,
                                child: SizedBox(
                                  width: Scale.scaleWidth(context, 302),
                                  height: Scale.scaleHeight(context, 56),
                                  child: Row(
                                    children: [
                                      Container(
                                        margin: EdgeInsets.only(
                                            right:
                                                Scale.scaleWidth(context, 10)),
                                        child: SvgPicture.asset(
                                            'assets/images/hashtag.svg',
                                            colorFilter: const ColorFilter.mode(
                                                Color.fromARGB(127, 0, 0, 0),
                                                BlendMode.srcIn),
                                            semanticsLabel: 'A red up arrow'),
                                      ),
                                      Text(
                                        value,
                                        textAlign: TextAlign.left,
                                        style: GoogleFonts.rubik(
                                          fontSize:
                                              Scale.scaleWidth(context, 18),
                                          fontWeight: FontWeight.w700,
                                          color: const Color.fromARGB(
                                              127, 0, 0, 0),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              );
                            }).toList(),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Container(
                    decoration: BoxDecoration(
                      color: const Color.fromARGB(255, 243, 243, 243),
                      borderRadius: BorderRadius.circular(10),
                    ),
                    margin: EdgeInsets.only(
                        top: Scale.scaleHeight(context, 21),
                        left: Scale.scaleWidth(context, 32),
                        right: Scale.scaleWidth(context, 34)),
                    width: Scale.scaleWidth(
                        context, 324), // Adjust width as needed
                    height: Scale.scaleHeight(
                        context, 56), // Adjust height as needed
                    child: Align(
                      alignment: Alignment.centerLeft,
                      child: Container(
                        margin: EdgeInsets.only(
                            left: Scale.scaleWidth(context, 20)),
                        child: DropdownButtonHideUnderline(
                          child: DropdownButton<String>(
                            icon: Container(),
                            value: modeloSelectedValue,
                            onChanged: (newModeloValue) {
                              setState(() {
                                modeloSelectedValue = newModeloValue!;
                              });
                            },
                            items: <String>[
                              'Modelo',
                              'HB 20',
                              'Creta',
                              'i30',
                              'Tucson',
                              'Santa Fé',
                            ].map((String value) {
                              return DropdownMenuItem<String>(
                                value: value,
                                child: SizedBox(
                                  width: Scale.scaleWidth(context, 302),
                                  height: Scale.scaleWidth(context, 56),
                                  child: Row(
                                    children: [
                                      Container(
                                        margin: EdgeInsets.only(
                                            right:
                                                Scale.scaleWidth(context, 10)),
                                        child: SvgPicture.asset(
                                            'assets/images/carro.svg',
                                            colorFilter: const ColorFilter.mode(
                                                Color.fromARGB(127, 0, 0, 0),
                                                BlendMode.srcIn),
                                            semanticsLabel: 'A red up arrow'),
                                      ),
                                      Text(
                                        value,
                                        textAlign: TextAlign.left,
                                        style: GoogleFonts.rubik(
                                          fontSize:
                                              Scale.scaleWidth(context, 18),
                                          fontWeight: FontWeight.w700,
                                          color: const Color.fromARGB(
                                              127, 0, 0, 0),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              );
                            }).toList(),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Container(
                    decoration: BoxDecoration(
                      color: const Color.fromARGB(255, 243, 243, 243),
                      borderRadius: BorderRadius.circular(10),
                    ),
                    margin: EdgeInsets.only(
                        top: Scale.scaleHeight(context, 21),
                        left: Scale.scaleWidth(context, 32),
                        right: Scale.scaleWidth(context, 34)),
                    width: Scale.scaleWidth(
                        context, 324), // Adjust width as needed
                    height: Scale.scaleHeight(
                        context, 56), // Adjust height as needed
                    child: Align(
                      alignment: Alignment.centerLeft,
                      child: Container(
                        margin: EdgeInsets.only(
                            left: Scale.scaleWidth(context, 20)),
                        child: DropdownButtonHideUnderline(
                          child: DropdownButton<String>(
                            icon: Container(),
                            value: anoSelectedValue,
                            onChanged: (newAnoValue) {
                              setState(() {
                                anoSelectedValue = newAnoValue!;
                              });
                            },
                            items: <String>[
                              'Ano',
                              '2021',
                              '2020',
                              '2019',
                              '2018',
                              '2017',
                              '2016',
                            ].map((String value) {
                              return DropdownMenuItem<String>(
                                value: value,
                                child: SizedBox(
                                  width: Scale.scaleWidth(context, 302),
                                  height: Scale.scaleHeight(context, 56),
                                  child: Row(
                                    children: [
                                      Container(
                                        margin: EdgeInsets.only(
                                            right:
                                                Scale.scaleWidth(context, 10)),
                                        child: SvgPicture.asset(
                                            'assets/images/list.svg',
                                            colorFilter: const ColorFilter.mode(
                                                Color.fromARGB(127, 0, 0, 0),
                                                BlendMode.srcIn),
                                            semanticsLabel: 'A red up arrow'),
                                      ),
                                      Text(
                                        value,
                                        textAlign: TextAlign.left,
                                        style: GoogleFonts.rubik(
                                          fontSize:
                                              Scale.scaleWidth(context, 18),
                                          fontWeight: FontWeight.w700,
                                          color: const Color.fromARGB(
                                              127, 0, 0, 0),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              );
                            }).toList(),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Container(
                    decoration: BoxDecoration(
                      color: const Color.fromARGB(255, 243, 243, 243),
                      borderRadius: BorderRadius.circular(10),
                    ),
                    margin: EdgeInsets.only(
                        top: Scale.scaleHeight(context, 21),
                        left: Scale.scaleWidth(context, 32),
                        right: Scale.scaleWidth(context, 34)),
                    width: Scale.scaleWidth(
                        context, 324), // Adjust width as needed
                    height: Scale.scaleHeight(
                        context, 56), // Adjust height as needed
                    child: Align(
                      alignment: Alignment.centerLeft,
                      child: Container(
                        margin: EdgeInsets.only(
                            left: Scale.scaleHeight(context, 20)),
                        child: DropdownButtonHideUnderline(
                          child: DropdownButton<String>(
                            icon: Container(),
                            value: versaoSelectedValue,
                            onChanged: (newVersaoValue) {
                              setState(() {
                                versaoSelectedValue = newVersaoValue!;
                              });
                            },
                            items: <String>[
                              'Versão',
                              'HB 20 Sense ',
                              'HB 20 Sense Plus',
                              'HB 20 Comfort ',
                              'HB 20 Platinum',
                              'HB 20 Ocean 1.6 A/T'
                            ].map((String value) {
                              return DropdownMenuItem<String>(
                                value: value,
                                child: SizedBox(
                                  width: Scale.scaleWidth(context, 302),
                                  height: Scale.scaleHeight(context, 56),
                                  child: Row(
                                    children: [
                                      Container(
                                        margin: EdgeInsets.only(
                                            right:
                                                Scale.scaleWidth(context, 10)),
                                        child: SvgPicture.asset(
                                            'assets/images/book.svg',
                                            colorFilter: const ColorFilter.mode(
                                                Color.fromARGB(127, 0, 0, 0),
                                                BlendMode.srcIn),
                                            semanticsLabel: 'A red up arrow'),
                                      ),
                                      Text(
                                        value,
                                        textAlign: TextAlign.left,
                                        style: GoogleFonts.rubik(
                                          fontSize:
                                              Scale.scaleWidth(context, 18),
                                          fontWeight: FontWeight.w700,
                                          color: const Color.fromARGB(
                                              127, 0, 0, 0),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              );
                            }).toList(),
                          ),
                        ),
                      ),
                    ),
                  ),
                  Container(
                    decoration: BoxDecoration(
                      color: const Color.fromARGB(255, 243, 243, 243),
                      borderRadius: BorderRadius.circular(10),
                    ),
                    margin: EdgeInsets.only(
                        top: Scale.scaleHeight(context, 21),
                        left: Scale.scaleWidth(context, 32),
                        right: Scale.scaleWidth(context, 34)),
                    width: Scale.scaleWidth(
                        context, 324), // Adjust width as needed
                    height: Scale.scaleHeight(
                        context, 56), // Adjust height as needed
                    child: Align(
                      alignment: Alignment.centerLeft,
                      child: Container(
                        margin: EdgeInsets.only(
                            left: Scale.scaleWidth(context, 20)),
                        child: TextFormField(
                          textCapitalization: TextCapitalization.characters,
                          onChanged: (newValue) {
                            setState(() {
                              placaSelectedValue = newValue;
                            });
                          },
                          decoration: InputDecoration(
                            border: InputBorder.none, // Remove the border
                            hintText: 'Placa', // Placeholder text
                            icon: Container(
                              child: SvgPicture.asset(
                                'assets/images/placa.svg',
                                colorFilter: const ColorFilter.mode(
                                  Color.fromARGB(127, 0, 0, 0),
                                  BlendMode.srcIn,
                                ),
                                semanticsLabel: 'A red up arrow',
                              ),
                            ),
                          ),
                          style: TextStyle(
                            fontSize: Scale.scaleWidth(context, 18),
                            fontWeight: FontWeight.w700,
                            color: const Color.fromARGB(127, 0, 0, 0),
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
        Align(
          alignment: Alignment.bottomCenter,
          child: Container(
            margin: EdgeInsets.only(bottom: Scale.scaleHeight(context, 10)),
            child: ElevatedButton(
                style: ButtonStyle(
                    fixedSize: MaterialStateProperty.all<Size>(Size(
                        Scale.scaleWidth(context, 322),
                        Scale.scaleHeight(
                            context, 51))), //Change with your height and width
                    backgroundColor:
                        MaterialStateProperty.all<Color>(Colors.red),
                    shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                        RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(5.0)))),
                onPressed: () {
                  Navigator.of(context)
                      .push(MaterialPageRoute(builder: (context) => const App()));
                },
                child: Text("Cadastrar",
                    style: GoogleFonts.rubik(
                        fontSize: Scale.scaleWidth(context, 18),
                        fontWeight: FontWeight.w400,
                        color: Colors.white))),
          ),
        )
      ]),
    );
  }
}
