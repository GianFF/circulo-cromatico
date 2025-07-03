package com.circulocromatico;

public interface ColorMixer {
    ChromaticCircle.Color mixColor(ChromaticCircle.Color color);

    boolean canMix(ChromaticCircle.Color color);
}
