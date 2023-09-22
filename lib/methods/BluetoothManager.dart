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

  Future<void> registerListener() async {
    flutterReactiveBle.subscribeToCharacteristic(characteristic).listen((data) {
      print("Receiving Data");
      print(data);
    }, onError: (dynamic error) {
      print(error);
    });
  }

  Future<Stream<ConnectionStateUpdate>> connect(deviceToConnect) async {
    if (deviceToConnect == null) {
      throw ArgumentError("Device cannot be null");
    }
    if (currentConnectedDevice != null) {
      throw ArgumentError("Already connected to a device");
    }
    return flutterReactiveBle.connectToDevice(
        id: deviceToConnect.id, connectionTimeout: const Duration(seconds: 10));
  }

  Future<void> send(List<int> command) async {
    if (currentConnectedDevice == null) {
      throw ArgumentError("Not connected to a device");
    }

    await flutterReactiveBle.writeCharacteristicWithResponse(characteristic,
        value: command);

    print(await flutterReactiveBle.readCharacteristic(characteristic));
  }

  Future<void> recon(PermissionHandler permissionHandler) async {
    if (currentConnectedDevice != null) {
      throw ArgumentError("Already connected to a device");
    }

    StreamSubscription? reconDeviceSub;

    reconDeviceSub = flutterReactiveBle.scanForDevices(
        withServices: [], scanMode: ScanMode.balanced).listen((device) {
      print(
          "Found device ${device.name} @ ${device.id} with RSSI ${device.rssi} dBm}");
      if (device.name == "OBDII") {
        print("Found OBDII device, sending connect command");
        connect(device);
        reconDeviceSub?.cancel();
        return;
      }
    }, onError: (e) {
      print("Error while scanning devices: $e");
    });
  }
}
