import * as swissak from '../';
import { register, should, singleTest, multiTest, kitchenSink } from './test-utils';

register({ describe, it, expect });

describe('ObjectTools', () => {
  describe('remodel', () => {
    singleTest(swissak.ObjectTools.remodel, 'ObjectTools.remodel', (remodel, name) => {
      it(should` exist as ${name}`, () => {
        expect(remodel).toBeDefined();
      });

      it(should` return an object with the same keys and values as the input object`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const output = remodel(input, (entries) => entries);
        expect(output).toEqual(expctd);
      });

      it(should` return an object with the keys capitalised`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6 };
        const output = remodel(input, (entries) => entries.map(([key, value]) => [key.toUpperCase(), value]));
        expect(output).toEqual(expctd);
      });
      it(should` return an object with the keys capitalised when the value is even`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { a: 1, B: 2, c: 3, D: 4, e: 5, F: 6 };
        const output = remodel(input, (entries) => entries.map(([key, value]) => [value % 2 === 0 ? key.toUpperCase() : key, value]));
        expect(output).toEqual(expctd);
      });

      it(should` return an object with the values multiplied by 100`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { a: 100, b: 200, c: 300, d: 400, e: 500, f: 600 };
        const output = remodel(input, (entries) => entries.map(([key, value]) => [key, value * 100]));
        expect(output).toEqual(expctd);
      });
      it(should` return an object with the values multiplied by 100 when the key is a vowel`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { a: 100, b: 2, c: 3, d: 4, e: 500, f: 6 };
        const output = remodel(input, (entries) => entries.map(([key, value]) => [key, 'aeiou'.includes(key.toLowerCase()) ? value * 100 : value]));
        expect(output).toEqual(expctd);
      });

      kitchenSink.toEqual('obj', (v) => remodel(v, (entries) => entries), kitchenSink.safe.obj(undefined), kitchenSink.samples.general);
      kitchenSink.toEqual(
        'func',
        (v) => remodel({ a: 1 }, v as any),
        kitchenSink.safe.func(undefined, (entries) => entries),
        kitchenSink.samples.general
      );
    });
  });
  describe('remodelEach', () => {
    singleTest(swissak.ObjectTools.remodelEach, 'ObjectTools.remodelEach', (remodelEach, name) => {
      it(should` exist as ${name}`, () => {
        expect(remodelEach).toBeDefined();
      });

      it(should` return an object with the same keys and values as the input object`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const output = remodelEach(input, ([key, value]) => [key, value]);
        expect(output).toEqual(expctd);
      });

      it(should` return an object with the keys capitalised`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6 };
        const output = remodelEach(input, ([key, value]) => [key.toUpperCase(), value]);
        expect(output).toEqual(expctd);
      });
      it(should` return an object with the keys capitalised when the value is even`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { a: 1, B: 2, c: 3, D: 4, e: 5, F: 6 };
        const output = remodelEach(input, ([key, value]) => [value % 2 === 0 ? key.toUpperCase() : key, value]);
        expect(output).toEqual(expctd);
      });

      it(should` return an object with the values multiplied by 100`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { a: 100, b: 200, c: 300, d: 400, e: 500, f: 600 };
        const output = remodelEach(input, ([key, value]) => [key, value * 100]);
        expect(output).toEqual(expctd);
      });
      it(should` return an object with the values multiplied by 100 when the key is a vowel`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { a: 100, b: 2, c: 3, d: 4, e: 500, f: 6 };
        const output = remodelEach(input, ([key, value]) => [key, 'aeiou'.includes(key.toLowerCase()) ? value * 100 : value]);
        expect(output).toEqual(expctd);
      });

      kitchenSink.toEqual('obj', (v) => remodelEach(v, (entries) => entries), kitchenSink.safe.obj(undefined), kitchenSink.samples.general);
      kitchenSink.toEqual(
        'func',
        (v) => remodelEach({ a: 1 }, v as any),
        kitchenSink.safe.func(undefined, (entries) => entries),
        kitchenSink.samples.general
      );
    });
  });
  describe('map', () => {
    singleTest(swissak.ObjectTools.map, 'ObjectTools.map', (map, name) => {
      it(should` exist as ${name}`, () => {
        expect(map).toBeDefined();
      });

      it(should` return an object with the same keys and values as the input object`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const output = map(input, (key, value: number) => [key, value]);
        expect(output).toEqual(expctd);
      });

      it(should` return an object with the keys capitalised`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6 };
        const output = map(input, (key, value: number) => [key.toUpperCase(), value]);
        expect(output).toEqual(expctd);
      });
      it(should` return an object with the keys capitalised when the value is even`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { a: 1, B: 2, c: 3, D: 4, e: 5, F: 6 };
        const output = map(input, (key, value: number) => [value % 2 === 0 ? key.toUpperCase() : key, value]);
        expect(output).toEqual(expctd);
      });

      it(should` return an object with the values multiplied by 100`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { a: 100, b: 200, c: 300, d: 400, e: 500, f: 600 };
        const output = map(input, (key, value: number) => [key, value * 100]);
        expect(output).toEqual(expctd);
      });
      it(should` return an object with the values multiplied by 100 when the key is a vowel`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { a: 100, b: 2, c: 3, d: 4, e: 500, f: 6 };
        const output = map(input, (key, value: number) => [key, 'aeiou'.includes(key.toLowerCase()) ? value * 100 : value]);
        expect(output).toEqual(expctd);
      });

      kitchenSink.toEqual('obj', (v) => map(v, (key, value) => [key, value]), kitchenSink.safe.obj(undefined), kitchenSink.samples.general);
      kitchenSink.toEqual(
        'func',
        (v) => map({ a: 1 }, v as any),
        kitchenSink.safe.func(undefined, (key, value) => [key, value]),
        kitchenSink.samples.general
      );
    });
  });
  describe('mapValues', () => {
    singleTest(swissak.ObjectTools.mapValues, 'ObjectTools.mapValues', (mapValues, name) => {
      it(should` exist as ${name}`, () => {
        expect(mapValues).toBeDefined();
      });

      it(should` return an object with the same keys and values as the input object`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const output = mapValues(input, (key, value: number) => value);
        expect(output).toEqual(expctd);
      });

      it(should` return an object with the values multiplied by 100`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { a: 100, b: 200, c: 300, d: 400, e: 500, f: 600 };
        const output = mapValues(input, (key, value: number) => value * 100);
        expect(output).toEqual(expctd);
      });
      it(should` return an object with the values multiplied by 100 when the key is a vowel`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { a: 100, b: 2, c: 3, d: 4, e: 500, f: 6 };
        const output = mapValues(input, (key, value: number) => ('aeiou'.includes(key.toLowerCase()) ? value * 100 : value));
        expect(output).toEqual(expctd);
      });

      kitchenSink.toEqual('obj', (v) => mapValues(v, (key, value) => value), kitchenSink.safe.obj(undefined), kitchenSink.samples.general);
      kitchenSink.toEqual(
        'func',
        (v) => mapValues({ a: 1 }, v as any),
        kitchenSink.safe.func(undefined, (key, value) => value),
        kitchenSink.samples.general
      );
    });
  });
  describe('mapKeys', () => {
    singleTest(swissak.ObjectTools.mapKeys, 'ObjectTools.mapKeys', (mapKeys, name) => {
      it(should` exist as ${name}`, () => {
        expect(mapKeys).toBeDefined();
      });

      it(should` return an object with the same keys and values as the input object`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const output = mapKeys(input, (key, value: number) => key);
        expect(output).toEqual(expctd);
      });

      it(should` return an object with the keys capitalised`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6 };
        const output = mapKeys(input, (key, value: number) => key.toUpperCase());
        expect(output).toEqual(expctd);
      });
      it(should` return an object with the keys capitalised when the value is even`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { a: 1, B: 2, c: 3, D: 4, e: 5, F: 6 };
        const output = mapKeys(input, (key, value: number) => (value % 2 === 0 ? key.toUpperCase() : key));
        expect(output).toEqual(expctd);
      });

      kitchenSink.toEqual('obj', (v) => mapKeys(v, (key, value) => key), kitchenSink.safe.obj(undefined), kitchenSink.samples.general);
      kitchenSink.toEqual(
        'func',
        (v) => mapKeys({ a: 1 }, v as any),
        kitchenSink.safe.func(undefined, (key, value) => key),
        kitchenSink.samples.general
      );
    });
  });
  describe('filter', () => {
    singleTest(swissak.ObjectTools.filter, 'ObjectTools.filter', (filter, name) => {
      it(should` exist as ${name}`, () => {
        expect(filter).toBeDefined();
      });

      it(should` return an object with the same keys and values as the input object`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const output = filter(input, () => true);
        expect(output).toEqual(expctd);
      });

      it(should` return an object with only the vowel properties`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { a: 1, e: 5 };
        const output = filter(input, (key) => 'aeiou'.includes(key.toLowerCase()));
        expect(output).toEqual(expctd);
      });

      it(should` return an object with only the even values`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { b: 2, d: 4, f: 6 };
        const output = filter(input, (key, value: number) => value % 2 === 0);
        expect(output).toEqual(expctd);
      });

      kitchenSink.toEqual('obj', (v) => filter(v, () => true), kitchenSink.safe.obj(undefined), kitchenSink.samples.general);
      kitchenSink.toEqual(
        'func',
        (v) => filter({ a: 1 }, v as any),
        kitchenSink.safe.func(undefined, (key, value) => true),
        kitchenSink.samples.general
      );
    });
  });
  describe('clean', () => {
    singleTest(swissak.ObjectTools.clean, 'ObjectTools.clean', (clean, name) => {
      it(should` exist as ${name}`, () => {
        expect(clean).toBeDefined();
      });

      it(should` return an object with the same keys and values as the input object`, () => {
        const input = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const expctd = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
        const output = clean(input);
        expect(output).toEqual(expctd);
      });

      it(should` return an object with only properties that have defined values`, () => {
        const input = { a: 1, b: undefined, c: 3, d: undefined, e: 5, f: undefined };
        const expctd = { a: 1, c: 3, e: 5 };
        const output = clean(input);
        expect(output).toEqual(expctd);
      });
      it(should` return handle lots of different types of value`, () => {
        const input = {
          a: 0,
          b: 1.5,
          c: NaN,
          d: undefined,
          e: null,
          f: Infinity,
          g: -Infinity,
          h: '123',
          i: 'a string',
          j: true,
          k: false,
          l: { foo: 'bar' },
          m: ['foo', 'bar']
        };
        const expctd = {
          a: 0,
          b: 1.5,
          c: NaN,
          e: null,
          f: Infinity,
          g: -Infinity,
          h: '123',
          i: 'a string',
          j: true,
          k: false,
          l: { foo: 'bar' },
          m: ['foo', 'bar']
        };
        const output = clean(input);
        expect(output).toEqual(expctd);
      });

      kitchenSink.toEqual('obj', (v) => clean(v), kitchenSink.safe.obj(undefined), kitchenSink.samples.general);
    });
  });
  describe('invert', () => {
    singleTest(swissak.ObjectTools.invert, 'ObjectTools.invert', (invert, name) => {
      it(should` exist as ${name}`, () => {
        expect(invert).toBeDefined();
      });

      it(should` return an object with the same keys and values as the input object`, () => {
        const input = { a: 'foo', b: 'bar' };
        const expctd = { foo: 'a', bar: 'b' };
        const output = invert(input);
        expect(output).toEqual(expctd);
      });

      it(should` invert a large object of strings`, () => {
        const input = {
          a: 'Lorem',
          b: 'ipsum',
          c: 'dolor',
          d: 'sit',
          e: 'amet',
          f: 'consectetur',
          g: 'adipiscing',
          h: 'elit',
          i: 'sed',
          j: 'do',
          k: 'eiusmod'
        };
        const expctd = {
          Lorem: 'a',
          ipsum: 'b',
          dolor: 'c',
          sit: 'd',
          amet: 'e',
          consectetur: 'f',
          adipiscing: 'g',
          elit: 'h',
          sed: 'i',
          do: 'j',
          eiusmod: 'k'
        };
        const output = invert(input);
        expect(output).toEqual(expctd);
      });
      it(should` invert a large object of numbers`, () => {
        const input = {
          a: 1,
          b: 2,
          c: 3,
          d: 4,
          e: 5,
          f: 6,
          g: 7,
          h: 8,
          i: 9,
          j: 10,
          k: 11
        };
        const expctd = {
          '1': 'a',
          '2': 'b',
          '3': 'c',
          '4': 'd',
          '5': 'e',
          '6': 'f',
          '7': 'g',
          '8': 'h',
          '9': 'i',
          '10': 'j',
          '11': 'k'
        };
        const output = invert(input);
        expect(output).toEqual(expctd);
      });

      kitchenSink.toEqual('obj', (v) => invert(v), kitchenSink.safe.obj(undefined), kitchenSink.samples.general);
    });
  });
});
