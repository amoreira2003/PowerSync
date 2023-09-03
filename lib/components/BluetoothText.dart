import 'package:flutter/material.dart';
import 'package:flutter_blue/flutter_blue.dart';
import 'package:permission_handler/permission_handler.dart';

class BluetoothText extends StatefulWidget {
  const BluetoothText({super.key});

  @override
  State<BluetoothText> createState() => _BluetoothTextState();
}

class _BluetoothTextState extends State<BluetoothText> {
  FlutterBlue flutterBlue = FlutterBlue.instance;

  @override
  Widget build(BuildContext context) {
// Stop scanning
    return DeviceListScreen();
  }
}

class DeviceListScreen extends StatefulWidget {
  @override
  _DeviceListScreenState createState() => _DeviceListScreenState();
}

class _DeviceListScreenState extends State<DeviceListScreen> {
  FlutterBlue flutterBlue = FlutterBlue.instance;

  List<ScanResult> scanResults = [];

  @override
  void initState() {
    super.initState();
    requestBluetoothPermissions();
  }

  Future<void> requestBluetoothPermissions() async {
    final status = await Permission.location.request();
    if (status.isGranted) {
      // Permission granted, you can now use flutter_blue to scan and interact with Bluetooth devices.
      startScan();
    } else {
      // Permission denied, handle the denial appropriately.
      print('Bluetooth permission denied');
    }
  }

  void startScan() {
    flutterBlue.scanResults.listen((results) {
      setState(() {
        scanResults = results;
      });
    });
    flutterBlue.startScan();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Bluetooth Devices'),
      ),
      body: ListView.builder(
        itemCount: scanResults.length,
        itemBuilder: (BuildContext context, int index) {
          BluetoothDevice device = scanResults[index].device;
          return ListTile(
            title: Text(device.name),
            subtitle: Text(device.id.toString()),
          );
        },
      ),
    );
  }

  @override
  void dispose() {
    flutterBlue.stopScan();
    super.dispose();
  }
}
