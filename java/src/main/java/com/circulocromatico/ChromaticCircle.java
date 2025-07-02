package com.circulocromatico;

public class ChromaticCircle {
    private final Color filter;

    public ChromaticCircle(Color filter) {
        this.filter = filter;
    }

    public Color mixColors(Color color) {
        if (filter.equals(color)) {
            return color;
        }

        if (filter == Color.BLUE) {
            if (color == Color.YELLOW) {
                return Color.GREEN;
            }
            if (color == Color.RED) {
                return Color.VIOLET;
            }
        }

        if (filter == Color.RED) {
            if (color == Color.YELLOW) {
                return Color.ORANGE;
            }
            if (color == Color.BLUE) {
                return Color.VIOLET;
            }
        }

        if (filter == Color.YELLOW) {
            if (color == Color.RED) {
                return Color.ORANGE;
            }
            if (color == Color.BLUE) {
                return Color.GREEN;
            }
        }

        throw new IllegalArgumentException("Invalid color: " + color);
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
