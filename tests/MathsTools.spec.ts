import * as swissak from '../';
import { register, should, singleTest, multiTest, kitchenSink } from './test-utils';

register({ describe, it, expect });

describe('MathsTools', () => {
  describe('fixFloat', () => {
    multiTest(
      [
        [swissak.ff, 'ff'],
        [swissak.MathsTools.ff, 'MathsTools.ff'],
        [swissak.MathsTools.fixFloat, 'MathsTools.fixFloat']
      ],
      (ff, name) => {
        it(should` exist as ${name}`, () => {
          expect(ff).toBeDefined();
        });

        it(should` return a number`, () => {
          expect(ff(1)).toBe(1);
        });
        it(should` round a number to 2 decimal places`, () => {
          expect(ff(1.2345, 2)).toBe(1.23);
        });
        it(should` round a number to 3 decimal places`, () => {
          expect(ff(1.2345, 3)).toBe(1.235);
        });

        it(should` fix floating point error 0.1 + 0.2`, () => {
          const err = 0.1 + 0.2;
          expect(err).toBe(0.30000000000000004);
          expect(ff(err)).toBe(0.3);
        });

        kitchenSink.toEqual('num', (v) => ff(v), kitchenSink.safe.num(undefined, false), kitchenSink.samples.num);
        kitchenSink.toEqual('precision', (v) => ff(0.123, v), kitchenSink.safe.num(6, true, 0), kitchenSink.samples.num);
      }
    );
  });
  describe('addAll', () => {
    singleTest(swissak.MathsTools.addAll, 'MathsTools.addAll', (addAll, name) => {
      it(should` exist as ${name}`, () => {
        expect(addAll).toBeDefined();
      });

      it(should` return a number`, () => {
        expect(addAll(1)).toBe(1);
      });
      it(should` add all numbers together`, () => {
        expect(addAll(1, 2, 3, 4, 5)).toBe(15);
      });

      kitchenSink.toEqual('num', (v) => addAll(v as any), kitchenSink.safe.num(undefined, false, undefined, undefined, 0), kitchenSink.samples.num);
    });
  });
  describe('floorTo', () => {
    multiTest(
      [
        [swissak.MathsTools.floorTo, 'MathsTools.floorTo'],
        [swissak.MathsTools.round.floorTo, 'MathsTools.round.floorTo']
      ],
      (floorTo, name) => {
        it(should` exist as ${name}`, () => {
          expect(floorTo).toBeDefined();
        });

        it(should` return a number`, () => {
          expect(floorTo(1, 2)).toBe(2);
        });
        it(should` floor a number to the nearest multiple of 10`, () => {
          expect(floorTo(10, 102)).toBe(100);
        });
        it(should` floor a number to the nearest multiple of 5`, () => {
          expect(floorTo(5, 53)).toBe(50);
        });
        it(should` floor a number to the nearest multiple of 0.1`, () => {
          expect(floorTo(0.1, 0.25)).toBe(0.2);
        });
        it(should` floor a number to the nearest multiple of 0.01`, () => {
          expect(floorTo(0.01, 0.025)).toBe(0.02);
        });
        it(should` floor numbers in the middle of the range correctly`, () => {
          expect(floorTo(10, 100)).toBe(100);
          expect(floorTo(10, 101)).toBe(100);
          expect(floorTo(10, 102)).toBe(100);
          expect(floorTo(10, 103)).toBe(100);
          expect(floorTo(10, 104)).toBe(100);
          expect(floorTo(10, 105)).toBe(100);
          expect(floorTo(10, 106)).toBe(100);
          expect(floorTo(10, 107)).toBe(100);
          expect(floorTo(10, 108)).toBe(100);
          expect(floorTo(10, 109)).toBe(100);
          // split
          expect(floorTo(10, 110)).toBe(110);
        });

        kitchenSink.toEqual('to', (v) => floorTo(v, 1), kitchenSink.safe.num(undefined), kitchenSink.samples.num);
        kitchenSink.toEqual('value', (v) => floorTo(1, v), kitchenSink.safe.num(undefined), kitchenSink.samples.num);
      }
    );
  });
  describe('roundTo', () => {
    multiTest(
      [
        [swissak.MathsTools.round.to, 'MathsTools.round.to'],
        [swissak.MathsTools.roundTo, 'MathsTools.roundTo'],
        [swissak.MathsTools.round.roundTo, 'MathsTools.round.roundTo']
      ],
      (roundTo, name) => {
        it(should` exist as ${name}`, () => {
          expect(roundTo).toBeDefined();
        });

        it(should` return a number`, () => {
          expect(roundTo(1, 2)).toBe(2);
        });
        it(should` round a number to the nearest multiple of 10`, () => {
          expect(roundTo(10, 102)).toBe(100);
        });
        it(should` round a number to the nearest multiple of 5`, () => {
          expect(roundTo(5, 53)).toBe(55);
        });
        it(should` round a number to the nearest multiple of 0.1`, () => {
          expect(roundTo(0.1, 0.25)).toBe(0.3);
        });
        it(should` round a number to the nearest multiple of 0.01`, () => {
          expect(roundTo(0.01, 0.025)).toBe(0.03);
        });
        it(should` round numbers in the middle of the range correctly`, () => {
          expect(roundTo(10, 100)).toBe(100);
          expect(roundTo(10, 101)).toBe(100);
          expect(roundTo(10, 102)).toBe(100);
          expect(roundTo(10, 103)).toBe(100);
          expect(roundTo(10, 104)).toBe(100);
          // split
          expect(roundTo(10, 105)).toBe(110);
          expect(roundTo(10, 106)).toBe(110);
          expect(roundTo(10, 107)).toBe(110);
          expect(roundTo(10, 108)).toBe(110);
          expect(roundTo(10, 109)).toBe(110);
          expect(roundTo(10, 110)).toBe(110);
        });

        kitchenSink.toEqual('to', (v) => roundTo(v, 1), kitchenSink.safe.num(undefined), kitchenSink.samples.num);
        kitchenSink.toEqual('value', (v) => roundTo(1, v), kitchenSink.safe.num(undefined), kitchenSink.samples.num);
      }
    );
  });
  describe('ceilTo', () => {
    multiTest(
      [
        [swissak.MathsTools.ceilTo, 'MathsTools.ceilTo'],
        [swissak.MathsTools.round.ceilTo, 'MathsTools.round.ceilTo']
      ],
      (ceilTo, name) => {
        it(should` exist as ${name}`, () => {
          expect(ceilTo).toBeDefined();
        });

        it(should` return a number`, () => {
          expect(ceilTo(1, 2)).toBe(2);
        });
        it(should` ceil a number to the nearest multiple of 10`, () => {
          expect(ceilTo(10, 102)).toBe(110);
        });
        it(should` ceil a number to the nearest multiple of 5`, () => {
          expect(ceilTo(5, 53)).toBe(55);
        });
        it(should` ceil a number to the nearest multiple of 0.1`, () => {
          expect(ceilTo(0.1, 0.25)).toBe(0.3);
        });
        it(should` ceil a number to the nearest multiple of 0.01`, () => {
          expect(ceilTo(0.01, 0.025)).toBe(0.03);
        });
        it(should` ceil numbers in the middle of the range correctly`, () => {
          expect(ceilTo(10, 100)).toBe(100);
          // split
          expect(ceilTo(10, 101)).toBe(110);
          expect(ceilTo(10, 102)).toBe(110);
          expect(ceilTo(10, 103)).toBe(110);
          expect(ceilTo(10, 104)).toBe(110);
          expect(ceilTo(10, 105)).toBe(110);
          expect(ceilTo(10, 106)).toBe(110);
          expect(ceilTo(10, 107)).toBe(110);
          expect(ceilTo(10, 108)).toBe(110);
          expect(ceilTo(10, 109)).toBe(110);
          expect(ceilTo(10, 110)).toBe(110);
        });

        kitchenSink.toEqual('to', (v) => ceilTo(v, 1), kitchenSink.safe.num(undefined), kitchenSink.samples.num);
        kitchenSink.toEqual('value', (v) => ceilTo(1, v), kitchenSink.safe.num(undefined), kitchenSink.samples.num);
      }
    );
  });
  describe('lerp', () => {
    singleTest(swissak.MathsTools.lerp, 'MathsTools.lerp', (lerp, name) => {
      it(should` exist as ${name}`, () => {
        expect(lerp).toBeDefined();
      });

      it(should` return a number`, () => {
        expect(lerp(0.5, 0, 10)).toBe(5);
      });
      it(should` lerp a number`, () => {
        expect(lerp(0.5, 0, 10)).toBe(5);
      });
      it(should` lerp decimals`, () => {
        expect(lerp(0.5, 0, 10.5)).toBe(5.25);
        expect(lerp(0.5, 0.0001, 0.0002)).toBe(0.00015);
      });
      it(should` lerp a number with a negative start`, () => {
        expect(lerp(0.25, -30, 10)).toBe(-20);
      });
      it(should` lerp a number with a negative end`, () => {
        expect(lerp(0.25, 30, -10)).toBe(20);
      });
      it(should` lerp a series of numbers 0-100 correctly`, () => {
        expect(lerp(0, 0, 100)).toBe(0);
        expect(lerp(0.1, 0, 100)).toBe(10);
        expect(lerp(0.2, 0, 100)).toBe(20);
        expect(lerp(0.3, 0, 100)).toBe(30);
        expect(lerp(0.4, 0, 100)).toBe(40);
        expect(lerp(0.5, 0, 100)).toBe(50);
        expect(lerp(0.6, 0, 100)).toBe(60);
        expect(lerp(0.7, 0, 100)).toBe(70);
        expect(lerp(0.8, 0, 100)).toBe(80);
        expect(lerp(0.9, 0, 100)).toBe(90);
        expect(lerp(1, 0, 100)).toBe(100);
      });

      kitchenSink.toEqual('progress', (v) => lerp(v, 0, 100), kitchenSink.safe.num(undefined), kitchenSink.samples.num);
      kitchenSink.toEqual('fromVal', (v) => lerp(0.5, v, 100), kitchenSink.safe.num(undefined), kitchenSink.samples.num);
      kitchenSink.toEqual('toVal', (v) => lerp(0.5, 0, v), kitchenSink.safe.num(undefined), kitchenSink.samples.num);
    });
  });
  describe('lerpArray', () => {
    singleTest(swissak.MathsTools.lerpArray, 'MathsTools.lerpArray', (lerpArray, name) => {
      it(should` exist as ${name}`, () => {
        expect(lerpArray).toBeDefined();
      });

      it(should` return an array`, () => {
        const inputA = [0, 100];
        const inputB = [100, 200];
        const expctd = [50, 150];
        expect(lerpArray(0.5, inputA, inputB)).toEqual(expctd);
      });
      it(should` lerp an array`, () => {
        const inputA = [0, 0, 0, 0, 0];
        const inputB = [1, 10, 100, 1000, 10000];
        const expctd = [0.5, 5, 50, 500, 5000];
        expect(lerpArray(0.5, inputA, inputB)).toEqual(expctd);
      });
      it(should` lerp decimals`, () => {
        expect(lerpArray(0.5, [0], [10.5])).toEqual([5.25]);
        expect(lerpArray(0.5, [0.0001], [0.0002])).toEqual([0.00015]);
      });
      it(should` lerp an array with a negative start`, () => {
        expect(lerpArray(0.5, [-20], [10])).toEqual([-5]);
      });
      it(should` lerp an array with a negative end`, () => {
        expect(lerpArray(0.5, [20], [-10])).toEqual([5]);
      });
      it(should` lerp a series of arrayed numbers 0-100 correctly`, () => {
        expect(lerpArray(0, [0], [100])).toEqual([0]);
        expect(lerpArray(0.1, [0], [100])).toEqual([10]);
        expect(lerpArray(0.2, [0], [100])).toEqual([20]);
        expect(lerpArray(0.3, [0], [100])).toEqual([30]);
        expect(lerpArray(0.4, [0], [100])).toEqual([40]);
        expect(lerpArray(0.5, [0], [100])).toEqual([50]);
        expect(lerpArray(0.6, [0], [100])).toEqual([60]);
        expect(lerpArray(0.7, [0], [100])).toEqual([70]);
        expect(lerpArray(0.8, [0], [100])).toEqual([80]);
        expect(lerpArray(0.9, [0], [100])).toEqual([90]);
        expect(lerpArray(1, [0], [100])).toEqual([100]);
      });

      kitchenSink.toEqual('progress', (v) => lerpArray(v, [0], [100]), kitchenSink.safe.num(undefined), kitchenSink.samples.num);
      kitchenSink.toEqual('fromArr', (v) => lerpArray(0.5, v, [100]), kitchenSink.safe.arrOf.num(undefined), kitchenSink.samples.num);
      kitchenSink.toEqual('toArr', (v) => lerpArray(0.5, [0], v), kitchenSink.safe.arrOf.num(undefined), kitchenSink.samples.num);
    });
  });
  describe('lerpObj', () => {
    singleTest(swissak.MathsTools.lerpObj, 'MathsTools.lerpObj', (lerpObj, name) => {
      it(should` exist as ${name}`, () => {
        expect(lerpObj).toBeDefined();
      });

      it(should` return an object`, () => {
        const inputA = { a: 0, b: 100 };
        const inputB = { a: 100, b: 200 };
        const expctd = { a: 50, b: 150 };
        expect(lerpObj(0.5, inputA, inputB)).toEqual(expctd);
      });
      it(should` lerp an object`, () => {
        const inputA = { a: 0, b: 0, c: 0, d: 0, e: 0 };
        const inputB = { a: 1, b: 10, c: 100, d: 1000, e: 10000 };
        const expctd = { a: 0.5, b: 5, c: 50, d: 500, e: 5000 };
        expect(lerpObj(0.5, inputA, inputB)).toEqual(expctd);
      });
      it(should` lerp decimals`, () => {
        expect(lerpObj(0.5, { n: 0 }, { n: 10.5 })).toEqual({ n: 5.25 });
        expect(lerpObj(0.5, { n: 0.0001 }, { n: 0.0002 })).toEqual({ n: 0.00015 });
      });
      it(should` lerp an object with a negative start`, () => {
        expect(lerpObj(0.5, { n: -20 }, { n: 10 })).toEqual({ n: -5 });
      });
      it(should` lerp an object with a negative end`, () => {
        expect(lerpObj(0.5, { n: 20 }, { n: -10 })).toEqual({ n: 5 });
      });
      it(should` lerp a series of objected numbers 0-100 correctly`, () => {
        expect(lerpObj(0, { n: 0 }, { n: 100 })).toEqual({ n: 0 });
        expect(lerpObj(0.1, { n: 0 }, { n: 100 })).toEqual({ n: 10 });
        expect(lerpObj(0.2, { n: 0 }, { n: 100 })).toEqual({ n: 20 });
        expect(lerpObj(0.3, { n: 0 }, { n: 100 })).toEqual({ n: 30 });
        expect(lerpObj(0.4, { n: 0 }, { n: 100 })).toEqual({ n: 40 });
        expect(lerpObj(0.5, { n: 0 }, { n: 100 })).toEqual({ n: 50 });
        expect(lerpObj(0.6, { n: 0 }, { n: 100 })).toEqual({ n: 60 });
        expect(lerpObj(0.7, { n: 0 }, { n: 100 })).toEqual({ n: 70 });
        expect(lerpObj(0.8, { n: 0 }, { n: 100 })).toEqual({ n: 80 });
        expect(lerpObj(0.9, { n: 0 }, { n: 100 })).toEqual({ n: 90 });
        expect(lerpObj(1, { n: 0 }, { n: 100 })).toEqual({ n: 100 });
      });

      kitchenSink.toEqual('progress', (v) => lerpObj(v, { n: 0 }, { n: 100 }), kitchenSink.safe.num(undefined), kitchenSink.samples.num);
      kitchenSink.toEqual('fromObj', (v) => lerpObj(0.5, v as any, { n: 100 }), kitchenSink.safe.obj(undefined), kitchenSink.samples.num);
      kitchenSink.toEqual('toObj', (v) => lerpObj(0.5, { n: 0 }, v as any), kitchenSink.safe.obj(undefined), kitchenSink.samples.num);
    });
  });
  describe('clamp', () => {
    singleTest(swissak.MathsTools.clamp, 'MathsTools.clamp', (clamp, name) => {
      it(should` exist as ${name}`, () => {
        expect(clamp).toBeDefined();
      });

      it(should` return a number`, () => {
        expect(clamp(1, 0, 10)).toBe(1);
      });
      it(should` clamp a number`, () => {
        expect(clamp(-1, 0, 10)).toBe(0);
        expect(clamp(11, 0, 10)).toBe(10);
      });
      it(should` clamp decimals`, () => {
        expect(clamp(0, 0.0001, 0.0002)).toBe(0.0001);
        expect(clamp(0.00015, 0.0001, 0.0002)).toBe(0.00015);
        expect(clamp(1, 0.0001, 0.0002)).toBe(0.0002);
      });
      it(should` clamp a number with a negative min`, () => {
        expect(clamp(-21, -20, 10)).toBe(-20);
        expect(clamp(0, -20, 10)).toBe(0);
        expect(clamp(11, -20, 10)).toBe(10);
      });
      it(should` clamp a number with a negative max`, () => {
        expect(clamp(21, 20, -10)).toBe(20);
        expect(clamp(0, 20, -10)).toBe(0);
        expect(clamp(-11, 20, -10)).toBe(-10);
      });
      it(should` clamp a series of numbers 0-100 correctly`, () => {
        expect(clamp(-1, 0, 100)).toBe(0);
        expect(clamp(0, 0, 100)).toBe(0);
        expect(clamp(1, 0, 100)).toBe(1);
        expect(clamp(50, 0, 100)).toBe(50);
        expect(clamp(99, 0, 100)).toBe(99);
        expect(clamp(100, 0, 100)).toBe(100);
        expect(clamp(101, 0, 100)).toBe(100);
      });

      kitchenSink.toEqual('value', (v) => clamp(v, 0, 100), kitchenSink.safe.num(undefined), kitchenSink.samples.num);
      kitchenSink.toEqual('min', (v) => clamp(50, v, 100), kitchenSink.safe.num(undefined), kitchenSink.samples.num);
      kitchenSink.toEqual('max', (v) => clamp(50, 0, v), kitchenSink.safe.num(undefined), kitchenSink.samples.num);
    });
  });
  describe('getOrdinal', () => {
    singleTest(swissak.MathsTools.getOrdinal, 'MathsTools.getOrdinal', (getOrdinal, name) => {
      it(should` exist as ${name}`, () => {
        expect(getOrdinal).toBeDefined();
      });

      it(should` return a string`, () => {
        expect(getOrdinal(1)).toBe('st');
      });

      const pairs: [number, string][] = [
        [0, 'th'],
        [1, 'st'],
        [2, 'nd'],
        [3, 'rd'],
        [4, 'th'],
        [5, 'th'],
        [6, 'th'],
        [7, 'th'],
        [8, 'th'],
        [9, 'th'],
        [10, 'th'],
        [11, 'th'],
        [12, 'th'],
        [13, 'th'],
        [14, 'th'],
        [15, 'th'],
        [16, 'th'],
        [17, 'th'],
        [18, 'th'],
        [19, 'th'],
        [20, 'th'],
        [21, 'st'],
        [22, 'nd'],
        [23, 'rd'],
        [24, 'th'],
        [25, 'th']
      ];

      pairs.forEach(([num, expctd]) => {
        it(should` get the correct ordinal for ${num} ${expctd}`, () => {
          expect(getOrdinal(num)).toBe(expctd);
        });
      });
      pairs.forEach(([num, expctd]) => {
        const decimals = [num + 0.1, num + 0.01, num + 0.001, num + 0.99];

        decimals.forEach((decimal) => {
          it(should` handle decimals for ${decimal} ${expctd}`, () => {
            expect(getOrdinal(decimal)).toBe('th');
          });
        });
      });

      kitchenSink.toEqual('num', (v) => getOrdinal(v), kitchenSink.safe.num(undefined), kitchenSink.samples.num);
    });
  });
});
