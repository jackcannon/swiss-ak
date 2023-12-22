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

        // TODO tests
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

        // TODO tests
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

        // TODO tests
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

        // TODO tests
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

        // TODO tests
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

        // TODO tests
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

        // TODO tests
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

        // TODO tests
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

        // TODO tests
      }
    );
  });
});
