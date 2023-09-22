import 'package:flutter/material.dart';
import 'package:raizen_obd/methods/Scale.dart';

class SmallInfoBlock extends StatelessWidget {
  final Widget childFirst;
  final Widget childSecond;

  const SmallInfoBlock({
    required this.childFirst,
    required this.childSecond,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(bottom: Scale.scaleHeight(context, 19)),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Container(
            margin: EdgeInsets.only(right: Scale.scaleWidth(context, 10)),
            width: Scale.scaleWidth(context, 151),
            height: Scale.scaleHeight(context, 170),
            decoration: const BoxDecoration(
              color: Color.fromARGB(255, 243, 243, 243),
              borderRadius: BorderRadius.all(Radius.circular(20)),
            ),
            child: childFirst,
          ),
          Container(
            width: Scale.scaleWidth(context, 151),
            height: Scale.scaleHeight(context, 170),
            decoration: const BoxDecoration(
              color: Color.fromARGB(255, 243, 243, 243),
              borderRadius: BorderRadius.all(Radius.circular(20)),
            ),
            child: childSecond,
          ),
        ],
      ),
    );
  }
}
