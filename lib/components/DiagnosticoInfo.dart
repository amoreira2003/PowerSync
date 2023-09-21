import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import './RoundedImageIcon.dart';

class DiagnosticoInfo extends StatelessWidget {
  dynamic value;
  dynamic displayName;

  DiagnosticoInfo({
    this.displayName,
    this.value,
    super.key,
  });

  String getImagePath() {
    return value == "off"
        ? "assets/images/error.png"
        : "assets/images/noerror.png";
  }

  Color getBackgroundColor() {
    return value == "off"
        ? const Color.fromARGB(255, 236, 163, 44) // Red background for "off"
        : const Color.fromARGB(255, 34, 201, 30); // Green background otherwise
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Text(displayName,
            style: GoogleFonts.barlow(
                fontSize: 14,
                fontWeight: FontWeight.w700,
                color: const Color.fromARGB(255, 212, 212, 212))),
        RoundedImageIcon(
          imagePath: getImagePath(),
          backgroundColor:
              getBackgroundColor(), // Use the getBackgroundColor function
          radius: 8,
        ),
      ],
    );
  }
}
