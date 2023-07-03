import { MathsTools } from './MathsTools';

//<!-- DOCS: 150 -->
/**<!-- DOCS: ## -->
 * ColourTools
 *
 * A collection of functions for working with colours.
 */
export namespace ColourTools {
  /**<!-- DOCS: ### -->
   * ColourValues
   *
   * - `ColourTools.ColourValues`
   *
   * A type with 3 numbers:
   * - red [0-255]
   * - green [0-255]
   * - blue [0-255]
   */
  export type ColourValues = [number, number, number];

  /**<!-- DOCS: ### -->
   * HSLValues
   *
   * - `ColourTools.HSLValues`
   *
   * A type with 3 numbers:
   * - hue [0-360]
   * - saturation [0-100]
   * - lightness [0-100]
   */
  export type HSLValues = [number, number, number];

  /**<!-- DOCS: ### -->
   * namedColours
   *
   * - `ColourTools.namedColours`
   *
   * A dictionary of different colour names and their RGB values
   *
   * | Name                 | RGB           | Hex     |
   * | -------------------- | ------------- | ------- |
   * | aliceblue            | 240, 248, 255 | #f0f8ff |
   * | antiquewhite         | 250, 235, 215 | #faebd7 |
   * | aqua                 | 0, 255, 255   | #00ffff |
   * | aquamarine           | 127, 255, 212 | #7fffd4 |
   * | azure                | 240, 255, 255 | #f0ffff |
   * | beige                | 245, 245, 220 | #f5f5dc |
   * | bisque               | 255, 228, 196 | #ffe4c4 |
   * | black                | 0, 0, 0       | #000000 |
   * | blanchedalmond       | 255, 235, 205 | #ffebcd |
   * | blue                 | 0, 0, 255     | #0000ff |
   * | blueviolet           | 138, 43, 226  | #8a2be2 |
   * | brown                | 165, 42, 42   | #a52a2a |
   * | burlywood            | 222, 184, 135 | #deb887 |
   * | cadetblue            | 95, 158, 160  | #5f9ea0 |
   * | chartreuse           | 127, 255, 0   | #7fff00 |
   * | chocolate            | 210, 105, 30  | #d2691e |
   * | coral                | 255, 127, 80  | #ff7f50 |
   * | cornflowerblue       | 100, 149, 237 | #6495ed |
   * | cornsilk             | 255, 248, 220 | #fff8dc |
   * | crimson              | 220, 20, 60   | #dc143c |
   * | cyan                 | 0, 255, 255   | #00ffff |
   * | darkblue             | 0, 0, 139     | #00008b |
   * | darkcyan             | 0, 139, 139   | #008b8b |
   * | darkgoldenrod        | 184, 134, 11  | #b8860b |
   * | darkgray             | 169, 169, 169 | #a9a9a9 |
   * | darkgreen            | 0, 100, 0     | #006400 |
   * | darkgrey             | 169, 169, 169 | #a9a9a9 |
   * | darkkhaki            | 189, 183, 107 | #bdb76b |
   * | darkmagenta          | 139, 0, 139   | #8b008b |
   * | darkolivegreen       | 85, 107, 47   | #556b2f |
   * | darkorange           | 255, 140, 0   | #ff8c00 |
   * | darkorchid           | 153, 50, 204  | #9932cc |
   * | darkred              | 139, 0, 0     | #8b0000 |
   * | darksalmon           | 233, 150, 122 | #e9967a |
   * | darkseagreen         | 143, 188, 143 | #8fbc8f |
   * | darkslateblue        | 72, 61, 139   | #483d8b |
   * | darkslategray        | 47, 79, 79    | #2f4f4f |
   * | darkslategrey        | 47, 79, 79    | #2f4f4f |
   * | darkturquoise        | 0, 206, 209   | #00ced1 |
   * | darkviolet           | 148, 0, 211   | #9400d3 |
   * | deeppink             | 255, 20, 147  | #ff1493 |
   * | deepskyblue          | 0, 191, 255   | #00bfff |
   * | dimgray              | 105, 105, 105 | #696969 |
   * | dimgrey              | 105, 105, 105 | #696969 |
   * | dodgerblue           | 30, 144, 255  | #1e90ff |
   * | firebrick            | 178, 34, 34   | #b22222 |
   * | floralwhite          | 255, 250, 240 | #fffaf0 |
   * | forestgreen          | 34, 139, 34   | #228b22 |
   * | fractal              | 128, 128, 128 | #808080 |
   * | fuchsia              | 255, 0, 255   | #ff00ff |
   * | gainsboro            | 220, 220, 220 | #dcdcdc |
   * | ghostwhite           | 248, 248, 255 | #f8f8ff |
   * | gold                 | 255, 215, 0   | #ffd700 |
   * | goldenrod            | 218, 165, 32  | #daa520 |
   * | gray0                | 0, 0, 0       | #000000 |
   * | gray1                | 3, 3, 3       | #030303 |
   * | gray2                | 5, 5, 5       | #050505 |
   * | gray3                | 8, 8, 8       | #080808 |
   * | gray4                | 10, 10, 10    | #0a0a0a |
   * | gray5                | 13, 13, 13    | #0d0d0d |
   * | gray6                | 15, 15, 15    | #0f0f0f |
   * | gray7                | 18, 18, 18    | #121212 |
   * | gray8                | 20, 20, 20    | #141414 |
   * | gray9                | 23, 23, 23    | #171717 |
   * | gray10               | 26, 26, 26    | #1a1a1a |
   * | gray11               | 28, 28, 28    | #1c1c1c |
   * | gray12               | 31, 31, 31    | #1f1f1f |
   * | gray13               | 33, 33, 33    | #212121 |
   * | gray14               | 36, 36, 36    | #242424 |
   * | gray15               | 38, 38, 38    | #262626 |
   * | gray16               | 41, 41, 41    | #292929 |
   * | gray17               | 43, 43, 43    | #2b2b2b |
   * | gray18               | 46, 46, 46    | #2e2e2e |
   * | gray19               | 48, 48, 48    | #303030 |
   * | gray20               | 51, 51, 51    | #333333 |
   * | gray21               | 54, 54, 54    | #363636 |
   * | gray22               | 56, 56, 56    | #383838 |
   * | gray23               | 59, 59, 59    | #3b3b3b |
   * | gray24               | 61, 61, 61    | #3d3d3d |
   * | gray25               | 64, 64, 64    | #404040 |
   * | gray26               | 66, 66, 66    | #424242 |
   * | gray27               | 69, 69, 69    | #454545 |
   * | gray28               | 71, 71, 71    | #474747 |
   * | gray29               | 74, 74, 74    | #4a4a4a |
   * | gray30               | 77, 77, 77    | #4d4d4d |
   * | gray31               | 79, 79, 79    | #4f4f4f |
   * | gray32               | 82, 82, 82    | #525252 |
   * | gray33               | 84, 84, 84    | #545454 |
   * | gray34               | 87, 87, 87    | #575757 |
   * | gray35               | 89, 89, 89    | #595959 |
   * | gray36               | 92, 92, 92    | #5c5c5c |
   * | gray37               | 94, 94, 94    | #5e5e5e |
   * | gray38               | 97, 97, 97    | #616161 |
   * | gray39               | 99, 99, 99    | #636363 |
   * | gray40               | 102, 102, 102 | #666666 |
   * | gray41               | 105, 105, 105 | #696969 |
   * | gray42               | 107, 107, 107 | #6b6b6b |
   * | gray43               | 110, 110, 110 | #6e6e6e |
   * | gray44               | 112, 112, 112 | #707070 |
   * | gray45               | 115, 115, 115 | #737373 |
   * | gray46               | 117, 117, 117 | #757575 |
   * | gray47               | 120, 120, 120 | #787878 |
   * | gray48               | 122, 122, 122 | #7a7a7a |
   * | gray49               | 125, 125, 125 | #7d7d7d |
   * | gray50               | 127, 127, 127 | #7f7f7f |
   * | gray51               | 130, 130, 130 | #828282 |
   * | gray52               | 133, 133, 133 | #858585 |
   * | gray53               | 135, 135, 135 | #878787 |
   * | gray54               | 138, 138, 138 | #8a8a8a |
   * | gray55               | 140, 140, 140 | #8c8c8c |
   * | gray56               | 143, 143, 143 | #8f8f8f |
   * | gray57               | 145, 145, 145 | #919191 |
   * | gray58               | 148, 148, 148 | #949494 |
   * | gray59               | 150, 150, 150 | #969696 |
   * | gray60               | 153, 153, 153 | #999999 |
   * | gray61               | 156, 156, 156 | #9c9c9c |
   * | gray62               | 158, 158, 158 | #9e9e9e |
   * | gray63               | 161, 161, 161 | #a1a1a1 |
   * | gray64               | 163, 163, 163 | #a3a3a3 |
   * | gray65               | 166, 166, 166 | #a6a6a6 |
   * | gray66               | 168, 168, 168 | #a8a8a8 |
   * | gray67               | 171, 171, 171 | #ababab |
   * | gray68               | 173, 173, 173 | #adadad |
   * | gray69               | 176, 176, 176 | #b0b0b0 |
   * | gray70               | 179, 179, 179 | #b3b3b3 |
   * | gray71               | 181, 181, 181 | #b5b5b5 |
   * | gray72               | 184, 184, 184 | #b8b8b8 |
   * | gray73               | 186, 186, 186 | #bababa |
   * | gray74               | 189, 189, 189 | #bdbdbd |
   * | gray75               | 191, 191, 191 | #bfbfbf |
   * | gray76               | 194, 194, 194 | #c2c2c2 |
   * | gray77               | 196, 196, 196 | #c4c4c4 |
   * | gray78               | 199, 199, 199 | #c7c7c7 |
   * | gray79               | 201, 201, 201 | #c9c9c9 |
   * | gray80               | 204, 204, 204 | #cccccc |
   * | gray81               | 207, 207, 207 | #cfcfcf |
   * | gray82               | 209, 209, 209 | #d1d1d1 |
   * | gray83               | 212, 212, 212 | #d4d4d4 |
   * | gray84               | 214, 214, 214 | #d6d6d6 |
   * | gray85               | 217, 217, 217 | #d9d9d9 |
   * | gray86               | 219, 219, 219 | #dbdbdb |
   * | gray87               | 222, 222, 222 | #dedede |
   * | gray88               | 224, 224, 224 | #e0e0e0 |
   * | gray89               | 227, 227, 227 | #e3e3e3 |
   * | gray90               | 229, 229, 229 | #e5e5e5 |
   * | gray91               | 232, 232, 232 | #e8e8e8 |
   * | gray92               | 235, 235, 235 | #ebebeb |
   * | gray93               | 237, 237, 237 | #ededed |
   * | gray94               | 240, 240, 240 | #f0f0f0 |
   * | gray95               | 242, 242, 242 | #f2f2f2 |
   * | gray96               | 245, 245, 245 | #f5f5f5 |
   * | gray97               | 247, 247, 247 | #f7f7f7 |
   * | gray98               | 250, 250, 250 | #fafafa |
   * | gray99               | 252, 252, 252 | #fcfcfc |
   * | gray100              | 255, 255, 255 | #ffffff |
   * | gray                 | 126, 126, 126 | #7e7e7e |
   * | green                | 0, 128, 0     | #008000 |
   * | greenyellow          | 173, 255, 47  | #adff2f |
   * | grey                 | 128, 128, 128 | #808080 |
   * | honeydew             | 240, 255, 240 | #f0fff0 |
   * | hotpink              | 255, 105, 180 | #ff69b4 |
   * | indianred            | 205, 92, 92   | #cd5c5c |
   * | indigo               | 75, 0, 130    | #4b0082 |
   * | ivory                | 255, 255, 240 | #fffff0 |
   * | khaki                | 240, 230, 140 | #f0e68c |
   * | lavender             | 230, 230, 250 | #e6e6fa |
   * | lavenderblush        | 255, 240, 245 | #fff0f5 |
   * | lawngreen            | 124, 252, 0   | #7cfc00 |
   * | lemonchiffon         | 255, 250, 205 | #fffacd |
   * | lightblue            | 173, 216, 230 | #add8e6 |
   * | lightcoral           | 240, 128, 128 | #f08080 |
   * | lightcyan            | 224, 255, 255 | #e0ffff |
   * | lightgoldenrodyellow | 250, 250, 210 | #fafad2 |
   * | lightgray            | 211, 211, 211 | #d3d3d3 |
   * | lightgreen           | 144, 238, 144 | #90ee90 |
   * | lightgrey            | 211, 211, 211 | #d3d3d3 |
   * | lightpink            | 255, 182, 193 | #ffb6c1 |
   * | lightsalmon          | 255, 160, 122 | #ffa07a |
   * | lightseagreen        | 32, 178, 170  | #20b2aa |
   * | lightskyblue         | 135, 206, 250 | #87cefa |
   * | lightslategray       | 119, 136, 153 | #778899 |
   * | lightslategrey       | 119, 136, 153 | #778899 |
   * | lightsteelblue       | 176, 196, 222 | #b0c4de |
   * | lightyellow          | 255, 255, 224 | #ffffe0 |
   * | lime                 | 0, 255, 0     | #00ff00 |
   * | limegreen            | 50, 205, 50   | #32cd32 |
   * | linen                | 250, 240, 230 | #faf0e6 |
   * | magenta              | 255, 0, 255   | #ff00ff |
   * | maroon               | 128, 0, 0     | #800000 |
   * | mediumaquamarine     | 102, 205, 170 | #66cdaa |
   * | mediumblue           | 0, 0, 205     | #0000cd |
   * | mediumorchid         | 186, 85, 211  | #ba55d3 |
   * | mediumpurple         | 147, 112, 219 | #9370db |
   * | mediumseagreen       | 60, 179, 113  | #3cb371 |
   * | mediumslateblue      | 123, 104, 238 | #7b68ee |
   * | mediumspringgreen    | 0, 250, 154   | #00fa9a |
   * | mediumturquoise      | 72, 209, 204  | #48d1cc |
   * | mediumvioletred      | 199, 21, 133  | #c71585 |
   * | midnightblue         | 25, 25, 112   | #191970 |
   * | mintcream            | 245, 255, 250 | #f5fffa |
   * | mistyrose            | 255, 228, 225 | #ffe4e1 |
   * | moccasin             | 255, 228, 181 | #ffe4b5 |
   * | navajowhite          | 255, 222, 173 | #ffdead |
   * | navy                 | 0, 0, 128     | #000080 |
   * | none                 | 0, 0, 0       | #000000 |
   * | oldlace              | 253, 245, 230 | #fdf5e6 |
   * | olive                | 128, 128, 0   | #808000 |
   * | olivedrab            | 107, 142, 35  | #6b8e23 |
   * | orange               | 255, 165, 0   | #ffa500 |
   * | orangered            | 255, 69, 0    | #ff4500 |
   * | orchid               | 218, 112, 214 | #da70d6 |
   * | palegoldenrod        | 238, 232, 170 | #eee8aa |
   * | palegreen            | 152, 251, 152 | #98fb98 |
   * | paleturquoise        | 175, 238, 238 | #afeeee |
   * | palevioletred        | 219, 112, 147 | #db7093 |
   * | papayawhip           | 255, 239, 213 | #ffefd5 |
   * | peachpuff            | 255, 218, 185 | #ffdab9 |
   * | peru                 | 205, 133, 63  | #cd853f |
   * | pink                 | 255, 192, 203 | #ffc0cb |
   * | plum                 | 221, 160, 221 | #dda0dd |
   * | powderblue           | 176, 224, 230 | #b0e0e6 |
   * | purple               | 128, 0, 128   | #800080 |
   * | red                  | 255, 0, 0     | #ff0000 |
   * | rosybrown            | 188, 143, 143 | #bc8f8f |
   * | royalblue            | 65, 105, 225  | #4169e1 |
   * | saddlebrown          | 139, 69, 19   | #8b4513 |
   * | salmon               | 250, 128, 114 | #fa8072 |
   * | sandybrown           | 244, 164, 96  | #f4a460 |
   * | seagreen             | 46, 139, 87   | #2e8b57 |
   * | seashell             | 255, 245, 238 | #fff5ee |
   * | sienna               | 160, 82, 45   | #a0522d |
   * | silver               | 192, 192, 192 | #c0c0c0 |
   * | skyblue              | 135, 206, 235 | #87ceeb |
   * | slateblue            | 106, 90, 205  | #6a5acd |
   * | slategray            | 112, 128, 144 | #708090 |
   * | slategrey            | 112, 128, 144 | #708090 |
   * | snow                 | 255, 250, 250 | #fffafa |
   * | springgreen          | 0, 255, 127   | #00ff7f |
   * | steelblue            | 70, 130, 180  | #4682b4 |
   * | tan                  | 210, 180, 140 | #d2b48c |
   * | teal                 | 0, 128, 128   | #008080 |
   * | thistle              | 216, 191, 216 | #d8bfd8 |
   * | tomato               | 255, 99, 71   | #ff6347 |
   * | turquoise            | 64, 224, 208  | #40e0d0 |
   * | violet               | 238, 130, 238 | #ee82ee |
   * | wheat                | 245, 222, 179 | #f5deb3 |
   * | white                | 255, 255, 255 | #ffffff |
   * | whitesmoke           | 245, 245, 245 | #f5f5f5 |
   * | yellow               | 255, 255, 0   | #ffff00 |
   * | yellowgreen          | 154, 205, 50  | #9acd32 |
   *
   * ```typescript
   * ColourTools.namedColours.blue // [0, 0, 255]
   * ColourTools.namedColours.red // [255, 0, 0]
   * ColourTools.namedColours.green // [0, 255, 0]
   *
   * ColourTools.namedColours.azure // [240, 255, 255]
   * ColourTools.namedColours.darkorange // [255, 140, 0]
   * ColourTools.namedColours.dodgerblue // [30, 144, 255]
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

  /**<!-- DOCS: ### -->
   * parse
   *
   * - `ColourTools.parse`
   *
   * Parse a string into a colour object (RGB array)
   * Not extensive. Currently limited to:
   * - 3 char hexes
   * - 6 char hexes
   * - comma separated RGB values
   * - named colours (from namedColours dictionary)
   *
   * ```typescript
   * ColourTools.parse('#FF0000') // [255, 0, 0]
   * ColourTools.parse('rgb(255, 0, 0)') // [255, 0, 0]
   * ColourTools.parse('red') // [255, 0, 0]
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

  /**<!-- DOCS: ### -->
   * toHex
   *
   * - `ColourTools.toHex`
   *
   * Convert a colour object (RGB array) to a hex string
   *
   * ```typescript
   * ColourTools.toHex([255, 0, 0]) // '#FF0000'
   * ```
   */
  export const toHex = (colour: ColourValues): string => {
    const hexs = colour.map((val) => (val ?? 0).toString(16).padStart(2, '0'));
    return `#${hexs.join('')}`;
  };

  /**<!-- DOCS: ### -->
   * getLuminance
   *
   * - `ColourTools.getLuminance`
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
   * ColourTools.getLuminance([255, 0, 0]); // 76.245
   * ColourTools.getLuminance([0, 255, 0]); // 149.685
   * ColourTools.getLuminance([0, 0, 255]); // 29.07
   * ```
   */
  export const getLuminance = ([r, g, b]: ColourValues): number => {
    const [y, u, v] = toYUV([r, g, b]);
    return y;
  };

  /**<!-- DOCS: ### -->
   * toYUV
   *
   * - `ColourTools.toYUV`
   *
   * Convert a colour object (RGB array) to a YUV array.
   *
   * See https://en.wikipedia.org/wiki/YUV#Y%E2%80%B2UV444_to_RGB888_conversion
   *
   * ```typescript
   * ColourTools.toYUV([255, 0, 0]); // [76.245, 112.439, -38.094]
   * ```
   */
  export const toYUV = ([r, g, b]: ColourValues): ColourValues => {
    const y = MathsTools.fixFloat(0.299 * (r ?? 0) + 0.587 * (g ?? 0) + 0.114 * (b ?? 0));
    const u = MathsTools.fixFloat(-0.14713 * (r ?? 0) - 0.28886 * (g ?? 0) + 0.436 * (b ?? 0));
    const v = MathsTools.fixFloat(0.615 * (r ?? 0) - 0.51499 * (g ?? 0) - 0.10001 * (b ?? 0));
    return [y, u, v];
  };

  /**<!-- DOCS: ### -->
   * toHSL
   *
   * - `ColourTools.toHSL`
   *
   * Convert a RGB array to a HSL array.
   *
   * Adapted from https://www.30secondsofcode.org/js/s/rgb-to-hsl
   *
   * ```typescript
   * ColourTools.toHSL([255, 0, 0]); // [0, 100, 50]
   * ColourTools.toHSL([0, 255, 0]); // [120, 100, 50]
   * ```
   */
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

  /**<!-- DOCS: ### -->
   * fromHSL
   *
   * - `ColourTools.fromHSL`
   *
   * Convert a HSL array to a RGB array.
   *
   * Adapted from https://www.30secondsofcode.org/js/s/hsl-to-rgb
   *
   * ```typescript
   * ColourTools.fromHSL([0, 100, 50]); // [255, 0, 0]
   * ColourTools.fromHSL([120, 100, 50]); // [0, 255, 0]
   * ```
   */
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

  /**<!-- DOCS: ### -->
   * invertColour
   *
   * - `ColourTools.invertColour`
   *
   * Get the opposite colour of a given colour.
   *
   * ```typescript
   * ColourTools.invertColour([255, 0, 0]); // [0, 255, 255]
   * ColourTools.invertColour([0, 255, 0]); // [ 255, 0, 255 ]
   * ColourTools.invertColour([0, 0, 255]); // [ 255, 255, 0 ]
   * ```
   */
  export const invertColour = ([r, g, b]: ColourValues): ColourValues => [255 - r, 255 - g, 255 - b];

  const white = [255, 255, 255] as ColourValues;
  const black = [0, 0, 0] as ColourValues;

  /**<!-- DOCS: ### -->
   * getContrastedColour
   *
   * - `ColourTools.getContrastedColour`
   *
   * Get the colour that contrasts the most with a given colour. (White or black)
   *
   * Returned colour can be used as a text colour on top of the provided colour
   *
   * ```typescript
   * ColourTools.getContrastedColour([255, 0, 0]); // [255, 255, 255]
   * ColourTools.getContrastedColour([255, 255, 0]); // [0, 0, 0]
   * ```
   */
  export const getContrastedColour = (colour: ColourValues): ColourValues => (getLuminance(colour) > 186 ? black : white);

  /**<!-- DOCS: ### -->
   * getLimitedColour
   *
   * - `ColourTools.getLimitedColour`
   *
   * Adjust a colour if a certain condition is met.
   * Used for lightening/darkening colours that are too light/dark
   *
   * All values in functions are HSL
   *
   * ```typescript
   * ColourTools.getLimitedColour([255, 255, 255], ([h,s,l]) => l > 90, ([h,s,l]) => [h, s, 90]); // [ 230, 230, 230 ]
   * ColourTools.getLimitedColour([128, 128, 128], ([h,s,l]) => l > 90, ([h,s,l]) => [h, s, 90]); // [ 128, 128, 128 ]
   * ```
   */
  export const getLimitedColour = (colour: ColourValues, checkFn: (hsl: HSLValues) => boolean, adjustFn: (hsl: HSLValues) => HSLValues) => {
    const hsl = toHSL(colour);
    if (checkFn(hsl)) {
      const adjusted = adjustFn(hsl);
      const out = fromHSL(adjusted);
      return out;
    }
    return colour;
  };
}
