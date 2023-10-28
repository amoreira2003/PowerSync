import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:raizen_obd/methods/Scale.dart';

class WidgetCarousel extends StatefulWidget {
  final List<Widget> widgets;

  WidgetCarousel({required this.widgets});

  @override
  State<WidgetCarousel> createState() => _WidgetCarouselState();
}

class _WidgetCarouselState extends State<WidgetCarousel> {
  int _currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        CarouselSlider(
          options: CarouselOptions(
              height: Scale.scaleHeight(
                  context, 240), // Set the height of the carousel
              enlargeCenterPage: false, // Make the center item larger
              autoPlay: true, // Auto-play the carousel
              autoPlayInterval:
                  Duration(seconds: 10), // Set the auto-play interval
              autoPlayAnimationDuration:
                  Duration(milliseconds: 1200), // Set the animation duration
              autoPlayCurve: Curves.fastOutSlowIn, // Set the animation curve
              pauseAutoPlayOnTouch: true, // Pause auto-play on touch
              enableInfiniteScroll: false, // Disable infinite scroll
              viewportFraction: 1.0,
              onPageChanged: (index, reason) {
                setState(() {
                  _currentIndex = index;
                });
              } // Pause auto-play on touch
              ),
          items: widget.widgets.map((widget) {
            return Builder(
              builder: (BuildContext context) {
                return Container(
                  width: MediaQuery.of(context).size.width,
                  margin: EdgeInsets.symmetric(
                      horizontal: Scale.scaleWidth(context, 37.0)),
                  child: widget,
                );
              },
            );
          }).toList(),
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: widget.widgets.asMap().entries.map((entry) {
            int index = entry.key;
            Widget widget = entry.value;
            return Container(
              width: 8.0,
              height: 8.0,
              margin: EdgeInsets.symmetric(vertical: 0.0, horizontal: 2.0),
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: _currentIndex == index
                    ? Colors.grey
                    : Colors.grey.withOpacity(0.3),
              ),
            );
          }).toList(),
        ),
      ],
    );
  }
}
