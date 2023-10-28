import 'package:flutter/material.dart';

class Message extends StatelessWidget {
  Message({
    super.key,
    required this.message,
  });

  final String message;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          constraints: BoxConstraints(maxWidth: 180), // Limit the maximum width
          padding: const EdgeInsets.all(16),
          margin: const EdgeInsets.only(left: 180, bottom: 16),
          decoration: ShapeDecoration(
            color: Color(0xFF0070F0),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.only(
                topLeft: Radius.circular(24),
                topRight: Radius.circular(24),
                bottomLeft: Radius.circular(24),
              ),
            ),
          ),
          child: Text(
            '$message',
            textAlign: TextAlign.left,
            style: TextStyle(
              color: Colors.white,
              fontSize: 16,
              fontFamily: 'DM Sans',
              fontWeight: FontWeight.w400,
              height: 1.5, // Adjust the line height as needed
            ),
          ),
        ),
      ],
    );
  }
}

class NetworkMessage extends StatelessWidget {
  NetworkMessage({
    super.key,
    required this.message,
  });

  final String message;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          width: 327,
          margin: const EdgeInsets.only(bottom: 16),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                width: 32,
                height: 32,
                child: Stack(
                  children: [
                    Positioned(
                      left: 0,
                      top: 0,
                      child: Container(
                        width: 32,
                        height: 32,
                        decoration: ShapeDecoration(
                          color: Color(0xFFF2F8FF),
                          shape: CircleBorder(),
                        ),
                      ),
                    ),
                    Positioned(
                      left: 4,
                      top: 4,
                      child: Container(
                        width: 24,
                        height: 24,
                        decoration: BoxDecoration(
                          image: DecorationImage(
                            image: AssetImage("assets/images/obdzito.png"),
                            fit: BoxFit.fill,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(width: 8),
              Flexible(
                child: Container(
                  padding: const EdgeInsets.all(16),
                  decoration: ShapeDecoration(
                    color: Color(0xFFF2F3F4),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.only(
                        topRight: Radius.circular(16),
                        bottomLeft: Radius.circular(16),
                        bottomRight: Radius.circular(16),
                      ),
                    ),
                  ),
                  child: Text(
                    '$message',
                    style: TextStyle(
                      color: Color(0xFF303437),
                      fontSize: 16,
                      fontFamily: 'DM Sans',
                      fontWeight: FontWeight.w400,
                      height: 1.5,
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
