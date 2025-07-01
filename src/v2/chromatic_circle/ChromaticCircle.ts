import { ColorMixer } from "./mixers/ColorMixer";
import { Color } from "./Color";
import { BlueMixer } from "./mixers/BlueMixer";
import { RedMixer } from "./mixers/RedMixer";
import { YellowMixer } from "./mixers/YellowMixer";

export class ChromaticCircle {
  private readonly filter: Color;
  private readonly mixers: ColorMixer[];

  constructor(filter: Color) {
    this.filter = filter;
    this.mixers = [new BlueMixer(), new RedMixer(), new YellowMixer()];
  }

  public mixColors(color: Color): Color {
    const colorMixer = this.mixers.find((mixer) => mixer.canMix(this.filter));
    if (!colorMixer) {
      throw new Error(`No color mixer found that can handle filter: ${this.filter}`);
    }
    return colorMixer.mixColors(color);
  }
}
