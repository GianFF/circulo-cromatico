import { Color } from "./Color";
import { ColorEnum } from "./ColorEnum";

export class Violet extends Color {
    constructor() {
        super(ColorEnum.VIOLET);
    }

    mixMe(aColor: ColorEnum): Color {
        throw new Error(`color: ${aColor} not implemented.`);
    }
}