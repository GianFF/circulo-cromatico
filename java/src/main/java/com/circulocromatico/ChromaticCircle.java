package com.circulocromatico;

import java.util.Arrays;
import java.util.stream.Stream;

/**
 * ChromaticCircle class that simulates a color mixing system based on a filter.
 * The filter can be one of the primary colors: RED, BLUE, or YELLOW.
 * It mixes colors according to the rules of color theory.
 */
public class ChromaticCircle {
    private final Color filter;
    private final ColorMixer[] mixers;

    public ChromaticCircle(Color filter) {
        this.filter = filter;
        ColorMixer blueMixer = new BlueMixer();
        ColorMixer colorMixer = new RedMixer();
        YellowMixer yellowMixer = new YellowMixer();
        this.mixers = new ColorMixer[] {blueMixer, colorMixer, yellowMixer};
    }

    public Color mixColors(Color color) {
        return Arrays.stream(mixers).dropWhile(mixer -> !mixer.canMix(filter))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("No mixer found for filter: " + filter))
                .mixColor(color);
    }

    public enum Color {
        RED,
        BLUE,
        YELLOW,
        GREEN,
        ORANGE,
        VIOLET
    }
}
