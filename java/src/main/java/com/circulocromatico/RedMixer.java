package com.circulocromatico;

public class RedMixer implements ColorMixer {
    public static final ChromaticCircle.Color RED = ChromaticCircle.Color.RED;

    @Override
    public ChromaticCircle.Color mixColor(ChromaticCircle.Color color) {
        if (RED.equals(color)) {
            return color;
        }
        if (color == ChromaticCircle.Color.YELLOW) {
            return ChromaticCircle.Color.ORANGE;
        }
        if (color == ChromaticCircle.Color.BLUE) {
            return ChromaticCircle.Color.VIOLET;
        }
        throw new IllegalArgumentException("Invalid color: " + color);
    }

    @Override
    public boolean canMix(ChromaticCircle.Color color) {
        return color == RED;
    }
}