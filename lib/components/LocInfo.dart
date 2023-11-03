import 'package:flutter/material.dart';
import 'package:geocoding/geocoding.dart';
import 'package:geolocator/geolocator.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:intl/intl.dart';
import 'package:raizen_obd/components/SmallInfoBlock.dart';
import 'package:raizen_obd/methods/Scale.dart';
import 'package:raizen_obd/pages/Map.dart';
import 'package:raizen_obd/pages/MapFullScreen.dart';

class LocInfo extends StatelessWidget {
  const LocInfo({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return SmallInfoBlock(
      childFirst: GestureDetector(
        onDoubleTap: () {
          Navigator.of(context).push(
              MaterialPageRoute(builder: (context) => const MapFullScreen()));
        },
        child: Container(
          margin: EdgeInsets.only(
            left: Scale.scaleWidth(context, 20),
            top: Scale.scaleHeight(context, 16),
          ),
          child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                    margin:
                        EdgeInsets.only(bottom: Scale.scaleHeight(context, 10)),
                    child: Text("Localização",
                        style: GoogleFonts.barlow(
                            fontSize: Scale.scaleWidth(context, 12),
                            fontWeight: FontWeight.normal,
                            color: const Color(0xFF787878)))),
                Container(
                  margin:
                      EdgeInsets.only(bottom: Scale.scaleHeight(context, 10)),
                  child: StreamBuilder(
                      stream: Stream.periodic(const Duration(seconds: 5)),
                      builder: (context, snapshot) {
                        final Future<Position> position =
                            Geolocator.getCurrentPosition(
                                desiredAccuracy: LocationAccuracy.high);

                        return FutureBuilder<String>(
                            future: getAddressFromPosition(position),
                            builder: (context, snapshot) {
                              return Text("${snapshot.data}",
                                  style: GoogleFonts.barlow(
                                      fontSize: Scale.scaleWidth(context, 17),
                                      fontWeight: FontWeight.w600,
                                      color: const Color(0xFF2C2B34)));
                            });
                      }),
                ),
                Container(
                  margin:
                      EdgeInsets.only(bottom: Scale.scaleWidth(context, 10)),
                  child: StreamBuilder(
                      stream: Stream.periodic(const Duration(seconds: 1)),
                      builder: (context, snapshot) {
                        String currentTime =
                            DateFormat('HH:mm').format(DateTime.now());

                        return Text("Hoje, $currentTime",
                            style: GoogleFonts.barlow(
                                fontSize: Scale.scaleWidth(context, 12),
                                fontWeight: FontWeight.normal,
                                color: const Color(0xFF787878)));
                      }),
                ),
              ]),
        ),
      ),
      childSecond: ClipRRect(
          borderRadius: const BorderRadius.all(Radius.circular(20)),
          child: MapShell()),
    );
  }

  Future<String> getAddressFromPosition(Future<Position> pos) async {
    try {
      Position position = await pos;
      List<Placemark> placemarks = await placemarkFromCoordinates(
        position.latitude,
        position.longitude,
      );

      if (placemarks.isNotEmpty) {
        Placemark placemark = placemarks[0];
        String address = '';
        if (placemark.street != null) {
          address += placemark.street! + ', ';
        }
        if (placemark.name != null) {
          address += placemark.name! + ', ';
        }
        if (placemark.subLocality != null) {
          address += placemark.subLocality! + ', ';
        }
        if (placemark.locality != null) {
          address += placemark.locality! + ' ';
        }

        return address;
      } else {
        return 'Address not found';
      }
    } catch (e) {
      return 'Error: $e';
    }
  }
}
