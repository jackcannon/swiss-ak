import * as swissak from '../';
import { register, multiTest } from './test-utils';

register({ describe, it });

describe('safe', () => {
  describe('safe.num', () => {
    it(`takes 10`, () => {
      const result = swissak.safe.num(10 as any);
      expect(result).toEqual(10);
    });
    it(`takes 10000`, () => {
      const result = swissak.safe.num(10000 as any);
      expect(result).toEqual(10000);
    });
    it(`takes -1`, () => {
      const result = swissak.safe.num(-1 as any);
      expect(result).toEqual(-1);
    });
    it(`takes true`, () => {
      const result = swissak.safe.num(true as any);
      expect(result).toEqual(0);
    });
    it(`takes '123'`, () => {
      const result = swissak.safe.num('123' as any);
      expect(result).toEqual(0);
    });
    it(`takes NaN`, () => {
      const result = swissak.safe.num(NaN as any);
      expect(result).toEqual(0);
    });
    it(`takes Infinity`, () => {
      const result = swissak.safe.num(Infinity as any);
      expect(result).toEqual(0);
    });
    it(`takes null`, () => {
      const result = swissak.safe.num(null as any);
      expect(result).toEqual(0);
    });
    it(`takes undefined`, () => {
      const result = swissak.safe.num(undefined as any);
      expect(result).toEqual(0);
    });
    it(`takes 10 with other params`, () => {
      const result = swissak.safe.num(10 as any, true, 0, 100, 99);
      expect(result).toEqual(10);
    });
    it(`takes 10000 with other params`, () => {
      const result = swissak.safe.num(10000 as any, true, 0, 100, 99);
      expect(result).toEqual(100);
    });
    it(`takes -1 with other params`, () => {
      const result = swissak.safe.num(-1 as any, true, 0, 100, 99);
      expect(result).toEqual(0);
    });
    it(`takes true with other params`, () => {
      const result = swissak.safe.num(true as any, true, 0, 100, 99);
      expect(result).toEqual(99);
    });
    it(`takes '123' with other params`, () => {
      const result = swissak.safe.num('123' as any, true, 0, 100, 99);
      expect(result).toEqual(99);
    });
    it(`takes NaN with other params`, () => {
      const result = swissak.safe.num(NaN as any, true, 0, 100, 99);
      expect(result).toEqual(99);
    });
    it(`takes Infinity with other params`, () => {
      const result = swissak.safe.num(Infinity as any, true, 0, 100, 99);
      expect(result).toEqual(100);
    });
    it(`takes null with other params`, () => {
      const result = swissak.safe.num(null as any, true, 0, 100, 99);
      expect(result).toEqual(99);
    });
    it(`takes undefined with other params`, () => {
      const result = swissak.safe.num(undefined as any, true, 0, 100, 99);
      expect(result).toEqual(99);
    });
  });

  describe('safe.str', () => {
    it(`takes 'foo'`, () => {
      const result = swissak.safe.str('foo' as any);
      expect(result).toEqual('foo');
    });
    it(`takes ''`, () => {
      const result = swissak.safe.str('' as any);
      expect(result).toEqual('');
    });
    it(`takes 123`, () => {
      const result = swissak.safe.str(123 as any);
      expect(result).toEqual('');
    });
    it(`takes true`, () => {
      const result = swissak.safe.str(true as any);
      expect(result).toEqual('');
    });
    it(`takes {foo: 'bar'}`, () => {
      const result = swissak.safe.str({ foo: 'bar' } as any);
      expect(result).toEqual('');
    });
    it(`takes []`, () => {
      const result = swissak.safe.str([] as any);
      expect(result).toEqual('');
    });
    it(`takes null`, () => {
      const result = swissak.safe.str(null as any);
      expect(result).toEqual('');
    });
    it(`takes undefined`, () => {
      const result = swissak.safe.str(undefined as any);
      expect(result).toEqual('');
    });
    it(`takes 'foo' with other params`, () => {
      const result = swissak.safe.str('foo' as any, true, 'bar');
      expect(result).toEqual('foo');
    });
    it(`takes '' with other params`, () => {
      const result = swissak.safe.str('' as any, true, 'bar');
      expect(result).toEqual('');
    });
    it(`takes 123 with other params`, () => {
      const result = swissak.safe.str(123 as any, true, 'bar');
      expect(result).toEqual('123');
    });
    it(`takes true with other params`, () => {
      const result = swissak.safe.str(true as any, true, 'bar');
      expect(result).toEqual('true');
    });
    it(`takes {foo: 'bar'} with other params`, () => {
      const result = swissak.safe.str({ foo: 'bar' } as any, true, 'bar');
      expect(result).toEqual('bar');
    });
    it(`takes [] with other params`, () => {
      const result = swissak.safe.str([] as any, true, 'bar');
      expect(result).toEqual('bar');
    });
    it(`takes null with other params`, () => {
      const result = swissak.safe.str(null as any, true, 'bar');
      expect(result).toEqual('bar');
    });
    it(`takes undefined with other params`, () => {
      const result = swissak.safe.str(undefined as any, true, 'bar');
      expect(result).toEqual('bar');
    });
  });

  describe('safe.bool', () => {
    it(`takes true`, () => {
      const result = swissak.safe.bool(true as any);
      expect(result).toEqual(true);
    });
    it(`takes false`, () => {
      const result = swissak.safe.bool(false as any);
      expect(result).toEqual(false);
    });
    it(`takes 1`, () => {
      const result = swissak.safe.bool(1 as any);
      expect(result).toEqual(true);
    });
    it(`takes 0`, () => {
      const result = swissak.safe.bool(0 as any);
      expect(result).toEqual(false);
    });
    it(`takes 123`, () => {
      const result = swissak.safe.bool(123 as any);
      expect(result).toEqual(false);
    });
    it(`takes 'true'`, () => {
      const result = swissak.safe.bool('true' as any);
      expect(result).toEqual(true);
    });
    it(`takes 'false'`, () => {
      const result = swissak.safe.bool('false' as any);
      expect(result).toEqual(false);
    });
    it(`takes 'foobar'`, () => {
      const result = swissak.safe.bool('foobar' as any);
      expect(result).toEqual(false);
    });
    it(`takes {foo: 'bar'}`, () => {
      const result = swissak.safe.bool({ foo: 'bar' } as any);
      expect(result).toEqual(false);
    });
    it(`takes []`, () => {
      const result = swissak.safe.bool([] as any);
      expect(result).toEqual(false);
    });
    it(`takes null`, () => {
      const result = swissak.safe.bool(null as any);
      expect(result).toEqual(false);
    });
    it(`takes undefined`, () => {
      const result = swissak.safe.bool(undefined as any);
      expect(result).toEqual(false);
    });
    it(`takes true with other params`, () => {
      const result = swissak.safe.bool(true as any, true);
      expect(result).toEqual(true);
    });
    it(`takes false with other params`, () => {
      const result = swissak.safe.bool(false as any, true);
      expect(result).toEqual(false);
    });
    it(`takes 1 with other params`, () => {
      const result = swissak.safe.bool(1 as any, true);
      expect(result).toEqual(true);
    });
    it(`takes 0 with other params`, () => {
      const result = swissak.safe.bool(0 as any, true);
      expect(result).toEqual(false);
    });
    it(`takes 123 with other params`, () => {
      const result = swissak.safe.bool(123 as any);
      expect(result).toEqual(true);
    });
    it(`takes 'true' with other params`, () => {
      const result = swissak.safe.bool('true' as any, true);
      expect(result).toEqual(true);
    });
    it(`takes 'false' with other params`, () => {
      const result = swissak.safe.bool('false' as any, true);
      expect(result).toEqual(false);
    });
    it(`takes 'foobar' with other params`, () => {
      const result = swissak.safe.bool('foobar' as any, true);
      expect(result).toEqual(true);
    });
    it(`takes {foo: 'bar'} with other params`, () => {
      const result = swissak.safe.bool({ foo: 'bar' } as any, true);
      expect(result).toEqual(true);
    });
    it(`takes [] with other params`, () => {
      const result = swissak.safe.bool([] as any, true);
      expect(result).toEqual(true);
    });
    it(`takes null with other params`, () => {
      const result = swissak.safe.bool(null as any, true);
      expect(result).toEqual(true);
    });
    it(`takes undefined with other params`, () => {
      const result = swissak.safe.bool(undefined as any, true);
      expect(result).toEqual(true);
    });
  });

  describe('safe.func', () => {
    it(`takes (p: number) => 123`, () => {
      const result = swissak.safe.func((p: number) => 123 as any);
      expect(result).toEqual((p: number) => 123);
    });
    it(`takes true`, () => {
      const result = swissak.safe.func(true as any);
      expect(result).toEqual(() => {});
    });
    it(`takes false`, () => {
      const result = swissak.safe.func(false as any);
      expect(result).toEqual(() => {});
    });
    it(`takes 123`, () => {
      const result = swissak.safe.func(123 as any);
      expect(result).toEqual(() => {});
    });
    it(`takes 'foobar'`, () => {
      const result = swissak.safe.func('foobar' as any);
      expect(result).toEqual(() => {});
    });
    it(`takes {foo: 'bar'}`, () => {
      const result = swissak.safe.func({ foo: 'bar' } as any);
      expect(result).toEqual(() => {});
    });
    it(`takes [1, 2, 3]`, () => {
      const result = swissak.safe.func([1, 2, 3] as any);
      expect(result).toEqual(() => {});
    });
    it(`takes null`, () => {
      const result = swissak.safe.func(null as any);
      expect(result).toEqual(() => {});
    });
    it(`takes undefined`, () => {
      const result = swissak.safe.func(undefined as any);
      expect(result).toEqual(() => {});
    });
    it(`takes (p: number) => 123 with other params`, () => {
      const result = swissak.safe.func(
        (p: number) => 123 as any,
        (q: number) => 456
      );
      expect(result).toEqual((p: number) => 123);
    });
    it(`takes true with other params`, () => {
      const result = swissak.safe.func(true as any, (q: number) => 456);
      expect(result).toEqual((q: number) => 456);
    });
    it(`takes false with other params`, () => {
      const result = swissak.safe.func(false as any, (q: number) => 456);
      expect(result).toEqual((q: number) => 456);
    });
    it(`takes 123 with other params`, () => {
      const result = swissak.safe.func(123 as any, (q: number) => 456);
      expect(result).toEqual((q: number) => 456);
    });
    it(`takes 'foobar' with other params`, () => {
      const result = swissak.safe.func('foobar' as any, (q: number) => 456);
      expect(result).toEqual((q: number) => 456);
    });
    it(`takes {foo: 'bar'} with other params`, () => {
      const result = swissak.safe.func({ foo: 'bar' } as any, (q: number) => 456);
      expect(result).toEqual((q: number) => 456);
    });
    it(`takes [1, 2, 3] with other params`, () => {
      const result = swissak.safe.func([1, 2, 3] as any, (q: number) => 456);
      expect(result).toEqual((q: number) => 456);
    });
    it(`takes null with other params`, () => {
      const result = swissak.safe.func(null as any, (q: number) => 456);
      expect(result).toEqual((q: number) => 456);
    });
    it(`takes undefined with other params`, () => {
      const result = swissak.safe.func(undefined as any, (q: number) => 456);
      expect(result).toEqual((q: number) => 456);
    });
  });

  describe('safe.obj', () => {
    it(`takes {foo: 'bar'}`, () => {
      const result = swissak.safe.obj({ foo: 'bar' } as any);
      expect(result).toEqual({ foo: 'bar' });
    });
    it(`takes [1, 2, 3]`, () => {
      const result = swissak.safe.obj([1, 2, 3] as any);
      expect(result).toEqual([1, 2, 3]);
    });
    it(`takes true`, () => {
      const result = swissak.safe.obj(true as any);
      expect(result).toEqual({});
    });
    it(`takes false`, () => {
      const result = swissak.safe.obj(false as any);
      expect(result).toEqual({});
    });
    it(`takes 123`, () => {
      const result = swissak.safe.obj(123 as any);
      expect(result).toEqual({});
    });
    it(`takes 'foobar'`, () => {
      const result = swissak.safe.obj('foobar' as any);
      expect(result).toEqual({});
    });
    it(`takes null`, () => {
      const result = swissak.safe.obj(null as any);
      expect(result).toEqual({});
    });
    it(`takes undefined`, () => {
      const result = swissak.safe.obj(undefined as any);
      expect(result).toEqual({});
    });
    it(`takes {foo: 'bar'} with other params`, () => {
      const result = swissak.safe.obj({ foo: 'bar' } as any, { baz: 123 });
      expect(result).toEqual({ foo: 'bar' });
    });
    it(`takes [1, 2, 3] with other params`, () => {
      const result = swissak.safe.obj([1, 2, 3] as any, { baz: 123 });
      expect(result).toEqual([1, 2, 3]);
    });
    it(`takes true with other params`, () => {
      const result = swissak.safe.obj(true as any, { baz: 123 });
      expect(result).toEqual({ baz: 123 });
    });
    it(`takes false with other params`, () => {
      const result = swissak.safe.obj(false as any, { baz: 123 });
      expect(result).toEqual({ baz: 123 });
    });
    it(`takes 123 with other params`, () => {
      const result = swissak.safe.obj(123 as any, { baz: 123 });
      expect(result).toEqual({ baz: 123 });
    });
    it(`takes 'foobar' with other params`, () => {
      const result = swissak.safe.obj('foobar' as any, { baz: 123 });
      expect(result).toEqual({ baz: 123 });
    });
    it(`takes null with other params`, () => {
      const result = swissak.safe.obj(null as any, { baz: 123 });
      expect(result).toEqual({ baz: 123 });
    });
    it(`takes undefined with other params`, () => {
      const result = swissak.safe.obj(undefined as any, { baz: 123 });
      expect(result).toEqual({ baz: 123 });
    });
  });

  describe('safe.arr', () => {
    it(`takes [1, 2, 3]`, () => {
      const result = swissak.safe.arr([1, 2, 3] as any);
      expect(result).toEqual([1, 2, 3]);
    });
    it(`takes true`, () => {
      const result = swissak.safe.arr(true as any);
      expect(result).toEqual([]);
    });
    it(`takes false`, () => {
      const result = swissak.safe.arr(false as any);
      expect(result).toEqual([]);
    });
    it(`takes 123`, () => {
      const result = swissak.safe.arr(123 as any);
      expect(result).toEqual([]);
    });
    it(`takes 'foobar'`, () => {
      const result = swissak.safe.arr('foobar' as any);
      expect(result).toEqual([]);
    });
    it(`takes {foo: 'bar'}`, () => {
      const result = swissak.safe.arr({ foo: 'bar' } as any);
      expect(result).toEqual([]);
    });
    it(`takes null`, () => {
      const result = swissak.safe.arr(null as any);
      expect(result).toEqual([]);
    });
    it(`takes undefined`, () => {
      const result = swissak.safe.arr(undefined as any);
      expect(result).toEqual([]);
    });
    it(`takes [1, 2, 3] with other params`, () => {
      const result = swissak.safe.arr([1, 2, 3] as any, [4, 5, 6]);
      expect(result).toEqual([1, 2, 3]);
    });
    it(`takes true with other params`, () => {
      const result = swissak.safe.arr(true as any, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(`takes false with other params`, () => {
      const result = swissak.safe.arr(false as any, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(`takes 123 with other params`, () => {
      const result = swissak.safe.arr(123 as any, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(`takes 'foobar' with other params`, () => {
      const result = swissak.safe.arr('foobar' as any, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(`takes {foo: 'bar'} with other params`, () => {
      const result = swissak.safe.arr({ foo: 'bar' } as any, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(`takes null with other params`, () => {
      const result = swissak.safe.arr(null as any, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(`takes undefined with other params`, () => {
      const result = swissak.safe.arr(undefined as any, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
  });

  describe('safe.arrOf.num', () => {
    it(`takes [1, 2, 3]`, () => {
      const result = swissak.safe.arrOf.num([1, 2, 3] as any);
      expect(result).toEqual([1, 2, 3]);
    });
    it(`takes ['foo', 1, true, null, undefined, [], {}]`, () => {
      const result = swissak.safe.arrOf.num(['foo', 1, true, null, undefined, [], {}] as any);
      expect(result).toEqual([0, 1, 0, 0, 0, 0, 0]);
    });
    it(`takes true`, () => {
      const result = swissak.safe.arrOf.num(true as any);
      expect(result).toEqual([]);
    });
    it(`takes false`, () => {
      const result = swissak.safe.arrOf.num(false as any);
      expect(result).toEqual([]);
    });
    it(`takes 123`, () => {
      const result = swissak.safe.arrOf.num(123 as any);
      expect(result).toEqual([]);
    });
    it(`takes 'foobar'`, () => {
      const result = swissak.safe.arrOf.num('foobar' as any);
      expect(result).toEqual([]);
    });
    it(`takes {foo: 'bar'}`, () => {
      const result = swissak.safe.arrOf.num({ foo: 'bar' } as any);
      expect(result).toEqual([]);
    });
    it(`takes null`, () => {
      const result = swissak.safe.arrOf.num(null as any);
      expect(result).toEqual([]);
    });
    it(`takes undefined`, () => {
      const result = swissak.safe.arrOf.num(undefined as any);
      expect(result).toEqual([]);
    });
    it(`takes [1, 2, 3] with other params`, () => {
      const result = swissak.safe.arrOf.num([1, 2, 3] as any, true, 0, 100, 99, [4, 5, 6]);
      expect(result).toEqual([1, 2, 3]);
    });
    it(`takes ['foo', 1, true, null, undefined, [], {}] with other params`, () => {
      const result = swissak.safe.arrOf.num(['foo', 1, true, null, undefined, [], {}] as any, true, 0, 100, 99, [4, 5, 6]);
      expect(result).toEqual([99, 1, 99, 99, 99, 99, 99]);
    });
    it(`takes true with other params`, () => {
      const result = swissak.safe.arrOf.num(true as any, true, 0, 100, 99, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(`takes false with other params`, () => {
      const result = swissak.safe.arrOf.num(false as any, true, 0, 100, 99, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(`takes 123 with other params`, () => {
      const result = swissak.safe.arrOf.num(123 as any, true, 0, 100, 99, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(`takes 'foobar' with other params`, () => {
      const result = swissak.safe.arrOf.num('foobar' as any, true, 0, 100, 99, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(`takes {foo: 'bar'} with other params`, () => {
      const result = swissak.safe.arrOf.num({ foo: 'bar' } as any, true, 0, 100, 99, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(`takes null with other params`, () => {
      const result = swissak.safe.arrOf.num(null as any, true, 0, 100, 99, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
    it(`takes undefined with other params`, () => {
      const result = swissak.safe.arrOf.num(undefined as any, true, 0, 100, 99, [4, 5, 6]);
      expect(result).toEqual([4, 5, 6]);
    });
  });

  describe('safe.arrOf.str', () => {
    it(`takes ['foo', 'bar', 'baz']`, () => {
      const result = swissak.safe.arrOf.str(['foo', 'bar', 'baz'] as any);
      expect(result).toEqual(['foo', 'bar', 'baz']);
    });
    it(`takes ['foo', 1, true, null, undefined, [], {}]`, () => {
      const result = swissak.safe.arrOf.str(['foo', 1, true, null, undefined, [], {}] as any);
      expect(result).toEqual(['foo', '', '', '', '', '', '']);
    });
    it(`takes true`, () => {
      const result = swissak.safe.arrOf.str(true as any);
      expect(result).toEqual([]);
    });
    it(`takes false`, () => {
      const result = swissak.safe.arrOf.str(false as any);
      expect(result).toEqual([]);
    });
    it(`takes 123`, () => {
      const result = swissak.safe.arrOf.str(123 as any);
      expect(result).toEqual([]);
    });
    it(`takes 'foobar'`, () => {
      const result = swissak.safe.arrOf.str('foobar' as any);
      expect(result).toEqual([]);
    });
    it(`takes {foo: 'bar'}`, () => {
      const result = swissak.safe.arrOf.str({ foo: 'bar' } as any);
      expect(result).toEqual([]);
    });
    it(`takes null`, () => {
      const result = swissak.safe.arrOf.str(null as any);
      expect(result).toEqual([]);
    });
    it(`takes undefined`, () => {
      const result = swissak.safe.arrOf.str(undefined as any);
      expect(result).toEqual([]);
    });
    it(`takes ['foo', 'bar', 'baz'] with other params`, () => {
      const result = swissak.safe.arrOf.str(['foo', 'bar', 'baz'] as any, true, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['foo', 'bar', 'baz']);
    });
    it(`takes ['foo', 1, true, null, undefined, [], {}] with other params`, () => {
      const result = swissak.safe.arrOf.str(['foo', 1, true, null, undefined, [], {}] as any, true, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['foo', '1', 'true', 'LOREM', 'LOREM', 'LOREM', 'LOREM']);
    });
    it(`takes true with other params`, () => {
      const result = swissak.safe.arrOf.str(true as any, true, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['IPSUM']);
    });
    it(`takes false with other params`, () => {
      const result = swissak.safe.arrOf.str(false as any, true, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['IPSUM']);
    });
    it(`takes 123 with other params`, () => {
      const result = swissak.safe.arrOf.str(123 as any, true, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['IPSUM']);
    });
    it(`takes 'foobar' with other params`, () => {
      const result = swissak.safe.arrOf.str('foobar' as any, true, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['IPSUM']);
    });
    it(`takes {foo: 'bar'} with other params`, () => {
      const result = swissak.safe.arrOf.str({ foo: 'bar' } as any, true, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['IPSUM']);
    });
    it(`takes null with other params`, () => {
      const result = swissak.safe.arrOf.str(null as any, true, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['IPSUM']);
    });
    it(`takes undefined with other params`, () => {
      const result = swissak.safe.arrOf.str(undefined as any, true, 'LOREM', ['IPSUM']);
      expect(result).toEqual(['IPSUM']);
    });
  });

  describe('safe.arrOf.bool', () => {
    it(`takes [false, true, false]`, () => {
      const result = swissak.safe.arrOf.bool([false, true, false] as any);
      expect(result).toEqual([false, true, false]);
    });
    it(`takes ['foo', 1, true, null, undefined, [], {}]`, () => {
      const result = swissak.safe.arrOf.bool(['foo', 1, true, null, undefined, [], {}] as any);
      expect(result).toEqual([false, false, true, false, false, false, false]);
    });
    it(`takes true`, () => {
      const result = swissak.safe.arrOf.bool(true as any);
      expect(result).toEqual([]);
    });
    it(`takes false`, () => {
      const result = swissak.safe.arrOf.bool(false as any);
      expect(result).toEqual([]);
    });
    it(`takes 123`, () => {
      const result = swissak.safe.arrOf.bool(123 as any);
      expect(result).toEqual([]);
    });
    it(`takes 'foobar'`, () => {
      const result = swissak.safe.arrOf.bool('foobar' as any);
      expect(result).toEqual([]);
    });
    it(`takes {foo: 'bar'}`, () => {
      const result = swissak.safe.arrOf.bool({ foo: 'bar' } as any);
      expect(result).toEqual([]);
    });
    it(`takes null`, () => {
      const result = swissak.safe.arrOf.bool(null as any);
      expect(result).toEqual([]);
    });
    it(`takes undefined`, () => {
      const result = swissak.safe.arrOf.bool(undefined as any);
      expect(result).toEqual([]);
    });
    it(`takes [false, true, false] with other params`, () => {
      const result = swissak.safe.arrOf.bool([false, true, false] as any, true, [true, true]);
      expect(result).toEqual([false, true, false]);
    });
    it(`takes ['foo', 1, true, null, undefined, [], {}] with other params`, () => {
      const result = swissak.safe.arrOf.bool(['foo', 1, true, null, undefined, [], {}] as any, true, [true, true]);
      expect(result).toEqual([true, true, true, true, true, true, true]);
    });
    it(`takes true with other params`, () => {
      const result = swissak.safe.arrOf.bool(true as any, true, [true, true]);
      expect(result).toEqual([true, true]);
    });
    it(`takes false with other params`, () => {
      const result = swissak.safe.arrOf.bool(false as any, true, [true, true]);
      expect(result).toEqual([true, true]);
    });
    it(`takes 123 with other params`, () => {
      const result = swissak.safe.arrOf.bool(123 as any, true, [true, true]);
      expect(result).toEqual([true, true]);
    });
    it(`takes 'foobar' with other params`, () => {
      const result = swissak.safe.arrOf.bool('foobar' as any, true, [true, true]);
      expect(result).toEqual([true, true]);
    });
    it(`takes {foo: 'bar'} with other params`, () => {
      const result = swissak.safe.arrOf.bool({ foo: 'bar' } as any, true, [true, true]);
      expect(result).toEqual([true, true]);
    });
    it(`takes null with other params`, () => {
      const result = swissak.safe.arrOf.bool(null as any, true, [true, true]);
      expect(result).toEqual([true, true]);
    });
    it(`takes undefined with other params`, () => {
      const result = swissak.safe.arrOf.bool(undefined as any, true, [true, true]);
      expect(result).toEqual([true, true]);
    });
  });

  describe('safe.arrOf.func', () => {
    it(`takes [(p) => 1]`, () => {
      const result = swissak.safe.arrOf.func([(p) => 1] as any);
      expect(result).toEqual([(p) => 1]);
    });
    it(`takes ['foo', 1, true, null, undefined, [], {}]`, () => {
      const result = swissak.safe.arrOf.func(['foo', 1, true, null, undefined, [], {}] as any);
      expect(result).toEqual([() => {}, () => {}, () => {}, () => {}, () => {}, () => {}, () => {}]);
    });
    it(`takes true`, () => {
      const result = swissak.safe.arrOf.func(true as any);
      expect(result).toEqual([]);
    });
    it(`takes false`, () => {
      const result = swissak.safe.arrOf.func(false as any);
      expect(result).toEqual([]);
    });
    it(`takes 123`, () => {
      const result = swissak.safe.arrOf.func(123 as any);
      expect(result).toEqual([]);
    });
    it(`takes 'foobar'`, () => {
      const result = swissak.safe.arrOf.func('foobar' as any);
      expect(result).toEqual([]);
    });
    it(`takes {foo: 'bar'}`, () => {
      const result = swissak.safe.arrOf.func({ foo: 'bar' } as any);
      expect(result).toEqual([]);
    });
    it(`takes null`, () => {
      const result = swissak.safe.arrOf.func(null as any);
      expect(result).toEqual([]);
    });
    it(`takes undefined`, () => {
      const result = swissak.safe.arrOf.func(undefined as any);
      expect(result).toEqual([]);
    });
    it(`takes [(p) => 1] with other params`, () => {
      const result = swissak.safe.arrOf.func([(p) => 1] as any, (q) => 2, [(r) => 3]);
      expect(result).toEqual([(p) => 1]);
    });
    it(`takes ['foo', 1, true, null, undefined, [], {}] with other params`, () => {
      const result = swissak.safe.arrOf.func(['foo', 1, true, null, undefined, [], {}] as any, (q) => 2, [(r) => 3]);
      expect(result).toEqual([(q) => 2, (q) => 2, (q) => 2, (q) => 2, (q) => 2, (q) => 2, (q) => 2]);
    });
    it(`takes true with other params`, () => {
      const result = swissak.safe.arrOf.func(true as any, (q) => 2, [(r) => 3]);
      expect(result).toEqual([(r) => 3]);
    });
    it(`takes false with other params`, () => {
      const result = swissak.safe.arrOf.func(false as any, (q) => 2, [(r) => 3]);
      expect(result).toEqual([(r) => 3]);
    });
    it(`takes 123 with other params`, () => {
      const result = swissak.safe.arrOf.func(123 as any, (q) => 2, [(r) => 3]);
      expect(result).toEqual([(r) => 3]);
    });
    it(`takes 'foobar' with other params`, () => {
      const result = swissak.safe.arrOf.func('foobar' as any, (q) => 2, [(r) => 3]);
      expect(result).toEqual([(r) => 3]);
    });
    it(`takes {foo: 'bar'} with other params`, () => {
      const result = swissak.safe.arrOf.func({ foo: 'bar' } as any, (q) => 2, [(r) => 3]);
      expect(result).toEqual([(r) => 3]);
    });
    it(`takes null with other params`, () => {
      const result = swissak.safe.arrOf.func(null as any, (q) => 2, [(r) => 3]);
      expect(result).toEqual([(r) => 3]);
    });
    it(`takes undefined with other params`, () => {
      const result = swissak.safe.arrOf.func(undefined as any, (q) => 2, [(r) => 3]);
      expect(result).toEqual([(r) => 3]);
    });
  });

  describe('safe.arrOf.obj', () => {
    it(`takes [{foo: 1}, {bar: 2}]`, () => {
      const result = swissak.safe.arrOf.obj([{ foo: 1 }, { bar: 2 }] as any);
      expect(result).toEqual([{ foo: 1 }, { bar: 2 }]);
    });
    it(`takes ['foo', 1, true, null, undefined, [], {}]`, () => {
      const result = swissak.safe.arrOf.obj(['foo', 1, true, null, undefined, [], {}] as any);
      expect(result).toEqual([{}, {}, {}, {}, {}, [], {}]);
    });
    it(`takes true`, () => {
      const result = swissak.safe.arrOf.obj(true as any);
      expect(result).toEqual([]);
    });
    it(`takes false`, () => {
      const result = swissak.safe.arrOf.obj(false as any);
      expect(result).toEqual([]);
    });
    it(`takes 123`, () => {
      const result = swissak.safe.arrOf.obj(123 as any);
      expect(result).toEqual([]);
    });
    it(`takes 'foobar'`, () => {
      const result = swissak.safe.arrOf.obj('foobar' as any);
      expect(result).toEqual([]);
    });
    it(`takes {foo: 'bar'}`, () => {
      const result = swissak.safe.arrOf.obj({ foo: 'bar' } as any);
      expect(result).toEqual([]);
    });
    it(`takes null`, () => {
      const result = swissak.safe.arrOf.obj(null as any);
      expect(result).toEqual([]);
    });
    it(`takes undefined`, () => {
      const result = swissak.safe.arrOf.obj(undefined as any);
      expect(result).toEqual([]);
    });
    it(`takes [{foo: 1}, {bar: 2}] with other params`, () => {
      const result = swissak.safe.arrOf.obj([{ foo: 1 }, { bar: 2 }] as any, { l: 3 }, [{ i: 4 }]);
      expect(result).toEqual([{ foo: 1 }, { bar: 2 }]);
    });
    it(`takes ['foo', 1, true, null, undefined, [], {}] with other params`, () => {
      const result = swissak.safe.arrOf.obj(['foo', 1, true, null, undefined, [], {}] as any, { l: 3 }, [{ i: 4 }]);
      expect(result).toEqual([{ l: 3 }, { l: 3 }, { l: 3 }, { l: 3 }, { l: 3 }, [], { l: 3 }]);
    });
    it(`takes true with other params`, () => {
      const result = swissak.safe.arrOf.obj(true as any, { l: 3 }, [{ i: 4 }]);
      expect(result).toEqual([{ i: 4 }]);
    });
    it(`takes false with other params`, () => {
      const result = swissak.safe.arrOf.obj(false as any, { l: 3 }, [{ i: 4 }]);
      expect(result).toEqual([{ i: 4 }]);
    });
    it(`takes 123 with other params`, () => {
      const result = swissak.safe.arrOf.obj(123 as any, { l: 3 }, [{ i: 4 }]);
      expect(result).toEqual([{ i: 4 }]);
    });
    it(`takes 'foobar' with other params`, () => {
      const result = swissak.safe.arrOf.obj('foobar' as any, { l: 3 }, [{ i: 4 }]);
      expect(result).toEqual([{ i: 4 }]);
    });
    it(`takes {foo: 'bar'} with other params`, () => {
      const result = swissak.safe.arrOf.obj({ foo: 'bar' } as any, { l: 3 }, [{ i: 4 }]);
      expect(result).toEqual([{ i: 4 }]);
    });
    it(`takes null with other params`, () => {
      const result = swissak.safe.arrOf.obj(null as any, { l: 3 }, [{ i: 4 }]);
      expect(result).toEqual([{ i: 4 }]);
    });
    it(`takes undefined with other params`, () => {
      const result = swissak.safe.arrOf.obj(undefined as any, { l: 3 }, [{ i: 4 }]);
      expect(result).toEqual([{ i: 4 }]);
    });
  });

  describe('safe.arrOf.arr', () => {
    it(`takes [['foo'], ['bar']]`, () => {
      const result = swissak.safe.arrOf.arr([['foo'], ['bar']] as any);
      expect(result).toEqual([['foo'], ['bar']]);
    });
    it(`takes ['foo', 1, true, null, undefined, [], {}]`, () => {
      const result = swissak.safe.arrOf.arr(['foo', 1, true, null, undefined, [], {}] as any);
      expect(result).toEqual([[], [], [], [], [], [], []]);
    });
    it(`takes true`, () => {
      const result = swissak.safe.arrOf.arr(true as any);
      expect(result).toEqual([]);
    });
    it(`takes false`, () => {
      const result = swissak.safe.arrOf.arr(false as any);
      expect(result).toEqual([]);
    });
    it(`takes 123`, () => {
      const result = swissak.safe.arrOf.arr(123 as any);
      expect(result).toEqual([]);
    });
    it(`takes 'foobar'`, () => {
      const result = swissak.safe.arrOf.arr('foobar' as any);
      expect(result).toEqual([]);
    });
    it(`takes {foo: 'bar'}`, () => {
      const result = swissak.safe.arrOf.arr({ foo: 'bar' } as any);
      expect(result).toEqual([]);
    });
    it(`takes null`, () => {
      const result = swissak.safe.arrOf.arr(null as any);
      expect(result).toEqual([]);
    });
    it(`takes undefined`, () => {
      const result = swissak.safe.arrOf.arr(undefined as any);
      expect(result).toEqual([]);
    });
    it(`takes [['foo'], ['bar']] with other params`, () => {
      const result = swissak.safe.arrOf.arr([['foo'], ['bar']] as any, ['baz'], [['IPSUM']]);
      expect(result).toEqual([['foo'], ['bar']]);
    });
    it(`takes ['foo', 1, true, null, undefined, [], {}] with other params`, () => {
      const result = swissak.safe.arrOf.arr(['foo', 1, true, null, undefined, [], {}] as any, ['baz'], [['IPSUM']]);
      expect(result).toEqual([['baz'], ['baz'], ['baz'], ['baz'], ['baz'], [], ['baz']]);
    });
    it(`takes true with other params`, () => {
      const result = swissak.safe.arrOf.arr(true as any, ['baz'], [['IPSUM']]);
      expect(result).toEqual([['IPSUM']]);
    });
    it(`takes false with other params`, () => {
      const result = swissak.safe.arrOf.arr(false as any, ['baz'], [['IPSUM']]);
      expect(result).toEqual([['IPSUM']]);
    });
    it(`takes 123 with other params`, () => {
      const result = swissak.safe.arrOf.arr(123 as any, ['baz'], [['IPSUM']]);
      expect(result).toEqual([['IPSUM']]);
    });
    it(`takes 'foobar' with other params`, () => {
      const result = swissak.safe.arrOf.arr('foobar' as any, ['baz'], [['IPSUM']]);
      expect(result).toEqual([['IPSUM']]);
    });
    it(`takes {foo: 'bar'} with other params`, () => {
      const result = swissak.safe.arrOf.arr({ foo: 'bar' } as any, ['baz'], [['IPSUM']]);
      expect(result).toEqual([['IPSUM']]);
    });
    it(`takes null with other params`, () => {
      const result = swissak.safe.arrOf.arr(null as any, ['baz'], [['IPSUM']]);
      expect(result).toEqual([['IPSUM']]);
    });
    it(`takes undefined with other params`, () => {
      const result = swissak.safe.arrOf.arr(undefined as any, ['baz'], [['IPSUM']]);
      expect(result).toEqual([['IPSUM']]);
    });
  });
});
