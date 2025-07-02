import { Color } from "./Color";

export interface PrimaryColorMixer {
    mixWithRed(): Color;
    mixWithYellow(): Color;
    mixWithBlue(): Color;
}
