import * as swissak from '../';
import { register, should } from './test-utils';

register({ describe, it, expect });

describe('ObjectTools', () => {
  describe('remodel', () => {
    it(should` exist as 'ObjectTools.remodel'`, () => {
      expect(swissak.ObjectTools.remodel).toBeDefined();
    });
  });
  describe('remodelEach', () => {
    it(should` exist as 'ObjectTools.remodelEach'`, () => {
      expect(swissak.ObjectTools.remodelEach).toBeDefined();
    });
  });
  describe('map', () => {
    it(should` exist as 'ObjectTools.map'`, () => {
      expect(swissak.ObjectTools.map).toBeDefined();
    });
  });
  describe('mapValues', () => {
    it(should` exist as 'ObjectTools.mapValues'`, () => {
      expect(swissak.ObjectTools.mapValues).toBeDefined();
    });
  });
  describe('mapKeys', () => {
    it(should` exist as 'ObjectTools.mapKeys'`, () => {
      expect(swissak.ObjectTools.mapKeys).toBeDefined();
    });
  });
  describe('filter', () => {
    it(should` exist as 'ObjectTools.filter'`, () => {
      expect(swissak.ObjectTools.filter).toBeDefined();
    });
  });
  describe('clean', () => {
    it(should` exist as 'ObjectTools.clean'`, () => {
      expect(swissak.ObjectTools.clean).toBeDefined();
    });
  });
});
