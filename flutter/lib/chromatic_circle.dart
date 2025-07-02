import 'dart:ui';

class ChromaticCircle {
  final Color filter;

  ChromaticCircle({
    required this.filter,
  });

  Color mixColors(Color color) {
    if (filter == color) {
      return color;
    }

    if (filter == Colors.blue) {
      if (color == Colors.blue) {
        return color;
      }
      if (color == Colors.yellow) {
        return Colors.green;
      }
      if (color == Colors.red) {
        return Colors.purple;
      }
    }

    if (filter == Colors.red) {
      if (color == Colors.yellow) {
        return Colors.orange;
      }
      if (color == Colors.blue) {
        return Colors.purple;
      }
    }

    if (filter == Colors.yellow) {
      if (color == Colors.red) {
        return Colors.orange;
      }
      if (color == Colors.blue) {
        return Colors.green;
      }
    }

    throw ArgumentError('Invalid color: ${color.toString()}');
  }
}
