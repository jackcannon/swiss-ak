import * as swissak from '../';
import { register, should, singleTest, multiTest, kitchenSink } from './test-utils';

register({ describe, it, expect });

describe('onDemand', () => {
  describe('onDemand', () => {
    singleTest(swissak.onDemand, 'onDemand', (onDemand, name) => {
      it(should` exist as ${name}`, () => {
        expect(onDemand).toBeDefined();
      });

      it(should` return an object with getters`, () => {
        const result = onDemand({
          name: () => 'test'
        });
        expect(result).toHaveProperty('name');
      });

      it(should` evaluate getters only when accessed`, () => {
        let evaluated = false;

        const result = onDemand({
          test: () => {
            evaluated = true;
            return 'value';
          }
        });
        expect(evaluated).toBe(false);
        result.test;
        expect(evaluated).toBe(true);
      });

      it(should` cache getter results`, () => {
        let count = 0;
        const input = {
          test: () => {
            count++;
            return count;
          }
        };
        const result = onDemand(input);
        expect(result.test).toBe(1);
        expect(result.test).toBe(1);
        expect(count).toBe(1);
      });

      it(should` allow setting values`, () => {
        const input = {
          name: () => 'original'
        };
        const result = onDemand(input);
        expect(result.name).toBe('original');
        result.name = 'changed';
        expect(result.name).toBe('changed');
      });

      it(should` handle raw values`, () => {
        const input = {
          age: 30
        };
        const result = onDemand(input);
        expect(result.age).toBe(30);
      });

      it(should` handle nested objects`, () => {
        const input = {
          data: () => ({ nested: 'value' })
        };
        const result = onDemand(input);
        expect(result.data.nested).toBe('value');
      });

      it(should` handle functions as values`, () => {
        const input = {
          func: () => () => 'hello'
        };
        const result = onDemand(input);
        expect(result.func()).toBe('hello');
      });

      it(should` maintain reference equality for cached values`, () => {
        const input = {
          obj: () => ({ test: true })
        };
        const result = onDemand(input);
        const first = result.obj;
        const second = result.obj;
        expect(first).toBe(second);
      });

      it(should` handle multiple properties of different types`, () => {
        let counter = 0;
        const input = {
          string: () => 'hello',
          number: 42,
          object: () => ({ foo: 'bar' }),
          function: () => () => 'result',
          lazy: () => {
            counter++;
            return counter;
          }
        };

        const result = onDemand(input);

        expect(counter).toBe(0);
        expect(result.string).toBe('hello');
        expect(result.number).toBe(42);
        expect(result.object).toEqual({ foo: 'bar' });
        expect(result.function()).toBe('result');
        expect(result.lazy).toBe(1);
        expect(result.lazy).toBe(1); // Should be cached
        expect(counter).toBe(1);
      });

      it(should` handle basic types with both raw and function values`, () => {
        const input = {
          // strings
          rawString: 'hello',
          fnString: () => 'world',

          // numbers
          rawNumber: 42,
          fnNumber: () => 123,

          // booleans
          rawBool: true,
          fnBool: () => false,

          // null/undefined
          rawNull: null,
          fnNull: () => null,
          rawUndefined: undefined,
          fnUndefined: () => undefined
        };

        const result = onDemand(input);

        // strings
        expect(result.rawString).toBe('hello');
        expect(result.fnString).toBe('world');

        // numbers
        expect(result.rawNumber).toBe(42);
        expect(result.fnNumber).toBe(123);

        // booleans
        expect(result.rawBool).toBe(true);
        expect(result.fnBool).toBe(false);

        // null/undefined
        expect(result.rawNull).toBeNull();
        expect(result.fnNull).toBeNull();
        expect(result.rawUndefined).toBeUndefined();
        expect(result.fnUndefined).toBeUndefined();
      });

      it(should` work like the documentation example`, () => {
        const demanded = onDemand({
          name: () => 'foo',
          random: () => Math.floor(Math.random() * 1000),
          data: () => ({ lorem: 'ipsum' }),
          func: () => {
            const randomLetter1 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
            return () => {
              const randomLetter2 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
              return `${randomLetter1}-${randomLetter2}`;
            };
          },
          age: 30
        });

        // access a value
        expect(demanded.name).toBe('foo');

        // overwrite a value
        demanded.name = 'bar';
        expect(demanded.name).toBe('bar');

        // getters are cached
        const firstRandom = demanded.random;
        expect(demanded.random).toBe(firstRandom);
        expect(demanded.data).toBe(demanded.data);

        // getters can return functions
        const firstLetter = demanded.func().split('-')[0];
        const results = Array.from({ length: 4 }, () => demanded.func().split('-'));

        // All calls should have same first letter (cached function)
        results.forEach(([first]) => expect(first).toBe(firstLetter));

        // Second letters should be different (new function call results)
        const secondLetters = results.map(([_, second]) => second);
        const uniqueSecondLetters = secondLetters.filter(swissak.fn.dedupe);
        expect(uniqueSecondLetters.length).toBeGreaterThan(1);

        // Raw values work directly
        expect(demanded.age).toBe(30);
      });

      kitchenSink.toEqual(
        'input',
        (v) => {
          const input = v;
          const result = onDemand(input);
          return result;
        },
        kitchenSink.safe.obj(undefined, true, {}),
        kitchenSink.samples.general
      );
      kitchenSink.toEqual(
        'input[value]',
        (v) => {
          const input = { value: v };
          const result = onDemand(input);
          return result?.value;
        },
        (v) => v,
        kitchenSink.samples.general
      );
    });
  });
});
