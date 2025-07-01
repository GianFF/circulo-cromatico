import { Color } from "../Color";
import { Orange } from "../secondary_colors/Orange";
import { Violet } from "../secondary_colors/Violet";

export class Red implements Color {
  mix(anotherColor: Color): Color {
    return anotherColor.mixWithRed();
  }

  mixWithRed(): Color {
    return this;
  }

  mixWithYellow(): Color {
    return new Orange();
  }

  mixWithBlue(): Color {
    return new Violet();
  }
}
