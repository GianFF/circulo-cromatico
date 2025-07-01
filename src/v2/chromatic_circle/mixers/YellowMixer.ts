import { Color } from '../Color';
import { ColorMixer } from './ColorMixer';

export class YellowMixer implements ColorMixer {
  private readonly color: Color;

  constructor() {
    this.color = Color.YELLOW;
  }

  public canMix(color: Color): boolean {
    return color === this.color;
  }

  public mixColors(color: Color): Color {
    if (color == this.color) {
      return color;
    }
    if (color === Color.RED) {
      return Color.ORANGE;
    }
    if (color === Color.BLUE) {
      return Color.GREEN;
    }
    throw new Error(`invalid color: ${color}`);
  }
}
