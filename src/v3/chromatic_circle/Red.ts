import { Color } from "./Color";
import { ColorEnum } from "./ColorEnum";
import { Orange } from "./Orange";
import { Violet } from "./Violet";

export class Red extends Color {
  constructor() {
      super(ColorEnum.RED);
  }

  mixMe(aColor: ColorEnum): Color {
    if (aColor === ColorEnum.RED) {
        return this;
    }
    if (aColor === ColorEnum.YELLOW) {
        return new Orange();
    }
    if (aColor === ColorEnum.BLUE) {
        return new Violet();
    }
    throw new Error(`color: ${aColor} not implemented.`);
  }
}
