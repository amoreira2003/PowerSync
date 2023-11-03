import 'package:flutter/material.dart';
import 'package:flutter_reactive_ble/flutter_reactive_ble.dart';
import 'package:flutter_svg/svg.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:intl/intl.dart';
import 'package:raizen_obd/components/ChatSuggestion.dart';
import 'package:raizen_obd/components/Messages.dart';
import 'package:raizen_obd/methods/Scale.dart';

class ChatWebsocket extends StatefulWidget {
  const ChatWebsocket(
      {super.key,
      required this.rpm,
      required this.coolant,
      required this.battery});

  final dynamic rpm;
  final dynamic coolant;
  final dynamic battery;

  @override
  State<ChatWebsocket> createState() => _ChatState();
}

class _ChatState extends State<ChatWebsocket> {
  void addSugesstion(message, callback) {
    setState(() {
      messages.add(ChatSuggestion(
        message: message,
        callback: callback,
      ));
      messages = messages;
    });
    _scrollToBottom();
  }

  void addSugesstionNoScroll(message, callback) {
    setState(() {
      messages.add(ChatSuggestion(
        message: message,
        callback: callback,
      ));
      messages = messages;
    });
  }

  void addNetworkMessage(message) {
    setState(() {
      messages.add(NetworkMessage(message: message));
      print("State Update Run");
      messages = messages;
    });
    _scrollToBottom();
  }

  void addNetworkMessageNoScroll(message) {
    setState(() {
      messages.add(NetworkMessage(message: message));
      print("State Update Run");
      messages = messages;
    });
  }

  void addMessage(message) {
    setState(() {
      messages.add(Message(message: message));
      messages = messages;
    });
    print(messages.length);
    _scrollToBottom();
  }

  TextEditingController _textEditingController = TextEditingController();
  ScrollController _scrollController = ScrollController();
  List<Widget> messages = [
    NetworkMessage(
        message:
            "Olá, me chamo OBDZito, seu assistente virtual para o seu carro. Como posso ajudar?"),
  ]; // List of messages6

  @override
  void dispose() {
    _textEditingController.dispose();
    super.dispose();
  }

  void sendMessageToObd(message) {
    addMessage(message);
    switch (message) {
      case 'value':
        break;
      default:
    }
  }

  @override
  void initState() {
    super.initState();

    addSugesstionNoScroll("Gostaria de ver as opções.", () {
      addNetworkMessage("Aqui estão as opções:");
      addSugesstionNoScroll("Voltagem da Bateria", () {
        addMessage("Qual a voltagem da minha bateria?");
        if (widget.battery < 12.2) {
          addNetworkMessageNoScroll(
              "A voltagem da sua bateria é de ${widget.battery}V");
          addNetworkMessageNoScroll(
              "A voltagem da sua bateria está baixa. Recomendamos que você substitua a bateria.");
        } else {
          addNetworkMessageNoScroll(
              "A voltagem da sua bateria é de ${widget.battery}V");
        }

        _scrollToBottom();
      });

      addSugesstionNoScroll("Temperatura do Radiador", () {
        addMessage("Qual a temperatura do Radiador?");
        if (widget.coolant < 65) {
          addNetworkMessageNoScroll(
              "Temperatura atual do radiador é de ${widget.coolant}ºC. O carro ainda está aquecendo para sua temperatura ideal.");
        } else if (widget.coolant > 120) {
          addNetworkMessage(
              "Temperatura atual do radiador é de ${widget.coolant}ºC. O carro está superaquecendo.");
        } else {
          addNetworkMessageNoScroll(
              "Temperatura atual do radiador é de ${widget.coolant}ºC.");
        }

        _scrollToBottom();
      });

      addSugesstionNoScroll("Qual o RPM do carro?", () {
        addMessage("Qual o RPM do carro?");
        addNetworkMessage('O RPM do carro é de ${widget.rpm}RPM');
        _scrollToBottom();
      });
    });
  }

  void _scrollToBottom() {
    _scrollController.animateTo(
      _scrollController.position.maxScrollExtent,
      duration: Duration(milliseconds: 300),
      curve: Curves.easeOut,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SafeArea(
      child: Column(
        children: [
          Row(
            children: [
              Container(
                child: TextButton(
                    style: ElevatedButton.styleFrom(
                      padding: EdgeInsets.all(20),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(
                            120), // Adjust the radius as needed
                      ),
                    ),
                    onPressed: () {
                      Navigator.of(context).pop();
                    },
                    child: SvgPicture.asset('assets/images/Left.svg')),
              ),
              Container(
                margin: EdgeInsets.only(
                    left: Scale.scaleWidth(context, 66.5),
                    top: Scale.scaleHeight(context, 16),
                    bottom: Scale.scaleHeight(context, 8)),
                child: Row(
                  children: [
                    Container(
                      margin:
                          EdgeInsets.only(right: Scale.scaleWidth(context, 4)),
                      child: ClipRRect(
                          borderRadius: BorderRadius.circular(
                              50), // Half of the width/height to make it circular
                          child: Container(
                            color: Color.fromARGB(255, 242, 248, 255),
                            child: Image.asset(
                              'assets/images/obdzito.png',
                              width: 44,
                              height: 44,
                            ),
                          )),
                    ),
                    Column(
                      children: [
                        Text("OBDzito",
                            style: GoogleFonts.dmSans(
                                fontSize: Scale.scaleWidth(context, 14),
                                fontWeight: FontWeight.w700,
                                color: const Color(0xFF202325))),
                        Row(
                          children: [
                            Container(
                              margin: EdgeInsets.only(
                                  right: Scale.scaleWidth(context, 4)),
                              child: SvgPicture.asset('assets/images/dot.svg',
                                  colorFilter: const ColorFilter.mode(
                                      Color.fromARGB(255, 245, 188, 66),
                                      BlendMode.srcIn),
                                  width: Scale.scaleWidth(context, 8),
                                  height: Scale.scaleHeight(context, 8)),
                            ),
                            Text("Online",
                                style: GoogleFonts.dmSans(
                                    fontSize: Scale.scaleWidth(context, 14),
                                    fontWeight: FontWeight.w600,
                                    color: const Color(0xFF72777A))),
                          ],
                        )
                      ],
                    )
                  ],
                ),
              ),
            ],
          ),
          Container(
            height: 16,
            margin: EdgeInsets.only(
                top: Scale.scaleHeight(context, 0),
                bottom: Scale.scaleHeight(context, 8)),
            child: StreamBuilder(
                stream: Stream.periodic(const Duration(seconds: 1)),
                builder: (context, snapshot) {
                  String currentTime =
                      DateFormat('HH:mm').format(DateTime.now());
                  String dayOfWeek = DateFormat('EEEE').format(DateTime.now());

                  return Text("$dayOfWeek, $currentTime",
                      style: GoogleFonts.dmSans(
                          fontSize: Scale.scaleWidth(context, 12),
                          fontWeight: FontWeight.normal,
                          color: const Color(0xFF72777A)));
                }),
          ),
          Expanded(
              child: ListView.builder(
            padding: EdgeInsets.only(top: Scale.scaleWidth(context, 5)),
            controller: _scrollController,
            itemCount: messages.length,
            itemBuilder: (context, index) {
              return messages[index];
              // Other widgets for each list item
            },
          )),
          Row(
            children: [
              Container(
                padding: EdgeInsets.symmetric(horizontal: 24, vertical: 10),
                child: ConstrainedBox(
                  constraints: BoxConstraints.tight(Size(267, 44)),
                  child: Center(
                    child: TextField(
                      onTap: () {
                        _scrollToBottom();
                      },
                      textCapitalization: TextCapitalization.characters,
                      controller: _textEditingController,
                      decoration: InputDecoration(
                        hintText: "Digite aqui...",
                        hintStyle: TextStyle(
                          height: 0.9,
                          color: Color(0xFF72777A),
                          fontSize: 16,
                          fontFamily: 'DM Sans',
                          fontWeight: FontWeight.w400,
                        ),
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(48),
                          borderSide: BorderSide(
                            width: 1.50,
                            color: Color(0xFF979C9E),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              InkWell(
                enableFeedback: false,
                onTap: () {
                  sendMessageToObd(_textEditingController.text);
                  _textEditingController.clear();
                  _scrollToBottom();
                },
                child: Container(
                  width: 44,
                  height: 44,
                  decoration: ShapeDecoration(
                    color: Color(0xFF303437),
                    shape: CircleBorder(),
                  ),
                  child: Center(
                    child: Container(
                      width: 24,
                      height: 24,
                      child: SvgPicture.asset('assets/images/send.svg'),
                    ),
                  ),
                ),
              )
            ],
          )
        ],
      ),
    ));
  }
}
