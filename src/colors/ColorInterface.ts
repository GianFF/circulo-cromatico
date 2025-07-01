import { Color } from "./Color";

export interface ColorInterface {
    mix(anotherColor: Color): Color;
}
