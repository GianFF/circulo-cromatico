import { ChromaticCircle } from '../src/ChromaticCircle';
import { Color } from '../src/Color';

describe('ChromaticCircle', () => {
  describe('mixColors', () => {
    it('should return the same color if both colors are the same', () => {
      const circulo = new ChromaticCircle(Color.BLUE);

      expect(circulo.mixColors(Color.BLUE)).toBe(Color.BLUE);
    });

    it('should mix blue and yellow to create green', () => {
      const circulo = new ChromaticCircle(Color.BLUE);

      expect(circulo.mixColors(Color.YELLOW)).toBe(Color.GREEN);
    });

    it('should mix blue and red to create violet', () => {
      const circulo = new ChromaticCircle(Color.BLUE);

      expect(circulo.mixColors(Color.RED)).toBe(Color.VIOLET);
    });

    it('should mix red and yellow to create orange', () => {
      const circulo = new ChromaticCircle(Color.RED);

      expect(circulo.mixColors(Color.YELLOW)).toBe(Color.ORANGE);
    });

    it('should mix red and blue to create violet', () => {
      const circulo = new ChromaticCircle(Color.RED);

      expect(circulo.mixColors(Color.BLUE)).toBe(Color.VIOLET);
    });

    it('should mix yellow and red to create orange', () => {
      const circulo = new ChromaticCircle(Color.YELLOW);

      expect(circulo.mixColors(Color.RED)).toBe(Color.ORANGE);
    });

    it('should mix yellow and blue to create green', () => {
      const circulo = new ChromaticCircle(Color.YELLOW);

      expect(circulo.mixColors(Color.BLUE)).toBe(Color.GREEN);
    });

    it('should throw an error for invalid color combinations', () => {
      const circulo = new ChromaticCircle(Color.RED);

      expect(() => circulo.mixColors(Color.NOT_A_COLOR)).toThrow('invalid color: not-a-color');
    });
  });
});
