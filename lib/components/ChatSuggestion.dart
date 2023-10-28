import 'package:flutter/material.dart';

class ChatSuggestion extends StatelessWidget {
  ChatSuggestion({super.key, required this.message, required this.callback});
  dynamic callback = () {};
  String message = '';
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        callback();
      },
      child: Column(
        children: [
          Container(
            constraints:
                BoxConstraints(maxWidth: 500), // Limit the maximum width
            padding: const EdgeInsets.all(16),
            margin: const EdgeInsets.only(left: 140, bottom: 16),
            decoration: ShapeDecoration(
              color: Color(0xFFF2F8FF),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.only(
                  bottomRight: Radius.circular(24),
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
                color: Color(0xFF006BE5),
                fontSize: 16,
                fontFamily: 'DM Sans',
                fontWeight: FontWeight.w400,
                height: 1.5, // Adjust the line height as needed
              ),
            ),
          ),
        ],
      ),
    );
  }
}
