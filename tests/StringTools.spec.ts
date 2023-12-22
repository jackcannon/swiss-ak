import * as swissak from '../';
import { register, should, singleTest, multiTest, kitchenSink } from './test-utils';

register({ describe, it, expect });

describe('StringTools', () => {
  describe('capitalise', () => {
    singleTest(swissak.StringTools.capitalise, 'StringTools.capitalise', (capitalise, name) => {
      it(should` exist as ${name}`, () => {
        expect(capitalise).toBeDefined();
      });

      // TODO tests
    });
  });
  describe('angloise', () => {
    singleTest(swissak.StringTools.angloise, 'StringTools.angloise', (angloise, name) => {
      it(should` exist as ${name}`, () => {
        expect(angloise).toBeDefined();
      });

      // TODO tests
    });
  });
  describe('clean', () => {
    singleTest(swissak.StringTools.clean, 'StringTools.clean', (clean, name) => {
      it(should` exist as ${name}`, () => {
        expect(clean).toBeDefined();
      });

      // TODO tests
    });
  });
  describe('repeat', () => {
    singleTest(swissak.StringTools.repeat, 'StringTools.repeat', (repeat, name) => {
      it(should` exist as ${name}`, () => {
        expect(repeat).toBeDefined();
      });

      // TODO tests
    });
  });
  describe('toLowerCamelCase', () => {
    multiTest(
      [
        [swissak.StringTools.toLowerCamelCase, 'StringTools.toLowerCamelCase'],
        [swissak.StringTools.fromSlugCase.toLowerCamelCase, 'StringTools.fromSlugCase.toLowerCamelCase'],
        [swissak.StringTools.fromSnakeCase.toLowerCamelCase, 'StringTools.fromSnakeCase.toLowerCamelCase'],
        [swissak.StringTools.fromSpaced.toLowerCamelCase, 'StringTools.fromSpaced.toLowerCamelCase'],
        [swissak.StringTools.fromCamelCase.toLowerCamelCase, 'StringTools.fromCamelCase.toLowerCamelCase']
      ],
      (toLowerCamelCase, name) => {
        it(should` exist as ${name}`, () => {
          expect(toLowerCamelCase).toBeDefined();
        });

        // TODO tests
      }
    );
  });
  describe('toUpperCamelCase', () => {
    multiTest(
      [
        [swissak.StringTools.toUpperCamelCase, 'StringTools.toUpperCamelCase'],
        [swissak.StringTools.fromSlugCase.toUpperCamelCase, 'StringTools.fromSlugCase.toUpperCamelCase'],
        [swissak.StringTools.fromSnakeCase.toUpperCamelCase, 'StringTools.fromSnakeCase.toUpperCamelCase'],
        [swissak.StringTools.fromSpaced.toUpperCamelCase, 'StringTools.fromSpaced.toUpperCamelCase'],
        [swissak.StringTools.fromCamelCase.toUpperCamelCase, 'StringTools.fromCamelCase.toUpperCamelCase']
      ],
      (toUpperCamelCase, name) => {
        it(should` exist as ${name}`, () => {
          expect(toUpperCamelCase).toBeDefined();
        });

        // TODO tests
      }
    );
  });
  describe('toCamelCase', () => {
    multiTest(
      [
        [swissak.StringTools.toCamelCase, 'StringTools.toCamelCase'],
        [swissak.StringTools.fromSlugCase.toCamelCase, 'StringTools.fromSlugCase.toCamelCase'],
        [swissak.StringTools.fromSnakeCase.toCamelCase, 'StringTools.fromSnakeCase.toCamelCase'],
        [swissak.StringTools.fromSpaced.toCamelCase, 'StringTools.fromSpaced.toCamelCase'],
        [swissak.StringTools.fromCamelCase.toCamelCase, 'StringTools.fromCamelCase.toCamelCase']
      ],
      (toCamelCase, name) => {
        it(should` exist as ${name}`, () => {
          expect(toCamelCase).toBeDefined();
        });

        // TODO tests
      }
    );
  });
  describe('toLowerSlugCase', () => {
    multiTest(
      [
        [swissak.StringTools.toLowerSlugCase, 'StringTools.toLowerSlugCase'],
        [swissak.StringTools.fromSlugCase.toLowerSlugCase, 'StringTools.fromSlugCase.toLowerSlugCase'],
        [swissak.StringTools.fromSnakeCase.toLowerSlugCase, 'StringTools.fromSnakeCase.toLowerSlugCase'],
        [swissak.StringTools.fromSpaced.toLowerSlugCase, 'StringTools.fromSpaced.toLowerSlugCase'],
        [swissak.StringTools.fromCamelCase.toLowerSlugCase, 'StringTools.fromCamelCase.toLowerSlugCase']
      ],
      (toLowerSlugCase, name) => {
        it(should` exist as ${name}`, () => {
          expect(toLowerSlugCase).toBeDefined();
        });

        // TODO tests
      }
    );
  });
  describe('toUpperSlugCase', () => {
    multiTest(
      [
        [swissak.StringTools.toUpperSlugCase, 'StringTools.toUpperSlugCase'],
        [swissak.StringTools.fromSlugCase.toUpperSlugCase, 'StringTools.fromSlugCase.toUpperSlugCase'],
        [swissak.StringTools.fromSnakeCase.toUpperSlugCase, 'StringTools.fromSnakeCase.toUpperSlugCase'],
        [swissak.StringTools.fromSpaced.toUpperSlugCase, 'StringTools.fromSpaced.toUpperSlugCase'],
        [swissak.StringTools.fromCamelCase.toUpperSlugCase, 'StringTools.fromCamelCase.toUpperSlugCase']
      ],
      (toUpperSlugCase, name) => {
        it(should` exist as ${name}`, () => {
          expect(toUpperSlugCase).toBeDefined();
        });

        // TODO tests
      }
    );
  });
  describe('toSlugCase', () => {
    multiTest(
      [
        [swissak.StringTools.toSlugCase, 'StringTools.toSlugCase'],
        [swissak.StringTools.fromSlugCase.toSlugCase, 'StringTools.fromSlugCase.toSlugCase'],
        [swissak.StringTools.fromSnakeCase.toSlugCase, 'StringTools.fromSnakeCase.toSlugCase'],
        [swissak.StringTools.fromSpaced.toSlugCase, 'StringTools.fromSpaced.toSlugCase'],
        [swissak.StringTools.fromCamelCase.toSlugCase, 'StringTools.fromCamelCase.toSlugCase']
      ],
      (toSlugCase, name) => {
        it(should` exist as ${name}`, () => {
          expect(toSlugCase).toBeDefined();
        });

        // TODO tests
      }
    );
  });
  describe('toLowerSnakeCase', () => {
    multiTest(
      [
        [swissak.StringTools.toLowerSnakeCase, 'StringTools.toLowerSnakeCase'],
        [swissak.StringTools.fromSlugCase.toLowerSnakeCase, 'StringTools.fromSlugCase.toLowerSnakeCase'],
        [swissak.StringTools.fromSnakeCase.toLowerSnakeCase, 'StringTools.fromSnakeCase.toLowerSnakeCase'],
        [swissak.StringTools.fromSpaced.toLowerSnakeCase, 'StringTools.fromSpaced.toLowerSnakeCase'],
        [swissak.StringTools.fromCamelCase.toLowerSnakeCase, 'StringTools.fromCamelCase.toLowerSnakeCase']
      ],
      (toLowerSnakeCase, name) => {
        it(should` exist as ${name}`, () => {
          expect(toLowerSnakeCase).toBeDefined();
        });

        // TODO tests
      }
    );
  });
  describe('toUpperSnakeCase', () => {
    multiTest(
      [
        [swissak.StringTools.toUpperSnakeCase, 'StringTools.toUpperSnakeCase'],
        [swissak.StringTools.fromSlugCase.toUpperSnakeCase, 'StringTools.fromSlugCase.toUpperSnakeCase'],
        [swissak.StringTools.fromSnakeCase.toUpperSnakeCase, 'StringTools.fromSnakeCase.toUpperSnakeCase'],
        [swissak.StringTools.fromSpaced.toUpperSnakeCase, 'StringTools.fromSpaced.toUpperSnakeCase'],
        [swissak.StringTools.fromCamelCase.toUpperSnakeCase, 'StringTools.fromCamelCase.toUpperSnakeCase']
      ],
      (toUpperSnakeCase, name) => {
        it(should` exist as ${name}`, () => {
          expect(toUpperSnakeCase).toBeDefined();
        });

        // TODO tests
      }
    );
  });
  describe('toSnakeCase', () => {
    multiTest(
      [
        [swissak.StringTools.toSnakeCase, 'StringTools.toSnakeCase'],
        [swissak.StringTools.fromSlugCase.toSnakeCase, 'StringTools.fromSlugCase.toSnakeCase'],
        [swissak.StringTools.fromSnakeCase.toSnakeCase, 'StringTools.fromSnakeCase.toSnakeCase'],
        [swissak.StringTools.fromSpaced.toSnakeCase, 'StringTools.fromSpaced.toSnakeCase'],
        [swissak.StringTools.fromCamelCase.toSnakeCase, 'StringTools.fromCamelCase.toSnakeCase']
      ],
      (toSnakeCase, name) => {
        it(should` exist as ${name}`, () => {
          expect(toSnakeCase).toBeDefined();
        });

        // TODO tests
      }
    );
  });
  describe('toLowerSpaced', () => {
    multiTest(
      [
        [swissak.StringTools.toLowerSpaced, 'StringTools.toLowerSpaced'],
        [swissak.StringTools.fromSlugCase.toLowerSpaced, 'StringTools.fromSlugCase.toLowerSpaced'],
        [swissak.StringTools.fromSnakeCase.toLowerSpaced, 'StringTools.fromSnakeCase.toLowerSpaced'],
        [swissak.StringTools.fromSpaced.toLowerSpaced, 'StringTools.fromSpaced.toLowerSpaced'],
        [swissak.StringTools.fromCamelCase.toLowerSpaced, 'StringTools.fromCamelCase.toLowerSpaced']
      ],
      (toLowerSpaced, name) => {
        it(should` exist as ${name}`, () => {
          expect(toLowerSpaced).toBeDefined();
        });

        // TODO tests
      }
    );
  });
  describe('toUpperSpaced', () => {
    multiTest(
      [
        [swissak.StringTools.toUpperSpaced, 'StringTools.toUpperSpaced'],
        [swissak.StringTools.fromSlugCase.toUpperSpaced, 'StringTools.fromSlugCase.toUpperSpaced'],
        [swissak.StringTools.fromSnakeCase.toUpperSpaced, 'StringTools.fromSnakeCase.toUpperSpaced'],
        [swissak.StringTools.fromSpaced.toUpperSpaced, 'StringTools.fromSpaced.toUpperSpaced'],
        [swissak.StringTools.fromCamelCase.toUpperSpaced, 'StringTools.fromCamelCase.toUpperSpaced']
      ],
      (toUpperSpaced, name) => {
        it(should` exist as ${name}`, () => {
          expect(toUpperSpaced).toBeDefined();
        });

        // TODO tests
      }
    );
  });
  describe('toCapitalisedSpaced', () => {
    multiTest(
      [
        [swissak.StringTools.toCapitalisedSpaced, 'StringTools.toCapitalisedSpaced'],
        [swissak.StringTools.fromSlugCase.toCapitalisedSpaced, 'StringTools.fromSlugCase.toCapitalisedSpaced'],
        [swissak.StringTools.fromSnakeCase.toCapitalisedSpaced, 'StringTools.fromSnakeCase.toCapitalisedSpaced'],
        [swissak.StringTools.fromSpaced.toCapitalisedSpaced, 'StringTools.fromSpaced.toCapitalisedSpaced'],
        [swissak.StringTools.fromCamelCase.toCapitalisedSpaced, 'StringTools.fromCamelCase.toCapitalisedSpaced']
      ],
      (toCapitalisedSpaced, name) => {
        it(should` exist as ${name}`, () => {
          expect(toCapitalisedSpaced).toBeDefined();
        });

        // TODO tests
      }
    );
  });
  describe('toSpaced', () => {
    multiTest(
      [
        [swissak.StringTools.toSpaced, 'StringTools.toSpaced'],
        [swissak.StringTools.fromSlugCase.toSpaced, 'StringTools.fromSlugCase.toSpaced'],
        [swissak.StringTools.fromSnakeCase.toSpaced, 'StringTools.fromSnakeCase.toSpaced'],
        [swissak.StringTools.fromSpaced.toSpaced, 'StringTools.fromSpaced.toSpaced'],
        [swissak.StringTools.fromCamelCase.toSpaced, 'StringTools.fromCamelCase.toSpaced']
      ],
      (toSpaced, name) => {
        it(should` exist as ${name}`, () => {
          expect(toSpaced).toBeDefined();
        });

        // TODO tests
      }
    );
  });
  describe('toCharacterSeparated', () => {
    multiTest(
      [
        [swissak.StringTools.toCharacterSeparated, 'StringTools.toCharacterSeparated'],
        [swissak.StringTools.fromSlugCase.toCharacterSeparated, 'StringTools.fromSlugCase.toCharacterSeparated'],
        [swissak.StringTools.fromSnakeCase.toCharacterSeparated, 'StringTools.fromSnakeCase.toCharacterSeparated'],
        [swissak.StringTools.fromSpaced.toCharacterSeparated, 'StringTools.fromSpaced.toCharacterSeparated'],
        [swissak.StringTools.fromCamelCase.toCharacterSeparated, 'StringTools.fromCamelCase.toCharacterSeparated']
      ],
      (toCharacterSeparated, name) => {
        it(should` exist as ${name}`, () => {
          expect(toCharacterSeparated).toBeDefined();
        });

        // TODO tests
      }
    );
  });

  // TODO - add fromXs

  describe('clx', () => {
    multiTest(
      [
        [swissak.clx, 'clx'],
        [swissak.StringTools.clx, 'StringTools.clx']
      ],
      (clx, name) => {
        it(should` exist as ${name}`, () => {
          expect(clx).toBeDefined();
        });

        // TODO tests
      }
    );
  });
});
