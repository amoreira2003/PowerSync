import 'dart:async';

import 'package:flutter_reactive_ble/flutter_reactive_ble.dart';
import 'package:permission_handler/permission_handler.dart';

class BluetoothManager {
  /* Created by Alexandre Moreira - 11/09/2023
   * This class is responsible for managing the bluetooth connection
   * with the OBDII device. It will be used to send commands to the
   * OBDII device and receive data from it.
   * 
   * It requires the characteristic of the OBDII device to be passed and
   * the library flutter_reactive_ble to be installed.
   * 
   * Every function should be called in a try/catch block.
  */

  FlutterReactiveBle flutterReactiveBle = FlutterReactiveBle();


  Future<Stream<List<int>>> registerListener(characteristic) async {
    if (characteristic == null) {
      throw ArgumentError("Characteristic cannot be null");
    }
    return flutterReactiveBle.subscribeToCharacteristic(characteristic);
  }

  Future<void> send(characteristic,List<int> command) async {
    if (characteristic == null) {
      throw ArgumentError("Characteristic cannot be null");
    }
    await flutterReactiveBle.writeCharacteristicWithResponse(characteristic,
        value: command);
     print("Sending command sent to OBD: " + command.toString());
     

  Future<void> requestBluetoothPermission() async {
    print("Starting to Build 2");
    final status = await Permission.bluetoothScan.request();
    final statusC = await Permission.bluetoothConnect.request();
    if (status.isGranted && statusC.isGranted) {
      flutterReactiveBle.scanForDevices(
          withServices: [], scanMode: ScanMode.balanced).listen((device) {
        print(
            "Found device ${device.name} @ ${device.id} with RSSI ${device.rssi} dBm}");
        if (device.name == "OBDII") {
          StreamSubscription listenToConnectionState = flutterReactiveBle.connectToDevice(id: device.id,connectionTimeout: const Duration(seconds: 2),)
              .listen((connectionState) {
            print("Connection state is $connectionState");
            if (connectionState.connectionState ==
                DeviceConnectionState.connected) {
              send([]);
            }
          }, onError: (Object error) {
            print("Error while connecting, trying again: $error");
          });
        }
        // print(device);
      }, onError: (e) {
        print("Error while scanning: $e");
      });
    }
  }
}
