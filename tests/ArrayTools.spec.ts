import * as swissak from '../';

describe('ArrayTools', () => {
  describe('create', () => {
    it(`exists as 'create'`, () => {
      expect(swissak.create).toBeDefined();
    });
    it(`exists as 'ArrayTools.create'`, () => {
      expect(swissak.ArrayTools.create).toBeDefined();
    });
    it(`exists as 'filled'`, () => {
      expect(swissak.filled).toBeDefined();
    });
    it(`exists as 'ArrayTools.filled'`, () => {
      expect(swissak.ArrayTools.filled).toBeDefined();
    });
  });
  describe('range', () => {
    it(`exists as 'range'`, () => {
      expect(swissak.range).toBeDefined();
    });
    it(`exists as 'ArrayTools.range'`, () => {
      expect(swissak.ArrayTools.range).toBeDefined();
    });
  });
  describe('zip', () => {
    it(`exists as 'zip'`, () => {
      expect(swissak.zip).toBeDefined();
    });
    it(`exists as 'ArrayTools.zip'`, () => {
      expect(swissak.ArrayTools.zip).toBeDefined();
    });
  });
  describe('zipMax', () => {
    it(`exists as 'zipMax'`, () => {
      expect(swissak.zipMax).toBeDefined();
    });
    it(`exists as 'ArrayTools.zipMax'`, () => {
      expect(swissak.ArrayTools.zipMax).toBeDefined();
    });
  });
  describe('sortByMapped', () => {
    it(`exists as 'sortByMapped'`, () => {
      expect(swissak.sortByMapped).toBeDefined();
    });
    it(`exists as 'ArrayTools.sortByMapped'`, () => {
      expect(swissak.ArrayTools.sortByMapped).toBeDefined();
    });
  });
  describe('randomise', () => {
    it(`exists as 'randomise'`, () => {
      expect(swissak.randomise).toBeDefined();
    });
    it(`exists as 'ArrayTools.randomise'`, () => {
      expect(swissak.ArrayTools.randomise).toBeDefined();
    });
  });
  describe('reverse', () => {
    it(`exists as 'reverse'`, () => {
      expect(swissak.reverse).toBeDefined();
    });
    it(`exists as 'ArrayTools.reverse'`, () => {
      expect(swissak.ArrayTools.reverse).toBeDefined();
    });
  });
  describe('entries', () => {
    it(`exists as 'entries'`, () => {
      expect(swissak.entries).toBeDefined();
    });
    it(`exists as 'ArrayTools.entries'`, () => {
      expect(swissak.ArrayTools.entries).toBeDefined();
    });
  });
  describe('repeat', () => {
    it(`exists as 'repeat'`, () => {
      expect(swissak.repeat).toBeDefined();
    });
    it(`exists as 'ArrayTools.repeat'`, () => {
      expect(swissak.ArrayTools.repeat).toBeDefined();
    });
  });
  describe('roll', () => {
    it(`exists as 'roll'`, () => {
      expect(swissak.roll).toBeDefined();
    });
    it(`exists as 'ArrayTools.roll'`, () => {
      expect(swissak.ArrayTools.roll).toBeDefined();
    });
  });
  describe('sortNumberedText', () => {
    it(`exists as 'sortNumberedText'`, () => {
      expect(swissak.sortNumberedText).toBeDefined();
    });
    it(`exists as 'ArrayTools.sortNumberedText'`, () => {
      expect(swissak.ArrayTools.sortNumberedText).toBeDefined();
    });
  });
  describe('partition', () => {
    it(`exists as 'partition'`, () => {
      expect(swissak.partition).toBeDefined();
    });
    it(`exists as 'ArrayTools.partition'`, () => {
      expect(swissak.ArrayTools.partition).toBeDefined();
    });
  });
  describe('groupObj', () => {
    it(`exists as 'groupObj'`, () => {
      expect(swissak.groupObj).toBeDefined();
    });
    it(`exists as 'ArrayTools.groupObj'`, () => {
      expect(swissak.ArrayTools.groupObj).toBeDefined();
    });
  });
  describe('group', () => {
    it(`exists as 'group'`, () => {
      expect(swissak.group).toBeDefined();
    });
    it(`exists as 'ArrayTools.group'`, () => {
      expect(swissak.ArrayTools.group).toBeDefined();
    });
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
  });

  describe('utils', () => {
    it(`exists as 'ArrayTools.utils'`, () => {
      expect(swissak.ArrayTools.utils).toBeDefined();
    });
    describe('isNumString', () => {
      it(`exists as 'ArrayTools.utils.isNumString'`, () => {
        expect(swissak.ArrayTools.utils.isNumString).toBeDefined();
      });
    });
    describe('partitionNums', () => {
      it(`exists as 'ArrayTools.utils.partitionNums'`, () => {
        expect(swissak.ArrayTools.utils.partitionNums).toBeDefined();
      });
    });
  });
});
