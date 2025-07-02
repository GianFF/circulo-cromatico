import { ChromaticCircle } from '../src/ChromaticCircle';

describe('ChromaticCircle', () => {
  describe('mixColors', () => {
    it('should return the same color if both colors are the same', () => {
      const circulo = new ChromaticCircle('blue');

      expect(circulo.mixColors('blue')).toBe('blue');
    });

    it('should mix blue and yellow to create green', () => {
      const circulo = new ChromaticCircle('blue');

      expect(circulo.mixColors('yellow')).toBe('green');
    });

    it('should mix blue and red to create violet', () => {
      const circulo = new ChromaticCircle('blue');

      expect(circulo.mixColors('red')).toBe('violet');
    });

    it('should mix red and yellow to create orange', () => {
      const circulo = new ChromaticCircle('red');

      expect(circulo.mixColors('yellow')).toBe('orange');
    });

    it('should mix red and blue to create violet', () => {
      const circulo = new ChromaticCircle('red');

      expect(circulo.mixColors('blue')).toBe('violet');
    });

    it('should mix yellow and red to create orange', () => {
      const circulo = new ChromaticCircle('yellow');

      expect(circulo.mixColors('red')).toBe('orange');
    });

    it('should mix yellow and blue to create green', () => {
      const circulo = new ChromaticCircle('yellow');

      expect(circulo.mixColors('blue')).toBe('green');
    });

    it('should throw an error for invalid color combinations', () => {
      const circulo = new ChromaticCircle('red');

      expect(() => circulo.mixColors('not-a-color')).toThrow('invalid color: not-a-color');
    });
  });
});
