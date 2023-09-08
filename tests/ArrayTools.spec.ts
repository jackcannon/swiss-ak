import * as swissak from '../';
import { multiTest } from './test-utils';

describe('ArrayTools', () => {
  describe('create', () => {
    multiTest(
      [
        [swissak.create, 'create'],
        [swissak.ArrayTools.create, 'ArrayTools.create'],
        [swissak.filled, 'filled'],
        [swissak.ArrayTools.filled, 'ArrayTools.filled']
      ],
      (create, name) => {
        it(`exists as '${name}'`, () => {
          expect(create).toBeDefined();
        });

        it(`[${name}] creates an array of the correct length`, () => {
          const array = create(10);
          expect(array.length).toBe(10);
        });
        it(`[${name}] creates an array with the values filled`, () => {
          const array = create(10, 999);
          expect(array).toEqual([999, 999, 999, 999, 999, 999, 999, 999, 999, 999]);
        });

        it(`[${name}] handles a negative length`, () => {
          const array = create(-10);
          expect(array.length).toBe(0);
        });
        it(`[${name}] handles a negative length with a fill value`, () => {
          const array = create(-10, 999);
          expect(array.length).toBe(0);
        });
        it(`[${name}] handles a zero length`, () => {
          const array = create(0);
          expect(array.length).toBe(0);
        });
        it(`[${name}] handles a NaN length`, () => {
          const array = create(NaN);
          expect(array.length).toBe(0);
        });
        it(`[${name}] handles an undefined length`, () => {
          const array = create(undefined as any);
          expect(array.length).toBe(1);
        });
      }
    );
  });
  describe('range', () => {
    multiTest(
      [
        [swissak.range, 'range'],
        [swissak.ArrayTools.range, 'ArrayTools.range']
      ],
      (range, name) => {
        it(`exists as '${name}'`, () => {
          expect(range).toBeDefined();
        });

        it(`[${name}] creates an array of the correct length`, () => {
          const array = range(10);
          expect(array.length).toBe(10);
        });
        it(`[${name}] creates an array with the correct multiplier`, () => {
          const array = range(10, 5);
          expect(array).toEqual([0, 5, 10, 15, 20, 25, 30, 35, 40, 45]);
        });
        it(`[${name}] creates an array with the correct offset`, () => {
          const array = range(10, 1, 2);
          expect(array).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
        });

        // handle length
        it(`[${name}] handles a zero length`, () => {
          const array = range(0);
          expect(array.length).toBe(0);
        });
        it(`[${name}] handles a decimal length`, () => {
          const array = range(10.5);
          expect(array.length).toBe(10);
        });
        it(`[${name}] handles a negative length`, () => {
          const array = range(-10);
          expect(array.length).toBe(0);
        });
        it(`[${name}] handles a NaN length`, () => {
          const array = range(NaN);
          expect(array.length).toBe(0);
        });
        it(`[${name}] handles an undefined length`, () => {
          const array = range(undefined as any);
          expect(array.length).toBe(1);
        });

        // handle multiplier
        it(`[${name}] handles a zero multiplier`, () => {
          const array = range(10, 0);
          expect(array).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        });
        it(`[${name}] handles a decimal multiplier`, () => {
          const array = range(10, 0.5);
          expect(array).toEqual([0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]);
        });
        it(`[${name}] handles a negative multiplier`, () => {
          const array = range(10, -2);
          expect(array).toEqual([0, -2, -4, -6, -8, -10, -12, -14, -16, -18]);
        });
        it(`[${name}] handles a NaN multiplier`, () => {
          const array = range(10, NaN);
          expect(array).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        });
        it(`[${name}] handles an undefined multiplier`, () => {
          const array = range(10, undefined as any);
          expect(array).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });

        // handle offset
        it(`[${name}] handles a zero offset`, () => {
          const array = range(10, 2, 0);
          expect(array).toEqual([0, 2, 4, 6, 8, 10, 12, 14, 16, 18]);
        });
        it(`[${name}] handles a decimal offset`, () => {
          const array = range(10, 2, 0.5);
          expect(array).toEqual([0.5, 2.5, 4.5, 6.5, 8.5, 10.5, 12.5, 14.5, 16.5, 18.5]);
        });
        it(`[${name}] handles a negative offset`, () => {
          const array = range(10, 2, -3);
          expect(array).toEqual([-3, -1, 1, 3, 5, 7, 9, 11, 13, 15]);
        });
        it(`[${name}] handles a NaN offset`, () => {
          const array = range(10, 2, NaN);
          expect(array).toEqual([0, 2, 4, 6, 8, 10, 12, 14, 16, 18]);
        });
        it(`[${name}] handles an undefined offset`, () => {
          const array = range(10, 2, undefined as any);
          expect(array).toEqual([0, 2, 4, 6, 8, 10, 12, 14, 16, 18]);
        });
      }
    );
  });
  describe('zip', () => {
    multiTest(
      [
        [swissak.zip, 'zip'],
        [swissak.ArrayTools.zip, 'ArrayTools.zip']
      ],
      (zip, name) => {
        it(`exists as '${name}'`, () => {
          expect(zip).toBeDefined();
        });

        it(`[${name}] zips 2 arrays`, () => {
          const array = zip([1, 2, 3], [4, 5, 6]);
          expect(array).toEqual([
            [1, 4],
            [2, 5],
            [3, 6]
          ]);
        });
        it(`[${name}] zips 3 arrays`, () => {
          const array = zip([1, 2, 3], [4, 5, 6], [7, 8, 9]);
          expect(array).toEqual([
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9]
          ]);
        });

        it(`[${name}] zips uneven arrays`, () => {
          const array = zip([1, 2, 3], [4, 5, 6, 7, 8, 9]);
          expect(array).toEqual([
            [1, 4],
            [2, 5],
            [3, 6]
          ]);
        });
        it(`[${name}] handles empty arrays`, () => {
          const array = zip([], []);
          expect(array).toEqual([]);
        });
        it(`[${name}] handles non-array params`, () => {
          const array = zip([1, 2, 3], 4);
          expect(array).toEqual([]);
        });
      }
    );
  });
  describe('zipMax', () => {
    multiTest(
      [
        [swissak.zipMax, 'zipMax'],
        [swissak.ArrayTools.zipMax, 'ArrayTools.zipMax']
      ],
      (zipMax, name) => {
        it(`exists as '${name}'`, () => {
          expect(zipMax).toBeDefined();
        });

        it(`[${name}] zips 2 arrays`, () => {
          const array = zipMax([1, 2, 3], [4, 5, 6]);
          expect(array).toEqual([
            [1, 4],
            [2, 5],
            [3, 6]
          ]);
        });
        it(`[${name}] zips 3 arrays`, () => {
          const array = zipMax([1, 2, 3], [4, 5, 6], [7, 8, 9]);
          expect(array).toEqual([
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9]
          ]);
        });

        it(`[${name}] zips uneven arrays`, () => {
          const array = zipMax([1, 2, 3], [4, 5, 6, 7, 8, 9]);
          expect(array).toEqual([
            [1, 4],
            [2, 5],
            [3, 6],
            [undefined, 7],
            [undefined, 8],
            [undefined, 9]
          ]);
        });
        it(`[${name}] handles empty arrays`, () => {
          const array = zipMax([], []);
          expect(array).toEqual([]);
        });
        it(`[${name}] handles non-array params`, () => {
          const array = zipMax([1, 2, 3], 4);
          expect(array).toEqual([
            [1, undefined],
            [2, undefined],
            [3, undefined]
          ]);
        });
      }
    );
  });
  describe('sortByMapped', () => {
    multiTest(
      [
        [swissak.sortByMapped, 'sortByMapped'],
        [swissak.ArrayTools.sortByMapped, 'ArrayTools.sortByMapped']
      ],
      (sortByMapped, name) => {
        it(`exists as '${name}'`, () => {
          expect(sortByMapped).toBeDefined();
        });

        it(`[${name}] sorts an array by a mapped value`, () => {
          const array = [
            { name: 'a', value: 3 },
            { name: 'b', value: 1 },
            { name: 'c', value: 2 }
          ];

          const sorted = sortByMapped(array, (item) => item.value);

          expect(sorted).toEqual([
            { name: 'b', value: 1 },
            { name: 'c', value: 2 },
            { name: 'a', value: 3 }
          ]);
        });

        it(`[${name}] sorts an array in desc by a mapped value`, () => {
          const array = [
            { name: 'a', value: 3 },
            { name: 'b', value: 1 },
            { name: 'c', value: 2 }
          ];

          const sorted = sortByMapped(array, (item) => item.value, swissak.fn.desc);

          expect(sorted).toEqual([
            { name: 'a', value: 3 },
            { name: 'c', value: 2 },
            { name: 'b', value: 1 }
          ]);
        });

        it(`[${name}] handles mapFn being non-Function`, () => {
          const array = [3, 1, 2];

          const sorted = sortByMapped(array, 'value' as any);

          expect(sorted).toEqual([1, 2, 3]);
        });

        it(`[${name}] handles sortFn being non-Function`, () => {
          const array = [
            { name: 'a', value: 3 },
            { name: 'b', value: 1 },
            { name: 'c', value: 2 }
          ];

          const sorted = sortByMapped(array, (item) => item.value, 'value' as any);

          expect(sorted).toEqual([
            { name: 'b', value: 1 },
            { name: 'c', value: 2 },
            { name: 'a', value: 3 }
          ]);
        });
      }
    );
  });
  describe('randomise', () => {
    multiTest(
      [
        [swissak.randomise, 'randomise'],
        [swissak.ArrayTools.randomise, 'ArrayTools.randomise']
      ],
      (randomise, name) => {
        it(`exists as '${name}'`, () => {
          expect(randomise).toBeDefined();
        });

        it(`[${name}] randomises an array`, () => {
          const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
          const randomised = randomise(array);
          expect(randomised.length).toBe(array.length);
          expect(randomised).not.toEqual(array);
        });

        it(`[${name}] handles empty arrays`, () => {
          const array = [];
          const randomised = randomise(array);
          expect(randomised.length).toBe(0);
          expect(randomised).toEqual(array);
        });

        it(`[${name}] handles non-array params`, () => {
          const array = 999;
          const randomised = randomise(array as any);
          expect(randomised.length).toBe(0);
          expect(randomised).toEqual([]);
        });
      }
    );
  });
  describe('reverse', () => {
    multiTest(
      [
        [swissak.reverse, 'reverse'],
        [swissak.ArrayTools.reverse, 'ArrayTools.reverse']
      ],
      (reverse, name) => {
        it(`exists as '${name}'`, () => {
          expect(reverse).toBeDefined();
        });
        it(`[${name}] reverses an array`, () => {
          const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
          const reversed = reverse(array);
          expect(reversed).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);
        });

        it(`[${name}] handles empty arrays`, () => {
          const array = [];
          const reversed = reverse(array);
          expect(reversed).toEqual([]);
        });

        it(`[${name}] handles non-array params`, () => {
          const array = 999;
          const reversed = reverse(array as any);
          expect(reversed).toEqual([]);
        });
      }
    );
  });
  describe('entries', () => {
    multiTest(
      [
        [swissak.entries, 'entries'],
        [swissak.ArrayTools.entries, 'ArrayTools.entries']
      ],
      (entries, name) => {
        it(`exists as '${name}'`, () => {
          expect(entries).toBeDefined();
        });
        it(`[${name}] returns an array of entries`, () => {
          const array = ['a', 'b', 'c'];
          const entriesArray = entries(array);
          expect(entriesArray).toEqual([
            [0, 'a'],
            [1, 'b'],
            [2, 'c']
          ]);
        });
        it(`[${name}] returns an empty array`, () => {
          const array = [];
          const entriesArray = entries(array);
          expect(entriesArray).toEqual([]);
        });
        it(`[${name}] returns an empty array for non-array params`, () => {
          const array = 999;
          const entriesArray = entries(array as any);
          expect(entriesArray).toEqual([]);
        });
      }
    );
  });
  describe('repeat', () => {
    multiTest(
      [
        [swissak.repeat, 'repeat'],
        [swissak.ArrayTools.repeat, 'ArrayTools.repeat']
      ],
      (repeat, name) => {
        it(`exists as '${name}'`, () => {
          expect(repeat).toBeDefined();
        });
        it(`[${name}] returns an array of repeated values`, () => {
          const array = repeat(3, 'a');
          expect(array).toEqual(['a', 'a', 'a']);
        });
        it(`[${name}] returns an array of multiple repeating values`, () => {
          const array = repeat(6, 'a', 'b', 'c');
          expect(array).toEqual(['a', 'b', 'c', 'a', 'b', 'c']);
        });

        // handles count
        it(`[${name}] handles a zero count`, () => {
          const array = repeat(0, 'a');
          expect(array).toEqual([]);
        });
        it(`[${name}] handles a decimal count`, () => {
          const array = repeat(3.5, 'a');
          expect(array).toEqual(['a', 'a', 'a']);
        });
        it(`[${name}] handles a negative count`, () => {
          const array = repeat(-3, 'a');
          expect(array).toEqual([]);
        });
        it(`[${name}] handles a NaN count`, () => {
          const array = repeat(NaN, 'a');
          expect(array).toEqual([]);
        });
        it(`[${name}] handles an undefined count`, () => {
          const array = repeat(undefined as any, 'a');
          expect(array).toEqual([]);
        });

        // handles items
        it(`[${name}] handles no items`, () => {
          const array = repeat(3);
          expect(array).toEqual([]);
          expect(array.length).toBe(3);
        });
      }
    );
  });
  describe('roll', () => {
    multiTest(
      [
        [swissak.roll, 'roll'],
        [swissak.ArrayTools.roll, 'ArrayTools.roll']
      ],
      (roll, name) => {
        it(`exists as '${name}'`, () => {
          expect(roll).toBeDefined();
        });
        it(`[${name}] returns an array of rolled values`, () => {
          const array = roll(3, [1, 2, 3, 4, 5]);
          expect(array).toEqual([4, 5, 1, 2, 3]);
        });

        // handles count
        it(`[${name}] handles a zero count`, () => {
          const array = roll(0, [1, 2, 3, 4, 5]);
          expect(array).toEqual([1, 2, 3, 4, 5]);
        });
        it(`[${name}] handles a decimal count`, () => {
          const array = roll(3.5, [1, 2, 3, 4, 5]);
          expect(array).toEqual([4, 5, 1, 2, 3]);
        });
        it(`[${name}] handles a negative count`, () => {
          const array = roll(-3, [1, 2, 3, 4, 5]);
          expect(array).toEqual([3, 4, 5, 1, 2]);
        });
        it(`[${name}] handles a NaN count`, () => {
          const array = roll(NaN, [1, 2, 3, 4, 5]);
          expect(array).toEqual([1, 2, 3, 4, 5]);
        });
        it(`[${name}] handles an undefined count`, () => {
          const array = roll(undefined as any, [1, 2, 3, 4, 5]);
          expect(array).toEqual([1, 2, 3, 4, 5]);
        });

        // handles arr
        it(`[${name}] handles empty array`, () => {
          const array = roll(3, []);
          expect(array).toEqual([]);
        });
        it(`[${name}] handles non-array`, () => {
          const array = roll(3, 999 as any);
          expect(array).toEqual([]);
        });
      }
    );
  });
  describe('sortNumberedText', () => {
    multiTest(
      [
        [swissak.sortNumberedText, 'sortNumberedText'],
        [swissak.ArrayTools.sortNumberedText, 'ArrayTools.sortNumberedText']
      ],
      (sortNumberedText, name) => {
        it(`exists as '${name}'`, () => {
          expect(sortNumberedText).toBeDefined();
        });
        it(`[${name}] sorts an array of numbered strings`, () => {
          const names = ['name1', 'name10', 'name2', 'foo20', 'foo10', 'foo9'];
          const result = sortNumberedText(names);
          expect(result).toEqual(['foo9', 'foo10', 'foo20', 'name1', 'name2', 'name10']);
        });

        it(`[${name}] correctly ignores the case - be default`, () => {
          const names = ['nAme1', 'Name10', 'naMe2', 'fOo20', 'Foo10', 'foO9'];
          const result = sortNumberedText(names);
          expect(result).toEqual(['foO9', 'Foo10', 'fOo20', 'nAme1', 'naMe2', 'Name10']);
        });
        it(`[${name}] correctly ignores the case - explicit`, () => {
          const names = ['nAme1', 'Name10', 'naMe2', 'fOo20', 'Foo10', 'foO9'];
          const result = sortNumberedText(names, true);
          expect(result).toEqual(['foO9', 'Foo10', 'fOo20', 'nAme1', 'naMe2', 'Name10']);
        });
        it(`[${name}] correctly sorts by case when ignoreCase is false`, () => {
          const names = ['nAme1', 'Name10', 'naMe2', 'fOo20', 'Foo10', 'foO9'];
          const result = sortNumberedText(names, false);
          expect(result).toEqual(['Foo10', 'Name10', 'fOo20', 'foO9', 'nAme1', 'naMe2']);
        });

        it(`[${name}] handles empty arrays`, () => {
          const names = [];
          const result = sortNumberedText(names);
          expect(result).toEqual([]);
        });
        it(`[${name}] handles non-array params`, () => {
          const names = 999;
          const result = sortNumberedText(names as any);
          expect(result).toEqual([]);
        });
        it(`[${name}] handles non-string items`, () => {
          const names = [999, 999, 999];
          const result = sortNumberedText(names as any);
          expect(result).toEqual(['', '', '']);
        });
        it(`[${name}] handles non-numbered strings`, () => {
          const names = ['bar', 'name', 'foo'];
          const result = sortNumberedText(names);
          expect(result).toEqual(['bar', 'foo', 'name']);
        });
        it(`[${name}] handles non-boolean ignoreCase`, () => {
          const names = ['name1', 'name10', 'name2', 'foo20', 'foo10', 'foo9'];
          const result = sortNumberedText(names, 999 as any);
          expect(result).toEqual(['foo9', 'foo10', 'foo20', 'name1', 'name2', 'name10']);
        });
      }
    );
  });
  describe('partition', () => {
    multiTest(
      [
        [swissak.partition, 'partition'],
        [swissak.ArrayTools.partition, 'ArrayTools.partition']
      ],
      (partition, name) => {
        it(`exists as '${name}'`, () => {
          expect(partition).toBeDefined();
        });
        it(`[${name}] partitions an array`, () => {
          const result = partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
          expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
        });

        // handle array
        it(`[${name}] handles empty arrays`, () => {
          const result = partition([], 3);
          expect(result).toEqual([]);
        });
        it(`[${name}] handles non-array params`, () => {
          const result = partition(999 as any, 3);
          expect(result).toEqual([]);
        });

        // partitionSize defaults
        it(`[${name}] partitionSize defaults to half - 8`, () => {
          const result = partition([1, 2, 3, 4, 5, 6, 7, 8], undefined as any);
          expect(result).toEqual([
            [1, 2, 3, 4],
            [5, 6, 7, 8]
          ]);
        });
        it(`[${name}] partitionSize defaults to half - 15`, () => {
          const result = partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], undefined as any);
          expect(result).toEqual([
            [1, 2, 3, 4, 5, 6, 7, 8],
            [9, 10, 11, 12, 13, 14, 15]
          ]);
        });

        // handle partitionSize
        it(`[${name}] handles zero partitionSize`, () => {
          const result = partition([1, 2, 3, 4, 5], 0);
          expect(result).toEqual([[1], [2], [3], [4], [5]]);
        });
        it(`[${name}] handles decimal partitionSize`, () => {
          const result = partition([1, 2, 3, 4, 5], 3.5);
          expect(result).toEqual([
            [1, 2, 3],
            [4, 5]
          ]);
        });
        it(`[${name}] handles negative partitionSize`, () => {
          const result = partition([1, 2, 3, 4, 5], -3);
          expect(result).toEqual([[1], [2], [3], [4], [5]]);
        });
        it(`[${name}] handles NaN partitionSize`, () => {
          const result = partition([1, 2, 3, 4, 5], NaN);
          expect(result).toEqual([[1], [2], [3], [4], [5]]);
        });
        it(`[${name}] handles undefined partitionSize`, () => {
          const result = partition([1, 2, 3, 4, 5], undefined as any);
          expect(result).toEqual([
            [1, 2, 3],
            [4, 5]
          ]);
        });
      }
    );
  });
  describe('groupObj', () => {
    multiTest(
      [
        [swissak.groupObj, 'groupObj'],
        [swissak.ArrayTools.groupObj, 'ArrayTools.groupObj']
      ],
      (groupObj, name) => {
        it(`exists as '${name}'`, () => {
          expect(groupObj).toBeDefined();
        });
        it(`[${name}] groups an array of objects`, () => {
          const arr = [
            { group: 1, name: 'a' },
            { group: 2, name: 'b' },
            { group: 1, name: 'c' }
          ];
          const result = groupObj(arr, (item) => item.group);
          expect(result).toEqual({
            '1': [
              { group: 1, name: 'a' },
              { group: 1, name: 'c' }
            ],
            '2': [{ group: 2, name: 'b' }]
          });
        });

        it(`[${name}] handles empty arrays`, () => {
          const arr = [];
          const result = groupObj(arr, (item) => item.group);
          expect(result).toEqual({});
        });
        it(`[${name}] handles non-array params`, () => {
          const arr = 999;
          const result = groupObj(arr as any, (item) => (item as any).group);
          expect(result).toEqual({});
        });
        it(`[${name}] handles non-function mapFn`, () => {
          const arr = ['a', 'a', 'b', 'c'];
          const result = groupObj(arr, 'group' as any);
          expect(result).toEqual({ a: ['a', 'a'], b: ['b'], c: ['c'] });
        });
      }
    );
  });
  describe('group', () => {
    multiTest(
      [
        [swissak.group, 'group'],
        [swissak.ArrayTools.group, 'ArrayTools.group']
      ],
      (group, name) => {
        it(`exists as '${name}'`, () => {
          expect(group).toBeDefined();
        });
        it(`[${name}] groups an array`, () => {
          const arr = [
            { group: 1, name: 'a' },
            { group: 2, name: 'b' },
            { group: 1, name: 'c' }
          ];
          const result = group(arr, (item) => item.group);
          expect(result).toEqual([
            [
              { group: 1, name: 'a' },
              { group: 1, name: 'c' }
            ],
            [{ group: 2, name: 'b' }]
          ]);
        });
        it(`[${name}] handles empty arrays`, () => {
          const arr = [];
          const result = group(arr, (item) => item.group);
          expect(result).toEqual([]);
        });
        it(`[${name}] handles non-array params`, () => {
          const arr = 999;
          const result = group(arr as any, (item) => (item as any).group);
          expect(result).toEqual([]);
        });
        it(`[${name}] handles non-function mapFn`, () => {
          const arr = ['a', 'a', 'b', 'c'];
          const result = group(arr, 'group' as any);
          expect(result).toEqual([['a', 'a'], ['b'], ['c']]);
        });
      }
    );
  });
  describe('findAndRemove', () => {
    it(`exists as 'ArrayTools.findAndRemove'`, () => {
      expect(swissak.ArrayTools.findAndRemove).toBeDefined();
    });
    it(`finds the correct item and remove it`, () => {
      const array = [1, 2, 999, 4, 5, 6, 7, 8, 999, 0];
      const result = swissak.ArrayTools.findAndRemove(array, (item) => item === 999);
      expect(result).toBe(999);
      expect(array).toEqual([1, 2, 4, 5, 6, 7, 8, 999, 0]);
    });
    it(`returns undefined if not found`, () => {
      const array = [1, 2, 999, 4, 5, 6, 7, 8, 999, 0];
      const result = swissak.ArrayTools.findAndRemove(array, (item) => item === 666);
      expect(result).toBeUndefined();
      expect(array).toEqual([1, 2, 999, 4, 5, 6, 7, 8, 999, 0]);
    });
    it(`inserts provided items in place of removed items`, () => {
      const array = [1, 2, 999, 4, 5, 6, 7, 8, 999, 0];
      const result = swissak.ArrayTools.findAndRemove(array, (item) => item === 999, 111, 222, 333);
      expect(result).toBe(999);
      expect(array).toEqual([1, 2, 111, 222, 333, 4, 5, 6, 7, 8, 999, 0]);
    });
    it(`ignores insertItems if nothing found`, () => {
      const array = [1, 2, 999, 4, 5, 6, 7, 8, 999, 0];
      const result = swissak.ArrayTools.findAndRemove(array, (item) => item === 666, 111, 222, 333);
      expect(result).toBeUndefined();
      expect(array).toEqual([1, 2, 999, 4, 5, 6, 7, 8, 999, 0]);
    });

    // handle array
    it(`handles empty arrays`, () => {
      const array = [];
      const result = swissak.ArrayTools.findAndRemove(array, (item) => item === 999);
      expect(result).toEqual(undefined);
      expect(array).toEqual([]);
    });
    it(`handles non-array params`, () => {
      const array = 999 as any;
      const result = swissak.ArrayTools.findAndRemove(array, (item) => item === 999);
      expect(result).toEqual(undefined);
      expect(array).toEqual(999);
    });

    // handle predicate function
    it(`handles non-function predicate`, () => {
      const array = [1, 2, 3];
      const result = swissak.ArrayTools.findAndRemove(array, 999 as any);
      expect(result).toEqual(undefined);
      expect(array).toEqual([1, 2, 3]);
    });

    // handle insertItems
    it(`handles non-type matching insertItems`, () => {
      const array = [1, 2, 3];
      const result = swissak.ArrayTools.findAndRemove(array, (item) => item === 2, 'a' as any, 'b' as any);
      expect(result).toEqual(2);
      expect(array).toEqual([1, 'a', 'b', 3]);
    });
  });
  describe('findLastAndRemove', () => {
    it(`exists as 'ArrayTools.findLastAndRemove'`, () => {
      expect(swissak.ArrayTools.findLastAndRemove).toBeDefined();
    });
    it(`finds the correct item and remove it`, () => {
      const array = [1, 2, 999, 4, 5, 6, 7, 8, 999, 0];
      const result = swissak.ArrayTools.findLastAndRemove(array, (item) => item === 999);
      expect(result).toBe(999);
      expect(array).toEqual([1, 2, 999, 4, 5, 6, 7, 8, 0]);
    });
    it(`returns undefined if not found`, () => {
      const array = [1, 2, 999, 4, 5, 6, 7, 8, 999, 0];
      const result = swissak.ArrayTools.findLastAndRemove(array, (item) => item === 666);
      expect(result).toBeUndefined();
      expect(array).toEqual([1, 2, 999, 4, 5, 6, 7, 8, 999, 0]);
    });
    it(`inserts provided items in place of removed items`, () => {
      const array = [1, 2, 999, 4, 5, 6, 7, 8, 999, 0];
      const result = swissak.ArrayTools.findLastAndRemove(array, (item) => item === 999, 111, 222, 333);
      expect(result).toBe(999);
      expect(array).toEqual([1, 2, 999, 4, 5, 6, 7, 8, 111, 222, 333, 0]);
    });
    it(`ignores insertItems if nothing found`, () => {
      const array = [1, 2, 999, 4, 5, 6, 7, 8, 999, 0];
      const result = swissak.ArrayTools.findLastAndRemove(array, (item) => item === 666, 111, 222, 333);
      expect(result).toBeUndefined();
      expect(array).toEqual([1, 2, 999, 4, 5, 6, 7, 8, 999, 0]);
    });

    // handle array
    it(`handles empty arrays`, () => {
      const array = [];
      const result = swissak.ArrayTools.findLastAndRemove(array, (item) => item === 999);
      expect(result).toEqual(undefined);
      expect(array).toEqual([]);
    });
    it(`handles non-array params`, () => {
      const array = 999 as any;
      const result = swissak.ArrayTools.findLastAndRemove(array, (item) => item === 999);
      expect(result).toEqual(undefined);
      expect(array).toEqual(999);
    });

    // handle predicate function
    it(`handles non-function predicate`, () => {
      const array = [1, 2, 3];
      const result = swissak.ArrayTools.findLastAndRemove(array, 999 as any);
      expect(result).toEqual(undefined);
      expect(array).toEqual([1, 2, 3]);
    });

    // handle insertItems
    it(`handles non-type matching insertItems`, () => {
      const array = [1, 2, 3];
      const result = swissak.ArrayTools.findLastAndRemove(array, (item) => item === 2, 'a' as any, 'b' as any);
      expect(result).toEqual(2);
      expect(array).toEqual([1, 'a', 'b', 3]);
    });
  });
  describe('filterAndRemove', () => {
    it(`exists as 'ArrayTools.filterAndRemove'`, () => {
      expect(swissak.ArrayTools.filterAndRemove).toBeDefined();
    });
    it(`finds the correct item and remove it`, () => {
      const array = [1, 2, 999, 4, 5, 6, 7, 8, 999, 0];
      const result = swissak.ArrayTools.filterAndRemove(array, (item) => item === 999);
      expect(result).toEqual([999, 999]);
      expect(array).toEqual([1, 2, 4, 5, 6, 7, 8, 0]);
    });
    it(`returns empty array if not found`, () => {
      const array = [1, 2, 999, 4, 5, 6, 7, 8, 999, 0];
      const result = swissak.ArrayTools.filterAndRemove(array, (item) => item === 666);
      expect(result).toEqual([]);
      expect(array).toEqual([1, 2, 999, 4, 5, 6, 7, 8, 999, 0]);
    });

    // handle array
    it(`handles empty arrays`, () => {
      const array = [];
      const result = swissak.ArrayTools.filterAndRemove(array, (item) => item === 999);
      expect(result).toEqual([]);
      expect(array).toEqual([]);
    });
    it(`handles non-array params`, () => {
      const array = 999 as any;
      const result = swissak.ArrayTools.filterAndRemove(array, (item) => item === 999);
      expect(result).toEqual([]);
      expect(array).toEqual(999);
    });

    // handle predicate function
    it(`handles non-function predicate`, () => {
      const array = [1, 2, 3];
      const result = swissak.ArrayTools.filterAndRemove(array, 999 as any);
      expect(result).toEqual([]);
      expect(array).toEqual([1, 2, 3]);
    });
  });

  describe('utils', () => {
    it(`exists as 'ArrayTools.utils'`, () => {
      expect(swissak.ArrayTools.utils).toBeDefined();
    });
    describe('isNumString', () => {
      it(`exists as 'ArrayTools.utils.isNumString'`, () => {
        expect(swissak.ArrayTools.utils.isNumString).toBeDefined();
      });

      it(`returns true for a number string`, () => {
        expect(swissak.ArrayTools.utils.isNumString('123')).toBe(true);
      });
      it(`returns false for a letter-only string`, () => {
        expect(swissak.ArrayTools.utils.isNumString('abc')).toBe(false);
      });
      it(`returns false for a mixed string`, () => {
        expect(swissak.ArrayTools.utils.isNumString('a123')).toBe(false);
      });
      it(`handles non-string item - number`, () => {
        expect(swissak.ArrayTools.utils.isNumString(123 as any)).toBe(false);
      });
      it(`handles non-string item - boolean`, () => {
        expect(swissak.ArrayTools.utils.isNumString(true as any)).toBe(false);
      });
    });
    describe('partitionNums', () => {
      it(`exists as 'ArrayTools.utils.partitionNums'`, () => {
        expect(swissak.ArrayTools.utils.partitionNums).toBeDefined();
      });

      it(`returns an array of numbers and strings`, () => {
        const result = swissak.ArrayTools.utils.partitionNums(false)('abc123def');
        expect(result).toEqual(['abc', 123, 'def']);
      });

      // handles ignoreCase
      it(`handles non-boolean ignoreCase`, () => {
        const result = swissak.ArrayTools.utils.partitionNums(999 as any)('abc123def');
        expect(result).toEqual(['abc', 123, 'def']);
      });

      // handles non-string item
      it(`handles non-string item - number`, () => {
        const result = swissak.ArrayTools.utils.partitionNums(false)(123 as any);
        expect(result).toEqual([123]);
      });
      it(`handles non-string item - boolean`, () => {
        const result = swissak.ArrayTools.utils.partitionNums(false)(true as any);
        expect(result).toEqual(['true']);
      });
    });
  });
});
