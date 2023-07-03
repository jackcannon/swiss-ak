import * as swissak from '../';

describe('PromiseTools', () => {
  describe('getDeferred', () => {
    it(`exists as 'getDeferred'`, () => {
      expect(swissak.getDeferred).toBeDefined();
    });
    it(`exists as 'PromiseTools.getDeferred'`, () => {
      expect(swissak.PromiseTools.getDeferred).toBeDefined();
    });
  });
  describe('all', () => {
    it(`exists as 'all'`, () => {
      expect(swissak.all).toBeDefined();
    });
    it(`exists as 'PromiseTools.all'`, () => {
      expect(swissak.PromiseTools.all).toBeDefined();
    });
  });
  describe('allLimit', () => {
    it(`exists as 'allLimit'`, () => {
      expect(swissak.allLimit).toBeDefined();
    });
    it(`exists as 'PromiseTools.allLimit'`, () => {
      expect(swissak.PromiseTools.allLimit).toBeDefined();
    });
  });
  describe('each', () => {
    it(`exists as 'each'`, () => {
      expect(swissak.each).toBeDefined();
    });
    it(`exists as 'PromiseTools.each'`, () => {
      expect(swissak.PromiseTools.each).toBeDefined();
    });
  });
  describe('eachLimit', () => {
    it(`exists as 'eachLimit'`, () => {
      expect(swissak.eachLimit).toBeDefined();
    });
    it(`exists as 'PromiseTools.eachLimit'`, () => {
      expect(swissak.PromiseTools.eachLimit).toBeDefined();
    });
  });
  describe('map', () => {
    it(`exists as 'map'`, () => {
      expect(swissak.map).toBeDefined();
    });
    it(`exists as 'PromiseTools.map'`, () => {
      expect(swissak.PromiseTools.map).toBeDefined();
    });
  });
  describe('mapLimit', () => {
    it(`exists as 'mapLimit'`, () => {
      expect(swissak.mapLimit).toBeDefined();
    });
    it(`exists as 'PromiseTools.mapLimit'`, () => {
      expect(swissak.PromiseTools.mapLimit).toBeDefined();
    });
  });
  describe('allObj', () => {
    it(`exists as 'allObj'`, () => {
      expect(swissak.allObj).toBeDefined();
    });
    it(`exists as 'PromiseTools.allObj'`, () => {
      expect(swissak.PromiseTools.allObj).toBeDefined();
    });
  });
  describe('allLimitObj', () => {
    it(`exists as 'allLimitObj'`, () => {
      expect(swissak.allLimitObj).toBeDefined();
    });
    it(`exists as 'PromiseTools.allLimitObj'`, () => {
      expect(swissak.PromiseTools.allLimitObj).toBeDefined();
    });
  });
});
