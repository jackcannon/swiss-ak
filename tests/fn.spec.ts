import * as swissak from '../';

describe('fn', () => {
  describe('noop', () => {
    it(`exists as 'fn.noop'`, () => {
      expect(swissak.fn.noop).toBeDefined();
    });
  });
  describe('noact', () => {
    it(`exists as 'fn.noact'`, () => {
      expect(swissak.fn.noact).toBeDefined();
    });
  });
  describe('result', () => {
    it(`exists as 'fn.result'`, () => {
      expect(swissak.fn.result).toBeDefined();
    });
  });
  describe('resolve', () => {
    it(`exists as 'fn.resolve'`, () => {
      expect(swissak.fn.resolve).toBeDefined();
    });
  });
  describe('reject', () => {
    it(`exists as 'fn.reject'`, () => {
      expect(swissak.fn.reject).toBeDefined();
    });
  });
  describe('exists', () => {
    it(`exists as 'fn.exists'`, () => {
      expect(swissak.fn.exists).toBeDefined();
    });
    it(`exists as 'fn.filters.exists'`, () => {
      expect(swissak.fn.filters.exists).toBeDefined();
    });
    it(`exists as 'filters.exists'`, () => {
      expect(swissak.filters.exists).toBeDefined();
    });
  });
  describe('isTruthy', () => {
    it(`exists as 'fn.isTruthy'`, () => {
      expect(swissak.fn.isTruthy).toBeDefined();
    });
    it(`exists as 'fn.filters.isTruthy'`, () => {
      expect(swissak.fn.filters.isTruthy).toBeDefined();
    });
    it(`exists as 'filters.isTruthy'`, () => {
      expect(swissak.filters.isTruthy).toBeDefined();
    });
  });
  describe('isFalsy', () => {
    it(`exists as 'fn.isFalsy'`, () => {
      expect(swissak.fn.isFalsy).toBeDefined();
    });
    it(`exists as 'fn.filters.isFalsy'`, () => {
      expect(swissak.fn.filters.isFalsy).toBeDefined();
    });
    it(`exists as 'filters.isFalsy'`, () => {
      expect(swissak.filters.isFalsy).toBeDefined();
    });
  });
  describe('isEmpty', () => {
    it(`exists as 'fn.isEmpty'`, () => {
      expect(swissak.fn.isEmpty).toBeDefined();
    });
    it(`exists as 'fn.filters.isEmpty'`, () => {
      expect(swissak.fn.filters.isEmpty).toBeDefined();
    });
    it(`exists as 'filters.isEmpty'`, () => {
      expect(swissak.filters.isEmpty).toBeDefined();
    });
  });
  describe('isNotEmpty', () => {
    it(`exists as 'fn.isNotEmpty'`, () => {
      expect(swissak.fn.isNotEmpty).toBeDefined();
    });
    it(`exists as 'fn.filters.isNotEmpty'`, () => {
      expect(swissak.fn.filters.isNotEmpty).toBeDefined();
    });
    it(`exists as 'filters.isNotEmpty'`, () => {
      expect(swissak.filters.isNotEmpty).toBeDefined();
    });
  });
  describe('isEqual', () => {
    it(`exists as 'fn.isEqual'`, () => {
      expect(swissak.fn.isEqual).toBeDefined();
    });
    it(`exists as 'fn.filters.isEqual'`, () => {
      expect(swissak.fn.filters.isEqual).toBeDefined();
    });
    it(`exists as 'filters.isEqual'`, () => {
      expect(swissak.filters.isEqual).toBeDefined();
    });
  });
  describe('isNotEqual', () => {
    it(`exists as 'fn.isNotEqual'`, () => {
      expect(swissak.fn.isNotEqual).toBeDefined();
    });
    it(`exists as 'fn.filters.isNotEqual'`, () => {
      expect(swissak.fn.filters.isNotEqual).toBeDefined();
    });
    it(`exists as 'filters.isNotEqual'`, () => {
      expect(swissak.filters.isNotEqual).toBeDefined();
    });
  });
  describe('dedupe', () => {
    it(`exists as 'fn.dedupe'`, () => {
      expect(swissak.fn.dedupe).toBeDefined();
    });
    it(`exists as 'fn.filters.dedupe'`, () => {
      expect(swissak.fn.filters.dedupe).toBeDefined();
    });
    it(`exists as 'filters.dedupe'`, () => {
      expect(swissak.filters.dedupe).toBeDefined();
    });
  });
  describe('dedupeMapped', () => {
    it(`exists as 'fn.dedupeMapped'`, () => {
      expect(swissak.fn.dedupeMapped).toBeDefined();
    });
    it(`exists as 'fn.filters.dedupeMapped'`, () => {
      expect(swissak.fn.filters.dedupeMapped).toBeDefined();
    });
    it(`exists as 'filters.dedupeMapped'`, () => {
      expect(swissak.filters.dedupeMapped).toBeDefined();
    });
  });
  describe('toString', () => {
    it(`exists as 'fn.toString'`, () => {
      expect(swissak.fn.toString).toBeDefined();
    });
    it(`exists as 'fn.maps.toString'`, () => {
      expect(swissak.fn.maps.toString).toBeDefined();
    });
    it(`exists as 'maps.toString'`, () => {
      expect(swissak.maps.toString).toBeDefined();
    });
  });
  describe('toNumber', () => {
    it(`exists as 'fn.toNumber'`, () => {
      expect(swissak.fn.toNumber).toBeDefined();
    });
    it(`exists as 'fn.maps.toNumber'`, () => {
      expect(swissak.fn.maps.toNumber).toBeDefined();
    });
    it(`exists as 'maps.toNumber'`, () => {
      expect(swissak.maps.toNumber).toBeDefined();
    });
  });
  describe('toBool', () => {
    it(`exists as 'fn.toBool'`, () => {
      expect(swissak.fn.toBool).toBeDefined();
    });
    it(`exists as 'fn.maps.toBool'`, () => {
      expect(swissak.fn.maps.toBool).toBeDefined();
    });
    it(`exists as 'maps.toBool'`, () => {
      expect(swissak.maps.toBool).toBeDefined();
    });
  });
  describe('toProp', () => {
    it(`exists as 'fn.toProp'`, () => {
      expect(swissak.fn.toProp).toBeDefined();
    });
    it(`exists as 'fn.maps.toProp'`, () => {
      expect(swissak.fn.maps.toProp).toBeDefined();
    });
    it(`exists as 'maps.toProp'`, () => {
      expect(swissak.maps.toProp).toBeDefined();
    });
  });
  describe('toFixed', () => {
    it(`exists as 'fn.toFixed'`, () => {
      expect(swissak.fn.toFixed).toBeDefined();
    });
    it(`exists as 'fn.maps.toFixed'`, () => {
      expect(swissak.fn.maps.toFixed).toBeDefined();
    });
    it(`exists as 'maps.toFixed'`, () => {
      expect(swissak.maps.toFixed).toBeDefined();
    });
  });
  describe('asc', () => {
    it(`exists as 'fn.asc'`, () => {
      expect(swissak.fn.asc).toBeDefined();
    });
    it(`exists as 'fn.sorts.asc'`, () => {
      expect(swissak.fn.sorts.asc).toBeDefined();
    });
    it(`exists as 'sorts.asc'`, () => {
      expect(swissak.sorts.asc).toBeDefined();
    });
  });
  describe('desc', () => {
    it(`exists as 'fn.desc'`, () => {
      expect(swissak.fn.desc).toBeDefined();
    });
    it(`exists as 'fn.sorts.desc'`, () => {
      expect(swissak.fn.sorts.desc).toBeDefined();
    });
    it(`exists as 'sorts.desc'`, () => {
      expect(swissak.sorts.desc).toBeDefined();
    });
  });
  describe('byProp', () => {
    it(`exists as 'fn.byProp'`, () => {
      expect(swissak.fn.byProp).toBeDefined();
    });
    it(`exists as 'fn.sorts.byProp'`, () => {
      expect(swissak.fn.sorts.byProp).toBeDefined();
    });
    it(`exists as 'sorts.byProp'`, () => {
      expect(swissak.sorts.byProp).toBeDefined();
    });
  });
  describe('nearestTo', () => {
    it(`exists as 'fn.nearestTo'`, () => {
      expect(swissak.fn.nearestTo).toBeDefined();
    });
    it(`exists as 'fn.sorts.nearestTo'`, () => {
      expect(swissak.fn.sorts.nearestTo).toBeDefined();
    });
    it(`exists as 'sorts.nearestTo'`, () => {
      expect(swissak.sorts.nearestTo).toBeDefined();
    });
  });
  describe('furthestFrom', () => {
    it(`exists as 'fn.furthestFrom'`, () => {
      expect(swissak.fn.furthestFrom).toBeDefined();
    });
    it(`exists as 'fn.sorts.furthestFrom'`, () => {
      expect(swissak.fn.sorts.furthestFrom).toBeDefined();
    });
    it(`exists as 'sorts.furthestFrom'`, () => {
      expect(swissak.sorts.furthestFrom).toBeDefined();
    });
  });
  describe('arrayAsc', () => {
    it(`exists as 'fn.arrayAsc'`, () => {
      expect(swissak.fn.arrayAsc).toBeDefined();
    });
    it(`exists as 'fn.sorts.arrayAsc'`, () => {
      expect(swissak.fn.sorts.arrayAsc).toBeDefined();
    });
    it(`exists as 'sorts.arrayAsc'`, () => {
      expect(swissak.sorts.arrayAsc).toBeDefined();
    });
  });
  describe('arrayDesc', () => {
    it(`exists as 'fn.arrayDesc'`, () => {
      expect(swissak.fn.arrayDesc).toBeDefined();
    });
    it(`exists as 'fn.sorts.arrayDesc'`, () => {
      expect(swissak.fn.sorts.arrayDesc).toBeDefined();
    });
    it(`exists as 'sorts.arrayDesc'`, () => {
      expect(swissak.sorts.arrayDesc).toBeDefined();
    });
  });
  describe('combine', () => {
    it(`exists as 'fn.combine'`, () => {
      expect(swissak.fn.combine).toBeDefined();
    });
    it(`exists as 'fn.reduces.combine'`, () => {
      expect(swissak.fn.reduces.combine).toBeDefined();
    });
    it(`exists as 'reduces.combine'`, () => {
      expect(swissak.reduces.combine).toBeDefined();
    });
  });
  describe('combineProp', () => {
    it(`exists as 'fn.combineProp'`, () => {
      expect(swissak.fn.combineProp).toBeDefined();
    });
    it(`exists as 'fn.reduces.combineProp'`, () => {
      expect(swissak.fn.reduces.combineProp).toBeDefined();
    });
    it(`exists as 'reduces.combineProp'`, () => {
      expect(swissak.reduces.combineProp).toBeDefined();
    });
  });
  describe('mode', () => {
    it(`exists as 'fn.mode'`, () => {
      expect(swissak.fn.mode).toBeDefined();
    });
    it(`exists as 'fn.reduces.mode'`, () => {
      expect(swissak.fn.reduces.mode).toBeDefined();
    });
    it(`exists as 'reduces.mode'`, () => {
      expect(swissak.reduces.mode).toBeDefined();
    });
  });
  describe('modeMapped', () => {
    it(`exists as 'fn.modeMapped'`, () => {
      expect(swissak.fn.modeMapped).toBeDefined();
    });
    it(`exists as 'fn.reduces.modeMapped'`, () => {
      expect(swissak.fn.reduces.modeMapped).toBeDefined();
    });
    it(`exists as 'reduces.modeMapped'`, () => {
      expect(swissak.reduces.modeMapped).toBeDefined();
    });
  });
  describe('isAllEqual', () => {
    it(`exists as 'fn.isAllEqual'`, () => {
      expect(swissak.fn.isAllEqual).toBeDefined();
    });
    it(`exists as 'fn.everys.isAllEqual'`, () => {
      expect(swissak.fn.everys.isAllEqual).toBeDefined();
    });
    it(`exists as 'everys.isAllEqual'`, () => {
      expect(swissak.everys.isAllEqual).toBeDefined();
    });
  });
});
