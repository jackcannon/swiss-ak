import * as swissak from '../';
import { register, should } from './test-utils';

register({ describe, it, expect });

describe('MathsTools', () => {
  describe('fixFloat', () => {
    it(should` exist as 'ff'`, () => {
      expect(swissak.ff).toBeDefined();
    });
    it(should` exist as 'MathsTools.ff'`, () => {
      expect(swissak.MathsTools.ff).toBeDefined();
    });
    it(should` exist as 'MathsTools.fixFloat'`, () => {
      expect(swissak.MathsTools.fixFloat).toBeDefined();
    });
  });
  describe('addAll', () => {
    it(should` exist as 'MathsTools.addAll'`, () => {
      expect(swissak.MathsTools.addAll).toBeDefined();
    });
  });
  describe('floorTo', () => {
    it(should` exist as 'MathsTools.floorTo'`, () => {
      expect(swissak.MathsTools.floorTo).toBeDefined();
    });
    it(should` exist as 'MathsTools.round.floorTo'`, () => {
      expect(swissak.MathsTools.round.floorTo).toBeDefined();
    });
    it(should` exist as 'MathsTools.round.to'`, () => {
      expect(swissak.MathsTools.round.to).toBeDefined();
    });
  });
  describe('roundTo', () => {
    it(should` exist as 'MathsTools.roundTo'`, () => {
      expect(swissak.MathsTools.roundTo).toBeDefined();
    });
    it(should` exist as 'MathsTools.round.roundTo'`, () => {
      expect(swissak.MathsTools.round.roundTo).toBeDefined();
    });
  });
  describe('ceilTo', () => {
    it(should` exist as 'MathsTools.ceilTo'`, () => {
      expect(swissak.MathsTools.ceilTo).toBeDefined();
    });
    it(should` exist as 'MathsTools.round.ceilTo'`, () => {
      expect(swissak.MathsTools.round.ceilTo).toBeDefined();
    });
  });
  describe('lerp', () => {
    it(should` exist as 'MathsTools.lerp'`, () => {
      expect(swissak.MathsTools.lerp).toBeDefined();
    });
  });
  describe('lerpArray', () => {
    it(should` exist as 'MathsTools.lerpArray'`, () => {
      expect(swissak.MathsTools.lerpArray).toBeDefined();
    });
  });
  describe('lerpObj', () => {
    it(should` exist as 'MathsTools.lerpObj'`, () => {
      expect(swissak.MathsTools.lerpObj).toBeDefined();
    });
  });
  describe('clamp', () => {
    it(should` exist as 'MathsTools.clamp'`, () => {
      expect(swissak.MathsTools.clamp).toBeDefined();
    });
  });
  describe('getOrdinal', () => {
    it(should` exist as 'MathsTools.getOrdinal'`, () => {
      expect(swissak.MathsTools.getOrdinal).toBeDefined();
    });
  });
});
