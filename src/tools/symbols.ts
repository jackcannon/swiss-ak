//<!-- DOCS: 700 -->

/**<!-- DOCS: ## -->
 * symbols
 *
 * - `symbols`
 *
 * A series of characters that can be used for display symbols
 *
 * | Name                    |                                   | Symbol |
 * | :---------------------- | :-------------------------------- | :----: |
 * | TAB                     | `symbols.TAB`                     |  ` `   |
 * | TICK                    | `symbols.TICK`                    |   ✔    |
 * | CROSS                   | `symbols.CROSS`                   |   ✖    |
 * | PLUS                    | `symbols.PLUS`                    |   +    |
 * | MINUS                   | `symbols.MINUS`                   |   -    |
 * | TIMES                   | `symbols.TIMES`                   |   ×    |
 * | DIVIDE                  | `symbols.DIVIDE`                  |   ÷    |
 * | ELLIPSIS                | `symbols.ELLIPSIS`                |   …    |
 * | BULLET                  | `symbols.BULLET`                  |   •    |
 * | EJECT                   | `symbols.EJECT`                   |   ⏏    |
 * | TILDE                   | `symbols.TILDE`                   |   ~    |
 * | HOME                    | `symbols.HOME`                    |   ~    |
 * | CHEV_LFT                | `symbols.CHEV_LFT`                |   ‹    |
 * | CHEV_RGT                | `symbols.CHEV_RGT`                |   ›    |
 * | TRI_UPP                 | `symbols.TRI_UPP`                 |   ▲    |
 * | TRI_DWN                 | `symbols.TRI_DWN`                 |   ▼    |
 * | TRI_RGT                 | `symbols.TRI_RGT`                 |   ▶    |
 * | TRI_LFT                 | `symbols.TRI_LFT`                 |   ◀    |
 * | ARROW_UPP               | `symbols.ARROW_UPP`               |   ↑    |
 * | ARROW_DWN               | `symbols.ARROW_DWN`               |   ↓    |
 * | ARROW_RGT               | `symbols.ARROW_RGT`               |   →    |
 * | ARROW_LFT               | `symbols.ARROW_LFT`               |   ←    |
 * | ARROW_UPP_RGT           | `symbols.ARROW_UPP_RGT`           |   ↗    |
 * | ARROW_DWN_RGT           | `symbols.ARROW_DWN_RGT`           |   ↘    |
 * | ARROW_DWN_LFT           | `symbols.ARROW_DWN_LFT`           |   ↙    |
 * | ARROW_UPP_LFT           | `symbols.ARROW_UPP_LFT`           |   ↖    |
 * | ARROW_STILL             | `symbols.ARROW_STILL`             |   •    |
 * | ARROW_FLIP_H            | `symbols.ARROW_FLIP_H`            |   ↔    |
 * | ARROW_FLIP_V            | `symbols.ARROW_FLIP_V`            |   ↕    |
 * | ARROW_ROTATE_UPP        | `symbols.ARROW_ROTATE_UPP`        |   ⤴    |
 * | ARROW_ROTATE_DWN        | `symbols.ARROW_ROTATE_DWN`        |   ⤵    |
 * | ARROW_ROTATE_LFT        | `symbols.ARROW_ROTATE_LFT`        |   ⤶    |
 * | ARROW_ROTATE_RGT        | `symbols.ARROW_ROTATE_RGT`        |   ⤷    |
 * | ARROW_ROTATE_CLOCK      | `symbols.ARROW_ROTATE_CLOCK`      |   ↻    |
 * | ARROW_ROTATE_ANTI_CLOCK | `symbols.ARROW_ROTATE_ANTI_CLOCK` |   ↺    |
 * | FRACTION_1_4            | `symbols.FRACTION_1_4`            |   ¼    |
 * | FRACTION_1_2            | `symbols.FRACTION_1_2`            |   ½    |
 * | FRACTION_3_4            | `symbols.FRACTION_3_4`            |   ¾    |
 * | SUPERSCRIPT             | `symbols.SUPERSCRIPT['1']`        |   ¹    |
 * |                         | `symbols.SUPERSCRIPT['2']`        |   ²    |
 * |                         | `symbols.SUPERSCRIPT['3']`        |   ³    |
 * |                         | `symbols.SUPERSCRIPT['4']`        |   ⁴    |
 * |                         | `symbols.SUPERSCRIPT['5']`        |   ⁵    |
 * |                         | `symbols.SUPERSCRIPT['6']`        |   ⁶    |
 * |                         | `symbols.SUPERSCRIPT['7']`        |   ⁷    |
 * |                         | `symbols.SUPERSCRIPT['8']`        |   ⁸    |
 * |                         | `symbols.SUPERSCRIPT['9']`        |   ⁹    |
 * |                         | `symbols.SUPERSCRIPT['0']`        |   ⁰    |
 * |                         | `symbols.SUPERSCRIPT['-']`        |   ⁻    |
 * |                         | `symbols.SUPERSCRIPT['+']`        |   ⁺    |
 * |                         | `symbols.SUPERSCRIPT['=']`        |   ⁼    |
 * |                         | `symbols.SUPERSCRIPT['(']`        |   ⁽    |
 * |                         | `symbols.SUPERSCRIPT[')']`        |   ⁾    |
 * |                         | `symbols.SUPERSCRIPT['i']`        |   ⁱ    |
 * |                         | `symbols.SUPERSCRIPT['n']`        |   ⁿ    |
 * |                         | `symbols.SUPERSCRIPT['o']`        |   °    |
 * |                         | `symbols.SUPERSCRIPT['*']`        |   °    |
 */
export const symbols = {
  TAB: '	',
  // NBSP: '\xa0',
  NBSP: ' ',

  TICK: '✔',
  CROSS: '✖',
  PLUS: '+',
  MINUS: '-',
  TIMES: '×',
  DIVIDE: '÷',
  ELLIPSIS: '…',
  BULLET: '•',
  EJECT: '⏏',
  TILDE: '~',
  HOME: '~',

  RADIO_EMPTY: '◯',
  RADIO_FULL: '◉',

  CURSOR: '❯',

  CHEV_LFT: '‹',
  CHEV_RGT: '›',

  CHAIN: '⫘',

  TRI_UPP: '▲',
  TRI_DWN: '▼',
  TRI_RGT: '▶',
  TRI_LFT: '◀',

  ARROW_UPP: '↑',
  ARROW_DWN: '↓',
  ARROW_RGT: '→',
  ARROW_LFT: '←',

  ARROW_UPP_RGT: '↗',
  ARROW_DWN_RGT: '↘',
  ARROW_DWN_LFT: '↙',
  ARROW_UPP_LFT: '↖',

  ARROW_STILL: '•',

  ARROW_FLIP_H: '↔',
  ARROW_FLIP_V: '↕',

  ARROW_ROTATE_UPP: '⤴',
  ARROW_ROTATE_DWN: '⤵',
  ARROW_ROTATE_LFT: '⤶',
  ARROW_ROTATE_RGT: '⤷',

  ARROW_ROTATE_CLOCK: '↻',
  ARROW_ROTATE_ANTI_CLOCK: '↺',

  FRACTION_1_4: '¼',
  FRACTION_1_2: '½',
  FRACTION_3_4: '¾',

  SUPERSCRIPT: {
    1: '¹',
    2: '²',
    3: '³',
    4: '⁴',
    5: '⁵',
    6: '⁶',
    7: '⁷',
    8: '⁸',
    9: '⁹',
    0: '⁰',
    '-': '⁻',
    '+': '⁺',
    '=': '⁼',
    '(': '⁽',
    ')': '⁾',
    i: 'ⁱ',
    n: 'ⁿ',
    o: '°',
    '*': '°'
  }
};

/**<!-- DOCS: ### -->
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
 */
export const superscript = (num: number | string) =>
  (num ?? '')
    .toString()
    .split('')
    .map((char) => (char === ' ' ? ' ' : symbols.SUPERSCRIPT[char] || symbols.SUPERSCRIPT['*']))
    .join('');
