import * as swissak from '../';
import { register, should } from './test-utils';

register({ describe, it, expect });

describe('StringTools', () => {
  describe('capitalise', () => {
    it(should` exist as 'StringTools.capitalise'`, () => {
      expect(swissak.StringTools.capitalise).toBeDefined();
    });
  });
  describe('angloise', () => {
    it(should` exist as 'StringTools.angloise'`, () => {
      expect(swissak.StringTools.angloise).toBeDefined();
    });
  });
  describe('clean', () => {
    it(should` exist as 'StringTools.clean'`, () => {
      expect(swissak.StringTools.clean).toBeDefined();
    });
  });
  describe('repeat', () => {
    it(should` exist as 'StringTools.repeat'`, () => {
      expect(swissak.StringTools.repeat).toBeDefined();
    });
  });
  describe('toLowerCamelCase', () => {
    it(should` exist as 'StringTools.toLowerCamelCase'`, () => {
      expect(swissak.StringTools.toLowerCamelCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSlugCase.toLowerCamelCase'`, () => {
      expect(swissak.StringTools.fromSlugCase.toLowerCamelCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSnakeCase.toLowerCamelCase'`, () => {
      expect(swissak.StringTools.fromSnakeCase.toLowerCamelCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSpaced.toLowerCamelCase'`, () => {
      expect(swissak.StringTools.fromSpaced.toLowerCamelCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromCamelCase.toLowerCamelCase'`, () => {
      expect(swissak.StringTools.fromCamelCase.toLowerCamelCase).toBeDefined();
    });
  });
  describe('toUpperCamelCase', () => {
    it(should` exist as 'StringTools.toUpperCamelCase'`, () => {
      expect(swissak.StringTools.toUpperCamelCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSlugCase.toUpperCamelCase'`, () => {
      expect(swissak.StringTools.fromSlugCase.toUpperCamelCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSnakeCase.toUpperCamelCase'`, () => {
      expect(swissak.StringTools.fromSnakeCase.toUpperCamelCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSpaced.toUpperCamelCase'`, () => {
      expect(swissak.StringTools.fromSpaced.toUpperCamelCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromCamelCase.toUpperCamelCase'`, () => {
      expect(swissak.StringTools.fromCamelCase.toUpperCamelCase).toBeDefined();
    });
  });
  describe('toCamelCase', () => {
    it(should` exist as 'StringTools.toCamelCase'`, () => {
      expect(swissak.StringTools.toCamelCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSlugCase.toCamelCase'`, () => {
      expect(swissak.StringTools.fromSlugCase.toCamelCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSnakeCase.toCamelCase'`, () => {
      expect(swissak.StringTools.fromSnakeCase.toCamelCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSpaced.toCamelCase'`, () => {
      expect(swissak.StringTools.fromSpaced.toCamelCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromCamelCase.toCamelCase'`, () => {
      expect(swissak.StringTools.fromCamelCase.toCamelCase).toBeDefined();
    });
  });
  describe('toLowerSlugCase', () => {
    it(should` exist as 'StringTools.toLowerSlugCase'`, () => {
      expect(swissak.StringTools.toLowerSlugCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSlugCase.toLowerSlugCase'`, () => {
      expect(swissak.StringTools.fromSlugCase.toLowerSlugCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSnakeCase.toLowerSlugCase'`, () => {
      expect(swissak.StringTools.fromSnakeCase.toLowerSlugCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSpaced.toLowerSlugCase'`, () => {
      expect(swissak.StringTools.fromSpaced.toLowerSlugCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromCamelCase.toLowerSlugCase'`, () => {
      expect(swissak.StringTools.fromCamelCase.toLowerSlugCase).toBeDefined();
    });
  });
  describe('toUpperSlugCase', () => {
    it(should` exist as 'StringTools.toUpperSlugCase'`, () => {
      expect(swissak.StringTools.toUpperSlugCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSlugCase.toUpperSlugCase'`, () => {
      expect(swissak.StringTools.fromSlugCase.toUpperSlugCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSnakeCase.toUpperSlugCase'`, () => {
      expect(swissak.StringTools.fromSnakeCase.toUpperSlugCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSpaced.toUpperSlugCase'`, () => {
      expect(swissak.StringTools.fromSpaced.toUpperSlugCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromCamelCase.toUpperSlugCase'`, () => {
      expect(swissak.StringTools.fromCamelCase.toUpperSlugCase).toBeDefined();
    });
  });
  describe('toSlugCase', () => {
    it(should` exist as 'StringTools.toSlugCase'`, () => {
      expect(swissak.StringTools.toSlugCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSlugCase.toSlugCase'`, () => {
      expect(swissak.StringTools.fromSlugCase.toSlugCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSnakeCase.toSlugCase'`, () => {
      expect(swissak.StringTools.fromSnakeCase.toSlugCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSpaced.toSlugCase'`, () => {
      expect(swissak.StringTools.fromSpaced.toSlugCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromCamelCase.toSlugCase'`, () => {
      expect(swissak.StringTools.fromCamelCase.toSlugCase).toBeDefined();
    });
  });
  describe('toLowerSnakeCase', () => {
    it(should` exist as 'StringTools.toLowerSnakeCase'`, () => {
      expect(swissak.StringTools.toLowerSnakeCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSlugCase.toLowerSnakeCase'`, () => {
      expect(swissak.StringTools.fromSlugCase.toLowerSnakeCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSnakeCase.toLowerSnakeCase'`, () => {
      expect(swissak.StringTools.fromSnakeCase.toLowerSnakeCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSpaced.toLowerSnakeCase'`, () => {
      expect(swissak.StringTools.fromSpaced.toLowerSnakeCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromCamelCase.toLowerSnakeCase'`, () => {
      expect(swissak.StringTools.fromCamelCase.toLowerSnakeCase).toBeDefined();
    });
  });
  describe('toUpperSnakeCase', () => {
    it(should` exist as 'StringTools.toUpperSnakeCase'`, () => {
      expect(swissak.StringTools.toUpperSnakeCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSlugCase.toUpperSnakeCase'`, () => {
      expect(swissak.StringTools.fromSlugCase.toUpperSnakeCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSnakeCase.toUpperSnakeCase'`, () => {
      expect(swissak.StringTools.fromSnakeCase.toUpperSnakeCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSpaced.toUpperSnakeCase'`, () => {
      expect(swissak.StringTools.fromSpaced.toUpperSnakeCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromCamelCase.toUpperSnakeCase'`, () => {
      expect(swissak.StringTools.fromCamelCase.toUpperSnakeCase).toBeDefined();
    });
  });
  describe('toSnakeCase', () => {
    it(should` exist as 'StringTools.toSnakeCase'`, () => {
      expect(swissak.StringTools.toSnakeCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSlugCase.toSnakeCase'`, () => {
      expect(swissak.StringTools.fromSlugCase.toSnakeCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSnakeCase.toSnakeCase'`, () => {
      expect(swissak.StringTools.fromSnakeCase.toSnakeCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSpaced.toSnakeCase'`, () => {
      expect(swissak.StringTools.fromSpaced.toSnakeCase).toBeDefined();
    });
    it(should` exist as 'StringTools.fromCamelCase.toSnakeCase'`, () => {
      expect(swissak.StringTools.fromCamelCase.toSnakeCase).toBeDefined();
    });
  });
  describe('toLowerSpaced', () => {
    it(should` exist as 'StringTools.toLowerSpaced'`, () => {
      expect(swissak.StringTools.toLowerSpaced).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSlugCase.toLowerSpaced'`, () => {
      expect(swissak.StringTools.fromSlugCase.toLowerSpaced).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSnakeCase.toLowerSpaced'`, () => {
      expect(swissak.StringTools.fromSnakeCase.toLowerSpaced).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSpaced.toLowerSpaced'`, () => {
      expect(swissak.StringTools.fromSpaced.toLowerSpaced).toBeDefined();
    });
    it(should` exist as 'StringTools.fromCamelCase.toLowerSpaced'`, () => {
      expect(swissak.StringTools.fromCamelCase.toLowerSpaced).toBeDefined();
    });
  });
  describe('toUpperSpaced', () => {
    it(should` exist as 'StringTools.toUpperSpaced'`, () => {
      expect(swissak.StringTools.toUpperSpaced).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSlugCase.toUpperSpaced'`, () => {
      expect(swissak.StringTools.fromSlugCase.toUpperSpaced).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSnakeCase.toUpperSpaced'`, () => {
      expect(swissak.StringTools.fromSnakeCase.toUpperSpaced).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSpaced.toUpperSpaced'`, () => {
      expect(swissak.StringTools.fromSpaced.toUpperSpaced).toBeDefined();
    });
    it(should` exist as 'StringTools.fromCamelCase.toUpperSpaced'`, () => {
      expect(swissak.StringTools.fromCamelCase.toUpperSpaced).toBeDefined();
    });
  });
  describe('toCapitalisedSpaced', () => {
    it(should` exist as 'StringTools.toCapitalisedSpaced'`, () => {
      expect(swissak.StringTools.toCapitalisedSpaced).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSlugCase.toCapitalisedSpaced'`, () => {
      expect(swissak.StringTools.fromSlugCase.toCapitalisedSpaced).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSnakeCase.toCapitalisedSpaced'`, () => {
      expect(swissak.StringTools.fromSnakeCase.toCapitalisedSpaced).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSpaced.toCapitalisedSpaced'`, () => {
      expect(swissak.StringTools.fromSpaced.toCapitalisedSpaced).toBeDefined();
    });
    it(should` exist as 'StringTools.fromCamelCase.toCapitalisedSpaced'`, () => {
      expect(swissak.StringTools.fromCamelCase.toCapitalisedSpaced).toBeDefined();
    });
  });
  describe('toSpaced', () => {
    it(should` exist as 'StringTools.toSpaced'`, () => {
      expect(swissak.StringTools.toSpaced).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSlugCase.toSpaced'`, () => {
      expect(swissak.StringTools.fromSlugCase.toSpaced).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSnakeCase.toSpaced'`, () => {
      expect(swissak.StringTools.fromSnakeCase.toSpaced).toBeDefined();
    });
    it(should` exist as 'StringTools.fromSpaced.toSpaced'`, () => {
      expect(swissak.StringTools.fromSpaced.toSpaced).toBeDefined();
    });
    it(should` exist as 'StringTools.fromCamelCase.toSpaced'`, () => {
      expect(swissak.StringTools.fromCamelCase.toSpaced).toBeDefined();
    });
  });
  describe('toCharacterSeparated', () => {
    it(should` exist as 'StringTools.toCharacterSeparated'`, () => {
      expect(swissak.StringTools.toCharacterSeparated).toBeDefined();
    });
  });
  describe('fromSlugCase.toCharacterSeparated', () => {
    it(should` exist as 'StringTools.fromSlugCase.toCharacterSeparated'`, () => {
      expect(swissak.StringTools.fromSlugCase.toCharacterSeparated).toBeDefined();
    });
  });
  describe('fromSnakeCase.toCharacterSeparated', () => {
    it(should` exist as 'StringTools.fromSnakeCase.toCharacterSeparated'`, () => {
      expect(swissak.StringTools.fromSnakeCase.toCharacterSeparated).toBeDefined();
    });
  });
  describe('fromSpaced.toCharacterSeparated', () => {
    it(should` exist as 'StringTools.fromSpaced.toCharacterSeparated'`, () => {
      expect(swissak.StringTools.fromSpaced.toCharacterSeparated).toBeDefined();
    });
  });
  describe('fromCamelCase.toCharacterSeparated', () => {
    it(should` exist as 'StringTools.fromCamelCase.toCharacterSeparated'`, () => {
      expect(swissak.StringTools.fromCamelCase.toCharacterSeparated).toBeDefined();
    });
  });

  describe('clx', () => {
    it(should` exist as 'clx'`, () => {
      expect(swissak.clx).toBeDefined();
    });
    it(should` exist as 'StringTools.clx'`, () => {
      expect(swissak.StringTools.clx).toBeDefined();
    });
  });
});
