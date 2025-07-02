import { Color } from '../Color';
import { ColorMixer } from './ColorMixer';

export class BlueMixer implements ColorMixer {
  private readonly color: Color;

  constructor() {
    this.color = Color.BLUE;
  }

  public canMix(color: Color): boolean {
    return color === this.color;
  }

  public mixColors(color: Color): Color {
    if (color == this.color) {
      return color;
    }
    if (color === Color.YELLOW) {
      return Color.GREEN;
    }
    if (color === Color.RED) {
      return Color.VIOLET;
    }
    throw new Error(`invalid color: ${color}`);
  }
}
