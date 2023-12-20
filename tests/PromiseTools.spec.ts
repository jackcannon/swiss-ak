import * as swissak from '../';
import { register, should } from './test-utils';

register({ describe, it, expect });

describe('PromiseTools', () => {
  describe('getDeferred', () => {
    it(should` exist as 'getDeferred'`, () => {
      expect(swissak.getDeferred).toBeDefined();
    });
    it(should` exist as 'PromiseTools.getDeferred'`, () => {
      expect(swissak.PromiseTools.getDeferred).toBeDefined();
    });
  });
  describe('all', () => {
    it(should` exist as 'all'`, () => {
      expect(swissak.all).toBeDefined();
    });
    it(should` exist as 'PromiseTools.all'`, () => {
      expect(swissak.PromiseTools.all).toBeDefined();
    });
  });
  describe('allLimit', () => {
    it(should` exist as 'allLimit'`, () => {
      expect(swissak.allLimit).toBeDefined();
    });
    it(should` exist as 'PromiseTools.allLimit'`, () => {
      expect(swissak.PromiseTools.allLimit).toBeDefined();
    });
  });
  describe('each', () => {
    it(should` exist as 'each'`, () => {
      expect(swissak.each).toBeDefined();
    });
    it(should` exist as 'PromiseTools.each'`, () => {
      expect(swissak.PromiseTools.each).toBeDefined();
    });
  });
  describe('eachLimit', () => {
    it(should` exist as 'eachLimit'`, () => {
      expect(swissak.eachLimit).toBeDefined();
    });
    it(should` exist as 'PromiseTools.eachLimit'`, () => {
      expect(swissak.PromiseTools.eachLimit).toBeDefined();
    });
  });
  describe('map', () => {
    it(should` exist as 'map'`, () => {
      expect(swissak.map).toBeDefined();
    });
    it(should` exist as 'PromiseTools.map'`, () => {
      expect(swissak.PromiseTools.map).toBeDefined();
    });
  });
  describe('mapLimit', () => {
    it(should` exist as 'mapLimit'`, () => {
      expect(swissak.mapLimit).toBeDefined();
    });
    it(should` exist as 'PromiseTools.mapLimit'`, () => {
      expect(swissak.PromiseTools.mapLimit).toBeDefined();
    });
  });
  describe('allObj', () => {
    it(should` exist as 'allObj'`, () => {
      expect(swissak.allObj).toBeDefined();
    });
    it(should` exist as 'PromiseTools.allObj'`, () => {
      expect(swissak.PromiseTools.allObj).toBeDefined();
    });
  });
  describe('allLimitObj', () => {
    it(should` exist as 'allLimitObj'`, () => {
      expect(swissak.allLimitObj).toBeDefined();
    });
    it(should` exist as 'PromiseTools.allLimitObj'`, () => {
      expect(swissak.PromiseTools.allLimitObj).toBeDefined();
    });
  });
});
