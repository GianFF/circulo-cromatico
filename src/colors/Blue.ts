import { Color } from "./Color";
import { ColorEnum } from "./ColorEnum";
import { Green } from "./Green";
import { Violet } from "./Violet";

export class Blue extends Color {
    constructor() {
        super(ColorEnum.BLUE);
    }

    mixMe(aColor: ColorEnum): Color {
        if (aColor === ColorEnum.BLUE) {
            return this;
        }
        if (aColor === ColorEnum.YELLOW) {
            return new Green();
        }
        if (aColor === ColorEnum.RED) {
            return new Violet();
        }
        throw new Error(`color: ${aColor} not implemented.`);
    }
}