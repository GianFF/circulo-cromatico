package com.circulocromatico;

public class BlueMixer implements ColorMixer {
    public static final ChromaticCircle.Color BLUE = ChromaticCircle.Color.BLUE;

    @Override
    public ChromaticCircle.Color mixColor(ChromaticCircle.Color color) {
        if (BLUE.equals(color)) {
            return color;
        }
        if (color == ChromaticCircle.Color.YELLOW) {
            return ChromaticCircle.Color.GREEN;
        }
        if (color == ChromaticCircle.Color.RED) {
            return ChromaticCircle.Color.VIOLET;
        }
        throw new IllegalArgumentException("Invalid color: " + color);
    }
    @Override
    public boolean canMix(ChromaticCircle.Color color) {
        return color == BLUE;
    }
}