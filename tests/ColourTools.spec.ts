import * as swissak from '../';

describe('ColourTools', () => {
  describe('namedColours', () => {
    it(`exists as 'ColourTools.namedColours'`, () => {
      expect(swissak.ColourTools.namedColours).toBeDefined();
    });
  });
  describe('parse', () => {
    it(`exists as 'ColourTools.parse'`, () => {
      expect(swissak.ColourTools.parse).toBeDefined();
    });
  });
  describe('toHex', () => {
    it(`exists as 'ColourTools.toHex'`, () => {
      expect(swissak.ColourTools.toHex).toBeDefined();
    });
  });
  describe('getLuminance', () => {
    it(`exists as 'ColourTools.getLuminance'`, () => {
      expect(swissak.ColourTools.getLuminance).toBeDefined();
    });
  });
  describe('toYUV', () => {
    it(`exists as 'ColourTools.toYUV'`, () => {
      expect(swissak.ColourTools.toYUV).toBeDefined();
    });
  });
  describe('toHSL', () => {
    it(`exists as 'ColourTools.toHSL'`, () => {
      expect(swissak.ColourTools.toHSL).toBeDefined();
    });
  });
  describe('fromHSL', () => {
    it(`exists as 'ColourTools.fromHSL'`, () => {
      expect(swissak.ColourTools.fromHSL).toBeDefined();
    });
  });
  describe('invertColour', () => {
    it(`exists as 'ColourTools.invertColour'`, () => {
      expect(swissak.ColourTools.invertColour).toBeDefined();
    });
  });
  describe('getContrastedColour', () => {
    it(`exists as 'ColourTools.getContrastedColour'`, () => {
      expect(swissak.ColourTools.getContrastedColour).toBeDefined();
    });
  });
  describe('getLimitedColour', () => {
    it(`exists as 'ColourTools.getLimitedColour'`, () => {
      expect(swissak.ColourTools.getLimitedColour).toBeDefined();
    });
  });
});
