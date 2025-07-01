import { Color } from '../Color';
import { ColorMixer } from './ColorMixer';

export class RedMixer implements ColorMixer {
  private readonly color: Color;

  constructor() {
    this.color = Color.RED;
  }

  public canMix(color: Color): boolean {
    return color === this.color;
  }

  public mixColors(color: Color): Color {
    if (color == this.color) {
      return color;
    }
    if (color === Color.YELLOW) {
      return Color.ORANGE;
    }
    if (color === Color.BLUE) {
      return Color.VIOLET;
    }
    throw new Error(`invalid color: ${color}`);
  }
}
