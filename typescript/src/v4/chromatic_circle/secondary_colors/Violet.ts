import { Color } from "../Color";

export class Violet implements Color {
    mix(anotherColor: Color): Color {
        throw new Error('Should be implemented');
    }
    mixWithRed(): Color {
        throw new Error('Should be implemented');
    }
    mixWithYellow(): Color {
        throw new Error('Should be implemented');
    }
    mixWithBlue(): Color {
        throw new Error('Should be implemented');
    }
}