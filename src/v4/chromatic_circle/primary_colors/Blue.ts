import { Color } from "../Color";
import { Green } from "../secondary_colors/Green";
import { Violet } from "../secondary_colors/Violet";

export class Blue implements Color {
    mix(anotherColor: Color): Color {
        return anotherColor.mixWithBlue(); // double dispatch
    }

    mixWithRed(): Color {
        return new Violet();
    }

    mixWithYellow(): Color {
        return new Green();
    }

    mixWithBlue(): Color {
        return this;
    }
}