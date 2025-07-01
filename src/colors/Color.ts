import { ColorInterface } from "./ColorInterface";
import { ColorEnum } from "./ColorEnum";

export abstract class Color implements ColorInterface {
    protected readonly value: ColorEnum;

    constructor(value: ColorEnum) {
        this.value = value;
    }

    mix(aColor: Color): Color {
        return aColor.mixMe(this.value);
    }

    mixMe(value: ColorEnum): Color {
        throw new Error('Should be implemented!');
    }
}