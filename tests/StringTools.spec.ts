import * as swissak from '../';
import { register, should, singleTest, multiTest, kitchenSink } from './test-utils';

register({ describe, it, expect });

describe('StringTools', () => {
  describe('capitalise', () => {
    singleTest(swissak.StringTools.capitalise, 'StringTools.capitalise', (capitalise, name) => {
      it(should` exist as ${name}`, () => {
        expect(capitalise).toBeDefined();
      });

      it(should` capitalise the first letter of a word`, () => {
        expect(capitalise('hello')).toEqual('Hello');
      });
      it(should` capitalise the first letter of each word`, () => {
        expect(capitalise('hello world')).toEqual('Hello World');
      });

      it(should` uncapitalise the rest of the word - by default`, () => {
        expect(capitalise('HELLO')).toEqual('Hello');
      });
      it(should` uncapitalise the rest of each word - by default`, () => {
        expect(capitalise('HELLO WORLD')).toEqual('Hello World');
      });
      it(should` leave the rest of the word capitalised - if forceRestToLowerCase is false`, () => {
        expect(capitalise('HELLO', false)).toEqual('HELLO');
      });
      it(should` leave the rest of each word capitalised - if forceRestToLowerCase is false`, () => {
        expect(capitalise('HELLO WORLD', false)).toEqual('HELLO WORLD');
      });
      it(should` uncapitalise the rest of the word - if forceRestToLowerCase is true`, () => {
        expect(capitalise('HELLO', true)).toEqual('Hello');
      });
      it(should` uncapitalise the rest of each word - if forceRestToLowerCase is true`, () => {
        expect(capitalise('HELLO WORLD', true)).toEqual('Hello World');
      });

      it(should` return an empty string if given an empty string`, () => {
        expect(capitalise('')).toEqual('');
      });

      kitchenSink.toEqual('input', (v: any) => capitalise(v), kitchenSink.safe.str(''), kitchenSink.samples.general);
      kitchenSink.toEqual('forceRestToLowerCase', (v: any) => capitalise('hElLo WoRlD', v), kitchenSink.safe.bool(true), kitchenSink.samples.general);
    });
  });
  describe('angloise', () => {
    singleTest(swissak.StringTools.angloise, 'StringTools.angloise', (angloise, name) => {
      it(should` exist as ${name}`, () => {
        expect(angloise).toBeDefined();
      });

      it(should` angloise the string - lowercase`, () => {
        expect(angloise('aàáâäǎãåā eèéêëěẽēēėę iìíîïǐĩīįi oòóôöǒõō uùúûüǔũūűů')).toEqual('aaaaaaaaa eeeeeeeeeee iiiiiiiiii oooooooo uuuuuuuuuu');
      });
      it(should` angloise the string - uppercase`, () => {
        expect(angloise('AÀÁÂÄǍÃÅĀ EÈÉÊËĚẼĒĒĖĘ IÌÍÎÏǏĨĪĮI OÒÓÔÖǑÕŌ UÙÚÛÜǓŨŪŰŮ')).toEqual('AAAAAAAAA EEEEEEEEEEE IIIIIIIIII OOOOOOOO UUUUUUUUUU');
      });

      kitchenSink.toEqual('input', (v: any) => angloise(v), kitchenSink.safe.str(undefined), kitchenSink.samples.general);
    });
  });
  describe('clean', () => {
    singleTest(swissak.StringTools.clean, 'StringTools.clean', (clean, name) => {
      it(should` exist as ${name}`, () => {
        expect(clean).toBeDefined();
      });

      it(should` run the example`, () => {
        expect(clean('éèêë_--ab0')).toEqual('eeeeab0');
      });

      it(should` remove all non-alphanumeric characters`, () => {
        const str =
          '!@ aàáâäǎãåā #$ eèéêëěẽēēėę %^ iìíîïǐĩīįi &* oòóôöǒõō () uùúûüǔũūűů _+ AÀÁÂÄǍÃÅĀ -= EÈÉÊËĚẼĒĒĖĘ [] IÌÍÎÏǏĨĪĮI {} OÒÓÔÖǑÕŌ | UÙÚÛÜǓŨŪŰŮ ;: 1234567890';
        const expctd =
          ' aaaaaaaaa  eeeeeeeeeee  iiiiiiiiii  oooooooo  uuuuuuuuuu  AAAAAAAAA  EEEEEEEEEEE  IIIIIIIIII  OOOOOOOO  UUUUUUUUUU  1234567890';
        expect(clean(str)).toEqual(expctd);
      });

      kitchenSink.toEqual('input', (v: any) => clean(v), kitchenSink.safe.str(''), kitchenSink.samples.general);
    });
  });
  describe('repeat', () => {
    singleTest(swissak.StringTools.repeat, 'StringTools.repeat', (repeat, name) => {
      it(should` exist as ${name}`, () => {
        expect(repeat).toBeDefined();
      });

      it(should` repeat the string`, () => {
        expect(repeat(3, 'a')).toEqual('aaa');
      });

      it(should` repeat the string - empty string`, () => {
        expect(repeat(3, '')).toEqual('');
      });

      it(should` repeat the string - zero times`, () => {
        expect(repeat(0, 'a')).toEqual('');
      });

      it(should` repeat the string - negative times`, () => {
        expect(repeat(-1, 'a')).toEqual('');
      });

      it(should` repeat the word`, () => {
        expect(repeat(3, 'hello ')).toEqual('hello hello hello ');
      });

      kitchenSink.toEqual('maxLength', (v: any) => repeat(v, 'a'), kitchenSink.safe.num(undefined, true), kitchenSink.samples.num);
      kitchenSink.toEqual('input', (v: any) => repeat(5, v), kitchenSink.safe.str(undefined), kitchenSink.samples.general);
    });
  });

  describe('makeRegExpSafe', () => {
    singleTest(swissak.StringTools.makeRegExpSafe, 'StringTools.makeRegExpSafe', (makeRegExpSafe, name) => {
      it(should` exist as ${name}`, () => {
        expect(makeRegExpSafe).toBeDefined();
      });
      it(should` run the example code`, () => {
        const textWithSpecChars = '$^*+?.()|{}[]\\';
        const longText = `A long line with ${textWithSpecChars} in it`;

        const safeText = makeRegExpSafe(textWithSpecChars);
        const regex = new RegExp(safeText);
        const result = longText.replace(regex, 'foobar');

        expect(result).toEqual('A long line with foobar in it');
      });

      kitchenSink.toEqual('input', (v: any) => makeRegExpSafe(v), kitchenSink.safe.str(undefined), kitchenSink.samples.general);
    });
  });

  describe('replaceAll', () => {
    singleTest(swissak.StringTools.replaceAll, 'StringTools.replaceAll', (replaceAll, name) => {
      it(should` exist as ${name}`, () => {
        expect(replaceAll).toBeDefined();
      });

      it(should` replace all using a string and a string`, () => {
        const input = 'the quick brown fox jumps over the lazy dog';
        const result = replaceAll(input, 'o', '#');
        const expctd = 'the quick br#wn f#x jumps #ver the lazy d#g';
        expect(result).toBe(expctd);
      });

      it(should` replace all using string and a function`, () => {
        const input = 'the quick brown fox jumps over the lazy dog';
        const result = replaceAll(input, 'o', (match) => match.toUpperCase());
        const expctd = 'the quick brOwn fOx jumps Over the lazy dOg';
        expect(result).toBe(expctd);
      });

      it(should` replace all using a regexp and a string`, () => {
        const input = 'the quick brown fox jumps over the lazy dog';
        const result = replaceAll(input, /A|E|I|O|U/i, '#');
        const expctd = 'th# q##ck br#wn f#x j#mps #v#r th# l#zy d#g';
        expect(result).toBe(expctd);
      });

      it(should` replace all using a regexp and a function`, () => {
        const input = 'the quick brown fox jumps over the lazy dog';
        const result = replaceAll(input, /A|E|I|O|U/i, (match) => match.toUpperCase());
        const expctd = 'thE qUIck brOwn fOx jUmps OvEr thE lAzy dOg';
        expect(result).toBe(expctd);
      });

      kitchenSink.toEqual('text', (v: any) => replaceAll(v, 'o', '#'), kitchenSink.safe.str(undefined), kitchenSink.samples.general);
      kitchenSink.toEqual(
        'searchValue',
        (v: any) => replaceAll('the quick brown fox jumps over the lazy dog', v, '#'),
        (v) => (v instanceof RegExp ? v : kitchenSink.safe.str(undefined)(v)),
        kitchenSink.samples.general
      );
      kitchenSink.toEqual(
        'replacer',
        (v: any) => replaceAll('the quick brown fox jumps over the lazy dog', 'o', v),
        (v) => (typeof v === 'function' ? kitchenSink.safe.func(undefined)(v) : kitchenSink.safe.str(undefined)(v)),
        kitchenSink.samples.general
      );
    });
  });

  describe('randomId', () => {
    singleTest(swissak.StringTools.randomId, 'StringTools.randomId', (randomId, name) => {
      it(should` exist as ${name}`, () => {
        expect(randomId).toBeDefined();
      });

      it(should` return a string`, () => {
        expect(typeof randomId()).toBe('string');
      });

      // Test multiple times to ensure it's not a one-off
      for (let i = 0; i < 20; i++) {
        describe(`${(i + '').padStart(2, ' ')}/20`, () => {
          it(should` return a string of length 10`, () => {
            expect(randomId().length).toBe(10);
          });
          it(should` be alphanumeric`, () => {
            expect(/^[A-Za-z0-9]{10}$/.test(randomId())).toBe(true);
          });
          it(should` prefix foo`, () => {
            expect(randomId('foo').startsWith('foo')).toBe(true);
          });
          it(should` prefix bar`, () => {
            expect(randomId('bar').startsWith('bar')).toBe(true);
          });
          it(should` suffix foo`, () => {
            expect(randomId(undefined, 'foo').endsWith('foo')).toBe(true);
          });
          it(should` suffix bar`, () => {
            expect(randomId(undefined, 'bar').endsWith('bar')).toBe(true);
          });
          it(should` prefix foo and suffix bar`, () => {
            const result = randomId('foo', 'bar');
            expect(result.startsWith('foo')).toBe(true);
            expect(result.endsWith('bar')).toBe(true);
          });
        });
      }

      kitchenSink.toEqual('prefix', (v: any) => randomId(v).length, kitchenSink.safe.str(undefined, true, ''), kitchenSink.samples.general);
      kitchenSink.toEqual('suffix', (v: any) => randomId('', v).length, kitchenSink.safe.str(undefined, true, ''), kitchenSink.samples.general);
    });
  });

  describe('case handlers', () => {
    interface TestValuesObj {
      array: string[];
      spaced: string;
      capitalisedSpaced: string;
      lowerSpaced: string;
      upperSpaced: string;
      camelCase: string;
      lowerCamelCase: string;
      upperCamelCase: string;
      slugCase: string;
      lowerSlugCase: string;
      upperSlugCase: string;
      snakeCase: string;
      lowerSnakeCase: string;
      upperSnakeCase: string;
      characterSeparated: string;
    }
    const testValues: TestValuesObj[] = [
      {
        array: ['this', 'is', 'a', 'test'],
        spaced: 'this is a test',
        capitalisedSpaced: 'This Is A Test',
        lowerSpaced: 'this is a test',
        upperSpaced: 'THIS IS A TEST',
        camelCase: 'thisIsATest',
        lowerCamelCase: 'thisIsATest',
        upperCamelCase: 'ThisIsATest',
        slugCase: 'this-is-a-test',
        lowerSlugCase: 'this-is-a-test',
        upperSlugCase: 'THIS-IS-A-TEST',
        snakeCase: 'this_is_a_test',
        lowerSnakeCase: 'this_is_a_test',
        upperSnakeCase: 'THIS_IS_A_TEST',
        characterSeparated: 'this,is,a,test'
      },
      {
        array: ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur'],
        spaced: 'lorem ipsum dolor sit amet consectetur',
        capitalisedSpaced: 'Lorem Ipsum Dolor Sit Amet Consectetur',
        lowerSpaced: 'lorem ipsum dolor sit amet consectetur',
        upperSpaced: 'LOREM IPSUM DOLOR SIT AMET CONSECTETUR',
        camelCase: 'loremIpsumDolorSitAmetConsectetur',
        lowerCamelCase: 'loremIpsumDolorSitAmetConsectetur',
        upperCamelCase: 'LoremIpsumDolorSitAmetConsectetur',
        slugCase: 'lorem-ipsum-dolor-sit-amet-consectetur',
        lowerSlugCase: 'lorem-ipsum-dolor-sit-amet-consectetur',
        upperSlugCase: 'LOREM-IPSUM-DOLOR-SIT-AMET-CONSECTETUR',
        snakeCase: 'lorem_ipsum_dolor_sit_amet_consectetur',
        lowerSnakeCase: 'lorem_ipsum_dolor_sit_amet_consectetur',
        upperSnakeCase: 'LOREM_IPSUM_DOLOR_SIT_AMET_CONSECTETUR',
        characterSeparated: 'lorem,ipsum,dolor,sit,amet,consectetur'
      },
      {
        array: ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'],
        spaced: 'the quick brown fox jumps over the lazy dog',
        capitalisedSpaced: 'The Quick Brown Fox Jumps Over The Lazy Dog',
        lowerSpaced: 'the quick brown fox jumps over the lazy dog',
        upperSpaced: 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG',
        camelCase: 'theQuickBrownFoxJumpsOverTheLazyDog',
        lowerCamelCase: 'theQuickBrownFoxJumpsOverTheLazyDog',
        upperCamelCase: 'TheQuickBrownFoxJumpsOverTheLazyDog',
        slugCase: 'the-quick-brown-fox-jumps-over-the-lazy-dog',
        lowerSlugCase: 'the-quick-brown-fox-jumps-over-the-lazy-dog',
        upperSlugCase: 'THE-QUICK-BROWN-FOX-JUMPS-OVER-THE-LAZY-DOG',
        snakeCase: 'the_quick_brown_fox_jumps_over_the_lazy_dog',
        lowerSnakeCase: 'the_quick_brown_fox_jumps_over_the_lazy_dog',
        upperSnakeCase: 'THE_QUICK_BROWN_FOX_JUMPS_OVER_THE_LAZY_DOG',
        characterSeparated: 'the,quick,brown,fox,jumps,over,the,lazy,dog'
      }
    ];

    const testInputObjects = (item: swissak.StringTools.StringCaseHandler, name: string, inputKeys: string[]) => {
      it(should` exist as ${name}`, () => {
        expect(item).toBeDefined();
      });
      it(should` have the correct methods`, () => {
        expect(item).toBeDefined();

        expect(typeof item.toLowerCamelCase).toBe('function');
        expect(typeof item.toUpperCamelCase).toBe('function');
        expect(typeof item.toCamelCase).toBe('function');
        expect(typeof item.toLowerSlugCase).toBe('function');
        expect(typeof item.toUpperSlugCase).toBe('function');
        expect(typeof item.toSlugCase).toBe('function');
        expect(typeof item.toLowerSnakeCase).toBe('function');
        expect(typeof item.toUpperSnakeCase).toBe('function');
        expect(typeof item.toSnakeCase).toBe('function');
        expect(typeof item.toLowerSpaced).toBe('function');
        expect(typeof item.toUpperSpaced).toBe('function');
        expect(typeof item.toCapitalisedSpaced).toBe('function');
        expect(typeof item.toSpaced).toBe('function');
        expect(typeof item.toCharacterSeparated).toBe('function');
      });

      testValues.forEach((testValue) => {
        const testValueId = testValue.spaced.split(' ').slice(0, 2).join(' ');
        inputKeys.forEach((inputKey) => {
          it(should` convert ${name + '/' + inputKey} 		- ${testValueId}`, () => {
            expect(item.toSpaced(testValue[inputKey])).toEqual(testValue.spaced);
          });
        });
      });
    };

    describe('fromSlugCase', () => {
      testInputObjects(swissak.StringTools.fromSlugCase, 'StringTools.fromSlugCase', ['array', 'slugCase', 'lowerSlugCase', 'upperSlugCase']);
    });

    describe('fromSnakeCase', () => {
      testInputObjects(swissak.StringTools.fromSnakeCase, 'StringTools.fromSnakeCase', ['array', 'snakeCase', 'lowerSnakeCase', 'upperSnakeCase']);
    });

    describe('fromSpaced', () => {
      testInputObjects(swissak.StringTools.fromSpaced, 'StringTools.fromSpaced', [
        'array',
        'spaced',
        'capitalisedSpaced',
        'lowerSpaced',
        'upperSpaced'
      ]);
    });

    describe('fromCamelCase', () => {
      testInputObjects(swissak.StringTools.fromCamelCase, 'StringTools.fromCamelCase', ['array', 'camelCase', 'lowerCamelCase', 'upperCamelCase']);
    });

    const testOutputFunction = <T = (...args: any[]) => string>(
      versions: {
        standard?: [T, string];
        fromSlugCase?: [T, string];
        fromSnakeCase?: [T, string];
        fromSpaced?: [T, string];
        fromCamelCase?: [T, string];
      },
      expectedOutputKey: keyof TestValuesObj
    ) => {
      Object.entries(versions).forEach(([name, [func, funcName]]) => {
        const inputKeys: string[] = {
          standard: [
            'array',
            'spaced',
            'capitalisedSpaced',
            'lowerSpaced',
            'upperSpaced',
            'slugCase',
            'lowerSlugCase',
            'upperSlugCase',
            'snakeCase',
            'lowerSnakeCase',
            'upperSnakeCase'
          ],
          fromSlugCase: ['array', 'slugCase', 'lowerSlugCase', 'upperSlugCase'],
          fromSnakeCase: ['array', 'snakeCase', 'lowerSnakeCase', 'upperSnakeCase'],
          fromSpaced: ['array', 'spaced', 'capitalisedSpaced', 'lowerSpaced', 'upperSpaced'],
          fromCamelCase: ['array', 'camelCase', 'lowerCamelCase', 'upperCamelCase']
        }[name];

        it(should` exist as ${funcName}`, () => {
          expect(func).toBeDefined();
        });

        testValues.forEach((testValue) => {
          const testValueId = testValue.spaced.split(' ').slice(0, 2).join(' ');

          inputKeys.forEach((inputKey) => {
            it(should` convert ${inputKey} to ${expectedOutputKey} 		- ${testValueId}`, () => {
              const output = (func as any)(testValue[inputKey]);
              const expctd = testValue[expectedOutputKey];
              expect(output).toEqual(expctd);
            });
          });
        });

        kitchenSink.toEqual(
          'input',
          (v: any) => (func as any)(v),
          (v) => {
            if (v instanceof Array) return kitchenSink.safe.arrOf.str(undefined)(v);
            return kitchenSink.safe.str(undefined, false, '')(v);
          },
          kitchenSink.samples.general
        );
      });
    };

    describe('toLowerCamelCase', () => {
      testOutputFunction(
        {
          standard: [swissak.StringTools.toLowerCamelCase, 'StringTools.toLowerCamelCase'],
          fromSlugCase: [swissak.StringTools.fromSlugCase.toLowerCamelCase, 'StringTools.fromSlugCase.toLowerCamelCase'],
          fromSnakeCase: [swissak.StringTools.fromSnakeCase.toLowerCamelCase, 'StringTools.fromSnakeCase.toLowerCamelCase'],
          fromSpaced: [swissak.StringTools.fromSpaced.toLowerCamelCase, 'StringTools.fromSpaced.toLowerCamelCase'],
          fromCamelCase: [swissak.StringTools.fromCamelCase.toLowerCamelCase, 'StringTools.fromCamelCase.toLowerCamelCase']
        },
        'lowerCamelCase'
      );
    });
    describe('toUpperCamelCase', () => {
      testOutputFunction(
        {
          standard: [swissak.StringTools.toUpperCamelCase, 'StringTools.toUpperCamelCase'],
          fromSlugCase: [swissak.StringTools.fromSlugCase.toUpperCamelCase, 'StringTools.fromSlugCase.toUpperCamelCase'],
          fromSnakeCase: [swissak.StringTools.fromSnakeCase.toUpperCamelCase, 'StringTools.fromSnakeCase.toUpperCamelCase'],
          fromSpaced: [swissak.StringTools.fromSpaced.toUpperCamelCase, 'StringTools.fromSpaced.toUpperCamelCase'],
          fromCamelCase: [swissak.StringTools.fromCamelCase.toUpperCamelCase, 'StringTools.fromCamelCase.toUpperCamelCase']
        },
        'upperCamelCase'
      );
    });
    describe('toCamelCase', () => {
      testOutputFunction(
        {
          standard: [swissak.StringTools.toCamelCase, 'StringTools.toCamelCase'],
          fromSlugCase: [swissak.StringTools.fromSlugCase.toCamelCase, 'StringTools.fromSlugCase.toCamelCase'],
          fromSnakeCase: [swissak.StringTools.fromSnakeCase.toCamelCase, 'StringTools.fromSnakeCase.toCamelCase'],
          fromSpaced: [swissak.StringTools.fromSpaced.toCamelCase, 'StringTools.fromSpaced.toCamelCase'],
          fromCamelCase: [swissak.StringTools.fromCamelCase.toCamelCase, 'StringTools.fromCamelCase.toCamelCase']
        },
        'camelCase'
      );
    });
    describe('toLowerSlugCase', () => {
      testOutputFunction(
        {
          standard: [swissak.StringTools.toLowerSlugCase, 'StringTools.toLowerSlugCase'],
          fromSlugCase: [swissak.StringTools.fromSlugCase.toLowerSlugCase, 'StringTools.fromSlugCase.toLowerSlugCase'],
          fromSnakeCase: [swissak.StringTools.fromSnakeCase.toLowerSlugCase, 'StringTools.fromSnakeCase.toLowerSlugCase'],
          fromSpaced: [swissak.StringTools.fromSpaced.toLowerSlugCase, 'StringTools.fromSpaced.toLowerSlugCase'],
          fromCamelCase: [swissak.StringTools.fromCamelCase.toLowerSlugCase, 'StringTools.fromCamelCase.toLowerSlugCase']
        },
        'lowerSlugCase'
      );
    });
    describe('toUpperSlugCase', () => {
      testOutputFunction(
        {
          standard: [swissak.StringTools.toUpperSlugCase, 'StringTools.toUpperSlugCase'],
          fromSlugCase: [swissak.StringTools.fromSlugCase.toUpperSlugCase, 'StringTools.fromSlugCase.toUpperSlugCase'],
          fromSnakeCase: [swissak.StringTools.fromSnakeCase.toUpperSlugCase, 'StringTools.fromSnakeCase.toUpperSlugCase'],
          fromSpaced: [swissak.StringTools.fromSpaced.toUpperSlugCase, 'StringTools.fromSpaced.toUpperSlugCase'],
          fromCamelCase: [swissak.StringTools.fromCamelCase.toUpperSlugCase, 'StringTools.fromCamelCase.toUpperSlugCase']
        },
        'upperSlugCase'
      );
    });
    describe('toSlugCase', () => {
      testOutputFunction(
        {
          standard: [swissak.StringTools.toSlugCase, 'StringTools.toSlugCase'],
          fromSlugCase: [swissak.StringTools.fromSlugCase.toSlugCase, 'StringTools.fromSlugCase.toSlugCase'],
          fromSnakeCase: [swissak.StringTools.fromSnakeCase.toSlugCase, 'StringTools.fromSnakeCase.toSlugCase'],
          fromSpaced: [swissak.StringTools.fromSpaced.toSlugCase, 'StringTools.fromSpaced.toSlugCase'],
          fromCamelCase: [swissak.StringTools.fromCamelCase.toSlugCase, 'StringTools.fromCamelCase.toSlugCase']
        },
        'slugCase'
      );
    });
    describe('toLowerSnakeCase', () => {
      testOutputFunction(
        {
          standard: [swissak.StringTools.toLowerSnakeCase, 'StringTools.toLowerSnakeCase'],
          fromSlugCase: [swissak.StringTools.fromSlugCase.toLowerSnakeCase, 'StringTools.fromSlugCase.toLowerSnakeCase'],
          fromSnakeCase: [swissak.StringTools.fromSnakeCase.toLowerSnakeCase, 'StringTools.fromSnakeCase.toLowerSnakeCase'],
          fromSpaced: [swissak.StringTools.fromSpaced.toLowerSnakeCase, 'StringTools.fromSpaced.toLowerSnakeCase'],
          fromCamelCase: [swissak.StringTools.fromCamelCase.toLowerSnakeCase, 'StringTools.fromCamelCase.toLowerSnakeCase']
        },
        'lowerSnakeCase'
      );
    });
    describe('toUpperSnakeCase', () => {
      testOutputFunction(
        {
          standard: [swissak.StringTools.toUpperSnakeCase, 'StringTools.toUpperSnakeCase'],
          fromSlugCase: [swissak.StringTools.fromSlugCase.toUpperSnakeCase, 'StringTools.fromSlugCase.toUpperSnakeCase'],
          fromSnakeCase: [swissak.StringTools.fromSnakeCase.toUpperSnakeCase, 'StringTools.fromSnakeCase.toUpperSnakeCase'],
          fromSpaced: [swissak.StringTools.fromSpaced.toUpperSnakeCase, 'StringTools.fromSpaced.toUpperSnakeCase'],
          fromCamelCase: [swissak.StringTools.fromCamelCase.toUpperSnakeCase, 'StringTools.fromCamelCase.toUpperSnakeCase']
        },
        'upperSnakeCase'
      );
    });
    describe('toSnakeCase', () => {
      testOutputFunction(
        {
          standard: [swissak.StringTools.toSnakeCase, 'StringTools.toSnakeCase'],
          fromSlugCase: [swissak.StringTools.fromSlugCase.toSnakeCase, 'StringTools.fromSlugCase.toSnakeCase'],
          fromSnakeCase: [swissak.StringTools.fromSnakeCase.toSnakeCase, 'StringTools.fromSnakeCase.toSnakeCase'],
          fromSpaced: [swissak.StringTools.fromSpaced.toSnakeCase, 'StringTools.fromSpaced.toSnakeCase'],
          fromCamelCase: [swissak.StringTools.fromCamelCase.toSnakeCase, 'StringTools.fromCamelCase.toSnakeCase']
        },
        'snakeCase'
      );
    });
    describe('toLowerSpaced', () => {
      testOutputFunction(
        {
          standard: [swissak.StringTools.toLowerSpaced, 'StringTools.toLowerSpaced'],
          fromSlugCase: [swissak.StringTools.fromSlugCase.toLowerSpaced, 'StringTools.fromSlugCase.toLowerSpaced'],
          fromSnakeCase: [swissak.StringTools.fromSnakeCase.toLowerSpaced, 'StringTools.fromSnakeCase.toLowerSpaced'],
          fromSpaced: [swissak.StringTools.fromSpaced.toLowerSpaced, 'StringTools.fromSpaced.toLowerSpaced'],
          fromCamelCase: [swissak.StringTools.fromCamelCase.toLowerSpaced, 'StringTools.fromCamelCase.toLowerSpaced']
        },
        'lowerSpaced'
      );
    });
    describe('toUpperSpaced', () => {
      testOutputFunction(
        {
          standard: [swissak.StringTools.toUpperSpaced, 'StringTools.toUpperSpaced'],
          fromSlugCase: [swissak.StringTools.fromSlugCase.toUpperSpaced, 'StringTools.fromSlugCase.toUpperSpaced'],
          fromSnakeCase: [swissak.StringTools.fromSnakeCase.toUpperSpaced, 'StringTools.fromSnakeCase.toUpperSpaced'],
          fromSpaced: [swissak.StringTools.fromSpaced.toUpperSpaced, 'StringTools.fromSpaced.toUpperSpaced'],
          fromCamelCase: [swissak.StringTools.fromCamelCase.toUpperSpaced, 'StringTools.fromCamelCase.toUpperSpaced']
        },
        'upperSpaced'
      );
    });
    describe('toCapitalisedSpaced', () => {
      testOutputFunction(
        {
          standard: [swissak.StringTools.toCapitalisedSpaced, 'StringTools.toCapitalisedSpaced'],
          fromSlugCase: [swissak.StringTools.fromSlugCase.toCapitalisedSpaced, 'StringTools.fromSlugCase.toCapitalisedSpaced'],
          fromSnakeCase: [swissak.StringTools.fromSnakeCase.toCapitalisedSpaced, 'StringTools.fromSnakeCase.toCapitalisedSpaced'],
          fromSpaced: [swissak.StringTools.fromSpaced.toCapitalisedSpaced, 'StringTools.fromSpaced.toCapitalisedSpaced'],
          fromCamelCase: [swissak.StringTools.fromCamelCase.toCapitalisedSpaced, 'StringTools.fromCamelCase.toCapitalisedSpaced']
        },
        'capitalisedSpaced'
      );
    });
    describe('toSpaced', () => {
      testOutputFunction(
        {
          standard: [swissak.StringTools.toSpaced, 'StringTools.toSpaced'],
          fromSlugCase: [swissak.StringTools.fromSlugCase.toSpaced, 'StringTools.fromSlugCase.toSpaced'],
          fromSnakeCase: [swissak.StringTools.fromSnakeCase.toSpaced, 'StringTools.fromSnakeCase.toSpaced'],
          fromSpaced: [swissak.StringTools.fromSpaced.toSpaced, 'StringTools.fromSpaced.toSpaced'],
          fromCamelCase: [swissak.StringTools.fromCamelCase.toSpaced, 'StringTools.fromCamelCase.toSpaced']
        },
        'spaced'
      );
    });
    describe('toCharacterSeparated', () => {
      testOutputFunction(
        {
          standard: [swissak.StringTools.toCharacterSeparated, 'StringTools.toCharacterSeparated'],
          fromSlugCase: [swissak.StringTools.fromSlugCase.toCharacterSeparated, 'StringTools.fromSlugCase.toCharacterSeparated'],
          fromSnakeCase: [swissak.StringTools.fromSnakeCase.toCharacterSeparated, 'StringTools.fromSnakeCase.toCharacterSeparated'],
          fromSpaced: [swissak.StringTools.fromSpaced.toCharacterSeparated, 'StringTools.fromSpaced.toCharacterSeparated'],
          fromCamelCase: [swissak.StringTools.fromCamelCase.toCharacterSeparated, 'StringTools.fromCamelCase.toCharacterSeparated']
        },
        'characterSeparated'
      );
    });
  });

  describe('matchBrackets', () => {
    const safeSymbols = (defaultValue) => (symbols) =>
      swissak.ObjectTools.filter(kitchenSink.safe.obj(defaultValue)(symbols), (k) => ['END', '(', ')', '[', ']', '{', '}', '<', '>'].includes(k));

    const safeBracketType = (defaultValue) => (bracketType) => {
      const safed = kitchenSink.safe.str(defaultValue)(bracketType as unknown as string);
      if (['()', '[]', '{}', '<>', 'round', 'square', 'curly', 'angle'].includes(safed)) {
        return safed;
      }
      return 'round';
    };

    describe('unique', () => {
      singleTest(swissak.StringTools.matchBrackets.unique, 'StringTools.matchBrackets.unique', (unique, name) => {
        it(should` exist as ${name}`, () => {
          expect(unique).toBeDefined();
        });

        it(should` run the example`, () => {
          const input = `{
            name: "Jane",
            info: {
              age: 31,
              interests: ["Tennis", "Board Games"]
            }
          }`;
          const expctd = `❴0✧
            name: "Jane",
            info: ❴1✧
              age: 31,
              interests: ❲0✧"Tennis", "Board Games"❳0✧
            ❵1✧
          ❵0✧`;
          expect(unique(input)).toEqual(expctd);
        });

        it(should` use the provided replace symbols`, () => {
          const input = `{
            name: "Jane",
            info: {
              age: 31,
              interests: ["Tennis", "Board Games"]
            }
          }`;
          const expctd = `_0£
            name: "Jane",
            info: _1£
              age: 31,
              interests: ❲0£"Tennis", "Board Games"❳0£
            ❵1£
          ❵0£`;
          expect(unique(input, { END: '£', '{': '_' })).toEqual(expctd);
        });

        it(should` return an empty string if given an empty string`, () => {
          expect(unique('')).toEqual('');
        });

        kitchenSink.toEqual('input', (v: any) => unique(v), kitchenSink.safe.str(''), kitchenSink.samples.general);
        kitchenSink.toEqual('replaceSymbols', (v: any) => unique('[{}, {}]', v), safeSymbols({}), kitchenSink.samples.general);
      });
    });
    describe('depth', () => {
      singleTest(swissak.StringTools.matchBrackets.depth, 'StringTools.matchBrackets.depth', (depth, name) => {
        it(should` exist as ${name}`, () => {
          expect(depth).toBeDefined();
        });

        it(should` run the example`, () => {
          const input = '{name: "Jane", info: { age: 31, interests: ["Tennis", "Board Games"] }}';
          const expctd = '❴0✧name: "Jane", info: ❴1✧ age: 31, interests: ❲0✧"Tennis", "Board Games"❳0✧ ❵1✧❵0✧';
          expect(depth(input)).toEqual(expctd);
        });

        it(should` use the provided replace symbols`, () => {
          const input = '{name: "Jane", info: { age: 31, interests: ["Tennis", "Board Games"] }}';
          const expctd = '_0£name: "Jane", info: _1£ age: 31, interests: ❲0£"Tennis", "Board Games"❳0£ ❵1£❵0£';
          expect(depth(input, { END: '£', '{': '_' })).toEqual(expctd);
        });

        it(should` return an empty string if given an empty string`, () => {
          expect(depth('')).toEqual('');
        });

        kitchenSink.toEqual('input', (v: any) => depth(v), kitchenSink.safe.str(''), kitchenSink.samples.general);
        kitchenSink.toEqual('replaceSymbols', (v: any) => depth('[{}, {}]', v), safeSymbols({}), kitchenSink.samples.general);
      });
    });
    describe('clean', () => {
      singleTest(swissak.StringTools.matchBrackets.clean, 'StringTools.matchBrackets.clean', (clean, name) => {
        it(should` exist as ${name}`, () => {
          expect(clean).toBeDefined();
        });

        it(should` run the example`, () => {
          const input = '❴0✧name: "Jane", info: ❴1✧ age: 31, interests: ❲0✧"Tennis", "Board Games"❳0✧ ❵1✧❵0✧';
          const expctd = '{name: "Jane", info: { age: 31, interests: ["Tennis", "Board Games"] }}';
          expect(clean(input)).toEqual(expctd);
        });

        it(should` use the provided replace symbols`, () => {
          const input = '_0£name: "Jane", info: _1£ age: 31, interests: ❲0£"Tennis", "Board Games"❳0£ ❵1£❵0£';
          const expctd = '{name: "Jane", info: { age: 31, interests: ["Tennis", "Board Games"] }}';
          expect(clean(input, { END: '£', '{': '_' })).toEqual(expctd);
        });

        it(should` return an empty string if given an empty string`, () => {
          expect(clean('')).toEqual('');
        });

        kitchenSink.toEqual('input', (v: any) => clean(v), kitchenSink.safe.str(''), kitchenSink.samples.general);
        kitchenSink.toEqual('replaceSymbols', (v: any) => clean('[{}, {}]', v), safeSymbols({}), kitchenSink.samples.general);
      });
    });
    describe('grabDepth', () => {
      singleTest(swissak.StringTools.matchBrackets.grabDepth, 'StringTools.matchBrackets.grabDepth', (grabDepth, name) => {
        it(should` exist as ${name}`, () => {
          expect(grabDepth).toBeDefined();
        });

        it(should` run the example`, () => {
          const example = `[
            [
              [1, 2, 3],
              [4, 5, 6]
            ],
            [
              [7, 8, 9]
            ]
          ]`;
          const grabbed = grabDepth(example, 'square', 2);
          expect(grabbed).toEqual(['[1, 2, 3]', '[4, 5, 6]', '[7, 8, 9]']);
        });

        it(should` use the provided replace symbols`, () => {
          const example = `[
            [
              [1, 2, 3],
              [4, 5, 6]
            ],
            [
              [7, 8, 9]
            ]
          ]`;
          const grabbed = grabDepth(example, 'square', 2, { '[': '+', ']': '-' });

          // Note: returned grabs are cleaned
          expect(grabbed).toEqual(['[1, 2, 3]', '[4, 5, 6]', '[7, 8, 9]']);
        });

        it(should` return an empty array if given an empty string`, () => {
          expect(grabDepth('', 'square', 2)).toEqual([]);
        });

        kitchenSink.toEqual('input', (v: any) => grabDepth(v, 'square', 2), kitchenSink.safe.str(''), kitchenSink.samples.general);
        kitchenSink.toEqual('bracketType', (v: any) => grabDepth('[{}, {}]', v, 2), safeBracketType('round'), kitchenSink.samples.general);
        kitchenSink.toEqual('depthID', (v: any) => grabDepth('[{}, {}]', 'square', v), kitchenSink.safe.num(0, true, 0), kitchenSink.samples.general);
        kitchenSink.toEqual('replaceSymbols', (v: any) => grabDepth('[{}, {}]', 'square', 2, v), safeSymbols({}), kitchenSink.samples.general);
      });
    });
    describe('grabUnique', () => {
      singleTest(swissak.StringTools.matchBrackets.grabUnique, 'StringTools.matchBrackets.grabUnique', (grabUnique, name) => {
        it(should` exist as ${name}`, () => {
          expect(grabUnique).toBeDefined();
        });

        it(should` run the example`, () => {
          const example = `[
            [
              [1, 2, 3],
              [4, 5, 6]
            ],
            [
              [7, 8, 9]
            ]
          ]`;
          const grabbed = grabUnique(example, 'square', 3);
          expect(grabbed).toEqual('[4, 5, 6]');
        });

        it(should` use the provided replace symbols`, () => {
          const example = `[
            [
              [1, 2, 3],
              [4, 5, 6]
            ],
            [
              [7, 8, 9]
            ]
          ]`;
          const grabbed = grabUnique(example, 'square', 3, { '[': '+', ']': '-' });

          // Note: returned grabs are cleaned
          expect(grabbed).toEqual('[4, 5, 6]');
        });

        it(should` return an undefined if given an empty string`, () => {
          expect(grabUnique('', 'square', 3)).toEqual(undefined);
        });

        kitchenSink.toEqual('input', (v: any) => grabUnique(v, 'square', 3), kitchenSink.safe.str(''), kitchenSink.samples.general);
        kitchenSink.toEqual('bracketType', (v: any) => grabUnique('[{}, {}]', v, 3), safeBracketType('round'), kitchenSink.samples.general);
        kitchenSink.toEqual(
          'uniqueID',
          (v: any) => grabUnique('[{}, {}]', 'square', v),
          kitchenSink.safe.num(0, true, 0),
          kitchenSink.samples.general
        );
        kitchenSink.toEqual('replaceSymbols', (v: any) => grabUnique('[{}, {}]', 'square', 3, v), safeSymbols({}), kitchenSink.samples.general);
      });
    });
    describe('grab', () => {
      singleTest(swissak.StringTools.matchBrackets.grab, 'StringTools.matchBrackets.grab', (grab, name) => {
        it(should` exist as ${name}`, () => {
          expect(grab).toBeDefined();
        });

        it(should` run the example`, () => {
          const example = `[[[1, 2, 3], [4, 5, 6]], [[7, 8, 9]]]`;
          const grabbed = grab(example, 'square');
          expect(grabbed).toEqual([
            '[[[1, 2, 3], [4, 5, 6]], [[7, 8, 9]]]',
            '[[1, 2, 3], [4, 5, 6]]',
            '[1, 2, 3]',
            '[4, 5, 6]',
            '[[7, 8, 9]]',
            '[7, 8, 9]'
          ]);
        });

        it(should` use the provided replace symbols`, () => {
          const example = `[[[1, 2, 3], [4, 5, 6]], [[7, 8, 9]]]`;
          const grabbed = grab(example, 'square', { '[': '+', ']': '-' });

          // Note: returned grabs are cleaned
          expect(grabbed).toEqual([
            '[[[1, 2, 3], [4, 5, 6]], [[7, 8, 9]]]',
            '[[1, 2, 3], [4, 5, 6]]',
            '[1, 2, 3]',
            '[4, 5, 6]',
            '[[7, 8, 9]]',
            '[7, 8, 9]'
          ]);
        });

        it(should` return an empty array if given an empty string`, () => {
          expect(grab('')).toEqual([]);
        });

        kitchenSink.toEqual('input', (v: any) => grab(v, 'square'), kitchenSink.safe.str(''), kitchenSink.samples.general);
        kitchenSink.toEqual('bracketType', (v: any) => grab('[{}, {}]', v), safeBracketType('round'), kitchenSink.samples.general);
        kitchenSink.toEqual('replaceSymbols', (v: any) => grab('[{}, {}]', 'square', v), safeSymbols({}), kitchenSink.samples.general);
      });
    });
    describe('getReplaceSymbols', () => {
      singleTest(swissak.StringTools.matchBrackets.getReplaceSymbols, 'StringTools.matchBrackets.getReplaceSymbols', (getReplaceSymbols, name) => {
        it(should` exist as ${name}`, () => {
          expect(getReplaceSymbols).toBeDefined();
        });

        it(should` run the example`, () => {
          const expctd = {
            END: '✧',
            '(': '❪',
            ')': '❫',
            '[': '❲',
            ']': '❳',
            '{': '❴',
            '}': '❵',
            '<': '❰',
            '>': '❱'
          };
          expect(getReplaceSymbols()).toEqual(expctd);
        });
        it(should` override with the given symbols`, () => {
          const expctd = {
            END: '▣',
            '(': '❪',
            ')': '❫',
            '[': '❲',
            ']': '❳',
            '{': 'START_CURLY',
            '}': 'END_CURLY',
            '<': '❰',
            '>': '❱'
          };
          expect(
            getReplaceSymbols({
              END: '▣',
              '{': 'START_CURLY',
              '}': 'END_CURLY'
            })
          ).toEqual(expctd);
        });

        it(should` ignore extra properties`, () => {
          const output = getReplaceSymbols({
            END: '▣',
            '{': 'START_CURLY',
            '}': 'END_CURLY',
            foo: 'bar'
          } as any);
          expect((output as any).foo).toBeUndefined();
          expect((output as any).END).toBeDefined();
        });

        kitchenSink.toEqual('replaceSymbols', (v: any) => getReplaceSymbols(v), safeSymbols({}), kitchenSink.samples.general);
      });
    });
  });

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

        const conditionA = false;
        const conditionB = true;
        it(should` run the examples`, () => {
          expect(clx('hello')).toEqual('hello');
          expect(clx('foo', 'bar')).toEqual('foo bar');
          expect(clx('foo', conditionA && 'bar')).toEqual('foo');
          expect(clx('abc', conditionB && 'def')).toEqual('abc def');
          expect(clx({ lorem: conditionA, ipsum: conditionB })).toEqual('ipsum');
        });

        it(should` accept strings`, () => {
          expect(clx('hello', undefined, 'world')).toEqual('hello world');
        });
        it(should` accept objects`, () => {
          expect(
            clx(
              {
                hello: true,
                world: false
              },
              undefined,
              {
                foo: false,
                bar: true
              }
            )
          ).toEqual('hello bar');
        });
        it(should` accept arrays of string`, () => {
          expect(clx(undefined, ['hello', 'world'], undefined, ['foo', 'bar'])).toEqual('hello world foo bar');
        });
        it(should` accept arrays of objects`, () => {
          expect(
            clx(
              undefined,
              [
                {
                  hello: true,
                  world: false
                },
                {
                  foo: false,
                  bar: true
                }
              ],
              undefined,
              [
                {
                  lorem: false,
                  ipsum: true
                },
                {
                  dolor: true,
                  sit: false
                }
              ]
            )
          ).toEqual('hello bar ipsum dolor');
        });
      }
    );
  });
});
