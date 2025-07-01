import { Color } from "./Color";
import { ColorEnum } from "./ColorEnum";
import { Green } from "./Green";
import { Orange } from "./Orange";

export class Yellow extends Color {
    constructor() {
        super(ColorEnum.YELLOW);
    }

    mixMe(aColor: ColorEnum): Color {
        if (aColor === ColorEnum.YELLOW) {
            return this;
        }
        if (aColor === ColorEnum.BLUE) {
            return new Green();
        }
        if (aColor === ColorEnum.RED) {
            return new Orange();
        }
        throw new Error(`color: ${aColor} not implemented.`);
    }
}
