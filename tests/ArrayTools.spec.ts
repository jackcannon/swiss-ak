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
