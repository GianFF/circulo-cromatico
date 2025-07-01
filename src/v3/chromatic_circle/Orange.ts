import { Color } from "./Color";
import { ColorEnum } from "./ColorEnum";

export class Orange extends Color {
    constructor() {
        super(ColorEnum.ORANGE);
    }

    mixMe(aColor: ColorEnum): Color {
        throw new Error(`color: ${aColor} not implemented.`);
    }
}
