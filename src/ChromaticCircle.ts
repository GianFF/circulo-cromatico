import { Color } from "./Color";

export class ChromaticCircle {
  private readonly filter: Color;

  constructor(filter: Color) {
    this.filter = filter;
  }

  public mixColors(color: Color): Color {
    if (this.filter === color) {
      return color;
    }
    if (this.filter === Color.BLUE) {
      if (color == this.filter) {
        return color;
      }
      if (color === Color.YELLOW) {
        return Color.GREEN;
      }
      if (color === Color.RED) {
        return Color.VIOLET;
      }
    }
    if (this.filter === Color.RED) {
      if (color === Color.YELLOW) {
        return Color.ORANGE;
      }
      if (color === Color.BLUE) {
        return Color.VIOLET;
      }
    }
    if (this.filter === Color.YELLOW) {
      if (color === Color.RED) {
        return Color.ORANGE;
      }
      if (color === Color.BLUE) {
        return Color.GREEN;
      }
    }

    throw new Error(`invalid color: ${color}`);
  }
}
