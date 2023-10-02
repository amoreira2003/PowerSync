import 'package:flutter/foundation.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:geolocator/geolocator.dart';

class MapShell extends StatefulWidget {
  @override
  _MapShellState createState() => _MapShellState();
}

class _MapShellState extends State<MapShell> {
  GoogleMapController? _mapController;
  LatLng? _currentLocation = LatLng(0, 0);

  @override
  void initState() {
    super.initState();
    _getCurrentLocation();
  }

  Future<void> _getCurrentLocation() async {
    while (true) {
      try {
        await Future.delayed(const Duration(seconds: 1));
        final Position position = await Geolocator.getCurrentPosition(
            desiredAccuracy: LocationAccuracy.high);
        setState(() {
          _mapController!.moveCamera(CameraUpdate.newLatLng(
              LatLng(position.latitude, position.longitude)));
          _currentLocation = LatLng(position.latitude, position.longitude);
        });
      } catch (e) {
        print(e);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return GoogleMap(
      onMapCreated: (controller) {
        setState(() {
          _mapController = controller;
        });
      },
      initialCameraPosition: CameraPosition(
        target: _currentLocation!,
        zoom: 15.0,
      ),
      myLocationEnabled: true,
      // Enables the blue dot representing user's location
      compassEnabled: false, // Disables the compass button
      mapType:
          MapType.normal, // You can change this to other map types as needed
      zoomControlsEnabled: false, // Disables zoom in/out buttons
      myLocationButtonEnabled:
          false, // Enables the blue dot representing user's location
    );
  }
}
