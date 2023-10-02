class StreamManager {
  static Stream<String> convertAndFilterStreamToRPM(
      Stream<List<int>> inputStream) async* {
    await for (List<int> data in inputStream) {
      // Convert the List<int> to a String
      String dataAsString = String.fromCharCodes(data).trim();
      List<String> parts = dataAsString.split(' ');
      // Filter the data based on some boolean condition
      bool shouldInclude =
          parts.length == 4 && parts[0] == "41" && parts[1] == "0C";

      if (shouldInclude) {
        yield dataAsString;
      }
    }
  }

  static Stream<String> convertAndFilterStreamToCoolant(
      Stream<List<int>> inputStream) async* {
    await for (List<int> data in inputStream) {
      // Convert the List<int> to a String
      String dataAsString = String.fromCharCodes(data).trim();
      List<String> parts = dataAsString.split(' ');
      // Filter the data based on some boolean condition
      bool shouldInclude =
          parts.length == 3 && parts[0] == "41" && parts[1] == "05";

      if (shouldInclude) {
        yield dataAsString;
      }
    }
  }
}
