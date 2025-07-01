import { Blue } from '../src/colors/Blue';
import { Green } from '../src/colors/Green';
import { Orange } from '../src/colors/Orange';
import { Red } from '../src/colors/Red';
import { Violet } from '../src/colors/Violet';
import { Yellow } from '../src/colors/Yellow';

describe('Color', () => {
    it('should return the same color when mixing with itself', () => {
        const aBlue = new Blue();
        const anotherBlue = new Blue();

        const expected = aBlue.mix(anotherBlue);

        expect(expected).toEqual(new Blue());
    });

    it('should mix blue and yellow to create green', () => {
        const aBlue = new Blue();
        const aYellow = new Yellow();

        const expected = aBlue.mix(aYellow);

        expect(expected).toEqual(new Green());
    });

    it('should mix blue and red to create violet', () => {
        const aBlue = new Blue();
        const aRed = new Red();

        const expected = aBlue.mix(aRed);

        expect(expected).toEqual(new Violet());
    });

    it('should mix red and yellow to create orange', () => {
        const aRed = new Red();
        const aYellow = new Yellow();

        const expected = aRed.mix(aYellow);

        expect(expected).toEqual(new Orange());
    });

    it('should mix red and blue to create violet', () => {
        const aRed = new Red();
        const aBlue = new Blue();

        const expected = aRed.mix(aBlue);

        expect(expected).toEqual(new Violet());
    });

    it('should mix yellow and red to create orange', () => {
        const aYellow = new Yellow();
        const aRed = new Red();

        const expected = aYellow.mix(aRed);

        expect(expected).toEqual(new Orange());
    });

    it('should mix yellow and blue to create green', () => {
        const aYellow = new Yellow();
        const aBlue = new Blue();

        const expected = aYellow.mix(aBlue);

        expect(expected).toEqual(new Green());
    });

    it('should throw an error if color mix is not implemented', () => {
        const aRed = new Red();
        const aViolet = new Violet();

        expect(() => aRed.mix(aViolet)).toThrow('color: red not implemented.');
    });
});