import 'package:flutter/material.dart';
import 'package:raizen_obd/pages/App.dart';
import 'package:raizen_obd/pages/Chat.dart';
import 'package:raizen_obd/pages/VehicleForm.dart';
import 'package:flutter/services.dart';
import 'package:raizen_obd/websocket/AppWebsocket.dart';
import 'package:web_socket_channel/web_socket_channel.dart';

void main() {
  runApp(const MaterialApp(debugShowCheckedModeBanner: false, home: MainApp()));
}

class MainApp extends StatefulWidget {
  const MainApp({super.key});

  @override
  State<MainApp> createState() => _MainAppState();
}

class _MainAppState extends State<MainApp> {
  @override
  Widget build(BuildContext context) {
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitUp,
      DeviceOrientation.portraitDown,
    ]);

// Request Bluetooth permissions
    bool useWebsocket = true;

    if (useWebsocket) return AppWebsocket();

    bool menuFirst = true;

    if (menuFirst) return const ShellForm();
    return App();
  }
}
