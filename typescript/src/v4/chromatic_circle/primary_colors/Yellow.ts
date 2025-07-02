import { Color } from "../Color";
import { Orange } from "../secondary_colors/Orange";
import { Green } from "../secondary_colors/Green";

export class Yellow implements Color {
    mix(anotherColor: Color): Color {
        return anotherColor.mixWithYellow();
    }

    mixWithRed(): Color {
        return new Orange();
    }

    mixWithYellow(): Color {
        return this;
    }

    mixWithBlue(): Color {
        return new Green();
    }
}
