import 'package:permission_handler/permission_handler.dart';

class PermissionHandler {
  /* Created by Alexandre Moreira - 19/09/2023
   * Handles getting permission for bluetooth in android and ios devices
   * Every function should be called in a try/catch block.
  */

  bool isBluetoothScanAllowed = false;
  bool isBluetoothConnectAllowed = false;

  void checkPermission() async {
    Permission.bluetoothScan.request().then((value) {
      // Switch trough possible values of success
      // value.isGranted is an example of success

      switch (value) {
        case PermissionStatus.denied:
          isBluetoothScanAllowed = false;
          openAppSettings();

          break;

        case PermissionStatus.granted:
          isBluetoothScanAllowed = true;

          break;

        case PermissionStatus.limited:
          isBluetoothScanAllowed = true;
          // Do something if permission is limited

          break;

        case PermissionStatus.permanentlyDenied:

          // Do something if permission is permanently denied
          openAppSettings();
          isBluetoothScanAllowed = false;

          break;

        case PermissionStatus.restricted:
          isBluetoothScanAllowed = false;
          // Do something if permission is restricted
          // Popup that the permission is restricted
          break;

        case PermissionStatus.provisional:
          isBluetoothScanAllowed = false;
          // Do something if permission is provisional

          break;

        default:
          isBluetoothScanAllowed = false;
          // Do something if permission is unknown

          break;
      }
    });

    Permission.bluetoothConnect.request().then((value) {
      // Switch trough possible values of success for bluetooth connect
      // value.isGranted is an example of success

      switch (value) {
        case PermissionStatus.denied:
          isBluetoothConnectAllowed = false;
          openAppSettings();

          break;

        case PermissionStatus.granted:
          isBluetoothConnectAllowed = true;

          break;

        case PermissionStatus.limited:
          isBluetoothConnectAllowed = true;
          // Do something if permission is limited

          break;

        case PermissionStatus.permanentlyDenied:

          // Do something if permission is permanently denied
          openAppSettings();
          isBluetoothConnectAllowed = false;

          break;

        case PermissionStatus.restricted:
          isBluetoothConnectAllowed = false;
          // Do something if permission is restricted
          // Popup that the permission is restricted
          break;

        case PermissionStatus.provisional:
          isBluetoothConnectAllowed = false;
          // Do something if permission is provisional

          break;

        default:
          isBluetoothConnectAllowed = false;
          // Do something if permission is unknown

          break;
      }
    });
  }
}
