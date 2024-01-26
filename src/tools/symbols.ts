//<!-- DOCS: 700 -->

/**<!-- DOCS: symbols ##! -->
 * symbols
 *
 * - `symbols`
 *
 * A series of characters that can be used for display symbols
 *
 * | Name                    |                                                  | Symbol |
 * | :---------------------- | :----------------------------------------------- | :----: |
 * | TAB                     | `symbols.TAB`                                    |  ` `   |
 * | TICK                    | `symbols.TICK`                                   |   ✔    |
 * | CROSS                   | `symbols.CROSS`                                  |   ✖    |
 * | PLUS                    | `symbols.PLUS`                                   |   +    |
 * | MINUS                   | `symbols.MINUS`                                  |   -    |
 * | TIMES                   | `symbols.TIMES`                                  |   ×    |
 * | DIVIDE                  | `symbols.DIVIDE`                                 |   ÷    |
 * | ELLIPSIS                | `symbols.ELLIPSIS`                               |   …    |
 * | BULLET                  | `symbols.BULLET`                                 |   •    |
 * | BULLET_TRI              | `symbols.BULLET_TRI`                             |   ‣    |
 * | BULLET_HYP              | `symbols.BULLET_HYP`                             |   ⁃    |
 * | EJECT                   | `symbols.EJECT`                                  |   ⏏    |
 * | TILDE                   | `symbols.TILDE`                                  |   ~    |
 * | HOME                    | `symbols.HOME`                                   |   ~    |
 * | RADIO_EMPTY             | `symbols.RADIO_EMPTY`                            |   ◯    |
 * | RADIO_FULL              | `symbols.RADIO_FULL`                             |   ◉    |
 * | CURSOR                  | `symbols.CURSOR`                                 |   ❯    |
 * | CHEV_LFT                | `symbols.CHEV_LFT`                               |   ‹    |
 * | CHEV_RGT                | `symbols.CHEV_RGT`                               |   ›    |
 * | CHAIN                   | `symbols.CHAIN`                                  |   ⫘    |
 * | TRI_UPP                 | `symbols.TRI_UPP`                                |   ▲    |
 * | TRI_DWN                 | `symbols.TRI_DWN`                                |   ▼    |
 * | TRI_RGT                 | `symbols.TRI_RGT`                                |   ▶    |
 * | TRI_LFT                 | `symbols.TRI_LFT`                                |   ◀    |
 * | ARROW_UPP               | `symbols.ARROW_UPP`                              |   ↑    |
 * | ARROW_DWN               | `symbols.ARROW_DWN`                              |   ↓    |
 * | ARROW_RGT               | `symbols.ARROW_RGT`                              |   →    |
 * | ARROW_LFT               | `symbols.ARROW_LFT`                              |   ←    |
 * | ARROW_UPP_RGT           | `symbols.ARROW_UPP_RGT`                          |   ↗    |
 * | ARROW_DWN_RGT           | `symbols.ARROW_DWN_RGT`                          |   ↘    |
 * | ARROW_DWN_LFT           | `symbols.ARROW_DWN_LFT`                          |   ↙    |
 * | ARROW_UPP_LFT           | `symbols.ARROW_UPP_LFT`                          |   ↖    |
 * | ARROW_STILL             | `symbols.ARROW_STILL`                            |   •    |
 * | ARROW_FLIP_H            | `symbols.ARROW_FLIP_H`                           |   ↔    |
 * | ARROW_FLIP_V            | `symbols.ARROW_FLIP_V`                           |   ↕    |
 * | ARROW_ROTATE_UPP        | `symbols.ARROW_ROTATE_UPP`                       |   ⤴    |
 * | ARROW_ROTATE_DWN        | `symbols.ARROW_ROTATE_DWN`                       |   ⤵    |
 * | ARROW_ROTATE_LFT        | `symbols.ARROW_ROTATE_LFT`                       |   ⤶    |
 * | ARROW_ROTATE_RGT        | `symbols.ARROW_ROTATE_RGT`                       |   ⤷    |
 * | ARROW_ROTATE_CLOCK      | `symbols.ARROW_ROTATE_CLOCK`                     |   ↻    |
 * | ARROW_ROTATE_ANTI_CLOCK | `symbols.ARROW_ROTATE_ANTI_CLOCK`                |   ↺    |
 * | FRACTION_1_4            | `symbols.FRACTION_1_4`                           |   ¼    |
 * | FRACTION_1_2            | `symbols.FRACTION_1_2`                           |   ½    |
 * | FRACTION_3_4            | `symbols.FRACTION_3_4`                           |   ¾    |
 * | SUPERSCRIPT             | `symbols.SUPERSCRIPT['1']`                       |   ¹    |
 * |                         | `symbols.SUPERSCRIPT['2']`                       |   ²    |
 * |                         | `symbols.SUPERSCRIPT['3']`                       |   ³    |
 * |                         | `symbols.SUPERSCRIPT['4']`                       |   ⁴    |
 * |                         | `symbols.SUPERSCRIPT['5']`                       |   ⁵    |
 * |                         | `symbols.SUPERSCRIPT['6']`                       |   ⁶    |
 * |                         | `symbols.SUPERSCRIPT['7']`                       |   ⁷    |
 * |                         | `symbols.SUPERSCRIPT['8']`                       |   ⁸    |
 * |                         | `symbols.SUPERSCRIPT['9']`                       |   ⁹    |
 * |                         | `symbols.SUPERSCRIPT['0']`                       |   ⁰    |
 * |                         | `symbols.SUPERSCRIPT['-']`                       |   ⁻    |
 * |                         | `symbols.SUPERSCRIPT['+']`                       |   ⁺    |
 * |                         | `symbols.SUPERSCRIPT['=']`                       |   ⁼    |
 * |                         | `symbols.SUPERSCRIPT['(']`                       |   ⁽    |
 * |                         | `symbols.SUPERSCRIPT[')']`                       |   ⁾    |
 * |                         | `symbols.SUPERSCRIPT['i']`                       |   ⁱ    |
 * |                         | `symbols.SUPERSCRIPT['n']`                       |   ⁿ    |
 * |                         | `symbols.SUPERSCRIPT['o']`                       |   °    |
 * |                         | `symbols.SUPERSCRIPT['*']`                       |   °    |
 * | BLOCK                   | `symbols.BLOCK.full`                             |   █    |
 * |                         | `symbols.BLOCK.upperHalf`                        |   ▀    |
 * |                         | `symbols.BLOCK.lowerOneEighth`                   |   ▁    |
 * |                         | `symbols.BLOCK.lowerOneQuarter`                  |   ▂    |
 * |                         | `symbols.BLOCK.lowerThreeEighths`                |   ▃    |
 * |                         | `symbols.BLOCK.lowerHalf`                        |   ▄    |
 * |                         | `symbols.BLOCK.lowerFiveEighths`                 |   ▅    |
 * |                         | `symbols.BLOCK.lowerThreeQuarters`               |   ▆    |
 * |                         | `symbols.BLOCK.lowerSevenEighths`                |   ▇    |
 * |                         | `symbols.BLOCK.leftSevenEighths`                 |   ▉    |
 * |                         | `symbols.BLOCK.leftThreeQuarters`                |   ▊    |
 * |                         | `symbols.BLOCK.leftFiveEighths`                  |   ▋    |
 * |                         | `symbols.BLOCK.leftHalf`                         |   ▌    |
 * |                         | `symbols.BLOCK.leftThreeEighths`                 |   ▍    |
 * |                         | `symbols.BLOCK.leftOneQuarter`                   |   ▎    |
 * |                         | `symbols.BLOCK.leftOneEighth`                    |   ▏    |
 * |                         | `symbols.BLOCK.rightHalf`                        |   ▐    |
 * |                         | `symbols.BLOCK.upperOneEighth`                   |   ▔    |
 * |                         | `symbols.BLOCK.rightOneEighth`                   |   ▕    |
 * | SHADE                   | `symbols.SHADE.light`                            |   ░    |
 * |                         | `symbols.SHADE.medium`                           |   ▒    |
 * |                         | `symbols.SHADE.dark`                             |   ▓    |
 * | QUADRANT                | `symbols.QUADRANT.upperLeft`                     |   ▘    |
 * |                         | `symbols.QUADRANT.upperRight`                    |   ▝    |
 * |                         | `symbols.QUADRANT.lowerLeft`                     |   ▖    |
 * |                         | `symbols.QUADRANT.lowerRight`                    |   ▗    |
 * |                         | `symbols.QUADRANT.upperLeftLowerLeftLowerRight`  |   ▙    |
 * |                         | `symbols.QUADRANT.upperLeftLowerRight`           |   ▚    |
 * |                         | `symbols.QUADRANT.upperLeftUpperRightLowerLeft`  |   ▛    |
 * |                         | `symbols.QUADRANT.upperLeftUpperRightLowerRight` |   ▜    |
 * |                         | `symbols.QUADRANT.upperRightLowerLeft`           |   ▞    |
 * |                         | `symbols.QUADRANT.upperRightLowerLeftLowerRight` |   ▟    |
 */
export const symbols = {
  /** Symbol: `\t` */
  TAB: '	',

  /** Symbol: `✔` */
  TICK: '✔',
  /** Symbol: `✖` */
  CROSS: '✖',
  /** Symbol: `+` */
  PLUS: '+',
  /** Symbol: `-` */
  MINUS: '-',
  /** Symbol: `×` */
  TIMES: '×',
  /** Symbol: `÷` */
  DIVIDE: '÷',
  /** Symbol: `…` */
  ELLIPSIS: '…',
  /** Symbol: `•` */
  BULLET: '•',
  /** Symbol: `‣` */
  BULLET_TRI: '‣',
  /** Symbol: `⁃` */
  BULLET_HYP: '⁃',
  /** Symbol: `⏏` */
  EJECT: '⏏',
  /** Symbol: `~` */
  TILDE: '~',
  /** Symbol: `~` */
  HOME: '~',

  /** Symbol: `◯` */
  RADIO_EMPTY: '◯',
  /** Symbol: `◉` */
  RADIO_FULL: '◉',

  /** Symbol: `❯` */
  CURSOR: '❯',

  /** Symbol: `‹` */
  CHEV_LFT: '‹',
  /** Symbol: `›` */
  CHEV_RGT: '›',

  /** Symbol: `⫘` */
  CHAIN: '⫘',

  /** Symbol: `▲` */
  TRI_UPP: '▲',
  /** Symbol: `▼` */
  TRI_DWN: '▼',
  /** Symbol: `▶` */
  TRI_RGT: '▶',
  /** Symbol: `◀` */
  TRI_LFT: '◀',

  /** Symbol: `↑` */
  ARROW_UPP: '↑',
  /** Symbol: `↓` */
  ARROW_DWN: '↓',
  /** Symbol: `→` */
  ARROW_RGT: '→',
  /** Symbol: `←` */
  ARROW_LFT: '←',

  /** Symbol: `↗` */
  ARROW_UPP_RGT: '↗',
  /** Symbol: `↘` */
  ARROW_DWN_RGT: '↘',
  /** Symbol: `↙` */
  ARROW_DWN_LFT: '↙',
  /** Symbol: `↖` */
  ARROW_UPP_LFT: '↖',

  /** Symbol: `•` */
  ARROW_STILL: '•',

  /** Symbol: `↔` */
  ARROW_FLIP_H: '↔',
  /** Symbol: `↕` */
  ARROW_FLIP_V: '↕',

  /** Symbol: `⤴` */
  ARROW_ROTATE_UPP: '⤴',
  /** Symbol: `⤵` */
  ARROW_ROTATE_DWN: '⤵',
  /** Symbol: `⤶` */
  ARROW_ROTATE_LFT: '⤶',
  /** Symbol: `⤷` */
  ARROW_ROTATE_RGT: '⤷',

  /** Symbol: `↻` */
  ARROW_ROTATE_CLOCK: '↻',
  /** Symbol: `↺` */
  ARROW_ROTATE_ANTI_CLOCK: '↺',

  /** Symbol: `¼` */
  FRACTION_1_4: '¼',
  /** Symbol: `½` */
  FRACTION_1_2: '½',
  /** Symbol: `¾` */
  FRACTION_3_4: '¾',

  /** Superscript symbols e.g. ¹, ², ³ */
  SUPERSCRIPT: {
    /** Symbol: `¹` */
    1: '¹',
    /** Symbol: `²` */
    2: '²',
    /** Symbol: `³` */
    3: '³',
    /** Symbol: `⁴` */
    4: '⁴',
    /** Symbol: `⁵` */
    5: '⁵',
    /** Symbol: `⁶` */
    6: '⁶',
    /** Symbol: `⁷` */
    7: '⁷',
    /** Symbol: `⁸` */
    8: '⁸',
    /** Symbol: `⁹` */
    9: '⁹',
    /** Symbol: `⁰` */
    0: '⁰',
    /** Symbol: `⁻` */
    '-': '⁻',
    /** Symbol: `⁺` */
    '+': '⁺',
    /** Symbol: `⁼` */
    '=': '⁼',
    /** Symbol: `⁽` */
    '(': '⁽',
    /** Symbol: `⁾` */
    ')': '⁾',
    /** Symbol: `ⁱ` */
    i: 'ⁱ',
    /** Symbol: `ⁿ` */
    n: 'ⁿ',
    /** Symbol: `°` */
    o: '°',
    /** Symbol: `°` */
    '*': '°'
  },

  /** Block symbols e.g. █, ▀, ▌, etc */
  BLOCK: {
    /** Symbol: `█` */
    full: '█',
    /** Symbol: `▀` */
    upperHalf: '▀',
    /** Symbol: `▁` */
    lowerOneEighth: '▁',
    /** Symbol: `▂` */
    lowerOneQuarter: '▂',
    /** Symbol: `▃` */
    lowerThreeEighths: '▃',
    /** Symbol: `▄` */
    lowerHalf: '▄',
    /** Symbol: `▅` */
    lowerFiveEighths: '▅',
    /** Symbol: `▆` */
    lowerThreeQuarters: '▆',
    /** Symbol: `▇` */
    lowerSevenEighths: '▇',
    /** Symbol: `▉` */
    leftSevenEighths: '▉',
    /** Symbol: `▊` */
    leftThreeQuarters: '▊',
    /** Symbol: `▋` */
    leftFiveEighths: '▋',
    /** Symbol: `▌` */
    leftHalf: '▌',
    /** Symbol: `▍` */
    leftThreeEighths: '▍',
    /** Symbol: `▎` */
    leftOneQuarter: '▎',
    /** Symbol: `▏` */
    leftOneEighth: '▏',
    /** Symbol: `▐` */
    rightHalf: '▐',
    /** Symbol: `▔` */
    upperOneEighth: '▔',
    /** Symbol: `▕` */
    rightOneEighth: '▕'
  },

  /** Shade symbols - ░ ▒ ▓ */
  SHADE: {
    /** Symbol: `░` */
    light: '░',
    /** Symbol: `▒` */
    medium: '▒',
    /** Symbol: `▓` */
    dark: '▓'
  },

  /** Quadrant block symbols e.g. ▘, ▚, ▟ */
  QUADRANT: {
    /** Symbol: `▘` */
    upperLeft: '▘',
    /** Symbol: `▝` */
    upperRight: '▝',
    /** Symbol: `▖` */
    lowerLeft: '▖',
    /** Symbol: `▗` */
    lowerRight: '▗',
    /** Symbol: `▙` */
    upperLeftLowerLeftLowerRight: '▙',
    /** Symbol: `▚` */
    upperLeftLowerRight: '▚',
    /** Symbol: `▛` */
    upperLeftUpperRightLowerLeft: '▛',
    /** Symbol: `▜` */
    upperLeftUpperRightLowerRight: '▜',
    /** Symbol: `▞` */
    upperRightLowerLeft: '▞',
    /** Symbol: `▟` */
    upperRightLowerLeftLowerRight: '▟'
  }
};

/**<!-- DOCS: superscript ### @ -->
 * superscript
 *
 * - `superscript`
 *
 * Converts a string or number to superscript (where possible)
 *
 * Known superscript characters:
 * `¹²³⁴⁵⁶⁷⁸⁹⁰⁻⁺⁼⁽⁾ⁱⁿ°`
 *
 * Characters without a superscript equivalent will be replaced with a `°`
 *
 * ```typescript
 * superscript(219) // '²¹⁹'
 * superscript(1234567890) // '¹²³⁴⁵⁶⁷⁸⁹⁰'
 * ```
 * @param {number | string} num
 * @returns {string}
 */
export const superscript = (num: number | string) =>
  (num ?? '')
    .toString()
    .split('')
    .map((char) => (char === ' ' ? ' ' : symbols.SUPERSCRIPT[char] || symbols.SUPERSCRIPT['*']))
    .join('');
