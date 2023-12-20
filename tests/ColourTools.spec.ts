import * as swissak from '../';
import { register, kitchenSink, should } from './test-utils';

register({ describe, it, expect });

const testColours: {
  rgb: swissak.ColourTools.ColourValues;
  hsl: swissak.ColourTools.HSLValues;
  yuv: swissak.ColourTools.ColourValues;
  hslToRgb: swissak.ColourTools.ColourValues;
  inverted: swissak.ColourTools.ColourValues;
  contrasted: swissak.ColourTools.ColourValues;
  limitedSaturation50: swissak.ColourTools.ColourValues;
  limitedLightness10: swissak.ColourTools.ColourValues;
  hex: string;
  name?: string;
  rgbStr: string;
  hslStr: string;
}[] = [
  {
    rgb: [255, 0, 0],
    hsl: [0, 100, 50],
    yuv: [76.245, -37.51815, 156.825],
    hslToRgb: [255, 0, 0],
    inverted: [0, 255, 255],
    contrasted: [255, 255, 255],
    limitedSaturation50: [191, 64, 64],
    limitedLightness10: [51, 0, 0],
    hex: '#ff0000',
    name: 'red',
    rgbStr: 'rgb(255, 0, 0)',
    hslStr: 'hsl(0, 100, 50)'
  },
  {
    rgb: [0, 128, 0],
    hsl: [120, 34, 25],
    yuv: [75.136, -36.97408, -65.91872],
    hslToRgb: [42, 85, 42],
    inverted: [255, 127, 255],
    contrasted: [255, 255, 255],
    limitedSaturation50: [0, 128, 0],
    limitedLightness10: [17, 34, 17],
    hex: '#008000',
    name: 'green',
    rgbStr: 'rgb(0, 128, 0)',
    hslStr: 'hsl(120, 34, 25)'
  },
  {
    rgb: [0, 0, 255],
    hsl: [240, 100, 50],
    yuv: [29.07, 111.18, -25.50255],
    hslToRgb: [0, 0, 255],
    inverted: [255, 255, 0],
    contrasted: [255, 255, 255],
    limitedSaturation50: [64, 64, 191],
    limitedLightness10: [0, 0, 51],
    hex: '#0000ff',
    name: 'blue',
    rgbStr: 'rgb(0, 0, 255)',
    hslStr: 'hsl(240, 100, 50)'
  },
  {
    rgb: [0, 255, 255],
    hsl: [180, 100, 50],
    yuv: [178.755, 37.5207, -156.825],
    hslToRgb: [0, 255, 255],
    inverted: [255, 0, 0],
    contrasted: [255, 255, 255],
    limitedSaturation50: [64, 191, 191],
    limitedLightness10: [0, 51, 51],
    hex: '#00ffff',
    name: 'cyan',
    rgbStr: 'rgb(0, 255, 255)',
    hslStr: 'hsl(180, 100, 50)'
  },
  {
    rgb: [255, 0, 255],
    hsl: [300, 100, 50],
    yuv: [105.315, 73.66185, 131.32245],
    hslToRgb: [255, 0, 255],
    inverted: [0, 255, 0],
    contrasted: [255, 255, 255],
    limitedSaturation50: [191, 64, 191],
    limitedLightness10: [51, 0, 51],
    hex: '#ff00ff',
    name: 'magenta',
    rgbStr: 'rgb(255, 0, 255)',
    hslStr: 'hsl(300, 100, 50)'
  },
  {
    rgb: [255, 255, 0],
    hsl: [60, 100, 50],
    yuv: [225.93, -111.17745, 25.50255],
    hslToRgb: [255, 255, 0],
    inverted: [0, 0, 255],
    contrasted: [0, 0, 0],
    limitedSaturation50: [191, 191, 64],
    limitedLightness10: [51, 51, 0],
    hex: '#ffff00',
    name: 'yellow',
    rgbStr: 'rgb(255, 255, 0)',
    hslStr: 'hsl(60, 100, 50)'
  },
  {
    rgb: [127, 255, 0],
    hsl: [90, 100, 50],
    yuv: [187.658, -92.34481, -53.21745],
    hslToRgb: [128, 255, 0],
    inverted: [128, 0, 255],
    contrasted: [0, 0, 0],
    limitedSaturation50: [128, 191, 64],
    limitedLightness10: [26, 51, 0],
    hex: '#7fff00',
    name: 'chartreuse',
    rgbStr: 'rgb(127, 255, 0)',
    hslStr: 'hsl(90, 100, 50)'
  },
  {
    rgb: [175, 238, 238],
    hsl: [180, 65, 81],
    yuv: [219.163, 9.27157, -38.745],
    hslToRgb: [175, 238, 238],
    inverted: [80, 17, 17],
    contrasted: [0, 0, 0],
    limitedSaturation50: [182, 231, 231],
    limitedLightness10: [9, 42, 42],
    hex: '#afeeee',
    name: 'paleturquoise',
    rgbStr: 'rgb(175, 238, 238)',
    hslStr: 'hsl(180, 65, 81)'
  },
  {
    rgb: [255, 240, 245],
    hsl: [340, 100, 97],
    yuv: [245.055, -0.02455, 8.72495],
    hslToRgb: [255, 240, 245],
    inverted: [0, 15, 10],
    contrasted: [0, 0, 0],
    limitedSaturation50: [251, 244, 246],
    limitedLightness10: [51, 0, 17],
    hex: '#fff0f5',
    name: 'lavenderblush',
    rgbStr: 'rgb(255, 240, 245)',
    hslStr: 'hsl(340, 100, 97)'
  },
  {
    rgb: [255, 192, 203],
    hsl: [350, 100, 88],
    yuv: [212.091, -4.47127, 37.64489],
    hslToRgb: [255, 194, 204],
    inverted: [0, 63, 52],
    contrasted: [0, 0, 0],
    limitedSaturation50: [240, 209, 214],
    limitedLightness10: [51, 0, 9],
    hex: '#ffc0cb',
    name: 'pink',
    rgbStr: 'rgb(255, 192, 203)',
    hslStr: 'hsl(350, 100, 88)'
  },
  {
    rgb: [255, 250, 240],
    hsl: [40, 100, 97],
    yuv: [250.355, -5.09315, 4.0751],
    hslToRgb: [255, 250, 240],
    inverted: [0, 5, 15],
    contrasted: [0, 0, 0],
    limitedSaturation50: [251, 249, 244],
    limitedLightness10: [51, 34, 0],
    hex: '#fffaf0',
    name: 'floralwhite',
    rgbStr: 'rgb(255, 250, 240)',
    hslStr: 'hsl(40, 100, 97)'
  },
  {
    rgb: [255, 182, 193],
    hsl: [351, 100, 86],
    yuv: [205.081, -5.94267, 43.79489],
    hslToRgb: [255, 184, 194],
    inverted: [0, 73, 62],
    contrasted: [0, 0, 0],
    limitedSaturation50: [237, 201, 207],
    limitedLightness10: [51, 0, 8],
    hex: '#ffb6c1',
    name: 'lightpink',
    rgbStr: 'rgb(255, 182, 193)',
    hslStr: 'hsl(351, 100, 86)'
  },
  {
    rgb: [160, 82, 45],
    hsl: [19, 38, 40],
    yuv: [101.104, -27.60732, 51.67037],
    hslToRgb: [141, 88, 63],
    inverted: [95, 173, 210],
    contrasted: [255, 255, 255],
    limitedSaturation50: [160, 82, 45],
    limitedLightness10: [35, 22, 16],
    hex: '#a0522d',
    name: 'sienna',
    rgbStr: 'rgb(160, 82, 45)',
    hslStr: 'hsl(19, 38, 40)'
  },
  {
    rgb: [255, 250, 205],
    hsl: [54, 100, 90],
    yuv: [246.365, -20.35315, 7.57545],
    hslToRgb: [255, 250, 204],
    inverted: [0, 5, 50],
    contrasted: [0, 0, 0],
    limitedSaturation50: [242, 240, 217],
    limitedLightness10: [51, 46, 0],
    hex: '#fffacd',
    name: 'lemonchiffon',
    rgbStr: 'rgb(255, 250, 205)',
    hslStr: 'hsl(54, 100, 90)'
  },
  {
    rgb: [255, 228, 181],
    hsl: [38, 100, 85],
    yuv: [230.715, -24.46223, 21.30547],
    hslToRgb: [255, 227, 179],
    inverted: [0, 27, 74],
    contrasted: [0, 0, 0],
    limitedSaturation50: [236, 222, 198],
    limitedLightness10: [51, 32, 0],
    hex: '#ffe4b5',
    name: 'moccasin',
    rgbStr: 'rgb(255, 228, 181)',
    hslStr: 'hsl(38, 100, 85)'
  },
  {
    rgb: [238, 55, 241],
    hsl: [299, 87, 58],
    yuv: [130.921, 54.17176, 93.94314],
    hslToRgb: [238, 55, 241],
    inverted: [17, 200, 14],
    contrasted: [255, 255, 255],
    limitedSaturation50: [200, 94, 201],
    limitedLightness10: [47, 3, 48],
    hex: '#ee37f1',
    rgbStr: 'rgb(238, 55, 241)',
    hslStr: 'hsl(299, 87, 58)'
  },
  {
    rgb: [106, 84, 127],
    hsl: [271, 20, 41],
    yuv: [95.48, 15.51198, 9.22957],
    hslToRgb: [105, 84, 125],
    inverted: [149, 171, 128],
    contrasted: [255, 255, 255],
    limitedSaturation50: [106, 84, 127],
    limitedLightness10: [26, 20, 31],
    hex: '#6a547f',
    rgbStr: 'rgb(106, 84, 127)',
    hslStr: 'hsl(271, 20, 41)'
  },
  {
    rgb: [196, 224, 101],
    hsl: [74, 66, 64],
    yuv: [201.606, -49.50612, -4.91877],
    hslToRgb: [196, 224, 103],
    inverted: [59, 31, 154],
    contrasted: [0, 0, 0],
    limitedSaturation50: [188, 209, 117],
    limitedLightness10: [34, 42, 9],
    hex: '#c4e065',
    rgbStr: 'rgb(196, 224, 101)',
    hslStr: 'hsl(74, 66, 64)'
  },
  {
    rgb: [98, 108, 108],
    hsl: [180, 5, 40],
    yuv: [105.01, 1.47238, -6.15],
    hslToRgb: [97, 107, 107],
    inverted: [157, 147, 147],
    contrasted: [255, 255, 255],
    limitedSaturation50: [98, 108, 108],
    limitedLightness10: [24, 27, 27],
    hex: '#626c6c',
    rgbStr: 'rgb(98, 108, 108)',
    hslStr: 'hsl(180, 5, 40)'
  },
  {
    rgb: [133, 67, 138],
    hsl: [296, 23, 40],
    yuv: [94.828, 21.24609, 33.48929],
    hslToRgb: [122, 79, 125],
    inverted: [122, 188, 117],
    contrasted: [255, 255, 255],
    limitedSaturation50: [133, 67, 138],
    limitedLightness10: [31, 20, 31],
    hex: '#85438a',
    rgbStr: 'rgb(133, 67, 138)',
    hslStr: 'hsl(296, 23, 40)'
  },
  {
    rgb: [39, 227, 66],
    hsl: [129, 77, 52],
    yuv: [152.434, -42.53329, -99.51839],
    hslToRgb: [38, 227, 67],
    inverted: [216, 28, 189],
    contrasted: [255, 255, 255],
    limitedSaturation50: [71, 194, 90],
    limitedLightness10: [6, 45, 12],
    hex: '#27e342',
    rgbStr: 'rgb(39, 227, 66)',
    hslStr: 'hsl(129, 77, 52)'
  },
  {
    rgb: [1, 91, 242],
    hsl: [218, 90, 48],
    yuv: [81.304, 79.07861, -70.45151],
    hslToRgb: [12, 93, 233],
    inverted: [254, 164, 13],
    contrasted: [255, 255, 255],
    limitedSaturation50: [61, 106, 184],
    limitedLightness10: [3, 19, 48],
    hex: '#015bf2',
    rgbStr: 'rgb(1, 91, 242)',
    hslStr: 'hsl(218, 90, 48)'
  },
  {
    rgb: [135, 57, 151],
    hsl: [290, 31, 41],
    yuv: [91.038, 29.50843, 38.56906],
    hslToRgb: [126, 72, 137],
    inverted: [120, 198, 104],
    contrasted: [255, 255, 255],
    limitedSaturation50: [135, 57, 151],
    limitedLightness10: [31, 18, 33],
    hex: '#873997',
    rgbStr: 'rgb(135, 57, 151)',
    hslStr: 'hsl(290, 31, 41)'
  },
  {
    rgb: [156, 126, 243],
    hsl: [255, 83, 72],
    yuv: [148.308, 46.59936, 6.74883],
    hslToRgb: [154, 124, 243],
    inverted: [99, 129, 12],
    contrasted: [255, 255, 255],
    limitedSaturation50: [166, 148, 219],
    limitedLightness10: [15, 4, 47],
    hex: '#9c7ef3',
    rgbStr: 'rgb(156, 126, 243)',
    hslStr: 'hsl(255, 83, 72)'
  },
  {
    rgb: [45, 34, 241],
    hsl: [243, 88, 54],
    yuv: [60.887, 88.63391, -13.93707],
    hslToRgb: [45, 34, 241],
    inverted: [210, 221, 14],
    contrasted: [255, 255, 255],
    limitedSaturation50: [85, 79, 196],
    limitedLightness10: [5, 3, 48],
    hex: '#2d22f1',
    rgbStr: 'rgb(45, 34, 241)',
    hslStr: 'hsl(243, 88, 54)'
  }
];

const badColourValues = [
  undefined,
  null,
  123,
  '456',
  false,
  Infinity,
  [-1, -1, -1],
  [0],
  [1000, 1000, 1000],
  ['a', 'b', 'c'],
  [Infinity, Infinity, Infinity]
];

describe('ColourTools', () => {
  describe('namedColours', () => {
    it(should` exist as 'ColourTools.namedColours'`, () => {
      expect(swissak.ColourTools.namedColours).toBeDefined();
    });

    it(should` has the correct colours`, () => {
      const colours = Object.keys(swissak.ColourTools.namedColours);
      expect(colours).toEqual([
        'aliceblue',
        'antiquewhite',
        'aqua',
        'aquamarine',
        'azure',
        'beige',
        'bisque',
        'black',
        'blanchedalmond',
        'blue',
        'blueviolet',
        'brown',
        'burlywood',
        'cadetblue',
        'chartreuse',
        'chocolate',
        'coral',
        'cornflowerblue',
        'cornsilk',
        'crimson',
        'cyan',
        'darkblue',
        'darkcyan',
        'darkgoldenrod',
        'darkgray',
        'darkgreen',
        'darkgrey',
        'darkkhaki',
        'darkmagenta',
        'darkolivegreen',
        'darkorange',
        'darkorchid',
        'darkred',
        'darksalmon',
        'darkseagreen',
        'darkslateblue',
        'darkslategray',
        'darkslategrey',
        'darkturquoise',
        'darkviolet',
        'deeppink',
        'deepskyblue',
        'dimgray',
        'dimgrey',
        'dodgerblue',
        'firebrick',
        'floralwhite',
        'forestgreen',
        'fractal',
        'fuchsia',
        'gainsboro',
        'ghostwhite',
        'gold',
        'goldenrod',
        'gray0',
        'gray1',
        'gray2',
        'gray3',
        'gray4',
        'gray5',
        'gray6',
        'gray7',
        'gray8',
        'gray9',
        'gray10',
        'gray11',
        'gray12',
        'gray13',
        'gray14',
        'gray15',
        'gray16',
        'gray17',
        'gray18',
        'gray19',
        'gray20',
        'gray21',
        'gray22',
        'gray23',
        'gray24',
        'gray25',
        'gray26',
        'gray27',
        'gray28',
        'gray29',
        'gray30',
        'gray31',
        'gray32',
        'gray33',
        'gray34',
        'gray35',
        'gray36',
        'gray37',
        'gray38',
        'gray39',
        'gray40',
        'gray41',
        'gray42',
        'gray43',
        'gray44',
        'gray45',
        'gray46',
        'gray47',
        'gray48',
        'gray49',
        'gray50',
        'gray51',
        'gray52',
        'gray53',
        'gray54',
        'gray55',
        'gray56',
        'gray57',
        'gray58',
        'gray59',
        'gray60',
        'gray61',
        'gray62',
        'gray63',
        'gray64',
        'gray65',
        'gray66',
        'gray67',
        'gray68',
        'gray69',
        'gray70',
        'gray71',
        'gray72',
        'gray73',
        'gray74',
        'gray75',
        'gray76',
        'gray77',
        'gray78',
        'gray79',
        'gray80',
        'gray81',
        'gray82',
        'gray83',
        'gray84',
        'gray85',
        'gray86',
        'gray87',
        'gray88',
        'gray89',
        'gray90',
        'gray91',
        'gray92',
        'gray93',
        'gray94',
        'gray95',
        'gray96',
        'gray97',
        'gray98',
        'gray99',
        'gray100',
        'gray',
        'green',
        'greenyellow',
        'grey',
        'honeydew',
        'hotpink',
        'indianred',
        'indigo',
        'ivory',
        'khaki',
        'lavender',
        'lavenderblush',
        'lawngreen',
        'lemonchiffon',
        'lightblue',
        'lightcoral',
        'lightcyan',
        'lightgoldenrodyellow',
        'lightgray',
        'lightgreen',
        'lightgrey',
        'lightpink',
        'lightsalmon',
        'lightseagreen',
        'lightskyblue',
        'lightslategray',
        'lightslategrey',
        'lightsteelblue',
        'lightyellow',
        'lime',
        'limegreen',
        'linen',
        'magenta',
        'maroon',
        'mediumaquamarine',
        'mediumblue',
        'mediumorchid',
        'mediumpurple',
        'mediumseagreen',
        'mediumslateblue',
        'mediumspringgreen',
        'mediumturquoise',
        'mediumvioletred',
        'midnightblue',
        'mintcream',
        'mistyrose',
        'moccasin',
        'navajowhite',
        'navy',
        'none',
        'oldlace',
        'olive',
        'olivedrab',
        'orange',
        'orangered',
        'orchid',
        'palegoldenrod',
        'palegreen',
        'paleturquoise',
        'palevioletred',
        'papayawhip',
        'peachpuff',
        'peru',
        'pink',
        'plum',
        'powderblue',
        'purple',
        'red',
        'rosybrown',
        'royalblue',
        'saddlebrown',
        'salmon',
        'sandybrown',
        'seagreen',
        'seashell',
        'sienna',
        'silver',
        'skyblue',
        'slateblue',
        'slategray',
        'slategrey',
        'snow',
        'springgreen',
        'steelblue',
        'tan',
        'teal',
        'thistle',
        'tomato',
        'turquoise',
        'violet',
        'wheat',
        'white',
        'whitesmoke',
        'yellow',
        'yellowgreen'
      ]);
    });

    describe(`each colour has the correct number of values`, () => {
      const entries = Object.entries(swissak.ColourTools.namedColours);
      entries.forEach(([name, colour]) => {
        it(should` '${name}' has 3 rgb values`, () => {
          expect(colour.length).toBe(3);
          expect(colour[0]).toBeGreaterThanOrEqual(0);
          expect(colour[1]).toBeGreaterThanOrEqual(0);
          expect(colour[2]).toBeGreaterThanOrEqual(0);
          expect(colour[0]).toBeLessThanOrEqual(255);
          expect(colour[1]).toBeLessThanOrEqual(255);
          expect(colour[2]).toBeLessThanOrEqual(255);
        });
      });
    });
  });
  describe('parse', () => {
    it(should` exist as 'ColourTools.parse'`, () => {
      expect(swissak.ColourTools.parse).toBeDefined();
    });

    kitchenSink.toEqual('input', (v) => swissak.ColourTools.parse(v), kitchenSink.safe.str(undefined, true), kitchenSink.general);

    testColours.forEach(({ rgb, hex, name, rgbStr, hslStr }) => {
      it(should` parse hex lowercase - ${hex.toLowerCase()}`, () => {
        const parsed = swissak.ColourTools.parse(hex.toLowerCase());
        expect(parsed).toEqual(rgb);
      });
      it(should` parse hex uppercase - ${hex.toUpperCase()}`, () => {
        const parsed = swissak.ColourTools.parse(hex.toUpperCase());
        expect(parsed).toEqual(rgb);
      });
      if (name) {
        it(should` parse name - ${name}`, () => {
          const parsed = swissak.ColourTools.parse(name);
          expect(parsed).toEqual(rgb);
        });
      }
      it(should` parse rgb - ${rgbStr}`, () => {
        const parsed = swissak.ColourTools.parse(rgbStr);
        expect(parsed).toEqual(rgb);
      });
      // it(should` parse hsl - ${hslStr}`, () => {
      //   const parsed = swissak.ColourTools.parse(hslStr);
      //   expect(parsed).toEqual(rgb);
      // });
    });
  });
  describe('toHex', () => {
    it(should` exist as 'ColourTools.toHex'`, () => {
      expect(swissak.ColourTools.toHex).toBeDefined();
    });

    kitchenSink.toEqual(
      'colour',
      (v) => swissak.ColourTools.toHex(v as any),
      kitchenSink.safe.arrOf.num([0, 0, 0], true, 0, 255, 0, [0, 0, 0], 3, 3),
      badColourValues
    );

    testColours.forEach(({ rgb, hex }) => {
      it(should` convert to hex - ${rgb} -> ${hex}`, () => {
        const actual = swissak.ColourTools.toHex(rgb);
        expect(actual).toEqual(hex);
      });
    });
  });
  describe('getLuminance', () => {
    it(should` exist as 'ColourTools.getLuminance'`, () => {
      expect(swissak.ColourTools.getLuminance).toBeDefined();
    });

    kitchenSink.toEqual(
      'rgb',
      (v) => swissak.ColourTools.getLuminance(v as any),
      kitchenSink.safe.arrOf.num([0, 0, 0], true, 0, 255, 0, [0, 0, 0], 3, 3),
      badColourValues
    );

    testColours.forEach(({ rgb, yuv }) => {
      it(should` get luminance - ${rgb} -> ${yuv[0]}`, () => {
        const actual = swissak.ColourTools.getLuminance(rgb);
        expect(actual).toBe(yuv[0]);
      });
    });
  });
  describe('toYUV', () => {
    it(should` exist as 'ColourTools.toYUV'`, () => {
      expect(swissak.ColourTools.toYUV).toBeDefined();
    });

    kitchenSink.toEqual(
      'rgb',
      (v) => swissak.ColourTools.toYUV(v as any),
      kitchenSink.safe.arrOf.num([0, 0, 0], true, 0, 255, 0, [0, 0, 0], 3, 3),
      badColourValues
    );

    testColours.forEach(({ rgb, yuv }) => {
      it(should` convert to yuv - ${rgb} -> ${yuv}`, () => {
        const actual = swissak.ColourTools.toYUV(rgb);
        expect(actual).toEqual(yuv);
      });
    });
  });
  describe('toHSL', () => {
    it(should` exist as 'ColourTools.toHSL'`, () => {
      expect(swissak.ColourTools.toHSL).toBeDefined();
    });

    kitchenSink.toEqual(
      'colour',
      (v) => swissak.ColourTools.toHSL(v as any, true),
      kitchenSink.safe.arrOf.num([0, 0, 0], true, 0, 255, 0, [0, 0, 0], 3, 3),
      badColourValues
    );
    kitchenSink.toEqual('round', (v) => swissak.ColourTools.toHSL([255, 0, 0], v), kitchenSink.safe.bool(true, true), badColourValues);

    testColours.forEach(({ rgb, hsl }) => {
      it(should` convert to hsl - ${rgb} -> ${hsl}`, () => {
        const actual = swissak.ColourTools.toHSL(rgb);
        expect(actual).toEqual(hsl);
      });
    });
  });
  describe('fromHSL', () => {
    it(should` exist as 'ColourTools.fromHSL'`, () => {
      expect(swissak.ColourTools.fromHSL).toBeDefined();
    });

    kitchenSink.toEqual(
      'hsl',
      (v) => swissak.ColourTools.fromHSL(v as any, true),
      (v) =>
        kitchenSink.safe.arrOf
          .num(
            undefined,
            true,
            0,
            360,
            0,
            [0, 0, 0],
            3,
            3
          )(v)
          .map((value, i) => kitchenSink.safe.num(undefined, true, 0, [360, 100, 100][i], 0)(value)),
      badColourValues
    );
    kitchenSink.toEqual('round', (v) => swissak.ColourTools.fromHSL([255, 0, 0], v), kitchenSink.safe.bool(true, true), badColourValues);

    testColours.forEach(({ hsl, hslToRgb }) => {
      it(should` convert from hsl - ${hsl} -> ${hslToRgb}`, () => {
        const actual = swissak.ColourTools.fromHSL(hsl);
        expect(actual).toEqual(hslToRgb);
      });
    });
  });
  describe('invertColour', () => {
    it(should` exist as 'ColourTools.invertColour'`, () => {
      expect(swissak.ColourTools.invertColour).toBeDefined();
    });

    kitchenSink.toEqual(
      'rgb',
      (v) => swissak.ColourTools.invertColour(v as any),
      kitchenSink.safe.arrOf.num([0, 0, 0], true, 0, 255, 0, [0, 0, 0], 3, 3),
      badColourValues
    );

    testColours.forEach(({ rgb, inverted }) => {
      it(should` invert colour - ${rgb} -> ${inverted}`, () => {
        const actual = swissak.ColourTools.invertColour(rgb);
        expect(actual).toEqual(inverted);
      });
    });
  });
  describe('getContrastedColour', () => {
    it(should` exist as 'ColourTools.getContrastedColour'`, () => {
      expect(swissak.ColourTools.getContrastedColour).toBeDefined();
    });

    kitchenSink.toEqual(
      'colour',
      (v) => swissak.ColourTools.getContrastedColour(v as any),
      kitchenSink.safe.arrOf.num([0, 0, 0], true, 0, 255, 0, [0, 0, 0], 3, 3),
      badColourValues
    );

    testColours.forEach(({ rgb, contrasted }) => {
      it(should` get contrasting colour - ${rgb} -> ${contrasted}`, () => {
        const actual = swissak.ColourTools.getContrastedColour(rgb);
        expect(actual).toEqual(contrasted);
      });
    });
  });
  describe('getLimitedColour', () => {
    it(should` exist as 'ColourTools.getLimitedColour'`, () => {
      expect(swissak.ColourTools.getLimitedColour).toBeDefined();
    });

    kitchenSink.toEqual(
      'colour',
      (v) =>
        swissak.ColourTools.getLimitedColour(
          v as any,
          ([h, s, l]) => s > 50,
          ([h, s, l]) => [h, 50, l]
        ),
      kitchenSink.safe.arrOf.num([0, 0, 0], true, 0, 255, 0, [0, 0, 0], 3, 3),
      badColourValues
    );

    const testValues = [
      ...kitchenSink.general,
      () => undefined,
      () => null,
      () => Infinity,
      () => '123',
      () => 'a string',
      () => true,
      () => false,
      () => 123,
      () => 0,
      () => ({ foo: 'bar' }),
      () => ['foo', 'bar']
    ];

    kitchenSink.toEqual(
      'checkFn',
      (v) => swissak.ColourTools.getLimitedColour([255, 0, 0], v as any, ([h, s, l]) => [h, 50, l]),
      kitchenSink.safe.func(
        () => true,
        () => true
      ),
      testValues
    );
    kitchenSink.toEqual(
      'adjustFn',
      (v) => swissak.ColourTools.getLimitedColour([255, 0, 0], ([h, s, l]) => s > 50, v as any),
      kitchenSink.safe.func(undefined, (hsl) => [...hsl]),
      [...testValues, ([h, s, l]) => [h, 50, l]]
    );

    testColours.forEach(({ rgb, limitedSaturation50, limitedLightness10 }) => {
      it(should` get limit saturation - ${rgb} -> ${limitedSaturation50}`, () => {
        const actual = swissak.ColourTools.getLimitedColour(
          rgb,
          ([h, s, l]) => s > 50,
          ([h, s, l]) => [h, 50, l]
        );
        expect(actual).toEqual(limitedSaturation50);
      });
      it(should` get limit lightness - ${rgb} -> ${limitedLightness10}`, () => {
        const actual = swissak.ColourTools.getLimitedColour(
          rgb,
          ([h, s, l]) => l > 10,
          ([h, s, l]) => [h, s, 10]
        );
        expect(actual).toEqual(limitedLightness10);
      });
    });
  });
});
