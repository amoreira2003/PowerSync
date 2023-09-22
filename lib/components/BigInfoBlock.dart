import 'package:flutter/material.dart';
import 'package:raizen_obd/methods/Scale.dart';

class BigInfoBlock extends StatelessWidget {
  final Widget child;

  const BigInfoBlock({
    required this.child,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(bottom: Scale.scaleHeight(context, 19)),
      width: Scale.scaleWidth(context, 319),
      height: Scale.scaleHeight(context, 234),
      decoration: const BoxDecoration(
        color: Color.fromARGB(255, 243, 243, 243),
        borderRadius: BorderRadius.all(Radius.circular(20)),
      ),
      child: child,
    );
  }
}
