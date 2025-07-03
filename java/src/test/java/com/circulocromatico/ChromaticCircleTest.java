package com.circulocromatico;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ChromaticCircleTest {
    @Test
    public void testMixColorsWithBlueFilter() {
        ChromaticCircle circle = new ChromaticCircle(ChromaticCircle.Color.BLUE);
        
        assertEquals(ChromaticCircle.Color.BLUE, circle.mixColors(ChromaticCircle.Color.BLUE));
        assertEquals(ChromaticCircle.Color.GREEN, circle.mixColors(ChromaticCircle.Color.YELLOW));
        assertEquals(ChromaticCircle.Color.VIOLET, circle.mixColors(ChromaticCircle.Color.RED));
        
        assertThrows(IllegalArgumentException.class, () -> 
            circle.mixColors(ChromaticCircle.Color.GREEN)
        );
    }

    @Test
    public void testMixColorsWithRedFilter() {
        ChromaticCircle circle = new ChromaticCircle(ChromaticCircle.Color.RED);
        
        assertEquals(ChromaticCircle.Color.RED, circle.mixColors(ChromaticCircle.Color.RED));
        assertEquals(ChromaticCircle.Color.ORANGE, circle.mixColors(ChromaticCircle.Color.YELLOW));
        assertEquals(ChromaticCircle.Color.VIOLET, circle.mixColors(ChromaticCircle.Color.BLUE));
        
        assertThrows(IllegalArgumentException.class, () -> 
            circle.mixColors(ChromaticCircle.Color.GREEN)
        );
    }

    @Test
    public void testMixColorsWithYellowFilter() {
        ChromaticCircle circle = new ChromaticCircle(ChromaticCircle.Color.YELLOW);
        
        assertEquals(ChromaticCircle.Color.YELLOW, circle.mixColors(ChromaticCircle.Color.YELLOW));
        assertEquals(ChromaticCircle.Color.ORANGE, circle.mixColors(ChromaticCircle.Color.RED));
        assertEquals(ChromaticCircle.Color.GREEN, circle.mixColors(ChromaticCircle.Color.BLUE));
        
        assertThrows(IllegalArgumentException.class, () -> 
            circle.mixColors(ChromaticCircle.Color.VIOLET)
        );
    }

    @Test
    public void testMixColorsWithSameColor() {
        ChromaticCircle circle = new ChromaticCircle(ChromaticCircle.Color.YELLOW);
        
        assertEquals(ChromaticCircle.Color.YELLOW, circle.mixColors(ChromaticCircle.Color.YELLOW));
    }

    @Test
    public void testMixColorsNonExistingMixer() {
        ChromaticCircle circle = new ChromaticCircle(ChromaticCircle.Color.VIOLET);

        IllegalArgumentException illegalArgumentException = assertThrows(IllegalArgumentException.class, () ->
                circle.mixColors(ChromaticCircle.Color.VIOLET)
        );
        assertEquals("No mixer found for filter: VIOLET", illegalArgumentException.getMessage());
    }
}
