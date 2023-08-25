import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class InfoHeader extends StatelessWidget {
  const InfoHeader({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          margin: const EdgeInsets.only(left: 25, top: 17),
          child: Text("Seu Carro",
              style: GoogleFonts.barlow(
                  fontSize: 12,
                  fontWeight: FontWeight.normal,
                  color: Color(0xFF787878))),
        ),
        Container(
          margin: const EdgeInsets.only(left: 25, top: 17),
          child: Image.asset("assets/images/Wifi.png"),
        ),
        Container(
          margin: const EdgeInsets.only(right: 18, top: 17),
          child: Text("AAA0A00",
              style: GoogleFonts.barlow(
                  fontSize: 12,
                  fontWeight: FontWeight.normal,
                  color: Color(0xFF787878))),
        ),
      ],
    );
  }
}
