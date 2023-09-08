import * as swissak from '../';
import { multiTest } from './test-utils';

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
    multiTest(
      [
        [swissak.fn.exists, 'fn.exists'],
        [swissak.fn.filters.exists, 'fn.filters.exists'],
        [swissak.filters.exists, 'filters.exists']
      ],
      (exists, name) => {
        it(`exists as '${name}'`, () => {
          expect(exists).toBeDefined();
        });
      }
    );
  });
  describe('isTruthy', () => {
    multiTest(
      [
        [swissak.fn.isTruthy, 'fn.isTruthy'],
        [swissak.fn.filters.isTruthy, 'fn.filters.isTruthy'],
        [swissak.filters.isTruthy, 'filters.isTruthy']
      ],
      (isTruthy, name) => {
        it(`exists as '${name}'`, () => {
          expect(isTruthy).toBeDefined();
        });
      }
    );
  });
  describe('isFalsy', () => {
    multiTest(
      [
        [swissak.fn.isFalsy, 'fn.isFalsy'],
        [swissak.fn.filters.isFalsy, 'fn.filters.isFalsy'],
        [swissak.filters.isFalsy, 'filters.isFalsy']
      ],
      (isFalsy, name) => {
        it(`exists as '${name}'`, () => {
          expect(isFalsy).toBeDefined();
        });
      }
    );
  });
  describe('isEmpty', () => {
    multiTest(
      [
        [swissak.fn.isEmpty, 'fn.isEmpty'],
        [swissak.fn.filters.isEmpty, 'fn.filters.isEmpty'],
        [swissak.filters.isEmpty, 'filters.isEmpty']
      ],
      (isEmpty, name) => {
        it(`exists as '${name}'`, () => {
          expect(isEmpty).toBeDefined();
        });
      }
    );
  });
  describe('isNotEmpty', () => {
    multiTest(
      [
        [swissak.fn.isNotEmpty, 'fn.isNotEmpty'],
        [swissak.fn.filters.isNotEmpty, 'fn.filters.isNotEmpty'],
        [swissak.filters.isNotEmpty, 'filters.isNotEmpty']
      ],
      (isNotEmpty, name) => {
        it(`exists as '${name}'`, () => {
          expect(isNotEmpty).toBeDefined();
        });
      }
    );
  });
  describe('isEqual', () => {
    multiTest(
      [
        [swissak.fn.isEqual, 'fn.isEqual'],
        [swissak.fn.filters.isEqual, 'fn.filters.isEqual'],
        [swissak.filters.isEqual, 'filters.isEqual']
      ],
      (isEqual, name) => {
        it(`exists as '${name}'`, () => {
          expect(isEqual).toBeDefined();
        });
      }
    );
  });
  describe('isNotEqual', () => {
    multiTest(
      [
        [swissak.fn.isNotEqual, 'fn.isNotEqual'],
        [swissak.fn.filters.isNotEqual, 'fn.filters.isNotEqual'],
        [swissak.filters.isNotEqual, 'filters.isNotEqual']
      ],
      (isNotEqual, name) => {
        it(`exists as '${name}'`, () => {
          expect(isNotEqual).toBeDefined();
        });
      }
    );
  });
  describe('dedupe', () => {
    multiTest(
      [
        [swissak.fn.dedupe, 'fn.dedupe'],
        [swissak.fn.filters.dedupe, 'fn.filters.dedupe'],
        [swissak.filters.dedupe, 'filters.dedupe']
      ],
      (dedupe, name) => {
        it(`exists as '${name}'`, () => {
          expect(dedupe).toBeDefined();
        });
      }
    );
  });
  describe('dedupeMapped', () => {
    multiTest(
      [
        [swissak.fn.dedupeMapped, 'fn.dedupeMapped'],
        [swissak.fn.filters.dedupeMapped, 'fn.filters.dedupeMapped'],
        [swissak.filters.dedupeMapped, 'filters.dedupeMapped']
      ],
      (dedupeMapped, name) => {
        it(`exists as '${name}'`, () => {
          expect(dedupeMapped).toBeDefined();
        });
      }
    );
  });
  describe('toString', () => {
    multiTest(
      [
        [swissak.fn.toString, 'fn.toString'],
        [swissak.fn.maps.toString, 'fn.maps.toString'],
        [swissak.maps.toString, 'maps.toString']
      ],
      (toString, name) => {
        it(`exists as '${name}'`, () => {
          expect(toString).toBeDefined();
        });
      }
    );
  });
  describe('toNumber', () => {
    multiTest(
      [
        [swissak.fn.toNumber, 'fn.toNumber'],
        [swissak.fn.maps.toNumber, 'fn.maps.toNumber'],
        [swissak.maps.toNumber, 'maps.toNumber']
      ],
      (toNumber, name) => {
        it(`exists as '${name}'`, () => {
          expect(toNumber).toBeDefined();
        });
      }
    );
  });
  describe('toBool', () => {
    multiTest(
      [
        [swissak.fn.toBool, 'fn.toBool'],
        [swissak.fn.maps.toBool, 'fn.maps.toBool'],
        [swissak.maps.toBool, 'maps.toBool']
      ],
      (toBool, name) => {
        it(`exists as '${name}'`, () => {
          expect(toBool).toBeDefined();
        });
      }
    );
  });
  describe('toProp', () => {
    multiTest(
      [
        [swissak.fn.toProp, 'fn.toProp'],
        [swissak.fn.maps.toProp, 'fn.maps.toProp'],
        [swissak.maps.toProp, 'maps.toProp']
      ],
      (toProp, name) => {
        it(`exists as '${name}'`, () => {
          expect(toProp).toBeDefined();
        });
      }
    );
  });
  describe('toFixed', () => {
    multiTest(
      [
        [swissak.fn.toFixed, 'fn.toFixed'],
        [swissak.fn.maps.toFixed, 'fn.maps.toFixed'],
        [swissak.maps.toFixed, 'maps.toFixed']
      ],
      (toFixed, name) => {
        it(`exists as '${name}'`, () => {
          expect(toFixed).toBeDefined();
        });
      }
    );
  });
  describe('asc', () => {
    multiTest(
      [
        [swissak.fn.asc, 'fn.asc'],
        [swissak.fn.sorts.asc, 'fn.sorts.asc'],
        [swissak.sorts.asc, 'sorts.asc']
      ],
      (asc, name) => {
        it(`exists as '${name}'`, () => {
          expect(asc).toBeDefined();
        });
      }
    );
  });
  describe('desc', () => {
    multiTest(
      [
        [swissak.fn.desc, 'fn.desc'],
        [swissak.fn.sorts.desc, 'fn.sorts.desc'],
        [swissak.sorts.desc, 'sorts.desc']
      ],
      (desc, name) => {
        it(`exists as '${name}'`, () => {
          expect(desc).toBeDefined();
        });
      }
    );
  });
  describe('byProp', () => {
    multiTest(
      [
        [swissak.fn.byProp, 'fn.byProp'],
        [swissak.fn.sorts.byProp, 'fn.sorts.byProp'],
        [swissak.sorts.byProp, 'sorts.byProp']
      ],
      (byProp, name) => {
        it(`exists as '${name}'`, () => {
          expect(byProp).toBeDefined();
        });
      }
    );
  });
  describe('nearestTo', () => {
    multiTest(
      [
        [swissak.fn.nearestTo, 'fn.nearestTo'],
        [swissak.fn.sorts.nearestTo, 'fn.sorts.nearestTo'],
        [swissak.sorts.nearestTo, 'sorts.nearestTo']
      ],
      (nearestTo, name) => {
        it(`exists as '${name}'`, () => {
          expect(nearestTo).toBeDefined();
        });
      }
    );
  });
  describe('furthestFrom', () => {
    multiTest(
      [
        [swissak.fn.furthestFrom, 'fn.furthestFrom'],
        [swissak.fn.sorts.furthestFrom, 'fn.sorts.furthestFrom'],
        [swissak.sorts.furthestFrom, 'sorts.furthestFrom']
      ],
      (furthestFrom, name) => {
        it(`exists as '${name}'`, () => {
          expect(furthestFrom).toBeDefined();
        });
      }
    );
  });
  describe('arrayAsc', () => {
    multiTest(
      [
        [swissak.fn.arrayAsc, 'fn.arrayAsc'],
        [swissak.fn.sorts.arrayAsc, 'fn.sorts.arrayAsc'],
        [swissak.sorts.arrayAsc, 'sorts.arrayAsc']
      ],
      (arrayAsc, name) => {
        it(`exists as '${name}'`, () => {
          expect(arrayAsc).toBeDefined();
        });
      }
    );
  });
  describe('arrayDesc', () => {
    multiTest(
      [
        [swissak.fn.arrayDesc, 'fn.arrayDesc'],
        [swissak.fn.sorts.arrayDesc, 'fn.sorts.arrayDesc'],
        [swissak.sorts.arrayDesc, 'sorts.arrayDesc']
      ],
      (arrayDesc, name) => {
        it(`exists as '${name}'`, () => {
          expect(arrayDesc).toBeDefined();
        });
      }
    );
  });
  describe('combine', () => {
    multiTest(
      [
        [swissak.fn.combine, 'fn.combine'],
        [swissak.fn.reduces.combine, 'fn.reduces.combine'],
        [swissak.reduces.combine, 'reduces.combine']
      ],
      (combine, name) => {
        it(`exists as '${name}'`, () => {
          expect(combine).toBeDefined();
        });
      }
    );
  });
  describe('combineProp', () => {
    multiTest(
      [
        [swissak.fn.combineProp, 'fn.combineProp'],
        [swissak.fn.reduces.combineProp, 'fn.reduces.combineProp'],
        [swissak.reduces.combineProp, 'reduces.combineProp']
      ],
      (combineProp, name) => {
        it(`exists as '${name}'`, () => {
          expect(combineProp).toBeDefined();
        });
      }
    );
  });
  describe('mode', () => {
    multiTest(
      [
        [swissak.fn.mode, 'fn.mode'],
        [swissak.fn.reduces.mode, 'fn.reduces.mode'],
        [swissak.reduces.mode, 'reduces.mode']
      ],
      (mode, name) => {
        it(`exists as '${name}'`, () => {
          expect(mode).toBeDefined();
        });
      }
    );
  });
  describe('modeMapped', () => {
    multiTest(
      [
        [swissak.fn.modeMapped, 'fn.modeMapped'],
        [swissak.fn.reduces.modeMapped, 'fn.reduces.modeMapped'],
        [swissak.reduces.modeMapped, 'reduces.modeMapped']
      ],
      (modeMapped, name) => {
        it(`exists as '${name}'`, () => {
          expect(modeMapped).toBeDefined();
        });
      }
    );
  });
  describe('isAllEqual', () => {
    multiTest(
      [
        [swissak.fn.isAllEqual, 'fn.isAllEqual'],
        [swissak.fn.everys.isAllEqual, 'fn.everys.isAllEqual'],
        [swissak.everys.isAllEqual, 'everys.isAllEqual']
      ],
      (isAllEqual, name) => {
        it(`exists as '${name}'`, () => {
          expect(isAllEqual).toBeDefined();
        });
      }
    );
  });
});
