import 'package:flutter/material.dart';
import 'package:raizen_obd/pages/Map.dart';
import 'package:webview_flutter/webview_flutter.dart';

class MapFullScreen extends StatelessWidget {
  const MapFullScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
        onDoubleTap: () {
          Navigator.pop(context);
        },
        child: MapShell());
  }
}
