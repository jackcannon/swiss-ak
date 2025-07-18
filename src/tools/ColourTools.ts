import { MathsTools } from './MathsTools';
import { safe } from './safe';

const safeRGB = (rgb: ColourTools.ColourValues) => safe.arrOf.num(rgb, true, 0, 255, 0, [0, 0, 0], 3, 3) as ColourTools.ColourValues;
const safeHSL = (hsl: ColourTools.HSLValues) =>
  safe.arrOf.num(hsl, true, 0, 360, 0, [0, 0, 0], 3, 3).map((v, i) => safe.num(v, true, 0, [360, 100, 100][i], 0)) as ColourTools.HSLValues;

//<!-- DOCS: 150 -->
/**<!-- DOCS: ColourTools ##! -->
 * ColourTools
 *
 * A collection of functions for working with colours.
 */
export namespace ColourTools {
  // SWISS-DOCS-JSDOC-REMOVE-PREV-LINE

  /**<!-- DOCS: ColourTools.ColourValues ### -->
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

  /**<!-- DOCS: ColourTools.HSLValues ### -->
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

  /**<!-- DOCS: ColourTools.namedColours ### -->
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
    aliceblue: [240, 248, 255] as ColourValues,
    antiquewhite: [250, 235, 215] as ColourValues,
    aqua: [0, 255, 255] as ColourValues,
    aquamarine: [127, 255, 212] as ColourValues,
    azure: [240, 255, 255] as ColourValues,
    beige: [245, 245, 220] as ColourValues,
    bisque: [255, 228, 196] as ColourValues,
    black: [0, 0, 0] as ColourValues,
    blanchedalmond: [255, 235, 205] as ColourValues,
    blue: [0, 0, 255] as ColourValues,
    blueviolet: [138, 43, 226] as ColourValues,
    brown: [165, 42, 42] as ColourValues,
    burlywood: [222, 184, 135] as ColourValues,
    cadetblue: [95, 158, 160] as ColourValues,
    chartreuse: [127, 255, 0] as ColourValues,
    chocolate: [210, 105, 30] as ColourValues,
    coral: [255, 127, 80] as ColourValues,
    cornflowerblue: [100, 149, 237] as ColourValues,
    cornsilk: [255, 248, 220] as ColourValues,
    crimson: [220, 20, 60] as ColourValues,
    cyan: [0, 255, 255] as ColourValues,
    darkblue: [0, 0, 139] as ColourValues,
    darkcyan: [0, 139, 139] as ColourValues,
    darkgoldenrod: [184, 134, 11] as ColourValues,
    darkgray: [169, 169, 169] as ColourValues,
    darkgreen: [0, 100, 0] as ColourValues,
    darkgrey: [169, 169, 169] as ColourValues,
    darkkhaki: [189, 183, 107] as ColourValues,
    darkmagenta: [139, 0, 139] as ColourValues,
    darkolivegreen: [85, 107, 47] as ColourValues,
    darkorange: [255, 140, 0] as ColourValues,
    darkorchid: [153, 50, 204] as ColourValues,
    darkred: [139, 0, 0] as ColourValues,
    darksalmon: [233, 150, 122] as ColourValues,
    darkseagreen: [143, 188, 143] as ColourValues,
    darkslateblue: [72, 61, 139] as ColourValues,
    darkslategray: [47, 79, 79] as ColourValues,
    darkslategrey: [47, 79, 79] as ColourValues,
    darkturquoise: [0, 206, 209] as ColourValues,
    darkviolet: [148, 0, 211] as ColourValues,
    deeppink: [255, 20, 147] as ColourValues,
    deepskyblue: [0, 191, 255] as ColourValues,
    dimgray: [105, 105, 105] as ColourValues,
    dimgrey: [105, 105, 105] as ColourValues,
    dodgerblue: [30, 144, 255] as ColourValues,
    firebrick: [178, 34, 34] as ColourValues,
    floralwhite: [255, 250, 240] as ColourValues,
    forestgreen: [34, 139, 34] as ColourValues,
    fractal: [128, 128, 128] as ColourValues,
    fuchsia: [255, 0, 255] as ColourValues,
    gainsboro: [220, 220, 220] as ColourValues,
    ghostwhite: [248, 248, 255] as ColourValues,
    gold: [255, 215, 0] as ColourValues,
    goldenrod: [218, 165, 32] as ColourValues,
    gray0: [0, 0, 0] as ColourValues,
    gray1: [3, 3, 3] as ColourValues,
    gray2: [5, 5, 5] as ColourValues,
    gray3: [8, 8, 8] as ColourValues,
    gray4: [10, 10, 10] as ColourValues,
    gray5: [13, 13, 13] as ColourValues,
    gray6: [15, 15, 15] as ColourValues,
    gray7: [18, 18, 18] as ColourValues,
    gray8: [20, 20, 20] as ColourValues,
    gray9: [23, 23, 23] as ColourValues,
    gray10: [26, 26, 26] as ColourValues,
    gray11: [28, 28, 28] as ColourValues,
    gray12: [31, 31, 31] as ColourValues,
    gray13: [33, 33, 33] as ColourValues,
    gray14: [36, 36, 36] as ColourValues,
    gray15: [38, 38, 38] as ColourValues,
    gray16: [41, 41, 41] as ColourValues,
    gray17: [43, 43, 43] as ColourValues,
    gray18: [46, 46, 46] as ColourValues,
    gray19: [48, 48, 48] as ColourValues,
    gray20: [51, 51, 51] as ColourValues,
    gray21: [54, 54, 54] as ColourValues,
    gray22: [56, 56, 56] as ColourValues,
    gray23: [59, 59, 59] as ColourValues,
    gray24: [61, 61, 61] as ColourValues,
    gray25: [64, 64, 64] as ColourValues,
    gray26: [66, 66, 66] as ColourValues,
    gray27: [69, 69, 69] as ColourValues,
    gray28: [71, 71, 71] as ColourValues,
    gray29: [74, 74, 74] as ColourValues,
    gray30: [77, 77, 77] as ColourValues,
    gray31: [79, 79, 79] as ColourValues,
    gray32: [82, 82, 82] as ColourValues,
    gray33: [84, 84, 84] as ColourValues,
    gray34: [87, 87, 87] as ColourValues,
    gray35: [89, 89, 89] as ColourValues,
    gray36: [92, 92, 92] as ColourValues,
    gray37: [94, 94, 94] as ColourValues,
    gray38: [97, 97, 97] as ColourValues,
    gray39: [99, 99, 99] as ColourValues,
    gray40: [102, 102, 102] as ColourValues,
    gray41: [105, 105, 105] as ColourValues,
    gray42: [107, 107, 107] as ColourValues,
    gray43: [110, 110, 110] as ColourValues,
    gray44: [112, 112, 112] as ColourValues,
    gray45: [115, 115, 115] as ColourValues,
    gray46: [117, 117, 117] as ColourValues,
    gray47: [120, 120, 120] as ColourValues,
    gray48: [122, 122, 122] as ColourValues,
    gray49: [125, 125, 125] as ColourValues,
    gray50: [127, 127, 127] as ColourValues,
    gray51: [130, 130, 130] as ColourValues,
    gray52: [133, 133, 133] as ColourValues,
    gray53: [135, 135, 135] as ColourValues,
    gray54: [138, 138, 138] as ColourValues,
    gray55: [140, 140, 140] as ColourValues,
    gray56: [143, 143, 143] as ColourValues,
    gray57: [145, 145, 145] as ColourValues,
    gray58: [148, 148, 148] as ColourValues,
    gray59: [150, 150, 150] as ColourValues,
    gray60: [153, 153, 153] as ColourValues,
    gray61: [156, 156, 156] as ColourValues,
    gray62: [158, 158, 158] as ColourValues,
    gray63: [161, 161, 161] as ColourValues,
    gray64: [163, 163, 163] as ColourValues,
    gray65: [166, 166, 166] as ColourValues,
    gray66: [168, 168, 168] as ColourValues,
    gray67: [171, 171, 171] as ColourValues,
    gray68: [173, 173, 173] as ColourValues,
    gray69: [176, 176, 176] as ColourValues,
    gray70: [179, 179, 179] as ColourValues,
    gray71: [181, 181, 181] as ColourValues,
    gray72: [184, 184, 184] as ColourValues,
    gray73: [186, 186, 186] as ColourValues,
    gray74: [189, 189, 189] as ColourValues,
    gray75: [191, 191, 191] as ColourValues,
    gray76: [194, 194, 194] as ColourValues,
    gray77: [196, 196, 196] as ColourValues,
    gray78: [199, 199, 199] as ColourValues,
    gray79: [201, 201, 201] as ColourValues,
    gray80: [204, 204, 204] as ColourValues,
    gray81: [207, 207, 207] as ColourValues,
    gray82: [209, 209, 209] as ColourValues,
    gray83: [212, 212, 212] as ColourValues,
    gray84: [214, 214, 214] as ColourValues,
    gray85: [217, 217, 217] as ColourValues,
    gray86: [219, 219, 219] as ColourValues,
    gray87: [222, 222, 222] as ColourValues,
    gray88: [224, 224, 224] as ColourValues,
    gray89: [227, 227, 227] as ColourValues,
    gray90: [229, 229, 229] as ColourValues,
    gray91: [232, 232, 232] as ColourValues,
    gray92: [235, 235, 235] as ColourValues,
    gray93: [237, 237, 237] as ColourValues,
    gray94: [240, 240, 240] as ColourValues,
    gray95: [242, 242, 242] as ColourValues,
    gray96: [245, 245, 245] as ColourValues,
    gray97: [247, 247, 247] as ColourValues,
    gray98: [250, 250, 250] as ColourValues,
    gray99: [252, 252, 252] as ColourValues,
    gray100: [255, 255, 255] as ColourValues,
    gray: [126, 126, 126] as ColourValues,
    green: [0, 128, 0] as ColourValues,
    greenyellow: [173, 255, 47] as ColourValues,
    grey: [128, 128, 128] as ColourValues,
    honeydew: [240, 255, 240] as ColourValues,
    hotpink: [255, 105, 180] as ColourValues,
    indianred: [205, 92, 92] as ColourValues,
    indigo: [75, 0, 130] as ColourValues,
    ivory: [255, 255, 240] as ColourValues,
    khaki: [240, 230, 140] as ColourValues,
    lavender: [230, 230, 250] as ColourValues,
    lavenderblush: [255, 240, 245] as ColourValues,
    lawngreen: [124, 252, 0] as ColourValues,
    lemonchiffon: [255, 250, 205] as ColourValues,
    lightblue: [173, 216, 230] as ColourValues,
    lightcoral: [240, 128, 128] as ColourValues,
    lightcyan: [224, 255, 255] as ColourValues,
    lightgoldenrodyellow: [250, 250, 210] as ColourValues,
    lightgray: [211, 211, 211] as ColourValues,
    lightgreen: [144, 238, 144] as ColourValues,
    lightgrey: [211, 211, 211] as ColourValues,
    lightpink: [255, 182, 193] as ColourValues,
    lightsalmon: [255, 160, 122] as ColourValues,
    lightseagreen: [32, 178, 170] as ColourValues,
    lightskyblue: [135, 206, 250] as ColourValues,
    lightslategray: [119, 136, 153] as ColourValues,
    lightslategrey: [119, 136, 153] as ColourValues,
    lightsteelblue: [176, 196, 222] as ColourValues,
    lightyellow: [255, 255, 224] as ColourValues,
    lime: [0, 255, 0] as ColourValues,
    limegreen: [50, 205, 50] as ColourValues,
    linen: [250, 240, 230] as ColourValues,
    magenta: [255, 0, 255] as ColourValues,
    maroon: [128, 0, 0] as ColourValues,
    mediumaquamarine: [102, 205, 170] as ColourValues,
    mediumblue: [0, 0, 205] as ColourValues,
    mediumorchid: [186, 85, 211] as ColourValues,
    mediumpurple: [147, 112, 219] as ColourValues,
    mediumseagreen: [60, 179, 113] as ColourValues,
    mediumslateblue: [123, 104, 238] as ColourValues,
    mediumspringgreen: [0, 250, 154] as ColourValues,
    mediumturquoise: [72, 209, 204] as ColourValues,
    mediumvioletred: [199, 21, 133] as ColourValues,
    midnightblue: [25, 25, 112] as ColourValues,
    mintcream: [245, 255, 250] as ColourValues,
    mistyrose: [255, 228, 225] as ColourValues,
    moccasin: [255, 228, 181] as ColourValues,
    navajowhite: [255, 222, 173] as ColourValues,
    navy: [0, 0, 128] as ColourValues,
    none: [0, 0, 0] as ColourValues,
    oldlace: [253, 245, 230] as ColourValues,
    olive: [128, 128, 0] as ColourValues,
    olivedrab: [107, 142, 35] as ColourValues,
    orange: [255, 165, 0] as ColourValues,
    orangered: [255, 69, 0] as ColourValues,
    orchid: [218, 112, 214] as ColourValues,
    palegoldenrod: [238, 232, 170] as ColourValues,
    palegreen: [152, 251, 152] as ColourValues,
    paleturquoise: [175, 238, 238] as ColourValues,
    palevioletred: [219, 112, 147] as ColourValues,
    papayawhip: [255, 239, 213] as ColourValues,
    peachpuff: [255, 218, 185] as ColourValues,
    peru: [205, 133, 63] as ColourValues,
    pink: [255, 192, 203] as ColourValues,
    plum: [221, 160, 221] as ColourValues,
    powderblue: [176, 224, 230] as ColourValues,
    purple: [128, 0, 128] as ColourValues,
    red: [255, 0, 0] as ColourValues,
    rosybrown: [188, 143, 143] as ColourValues,
    royalblue: [65, 105, 225] as ColourValues,
    saddlebrown: [139, 69, 19] as ColourValues,
    salmon: [250, 128, 114] as ColourValues,
    sandybrown: [244, 164, 96] as ColourValues,
    seagreen: [46, 139, 87] as ColourValues,
    seashell: [255, 245, 238] as ColourValues,
    sienna: [160, 82, 45] as ColourValues,
    silver: [192, 192, 192] as ColourValues,
    skyblue: [135, 206, 235] as ColourValues,
    slateblue: [106, 90, 205] as ColourValues,
    slategray: [112, 128, 144] as ColourValues,
    slategrey: [112, 128, 144] as ColourValues,
    snow: [255, 250, 250] as ColourValues,
    springgreen: [0, 255, 127] as ColourValues,
    steelblue: [70, 130, 180] as ColourValues,
    tan: [210, 180, 140] as ColourValues,
    teal: [0, 128, 128] as ColourValues,
    thistle: [216, 191, 216] as ColourValues,
    tomato: [255, 99, 71] as ColourValues,
    turquoise: [64, 224, 208] as ColourValues,
    violet: [238, 130, 238] as ColourValues,
    wheat: [245, 222, 179] as ColourValues,
    white: [255, 255, 255] as ColourValues,
    whitesmoke: [245, 245, 245] as ColourValues,
    yellow: [255, 255, 0] as ColourValues,
    yellowgreen: [154, 205, 50] as ColourValues
  };

  const limitValue = (val: number) => Math.max(0, Math.min(255, val));
  const roundMinMax = (value: number, min: number = 0, max: number = 255) => Math.min(max, Math.max(min, Math.round(value)));

  /**<!-- DOCS: ColourTools.parse ### @ -->
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
   * @param {string} input - Input string to parse
   * @returns {ColourValues}
   */
  export const parse = (input: string): ColourValues => {
    const args = {
      input: safe.str(input, true)
    };

    const trimmed = args.input.trim();

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

  /**<!-- DOCS: ColourTools.toHex ### @ -->
   * toHex
   *
   * - `ColourTools.toHex`
   *
   * Convert a colour object (RGB array) to a hex string
   *
   * ```typescript
   * ColourTools.toHex([255, 0, 0]) // '#FF0000'
   * ```
   * @param {ColourValues} colour - Colour to convert to a hex string
   * @returns {string}
   */
  export const toHex = (colour: ColourValues): string => {
    const args = {
      colour: safeRGB(colour)
    };
    const hexs = args.colour.map((val) => (val ?? 0).toString(16).padStart(2, '0'));
    return `#${hexs.join('')}`;
  };

  /**<!-- DOCS: ColourTools.getLuminance ### @ -->
   * getLuminance
   *
   * - `ColourTools.getLuminance`
   *
   * IMPORTANT: This is not the same as the HSL lightness value.
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
   * @param {ColourValues} rgb - Colour to get the luminance of
   * @returns {number}
   */
  export const getLuminance = (rgb: ColourValues): number => {
    const args = {
      rgb: safeRGB(rgb)
    };
    const [y, u, v] = toYUV(args.rgb);
    return y;
  };

  /**<!-- DOCS: ColourTools.toYUV ### @ -->
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
   * @param {ColourValues} rgb - Colour to convert to a YUV array
   * @returns {ColourValues}
   */
  export const toYUV = (rgb: ColourValues): ColourValues => {
    const args = {
      rgb: safeRGB(rgb)
    };
    const [r, g, b] = args.rgb;
    const y = MathsTools.fixFloat(0.299 * (r ?? 0) + 0.587 * (g ?? 0) + 0.114 * (b ?? 0));
    const u = MathsTools.fixFloat(-0.14713 * (r ?? 0) - 0.28886 * (g ?? 0) + 0.436 * (b ?? 0));
    const v = MathsTools.fixFloat(0.615 * (r ?? 0) - 0.51499 * (g ?? 0) - 0.10001 * (b ?? 0));
    return [y, u, v];
  };

  /**<!-- DOCS: ColourTools.toHSL ### @ -->
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
   * @param {ColourValues} colour - Colour to convert to a HSL array
   * @param {boolean} [round=true] - Whether to round the result
   * @returns {HSLValues}
   */
  export const toHSL = (colour: ColourValues, round: boolean = true): HSLValues => {
    const args = {
      colour: safeRGB(colour),
      round: safe.bool(round, true)
    };
    const r = args.colour[0] / 255;
    const g = args.colour[1] / 255;
    const b = args.colour[2] / 255;

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

    if (args.round) {
      return [roundMinMax(result[0], 0, 360), roundMinMax(result[1], 0, 100), roundMinMax(result[2], 0, 100)];
    }
    return result;
  };

  /**<!-- DOCS: ColourTools.fromHSL ### @ -->
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
   * @param {HSLValues} hsl - HSL array to convert to a RGB array
   * @param {boolean} [round=true] - Whether to round the result
   * @returns {ColourValues}
   */
  export const fromHSL = (hsl: HSLValues, round: boolean = true): ColourValues => {
    const args = {
      hsl: safeHSL(hsl),
      round: safe.bool(round, true)
    };
    const h = args.hsl[0];
    const s = args.hsl[1] / 100;
    const l = args.hsl[2] / 100;

    const k = (n) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

    const result: ColourValues = [255 * f(0), 255 * f(8), 255 * f(4)];

    if (args.round) {
      return [roundMinMax(result[0], 0, 255), roundMinMax(result[1], 0, 255), roundMinMax(result[2], 0, 255)];
    }
    return result;
  };

  /**<!-- DOCS: ColourTools.invertColour ### @ -->
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
   * @param {ColourValues} rgb - Colour to invert
   * @returns {ColourValues}
   */
  export const invertColour = (rgb: ColourValues): ColourValues => {
    const args = {
      rgb: safeRGB(rgb)
    };
    const [r, g, b] = args.rgb;
    return [255 - r, 255 - g, 255 - b];
  };

  const white = [255, 255, 255] as ColourValues;
  const black = [0, 0, 0] as ColourValues;

  /**<!-- DOCS: ColourTools.getContrastedColour ### @ -->
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
   * @param {ColourValues} colour - Colour to get the contrasted colour of
   * @returns {ColourValues}
   */
  export const getContrastedColour = (colour: ColourValues): ColourValues => {
    const args = {
      colour: safeRGB(colour)
    };
    return getLuminance(args.colour) > 186 ? black : white;
  };

  /**<!-- DOCS: ColourTools.getLimitedColour ### @ -->
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
   * @param {ColourValues} colour - Colour to limit
   * @param {(hsl: HSLValues) => boolean} checkFn - Function to check if the colour should be limited
   * @param {(hsl: HSLValues) => HSLValues} adjustFn - Function to adjust the colour if it should be limited
   * @returns {ColourValues}
   */
  export const getLimitedColour = (
    colour: ColourValues,
    checkFn: (hsl: HSLValues) => boolean,
    adjustFn: (hsl: HSLValues) => HSLValues
  ): ColourValues => {
    const args = {
      colour: safeRGB(colour),
      checkFn: safe.func(checkFn, () => true),
      adjustFn: safe.func(adjustFn, (hsl: HSLValues) => [...hsl])
    };

    const hsl = toHSL(args.colour);
    if (args.checkFn(hsl)) {
      const adjustedHSL = args.adjustFn(hsl);
      const safeAdjustedHSL = safeHSL(adjustedHSL);
      const out = fromHSL(safeAdjustedHSL);
      return out;
    }
    return args.colour;
  };
} // SWISS-DOCS-JSDOC-REMOVE-THIS-LINE
