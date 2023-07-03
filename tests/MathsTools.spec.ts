import * as swissak from '../';

describe('MathsTools', () => {
  describe('fixFloat', () => {
    it(`exists as 'ff'`, () => {
      expect(swissak.ff).toBeDefined();
    });
    it(`exists as 'MathsTools.ff'`, () => {
      expect(swissak.MathsTools.ff).toBeDefined();
    });
    it(`exists as 'MathsTools.fixFloat'`, () => {
      expect(swissak.MathsTools.fixFloat).toBeDefined();
    });
  });
  describe('addAll', () => {
    it(`exists as 'MathsTools.addAll'`, () => {
      expect(swissak.MathsTools.addAll).toBeDefined();
    });
  });
  describe('floorTo', () => {
    it(`exists as 'MathsTools.floorTo'`, () => {
      expect(swissak.MathsTools.floorTo).toBeDefined();
    });
    it(`exists as 'MathsTools.round.floorTo'`, () => {
      expect(swissak.MathsTools.round.floorTo).toBeDefined();
    });
    it(`exists as 'MathsTools.round.to'`, () => {
      expect(swissak.MathsTools.round.to).toBeDefined();
    });
  });
  describe('roundTo', () => {
    it(`exists as 'MathsTools.roundTo'`, () => {
      expect(swissak.MathsTools.roundTo).toBeDefined();
    });
    it(`exists as 'MathsTools.round.roundTo'`, () => {
      expect(swissak.MathsTools.round.roundTo).toBeDefined();
    });
  });
  describe('ceilTo', () => {
    it(`exists as 'MathsTools.ceilTo'`, () => {
      expect(swissak.MathsTools.ceilTo).toBeDefined();
    });
    it(`exists as 'MathsTools.round.ceilTo'`, () => {
      expect(swissak.MathsTools.round.ceilTo).toBeDefined();
    });
  });
  describe('lerp', () => {
    it(`exists as 'MathsTools.lerp'`, () => {
      expect(swissak.MathsTools.lerp).toBeDefined();
    });
  });
  describe('lerpArray', () => {
    it(`exists as 'MathsTools.lerpArray'`, () => {
      expect(swissak.MathsTools.lerpArray).toBeDefined();
    });
  });
  describe('lerpObj', () => {
    it(`exists as 'MathsTools.lerpObj'`, () => {
      expect(swissak.MathsTools.lerpObj).toBeDefined();
    });
  });
  describe('clamp', () => {
    it(`exists as 'MathsTools.clamp'`, () => {
      expect(swissak.MathsTools.clamp).toBeDefined();
    });
  });
  describe('getOrdinal', () => {
    it(`exists as 'MathsTools.getOrdinal'`, () => {
      expect(swissak.MathsTools.getOrdinal).toBeDefined();
    });
  });
});
