import * as swissak from '../';
import { register, should, singleTest, multiTest, kitchenSink } from './test-utils';

register({ describe, it });

describe('safe', () => {
  describe('safe.num', () => {
    singleTest(swissak.safe.num, 'safe.num', (num, name) => {
      it(should` exist as ${name}`, () => {
        expect(num).toBeDefined();
      });

      it(should` take 10`, () => {
        const result = num(10 as any);
        expect(result).toEqual(10);
      });
      it(should` take 10000`, () => {
        const result = num(10000 as any);
        expect(result).toEqual(10000);
      });
      it(should` take -1`, () => {
        const result = num(-1 as any);
        expect(result).toEqual(-1);
      });
      it(should` take true`, () => {
        const result = num(true as any);
        expect(result).toEqual(0);
      });
      it(should` take '123'`, () => {
        const result = num('123' as any);
        expect(result).toEqual(0);
      });
      it(should` take NaN`, () => {
        const result = num(NaN as any);
        expect(result).toEqual(0);
      });
      it(should` take Infinity`, () => {
        const result = num(Infinity as any);
        expect(result).toEqual(0);
      });
      it(should` take null`, () => {
        const result = num(null as any);
        expect(result).toEqual(0);
      });
      it(should` take undefined`, () => {
        const result = num(undefined as any);
        expect(result).toEqual(0);
      });
      it(should` take 10 with other params`, () => {
        const result = num(10 as any, true, 0, 100, 99);
        expect(result).toEqual(10);
      });
      it(should` take 10000 with other params`, () => {
        const result = num(10000 as any, true, 0, 100, 99);
        expect(result).toEqual(100);
      });
      it(should` take -1 with other params`, () => {
        const result = num(-1 as any, true, 0, 100, 99);
        expect(result).toEqual(0);
      });
      it(should` take true with other params`, () => {
        const result = num(true as any, true, 0, 100, 99);
        expect(result).toEqual(99);
      });
      it(should` take '123' with other params`, () => {
        const result = num('123' as any, true, 0, 100, 99);
        expect(result).toEqual(99);
      });
      it(should` take NaN with other params`, () => {
        const result = num(NaN as any, true, 0, 100, 99);
        expect(result).toEqual(99);
      });
      it(should` take Infinity with other params`, () => {
        const result = num(Infinity as any, true, 0, 100, 99);
        expect(result).toEqual(100);
      });
      it(should` take null with other params`, () => {
        const result = num(null as any, true, 0, 100, 99);
        expect(result).toEqual(99);
      });
      it(should` take undefined with other params`, () => {
        const result = num(undefined as any, true, 0, 100, 99);
        expect(result).toEqual(99);
      });
    });
  });

  describe('safe.str', () => {
    singleTest(swissak.safe.str, 'safe.str', (str, name) => {
      it(should` exist as ${name}`, () => {
        expect(str).toBeDefined();
      });

      it(should` take 'foo'`, () => {
        const result = str('foo' as any);
        expect(result).toEqual('foo');
      });
      it(should` take ''`, () => {
        const result = str('' as any);
        expect(result).toEqual('');
      });
      it(should` take 123`, () => {
        const result = str(123 as any);
        expect(result).toEqual('');
      });
      it(should` take true`, () => {
        const result = str(true as any);
        expect(result).toEqual('');
      });
      it(should` take {foo: 'bar'}`, () => {
        const result = str({ foo: 'bar' } as any);
        expect(result).toEqual('');
      });
      it(should` take []`, () => {
        const result = str([] as any);
        expect(result).toEqual('');
      });
      it(should` take null`, () => {
        const result = str(null as any);
        expect(result).toEqual('');
      });
      it(should` take undefined`, () => {
        const result = str(undefined as any);
        expect(result).toEqual('');
      });
      it(should` take 'foo' with other params`, () => {
        const result = str('foo' as any, true, 'bar');
        expect(result).toEqual('foo');
      });
      it(should` take '' with other params`, () => {
        const result = str('' as any, true, 'bar');
        expect(result).toEqual('');
      });
      it(should` take 123 with other params`, () => {
        const result = str(123 as any, true, 'bar');
        expect(result).toEqual('123');
      });
      it(should` take true with other params`, () => {
        const result = str(true as any, true, 'bar');
        expect(result).toEqual('true');
      });
      it(should` take {foo: 'bar'} with other params`, () => {
        const result = str({ foo: 'bar' } as any, true, 'bar');
        expect(result).toEqual('bar');
      });
      it(should` take [] with other params`, () => {
        const result = str([] as any, true, 'bar');
        expect(result).toEqual('bar');
      });
      it(should` take null with other params`, () => {
        const result = str(null as any, true, 'bar');
        expect(result).toEqual('bar');
      });
      it(should` take undefined with other params`, () => {
        const result = str(undefined as any, true, 'bar');
        expect(result).toEqual('bar');
      });
    });
  });

  describe('safe.bool', () => {
    singleTest(swissak.safe.bool, 'safe.bool', (bool, name) => {
      it(should` exist as ${name}`, () => {
        expect(bool).toBeDefined();
      });

      it(should` take true`, () => {
        const result = bool(true as any);
        expect(result).toEqual(true);
      });
      it(should` take false`, () => {
        const result = bool(false as any);
        expect(result).toEqual(false);
      });
      it(should` take 1`, () => {
        const result = bool(1 as any);
        expect(result).toEqual(true);
      });
      it(should` take 0`, () => {
        const result = bool(0 as any);
        expect(result).toEqual(false);
      });
      it(should` take 123`, () => {
        const result = bool(123 as any);
        expect(result).toEqual(false);
      });
      it(should` take 'true'`, () => {
        const result = bool('true' as any);
        expect(result).toEqual(true);
      });
      it(should` take 'false'`, () => {
        const result = bool('false' as any);
        expect(result).toEqual(false);
      });
      it(should` take 'foobar'`, () => {
        const result = bool('foobar' as any);
        expect(result).toEqual(false);
      });
      it(should` take {foo: 'bar'}`, () => {
        const result = bool({ foo: 'bar' } as any);
        expect(result).toEqual(false);
      });
      it(should` take []`, () => {
        const result = bool([] as any);
        expect(result).toEqual(false);
      });
      it(should` take null`, () => {
        const result = bool(null as any);
        expect(result).toEqual(false);
      });
      it(should` take undefined`, () => {
        const result = bool(undefined as any);
        expect(result).toEqual(false);
      });
      it(should` take true with other params`, () => {
        const result = bool(true as any, true);
        expect(result).toEqual(true);
      });
      it(should` take false with other params`, () => {
        const result = bool(false as any, true);
        expect(result).toEqual(false);
      });
      it(should` take 1 with other params`, () => {
        const result = bool(1 as any, true);
        expect(result).toEqual(true);
      });
      it(should` take 0 with other params`, () => {
        const result = bool(0 as any, true);
        expect(result).toEqual(false);
      });
      it(should` take 123 with other params`, () => {
        const result = bool(123 as any, true);
        expect(result).toEqual(true);
      });
      it(should` take 'true' with other params`, () => {
        const result = bool('true' as any, true);
        expect(result).toEqual(true);
      });
      it(should` take 'false' with other params`, () => {
        const result = bool('false' as any, true);
        expect(result).toEqual(false);
      });
      it(should` take 'foobar' with other params`, () => {
        const result = bool('foobar' as any, true);
        expect(result).toEqual(true);
      });
      it(should` take {foo: 'bar'} with other params`, () => {
        const result = bool({ foo: 'bar' } as any, true);
        expect(result).toEqual(true);
      });
      it(should` take [] with other params`, () => {
        const result = bool([] as any, true);
        expect(result).toEqual(true);
      });
      it(should` take null with other params`, () => {
        const result = bool(null as any, true);
        expect(result).toEqual(true);
      });
      it(should` take undefined with other params`, () => {
        const result = bool(undefined as any, true);
        expect(result).toEqual(true);
      });
    });
  });

  describe('safe.func', () => {
    singleTest(swissak.safe.func, 'safe.func', (func, name) => {
      it(should` exist as ${name}`, () => {
        expect(func).toBeDefined();
      });

      it(should` take (p: number) => 123`, () => {
        const input = (p: number) => 123 as any;
        const result = func(input);
        expect(typeof result).toBe('function');
        expect(result(1)).toEqual(123);
      });
      it(should` take true`, () => {
        const input = true as any;
        const result = func(input);
        expect(typeof result).toBe('function');
        expect(result(1)).toBe(undefined);
      });
      it(should` take false`, () => {
        const input = false as any;
        const result = func(input);
        expect(typeof result).toBe('function');
        expect(result(1)).toBe(undefined);
      });
      it(should` take 123`, () => {
        const input = 123 as any;
        const result = func(input);
        expect(typeof result).toBe('function');
        expect(result(1)).toBe(undefined);
      });
      it(should` take 'foobar'`, () => {
        const input = 'foobar' as any;
        const result = func(input);
        expect(typeof result).toBe('function');
        expect(result(1)).toBe(undefined);
      });
      it(should` take {foo: 'bar'}`, () => {
        const input = { foo: 'bar' } as any;
        const result = func(input);
        expect(typeof result).toBe('function');
        expect(result(1)).toBe(undefined);
      });
      it(should` take [1, 2, 3]`, () => {
        const input = [1, 2, 3] as any;
        const result = func(input);
        expect(typeof result).toBe('function');
        expect(result(1)).toBe(undefined);
      });
      it(should` take null`, () => {
        const input = null as any;
        const result = func(input);
        expect(typeof result).toBe('function');
        expect(result(1)).toBe(undefined);
      });
      it(should` take undefined`, () => {
        const input = undefined as any;
        const result = func(input);
        expect(typeof result).toBe('function');
        expect(result(1)).toBe(undefined);
      });
      it(should` take (p: number) => 123 with other params`, () => {
        const input = ((p: number) => 123) as any;
        const result = func(input, (q: number) => 456);
        expect(typeof result).toBe('function');
        expect(result(1)).toEqual(123);
      });
      it(should` take true with other params`, () => {
        const input = true as any;
        const result = func(input, (q: number) => 456);
        expect(typeof result).toBe('function');
        expect(result(1)).toEqual(456);
      });
      it(should` take false with other params`, () => {
        const input = false as any;
        const result = func(input, (q: number) => 456);
        expect(typeof result).toBe('function');
        expect(result(1)).toEqual(456);
      });
      it(should` take 123 with other params`, () => {
        const input = 123 as any;
        const result = func(input, (q: number) => 456);
        expect(typeof result).toBe('function');
        expect(result(1)).toEqual(456);
      });
      it(should` take 'foobar' with other params`, () => {
        const input = 'foobar' as any;
        const result = func(input, (q: number) => 456);
        expect(typeof result).toBe('function');
        expect(result(1)).toEqual(456);
      });
      it(should` take {foo: 'bar'} with other params`, () => {
        const input = { foo: 'bar' } as any;
        const result = func(input, (q: number) => 456);
        expect(typeof result).toBe('function');
        expect(result(1)).toEqual(456);
      });
      it(should` take [1, 2, 3] with other params`, () => {
        const input = [1, 2, 3] as any;
        const result = func(input, (q: number) => 456);
        expect(typeof result).toBe('function');
        expect(result(1)).toEqual(456);
      });
      it(should` take null with other params`, () => {
        const input = null as any;
        const result = func(input, (q: number) => 456);
        expect(typeof result).toBe('function');
        expect(result(1)).toEqual(456);
      });
      it(should` take undefined with other params`, () => {
        const input = undefined as any;
        const result = func(input, (q: number) => 456);
        expect(typeof result).toBe('function');
        expect(result(1)).toEqual(456);
      });
    });
  });

  describe('safe.obj', () => {
    singleTest(swissak.safe.obj, 'safe.obj', (obj, name) => {
      it(should` exist as ${name}`, () => {
        expect(obj).toBeDefined();
      });

      it(should` take {foo: 'bar'}`, () => {
        const result = obj({ foo: 'bar' } as any);
        expect(result).toEqual({ foo: 'bar' });
      });
      it(should` take [1, 2, 3] - with default allowArrays`, () => {
        const result = obj([1, 2, 3] as any);
        expect(result).toEqual({});
      });
      it(should` take [1, 2, 3] - with allowArrays = true`, () => {
        const result = obj([1, 2, 3] as any, true);
        expect(result).toEqual([1, 2, 3]);
      });
      it(should` take [1, 2, 3] - with allowArrays = false`, () => {
        const result = obj([1, 2, 3] as any, false);
        expect(result).toEqual({});
      });
      it(should` take true`, () => {
        const result = obj(true as any);
        expect(result).toEqual({});
      });
      it(should` take false`, () => {
        const result = obj(false as any);
        expect(result).toEqual({});
      });
      it(should` take 123`, () => {
        const result = obj(123 as any);
        expect(result).toEqual({});
      });
      it(should` take 'foobar'`, () => {
        const result = obj('foobar' as any);
        expect(result).toEqual({});
      });
      it(should` take null`, () => {
        const result = obj(null as any);
        expect(result).toEqual({});
      });
      it(should` take undefined`, () => {
        const result = obj(undefined as any);
        expect(result).toEqual({});
      });
      it(should` take {foo: 'bar'} with other params`, () => {
        const result = obj({ foo: 'bar' } as any, true, { baz: 123 });
        expect(result).toEqual({ foo: 'bar' });
      });
      it(should` take [1, 2, 3] with other params - with default allowArrays`, () => {
        const result = obj([1, 2, 3] as any, undefined, { baz: 123 });
        expect(result).toEqual({ baz: 123 });
      });
      it(should` take [1, 2, 3] with other params - with allowArrays = true`, () => {
        const result = obj([1, 2, 3] as any, true, { baz: 123 });
        expect(result).toEqual([1, 2, 3]);
      });
      it(should` take [1, 2, 3] with other params - with allowArrays = false`, () => {
        const result = obj([1, 2, 3] as any, false, { baz: 123 });
        expect(result).toEqual({ baz: 123 });
      });
      it(should` take true with other params`, () => {
        const result = obj(true as any, true, { baz: 123 });
        expect(result).toEqual({ baz: 123 });
      });
      it(should` take false with other params`, () => {
        const result = obj(false as any, true, { baz: 123 });
        expect(result).toEqual({ baz: 123 });
      });
      it(should` take 123 with other params`, () => {
        const result = obj(123 as any, true, { baz: 123 });
        expect(result).toEqual({ baz: 123 });
      });
      it(should` take 'foobar' with other params`, () => {
        const result = obj('foobar' as any, true, { baz: 123 });
        expect(result).toEqual({ baz: 123 });
      });
      it(should` take null with other params`, () => {
        const result = obj(null as any, true, { baz: 123 });
        expect(result).toEqual({ baz: 123 });
      });
      it(should` take undefined with other params`, () => {
        const result = obj(undefined as any, true, { baz: 123 });
        expect(result).toEqual({ baz: 123 });
      });
    });
  });

  describe('safe.objWith', () => {
    singleTest(swissak.safe.objWith, 'safe.objWith', (objWith, name) => {
      it(should` exist as ${name}`, () => {
        expect(objWith).toBeDefined();
      });

      const config1: swissak.safe.ObjWithConfig<{ foo: string }> = {
        foo: {
          fallback: 'a',
          safeFn: (v, f) => swissak.safe.str(v, false, f)
        }
      };

      const config2: swissak.safe.ObjWithConfig<{ foo: string; bar: number }> = {
        ...config1,
        bar: {
          fallback: 78,
          safeFn: (v, f) => swissak.safe.num(v, true, 0, 100, f)
        }
      };

      it(should` take {foo: 'bar'} with config1`, () => {
        const result = objWith({ foo: 'bar' } as any, config1);
        expect(result).toEqual({ foo: 'bar' });
      });
      it(should` take [1, 2, 3] with config1`, () => {
        const result = objWith([1, 2, 3] as any, config1);
        expect(result).toEqual({ '0': 1, '1': 2, '2': 3, foo: 'a' });
      });
      it(should` take true with config1`, () => {
        const result = objWith(true as any, config1);
        expect(result).toEqual({ foo: 'a' });
      });
      it(should` take false with config1`, () => {
        const result = objWith(false as any, config1);
        expect(result).toEqual({ foo: 'a' });
      });
      it(should` take 123 with config1`, () => {
        const result = objWith(123 as any, config1);
        expect(result).toEqual({ foo: 'a' });
      });
      it(should` take 'foobar' with config1`, () => {
        const result = objWith('foobar' as any, config1);
        expect(result).toEqual({ foo: 'a' });
      });
      it(should` take null with config1`, () => {
        const result = objWith(null as any, config1);
        expect(result).toEqual({ foo: 'a' });
      });
      it(should` take undefined with config1`, () => {
        const result = objWith(undefined as any, config1);
        expect(result).toEqual({ foo: 'a' });
      });

      it(should` take {foo: 'bar'} with config2`, () => {
        const result = objWith({ foo: 'bar' } as any, config2);
        expect(result).toEqual({ foo: 'bar', bar: 78 });
      });
      it(should` take {foo: 'bar', bar: 45} with config2`, () => {
        const result = objWith({ foo: 'bar', bar: 45 } as any, config2);
        expect(result).toEqual({ foo: 'bar', bar: 45 });
      });
      it(should` take [1, 2, 3] with config2`, () => {
        const result = objWith([1, 2, 3] as any, config2);
        expect(result).toEqual({ '0': 1, '1': 2, '2': 3, foo: 'a', bar: 78 });
      });
      it(should` take true with config2`, () => {
        const result = objWith(true as any, config2);
        expect(result).toEqual({ foo: 'a', bar: 78 });
      });
      it(should` take false with config2`, () => {
        const result = objWith(false as any, config2);
        expect(result).toEqual({ foo: 'a', bar: 78 });
      });
      it(should` take 123 with config2`, () => {
        const result = objWith(123 as any, config2);
        expect(result).toEqual({ foo: 'a', bar: 78 });
      });
      it(should` take 'foobar' with config2`, () => {
        const result = objWith('foobar' as any, config2);
        expect(result).toEqual({ foo: 'a', bar: 78 });
      });
      it(should` take null with config2`, () => {
        const result = objWith(null as any, config2);
        expect(result).toEqual({ foo: 'a', bar: 78 });
      });
      it(should` take undefined with config2`, () => {
        const result = objWith(undefined as any, config2);
        expect(result).toEqual({ foo: 'a', bar: 78 });
      });

      it(should` not be the same obj as the input - by default`, () => {
        const input = { foo: 'bar' };
        const result = objWith(input, config2);
        expect(result).toEqual({ foo: 'bar', bar: 78 });
        expect(result).not.toBe(input);
      });
      it(should` not be the same obj as the input - when allowComposition = true`, () => {
        const input = { foo: 'bar' };
        const result = objWith(input, config2, true);
        expect(result).toEqual({ foo: 'bar', bar: 78 });
        expect(result).not.toBe(input);
      });
      it(should` be the same obj as the input - when allowComposition = false`, () => {
        const input = { foo: 'bar' };
        const result = objWith(input, config2, false);
        expect(result).toEqual({ foo: 'bar', bar: 78 });
        expect(result).toBe(input);
      });
    });
  });

  describe('safe.arr', () => {
    singleTest(swissak.safe.arr, 'safe.arr', (arr, name) => {
      it(should` exist as ${name}`, () => {
        expect(arr).toBeDefined();
      });

      it(should` take [1, 2, 3]`, () => {
        const result = arr([1, 2, 3] as any);
        expect(result).toEqual([1, 2, 3]);
      });
      it(should` take true`, () => {
        const result = arr(true as any);
        expect(result).toEqual([]);
      });
      it(should` take false`, () => {
        const result = arr(false as any);
        expect(result).toEqual([]);
      });
      it(should` take 123`, () => {
        const result = arr(123 as any);
        expect(result).toEqual([]);
      });
      it(should` take 'foobar'`, () => {
        const result = arr('foobar' as any);
        expect(result).toEqual([]);
      });
      it(should` take {foo: 'bar'}`, () => {
        const result = arr({ foo: 'bar' } as any);
        expect(result).toEqual([]);
      });
      it(should` take null`, () => {
        const result = arr(null as any);
        expect(result).toEqual([]);
      });
      it(should` take undefined`, () => {
        const result = arr(undefined as any);
        expect(result).toEqual([]);
      });
      it(should` take [1, 2, 3] with other params`, () => {
        const result = arr([1, 2, 3] as any, [4, 5, 6]);
        expect(result).toEqual([1, 2, 3]);
      });
      it(should` take true with other params`, () => {
        const result = arr(true as any, [4, 5, 6]);
        expect(result).toEqual([4, 5, 6]);
      });
      it(should` take false with other params`, () => {
        const result = arr(false as any, [4, 5, 6]);
        expect(result).toEqual([4, 5, 6]);
      });
      it(should` take 123 with other params`, () => {
        const result = arr(123 as any, [4, 5, 6]);
        expect(result).toEqual([4, 5, 6]);
      });
      it(should` take 'foobar' with other params`, () => {
        const result = arr('foobar' as any, [4, 5, 6]);
        expect(result).toEqual([4, 5, 6]);
      });
      it(should` take {foo: 'bar'} with other params`, () => {
        const result = arr({ foo: 'bar' } as any, [4, 5, 6]);
        expect(result).toEqual([4, 5, 6]);
      });
      it(should` take null with other params`, () => {
        const result = arr(null as any, [4, 5, 6]);
        expect(result).toEqual([4, 5, 6]);
      });
      it(should` take undefined with other params`, () => {
        const result = arr(undefined as any, [4, 5, 6]);
        expect(result).toEqual([4, 5, 6]);
      });
    });
  });

  describe('safe.prop', () => {
    singleTest(swissak.safe.prop, 'safe.prop', (prop, name) => {
      it(should` exist as ${name}`, () => {
        expect(prop).toBeDefined();
      });

      it(should` take 'foo'`, () => {
        const result = prop('foo' as any);
        expect(result).toEqual('foo');
      });
      it(should` take ''`, () => {
        const result = prop('' as any);
        expect(result).toEqual('');
      });
      it(should` take 123`, () => {
        const result = prop(123 as any);
        expect(result).toEqual(123);
      });
      it(should` take true`, () => {
        const result = prop(true as any);
        expect(result).toEqual('true');
      });
      it(should` take {foo: 'bar'}`, () => {
        const result = prop({ foo: 'bar' } as any);
        expect(result).toEqual('');
      });
      it(should` take []`, () => {
        const result = prop([] as any);
        expect(result).toEqual('');
      });
      it(should` take null`, () => {
        const result = prop(null as any);
        expect(result).toEqual('');
      });
      it(should` take undefined`, () => {
        const result = prop(undefined as any);
        expect(result).toEqual('');
      });
      it(should` take 'foo' with other params`, () => {
        const result = prop('foo' as any, 'bar');
        expect(result).toEqual('foo');
      });
      it(should` take '' with other params`, () => {
        const result = prop('' as any, 'bar');
        expect(result).toEqual('');
      });
      it(should` take 123 with other params`, () => {
        const result = prop(123 as any, 'bar');
        expect(result).toEqual(123);
      });
      it(should` take true with other params`, () => {
        const result = prop(true as any, 'bar');
        expect(result).toEqual('true');
      });
      it(should` take {foo: 'bar'} with other params`, () => {
        const result = prop({ foo: 'bar' } as any, 'bar');
        expect(result).toEqual('bar');
      });
      it(should` take [] with other params`, () => {
        const result = prop([] as any, 'bar');
        expect(result).toEqual('bar');
      });
      it(should` take null with other params`, () => {
        const result = prop(null as any, 'bar');
        expect(result).toEqual('bar');
      });
      it(should` take undefined with other params`, () => {
        const result = prop(undefined as any, 'bar');
        expect(result).toEqual('bar');
      });
    });
  });

  describe('safe.arrOf.num', () => {
    singleTest(swissak.safe.arrOf.num, 'safe.arrOf.num', (arrOfNum, name) => {
      it(should` exist as ${name}`, () => {
        expect(arrOfNum).toBeDefined();
      });

      it(should` take [1, 2, 3]`, () => {
        const result = arrOfNum([1, 2, 3] as any);
        expect(result).toEqual([1, 2, 3]);
      });
      it(should` take ['foo', 1, true, null, undefined, [], {}]`, () => {
        const result = arrOfNum(['foo', 1, true, null, undefined, [], {}] as any);
        expect(result).toEqual([0, 1, 0, 0, 0, 0, 0]);
      });
      it(should` take true`, () => {
        const result = arrOfNum(true as any);
        expect(result).toEqual([]);
      });
      it(should` take false`, () => {
        const result = arrOfNum(false as any);
        expect(result).toEqual([]);
      });
      it(should` take 123`, () => {
        const result = arrOfNum(123 as any);
        expect(result).toEqual([]);
      });
      it(should` take 'foobar'`, () => {
        const result = arrOfNum('foobar' as any);
        expect(result).toEqual([]);
      });
      it(should` take {foo: 'bar'}`, () => {
        const result = arrOfNum({ foo: 'bar' } as any);
        expect(result).toEqual([]);
      });
      it(should` take null`, () => {
        const result = arrOfNum(null as any);
        expect(result).toEqual([]);
      });
      it(should` take undefined`, () => {
        const result = arrOfNum(undefined as any);
        expect(result).toEqual([]);
      });
      it(should` take [1, 2, 3] with other params`, () => {
        const result = arrOfNum([1, 2, 3] as any, true, 0, 100, 99, [4, 5, 6]);
        expect(result).toEqual([1, 2, 3]);
      });
      it(should` take ['foo', 1, true, null, undefined, [], {}] with other params`, () => {
        const result = arrOfNum(['foo', 1, true, null, undefined, [], {}] as any, true, 0, 100, 99, [4, 5, 6]);
        expect(result).toEqual([99, 1, 99, 99, 99, 99, 99]);
      });
      it(should` take true with other params`, () => {
        const result = arrOfNum(true as any, true, 0, 100, 99, [4, 5, 6]);
        expect(result).toEqual([4, 5, 6]);
      });
      it(should` take false with other params`, () => {
        const result = arrOfNum(false as any, true, 0, 100, 99, [4, 5, 6]);
        expect(result).toEqual([4, 5, 6]);
      });
      it(should` take 123 with other params`, () => {
        const result = arrOfNum(123 as any, true, 0, 100, 99, [4, 5, 6]);
        expect(result).toEqual([4, 5, 6]);
      });
      it(should` take 'foobar' with other params`, () => {
        const result = arrOfNum('foobar' as any, true, 0, 100, 99, [4, 5, 6]);
        expect(result).toEqual([4, 5, 6]);
      });
      it(should` take {foo: 'bar'} with other params`, () => {
        const result = arrOfNum({ foo: 'bar' } as any, true, 0, 100, 99, [4, 5, 6]);
        expect(result).toEqual([4, 5, 6]);
      });
      it(should` take null with other params`, () => {
        const result = arrOfNum(null as any, true, 0, 100, 99, [4, 5, 6]);
        expect(result).toEqual([4, 5, 6]);
      });
      it(should` take undefined with other params`, () => {
        const result = arrOfNum(undefined as any, true, 0, 100, 99, [4, 5, 6]);
        expect(result).toEqual([4, 5, 6]);
      });
    });
  });

  describe('safe.arrOf.str', () => {
    singleTest(swissak.safe.arrOf.str, 'safe.arrOf.str', (arrOfStr, name) => {
      it(should` exist as ${name}`, () => {
        expect(arrOfStr).toBeDefined();
      });

      it(should` take ['foo', 'bar', 'baz']`, () => {
        const result = arrOfStr(['foo', 'bar', 'baz'] as any);
        expect(result).toEqual(['foo', 'bar', 'baz']);
      });
      it(should` take ['foo', 1, true, null, undefined, [], {}]`, () => {
        const result = arrOfStr(['foo', 1, true, null, undefined, [], {}] as any);
        expect(result).toEqual(['foo', '', '', '', '', '', '']);
      });
      it(should` take true`, () => {
        const result = arrOfStr(true as any);
        expect(result).toEqual([]);
      });
      it(should` take false`, () => {
        const result = arrOfStr(false as any);
        expect(result).toEqual([]);
      });
      it(should` take 123`, () => {
        const result = arrOfStr(123 as any);
        expect(result).toEqual([]);
      });
      it(should` take 'foobar'`, () => {
        const result = arrOfStr('foobar' as any);
        expect(result).toEqual([]);
      });
      it(should` take {foo: 'bar'}`, () => {
        const result = arrOfStr({ foo: 'bar' } as any);
        expect(result).toEqual([]);
      });
      it(should` take null`, () => {
        const result = arrOfStr(null as any);
        expect(result).toEqual([]);
      });
      it(should` take undefined`, () => {
        const result = arrOfStr(undefined as any);
        expect(result).toEqual([]);
      });
      it(should` take ['foo', 'bar', 'baz'] with other params`, () => {
        const result = arrOfStr(['foo', 'bar', 'baz'] as any, true, 'LOREM', ['IPSUM']);
        expect(result).toEqual(['foo', 'bar', 'baz']);
      });
      it(should` take ['foo', 1, true, null, undefined, [], {}] with other params`, () => {
        const result = arrOfStr(['foo', 1, true, null, undefined, [], {}] as any, true, 'LOREM', ['IPSUM']);
        expect(result).toEqual(['foo', '1', 'true', 'LOREM', 'LOREM', 'LOREM', 'LOREM']);
      });
      it(should` take true with other params`, () => {
        const result = arrOfStr(true as any, true, 'LOREM', ['IPSUM']);
        expect(result).toEqual(['IPSUM']);
      });
      it(should` take false with other params`, () => {
        const result = arrOfStr(false as any, true, 'LOREM', ['IPSUM']);
        expect(result).toEqual(['IPSUM']);
      });
      it(should` take 123 with other params`, () => {
        const result = arrOfStr(123 as any, true, 'LOREM', ['IPSUM']);
        expect(result).toEqual(['IPSUM']);
      });
      it(should` take 'foobar' with other params`, () => {
        const result = arrOfStr('foobar' as any, true, 'LOREM', ['IPSUM']);
        expect(result).toEqual(['IPSUM']);
      });
      it(should` take {foo: 'bar'} with other params`, () => {
        const result = arrOfStr({ foo: 'bar' } as any, true, 'LOREM', ['IPSUM']);
        expect(result).toEqual(['IPSUM']);
      });
      it(should` take null with other params`, () => {
        const result = arrOfStr(null as any, true, 'LOREM', ['IPSUM']);
        expect(result).toEqual(['IPSUM']);
      });
      it(should` take undefined with other params`, () => {
        const result = arrOfStr(undefined as any, true, 'LOREM', ['IPSUM']);
        expect(result).toEqual(['IPSUM']);
      });
    });
  });

  describe('safe.arrOf.bool', () => {
    singleTest(swissak.safe.arrOf.bool, 'safe.arrOf.bool', (arrOfBool, name) => {
      it(should` exist as ${name}`, () => {
        expect(arrOfBool).toBeDefined();
      });

      it(should` take [false, true, false]`, () => {
        const result = arrOfBool([false, true, false] as any);
        expect(result).toEqual([false, true, false]);
      });
      it(should` take ['foo', 123, true, null, undefined, [], {}]`, () => {
        const result = arrOfBool(['foo', 123, true, null, undefined, [], {}] as any);
        expect(result).toEqual([false, false, true, false, false, false, false]);
      });
      it(should` take true`, () => {
        const result = arrOfBool(true as any);
        expect(result).toEqual([]);
      });
      it(should` take false`, () => {
        const result = arrOfBool(false as any);
        expect(result).toEqual([]);
      });
      it(should` take 123`, () => {
        const result = arrOfBool(123 as any);
        expect(result).toEqual([]);
      });
      it(should` take 'foobar'`, () => {
        const result = arrOfBool('foobar' as any);
        expect(result).toEqual([]);
      });
      it(should` take {foo: 'bar'}`, () => {
        const result = arrOfBool({ foo: 'bar' } as any);
        expect(result).toEqual([]);
      });
      it(should` take null`, () => {
        const result = arrOfBool(null as any);
        expect(result).toEqual([]);
      });
      it(should` take undefined`, () => {
        const result = arrOfBool(undefined as any);
        expect(result).toEqual([]);
      });
      it(should` take [false, true, false] with other params`, () => {
        const result = arrOfBool([false, true, false] as any, true, [true, true]);
        expect(result).toEqual([false, true, false]);
      });
      it(should` take ['foo', 123, true, null, undefined, [], {}] with other params`, () => {
        const result = arrOfBool(['foo', 123, true, null, undefined, [], {}] as any, true, [true, true]);
        expect(result).toEqual([true, true, true, true, true, true, true]);
      });
      it(should` take true with other params`, () => {
        const result = arrOfBool(true as any, true, [true, true]);
        expect(result).toEqual([true, true]);
      });
      it(should` take false with other params`, () => {
        const result = arrOfBool(false as any, true, [true, true]);
        expect(result).toEqual([true, true]);
      });
      it(should` take 123 with other params`, () => {
        const result = arrOfBool(123 as any, true, [true, true]);
        expect(result).toEqual([true, true]);
      });
      it(should` take 'foobar' with other params`, () => {
        const result = arrOfBool('foobar' as any, true, [true, true]);
        expect(result).toEqual([true, true]);
      });
      it(should` take {foo: 'bar'} with other params`, () => {
        const result = arrOfBool({ foo: 'bar' } as any, true, [true, true]);
        expect(result).toEqual([true, true]);
      });
      it(should` take null with other params`, () => {
        const result = arrOfBool(null as any, true, [true, true]);
        expect(result).toEqual([true, true]);
      });
      it(should` take undefined with other params`, () => {
        const result = arrOfBool(undefined as any, true, [true, true]);
        expect(result).toEqual([true, true]);
      });
    });
  });

  describe('safe.arrOf.func', () => {
    singleTest(swissak.safe.arrOf.func, 'safe.arrOf.func', (arrOfFunc, name) => {
      it(should` exist as ${name}`, () => {
        expect(arrOfFunc).toBeDefined();
      });

      it(should` take [(p) => 1]`, () => {
        const result = arrOfFunc([(p) => 1] as any);
        expect(result.length).toBe(1);
        expect(result[0](1)).toBe(1);
      });
      it(should` take ['foo', 1, true, null, undefined, [], {}]`, () => {
        const result = arrOfFunc(['foo', 1, true, null, undefined, [], {}] as any);
        expect(result.length).toBe(7);
        expect(result[0]()).toBe(undefined);
        expect(result[1]()).toBe(undefined);
        expect(result[2]()).toBe(undefined);
        expect(result[3]()).toBe(undefined);
        expect(result[4]()).toBe(undefined);
        expect(result[5]()).toBe(undefined);
        expect(result[6]()).toBe(undefined);
      });
      it(should` take true`, () => {
        const result = arrOfFunc(true as any);
        expect(result).toEqual([]);
      });
      it(should` take false`, () => {
        const result = arrOfFunc(false as any);
        expect(result).toEqual([]);
      });
      it(should` take 123`, () => {
        const result = arrOfFunc(123 as any);
        expect(result).toEqual([]);
      });
      it(should` take 'foobar'`, () => {
        const result = arrOfFunc('foobar' as any);
        expect(result).toEqual([]);
      });
      it(should` take {foo: 'bar'}`, () => {
        const result = arrOfFunc({ foo: 'bar' } as any);
        expect(result).toEqual([]);
      });
      it(should` take null`, () => {
        const result = arrOfFunc(null as any);
        expect(result).toEqual([]);
      });
      it(should` take undefined`, () => {
        const result = arrOfFunc(undefined as any);
        expect(result).toEqual([]);
      });
      it(should` take [(p) => 1] with other params`, () => {
        const result = arrOfFunc([(p) => 1] as any, (q) => 2, [(r) => 3]);
        expect(result.length).toBe(1);
        expect(result[0](1)).toBe(1);
      });
      it(should` take ['foo', 1, true, null, undefined, [], {}] with other params`, () => {
        const result = arrOfFunc(['foo', 1, true, null, undefined, [], {}] as any, (q) => 2, [(r) => 3]);
        expect(result.length).toBe(7);
        expect(result[0](1)).toBe(2);
        expect(result[1](1)).toBe(2);
        expect(result[2](1)).toBe(2);
        expect(result[3](1)).toBe(2);
        expect(result[4](1)).toBe(2);
        expect(result[5](1)).toBe(2);
        expect(result[6](1)).toBe(2);
      });
      it(should` take true with other params`, () => {
        const result = arrOfFunc(true as any, (q) => 2, [(r) => 3]);
        expect(result.length).toBe(1);
        expect(result[0](1)).toBe(3);
      });
      it(should` take false with other params`, () => {
        const result = arrOfFunc(false as any, (q) => 2, [(r) => 3]);
        expect(result.length).toBe(1);
        expect(result[0](1)).toBe(3);
      });
      it(should` take 123 with other params`, () => {
        const result = arrOfFunc(123 as any, (q) => 2, [(r) => 3]);
        expect(result.length).toBe(1);
        expect(result[0](1)).toBe(3);
      });
      it(should` take 'foobar' with other params`, () => {
        const result = arrOfFunc('foobar' as any, (q) => 2, [(r) => 3]);
        expect(result.length).toBe(1);
        expect(result[0](1)).toBe(3);
      });
      it(should` take {foo: 'bar'} with other params`, () => {
        const result = arrOfFunc({ foo: 'bar' } as any, (q) => 2, [(r) => 3]);
        expect(result.length).toBe(1);
        expect(result[0](1)).toBe(3);
      });
      it(should` take null with other params`, () => {
        const result = arrOfFunc(null as any, (q) => 2, [(r) => 3]);
        expect(result.length).toBe(1);
        expect(result[0](1)).toBe(3);
      });
      it(should` take undefined with other params`, () => {
        const result = arrOfFunc(undefined as any, (q) => 2, [(r) => 3]);
        expect(result.length).toBe(1);
        expect(result[0](1)).toBe(3);
      });
    });
  });

  describe('safe.arrOf.obj', () => {
    singleTest(swissak.safe.arrOf.obj, 'safe.arrOf.obj', (arrOfObj, name) => {
      it(should` exist as ${name}`, () => {
        expect(arrOfObj).toBeDefined();
      });

      it(should` take [{foo: 1}, {bar: 2}]`, () => {
        const result = arrOfObj([{ foo: 1 }, { bar: 2 }] as any);
        expect(result).toEqual([{ foo: 1 }, { bar: 2 }]);
      });
      it(should` take ['foo', 1, true, null, undefined, [], {}] - with default allowArrays`, () => {
        const result = arrOfObj(['foo', 1, true, null, undefined, [], {}] as any);
        expect(result).toEqual([{}, {}, {}, {}, {}, {}, {}]);
      });
      it(should` take ['foo', 1, true, null, undefined, [], {}] - with allowArrays = true`, () => {
        const result = arrOfObj(['foo', 1, true, null, undefined, [], {}] as any, true);
        expect(result).toEqual([{}, {}, {}, {}, {}, [], {}]);
      });
      it(should` take ['foo', 1, true, null, undefined, [], {}] - with allowArrays = false`, () => {
        const result = arrOfObj(['foo', 1, true, null, undefined, [], {}] as any, false);
        expect(result).toEqual([{}, {}, {}, {}, {}, {}, {}]);
      });
      it(should` take true`, () => {
        const result = arrOfObj(true as any);
        expect(result).toEqual([]);
      });
      it(should` take false`, () => {
        const result = arrOfObj(false as any);
        expect(result).toEqual([]);
      });
      it(should` take 123`, () => {
        const result = arrOfObj(123 as any);
        expect(result).toEqual([]);
      });
      it(should` take 'foobar'`, () => {
        const result = arrOfObj('foobar' as any);
        expect(result).toEqual([]);
      });
      it(should` take {foo: 'bar'}`, () => {
        const result = arrOfObj({ foo: 'bar' } as any);
        expect(result).toEqual([]);
      });
      it(should` take null`, () => {
        const result = arrOfObj(null as any);
        expect(result).toEqual([]);
      });
      it(should` take undefined`, () => {
        const result = arrOfObj(undefined as any);
        expect(result).toEqual([]);
      });
      it(should` take [{foo: 1}, {bar: 2}] with other params`, () => {
        const result = arrOfObj([{ foo: 1 }, { bar: 2 }] as any, true, { l: 3 }, [{ i: 4 }]);
        expect(result).toEqual([{ foo: 1 }, { bar: 2 }]);
      });
      it(should` take ['foo', 1, true, null, undefined, [], {}] with other params - with default allowArrays`, () => {
        const result = arrOfObj(['foo', 1, true, null, undefined, [], {}] as any, undefined, { l: 3 }, [{ i: 4 }]);
        expect(result).toEqual([{ l: 3 }, { l: 3 }, { l: 3 }, { l: 3 }, { l: 3 }, { l: 3 }, {}]);
      });
      it(should` take ['foo', 1, true, null, undefined, [], {}] with other params - with allowArrays = true`, () => {
        const result = arrOfObj(['foo', 1, true, null, undefined, [], {}] as any, true, { l: 3 }, [{ i: 4 }]);
        expect(result).toEqual([{ l: 3 }, { l: 3 }, { l: 3 }, { l: 3 }, { l: 3 }, [], {}]);
      });
      it(should` take ['foo', 1, true, null, undefined, [], {}] with other params - with allowArrays = false`, () => {
        const result = arrOfObj(['foo', 1, true, null, undefined, [], {}] as any, false, { l: 3 }, [{ i: 4 }]);
        expect(result).toEqual([{ l: 3 }, { l: 3 }, { l: 3 }, { l: 3 }, { l: 3 }, { l: 3 }, {}]);
      });
      it(should` take true with other params`, () => {
        const result = arrOfObj(true as any, true, { l: 3 }, [{ i: 4 }]);
        expect(result).toEqual([{ i: 4 }]);
      });
      it(should` take false with other params`, () => {
        const result = arrOfObj(false as any, true, { l: 3 }, [{ i: 4 }]);
        expect(result).toEqual([{ i: 4 }]);
      });
      it(should` take 123 with other params`, () => {
        const result = arrOfObj(123 as any, true, { l: 3 }, [{ i: 4 }]);
        expect(result).toEqual([{ i: 4 }]);
      });
      it(should` take 'foobar' with other params`, () => {
        const result = arrOfObj('foobar' as any, true, { l: 3 }, [{ i: 4 }]);
        expect(result).toEqual([{ i: 4 }]);
      });
      it(should` take {foo: 'bar'} with other params`, () => {
        const result = arrOfObj({ foo: 'bar' } as any, true, { l: 3 }, [{ i: 4 }]);
        expect(result).toEqual([{ i: 4 }]);
      });
      it(should` take null with other params`, () => {
        const result = arrOfObj(null as any, true, { l: 3 }, [{ i: 4 }]);
        expect(result).toEqual([{ i: 4 }]);
      });
      it(should` take undefined with other params`, () => {
        const result = arrOfObj(undefined as any, true, { l: 3 }, [{ i: 4 }]);
        expect(result).toEqual([{ i: 4 }]);
      });
    });
  });

  describe('safe.arrOf.objWith', () => {
    singleTest(swissak.safe.arrOf.objWith, 'safe.arrOf.objWith', (arrOfObjWith, name) => {
      it(should` exist as ${name}`, () => {
        expect(arrOfObjWith).toBeDefined();
      });

      const config1: swissak.safe.ObjWithConfig<{ foo: string }> = {
        foo: {
          fallback: 'a',
          safeFn: (v, f) => swissak.safe.str(v, false, f)
        }
      };

      const config2: swissak.safe.ObjWithConfig<{ foo: string; bar: number }> = {
        ...config1,
        bar: {
          fallback: 78,
          safeFn: (v, f) => swissak.safe.num(v, true, 0, 100, f)
        }
      };

      it(should` take [{foo: 1}, {bar: 2}] with config1`, () => {
        const result = arrOfObjWith([{ foo: 1 }, { bar: 2 }] as any, config1);
        expect(result).toEqual([{ foo: 'a' }, { foo: 'a', bar: 2 }]);
      });
      it(should` take ['foo', 1, true, null, undefined, [], {}] with config1`, () => {
        const result = arrOfObjWith(['foo', 1, true, null, undefined, [], {}] as any, config1);
        expect(result).toEqual([{ foo: 'a' }, { foo: 'a' }, { foo: 'a' }, { foo: 'a' }, { foo: 'a' }, { foo: 'a' }, { foo: 'a' }]);
      });
      it(should` take true with config1`, () => {
        const result = arrOfObjWith(true as any, config1);
        expect(result).toEqual([]);
      });
      it(should` take false with config1`, () => {
        const result = arrOfObjWith(false as any, config1);
        expect(result).toEqual([]);
      });
      it(should` take 123 with config1`, () => {
        const result = arrOfObjWith(123 as any, config1);
        expect(result).toEqual([]);
      });
      it(should` take 'foobar' with config1`, () => {
        const result = arrOfObjWith('foobar' as any, config1);
        expect(result).toEqual([]);
      });
      it(should` take {foo: 'bar'} with config1`, () => {
        const result = arrOfObjWith({ foo: 'bar' } as any, config1);
        expect(result).toEqual([]);
      });
      it(should` take null with config1`, () => {
        const result = arrOfObjWith(null as any, config1);
        expect(result).toEqual([]);
      });
      it(should` take undefined with config1`, () => {
        const result = arrOfObjWith(undefined as any, config1);
        expect(result).toEqual([]);
      });

      it(should` take [{foo: 1}, {bar: 2}] with config2`, () => {
        const result = arrOfObjWith([{ foo: 1 }, { bar: 2 }] as any, config2);
        expect(result).toEqual([
          { foo: 'a', bar: 78 },
          { foo: 'a', bar: 2 }
        ]);
      });
      it(should` take ['foo', 1, true, null, undefined, [], {}] with config2`, () => {
        const result = arrOfObjWith(['foo', 1, true, null, undefined, [], {}] as any, config2);
        expect(result).toEqual([
          { foo: 'a', bar: 78 },
          { foo: 'a', bar: 78 },
          { foo: 'a', bar: 78 },
          { foo: 'a', bar: 78 },
          { foo: 'a', bar: 78 },
          { foo: 'a', bar: 78 },
          { foo: 'a', bar: 78 }
        ]);
      });
      it(should` take true with config2`, () => {
        const result = arrOfObjWith(true as any, config2);
        expect(result).toEqual([]);
      });
      it(should` take false with config2`, () => {
        const result = arrOfObjWith(false as any, config2);
        expect(result).toEqual([]);
      });
      it(should` take 123 with config2`, () => {
        const result = arrOfObjWith(123 as any, config2);
        expect(result).toEqual([]);
      });
      it(should` take 'foobar' with config2`, () => {
        const result = arrOfObjWith('foobar' as any, config2);
        expect(result).toEqual([]);
      });
      it(should` take {foo: 'bar'} with config2`, () => {
        const result = arrOfObjWith({ foo: 'bar' } as any, config2);
        expect(result).toEqual([]);
      });
      it(should` take null with config2`, () => {
        const result = arrOfObjWith(null as any, config2);
        expect(result).toEqual([]);
      });
      it(should` take undefined with config2`, () => {
        const result = arrOfObjWith(undefined as any, config2);
        expect(result).toEqual([]);
      });
    });
  });

  describe('safe.arrOf.arr', () => {
    singleTest(swissak.safe.arrOf.arr, 'safe.arrOf.arr', (arrOfArr, name) => {
      it(should` exist as ${name}`, () => {
        expect(arrOfArr).toBeDefined();
      });

      it(should` take [['foo'], ['bar']]`, () => {
        const result = arrOfArr([['foo'], ['bar']] as any);
        expect(result).toEqual([['foo'], ['bar']]);
      });
      it(should` take ['foo', 1, true, null, undefined, [], {}]`, () => {
        const result = arrOfArr(['foo', 1, true, null, undefined, [], {}] as any);
        expect(result).toEqual([[], [], [], [], [], [], []]);
      });
      it(should` take true`, () => {
        const result = arrOfArr(true as any);
        expect(result).toEqual([]);
      });
      it(should` take false`, () => {
        const result = arrOfArr(false as any);
        expect(result).toEqual([]);
      });
      it(should` take 123`, () => {
        const result = arrOfArr(123 as any);
        expect(result).toEqual([]);
      });
      it(should` take 'foobar'`, () => {
        const result = arrOfArr('foobar' as any);
        expect(result).toEqual([]);
      });
      it(should` take {foo: 'bar'}`, () => {
        const result = arrOfArr({ foo: 'bar' } as any);
        expect(result).toEqual([]);
      });
      it(should` take null`, () => {
        const result = arrOfArr(null as any);
        expect(result).toEqual([]);
      });
      it(should` take undefined`, () => {
        const result = arrOfArr(undefined as any);
        expect(result).toEqual([]);
      });
      it(should` take [['foo'], ['bar']] with other params`, () => {
        const result = arrOfArr([['foo'], ['bar']] as any, ['baz'], [['IPSUM']]);
        expect(result).toEqual([['foo'], ['bar']]);
      });
      it(should` take ['foo', 1, true, null, undefined, [], {}] with other params`, () => {
        const result = arrOfArr(['foo', 1, true, null, undefined, [], {}] as any, ['baz'], [['IPSUM']]);
        expect(result).toEqual([['baz'], ['baz'], ['baz'], ['baz'], ['baz'], [], ['baz']]);
      });
      it(should` take true with other params`, () => {
        const result = arrOfArr(true as any, ['baz'], [['IPSUM']]);
        expect(result).toEqual([['IPSUM']]);
      });
      it(should` take false with other params`, () => {
        const result = arrOfArr(false as any, ['baz'], [['IPSUM']]);
        expect(result).toEqual([['IPSUM']]);
      });
      it(should` take 123 with other params`, () => {
        const result = arrOfArr(123 as any, ['baz'], [['IPSUM']]);
        expect(result).toEqual([['IPSUM']]);
      });
      it(should` take 'foobar' with other params`, () => {
        const result = arrOfArr('foobar' as any, ['baz'], [['IPSUM']]);
        expect(result).toEqual([['IPSUM']]);
      });
      it(should` take {foo: 'bar'} with other params`, () => {
        const result = arrOfArr({ foo: 'bar' } as any, ['baz'], [['IPSUM']]);
        expect(result).toEqual([['IPSUM']]);
      });
      it(should` take null with other params`, () => {
        const result = arrOfArr(null as any, ['baz'], [['IPSUM']]);
        expect(result).toEqual([['IPSUM']]);
      });
      it(should` take undefined with other params`, () => {
        const result = arrOfArr(undefined as any, ['baz'], [['IPSUM']]);
        expect(result).toEqual([['IPSUM']]);
      });
    });
  });

  describe('safe.arrOf.prop', () => {
    singleTest(swissak.safe.arrOf.prop, 'safe.arrOf.prop', (arrOfProp, name) => {
      it(should` exist as ${name}`, () => {
        expect(arrOfProp).toBeDefined();
      });

      it(should` take ['foo', 'bar', 'baz']`, () => {
        const result = arrOfProp(['foo', 'bar', 'baz'] as any);
        expect(result).toEqual(['foo', 'bar', 'baz']);
      });
      it(should` take ['foo', 1, true, null, undefined, [], {}]`, () => {
        const result = arrOfProp(['foo', 1, true, null, undefined, [], {}] as any);
        expect(result).toEqual(['foo', 1, 'true', '', '', '', '']);
      });
      it(should` take true`, () => {
        const result = arrOfProp(true as any);
        expect(result).toEqual([]);
      });
      it(should` take false`, () => {
        const result = arrOfProp(false as any);
        expect(result).toEqual([]);
      });
      it(should` take 123`, () => {
        const result = arrOfProp(123 as any);
        expect(result).toEqual([]);
      });
      it(should` take 'foobar'`, () => {
        const result = arrOfProp('foobar' as any);
        expect(result).toEqual([]);
      });
      it(should` take {foo: 'bar'}`, () => {
        const result = arrOfProp({ foo: 'bar' } as any);
        expect(result).toEqual([]);
      });
      it(should` take null`, () => {
        const result = arrOfProp(null as any);
        expect(result).toEqual([]);
      });
      it(should` take undefined`, () => {
        const result = arrOfProp(undefined as any);
        expect(result).toEqual([]);
      });
      it(should` take ['foo', 'bar', 'baz'] with other params`, () => {
        const result = arrOfProp(['foo', 'bar', 'baz'] as any, 'LOREM', ['IPSUM']);
        expect(result).toEqual(['foo', 'bar', 'baz']);
      });
      it(should` take ['foo', 1, true, null, undefined, [], {}] with other params`, () => {
        const result = arrOfProp(['foo', 1, true, null, undefined, [], {}] as any, 'LOREM', ['IPSUM']);
        expect(result).toEqual(['foo', 1, 'true', 'LOREM', 'LOREM', 'LOREM', 'LOREM']);
      });
      it(should` take true with other params`, () => {
        const result = arrOfProp(true as any, 'LOREM', ['IPSUM']);
        expect(result).toEqual(['IPSUM']);
      });
      it(should` take false with other params`, () => {
        const result = arrOfProp(false as any, 'LOREM', ['IPSUM']);
        expect(result).toEqual(['IPSUM']);
      });
      it(should` take 123 with other params`, () => {
        const result = arrOfProp(123 as any, 'LOREM', ['IPSUM']);
        expect(result).toEqual(['IPSUM']);
      });
      it(should` take 'foobar' with other params`, () => {
        const result = arrOfProp('foobar' as any, 'LOREM', ['IPSUM']);
        expect(result).toEqual(['IPSUM']);
      });
      it(should` take {foo: 'bar'} with other params`, () => {
        const result = arrOfProp({ foo: 'bar' } as any, 'LOREM', ['IPSUM']);
        expect(result).toEqual(['IPSUM']);
      });
      it(should` take null with other params`, () => {
        const result = arrOfProp(null as any, 'LOREM', ['IPSUM']);
        expect(result).toEqual(['IPSUM']);
      });
      it(should` take undefined with other params`, () => {
        const result = arrOfProp(undefined as any, 'LOREM', ['IPSUM']);
        expect(result).toEqual(['IPSUM']);
      });
    });
  });
});
