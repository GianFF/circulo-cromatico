import { Color } from '../Color';

export interface ColorMixer {
  canMix(color: Color): boolean;
  mixColors(color: Color): Color;
}