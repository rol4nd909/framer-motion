import { min as _min, max as _max } from '../design-tokens/viewports.json';
import type { Token } from './tokens-to-tailwind';

type Props = {
  name: string;
  min: number;
  max: number;
  lineHeight?: number;
}

/**
 * Takes an array of tokens and sends back an array of name
 * and clamp pairs for CSS fluid values.
 *
 * @param {array} tokens array of {name: string, min: number, max: number}
 * @returns {array} {name: string, value: string}
 */
const clampGenerator = (tokens: Props[]): Token[] => {
  const rootSize = 16;

  return tokens.map(({ name, min, max, lineHeight }: Props) => {
    if (min === max) {
      return { name, value: `${min / rootSize}rem`, lineHeight };
    }

    // Convert the min and max sizes to rems
    const minSize = min / rootSize;
    const maxSize = max / rootSize;

    // Convert the pixel viewport sizes into rems
    const minViewport = _min / rootSize;
    const maxViewport = _max / rootSize;

    // Slope and intersection allow us to have a fluid value but also keep that sensible
    const slope = (maxSize - minSize) / (maxViewport - minViewport);
    const intersection = -1 * minViewport * slope + minSize;

    return {
      name,
      value: `clamp(${minSize}rem, ${intersection.toFixed(2)}rem + ${(slope * 100).toFixed(2)}vw, ${maxSize}rem)`,
      lineHeight,
    };
  });
};

export default clampGenerator;
