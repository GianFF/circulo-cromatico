package com.circulocromatico;

public class YellowMixer implements ColorMixer {
    public static final ChromaticCircle.Color YELLOW = ChromaticCircle.Color.YELLOW;

    @Override
    public boolean canMix(ChromaticCircle.Color color) {
        return color == YELLOW;
    }

    @Override
    public ChromaticCircle.Color mixColor(ChromaticCircle.Color color) {
        if (YELLOW.equals(color)) {
            return color;
        }
        if (color == ChromaticCircle.Color.RED) {
            return ChromaticCircle.Color.ORANGE;
        }
        if (color == ChromaticCircle.Color.BLUE) {
            return ChromaticCircle.Color.GREEN;
        }
        throw new IllegalArgumentException("Invalid color: " + color);
    }
}