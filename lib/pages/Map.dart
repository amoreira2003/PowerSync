import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:geolocator/geolocator.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class MapShell extends StatefulWidget {
  const MapShell({super.key});

  @override
  _MapShellState createState() => _MapShellState();
}

class _MapShellState extends State<MapShell> {
  GoogleMapController? _mapController;
  LatLng? _currentLocation = const LatLng(0, 0);
  Set<Marker> _markers = Set();

  bool markersLoaded = false;
  bool locationLoaded = false;

  @override
  void initState() {
    super.initState();
    _getCurrentLocation();
    _fetchPumpsData();
  }

  Future<void> _getCurrentLocation() async {
    while (true) {
      try {
        await Future.delayed(const Duration(seconds: 1));
        final Position position = await Geolocator.getCurrentPosition(
            desiredAccuracy: LocationAccuracy.high);
        setState(() {
          if (_mapController == null) return;
          _mapController!.moveCamera(CameraUpdate.newLatLng(
              LatLng(position.latitude, position.longitude)));
          _currentLocation = LatLng(position.latitude, position.longitude);
          locationLoaded = true;
        });
      } catch (e) {
        print(e);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return GoogleMap(
      scrollGesturesEnabled: false,
      rotateGesturesEnabled: false,
      zoomGesturesEnabled: false,
      onMapCreated: (controller) {
        setState(() {
          _mapController = controller;
        });
      },
      markers: _markers,
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

  Future<void> _fetchPumpsData() async {
    final response =
        await http.get(Uri.parse('http://192.168.15.4:5000/pumps'));
    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      for (var pump in data) {
        final marker = Marker(
          markerId: MarkerId(pump['name']),
          position:
              LatLng(double.parse(pump['lat']), double.parse(pump['lng'])),
          infoWindow: InfoWindow(title: pump['name'], snippet: pump['address']),
        );
        _markers.add(marker);
      }
      setState(() {});
    }
  }
}
