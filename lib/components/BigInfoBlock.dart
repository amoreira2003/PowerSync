import 'package:flutter/material.dart';

class BigInfoBlock extends StatelessWidget {
  final Widget child;

  const BigInfoBlock({
    required this.child,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 19),
      width: 319,
      height: 234,
      decoration: const BoxDecoration(
        color: Color.fromARGB(255, 243, 243, 243),
        borderRadius: BorderRadius.all(Radius.circular(20)),
      ),
      child: child,
    );
  }
}
