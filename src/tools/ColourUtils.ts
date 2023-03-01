import * as fn from './fn';

export type ColourValues = [number, number, number];
export type HSLValues = [number, number, number];

/**
 * ColourUtils.namedColours
 *
 * A dictionary of different colour names and their RGB values
 *
 * ```typescript
 * ColourUtils.namedColours.blue // [0, 0, 255]
 * ColourUtils.namedColours.red // [255, 0, 0]
 * ColourUtils.namedColours.green // [0, 255, 0]
 *
 * ColourUtils.namedColours.azure // [240, 255, 255]
 * ColourUtils.namedColours.darkorange // [255, 140, 0]
 * ColourUtils.namedColours.dodgerblue // [30, 144, 255]
 * ```
 */
export const namedColours = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fractal: [128, 128, 128],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray0: [0, 0, 0],
  gray1: [3, 3, 3],
  gray2: [5, 5, 5],
  gray3: [8, 8, 8],
  gray4: [10, 10, 10],
  gray5: [13, 13, 13],
  gray6: [15, 15, 15],
  gray7: [18, 18, 18],
  gray8: [20, 20, 20],
  gray9: [23, 23, 23],
  gray10: [26, 26, 26],
  gray11: [28, 28, 28],
  gray12: [31, 31, 31],
  gray13: [33, 33, 33],
  gray14: [36, 36, 36],
  gray15: [38, 38, 38],
  gray16: [41, 41, 41],
  gray17: [43, 43, 43],
  gray18: [46, 46, 46],
  gray19: [48, 48, 48],
  gray20: [51, 51, 51],
  gray21: [54, 54, 54],
  gray22: [56, 56, 56],
  gray23: [59, 59, 59],
  gray24: [61, 61, 61],
  gray25: [64, 64, 64],
  gray26: [66, 66, 66],
  gray27: [69, 69, 69],
  gray28: [71, 71, 71],
  gray29: [74, 74, 74],
  gray30: [77, 77, 77],
  gray31: [79, 79, 79],
  gray32: [82, 82, 82],
  gray33: [84, 84, 84],
  gray34: [87, 87, 87],
  gray35: [89, 89, 89],
  gray36: [92, 92, 92],
  gray37: [94, 94, 94],
  gray38: [97, 97, 97],
  gray39: [99, 99, 99],
  gray40: [102, 102, 102],
  gray41: [105, 105, 105],
  gray42: [107, 107, 107],
  gray43: [110, 110, 110],
  gray44: [112, 112, 112],
  gray45: [115, 115, 115],
  gray46: [117, 117, 117],
  gray47: [120, 120, 120],
  gray48: [122, 122, 122],
  gray49: [125, 125, 125],
  gray50: [127, 127, 127],
  gray51: [130, 130, 130],
  gray52: [133, 133, 133],
  gray53: [135, 135, 135],
  gray54: [138, 138, 138],
  gray55: [140, 140, 140],
  gray56: [143, 143, 143],
  gray57: [145, 145, 145],
  gray58: [148, 148, 148],
  gray59: [150, 150, 150],
  gray60: [153, 153, 153],
  gray61: [156, 156, 156],
  gray62: [158, 158, 158],
  gray63: [161, 161, 161],
  gray64: [163, 163, 163],
  gray65: [166, 166, 166],
  gray66: [168, 168, 168],
  gray67: [171, 171, 171],
  gray68: [173, 173, 173],
  gray69: [176, 176, 176],
  gray70: [179, 179, 179],
  gray71: [181, 181, 181],
  gray72: [184, 184, 184],
  gray73: [186, 186, 186],
  gray74: [189, 189, 189],
  gray75: [191, 191, 191],
  gray76: [194, 194, 194],
  gray77: [196, 196, 196],
  gray78: [199, 199, 199],
  gray79: [201, 201, 201],
  gray80: [204, 204, 204],
  gray81: [207, 207, 207],
  gray82: [209, 209, 209],
  gray83: [212, 212, 212],
  gray84: [214, 214, 214],
  gray85: [217, 217, 217],
  gray86: [219, 219, 219],
  gray87: [222, 222, 222],
  gray88: [224, 224, 224],
  gray89: [227, 227, 227],
  gray90: [229, 229, 229],
  gray91: [232, 232, 232],
  gray92: [235, 235, 235],
  gray93: [237, 237, 237],
  gray94: [240, 240, 240],
  gray95: [242, 242, 242],
  gray96: [245, 245, 245],
  gray97: [247, 247, 247],
  gray98: [250, 250, 250],
  gray99: [252, 252, 252],
  gray100: [255, 255, 255],
  gray: [126, 126, 126],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  none: [0, 0, 0],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
};

const limitValue = (val: number) => Math.max(0, Math.min(255, val));
const roundMinMax = (value: number, min: number = 0, max: number = 255) => Math.min(max, Math.max(min, Math.round(value)));

/**
 * ColourUtils.parse
 *
 * Parse a string into a colour object (RGB array)
 * Not extensive. Currently limited to:
 * - 3 char hexes
 * - 6 char hexes
 * - comma separated RGB values
 * - named colours (from namedColours dictionary)
 *
 * ```typescript
 * ColourUtils.parse('#FF0000') // [255, 0, 0]
 * ColourUtils.parse('rgb(255, 0, 0)') // [255, 0, 0]
 * ColourUtils.parse('red') // [255, 0, 0]
 * ```
 */
export const parse = (input: string): ColourValues => {
  const trimmed = (input + '').trim();

  if (namedColours[trimmed]) {
    return namedColours[trimmed];
  }

  if (/^rgb/.test(trimmed) || /([0-9]{1,3}(,|\s|\/)+){2}[0-9]{1,3}/.test(trimmed)) {
    const stripped = trimmed.replace(/[^0-9,/]/g, '');
    const [r, g, b] = [...stripped.split(/[^0-9]/).map(Number), 0, 0, 0].map(limitValue);
    return [r, g, b];
  }
  if (/^#/.test(trimmed) || /^([0-9A-F]{3}|[0-9A-F]{6})$/.test(trimmed)) {
    const stripped = trimmed.toUpperCase().replace(/[^0-9A-F]/g, '');
    let hexs: number[] = [];
    if (/^[0-9A-F]{3}$/.test(stripped)) {
      hexs = [...(stripped.match(/[0-9A-F]{1}/g) || [])].map((hex) => parseInt(hex, 16));
      hexs = hexs.map((val) => val * 17);
    }
    if (/^[0-9A-F]{6}$/.test(stripped)) {
      hexs = [...(stripped.match(/[0-9A-F]{2}/g) || [])].map((hex) => parseInt(hex, 16));
    }
    const [r, g, b] = hexs.map(limitValue);
    return [r, g, b];
  }
  return [0, 0, 0];
};

/**
 * ColourUtils.toHex
 *
 * Convert a colour object (RGB array) to a hex string
 *
 * ```typescript
 * ColourUtils.toHex([255, 0, 0]) // '#FF0000'
 * ```
 */
export const toHex = (colour: ColourValues): string => {
  const hexs = colour.map((val) => (val ?? 0).toString(16).padStart(2, '0'));
  return `#${hexs.join('')}`;
};

/**
 * ColourUtils.getLuminance
 *
 * IMPORTANT: This is not the same as the HSL luminance value.
 *
 * Get the luminance value of a given colour.
 *
 * Between 0 and 255. Calculated using the formula:
 *  (RED × 0.299) + (GREEN × 0.587) + (BLUE × 0.114)
 *
 * Is the Y (Luma) component of the YUV444 color model.
 *
 * ```typescript
 * getLuminance([255, 0, 0]); // 76.245
 * getLuminance([0, 255, 0]); // 149.685
 * getLuminance([0, 0, 255]); // 29.07
 * ```
 */
export const getLuminance = ([r, g, b]: ColourValues): number => {
  const [y, u, v] = toYUV([r, g, b]);
  return y;
};

//TODO docs
// YUV - https://en.wikipedia.org/wiki/YUV#Y%E2%80%B2UV444_to_RGB888_conversion
export const toYUV = ([r, g, b]: ColourValues): ColourValues => {
  const y = fn.fixFloat(0.299 * (r ?? 0) + 0.587 * (g ?? 0) + 0.114 * (b ?? 0));
  const u = fn.fixFloat(-0.14713 * (r ?? 0) - 0.28886 * (g ?? 0) + 0.436 * (b ?? 0));
  const v = fn.fixFloat(0.615 * (r ?? 0) - 0.51499 * (g ?? 0) - 0.10001 * (b ?? 0));
  return [y, u, v];
};

// TODO docs
// https://www.30secondsofcode.org/js/s/rgb-to-hsl
export const toHSL = (colour: ColourValues, round: boolean = true): HSLValues => {
  const r = colour[0] / 255;
  const g = colour[1] / 255;
  const b = colour[2] / 255;

  const M = Math.max(r, g, b);
  const m = M - Math.min(r, g, b);

  let d = 0;
  if (m) {
    if (M === r) {
      // prodominantly red
      d = (g - b) / m;
    } else {
      if (M === g) {
        // prodominantly green
        d = 2 + (b - r) / m;
      } else {
        // prodominantly blue
        d = 4 + (r - g) / m;
      }
    }
  }

  const result: HSLValues = [
    60 * d < 0 ? 60 * d + 360 : 60 * d,
    100 * (m ? (M <= 0.5 ? m / (2 * M - m) : m / (2 - (2 * M - m))) : 0),
    (100 * (2 * M - m)) / 2
  ];

  if (round) {
    return [roundMinMax(result[0], 0, 360), roundMinMax(result[1], 0, 100), roundMinMax(result[2], 0, 100)];
  }
  return result;
};

// TODO docs
// https://www.30secondsofcode.org/js/s/hsl-to-rgb
export const fromHSL = (hsl: HSLValues, round: boolean = true): ColourValues => {
  const h = hsl[0];
  const s = hsl[1] / 100;
  const l = hsl[2] / 100;

  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

  const result: ColourValues = [255 * f(0), 255 * f(8), 255 * f(4)];

  if (round) {
    return [roundMinMax(result[0], 0, 255), roundMinMax(result[1], 0, 255), roundMinMax(result[2], 0, 255)];
  }
  return result;
};

/**
 * ColourUtils.invertColour
 *
 * Get the opposite colour of a given colour.
 *
 * ```typescript
 * invertColour([255, 0, 0]); // [0, 255, 255]
 * invertColour([0, 255, 0]); // [ 255, 0, 255 ]
 * invertColour([0, 0, 255]); // [ 255, 255, 0 ]
 * ```
 */
export const invertColour = ([r, g, b]: ColourValues): ColourValues => [255 - r, 255 - g, 255 - b];

const white = [255, 255, 255] as ColourValues;
const black = [0, 0, 0] as ColourValues;

/**
 * ColourUtils.getContrastedColour
 *
 * Get the colour that contrasts the most with a given colour. (White or black)
 *
 * Returned colour can be used as a text colour on top of the provided colour
 *
 * ```typescript
 * getContrastedColour([255, 0, 0]); // [255, 255, 255]
 * getContrastedColour([255, 255, 0]); // [0, 0, 0]
 * ```
 */
export const getContrastedColour = (colour: ColourValues): ColourValues => (getLuminance(colour) > 186 ? black : white);

// TODO docs
// adjust a colour if a certain condition is met
// used for lightneing/darkening colours that are too light/dark
// all func values are HSL
export const getLimitedColour = (colour: ColourValues, checkFn: (hsl: HSLValues) => boolean, adjustFn: (hsl: HSLValues) => HSLValues) => {
  const hsl = toHSL(colour);
  if (checkFn(hsl)) {
    const adjusted = adjustFn(hsl);
    const out = fromHSL(adjusted);
    return out;
  }
  return colour;
};
