import * as swissak from '../';
import { register, should, singleTest, multiTest, kitchenSink } from './test-utils';

register({ describe, it, expect });

const GENERAL_ARRAY = [undefined, null, NaN, Infinity, '123', 'a string', true, false, 123, 0, { foo: 'bar' }, ['foo', 'bar']];

describe('fn', () => {
  describe('noop', () => {
    singleTest(swissak.fn.noop, 'fn.noop', (noop, name) => {
      it(should` exist as ${name}`, () => {
        expect(noop).toBeDefined();
      });
      it(should` return nothing`, () => {
        expect(noop()).toBe(undefined);
      });
    });
  });
  describe('noact', () => {
    singleTest(swissak.fn.noact, 'fn.noact', (noact, name) => {
      it(should` exist as ${name}`, () => {
        expect(noact).toBeDefined();
      });

      kitchenSink.samples.general.forEach((value) => {
        it(should` return ${value}`, () => {
          expect(noact(value)).toBe(value);
        });
      });
    });
  });
  describe('result', () => {
    singleTest(swissak.fn.result, 'fn.result', (result, name) => {
      it(should` exist as ${name}`, () => {
        expect(result).toBeDefined();
      });

      kitchenSink.samples.general.forEach((value) => {
        it(should` return a function that returns ${value}`, () => {
          expect(result(value)()).toBe(value);
        });
      });
    });
  });
  describe('resolve', () => {
    singleTest(swissak.fn.resolve, 'fn.resolve', (resolve, name) => {
      it(should` exist as ${name}`, () => {
        expect(resolve).toBeDefined();
      });

      it(should` return a function that returns a promise`, () => {
        expect(resolve(undefined)()).toBeInstanceOf(Promise);
      });

      kitchenSink.samples.general.forEach((value) => {
        it(should` return a function that returns a promise that resolves to ${value}`, () => {
          expect(resolve(value)()).resolves.toBe(value);
        });
      });
    });
  });
  describe('reject', () => {
    singleTest(swissak.fn.reject, 'fn.reject', (reject, name) => {
      it(should` exist as ${name}`, () => {
        expect(reject).toBeDefined();
      });

      it(should` return a function that returns a promise `, () => {
        expect(reject(undefined)()).rejects.toBe(undefined);
      });

      kitchenSink.samples.general.forEach((value) => {
        it(should` return a function that returns a promise that rejects to ${value}`, () => {
          expect(reject(value)()).rejects.toBe(value);
        });
      });
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
        it(should` exist as ${name}`, () => {
          expect(exists).toBeDefined();
        });

        it(should` handle 0`, () => expect(exists(0)).toBe(true));
        it(should` handle 1`, () => expect(exists(1)).toBe(true));
        it(should` handle undefined`, () => expect(exists(undefined)).toBe(false));
        it(should` handle null`, () => expect(exists(null)).toBe(false));
        it(should` handle ''`, () => expect(exists('')).toBe(true));
        it(should` handle -1`, () => expect(exists(-1)).toBe(true));
        it(should` handle 'a'`, () => expect(exists('a')).toBe(true));
        it(should` handle Infinity`, () => expect(exists(Infinity)).toBe(true));
        it(should` handle NaN`, () => expect(exists(NaN)).toBe(true));
        it(should` handle false`, () => expect(exists(false)).toBe(true));
        it(should` handle true`, () => expect(exists(true)).toBe(true));

        it(should` work as a filter`, () => {
          const expected = [NaN, Infinity, '123', 'a string', true, false, 123, 0, { foo: 'bar' }, ['foo', 'bar']];
          expect(GENERAL_ARRAY.filter(exists)).toEqual(expected);
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
        it(should` exist as ${name}`, () => {
          expect(isTruthy).toBeDefined();
        });

        it(should` handle 0`, () => expect(isTruthy(0)).toBe(false));
        it(should` handle 1`, () => expect(isTruthy(1)).toBe(true));
        it(should` handle undefined`, () => expect(isTruthy(undefined)).toBe(false));
        it(should` handle null`, () => expect(isTruthy(null)).toBe(false));
        it(should` handle ''`, () => expect(isTruthy('')).toBe(false));
        it(should` handle -1`, () => expect(isTruthy(-1)).toBe(true));
        it(should` handle 'a'`, () => expect(isTruthy('a')).toBe(true));
        it(should` handle Infinity`, () => expect(isTruthy(Infinity)).toBe(true));
        it(should` handle NaN`, () => expect(isTruthy(NaN)).toBe(false));
        it(should` handle false`, () => expect(isTruthy(false)).toBe(false));
        it(should` handle true`, () => expect(isTruthy(true)).toBe(true));

        it(should` work as a filter`, () => {
          const expected = [Infinity, '123', 'a string', true, 123, { foo: 'bar' }, ['foo', 'bar']];
          expect(GENERAL_ARRAY.filter(isTruthy)).toEqual(expected);
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
        it(should` exist as ${name}`, () => {
          expect(isFalsy).toBeDefined();
        });

        it(should` handle 0`, () => expect(isFalsy(0)).toBe(true));
        it(should` handle 1`, () => expect(isFalsy(1)).toBe(false));
        it(should` handle undefined`, () => expect(isFalsy(undefined)).toBe(true));
        it(should` handle null`, () => expect(isFalsy(null)).toBe(true));
        it(should` handle ''`, () => expect(isFalsy('')).toBe(true));
        it(should` handle -1`, () => expect(isFalsy(-1)).toBe(false));
        it(should` handle 'a'`, () => expect(isFalsy('a')).toBe(false));
        it(should` handle Infinity`, () => expect(isFalsy(Infinity)).toBe(false));
        it(should` handle NaN`, () => expect(isFalsy(NaN)).toBe(true));
        it(should` handle false`, () => expect(isFalsy(false)).toBe(true));
        it(should` handle true`, () => expect(isFalsy(true)).toBe(false));

        it(should` work as a filter`, () => {
          const expected = [undefined, null, NaN, false, 0];
          expect(GENERAL_ARRAY.filter(isFalsy)).toEqual(expected);
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
        it(should` exist as ${name}`, () => {
          expect(isEmpty).toBeDefined();
        });

        it(should` work as a filter for strings`, () => {
          const input = [undefined, null, '', 'a', 'b', 'cdef'];
          const expected = [undefined, null, ''];
          expect(input.filter(isEmpty)).toEqual(expected);
        });
        it(should` work as a filter for arrays`, () => {
          const input = [undefined, null, [], ['a'], ['b'], ['c', 'd', 'e', 'f']];
          const expected = [undefined, null, []];
          expect(input.filter(isEmpty)).toEqual(expected);
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
        it(should` exist as ${name}`, () => {
          expect(isNotEmpty).toBeDefined();
        });

        it(should` work as a filter for strings`, () => {
          const input = [undefined, null, '', 'a', 'b', 'cdef'];
          const expected = ['a', 'b', 'cdef'];
          expect(input.filter(isNotEmpty)).toEqual(expected);
        });
        it(should` work as a filter for arrays`, () => {
          const input = [undefined, null, [], ['a'], ['b'], ['c', 'd', 'e', 'f']];
          const expected = [['a'], ['b'], ['c', 'd', 'e', 'f']];
          expect(input.filter(isNotEmpty)).toEqual(expected);
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
        it(should` exist as ${name}`, () => {
          expect(isEqual).toBeDefined();
        });

        it(should` filter for 5`, () => {
          const input = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7];
          const expected = [5, 5];
          expect(input.filter(isEqual(5))).toEqual(expected);
        });

        it(should` filter for 'c'`, () => {
          const input = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e'];
          const expected = ['c', 'c'];
          expect(input.filter(isEqual('c'))).toEqual(expected);
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
        it(should` exist as ${name}`, () => {
          expect(isNotEqual).toBeDefined();
        });

        it(should` filter out 5`, () => {
          const input = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7];
          const expected = [1, 2, 3, 4, 6, 7, 1, 2, 3, 4, 6, 7];
          expect(input.filter(isNotEqual(5))).toEqual(expected);
        });

        it(should` filter out 'c'`, () => {
          const input = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e'];
          const expected = ['a', 'b', 'd', 'e', 'a', 'b', 'd', 'e'];
          expect(input.filter(isNotEqual('c'))).toEqual(expected);
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
        it(should` exist as ${name}`, () => {
          expect(dedupe).toBeDefined();
        });

        it(should` dedupe an array of numbers`, () => {
          const input = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3];
          const expected = [1, 2, 3, 4, 5, 6, 7];
          expect(input.filter(dedupe)).toEqual(expected);
        });

        it(should` dedupe an array of strings`, () => {
          const input = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c'];
          const expected = ['a', 'b', 'c', 'd', 'e'];
          expect(input.filter(dedupe)).toEqual(expected);
        });

        it(should` dedupe an array of arrays (not actually)`, () => {
          // 2 different arrays are never equal, even if they have the same values
          const input = [['a'], ['b'], ['c'], ['d'], ['e'], ['a'], ['b'], ['c']];
          const expected = [['a'], ['b'], ['c'], ['d'], ['e'], ['a'], ['b'], ['c']];
          expect(input.filter(dedupe)).toEqual(expected);
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
        it(should` exist as ${name}`, () => {
          expect(dedupeMapped).toBeDefined();
        });

        it(should` dedupe an array of numbers`, () => {
          const input = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3];
          const expected = [1, 2, 3, 4, 5, 6, 7];
          expect(input.filter(dedupeMapped((v) => v))).toEqual(expected);
        });
        it(should` dedupe an array of numbers (mapped)`, () => {
          const input = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3];
          const expected = [1, 2, 3];
          expect(input.filter(dedupeMapped((v) => v % 3))).toEqual(expected);
        });
        it(should` dedupe an array of strings`, () => {
          const input = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c'];
          const expected = ['a', 'b', 'c', 'd', 'e'];
          expect(input.filter(dedupeMapped((v) => v))).toEqual(expected);
        });
        it(should` dedupe an array of strings (mapped)`, () => {
          const input = ['a', 'b', 'c', 'd', 'e', 'A', 'B', 'C'];
          const expected = ['a', 'b', 'c', 'd', 'e'];
          expect(input.filter(dedupeMapped((v) => v.toLowerCase()))).toEqual(expected);
        });
        it(should` dedupe an array of arrays (not actually)`, () => {
          // 2 different arrays are never equal, even if they have the same values
          const input = [['a'], ['b'], ['c'], ['d'], ['e'], ['a'], ['b'], ['c']];
          const expected = [['a'], ['b'], ['c'], ['d'], ['e'], ['a'], ['b'], ['c']];
          expect(input.filter(dedupeMapped((v) => v))).toEqual(expected);
        });
        it(should` dedupe an array of arrays (when mapped)`, () => {
          // 2 different arrays are never equal, even if they have the same values
          const input = [['a'], ['b'], ['c'], ['d'], ['e'], ['a'], ['b'], ['c']];
          const expected = [['a'], ['b'], ['c'], ['d'], ['e']];
          expect(input.filter(dedupeMapped((v) => v[0]))).toEqual(expected);
        });

        kitchenSink.toEqual(
          'item',
          (v) => dedupeMapped(v as any)(undefined, 0, []),
          kitchenSink.safe.func(undefined, (v) => v),
          kitchenSink.samples.general
        );
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
        it(should` exist as ${name}`, () => {
          expect(toString).toBeDefined();
        });

        const input = [undefined, null, 1, 123, -1, NaN, 'foo', ['foo', 'bar'], { value: 'baz' }];
        const expected = ['undefined', 'null', '1', '123', '-1', 'NaN', 'foo', 'foo,bar', '[object Object]'];

        it(should` map an array to string`, () => {
          expect(input.map(toString)).toEqual(expected);
        });
        input.forEach((value, index) => {
          const exp = expected[index];
          it(should` convert ${value} to string`, () => {
            expect(toString(value)).toEqual(exp);
          });
          it(should` map ${value} to string`, () => {
            expect([value].map(toString)).toEqual([exp]);
          });
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
        it(should` exist as ${name}`, () => {
          expect(toNumber).toBeDefined();
        });

        const input = [undefined, null, 1, 123, -1, NaN, 'foo', ['foo', 'bar'], { value: 'baz' }, '123', 'NaN', '3e3'];
        const expected = [NaN, 0, 1, 123, -1, NaN, NaN, NaN, NaN, 123, NaN, 3000];

        it(should` map an array to numbers`, () => {
          expect(input.map(toNumber)).toEqual(expected);
        });
        input.forEach((value, index) => {
          const exp = expected[index];
          it(should` convert ${value} to number`, () => {
            expect(toNumber(value)).toEqual(exp);
          });
          it(should` map ${value} to number`, () => {
            expect([value].map(toNumber)).toEqual([exp]);
          });
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
        it(should` exist as ${name}`, () => {
          expect(toBool).toBeDefined();
        });

        const input = [undefined, null, 1, 123, -1, NaN, 'foo', ['foo', 'bar'], { value: 'baz' }, '123'];
        const expected = [false, false, true, true, true, false, true, true, true, true];

        it(should` map an array to booleans`, () => {
          expect(input.map(toBool)).toEqual(expected);
        });
        input.forEach((value, index) => {
          const exp = expected[index];
          it(should` convert ${value} to boolean`, () => {
            expect(toBool(value)).toEqual(exp);
          });
          it(should` map ${value} to boolean`, () => {
            expect([value].map(toBool)).toEqual([exp]);
          });
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
        it(should` exist as ${name}`, () => {
          expect(toProp).toBeDefined();
        });

        const input = [
          { item: undefined },
          { item: null },
          { item: NaN },
          { item: Infinity },
          { item: '123' },
          { item: 'a string' },
          { item: true },
          { item: false },
          { item: 123 },
          { item: 0 },
          { item: { foo: 'bar' } },
          { item: ['foo', 'bar'] }
        ];
        const expected = [undefined, null, NaN, Infinity, '123', 'a string', true, false, 123, 0, { foo: 'bar' }, ['foo', 'bar']];

        it(should` map an array to booleans`, () => {
          expect(input.map(toProp('item'))).toEqual(expected);
        });
        input.forEach((value, index) => {
          const exp = expected[index];
          it(should` convert ${value} to boolean`, () => {
            expect(toProp('item')(value)).toEqual(exp);
          });
          it(should` map ${value} to boolean`, () => {
            expect([value].map(toProp('item'))).toEqual([exp]);
          });
        });

        it(should` map an array of arrays`, () => {
          const input = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
          ];
          const expected = [2, 5, 8];
          expect(input.map(toProp(1))).toEqual(expected);
        });

        kitchenSink.toEqual('prop', (v) => toProp(v as any)({ name: 'Foo' }), kitchenSink.safe.prop(undefined, ''), kitchenSink.samples.general);
        kitchenSink.toEqual('item', (v) => toProp('item')(v), kitchenSink.safe.obj(undefined, true), kitchenSink.samples.general);
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
        it(should` exist as ${name}`, () => {
          expect(toFixed).toBeDefined();
        });

        const input = [undefined, null, 3, 3.1, 3.14, 3.141, 3.1415, 3.14159, 3.141592, 3.1415926];
        const expected = [0, 0, 3, 3.1, 3.14, 3.141, 3.142, 3.142, 3.142, 3.142];

        it(should` map an array to 3 decimal places`, () => {
          expect(input.map(toFixed(3))).toEqual(expected);
        });
        input.forEach((value, index) => {
          const exp = expected[index];
          it(should` convert ${value} to 3 decimal places`, () => {
            expect(toFixed(3)(value)).toEqual(exp);
          });
          it(should` map ${value} to 3 decimal places`, () => {
            expect([value].map(toFixed(3))).toEqual([exp]);
          });
        });

        kitchenSink.toEqual('precision', (v) => toFixed(v)(3.14159), kitchenSink.safe.num(undefined, true, 0), kitchenSink.samples.general);
        kitchenSink.toEqual('item', (v) => toFixed(3)(v as any), kitchenSink.safe.num(undefined, true), kitchenSink.samples.general);
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
        it(should` exist as ${name}`, () => {
          expect(asc).toBeDefined();
        });

        it(should` sort an array of numbers`, () => {
          const input = [5, 3, 7, 9, 6, 2, 4, 1, 8];
          const expct = [1, 2, 3, 4, 5, 6, 7, 8, 9];
          expect([...input].sort(asc)).toEqual(expct);
        });

        it(should` sort an array of strings`, () => {
          const input = ['e', 'i', 'd', 'b', 'h', 'g', 'f', 'a', 'c'];
          const expct = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
          expect([...input].sort(asc)).toEqual(expct);
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
        it(should` exist as ${name}`, () => {
          expect(desc).toBeDefined();
        });

        it(should` sort an array of numbers`, () => {
          const input = [5, 3, 7, 9, 6, 2, 4, 1, 8];
          const expct = [9, 8, 7, 6, 5, 4, 3, 2, 1];
          expect([...input].sort(desc)).toEqual(expct);
        });

        it(should` sort an array of strings`, () => {
          const input = ['e', 'i', 'd', 'b', 'h', 'g', 'f', 'a', 'c'];
          const expct = ['i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
          expect([...input].sort(desc)).toEqual(expct);
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
        it(should` exist as ${name}`, () => {
          expect(byProp).toBeDefined();
        });

        it(should` sort an array of objects by number property (default asc)`, () => {
          const input = [{ num: 5 }, { num: 3 }, { num: 6 }, { num: 2 }, { num: 4 }, { num: 1 }];
          const expct = [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 5 }, { num: 6 }];
          expect([...input].sort(byProp('num'))).toEqual(expct);
        });
        it(should` sort an array of objects by number property (asc)`, () => {
          const input = [{ num: 5 }, { num: 3 }, { num: 6 }, { num: 2 }, { num: 4 }, { num: 1 }];
          const expct = [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 5 }, { num: 6 }];
          expect([...input].sort(byProp('num', swissak.fn.asc))).toEqual(expct);
        });
        it(should` sort an array of objects by number property (desc)`, () => {
          const input = [{ num: 5 }, { num: 3 }, { num: 6 }, { num: 2 }, { num: 4 }, { num: 1 }];
          const expct = [{ num: 6 }, { num: 5 }, { num: 4 }, { num: 3 }, { num: 2 }, { num: 1 }];
          expect([...input].sort(byProp('num', swissak.fn.desc))).toEqual(expct);
        });

        it(should` sort an array of arrays by string value (default asc)`, () => {
          const input = [['b'], ['e'], ['a'], ['d'], ['c']];
          const expct = [['a'], ['b'], ['c'], ['d'], ['e']];
          expect([...input].sort(byProp(0))).toEqual(expct);
        });
        it(should` sort an array of arrays by string value (asc)`, () => {
          const input = [['b'], ['e'], ['a'], ['d'], ['c']];
          const expct = [['a'], ['b'], ['c'], ['d'], ['e']];
          expect([...input].sort(byProp(0, swissak.fn.asc))).toEqual(expct);
        });
        it(should` sort an array of arrays by string value (desc)`, () => {
          const input = [['b'], ['e'], ['a'], ['d'], ['c']];
          const expct = [['e'], ['d'], ['c'], ['b'], ['a']];
          expect([...input].sort(byProp(0, swissak.fn.desc))).toEqual(expct);
        });

        const input = [{ num: 5 }, { num: 3 }, { num: 6 }, { num: 2 }, { num: 4 }, { num: 1 }];
        kitchenSink.toEqual(
          'propName',
          (v) => byProp(v as any)(input[0], input[1]),
          kitchenSink.safe.prop(undefined, ''),
          kitchenSink.samples.general
        );
        kitchenSink.toEqual(
          'sortFn',
          (v) => byProp('num', v as any)(input[0], input[1]),
          kitchenSink.safe.func(swissak.fn.asc, swissak.fn.asc),
          kitchenSink.samples.general
        );
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
        it(should` exist as ${name}`, () => {
          expect(nearestTo).toBeDefined();
        });

        it(should` sort an array of numbers by nearest to 5`, () => {
          const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
          const expct = [5, 4, 6, 3, 7, 2, 8, 1, 9];
          expect([...input].sort(nearestTo(5))).toEqual(expct);
        });
        it(should` sort an array of numbers by nearest to '5'`, () => {
          const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
          const expct = [5, 4, 6, 3, 7, 2, 8, 1, 9];
          expect([...input].sort(nearestTo('5'))).toEqual(expct);
        });
        it(should` sort an array of numbered strings by nearest to 5`, () => {
          const input = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
          const expct = ['5', '4', '6', '3', '7', '2', '8', '1', '9'];
          expect([...input].sort(nearestTo(5))).toEqual(expct);
        });
        it(should` sort an array of numbered strings by nearest to '5'`, () => {
          const input = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
          const expct = ['5', '4', '6', '3', '7', '2', '8', '1', '9'];
          expect([...input].sort(nearestTo('5'))).toEqual(expct);
        });

        it(should` sort an array of mixed strings by nearest to 3`, () => {
          const input = ['4', '1', 'bar', '5', '2', 'foo', '3'];
          const expct = ['3', '4', '2', '1', '5', 'bar', 'foo'];
          expect([...input].sort(nearestTo(3))).toEqual(expct);
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
        it(should` exist as ${name}`, () => {
          expect(furthestFrom).toBeDefined();
        });

        it(should` sort an array of numbers by furthest from 5`, () => {
          const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
          const expct = [1, 9, 2, 8, 3, 7, 4, 6, 5];
          expect([...input].sort(furthestFrom(5))).toEqual(expct);
        });
        it(should` sort an array of numbers by furthest from '5'`, () => {
          const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
          const expct = [1, 9, 2, 8, 3, 7, 4, 6, 5];
          expect([...input].sort(furthestFrom('5'))).toEqual(expct);
        });
        it(should` sort an array of numbered strings by furthest from 5`, () => {
          const input = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
          const expct = ['1', '9', '2', '8', '3', '7', '4', '6', '5'];
          expect([...input].sort(furthestFrom(5))).toEqual(expct);
        });
        it(should` sort an array of numbered strings by furthest from '5'`, () => {
          const input = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
          const expct = ['1', '9', '2', '8', '3', '7', '4', '6', '5'];
          expect([...input].sort(furthestFrom('5'))).toEqual(expct);
        });

        it(should` sort an array of mixed strings by furthest from 3`, () => {
          const input = ['4', '1', 'bar', '5', '2', 'foo', '3'];
          const expct = ['bar', 'foo', '1', '5', '4', '2', '3'];
          expect([...input].sort(furthestFrom(3))).toEqual(expct);
        });
      }
    );
  });
  describe('array', () => {
    multiTest(
      [
        [swissak.fn.array, 'fn.array'],
        [swissak.fn.sorts.array, 'fn.sorts.array'],
        [swissak.sorts.array, 'sorts.array']
      ],
      (array, name) => {
        it(should` exist as ${name}`, () => {
          expect(array).toBeDefined();
        });

        describe('asc', () => {
          it(should` sort an array of array of numbers (by 1st index)`, () => {
            const input = [[5], [3], [7], [9], [6], [2], [4], [1], [8]];
            const expct = [[1], [2], [3], [4], [5], [6], [7], [8], [9]];
            expect([...input].sort(array(swissak.fn.asc))).toEqual(expct);
          });
          it(should` sort an array of array of numbers (by 2nd index)`, () => {
            const input = [
              [1, 5],
              [1, 3],
              [1, 6],
              [1, 2],
              [1, 4],
              [1, 1]
            ];
            const expct = [
              [1, 1],
              [1, 2],
              [1, 3],
              [1, 4],
              [1, 5],
              [1, 6]
            ];
            expect([...input].sort(array(swissak.fn.asc))).toEqual(expct);
          });
          it(should` sort an array of array of numbers (by 3rd index)`, () => {
            const input = [
              [1, 2, 5],
              [1, 2, 3],
              [1, 2, 6],
              [1, 2, 2],
              [1, 2, 4],
              [1, 2, 1]
            ];
            const expct = [
              [1, 2, 1],
              [1, 2, 2],
              [1, 2, 3],
              [1, 2, 4],
              [1, 2, 5],
              [1, 2, 6]
            ];
            expect([...input].sort(array(swissak.fn.asc))).toEqual(expct);
          });

          it(should` sort an array of array of strings (by 1st index)`, () => {
            const input = [['e'], ['d'], ['b'], ['g'], ['f'], ['a'], ['c']];
            const expct = [['a'], ['b'], ['c'], ['d'], ['e'], ['f'], ['g']];
            expect([...input].sort(array(swissak.fn.asc))).toEqual(expct);
          });
          it(should` sort an array of array of strings (by 2nd index)`, () => {
            const input = [
              ['1', 'e'],
              ['1', 'd'],
              ['1', 'b'],
              ['1', 'a'],
              ['1', 'c']
            ];
            const expct = [
              ['1', 'a'],
              ['1', 'b'],
              ['1', 'c'],
              ['1', 'd'],
              ['1', 'e']
            ];
            expect([...input].sort(array(swissak.fn.asc))).toEqual(expct);
          });
          it(should` sort an array of array of strings (by 3rd index)`, () => {
            const input = [
              ['1', '2', 'e'],
              ['1', '2', 'd'],
              ['1', '2', 'b'],
              ['1', '2', 'a'],
              ['1', '2', 'c']
            ];
            const expct = [
              ['1', '2', 'a'],
              ['1', '2', 'b'],
              ['1', '2', 'c'],
              ['1', '2', 'd'],
              ['1', '2', 'e']
            ];
            expect([...input].sort(array(swissak.fn.asc))).toEqual(expct);
          });

          it(should` sort an array of array of mixed values`, () => {
            const input = [
              ['file', 2022, 11, 23],
              ['file', 2023, 1, 18],
              ['lorem', 'ipsum', 2021, 6, 20],
              ['lorem', 'ipsum', 2022, 5, 2],
              ['file', 2023, 1, 3],
              ['lorem', 'ipsum', 2021, 4, 21],
              ['file', 2023, 6, 21],
              ['lorem', 'ipsum', 2023, 1, 26],
              ['lorem', 'ipsum', 2021, 4, 5],
              ['file', 2023, 6, 7]
            ];
            const expct = [
              ['file', 2022, 11, 23],
              ['file', 2023, 1, 3],
              ['file', 2023, 1, 18],
              ['file', 2023, 6, 7],
              ['file', 2023, 6, 21],
              ['lorem', 'ipsum', 2021, 4, 5],
              ['lorem', 'ipsum', 2021, 4, 21],
              ['lorem', 'ipsum', 2021, 6, 20],
              ['lorem', 'ipsum', 2022, 5, 2],
              ['lorem', 'ipsum', 2023, 1, 26]
            ];
            expect([...input].sort(array(swissak.fn.asc))).toEqual(expct);
          });
        });

        describe('desc', () => {
          it(should` sort an array of array of numbers (by 1st index)`, () => {
            const input = [[5], [3], [7], [9], [6], [2], [4], [1], [8]];
            const expct = [[9], [8], [7], [6], [5], [4], [3], [2], [1]];
            expect([...input].sort(array(swissak.fn.desc))).toEqual(expct);
          });
          it(should` sort an array of array of numbers (by 2nd index)`, () => {
            const input = [
              [1, 5],
              [1, 3],
              [1, 6],
              [1, 2],
              [1, 4],
              [1, 1]
            ];
            const expct = [
              [1, 6],
              [1, 5],
              [1, 4],
              [1, 3],
              [1, 2],
              [1, 1]
            ];
            expect([...input].sort(array(swissak.fn.desc))).toEqual(expct);
          });
          it(should` sort an array of array of numbers (by 3rd index)`, () => {
            const input = [
              [1, 2, 5],
              [1, 2, 3],
              [1, 2, 6],
              [1, 2, 2],
              [1, 2, 4],
              [1, 2, 1]
            ];
            const expct = [
              [1, 2, 6],
              [1, 2, 5],
              [1, 2, 4],
              [1, 2, 3],
              [1, 2, 2],
              [1, 2, 1]
            ];
            expect([...input].sort(array(swissak.fn.desc))).toEqual(expct);
          });

          it(should` sort an array of array of strings (by 1st index)`, () => {
            const input = [['e'], ['d'], ['b'], ['g'], ['f'], ['a'], ['c']];
            const expct = [['g'], ['f'], ['e'], ['d'], ['c'], ['b'], ['a']];
            expect([...input].sort(array(swissak.fn.desc))).toEqual(expct);
          });
          it(should` sort an array of array of strings (by 2nd index)`, () => {
            const input = [
              ['1', 'e'],
              ['1', 'd'],
              ['1', 'b'],
              ['1', 'a'],
              ['1', 'c']
            ];
            const expct = [
              ['1', 'e'],
              ['1', 'd'],
              ['1', 'c'],
              ['1', 'b'],
              ['1', 'a']
            ];
            expect([...input].sort(array(swissak.fn.desc))).toEqual(expct);
          });
          it(should` sort an array of array of strings (by 3rd index)`, () => {
            const input = [
              ['1', '2', 'e'],
              ['1', '2', 'd'],
              ['1', '2', 'b'],
              ['1', '2', 'a'],
              ['1', '2', 'c']
            ];
            const expct = [
              ['1', '2', 'e'],
              ['1', '2', 'd'],
              ['1', '2', 'c'],
              ['1', '2', 'b'],
              ['1', '2', 'a']
            ];
            expect([...input].sort(array(swissak.fn.desc))).toEqual(expct);
          });

          it(should` sort an array of array of mixed values`, () => {
            const input = [
              ['file', 2022, 11, 23],
              ['file', 2023, 1, 18],
              ['lorem', 'ipsum', 2021, 6, 20],
              ['lorem', 'ipsum', 2022, 5, 2],
              ['file', 2023, 1, 3],
              ['lorem', 'ipsum', 2021, 4, 21],
              ['file', 2023, 6, 21],
              ['lorem', 'ipsum', 2023, 1, 26],
              ['lorem', 'ipsum', 2021, 4, 5],
              ['file', 2023, 6, 7]
            ];
            const expct = [
              ['lorem', 'ipsum', 2023, 1, 26],
              ['lorem', 'ipsum', 2022, 5, 2],
              ['lorem', 'ipsum', 2021, 6, 20],
              ['lorem', 'ipsum', 2021, 4, 21],
              ['lorem', 'ipsum', 2021, 4, 5],
              ['file', 2023, 6, 21],
              ['file', 2023, 6, 7],
              ['file', 2023, 1, 18],
              ['file', 2023, 1, 3],
              ['file', 2022, 11, 23]
            ];
            expect([...input].sort(array(swissak.fn.desc))).toEqual(expct);
          });
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
        it(should` exist as ${name}`, () => {
          expect(arrayAsc).toBeDefined();
        });

        it(should` sort an array of array of numbers (by 1st index)`, () => {
          const input = [[5], [3], [7], [9], [6], [2], [4], [1], [8]];
          const expct = [[1], [2], [3], [4], [5], [6], [7], [8], [9]];
          expect([...input].sort(arrayAsc)).toEqual(expct);
        });
        it(should` sort an array of array of numbers (by 2nd index)`, () => {
          const input = [
            [1, 5],
            [1, 3],
            [1, 6],
            [1, 2],
            [1, 4],
            [1, 1]
          ];
          const expct = [
            [1, 1],
            [1, 2],
            [1, 3],
            [1, 4],
            [1, 5],
            [1, 6]
          ];
          expect([...input].sort(arrayAsc)).toEqual(expct);
        });
        it(should` sort an array of array of numbers (by 3rd index)`, () => {
          const input = [
            [1, 2, 5],
            [1, 2, 3],
            [1, 2, 6],
            [1, 2, 2],
            [1, 2, 4],
            [1, 2, 1]
          ];
          const expct = [
            [1, 2, 1],
            [1, 2, 2],
            [1, 2, 3],
            [1, 2, 4],
            [1, 2, 5],
            [1, 2, 6]
          ];
          expect([...input].sort(arrayAsc)).toEqual(expct);
        });

        it(should` sort an array of array of strings (by 1st index)`, () => {
          const input = [['e'], ['d'], ['b'], ['g'], ['f'], ['a'], ['c']];
          const expct = [['a'], ['b'], ['c'], ['d'], ['e'], ['f'], ['g']];
          expect([...input].sort(arrayAsc)).toEqual(expct);
        });
        it(should` sort an array of array of strings (by 2nd index)`, () => {
          const input = [
            ['1', 'e'],
            ['1', 'd'],
            ['1', 'b'],
            ['1', 'a'],
            ['1', 'c']
          ];
          const expct = [
            ['1', 'a'],
            ['1', 'b'],
            ['1', 'c'],
            ['1', 'd'],
            ['1', 'e']
          ];
          expect([...input].sort(arrayAsc)).toEqual(expct);
        });
        it(should` sort an array of array of strings (by 3rd index)`, () => {
          const input = [
            ['1', '2', 'e'],
            ['1', '2', 'd'],
            ['1', '2', 'b'],
            ['1', '2', 'a'],
            ['1', '2', 'c']
          ];
          const expct = [
            ['1', '2', 'a'],
            ['1', '2', 'b'],
            ['1', '2', 'c'],
            ['1', '2', 'd'],
            ['1', '2', 'e']
          ];
          expect([...input].sort(arrayAsc)).toEqual(expct);
        });

        it(should` sort an array of array of mixed values`, () => {
          const input = [
            ['file', 2022, 11, 23],
            ['file', 2023, 1, 18],
            ['lorem', 'ipsum', 2021, 6, 20],
            ['lorem', 'ipsum', 2022, 5, 2],
            ['file', 2023, 1, 3],
            ['lorem', 'ipsum', 2021, 4, 21],
            ['file', 2023, 6, 21],
            ['lorem', 'ipsum', 2023, 1, 26],
            ['lorem', 'ipsum', 2021, 4, 5],
            ['file', 2023, 6, 7]
          ];
          const expct = [
            ['file', 2022, 11, 23],
            ['file', 2023, 1, 3],
            ['file', 2023, 1, 18],
            ['file', 2023, 6, 7],
            ['file', 2023, 6, 21],
            ['lorem', 'ipsum', 2021, 4, 5],
            ['lorem', 'ipsum', 2021, 4, 21],
            ['lorem', 'ipsum', 2021, 6, 20],
            ['lorem', 'ipsum', 2022, 5, 2],
            ['lorem', 'ipsum', 2023, 1, 26]
          ];
          expect([...input].sort(arrayAsc)).toEqual(expct);
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
        it(should` exist as ${name}`, () => {
          expect(arrayDesc).toBeDefined();
        });

        it(should` sort an array of array of numbers (by 1st index)`, () => {
          const input = [[5], [3], [7], [9], [6], [2], [4], [1], [8]];
          const expct = [[9], [8], [7], [6], [5], [4], [3], [2], [1]];
          expect([...input].sort(arrayDesc)).toEqual(expct);
        });
        it(should` sort an array of array of numbers (by 2nd index)`, () => {
          const input = [
            [1, 5],
            [1, 3],
            [1, 6],
            [1, 2],
            [1, 4],
            [1, 1]
          ];
          const expct = [
            [1, 6],
            [1, 5],
            [1, 4],
            [1, 3],
            [1, 2],
            [1, 1]
          ];
          expect([...input].sort(arrayDesc)).toEqual(expct);
        });
        it(should` sort an array of array of numbers (by 3rd index)`, () => {
          const input = [
            [1, 2, 5],
            [1, 2, 3],
            [1, 2, 6],
            [1, 2, 2],
            [1, 2, 4],
            [1, 2, 1]
          ];
          const expct = [
            [1, 2, 6],
            [1, 2, 5],
            [1, 2, 4],
            [1, 2, 3],
            [1, 2, 2],
            [1, 2, 1]
          ];
          expect([...input].sort(arrayDesc)).toEqual(expct);
        });

        it(should` sort an array of array of strings (by 1st index)`, () => {
          const input = [['e'], ['d'], ['b'], ['g'], ['f'], ['a'], ['c']];
          const expct = [['g'], ['f'], ['e'], ['d'], ['c'], ['b'], ['a']];
          expect([...input].sort(arrayDesc)).toEqual(expct);
        });
        it(should` sort an array of array of strings (by 2nd index)`, () => {
          const input = [
            ['1', 'e'],
            ['1', 'd'],
            ['1', 'b'],
            ['1', 'a'],
            ['1', 'c']
          ];
          const expct = [
            ['1', 'e'],
            ['1', 'd'],
            ['1', 'c'],
            ['1', 'b'],
            ['1', 'a']
          ];
          expect([...input].sort(arrayDesc)).toEqual(expct);
        });
        it(should` sort an array of array of strings (by 3rd index)`, () => {
          const input = [
            ['1', '2', 'e'],
            ['1', '2', 'd'],
            ['1', '2', 'b'],
            ['1', '2', 'a'],
            ['1', '2', 'c']
          ];
          const expct = [
            ['1', '2', 'e'],
            ['1', '2', 'd'],
            ['1', '2', 'c'],
            ['1', '2', 'b'],
            ['1', '2', 'a']
          ];
          expect([...input].sort(arrayDesc)).toEqual(expct);
        });

        it(should` sort an array of array of mixed values`, () => {
          const input = [
            ['file', 2022, 11, 23],
            ['file', 2023, 1, 18],
            ['lorem', 'ipsum', 2021, 6, 20],
            ['lorem', 'ipsum', 2022, 5, 2],
            ['file', 2023, 1, 3],
            ['lorem', 'ipsum', 2021, 4, 21],
            ['file', 2023, 6, 21],
            ['lorem', 'ipsum', 2023, 1, 26],
            ['lorem', 'ipsum', 2021, 4, 5],
            ['file', 2023, 6, 7]
          ];
          const expct = [
            ['lorem', 'ipsum', 2023, 1, 26],
            ['lorem', 'ipsum', 2022, 5, 2],
            ['lorem', 'ipsum', 2021, 6, 20],
            ['lorem', 'ipsum', 2021, 4, 21],
            ['lorem', 'ipsum', 2021, 4, 5],
            ['file', 2023, 6, 21],
            ['file', 2023, 6, 7],
            ['file', 2023, 1, 18],
            ['file', 2023, 1, 3],
            ['file', 2022, 11, 23]
          ];
          expect([...input].sort(arrayDesc)).toEqual(expct);
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
        it(should` exist as ${name}`, () => {
          expect(combine).toBeDefined();
        });

        it(should` add up an array of numbers`, () => {
          const input = [1, 2, 3, 4, 5];
          const expct = 15;
          expect([...input].reduce(combine)).toEqual(expct);
        });

        it(should` concat up an array of strings`, () => {
          const input = ['a', 'b', 'c', 'd', 'e'];
          const expct = 'abcde';
          expect([...input].reduce(combine)).toEqual(expct);
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
        it(should` exist as ${name}`, () => {
          expect(combineProp).toBeDefined();
        });

        const input = [
          { name: 'Adam', age: 20 },
          { name: 'Bob', age: 30 },
          { name: 'Charlie', age: 40 },
          { name: 'Dave', age: 50 }
        ];

        it(should` add up the ages an array of people objects`, () => {
          const expct = 140;
          expect([...input].reduce(combineProp('age'))).toEqual(expct);
        });

        it(should` concat the names from an array of people objects`, () => {
          const expct = 'AdamBobCharlieDave';
          expect([...input].reduce(combineProp('name'))).toEqual(expct);
        });

        kitchenSink.toEqual(
          'propName',
          (v) => combineProp(v as any)(input[0], input[1]),
          kitchenSink.safe.prop(undefined, ''),
          kitchenSink.samples.general
        );
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
        it(should` exist as ${name}`, () => {
          expect(mode).toBeDefined();
        });

        it(should` reduce to the mode (most common) of an array of numbers`, () => {
          const input = [1, 5, 2, 3, 4, 5, 6, 5, 7];
          const expct = 5;
          expect([...input].reduce(mode)).toEqual(expct);
        });
        it(should` reduce to the mode (most common) of an array of strings`, () => {
          const input = ['a', 'b', 'c', 'd', 'b', 'e', 'b', 'f', 'g'];
          const expct = 'b';
          expect([...input].reduce(mode)).toEqual(expct);
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
        it(should` exist as ${name}`, () => {
          expect(modeMapped).toBeDefined();
        });

        const input = [
          { name: 'Adam', age: 20 },
          { name: 'Bob', age: 50 },
          { name: 'Charlie', age: 40 },
          { name: 'Dave', age: 50 },
          { name: 'Charlie', age: 60 }
        ];

        it(should` reduce to the mode (most common) of ages from an array of numbers`, () => {
          const expct = { name: 'Bob', age: 50 };
          expect([...input].reduce(modeMapped(swissak.fn.toProp('age')))).toEqual(expct);
        });
        it(should` reduce to the mode (most common) of names from an array of strings`, () => {
          const expct = { name: 'Charlie', age: 40 };
          expect([...input].reduce(modeMapped(swissak.fn.toProp('name')))).toEqual(expct);
        });

        kitchenSink.toEqual(
          'mapFn',
          (v) => modeMapped(v as any)(input[0], input[1], 1, input),
          kitchenSink.safe.func(undefined, (v: any) => v),
          kitchenSink.samples.general
        );
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
        it(should` exist as ${name}`, () => {
          expect(isAllEqual).toBeDefined();
        });

        it(should` return true if all values are equal (numbers)`, () => {
          const input = [1, 1, 1, 1, 1];
          const expct = true;
          expect([...input].every(isAllEqual)).toEqual(expct);
        });

        it(should` return false if all values are not equal (numbers)`, () => {
          const input = [1, 1, 1, 1, 2];
          const expct = false;
          expect([...input].every(isAllEqual)).toEqual(expct);
        });

        it(should` return true if all values are equal (strings)`, () => {
          const input = ['a', 'a', 'a', 'a', 'a'];
          const expct = true;
          expect([...input].every(isAllEqual)).toEqual(expct);
        });

        it(should` return false if all values are not equal (strings)`, () => {
          const input = ['a', 'a', 'a', 'a', 'b'];
          const expct = false;
          expect([...input].every(isAllEqual)).toEqual(expct);
        });
      }
    );
  });
});
