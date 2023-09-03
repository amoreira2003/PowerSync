import 'package:flutter/material.dart';

class RoundedImageIcon extends StatelessWidget {
  final String imagePath;
  final double radius;
  final Color backgroundColor;

  const RoundedImageIcon({super.key, 
    required this.imagePath,
    required this.radius,
    required this.backgroundColor,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: radius * 2,
      height: radius * 2,
      decoration: BoxDecoration(
        color: backgroundColor,
        shape: BoxShape.circle,
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(radius),
        child: Image.asset(
          imagePath,
          width: radius * 2,
          height: radius * 2,
          fit: BoxFit.scaleDown,
        ),
      ),
    );
  }
}
