/**
 * symbols
 *
 * A series of characters that can be used for display symbols
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

export const superscript = (num) =>
  num
    .toString()
    .split('')
    .map((char) => symbols.SUPERSCRIPT[char] || symbols.SUPERSCRIPT['*'])
    .join('');
