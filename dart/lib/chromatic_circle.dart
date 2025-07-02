class ChromaticCircle {
  final Color filter;

  const ChromaticCircle(this.filter);

  Color mixColors(Color color) {
    if (filter == color) {
      return color;
    }

    switch (filter) {
      case Color.blue:
        switch (color) {
          case Color.yellow:
            return Color.green;
          case Color.red:
            return Color.violet;
          default:
            throw ArgumentError('Invalid color: $color');
        }
      case Color.red:
        switch (color) {
          case Color.yellow:
            return Color.orange;
          case Color.blue:
            return Color.violet;
          default:
            throw ArgumentError('Invalid color: $color');
        }
      case Color.yellow:
        switch (color) {
          case Color.red:
            return Color.orange;
          case Color.blue:
            return Color.green;
          default:
            throw ArgumentError('Invalid color: $color');
        }
      default:
        throw ArgumentError('Invalid filter color: $filter');
    }
  }
}

enum Color {
  red,
  blue,
  yellow,
  green,
  orange,
  violet
}
