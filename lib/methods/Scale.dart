import 'package:flutter/material.dart';

class Scale {
  static double scaleWidth(BuildContext context, double width) {
    double screenWidth = MediaQuery.of(context).size.width;
    double screenHeight = MediaQuery.of(context).size.height;

    double divisor = screenHeight / screenWidth > 1.6 ? 393 : 480;
    return width * 1.05 * (screenWidth / divisor);
  }

  static double scaleHeight(BuildContext context, double height) {
    double screenHeight = MediaQuery.of(context).size.height;

    return height * 1.05 * (screenHeight / 852.0);
  }
}
