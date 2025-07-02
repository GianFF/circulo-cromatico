import { Color } from "./Color";

export interface ColorMixer {
    mix(anotherColor: Color): Color;
}
