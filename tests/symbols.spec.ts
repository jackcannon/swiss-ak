import * as swissak from '../';
import { register, should, singleTest, multiTest, kitchenSink } from './test-utils';

register({ describe, it, expect });

describe('symbols', () => {
  singleTest(swissak.symbols, 'symbols', (symbols, name) => {
    it(should` exist as ${name}`, () => {
      expect(symbols).toBeDefined();
    });

    it(should` have the TAB symbol`, () => {
      expect(symbols.TAB).toEqual('	');
    });
    it(should` have the TICK symbol`, () => {
      expect(symbols.TICK).toEqual('✔');
    });
    it(should` have the CROSS symbol`, () => {
      expect(symbols.CROSS).toEqual('✖');
    });
    it(should` have the PLUS symbol`, () => {
      expect(symbols.PLUS).toEqual('+');
    });
    it(should` have the MINUS symbol`, () => {
      expect(symbols.MINUS).toEqual('-');
    });
    it(should` have the TIMES symbol`, () => {
      expect(symbols.TIMES).toEqual('×');
    });
    it(should` have the DIVIDE symbol`, () => {
      expect(symbols.DIVIDE).toEqual('÷');
    });
    it(should` have the ELLIPSIS symbol`, () => {
      expect(symbols.ELLIPSIS).toEqual('…');
    });
    it(should` have the BULLET symbol`, () => {
      expect(symbols.BULLET).toEqual('•');
    });
    it(should` have the BULLET_TRI symbol`, () => {
      expect(symbols.BULLET_TRI).toEqual('‣');
    });
    it(should` have the BULLET_HYP symbol`, () => {
      expect(symbols.BULLET_HYP).toEqual('⁃');
    });
    it(should` have the EJECT symbol`, () => {
      expect(symbols.EJECT).toEqual('⏏');
    });
    it(should` have the TILDE symbol`, () => {
      expect(symbols.TILDE).toEqual('~');
    });
    it(should` have the HOME symbol`, () => {
      expect(symbols.HOME).toEqual('~');
    });
    it(should` have the RADIO_EMPTY symbol`, () => {
      expect(symbols.RADIO_EMPTY).toEqual('◯');
    });
    it(should` have the RADIO_FULL symbol`, () => {
      expect(symbols.RADIO_FULL).toEqual('◉');
    });
    it(should` have the CURSOR symbol`, () => {
      expect(symbols.CURSOR).toEqual('❯');
    });
    it(should` have the CHEV_LFT symbol`, () => {
      expect(symbols.CHEV_LFT).toEqual('‹');
    });
    it(should` have the CHEV_RGT symbol`, () => {
      expect(symbols.CHEV_RGT).toEqual('›');
    });
    it(should` have the CHAIN symbol`, () => {
      expect(symbols.CHAIN).toEqual('⫘');
    });
    it(should` have the TRI_UPP symbol`, () => {
      expect(symbols.TRI_UPP).toEqual('▲');
    });
    it(should` have the TRI_DWN symbol`, () => {
      expect(symbols.TRI_DWN).toEqual('▼');
    });
    it(should` have the TRI_RGT symbol`, () => {
      expect(symbols.TRI_RGT).toEqual('▶');
    });
    it(should` have the TRI_LFT symbol`, () => {
      expect(symbols.TRI_LFT).toEqual('◀');
    });
    it(should` have the ARROW_UPP symbol`, () => {
      expect(symbols.ARROW_UPP).toEqual('↑');
    });
    it(should` have the ARROW_DWN symbol`, () => {
      expect(symbols.ARROW_DWN).toEqual('↓');
    });
    it(should` have the ARROW_RGT symbol`, () => {
      expect(symbols.ARROW_RGT).toEqual('→');
    });
    it(should` have the ARROW_LFT symbol`, () => {
      expect(symbols.ARROW_LFT).toEqual('←');
    });
    it(should` have the ARROW_UPP_RGT symbol`, () => {
      expect(symbols.ARROW_UPP_RGT).toEqual('↗');
    });
    it(should` have the ARROW_DWN_RGT symbol`, () => {
      expect(symbols.ARROW_DWN_RGT).toEqual('↘');
    });
    it(should` have the ARROW_DWN_LFT symbol`, () => {
      expect(symbols.ARROW_DWN_LFT).toEqual('↙');
    });
    it(should` have the ARROW_UPP_LFT symbol`, () => {
      expect(symbols.ARROW_UPP_LFT).toEqual('↖');
    });
    it(should` have the ARROW_STILL symbol`, () => {
      expect(symbols.ARROW_STILL).toEqual('•');
    });
    it(should` have the ARROW_FLIP_H symbol`, () => {
      expect(symbols.ARROW_FLIP_H).toEqual('↔');
    });
    it(should` have the ARROW_FLIP_V symbol`, () => {
      expect(symbols.ARROW_FLIP_V).toEqual('↕');
    });
    it(should` have the ARROW_ROTATE_UPP symbol`, () => {
      expect(symbols.ARROW_ROTATE_UPP).toEqual('⤴');
    });
    it(should` have the ARROW_ROTATE_DWN symbol`, () => {
      expect(symbols.ARROW_ROTATE_DWN).toEqual('⤵');
    });
    it(should` have the ARROW_ROTATE_LFT symbol`, () => {
      expect(symbols.ARROW_ROTATE_LFT).toEqual('⤶');
    });
    it(should` have the ARROW_ROTATE_RGT symbol`, () => {
      expect(symbols.ARROW_ROTATE_RGT).toEqual('⤷');
    });
    it(should` have the ARROW_ROTATE_CLOCK symbol`, () => {
      expect(symbols.ARROW_ROTATE_CLOCK).toEqual('↻');
    });
    it(should` have the ARROW_ROTATE_ANTI_CLOCK symbol`, () => {
      expect(symbols.ARROW_ROTATE_ANTI_CLOCK).toEqual('↺');
    });
    it(should` have the FRACTION_1_4 symbol`, () => {
      expect(symbols.FRACTION_1_4).toEqual('¼');
    });
    it(should` have the FRACTION_1_2 symbol`, () => {
      expect(symbols.FRACTION_1_2).toEqual('½');
    });
    it(should` have the FRACTION_3_4 symbol`, () => {
      expect(symbols.FRACTION_3_4).toEqual('¾');
    });
    it(should` have the SUPERSCRIPT symbol`, () => {
      expect(symbols.SUPERSCRIPT['1']).toEqual('¹');
      expect(symbols.SUPERSCRIPT['2']).toEqual('²');
      expect(symbols.SUPERSCRIPT['3']).toEqual('³');
      expect(symbols.SUPERSCRIPT['4']).toEqual('⁴');
      expect(symbols.SUPERSCRIPT['5']).toEqual('⁵');
      expect(symbols.SUPERSCRIPT['6']).toEqual('⁶');
      expect(symbols.SUPERSCRIPT['7']).toEqual('⁷');
      expect(symbols.SUPERSCRIPT['8']).toEqual('⁸');
      expect(symbols.SUPERSCRIPT['9']).toEqual('⁹');
      expect(symbols.SUPERSCRIPT['0']).toEqual('⁰');
      expect(symbols.SUPERSCRIPT['-']).toEqual('⁻');
      expect(symbols.SUPERSCRIPT['+']).toEqual('⁺');
      expect(symbols.SUPERSCRIPT['=']).toEqual('⁼');
      expect(symbols.SUPERSCRIPT['(']).toEqual('⁽');
      expect(symbols.SUPERSCRIPT[')']).toEqual('⁾');
      expect(symbols.SUPERSCRIPT['i']).toEqual('ⁱ');
      expect(symbols.SUPERSCRIPT['n']).toEqual('ⁿ');
      expect(symbols.SUPERSCRIPT['o']).toEqual('°');
      expect(symbols.SUPERSCRIPT['*']).toEqual('°');
    });

    it(should` have the BLOCK symbol`, () => {
      expect(symbols.BLOCK.full).toEqual('█');
      expect(symbols.BLOCK.upperHalf).toEqual('▀');
      expect(symbols.BLOCK.lowerOneEighth).toEqual('▁');
      expect(symbols.BLOCK.lowerOneQuarter).toEqual('▂');
      expect(symbols.BLOCK.lowerThreeEighths).toEqual('▃');
      expect(symbols.BLOCK.lowerHalf).toEqual('▄');
      expect(symbols.BLOCK.lowerFiveEighths).toEqual('▅');
      expect(symbols.BLOCK.lowerThreeQuarters).toEqual('▆');
      expect(symbols.BLOCK.lowerSevenEighths).toEqual('▇');
      expect(symbols.BLOCK.leftSevenEighths).toEqual('▉');
      expect(symbols.BLOCK.leftThreeQuarters).toEqual('▊');
      expect(symbols.BLOCK.leftFiveEighths).toEqual('▋');
      expect(symbols.BLOCK.leftHalf).toEqual('▌');
      expect(symbols.BLOCK.leftThreeEighths).toEqual('▍');
      expect(symbols.BLOCK.leftOneQuarter).toEqual('▎');
      expect(symbols.BLOCK.leftOneEighth).toEqual('▏');
      expect(symbols.BLOCK.rightHalf).toEqual('▐');
      expect(symbols.BLOCK.upperOneEighth).toEqual('▔');
      expect(symbols.BLOCK.rightOneEighth).toEqual('▕');
    });

    it(should` have the SHADE symbol`, () => {
      expect(symbols.SHADE.light).toEqual('░');
      expect(symbols.SHADE.medium).toEqual('▒');
      expect(symbols.SHADE.dark).toEqual('▓');
    });

    it(should` have the QUADRANT symbol`, () => {
      expect(symbols.QUADRANT.upperLeft).toEqual('▘');
      expect(symbols.QUADRANT.upperRight).toEqual('▝');
      expect(symbols.QUADRANT.lowerLeft).toEqual('▖');
      expect(symbols.QUADRANT.lowerRight).toEqual('▗');
      expect(symbols.QUADRANT.upperLeftLowerLeftLowerRight).toEqual('▙');
      expect(symbols.QUADRANT.upperLeftLowerRight).toEqual('▚');
      expect(symbols.QUADRANT.upperLeftUpperRightLowerLeft).toEqual('▛');
      expect(symbols.QUADRANT.upperLeftUpperRightLowerRight).toEqual('▜');
      expect(symbols.QUADRANT.upperRightLowerLeft).toEqual('▞');
      expect(symbols.QUADRANT.upperRightLowerLeftLowerRight).toEqual('▟');
    });
  });
});

describe('superscript', () => {
  singleTest(swissak.superscript, 'superscript', (superscript, name) => {
    it(should` exist as ${name}`, () => {
      expect(superscript).toBeDefined();
    });

    it(should` convert the string to superscript`, () => {
      const input = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+-=()*';
      const expct = '⁰¹²³⁴⁵⁶⁷⁸⁹°°°°°°°°ⁱ°°°°ⁿ°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°⁺⁻⁼⁽⁾°';
      expect(superscript(input)).toEqual(expct);
    });

    it(should` convert '0' to superscript`, () => {
      expect(superscript('0')).toEqual('⁰');
    });
    it(should` convert '1' to superscript`, () => {
      expect(superscript('1')).toEqual('¹');
    });
    it(should` convert '2' to superscript`, () => {
      expect(superscript('2')).toEqual('²');
    });
    it(should` convert '3' to superscript`, () => {
      expect(superscript('3')).toEqual('³');
    });
    it(should` convert '4' to superscript`, () => {
      expect(superscript('4')).toEqual('⁴');
    });
    it(should` convert '5' to superscript`, () => {
      expect(superscript('5')).toEqual('⁵');
    });
    it(should` convert '6' to superscript`, () => {
      expect(superscript('6')).toEqual('⁶');
    });
    it(should` convert '7' to superscript`, () => {
      expect(superscript('7')).toEqual('⁷');
    });
    it(should` convert '8' to superscript`, () => {
      expect(superscript('8')).toEqual('⁸');
    });
    it(should` convert '9' to superscript`, () => {
      expect(superscript('9')).toEqual('⁹');
    });
    it(should` convert 'a' to superscript`, () => {
      expect(superscript('a')).toEqual('°');
    });
    it(should` convert 'b' to superscript`, () => {
      expect(superscript('b')).toEqual('°');
    });
    it(should` convert 'c' to superscript`, () => {
      expect(superscript('c')).toEqual('°');
    });
    it(should` convert 'd' to superscript`, () => {
      expect(superscript('d')).toEqual('°');
    });
    it(should` convert 'e' to superscript`, () => {
      expect(superscript('e')).toEqual('°');
    });
    it(should` convert 'f' to superscript`, () => {
      expect(superscript('f')).toEqual('°');
    });
    it(should` convert 'g' to superscript`, () => {
      expect(superscript('g')).toEqual('°');
    });
    it(should` convert 'h' to superscript`, () => {
      expect(superscript('h')).toEqual('°');
    });
    it(should` convert 'i' to superscript`, () => {
      expect(superscript('i')).toEqual('ⁱ');
    });
    it(should` convert 'j' to superscript`, () => {
      expect(superscript('j')).toEqual('°');
    });
    it(should` convert 'k' to superscript`, () => {
      expect(superscript('k')).toEqual('°');
    });
    it(should` convert 'l' to superscript`, () => {
      expect(superscript('l')).toEqual('°');
    });
    it(should` convert 'm' to superscript`, () => {
      expect(superscript('m')).toEqual('°');
    });
    it(should` convert 'n' to superscript`, () => {
      expect(superscript('n')).toEqual('ⁿ');
    });
    it(should` convert 'o' to superscript`, () => {
      expect(superscript('o')).toEqual('°');
    });
    it(should` convert 'p' to superscript`, () => {
      expect(superscript('p')).toEqual('°');
    });
    it(should` convert 'q' to superscript`, () => {
      expect(superscript('q')).toEqual('°');
    });
    it(should` convert 'r' to superscript`, () => {
      expect(superscript('r')).toEqual('°');
    });
    it(should` convert 's' to superscript`, () => {
      expect(superscript('s')).toEqual('°');
    });
    it(should` convert 't' to superscript`, () => {
      expect(superscript('t')).toEqual('°');
    });
    it(should` convert 'u' to superscript`, () => {
      expect(superscript('u')).toEqual('°');
    });
    it(should` convert 'v' to superscript`, () => {
      expect(superscript('v')).toEqual('°');
    });
    it(should` convert 'w' to superscript`, () => {
      expect(superscript('w')).toEqual('°');
    });
    it(should` convert 'x' to superscript`, () => {
      expect(superscript('x')).toEqual('°');
    });
    it(should` convert 'y' to superscript`, () => {
      expect(superscript('y')).toEqual('°');
    });
    it(should` convert 'z' to superscript`, () => {
      expect(superscript('z')).toEqual('°');
    });
    it(should` convert 'A' to superscript`, () => {
      expect(superscript('A')).toEqual('°');
    });
    it(should` convert 'B' to superscript`, () => {
      expect(superscript('B')).toEqual('°');
    });
    it(should` convert 'C' to superscript`, () => {
      expect(superscript('C')).toEqual('°');
    });
    it(should` convert 'D' to superscript`, () => {
      expect(superscript('D')).toEqual('°');
    });
    it(should` convert 'E' to superscript`, () => {
      expect(superscript('E')).toEqual('°');
    });
    it(should` convert 'F' to superscript`, () => {
      expect(superscript('F')).toEqual('°');
    });
    it(should` convert 'G' to superscript`, () => {
      expect(superscript('G')).toEqual('°');
    });
    it(should` convert 'H' to superscript`, () => {
      expect(superscript('H')).toEqual('°');
    });
    it(should` convert 'I' to superscript`, () => {
      expect(superscript('I')).toEqual('°');
    });
    it(should` convert 'J' to superscript`, () => {
      expect(superscript('J')).toEqual('°');
    });
    it(should` convert 'K' to superscript`, () => {
      expect(superscript('K')).toEqual('°');
    });
    it(should` convert 'L' to superscript`, () => {
      expect(superscript('L')).toEqual('°');
    });
    it(should` convert 'M' to superscript`, () => {
      expect(superscript('M')).toEqual('°');
    });
    it(should` convert 'N' to superscript`, () => {
      expect(superscript('N')).toEqual('°');
    });
    it(should` convert 'O' to superscript`, () => {
      expect(superscript('O')).toEqual('°');
    });
    it(should` convert 'P' to superscript`, () => {
      expect(superscript('P')).toEqual('°');
    });
    it(should` convert 'Q' to superscript`, () => {
      expect(superscript('Q')).toEqual('°');
    });
    it(should` convert 'R' to superscript`, () => {
      expect(superscript('R')).toEqual('°');
    });
    it(should` convert 'S' to superscript`, () => {
      expect(superscript('S')).toEqual('°');
    });
    it(should` convert 'T' to superscript`, () => {
      expect(superscript('T')).toEqual('°');
    });
    it(should` convert 'U' to superscript`, () => {
      expect(superscript('U')).toEqual('°');
    });
    it(should` convert 'V' to superscript`, () => {
      expect(superscript('V')).toEqual('°');
    });
    it(should` convert 'W' to superscript`, () => {
      expect(superscript('W')).toEqual('°');
    });
    it(should` convert 'X' to superscript`, () => {
      expect(superscript('X')).toEqual('°');
    });
    it(should` convert 'Y' to superscript`, () => {
      expect(superscript('Y')).toEqual('°');
    });
    it(should` convert 'Z' to superscript`, () => {
      expect(superscript('Z')).toEqual('°');
    });
    it(should` convert '+' to superscript`, () => {
      expect(superscript('+')).toEqual('⁺');
    });
    it(should` convert '-' to superscript`, () => {
      expect(superscript('-')).toEqual('⁻');
    });
    it(should` convert '=' to superscript`, () => {
      expect(superscript('=')).toEqual('⁼');
    });
    it(should` convert '(' to superscript`, () => {
      expect(superscript('(')).toEqual('⁽');
    });
    it(should` convert ')' to superscript`, () => {
      expect(superscript(')')).toEqual('⁾');
    });
    it(should` convert '*' to superscript`, () => {
      expect(superscript('*')).toEqual('°');
    });
  });
});
