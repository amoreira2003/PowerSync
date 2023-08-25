import 'package:flutter/material.dart';

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
      margin: const EdgeInsets.only(bottom: 19),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Container(
            margin: const EdgeInsets.only(right: 10),
            width: 151,
            height: 170,
            decoration: const BoxDecoration(
              color: Color.fromARGB(255, 243, 243, 243),
              borderRadius: BorderRadius.all(Radius.circular(20)),
            ),
            child: childFirst,
          ),
          Container(
            width: 151,
            height: 170,
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
