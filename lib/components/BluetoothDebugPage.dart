import 'package:flutter/material.dart';
import 'package:flutter_reactive_ble/flutter_reactive_ble.dart';
import 'package:raizen_obd/methods/BluetoothManager.dart';
import 'package:raizen_obd/methods/PermissionHandler.dart';

class BluetoothDebugPage extends StatefulWidget {
  const BluetoothDebugPage({super.key});

  @override
  State<BluetoothDebugPage> createState() => _BluetoothDebugPageState();
}

PermissionHandler permissionHandler = PermissionHandler();
BluetoothManager bluetoothManager = BluetoothManager(permissionHandler);

class _BluetoothDebugPageState extends State<BluetoothDebugPage> {
  DiscoveredDevice? currentDevice;
  Stream<ConnectionStateUpdate>? connectionState;

  bool startCalculatingRPM = false;
  List<String> answers = [];

  String characteristicId = "0000fff1-0000-1000-8000-00805f9b34fb";
  String serviceId = "0000fff0-0000-1000-8000-00805f9b34fb";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Bluetooth Debug'),
        ),
        body: Center(
            child: Column(
          children: [
            ElevatedButton(
              onPressed: () {
                permissionHandler.checkPermission();
              },
              child: const Text('Ask OS for permission'),
            ),
            ElevatedButton(
              onPressed: () async {
                final device = await bluetoothManager.recon(permissionHandler);
                setState(() {
                  currentDevice = device;
                });
              },
              child: const Text('Recon Device'),
            ),
            ElevatedButton(
              onPressed: () async {
                Stream<ConnectionStateUpdate> newConnectionState =
                    await bluetoothManager.connect(currentDevice);
                setState(() {
                  connectionState = newConnectionState;
                });
              },
              child: const Text('Connect to Devices'),
            ),
            ElevatedButton(
                onPressed: () {
                  bluetoothManager.populateCharacteristic(
                      characteristicId, serviceId);
                },
                child: const Text("Populate Charateristic")),
            ElevatedButton(
                onPressed: () {
                  bluetoothManager.registerListener().then((stream) {
                    stream.listen((event) {
                      bluetoothManager.convertRPM(event.toString());

                      setState(() {
                        answers.add(event.toString());
                        answers.add(
                            "Ascii Conversion: ${String.fromCharCodes(event)}");
                        answers.add("RPM Conversion: ${bluetoothManager
                                .convertRPM(String.fromCharCodes(event).trim())}");
                      });
                    });
                  });
                },
                child: const Text("Register Listener")),
            ElevatedButton(
              onPressed: () async {
                List<String> newAnswers = [...answers];
                print("Sending AT E0");
                await bluetoothManager
                    .send(bluetoothManager.convertToBinary("AT E0"));

                print("Sent AT E0");

                print("Sending AT L0");
                await bluetoothManager
                    .send(bluetoothManager.convertToBinary("AT L0"));

                print("Sent AT L0");
                print("Sending AT ST 7D");
                await bluetoothManager
                    .send(bluetoothManager.convertToBinary("AT ST 7D"));

                print("Sent AT ST 7D");
                print("Sending AT SP 0");
                await bluetoothManager
                    .send(bluetoothManager.convertToBinary("AT SP 0"));
              },
              child: const Text('Configure OBD'),
            ),
            ElevatedButton(
              onPressed: () async {
                await bluetoothManager
                    .send(bluetoothManager.convertToBinary("01 0C"));
              },
              child: const Text('Get RPM'),
            ),
            ElevatedButton(
                onPressed: () async {
                  await bluetoothManager
                      .send(bluetoothManager.convertToBinary("01 05"));
                },
                child: const Text('Get Coolant')),
            ElevatedButton(
                onPressed: () {
                  setState(() {
                    startCalculatingRPM = !startCalculatingRPM;
                  });
                },
                child: const Text("Toggle RPM Listening")),
            StreamBuilder(
                stream: connectionState,
                builder: ((context, snapshot) =>
                    Text("ConnectionState : ${snapshot.data}"))),
            Text("Current Device: $currentDevice"),
            const Text("Answers:"),
            StreamBuilder(
                stream: Stream.periodic(const Duration(seconds: 1)),
                builder: (context, snapshot) {
                  if (!startCalculatingRPM) return const Text("Amo Kotlin");
                  bluetoothManager
                      .send(bluetoothManager.convertToBinary("01 0C"));
                  return const Text("Sending Commands");
                }),
            Expanded(
              child: SingleChildScrollView(
                child: Column(
                  children: answers.map((answer) {
                    return ListTile(
                      title: Text(answer),
                    );
                  }).toList(),
                ),
              ),
            ),
          ],
        )));
  }
}
