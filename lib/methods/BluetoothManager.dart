import 'dart:async';

import 'package:flutter_reactive_ble/flutter_reactive_ble.dart';
import 'package:raizen_obd/methods/PermissionHandler.dart';

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

  DiscoveredDevice? currentConnectedDevice;
  StreamSubscription? subscriptionToConnectedDevice;

  late QualifiedCharacteristic characteristic;

  PermissionHandler permissionHandler;

  BluetoothManager(this.permissionHandler);

  void populateCharacteristic(String characteristicId, String serviceId) {
    if (currentConnectedDevice == null) {
      throw ArgumentError("Not connected to a device");
    }
    characteristic = QualifiedCharacteristic(
        characteristicId: Uuid.parse(characteristicId),
        serviceId: Uuid.parse(serviceId),
        deviceId: currentConnectedDevice!.id);
  }

  List<int> convertToBinary(String cmd) {
    return '$cmd\r'.codeUnits;
  }

  Future<Stream<List<int>>> registerListener() async {
    return flutterReactiveBle.subscribeToCharacteristic(characteristic);
  }

  Future<Stream<ConnectionStateUpdate>> connect(deviceToConnect) async {
    if (deviceToConnect == null) {
      throw ArgumentError("Device cannot be null");
    }
    if (currentConnectedDevice != null) {
      throw ArgumentError("Already connected to a device");
    }

    currentConnectedDevice = deviceToConnect;
    return flutterReactiveBle.connectToDevice(
        id: deviceToConnect.id, connectionTimeout: const Duration(seconds: 10));
  }

  double convertRPM(String receivedString) {
    List<String> parts = receivedString.split(' ');

    if (parts.length == 4 && parts[0] == "41" && parts[1] == "0C") {
      int XX = int.parse(parts[2],
          radix: 16); // Convert XX from hexadecimal to decimal
      int YY = int.parse(parts[3],
          radix: 16); // Convert YY from hexadecimal to decimal

      double result = (XX * 256 + YY) / 4;

      print("XX: $XX");
      print("YY: $YY");
      print("Result: $result");
      return result;
    } else {
      print("Invalid input format");
      return 0;
    }
  }

  Future<void> send(List<int> command) async {
    if (currentConnectedDevice == null) {
      throw ArgumentError("Not connected to a device");
    }

    await flutterReactiveBle.writeCharacteristicWithResponse(characteristic,
        value: command);

    print("Command Sent $command waiting for response");
  }

  Future<DiscoveredDevice> recon(PermissionHandler permissionHandler) async {
    if (currentConnectedDevice != null) {
      throw ArgumentError("Already connected to a device");
    }

    final completer = Completer<DiscoveredDevice>();
    StreamSubscription? reconDeviceSub;

    reconDeviceSub = flutterReactiveBle.scanForDevices(
        withServices: [], scanMode: ScanMode.balanced).listen((device) {
      if (device.name == "OBDII") {
        print("Found OBDII device, sending connect command");
        reconDeviceSub?.cancel();
        completer.complete(device);
      }
    }, onError: (e) {
      print("Error while scanning devices: $e");
      completer.completeError(e);
    });

    return completer.future;
  }
}
