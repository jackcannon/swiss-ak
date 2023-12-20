import * as swissak from '../';
import { register, multiTest, should } from './test-utils';

register({ describe, it });

describe('safe', () => {
  describe('safe.num', () => {
    it(should` take 10`, () => {
      const result = swissak.safe.num(10 as any);
      expect(result).toEqual(10);
    });
    it(should` take 10000`, () => {
      const result = swissak.safe.num(10000 as any);
      expect(result).toEqual(10000);
    });
    it(should` take -1`, () => {
      const result = swissak.safe.num(-1 as any);
      expect(result).toEqual(-1);
    });
    it(should` take true`, () => {
      const result = swissak.safe.num(true as any);
      expect(result).toEqual(0);
    });
    it(should` take '123'`, () => {
      const result = swissak.safe.num('123' as any);
      expect(result).toEqual(0);
    });
    it(should` take NaN`, () => {
      const result = swissak.safe.num(NaN as any);
      expect(result).toEqual(0);
    });
    it(should` take Infinity`, () => {
      const result = swissak.safe.num(Infinity as any);
      expect(result).toEqual(0);
    });
    it(should` take null`, () => {
      const result = swissak.safe.num(null as any);
      expect(result).toEqual(0);
    });
    it(should` take undefined`, () => {
      const result = swissak.safe.num(undefined as any);
      expect(result).toEqual(0);
    });
    it(should` take 10 with other params`, () => {
      const result = swissak.safe.num(10 as any, true, 0, 100, 99);
      expect(result).toEqual(10);
    });
    it(should` take 10000 with other params`, () => {
      const result = swissak.safe.num(10000 as any, true, 0, 100, 99);
      expect(result).toEqual(100);
    });
    it(should` take -1 with other params`, () => {
      const result = swissak.safe.num(-1 as any, true, 0, 100, 99);
      expect(result).toEqual(0);
    });
    it(should` take true with other params`, () => {
      const result = swissak.safe.num(true as any, true, 0, 100, 99);
      expect(result).toEqual(99);
    });
    it(should` take '123' with other params`, () => {
      const result = swissak.safe.num('123' as any, true, 0, 100, 99);
      expect(result).toEqual(99);
    });
    it(should` take NaN with other params`, () => {
      const result = swissak.safe.num(NaN as any, true, 0, 100, 99);
      expect(result).toEqual(99);
    });
    it(should` take Infinity with other params`, () => {
      const result = swissak.safe.num(Infinity as any, true, 0, 100, 99);
      expect(result).toEqual(100);
    });
    it(should` take null with other params`, () => {
      const result = swissak.safe.num(null as any, true, 0, 100, 99);
      expect(result).toEqual(99);
    });
    it(should` take undefined with other params`, () => {
      const result = swissak.safe.num(undefined as any, true, 0, 100, 99);
      expect(result).toEqual(99);
    });
  });

  describe('safe.str', () => {
    it(should` take 'foo'`, () => {
      const result = swissak.safe.str('foo' as any);
      expect(result).toEqual('foo');
    });
    it(should` take ''`, () => {
      const result = swissak.safe.str('' as any);
      expect(result).toEqual('');
    });
    it(should` take 123`, () => {
      const result = swissak.safe.str(123 as any);
      expect(result).toEqual('');
    });
    it(should` take true`, () => {
      const result = swissak.safe.str(true as any);
      expect(result).toEqual('');
    });
    it(should` take {foo: 'bar'}`, () => {
      const result = swissak.safe.str({ foo: 'bar' } as any);
      expect(result).toEqual('');
    });
    it(should` take []`, () => {
      const result = swissak.safe.str([] as any);
      expect(result).toEqual('');
    });
    it(should` take null`, () => {
      const result = swissak.safe.str(null as any);
      expect(result).toEqual('');
    });
    it(should` take undefined`, () => {
      const result = swissak.safe.str(undefined as any);
      expect(result).toEqual('');
    });
    it(should` take 'foo' with other params`, () => {
      const result = swissak.safe.str('foo' as any, true, 'bar');
      expect(result).toEqual('foo');
    });
    it(should` take '' with other params`, () => {
      const result = swissak.safe.str('' as any, true, 'bar');
      expect(result).toEqual('');
    });
    it(should` take 123 with other params`, () => {
      const result = swissak.safe.str(123 as any, true, 'bar');
      expect(result).toEqual('123');
    });
    it(should` take true with other params`, () => {
      const result = swissak.safe.str(true as any, true, 'bar');
      expect(result).toEqual('true');
    });
    it(should` take {foo: 'bar'} with other params`, () => {
      const result = swissak.safe.str({ foo: 'bar' } as any, true, 'bar');
      expect(result).toEqual('bar');
    });
    it(should` take [] with other params`, () => {
      const result = swissak.safe.str([] as any, true, 'bar');
      expect(result).toEqual('bar');
    });
    it(should` take null with other params`, () => {
      const result = swissak.safe.str(null as any, true, 'bar');
      expect(result).toEqual('bar');
    });
    it(should` take undefined with other params`, () => {
      const result = swissak.safe.str(undefined as any, true, 'bar');
      expect(result).toEqual('bar');
    });
  });

  describe('safe.bool', () => {
    it(should` take true`, () => {
      const result = swissak.safe.bool(true as any);
      expect(result).toEqual(true);
    });
    it(should` take false`, () => {
      const result = swissak.safe.bool(false as any);
      expect(result).toEqual(false);
    });
    it(should` take 1`, () => {
      const result = swissak.safe.bool(1 as any);
      expect(result).toEqual(true);
    });
    it(should` take 0`, () => {
      const result = swissak.safe.bool(0 as any);
      expect(result).toEqual(false);
    });
    it(should` take 123`, () => {
      const result = swissak.safe.bool(123 as any);
      expect(result).toEqual(false);
    });
    it(should` take 'true'`, () => {
      const result = swissak.safe.bool('true' as any);
      expect(result).toEqual(true);
    });
    it(should` take 'false'`, () => {
      const result = swissak.safe.bool('false' as any);
      expect(result).toEqual(false);
    });
    it(should` take 'foobar'`, () => {
      const result = swissak.safe.bool('foobar' as any);
      expect(result).toEqual(false);
    });
    it(should` take {foo: 'bar'}`, () => {
      const result = swissak.safe.bool({ foo: 'bar' } as any);
      expect(result).toEqual(false);
    });
    it(should` take []`, () => {
      const result = swissak.safe.bool([] as any);
      expect(result).toEqual(false);
    });
    it(should` take null`, () => {
      const result = swissak.safe.bool(null as any);
      expect(result).toEqual(false);
    });
    it(should` take undefined`, () => {
      const result = swissak.safe.bool(undefined as any);
      expect(result).toEqual(false);
    });
    it(should` take true with other params`, () => {
      const result = swissak.safe.bool(true as any, true);
      expect(result).toEqual(true);
    });
    it(should` take false with other params`, () => {
      const result = swissak.safe.bool(false as any, true);
      expect(result).toEqual(false);
    });
    it(should` take 1 with other params`, () => {
      const result = swissak.safe.bool(1 as any, true);
      expect(result).toEqual(true);
    });
    it(should` take 0 with other params`, () => {
      const result = swissak.safe.bool(0 as any, true);
      expect(result).toEqual(false);
    });
    it(should` take 123 with other params`, () => {
      const result = swissak.safe.bool(123 as any, true);
      expect(result).toEqual(true);
    });
    it(should` take 'true' with other params`, () => {
      const result = swissak.safe.bool('true' as any, true);
      expect(result).toEqual(true);
    });
    it(should` take 'false' with other params`, () => {
      const result = swissak.safe.bool('false' as any, true);
      expect(result).toEqual(false);
    });
    it(should` take 'foobar' with other params`, () => {
      const result = swissak.safe.bool('foobar' as any, true);
      expect(result).toEqual(true);
    });
    it(should` take {foo: 'bar'} with other params`, () => {
      const result = swissak.safe.bool({ foo: 'bar' } as any, true);
      expect(result).toEqual(true);
    });
    it(should` take [] with other params`, () => {
      const result = swissak.safe.bool([] as any, true);
      expect(result).toEqual(true);
    });
    it(should` take null with other params`, () => {
      const result = swissak.safe.bool(null as any, true);
      expect(result).toEqual(true);
    });
    it(should` take undefined with other params`, () => {
      const result = swissak.safe.bool(undefined as any, true);
      expect(result).toEqual(true);
    });
  });

  describe('safe.func', () => {
    it(should` take (p: number) => 123`, () => {
      const func = (p: number) => 123 as any;
      const result = swissak.safe.func(func);
      expect(typeof result).toBe('function');
      expect(result(1)).toEqual(123);
    });
    it(should` take true`, () => {
      const func = true as any;
      const result = swissak.safe.func(func);
      expect(typeof result).toBe('function');
      expect(result(1)).toBe(undefined);
    });
    it(should` take false`, () => {
      const func = false as any;
      const result = swissak.safe.func(func);
      expect(typeof result).toBe('function');
      expect(result(1)).toBe(undefined);
    });
    it(should` take 123`, () => {
      const func = 123 as any;
      const result = swissak.safe.func(func);
      expect(typeof result).toBe('function');
      expect(result(1)).toBe(undefined);
    });
    it(should` take 'foobar'`, () => {
      const func = 'foobar' as any;
      const result = swissak.safe.func(func);
      expect(typeof result).toBe('function');
      expect(result(1)).toBe(undefined);
    });
    it(should` take {foo: 'bar'}`, () => {
      const func = { foo: 'bar' } as any;
      const result = swissak.safe.func(func);
      expect(typeof result).toBe('function');
      expect(result(1)).toBe(undefined);
    });
    it(should` take [1, 2, 3]`, () => {
      const func = [1, 2, 3] as any;
      const result = swissak.safe.func(func);
      expect(typeof result).toBe('function');
      expect(result(1)).toBe(undefined);
    });
    it(should` take null`, () => {
      const func = null as any;
      const result = swissak.safe.func(func);
      expect(typeof result).toBe('function');
      expect(result(1)).toBe(undefined);
    });
    it(should` take undefined`, () => {
      const func = undefined as any;
      const result = swissak.safe.func(func);
      expect(typeof result).toBe('function');
      expect(result(1)).toBe(undefined);
    });
    it(should` take (p: number) => 123 with other params`, () => {
      const func = ((p: number) => 123) as any;
      const result = swissak.safe.func(func, (q: number) => 456);
      expect(typeof result).toBe('function');
      expect(result(1)).toEqual(123);
    });
    it(should` take true with other params`, () => {
      const func = true as any;
      const result = swissak.safe.func(func, (q: number) => 456);
      expect(typeof result).toBe('function');
      expect(result(1)).toEqual(456);
    });
    it(should` take false with other params`, () => {
      const func = false as any;
      const result = swissak.safe.func(func, (q: number) => 456);
      expect(typeof result).toBe('function');
      expect(result(1)).toEqual(456);
    });
    it(should` take 123 with other params`, () => {
      const func = 123 as any;
      const result = swissak.safe.func(func, (q: number) => 456);
      expect(typeof result).toBe('function');
      expect(result(1)).toEqual(456);
    });
    it(should` take 'foobar' with other params`, () => {
      const func = 'foobar' as any;
      const result = swissak.safe.func(func, (q: number) => 456);
      expect(typeof result).toBe('function');
      expect(result(1)).toEqual(456);
    });
    it(should` take {foo: 'bar'} with other params`, () => {
      const func = { foo: 'bar' } as any;
      const result = swissak.safe.func(func, (q: number) => 456);
      expect(typeof result).toBe('function');
      expect(result(1)).toEqual(456);
    });
    it(should` take [1, 2, 3] with other params`, () => {
      const func = [1, 2, 3] as any;
      const result = swissak.safe.func(func, (q: number) => 456);
      expect(typeof result).toBe('function');
      expect(result(1)).toEqual(456);
    });
    it(should` take null with other params`, () => {
      const func = null as any;
      const result = swissak.safe.func(func, (q: number) => 456);
      expect(typeof result).toBe('function');
      expect(result(1)).toEqual(456);
    });
    it(should` take undefined with other params`, () => {
      const func = undefined as any;
      const result = swissak.safe.func(func, (q: number) => 456);
      expect(typeof result).toBe('function');
      expect(result(1)).toEqual(456);
    });
  });

  describe('safe.obj', () => {
    it(should` take {foo: 'bar'}`, () => {
      const result = swissak.safe.obj({ foo: 'bar' } as any);
      expect(result).toEqual({ foo: 'bar' });
    });
    it(should` take [1, 2, 3]`, () => {
      const result = swissak.safe.obj([1, 2, 3] as any);
      expect(result).toEqual([1, 2, 3]);
    });
    it(should` take true`, () => {
      const result = swissak.safe.obj(true as any);
      expect(result).toEqual({});
    });
    it(should` take false`, () => {
      const result = swissak.safe.obj(false as any);
      expect(result).toEqual({});
    });
    it(should` take 123`, () => {
      const result = swissak.safe.obj(123 as any);
      expect(result).toEqual({});
    });
    it(should` take 'foobar'`, () => {
      const result = swissak.safe.obj('foobar' as any);
      expect(result).toEqual({});
    });
    it(should` take null`, () => {
      const result = swissak.safe.obj(null as any);
      expect(result).toEqual({});
    });
    it(should` take undefined`, () => {
      const result = swissak.safe.obj(undefined as any);
      expect(result).toEqual({});
    });
    it(should` take {foo: 'bar'} with other params`, () => {
      const result = swissak.safe.obj({ foo: 'bar' } as any, { baz: 123 });
      expect(result).toEqual({ foo: 'bar' });
    });
    it(should` take [1, 2, 3] with other params`, () => {
      const result = swissak.safe.obj([1, 2, 3] as any, { baz: 123 });
      expect(result).toEqual([1, 2, 3]);
    });
    it(should` take true with other params`, () => {
      const result = swissak.safe.obj(true as any, { baz: 123 });
      expect(result).toEqual({ baz: 123 });
    });
    it(should` take false with other params`, () => {
      const result = swissak.safe.obj(false as any, { baz: 123 });
      expect(result).toEqual({ baz: 123 });
    });
    it(should` take 123 with other params`, () => {
      const result = swissak.safe.obj(123 as any, { baz: 123 });
      expect(result).toEqual({ baz: 123 });
    });
    it(should` take 'foobar' with other params`, () => {
      const result = swissak.safe.obj('foobar' as any, { baz: 123 });
      expect(result).toEqual({ baz: 123 });
    });
    it(should` take null with other params`, () => {
      const result = swissak.safe.obj(null as any, { baz: 123 });
      expect(result).toEqual({ baz: 123 });
    });
    it(should` take undefined with other params`, () => {
      const result = swissak.safe.obj(undefined as any, { baz: 123 });
      expect(result).toEqual({ baz: 123 });
    });
  });

  describe('safe.arr', () => {
    it(should` take [1, 2, 3]`, () => {
      const result = swissak.safe.arr([1, 2, 3] as any);
      expect(result).toEqual([1, 2, 3]);
    });
    it(should` take true`, () => {
      const result = swissak.safe.arr(true as any);
      expect(result).toEqual([]);
    });
    it(should` take false`, () => {
      const result = swissak.safe.arr(false as any);
      expect(result).toEqual([]);
    });
    it(should` take 123`, () => {
      const result = swissak.safe.arr(123 as any);
      expect(result).toEqual([]);
    });
    it(should` take 'foobar'`, () => {
      const result = swissak.safe.arr('foobar' as any);
      expect(result).toEqual([]);
    });
    it(should` take {foo: 'bar'}`, () => {
      const result = swissak.safe.arr({ foo: 'bar' } as any);
      expect(result).toEqual([]);
    });
    it(should` take null`, () => {
      const result = swissak.safe.arr(null as any);
      expect(result).toEqual([]);
    });
    it(should` take undefined`, () => {
      const result = swissak.safe.arr(undefined as any);
      expect(result).toEqual([]);
    });
    it(should` take [1, 2, 3] with other params`, () => {
      const result = swissak.safe.arr([1, 2, 3] as any, [4, 5, 6]);
      expect(result).toEqual([1, 2, 3]);
    });
    it(should` take true with other params`, () => {
      const result = swissak.safe.arr(true as any, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(should` take false with other params`, () => {
      const result = swissak.safe.arr(false as any, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(should` take 123 with other params`, () => {
      const result = swissak.safe.arr(123 as any, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(should` take 'foobar' with other params`, () => {
      const result = swissak.safe.arr('foobar' as any, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(should` take {foo: 'bar'} with other params`, () => {
      const result = swissak.safe.arr({ foo: 'bar' } as any, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(should` take null with other params`, () => {
      const result = swissak.safe.arr(null as any, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(should` take undefined with other params`, () => {
      const result = swissak.safe.arr(undefined as any, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
  });

  describe('safe.prop', () => {
    it(should` take 'foo'`, () => {
      const result = swissak.safe.prop('foo' as any);
      expect(result).toEqual('foo');
    });
    it(should` take ''`, () => {
      const result = swissak.safe.prop('' as any);
      expect(result).toEqual('');
    });
    it(should` take 123`, () => {
      const result = swissak.safe.prop(123 as any);
      expect(result).toEqual(123);
    });
    it(should` take true`, () => {
      const result = swissak.safe.prop(true as any);
      expect(result).toEqual('true');
    });
    it(should` take {foo: 'bar'}`, () => {
      const result = swissak.safe.prop({ foo: 'bar' } as any);
      expect(result).toEqual('');
    });
    it(should` take []`, () => {
      const result = swissak.safe.prop([] as any);
      expect(result).toEqual('');
    });
    it(should` take null`, () => {
      const result = swissak.safe.prop(null as any);
      expect(result).toEqual('');
    });
    it(should` take undefined`, () => {
      const result = swissak.safe.prop(undefined as any);
      expect(result).toEqual('');
    });
    it(should` take 'foo' with other params`, () => {
      const result = swissak.safe.prop('foo' as any, 'bar');
      expect(result).toEqual('foo');
    });
    it(should` take '' with other params`, () => {
      const result = swissak.safe.prop('' as any, 'bar');
      expect(result).toEqual('');
    });
    it(should` take 123 with other params`, () => {
      const result = swissak.safe.prop(123 as any, 'bar');
      expect(result).toEqual(123);
    });
    it(should` take true with other params`, () => {
      const result = swissak.safe.prop(true as any, 'bar');
      expect(result).toEqual('true');
    });
    it(should` take {foo: 'bar'} with other params`, () => {
      const result = swissak.safe.prop({ foo: 'bar' } as any, 'bar');
      expect(result).toEqual('bar');
    });
    it(should` take [] with other params`, () => {
      const result = swissak.safe.prop([] as any, 'bar');
      expect(result).toEqual('bar');
    });
    it(should` take null with other params`, () => {
      const result = swissak.safe.prop(null as any, 'bar');
      expect(result).toEqual('bar');
    });
    it(should` take undefined with other params`, () => {
      const result = swissak.safe.prop(undefined as any, 'bar');
      expect(result).toEqual('bar');
    });
  });

  describe('safe.arrOf.num', () => {
    it(should` take [1, 2, 3]`, () => {
      const result = swissak.safe.arrOf.num([1, 2, 3] as any);
      expect(result).toEqual([1, 2, 3]);
    });
    it(should` take ['foo', 1, true, null, undefined, [], {}]`, () => {
      const result = swissak.safe.arrOf.num(['foo', 1, true, null, undefined, [], {}] as any);
      expect(result).toEqual([0, 1, 0, 0, 0, 0, 0]);
    });
    it(should` take true`, () => {
      const result = swissak.safe.arrOf.num(true as any);
      expect(result).toEqual([]);
    });
    it(should` take false`, () => {
      const result = swissak.safe.arrOf.num(false as any);
      expect(result).toEqual([]);
    });
    it(should` take 123`, () => {
      const result = swissak.safe.arrOf.num(123 as any);
      expect(result).toEqual([]);
    });
    it(should` take 'foobar'`, () => {
      const result = swissak.safe.arrOf.num('foobar' as any);
      expect(result).toEqual([]);
    });
    it(should` take {foo: 'bar'}`, () => {
      const result = swissak.safe.arrOf.num({ foo: 'bar' } as any);
      expect(result).toEqual([]);
    });
    it(should` take null`, () => {
      const result = swissak.safe.arrOf.num(null as any);
      expect(result).toEqual([]);
    });
    it(should` take undefined`, () => {
      const result = swissak.safe.arrOf.num(undefined as any);
      expect(result).toEqual([]);
    });
    it(should` take [1, 2, 3] with other params`, () => {
      const result = swissak.safe.arrOf.num([1, 2, 3] as any, true, 0, 100, 99, [4, 5, 6]);
      expect(result).toEqual([1, 2, 3]);
    });
    it(should` take ['foo', 1, true, null, undefined, [], {}] with other params`, () => {
      const result = swissak.safe.arrOf.num(['foo', 1, true, null, undefined, [], {}] as any, true, 0, 100, 99, [4, 5, 6]);
      expect(result).toEqual([99, 1, 99, 99, 99, 99, 99]);
    });
    it(should` take true with other params`, () => {
      const result = swissak.safe.arrOf.num(true as any, true, 0, 100, 99, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(should` take false with other params`, () => {
      const result = swissak.safe.arrOf.num(false as any, true, 0, 100, 99, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(should` take 123 with other params`, () => {
      const result = swissak.safe.arrOf.num(123 as any, true, 0, 100, 99, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(should` take 'foobar' with other params`, () => {
      const result = swissak.safe.arrOf.num('foobar' as any, true, 0, 100, 99, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(should` take {foo: 'bar'} with other params`, () => {
      const result = swissak.safe.arrOf.num({ foo: 'bar' } as any, true, 0, 100, 99, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(should` take null with other params`, () => {
      const result = swissak.safe.arrOf.num(null as any, true, 0, 100, 99, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(should` take undefined with other params`, () => {
      const result = swissak.safe.arrOf.num(undefined as any, true, 0, 100, 99, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
  });

  describe('safe.arrOf.str', () => {
    it(should` take ['foo', 'bar', 'baz']`, () => {
      const result = swissak.safe.arrOf.str(['foo', 'bar', 'baz'] as any);
      expect(result).toEqual(['foo', 'bar', 'baz']);
    });
    it(should` take ['foo', 1, true, null, undefined, [], {}]`, () => {
      const result = swissak.safe.arrOf.str(['foo', 1, true, null, undefined, [], {}] as any);
      expect(result).toEqual(['foo', '', '', '', '', '', '']);
    });
    it(should` take true`, () => {
      const result = swissak.safe.arrOf.str(true as any);
      expect(result).toEqual([]);
    });
    it(should` take false`, () => {
      const result = swissak.safe.arrOf.str(false as any);
      expect(result).toEqual([]);
    });
    it(should` take 123`, () => {
      const result = swissak.safe.arrOf.str(123 as any);
      expect(result).toEqual([]);
    });
    it(should` take 'foobar'`, () => {
      const result = swissak.safe.arrOf.str('foobar' as any);
      expect(result).toEqual([]);
    });
    it(should` take {foo: 'bar'}`, () => {
      const result = swissak.safe.arrOf.str({ foo: 'bar' } as any);
      expect(result).toEqual([]);
    });
    it(should` take null`, () => {
      const result = swissak.safe.arrOf.str(null as any);
      expect(result).toEqual([]);
    });
    it(should` take undefined`, () => {
      const result = swissak.safe.arrOf.str(undefined as any);
      expect(result).toEqual([]);
    });
    it(should` take ['foo', 'bar', 'baz'] with other params`, () => {
      const result = swissak.safe.arrOf.str(['foo', 'bar', 'baz'] as any, true, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['foo', 'bar', 'baz']);
    });
    it(should` take ['foo', 1, true, null, undefined, [], {}] with other params`, () => {
      const result = swissak.safe.arrOf.str(['foo', 1, true, null, undefined, [], {}] as any, true, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['foo', '1', 'true', 'LOREM', 'LOREM', 'LOREM', 'LOREM']);
    });
    it(should` take true with other params`, () => {
      const result = swissak.safe.arrOf.str(true as any, true, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['IPSUM']);
    });
    it(should` take false with other params`, () => {
      const result = swissak.safe.arrOf.str(false as any, true, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['IPSUM']);
    });
    it(should` take 123 with other params`, () => {
      const result = swissak.safe.arrOf.str(123 as any, true, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['IPSUM']);
    });
    it(should` take 'foobar' with other params`, () => {
      const result = swissak.safe.arrOf.str('foobar' as any, true, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['IPSUM']);
    });
    it(should` take {foo: 'bar'} with other params`, () => {
      const result = swissak.safe.arrOf.str({ foo: 'bar' } as any, true, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['IPSUM']);
    });
    it(should` take null with other params`, () => {
      const result = swissak.safe.arrOf.str(null as any, true, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['IPSUM']);
    });
    it(should` take undefined with other params`, () => {
      const result = swissak.safe.arrOf.str(undefined as any, true, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['IPSUM']);
    });
  });

  describe('safe.arrOf.bool', () => {
    it(should` take [false, true, false]`, () => {
      const result = swissak.safe.arrOf.bool([false, true, false] as any);
      expect(result).toEqual([false, true, false]);
    });
    it(should` take ['foo', 123, true, null, undefined, [], {}]`, () => {
      const result = swissak.safe.arrOf.bool(['foo', 123, true, null, undefined, [], {}] as any);
      expect(result).toEqual([false, false, true, false, false, false, false]);
    });
    it(should` take true`, () => {
      const result = swissak.safe.arrOf.bool(true as any);
      expect(result).toEqual([]);
    });
    it(should` take false`, () => {
      const result = swissak.safe.arrOf.bool(false as any);
      expect(result).toEqual([]);
    });
    it(should` take 123`, () => {
      const result = swissak.safe.arrOf.bool(123 as any);
      expect(result).toEqual([]);
    });
    it(should` take 'foobar'`, () => {
      const result = swissak.safe.arrOf.bool('foobar' as any);
      expect(result).toEqual([]);
    });
    it(should` take {foo: 'bar'}`, () => {
      const result = swissak.safe.arrOf.bool({ foo: 'bar' } as any);
      expect(result).toEqual([]);
    });
    it(should` take null`, () => {
      const result = swissak.safe.arrOf.bool(null as any);
      expect(result).toEqual([]);
    });
    it(should` take undefined`, () => {
      const result = swissak.safe.arrOf.bool(undefined as any);
      expect(result).toEqual([]);
    });
    it(should` take [false, true, false] with other params`, () => {
      const result = swissak.safe.arrOf.bool([false, true, false] as any, true, [true, true]);
      expect(result).toEqual([false, true, false]);
    });
    it(should` take ['foo', 123, true, null, undefined, [], {}] with other params`, () => {
      const result = swissak.safe.arrOf.bool(['foo', 123, true, null, undefined, [], {}] as any, true, [true, true]);
      expect(result).toEqual([true, true, true, true, true, true, true]);
    });
    it(should` take true with other params`, () => {
      const result = swissak.safe.arrOf.bool(true as any, true, [true, true]);
      expect(result).toEqual([true, true]);
    });
    it(should` take false with other params`, () => {
      const result = swissak.safe.arrOf.bool(false as any, true, [true, true]);
      expect(result).toEqual([true, true]);
    });
    it(should` take 123 with other params`, () => {
      const result = swissak.safe.arrOf.bool(123 as any, true, [true, true]);
      expect(result).toEqual([true, true]);
    });
    it(should` take 'foobar' with other params`, () => {
      const result = swissak.safe.arrOf.bool('foobar' as any, true, [true, true]);
      expect(result).toEqual([true, true]);
    });
    it(should` take {foo: 'bar'} with other params`, () => {
      const result = swissak.safe.arrOf.bool({ foo: 'bar' } as any, true, [true, true]);
      expect(result).toEqual([true, true]);
    });
    it(should` take null with other params`, () => {
      const result = swissak.safe.arrOf.bool(null as any, true, [true, true]);
      expect(result).toEqual([true, true]);
    });
    it(should` take undefined with other params`, () => {
      const result = swissak.safe.arrOf.bool(undefined as any, true, [true, true]);
      expect(result).toEqual([true, true]);
    });
  });

  describe('safe.arrOf.func', () => {
    it(should` take [(p) => 1]`, () => {
      const result = swissak.safe.arrOf.func([(p) => 1] as any);
      expect(result.length).toBe(1);
      expect(result[0](1)).toBe(1);
    });
    it(should` take ['foo', 1, true, null, undefined, [], {}]`, () => {
      const result = swissak.safe.arrOf.func(['foo', 1, true, null, undefined, [], {}] as any);
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
      const result = swissak.safe.arrOf.func(true as any);
      expect(result).toEqual([]);
    });
    it(should` take false`, () => {
      const result = swissak.safe.arrOf.func(false as any);
      expect(result).toEqual([]);
    });
    it(should` take 123`, () => {
      const result = swissak.safe.arrOf.func(123 as any);
      expect(result).toEqual([]);
    });
    it(should` take 'foobar'`, () => {
      const result = swissak.safe.arrOf.func('foobar' as any);
      expect(result).toEqual([]);
    });
    it(should` take {foo: 'bar'}`, () => {
      const result = swissak.safe.arrOf.func({ foo: 'bar' } as any);
      expect(result).toEqual([]);
    });
    it(should` take null`, () => {
      const result = swissak.safe.arrOf.func(null as any);
      expect(result).toEqual([]);
    });
    it(should` take undefined`, () => {
      const result = swissak.safe.arrOf.func(undefined as any);
      expect(result).toEqual([]);
    });
    it(should` take [(p) => 1] with other params`, () => {
      const result = swissak.safe.arrOf.func([(p) => 1] as any, (q) => 2, [(r) => 3]);
      expect(result.length).toBe(1);
      expect(result[0](1)).toBe(1);
    });
    it(should` take ['foo', 1, true, null, undefined, [], {}] with other params`, () => {
      const result = swissak.safe.arrOf.func(['foo', 1, true, null, undefined, [], {}] as any, (q) => 2, [(r) => 3]);
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
      const result = swissak.safe.arrOf.func(true as any, (q) => 2, [(r) => 3]);
      expect(result.length).toBe(1);
      expect(result[0](1)).toBe(3);
    });
    it(should` take false with other params`, () => {
      const result = swissak.safe.arrOf.func(false as any, (q) => 2, [(r) => 3]);
      expect(result.length).toBe(1);
      expect(result[0](1)).toBe(3);
    });
    it(should` take 123 with other params`, () => {
      const result = swissak.safe.arrOf.func(123 as any, (q) => 2, [(r) => 3]);
      expect(result.length).toBe(1);
      expect(result[0](1)).toBe(3);
    });
    it(should` take 'foobar' with other params`, () => {
      const result = swissak.safe.arrOf.func('foobar' as any, (q) => 2, [(r) => 3]);
      expect(result.length).toBe(1);
      expect(result[0](1)).toBe(3);
    });
    it(should` take {foo: 'bar'} with other params`, () => {
      const result = swissak.safe.arrOf.func({ foo: 'bar' } as any, (q) => 2, [(r) => 3]);
      expect(result.length).toBe(1);
      expect(result[0](1)).toBe(3);
    });
    it(should` take null with other params`, () => {
      const result = swissak.safe.arrOf.func(null as any, (q) => 2, [(r) => 3]);
      expect(result.length).toBe(1);
      expect(result[0](1)).toBe(3);
    });
    it(should` take undefined with other params`, () => {
      const result = swissak.safe.arrOf.func(undefined as any, (q) => 2, [(r) => 3]);
      expect(result.length).toBe(1);
      expect(result[0](1)).toBe(3);
    });
  });

  describe('safe.arrOf.obj', () => {
    it(should` take [{foo: 1}, {bar: 2}]`, () => {
      const result = swissak.safe.arrOf.obj([{ foo: 1 }, { bar: 2 }] as any);
      expect(result).toEqual([{ foo: 1 }, { bar: 2 }]);
    });
    it(should` take ['foo', 1, true, null, undefined, [], {}]`, () => {
      const result = swissak.safe.arrOf.obj(['foo', 1, true, null, undefined, [], {}] as any);
      expect(result).toEqual([{}, {}, {}, {}, {}, [], {}]);
    });
    it(should` take true`, () => {
      const result = swissak.safe.arrOf.obj(true as any);
      expect(result).toEqual([]);
    });
    it(should` take false`, () => {
      const result = swissak.safe.arrOf.obj(false as any);
      expect(result).toEqual([]);
    });
    it(should` take 123`, () => {
      const result = swissak.safe.arrOf.obj(123 as any);
      expect(result).toEqual([]);
    });
    it(should` take 'foobar'`, () => {
      const result = swissak.safe.arrOf.obj('foobar' as any);
      expect(result).toEqual([]);
    });
    it(should` take {foo: 'bar'}`, () => {
      const result = swissak.safe.arrOf.obj({ foo: 'bar' } as any);
      expect(result).toEqual([]);
    });
    it(should` take null`, () => {
      const result = swissak.safe.arrOf.obj(null as any);
      expect(result).toEqual([]);
    });
    it(should` take undefined`, () => {
      const result = swissak.safe.arrOf.obj(undefined as any);
      expect(result).toEqual([]);
    });
    it(should` take [{foo: 1}, {bar: 2}] with other params`, () => {
      const result = swissak.safe.arrOf.obj([{ foo: 1 }, { bar: 2 }] as any, { l: 3 }, [{ i: 4 }]);
      expect(result).toEqual([{ foo: 1 }, { bar: 2 }]);
    });
    it(should` take ['foo', 1, true, null, undefined, [], {}] with other params`, () => {
      const result = swissak.safe.arrOf.obj(['foo', 1, true, null, undefined, [], {}] as any, { l: 3 }, [{ i: 4 }]);
      expect(result).toEqual([{ l: 3 }, { l: 3 }, { l: 3 }, { l: 3 }, { l: 3 }, [], {}]);
    });
    it(should` take true with other params`, () => {
      const result = swissak.safe.arrOf.obj(true as any, { l: 3 }, [{ i: 4 }]);
      expect(result).toEqual([{ i: 4 }]);
    });
    it(should` take false with other params`, () => {
      const result = swissak.safe.arrOf.obj(false as any, { l: 3 }, [{ i: 4 }]);
      expect(result).toEqual([{ i: 4 }]);
    });
    it(should` take 123 with other params`, () => {
      const result = swissak.safe.arrOf.obj(123 as any, { l: 3 }, [{ i: 4 }]);
      expect(result).toEqual([{ i: 4 }]);
    });
    it(should` take 'foobar' with other params`, () => {
      const result = swissak.safe.arrOf.obj('foobar' as any, { l: 3 }, [{ i: 4 }]);
      expect(result).toEqual([{ i: 4 }]);
    });
    it(should` take {foo: 'bar'} with other params`, () => {
      const result = swissak.safe.arrOf.obj({ foo: 'bar' } as any, { l: 3 }, [{ i: 4 }]);
      expect(result).toEqual([{ i: 4 }]);
    });
    it(should` take null with other params`, () => {
      const result = swissak.safe.arrOf.obj(null as any, { l: 3 }, [{ i: 4 }]);
      expect(result).toEqual([{ i: 4 }]);
    });
    it(should` take undefined with other params`, () => {
      const result = swissak.safe.arrOf.obj(undefined as any, { l: 3 }, [{ i: 4 }]);
      expect(result).toEqual([{ i: 4 }]);
    });
  });

  describe('safe.arrOf.arr', () => {
    it(should` take [['foo'], ['bar']]`, () => {
      const result = swissak.safe.arrOf.arr([['foo'], ['bar']] as any);
      expect(result).toEqual([['foo'], ['bar']]);
    });
    it(should` take ['foo', 1, true, null, undefined, [], {}]`, () => {
      const result = swissak.safe.arrOf.arr(['foo', 1, true, null, undefined, [], {}] as any);
      expect(result).toEqual([[], [], [], [], [], [], []]);
    });
    it(should` take true`, () => {
      const result = swissak.safe.arrOf.arr(true as any);
      expect(result).toEqual([]);
    });
    it(should` take false`, () => {
      const result = swissak.safe.arrOf.arr(false as any);
      expect(result).toEqual([]);
    });
    it(should` take 123`, () => {
      const result = swissak.safe.arrOf.arr(123 as any);
      expect(result).toEqual([]);
    });
    it(should` take 'foobar'`, () => {
      const result = swissak.safe.arrOf.arr('foobar' as any);
      expect(result).toEqual([]);
    });
    it(should` take {foo: 'bar'}`, () => {
      const result = swissak.safe.arrOf.arr({ foo: 'bar' } as any);
      expect(result).toEqual([]);
    });
    it(should` take null`, () => {
      const result = swissak.safe.arrOf.arr(null as any);
      expect(result).toEqual([]);
    });
    it(should` take undefined`, () => {
      const result = swissak.safe.arrOf.arr(undefined as any);
      expect(result).toEqual([]);
    });
    it(should` take [['foo'], ['bar']] with other params`, () => {
      const result = swissak.safe.arrOf.arr([['foo'], ['bar']] as any, ['baz'], [['IPSUM']]);
      expect(result).toEqual([['foo'], ['bar']]);
    });
    it(should` take ['foo', 1, true, null, undefined, [], {}] with other params`, () => {
      const result = swissak.safe.arrOf.arr(['foo', 1, true, null, undefined, [], {}] as any, ['baz'], [['IPSUM']]);
      expect(result).toEqual([['baz'], ['baz'], ['baz'], ['baz'], ['baz'], [], ['baz']]);
    });
    it(should` take true with other params`, () => {
      const result = swissak.safe.arrOf.arr(true as any, ['baz'], [['IPSUM']]);
      expect(result).toEqual([['IPSUM']]);
    });
    it(should` take false with other params`, () => {
      const result = swissak.safe.arrOf.arr(false as any, ['baz'], [['IPSUM']]);
      expect(result).toEqual([['IPSUM']]);
    });
    it(should` take 123 with other params`, () => {
      const result = swissak.safe.arrOf.arr(123 as any, ['baz'], [['IPSUM']]);
      expect(result).toEqual([['IPSUM']]);
    });
    it(should` take 'foobar' with other params`, () => {
      const result = swissak.safe.arrOf.arr('foobar' as any, ['baz'], [['IPSUM']]);
      expect(result).toEqual([['IPSUM']]);
    });
    it(should` take {foo: 'bar'} with other params`, () => {
      const result = swissak.safe.arrOf.arr({ foo: 'bar' } as any, ['baz'], [['IPSUM']]);
      expect(result).toEqual([['IPSUM']]);
    });
    it(should` take null with other params`, () => {
      const result = swissak.safe.arrOf.arr(null as any, ['baz'], [['IPSUM']]);
      expect(result).toEqual([['IPSUM']]);
    });
    it(should` take undefined with other params`, () => {
      const result = swissak.safe.arrOf.arr(undefined as any, ['baz'], [['IPSUM']]);
      expect(result).toEqual([['IPSUM']]);
    });
  });

  describe('safe.arrOf.prop', () => {
    it(should` take ['foo', 'bar', 'baz']`, () => {
      const result = swissak.safe.arrOf.prop(['foo', 'bar', 'baz'] as any);
      expect(result).toEqual(['foo', 'bar', 'baz']);
    });
    it(should` take ['foo', 1, true, null, undefined, [], {}]`, () => {
      const result = swissak.safe.arrOf.prop(['foo', 1, true, null, undefined, [], {}] as any);
      expect(result).toEqual(['foo', 1, 'true', '', '', '', '']);
    });
    it(should` take true`, () => {
      const result = swissak.safe.arrOf.prop(true as any);
      expect(result).toEqual([]);
    });
    it(should` take false`, () => {
      const result = swissak.safe.arrOf.prop(false as any);
      expect(result).toEqual([]);
    });
    it(should` take 123`, () => {
      const result = swissak.safe.arrOf.prop(123 as any);
      expect(result).toEqual([]);
    });
    it(should` take 'foobar'`, () => {
      const result = swissak.safe.arrOf.prop('foobar' as any);
      expect(result).toEqual([]);
    });
    it(should` take {foo: 'bar'}`, () => {
      const result = swissak.safe.arrOf.prop({ foo: 'bar' } as any);
      expect(result).toEqual([]);
    });
    it(should` take null`, () => {
      const result = swissak.safe.arrOf.prop(null as any);
      expect(result).toEqual([]);
    });
    it(should` take undefined`, () => {
      const result = swissak.safe.arrOf.prop(undefined as any);
      expect(result).toEqual([]);
    });
    it(should` take ['foo', 'bar', 'baz'] with other params`, () => {
      const result = swissak.safe.arrOf.prop(['foo', 'bar', 'baz'] as any, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['foo', 'bar', 'baz']);
    });
    it(should` take ['foo', 1, true, null, undefined, [], {}] with other params`, () => {
      const result = swissak.safe.arrOf.prop(['foo', 1, true, null, undefined, [], {}] as any, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['foo', 1, 'true', 'LOREM', 'LOREM', 'LOREM', 'LOREM']);
    });
    it(should` take true with other params`, () => {
      const result = swissak.safe.arrOf.prop(true as any, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['IPSUM']);
    });
    it(should` take false with other params`, () => {
      const result = swissak.safe.arrOf.prop(false as any, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['IPSUM']);
    });
    it(should` take 123 with other params`, () => {
      const result = swissak.safe.arrOf.prop(123 as any, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['IPSUM']);
    });
    it(should` take 'foobar' with other params`, () => {
      const result = swissak.safe.arrOf.prop('foobar' as any, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['IPSUM']);
    });
    it(should` take {foo: 'bar'} with other params`, () => {
      const result = swissak.safe.arrOf.prop({ foo: 'bar' } as any, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['IPSUM']);
    });
    it(should` take null with other params`, () => {
      const result = swissak.safe.arrOf.prop(null as any, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['IPSUM']);
    });
    it(should` take undefined with other params`, () => {
      const result = swissak.safe.arrOf.prop(undefined as any, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['IPSUM']);
    });
  });
});
