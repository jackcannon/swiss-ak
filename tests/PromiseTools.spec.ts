import * as swissak from '../';
import { register, should, singleTest, multiTest, kitchenSink } from './test-utils';

register({ describe, it, expect });

describe('PromiseTools', () => {
  describe('getDeferred', () => {
    multiTest(
      [
        [swissak.getDeferred, 'getDeferred'],
        [swissak.PromiseTools.getDeferred, 'PromiseTools.getDeferred']
      ],
      (getDeferred, name) => {
        it(should` exist as ${name}`, () => {
          expect(getDeferred).toBeDefined();
        });
      }
    );
  });
  describe('all', () => {
    multiTest(
      [
        [swissak.all, 'all'],
        [swissak.PromiseTools.all, 'PromiseTools.all']
      ],
      (all, name) => {
        it(should` exist as ${name}`, () => {
          expect(all).toBeDefined();
        });
      }
    );
  });
  describe('allLimit', () => {
    multiTest(
      [
        [swissak.allLimit, 'allLimit'],
        [swissak.PromiseTools.allLimit, 'PromiseTools.allLimit']
      ],
      (allLimit, name) => {
        it(should` exist as ${name}`, () => {
          expect(allLimit).toBeDefined();
        });
      }
    );
  });
  describe('each', () => {
    multiTest(
      [
        [swissak.each, 'each'],
        [swissak.PromiseTools.each, 'PromiseTools.each']
      ],
      (each, name) => {
        it(should` exist as ${name}`, () => {
          expect(each).toBeDefined();
        });
      }
    );
  });
  describe('eachLimit', () => {
    multiTest(
      [
        [swissak.eachLimit, 'eachLimit'],
        [swissak.PromiseTools.eachLimit, 'PromiseTools.eachLimit']
      ],
      (eachLimit, name) => {
        it(should` exist as ${name}`, () => {
          expect(eachLimit).toBeDefined();
        });
      }
    );
  });
  describe('map', () => {
    multiTest(
      [
        [swissak.map, 'map'],
        [swissak.PromiseTools.map, 'PromiseTools.map']
      ],
      (map, name) => {
        it(should` exist as ${name}`, () => {
          expect(map).toBeDefined();
        });
      }
    );
  });
  describe('mapLimit', () => {
    multiTest(
      [
        [swissak.mapLimit, 'mapLimit'],
        [swissak.PromiseTools.mapLimit, 'PromiseTools.mapLimit']
      ],
      (mapLimit, name) => {
        it(should` exist as ${name}`, () => {
          expect(mapLimit).toBeDefined();
        });
      }
    );
  });
  describe('allObj', () => {
    multiTest(
      [
        [swissak.allObj, 'allObj'],
        [swissak.PromiseTools.allObj as any, 'PromiseTools.allObj']
      ],
      (allObj: typeof swissak.allObj, name) => {
        it(should` exist as ${name}`, () => {
          expect(allObj).toBeDefined();
        });
      }
    );
  });
  describe('allLimitObj', () => {
    multiTest(
      [
        [swissak.allLimitObj, 'allLimitObj'],
        [swissak.PromiseTools.allLimitObj as any, 'PromiseTools.allLimitObj']
      ],
      (allLimitObj: typeof swissak.allLimitObj, name) => {
        it(should` exist as ${name}`, () => {
          expect(allLimitObj).toBeDefined();
        });
      }
    );
  });
});
