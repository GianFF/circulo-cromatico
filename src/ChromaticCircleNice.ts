import { ColorMixer } from "./mixers/ColorMixer";
import { Color } from "./Color";
import { Blue } from "./mixers/BlueMixer";
import { RedMixer } from "./mixers/RedMixer";
import { Yellow } from "./mixers/YellowMixer";

export class ChromaticCircle {
  private readonly filter: Color;
  private readonly mixers: ColorMixer[];

  constructor(filter: Color) {
    this.filter = filter;
    this.mixers = [new Blue(), new RedMixer(), new Yellow()];
  }

  public mixColors(color: Color): Color {
    const colorMixer = this.mixers.find((mixer) => mixer.canMix(this.filter));
    if (!colorMixer) {
      throw new Error(`No color mixer found that can handle filter: ${this.filter}`);
    }
    return colorMixer.mixColors(color);
  }
}
