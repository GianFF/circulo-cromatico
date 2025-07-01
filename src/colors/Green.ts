import { Color } from "./Color";
import { ColorEnum } from "./ColorEnum";

export class Green extends Color {
    constructor() {
        super(ColorEnum.GREEN);
    }

    mixMe(aColor: ColorEnum): Color {
        throw new Error(`color: ${aColor} not implemented.`);
    }
}
