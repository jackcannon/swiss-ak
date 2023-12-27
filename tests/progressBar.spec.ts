import * as swissak from '../';
import { register, should, singleTest, multiTest, kitchenSink } from './test-utils';

register({ describe, it, expect });

const IS_DEBUG = false; // controls whether to actually print the progress bar to stdout

const printSpies = (isStdOut: boolean = true, isConsole: boolean = true) => ({
  stdout: isStdOut
    ? {
        clearLine: process?.stdout?.clearLine ? jest.spyOn(process.stdout, 'clearLine') : jest.spyOn({ fn: swissak.fn.noop }, 'fn'),
        cursorTo: process?.stdout?.cursorTo ? jest.spyOn(process.stdout, 'cursorTo') : jest.spyOn({ fn: swissak.fn.noop }, 'fn'),
        moveCursor: process?.stdout?.moveCursor ? jest.spyOn(process.stdout, 'moveCursor') : jest.spyOn({ fn: swissak.fn.noop }, 'fn'),
        write: process?.stdout?.write ? jest.spyOn(process.stdout, 'write') : jest.spyOn({ fn: swissak.fn.noop }, 'fn')
      }
    : {},
  cnsle: isConsole
    ? {
        // log: jest.spyOn(console, 'log')
        log: (() => {
          const stub = jest.fn();
          console.log = stub;
          return stub;
        })()
      }
    : {}
});

const testProgressBar = (
  opts: swissak.ProgressBarOptions,
  max: number,
  fn: (max: number, options?: swissak.ProgressBarOptions) => swissak.ProgressBar = swissak.getProgressBar
) => {
  const printFn = jest.fn((line, ...args: any) => {
    if (IS_DEBUG) console.log('PRINTED:', '`' + line + '`', ...args);
  });
  const bar = fn(max, {
    maxWidth: 50,
    printFn,
    ...opts
  });
  return {
    bar,
    printFn,
    printCalls: printFn.mock.calls
  };
};

describe('progress bar', () => {
  describe('printLn', () => {
    multiTest(
      [
        [swissak.printLn, 'printLn'],
        [swissak.progressBar.printLn, 'progressBar.printLn']
      ],
      (printLn, name) => {
        it(should` exist as ${name}`, () => {
          expect(printLn).toBeDefined();
        });

        if (process?.stdout?.clearLine) {
          // when jest runs all the tests, these functions aren't available

          it(should` print a string to stdout`, () => {
            const { stdout, cnsle } = printSpies();
            printLn('test');
            expect(stdout.clearLine).toHaveBeenCalledWith(0);
            expect(stdout.cursorTo).toHaveBeenCalledWith(0);
            expect(stdout.moveCursor).toHaveBeenCalledWith(0, -1);
            expect(stdout.clearLine).toHaveBeenCalledWith(0);
            expect(stdout.write).toHaveBeenCalledWith('test');
            expect(stdout.write).toHaveBeenCalledWith('\n');
          });

          it(should` print an empty line to stdout if given string is empty`, () => {
            const { stdout, cnsle } = printSpies();
            printLn('');
            expect(stdout.write).toHaveBeenCalledWith('\n');
          });
        }
        it(should` use console.log when stdout.clearLine isn't available`, () => {
          const { cnsle } = printSpies(false);
          const clearLine = process.stdout.clearLine;
          process.stdout.clearLine = undefined;
          printLn('test');
          expect(cnsle.log).toHaveBeenCalled();
          process.stdout.clearLine = clearLine;
        });
      }
    );
  });

  describe('getProgressBar', () => {
    multiTest(
      [
        [swissak.getProgressBar, 'getProgressBar'],
        [swissak.progressBar.getProgressBar, 'progressBar.getProgressBar']
      ],
      (getProgressBar, name) => {
        it(should` exist as ${name}`, () => {
          expect(getProgressBar).toBeDefined();
        });

        it(should` return a progress bar object`, () => {
          const { bar } = testProgressBar({}, 100, getProgressBar);

          expect(bar).toBeDefined();

          expect(bar.max).toBeDefined();
          expect(typeof bar.max).toBe('number');

          expect(bar.update).toBeDefined();
          expect(typeof bar.update).toBe('function');

          expect(bar.next).toBeDefined();
          expect(typeof bar.next).toBe('function');

          expect(bar.set).toBeDefined();
          expect(typeof bar.set).toBe('function');

          expect(bar.reset).toBeDefined();
          expect(typeof bar.reset).toBe('function');

          expect(bar.start).toBeDefined();
          expect(typeof bar.start).toBe('function');

          expect(bar.finish).toBeDefined();
          expect(typeof bar.finish).toBe('function');
        });

        it(should` run a basic progress bar`, () => {
          const { bar, printCalls } = testProgressBar({}, 100, getProgressBar);

          bar.set(25);
          expect(printCalls.at(-1)).toEqual(['▕█████████                           ▏ [ 25 / 100]']);

          bar.set(50);
          expect(printCalls.at(-1)).toEqual(['▕██████████████████                  ▏ [ 50 / 100]']);

          bar.set(75);
          expect(printCalls.at(-1)).toEqual(['▕███████████████████████████         ▏ [ 75 / 100]']);
        });

        kitchenSink.toEqual(
          'max',
          (v) => {
            const { bar } = testProgressBar({}, v as any, getProgressBar);
            return bar.max;
          },
          kitchenSink.safe.num(undefined, true, -1, undefined, -1),
          kitchenSink.num
        );
        kitchenSink.toEqual(
          'options',
          (v) => {
            const { bar, printCalls } = testProgressBar(v as any, 100, getProgressBar);
            bar.update();
            return printCalls.at(-1);
          },
          kitchenSink.safe.obj({}, false, {}),
          kitchenSink.general
        );
      }
    );
  });

  describe('Progress Bar instance', () => {
    describe('update', () => {
      it(should` exist as 'update' on a progress bar object`, () => {
        const { bar } = testProgressBar({}, 100);
        expect(bar.update).toBeDefined();
      });

      it(should` print a line`, () => {
        const { bar, printCalls } = testProgressBar({}, 100);

        expect(printCalls.length).toEqual(0);
        bar.update();
        expect(printCalls.length).toEqual(1);
        expect(printCalls.at(-1)).toEqual(['▕                                    ▏ [  0 / 100]']);
      });
      it(should` return the progress bar line`, () => {
        const { bar } = testProgressBar({}, 100);

        const output = bar.update();
        expect(output).toEqual('▕                                    ▏ [  0 / 100]');
      });
    });
    describe('next', () => {
      it(should` exist as 'next' on a progress bar object`, () => {
        const { bar } = testProgressBar({}, 100);
        expect(bar.next).toBeDefined();
      });

      it(should` print a line`, () => {
        const { bar, printCalls } = testProgressBar({}, 100);

        expect(printCalls.length).toEqual(0);
        bar.next();
        expect(printCalls.length).toEqual(1);
      });
      it(should` return the progress bar line`, () => {
        const { bar } = testProgressBar({}, 100);

        const output = bar.next();
        expect(output).toEqual('▕                                    ▏ [  1 / 100]');
      });

      it(should` added 1 to the progress`, () => {
        const { bar, printCalls } = testProgressBar({}, 100);

        bar.next();
        expect(printCalls.at(-1)).toEqual(['▕                                    ▏ [  1 / 100]']);
        bar.next();
        expect(printCalls.at(-1)).toEqual(['▕█                                   ▏ [  2 / 100]']);
        bar.next();
        expect(printCalls.at(-1)).toEqual(['▕█                                   ▏ [  3 / 100]']);
      });
    });
    describe('set', () => {
      it(should` exist as 'set' on a progress bar object`, () => {
        const { bar } = testProgressBar({}, 100);
        expect(bar.set).toBeDefined();
      });

      it(should` print a line`, () => {
        const { bar, printCalls } = testProgressBar({}, 100);

        expect(printCalls.length).toEqual(0);
        bar.set(50);
        expect(printCalls.length).toEqual(1);
      });
      it(should` return the progress bar line`, () => {
        const { bar } = testProgressBar({}, 100);

        const output = bar.set(50);
        expect(output).toEqual('▕██████████████████                  ▏ [ 50 / 100]');
      });

      it(should` set the progress bar value`, () => {
        const { bar, printCalls } = testProgressBar({}, 100);

        bar.set(25);
        expect(printCalls.at(-1)).toEqual(['▕█████████                           ▏ [ 25 / 100]']);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕██████████████████                  ▏ [ 50 / 100]']);

        bar.set(75);
        expect(printCalls.at(-1)).toEqual(['▕███████████████████████████         ▏ [ 75 / 100]']);
      });

      kitchenSink.toEqual(
        'newCurrent',
        (v) => {
          const { bar, printCalls } = testProgressBar({}, 100);
          bar.set(v as any);
          return printCalls.at(-1);
        },
        kitchenSink.safe.num(undefined, true, 0, undefined),
        kitchenSink.num
      );
    });
    describe('reset', () => {
      it(should` exist as 'reset' on a progress bar object`, () => {
        const { bar } = testProgressBar({}, 100);
        expect(bar.reset).toBeDefined();
      });

      it(should` print a line`, () => {
        const { bar, printCalls } = testProgressBar({}, 100);

        expect(printCalls.length).toEqual(0);
        bar.reset();
        expect(printCalls.length).toEqual(1);
      });
      it(should` return the progress bar line`, () => {
        const { bar } = testProgressBar({}, 100);

        const output = bar.reset();
        expect(output).toEqual('▕                                    ▏ [  0 / 100]');
      });

      it(should` reset the progress bar to 0`, () => {
        const { bar, printCalls } = testProgressBar({}, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕██████████████████                  ▏ [ 50 / 100]']);

        bar.reset();
        expect(printCalls.at(-1)).toEqual(['▕                                    ▏ [  0 / 100]']);
      });
    });
    describe('start', () => {
      it(should` exist as 'start' on a progress bar object`, () => {
        const { bar } = testProgressBar({}, 100);
        expect(bar.start).toBeDefined();
      });

      it(should` print 2 lines`, () => {
        const { bar, printCalls } = testProgressBar({}, 100);

        expect(printCalls.length).toEqual(0);
        bar.start();
        expect(printCalls.length).toEqual(2);
      });
      it(should` return the progress bar line`, () => {
        const { bar } = testProgressBar({}, 100);

        const output = bar.start();
        expect(output).toEqual('▕                                    ▏ [  0 / 100]');
      });

      it(should` start the progress bar`, () => {
        const { bar, printCalls } = testProgressBar({}, 100);

        bar.start();
        expect(printCalls.at(0)).toEqual([]); // empty line
        expect(printCalls.at(1)).toEqual(['▕                                    ▏ [  0 / 100]']);
      });
    });
    describe('finish', () => {
      it(should` exist as 'finish' on a progress bar object`, () => {
        const { bar } = testProgressBar({}, 100);
        expect(bar.finish).toBeDefined();
      });

      it(should` print 2 lines`, () => {
        const { bar, printCalls } = testProgressBar({}, 100);

        expect(printCalls.length).toEqual(0);
        bar.finish();
        expect(printCalls.length).toEqual(2);
      });
      it(should` return the progress bar line`, () => {
        const { bar } = testProgressBar({}, 100);

        const output = bar.finish();
        expect(output).toEqual('▕                                    ▏ [  0 / 100]');
      });

      it(should` finish the progress bar`, () => {
        const { bar, printCalls } = testProgressBar({}, 100);

        bar.set(100);
        expect(printCalls.length).toEqual(1);
        expect(printCalls.at(0)).toEqual(['▕████████████████████████████████████▏ [100 / 100]']);

        bar.finish();
        expect(printCalls.length).toEqual(3);
        expect(printCalls.at(1)).toEqual(['▕████████████████████████████████████▏ [100 / 100]']);
        expect(printCalls.at(2)).toEqual([]); // empty line
      });
    });
  });

  describe('Progress Bar options', () => {
    describe('prefix', () => {
      // description: String to show to left of progress bar
      // default: ''
      // safeFn: safe.str(v, true, dflt)

      it(should` not prefix the progress bar if no prefix given`, () => {
        const { bar, printCalls } = testProgressBar({}, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕██████████████████                  ▏ [ 50 / 100]']);
      });
      it(should` prefix the progress bar with 'Example'`, () => {
        const { bar, printCalls } = testProgressBar({ prefix: 'Example' }, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['Example▕███████████████              ▏ [ 50 / 100]']);
      });
      it(should` prefix the progress bar with 'A Really Long String Example'`, () => {
        const { bar, printCalls } = testProgressBar({ prefix: 'A Really Long String Example' }, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['A Really Long String Example▕████    ▏ [ 50 / 100]']);
      });
      it(should` prefix the progress bar with 'A Really Really Really Long String Example'`, () => {
        const { bar, printCalls } = testProgressBar({ prefix: 'A Really Really Really Long String Example' }, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['A Really Really Really Long Str▕███  ▏ [ 50 / 100]']);
      });
    });
    describe('prefixWidth', () => {
      // description: Min width of prefix - `10` => `Example˽˽˽`
      // default: 0
      // safeFn: safe.num(v, true, 0, undefined, dflt)

      it(should` set the min width of the prefix to default`, () => {
        const { bar, printCalls } = testProgressBar({ prefix: 'EG', prefixWidth: undefined }, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['EG▕█████████████████                 ▏ [ 50 / 100]']);
      });
      it(should` set the min width of the prefix to 10`, () => {
        const { bar, printCalls } = testProgressBar({ prefix: 'Example', prefixWidth: 10 }, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['Example   ▕█████████████             ▏ [ 50 / 100]']);
      });
      it(should` set the min width of the prefix to 20`, () => {
        const { bar, printCalls } = testProgressBar({ prefix: 'Example', prefixWidth: 20 }, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['Example             ▕████████        ▏ [ 50 / 100]']);
      });
    });
    describe('maxWidth', () => {
      // description: The maximum width the entire string may extend
      // default: process?.stdout?.columns !== undefined ? process.stdout.columns : 100
      // safeFn: safe.num(v, true, 0, undefined, dflt)

      it(should` set the max width to the default`, () => {
        process.stdout.columns = 120;
        const { bar, printCalls } = testProgressBar({ maxWidth: undefined }, 100);
        bar.set(50);
        expect(printCalls.at(-1)).toEqual([
          '▕█████████████████████████████████████████████████████                                                     ▏ [ 50 / 100]'
        ]);
      });
      it(should` set the max width to 10`, () => {
        const { bar, printCalls } = testProgressBar({ maxWidth: 10 }, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕▏ [ 50 / 100]']);
      });
      it(should` set the max width to 20`, () => {
        const { bar, printCalls } = testProgressBar({ maxWidth: 20 }, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕███   ▏ [ 50 / 100]']);
      });
      it(should` set the max width to 30`, () => {
        const { bar, printCalls } = testProgressBar({ maxWidth: 30 }, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕████████        ▏ [ 50 / 100]']);
      });
    });
    describe('wrapperFn', () => {
      // description: function to wrap the printed string (eg `chalk.cyan)`
      // default: fn.noact
      // safeFn: safe.func(v, dflt)

      it(should` do nothing when nothing given`, () => {
        const { bar, printCalls } = testProgressBar({ wrapperFn: undefined }, 100);
        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕██████████████████                  ▏ [ 50 / 100]']);
      });
      it(should` wrap the printed string with double curly brackets`, () => {
        const { bar, printCalls } = testProgressBar({ wrapperFn: (str) => `{{${str}}}` }, 100);
        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['{{▕██████████████████                  ▏ [ 50 / 100]}}']);
      });
      it(should` wrap the printed string with underscores`, () => {
        const { bar, printCalls } = testProgressBar({ wrapperFn: (str) => `_${str}_` }, 100);
        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['_▕██████████████████                  ▏ [ 50 / 100]_']);
      });
    });
    describe('barWrapFn', () => {
      // description: function to wrap the bar
      // default: fn.noact
      // safeFn: safe.func(v, dflt)

      it(should` do nothing when nothing given`, () => {
        const { bar, printCalls } = testProgressBar({ barWrapFn: undefined }, 100);
        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕██████████████████                  ▏ [ 50 / 100]']);
      });
      it(should` wrap the bar with double curly brackets`, () => {
        const { bar, printCalls } = testProgressBar({ barWrapFn: (str) => `{{${str}}}` }, 100);
        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕{{██████████████████                  }}▏ [ 50 / 100]']);
      });
      it(should` wrap the bar with underscores`, () => {
        const { bar, printCalls } = testProgressBar({ barWrapFn: (str) => `_${str}_` }, 100);
        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕_██████████████████                  _▏ [ 50 / 100]']);
      });
    });
    describe('barProgWrapFn', () => {
      // description: function to wrap the 'complete' segment of the bar
      // default: fn.noact
      // safeFn: safe.func(v, dflt)

      it(should` do nothing when nothing given`, () => {
        const { bar, printCalls } = testProgressBar({ barProgWrapFn: undefined }, 100);
        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕██████████████████                  ▏ [ 50 / 100]']);
      });
      it(should` wrap the 'complete' segment of the bar with double curly brackets`, () => {
        const { bar, printCalls } = testProgressBar({ barProgWrapFn: (str) => `{{${str}}}` }, 100);
        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕{{██████████████████}}                  ▏ [ 50 / 100]']);
      });
      it(should` wrap the 'complete' segment of the bar with underscores`, () => {
        const { bar, printCalls } = testProgressBar({ barProgWrapFn: (str) => `_${str}_` }, 100);
        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕_██████████████████_                  ▏ [ 50 / 100]']);
      });
    });
    describe('barCurrentWrapFn', () => {
      // description: function to wrap the 'current' segment of the bar
      // default: fn.noact
      // safeFn: safe.func(v, dflt)

      it(should` do nothing when nothing given`, () => {
        const { bar, printCalls } = testProgressBar({ barCurrentWrapFn: undefined }, 100);
        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕██████████████████                  ▏ [ 50 / 100]']);
      });
      it(should` wrap the 'current' segment of the bar with double curly brackets`, () => {
        const { bar, printCalls } = testProgressBar(
          {
            barCurrentWrapFn: (str) => `{{${str}}}`,
            showCurrent: true
          },
          3
        );
        bar.set(1);
        expect(printCalls.at(-1)).toEqual(['▕█████████████{{▞▞▞▞▞▞▞▞▞▞▞▞▞▞}}             ▏ [1 / 3]']);
      });
      it(should` wrap the 'current' segment of the bar with underscores`, () => {
        const { bar, printCalls } = testProgressBar(
          {
            barCurrentWrapFn: (str) => `_${str}_`,
            showCurrent: true
          },
          3
        );
        bar.set(1);
        expect(printCalls.at(-1)).toEqual(['▕█████████████_▞▞▞▞▞▞▞▞▞▞▞▞▞▞_             ▏ [1 / 3]']);
      });
    });
    describe('barEmptyWrapFn', () => {
      // description: function to wrap the empty/track part of the line
      // default: fn.noact
      // safeFn: safe.func(v, dflt)

      it(should` do nothing when nothing given`, () => {
        const { bar, printCalls } = testProgressBar({ barEmptyWrapFn: undefined }, 100);
        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕██████████████████                  ▏ [ 50 / 100]']);
      });
      it(should` wrap the empty/track part of the line with double curly brackets`, () => {
        const { bar, printCalls } = testProgressBar({ barEmptyWrapFn: (str) => `{{${str}}}` }, 100);
        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕██████████████████{{                  }}▏ [ 50 / 100]']);
      });
      it(should` wrap the empty/track part of the line with underscores`, () => {
        const { bar, printCalls } = testProgressBar({ barEmptyWrapFn: (str) => `_${str}_` }, 100);
        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕██████████████████_                  _▏ [ 50 / 100]']);
      });
    });
    describe('showCount', () => {
      // description: Show numerical values of the count - `[11 / 15]`
      // default: true
      // safeFn: safe.bool(v, dflt)

      it(should` show the count when default`, () => {
        const { bar, printCalls } = testProgressBar({}, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕██████████████████                  ▏ [ 50 / 100]']);
      });
      it(should` show the count when true`, () => {
        const { bar, printCalls } = testProgressBar({ showCount: true }, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕██████████████████                  ▏ [ 50 / 100]']);
      });
      it(should` not show the count when false`, () => {
        const { bar, printCalls } = testProgressBar({ showCount: false }, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕████████████████████████                        ▏']);
      });
    });
    describe('showPercent', () => {
      // description: Show percentage completed - `( 69%)`
      // default: false
      // safeFn: safe.bool(v, dflt)

      it(should` not show the percentage when default`, () => {
        const { bar, printCalls } = testProgressBar({}, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕██████████████████                  ▏ [ 50 / 100]']);
      });
      it(should` show the percentage when true`, () => {
        const { bar, printCalls } = testProgressBar({ showPercent: true }, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕███████████████              ▏ [ 50 / 100] ( 50%)']);
      });
      it(should` not show the percentage when false`, () => {
        const { bar, printCalls } = testProgressBar({ showPercent: false }, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕██████████████████                  ▏ [ 50 / 100]']);
      });
    });
    describe('countWidth', () => {
      // description: Min width of nums for showCount - `3` => `[  1 /  15]`
      // default: 0
      // safeFn: safe.num(v, true, 0, undefined, dflt)

      it(should` set the min width of the count to default`, () => {
        const { bar, printCalls } = testProgressBar({}, 9);

        bar.set(3);
        expect(printCalls.at(-1)).toEqual(['▕█████████████                           ▏ [3 / 9]']);
      });
      it(should` set the min width of the count to 1`, () => {
        const { bar, printCalls } = testProgressBar({ countWidth: 1 }, 9);

        bar.set(3);
        expect(printCalls.at(-1)).toEqual(['▕█████████████                           ▏ [3 / 9]']);
      });
      it(should` set the min width of the count to 2`, () => {
        const { bar, printCalls } = testProgressBar({ countWidth: 2 }, 9);

        bar.set(3);
        expect(printCalls.at(-1)).toEqual(['▕█████████████                         ▏ [ 3 /  9]']);
      });
      it(should` set the min width of the count to 3`, () => {
        const { bar, printCalls } = testProgressBar({ countWidth: 3 }, 9);

        bar.set(3);
        expect(printCalls.at(-1)).toEqual(['▕████████████                        ▏ [  3 /   9]']);
      });
      it(should` set the min width of the count to 4`, () => {
        const { bar, printCalls } = testProgressBar({ countWidth: 4 }, 9);

        bar.set(3);
        expect(printCalls.at(-1)).toEqual(['▕███████████                       ▏ [   3 /    9]']);
      });
    });
    describe('progChar', () => {
      // description: Character to use for progress section of bar
      // default: '█'
      // safeFn: safe.str(v, false, dflt)

      it(should` set the progress character to default`, () => {
        const { bar, printCalls } = testProgressBar({}, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕██████████████████                  ▏ [ 50 / 100]']);
      });
      it(should` set the progress character to 'X'`, () => {
        const { bar, printCalls } = testProgressBar({ progChar: 'X' }, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕XXXXXXXXXXXXXXXXXX                  ▏ [ 50 / 100]']);
      });
      it(should` set the progress character to '='`, () => {
        const { bar, printCalls } = testProgressBar({ progChar: '=' }, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕==================                  ▏ [ 50 / 100]']);
      });
    });
    describe('emptyChar', () => {
      // description: Character to use for empty (rail) section of bar
      // default: ' '
      // safeFn: safe.str(v, false, dflt)

      it(should` set the empty character to default`, () => {
        const { bar, printCalls } = testProgressBar({}, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕██████████████████                  ▏ [ 50 / 100]']);
      });
      it(should` set the empty character to 'X'`, () => {
        const { bar, printCalls } = testProgressBar({ emptyChar: 'X' }, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕██████████████████XXXXXXXXXXXXXXXXXX▏ [ 50 / 100]']);
      });
      it(should` set the empty character to '='`, () => {
        const { bar, printCalls } = testProgressBar({ emptyChar: '=' }, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕██████████████████==================▏ [ 50 / 100]']);
      });
    });
    describe('startChar', () => {
      // description: Character to start the progress bar with
      // default: '▕'
      // safeFn: safe.str(v, false, dflt)

      it(should` set the start character to default`, () => {
        const { bar, printCalls } = testProgressBar({}, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕██████████████████                  ▏ [ 50 / 100]']);
      });
      it(should` set the start character to 'X'`, () => {
        const { bar, printCalls } = testProgressBar({ startChar: 'X' }, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['X██████████████████                  ▏ [ 50 / 100]']);
      });
      it(should` set the start character to '='`, () => {
        const { bar, printCalls } = testProgressBar({ startChar: '=' }, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['=██████████████████                  ▏ [ 50 / 100]']);
      });
    });
    describe('endChar', () => {
      // description: Character to end the progress bar with
      // default: '▏'
      // safeFn: safe.str(v, false, dflt)

      it(should` set the end character to default`, () => {
        const { bar, printCalls } = testProgressBar({}, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕██████████████████                  ▏ [ 50 / 100]']);
      });
      it(should` set the end character to 'X'`, () => {
        const { bar, printCalls } = testProgressBar({ endChar: 'X' }, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕██████████████████                  X [ 50 / 100]']);
      });
      it(should` set the end character to '='`, () => {
        const { bar, printCalls } = testProgressBar({ endChar: '=' }, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕██████████████████                  = [ 50 / 100]']);
      });
    });
    describe('showCurrent', () => {
      // description: Show the 'current' segment of the bar seperately
      // default: false
      // safeFn: safe.bool(v, dflt)

      it(should` not show the current segment when default`, () => {
        const { bar, printCalls } = testProgressBar({}, 3);

        bar.set(1);
        expect(printCalls.at(-1)).toEqual(['▕█████████████                           ▏ [1 / 3]']);
      });
      it(should` show the current segment when true`, () => {
        const { bar, printCalls } = testProgressBar({ showCurrent: true }, 3);

        bar.set(1);
        expect(printCalls.at(-1)).toEqual(['▕█████████████▞▞▞▞▞▞▞▞▞▞▞▞▞▞             ▏ [1 / 3]']);
      });
      it(should` not show the current segment when false`, () => {
        const { bar, printCalls } = testProgressBar({ showCurrent: false }, 3);

        bar.set(1);
        expect(printCalls.at(-1)).toEqual(['▕█████████████                           ▏ [1 / 3]']);
      });
    });
    describe('currentChar', () => {
      // description: Character to use the the 'current' segment
      // default: '▞'
      // safeFn: safe.str(v, false, dflt)

      it(should` set the current character to default`, () => {
        const { bar, printCalls } = testProgressBar({ showCurrent: true }, 3);

        bar.set(1);
        expect(printCalls.at(-1)).toEqual(['▕█████████████▞▞▞▞▞▞▞▞▞▞▞▞▞▞             ▏ [1 / 3]']);
      });
      it(should` set the current character to 'X'`, () => {
        const { bar, printCalls } = testProgressBar({ showCurrent: true, currentChar: 'X' }, 3);

        bar.set(1);
        expect(printCalls.at(-1)).toEqual(['▕█████████████XXXXXXXXXXXXXX             ▏ [1 / 3]']);
      });
      it(should` set the current character to '='`, () => {
        const { bar, printCalls } = testProgressBar({ showCurrent: true, currentChar: '=' }, 3);

        bar.set(1);
        expect(printCalls.at(-1)).toEqual(['▕█████████████==============             ▏ [1 / 3]']);
      });
    });
    describe('print', () => {
      // description: Whether or not to print/output/log the progress bar
      // default: true
      // safeFn: safe.bool(v, dflt)

      it(should` print/not print the progress bar when default`, () => {
        const { bar, printCalls } = testProgressBar({}, 100);

        const output = bar.set(50);
        const expctd = '▕██████████████████                  ▏ [ 50 / 100]';

        expect(output).toEqual(expctd);

        expect(printCalls.length).toEqual(1);
        expect(printCalls.at(-1)).toEqual([expctd]);
      });
      it(should` print the progress bar when true`, () => {
        const { bar, printCalls } = testProgressBar({ print: true }, 100);

        const output = bar.set(50);
        const expctd = '▕██████████████████                  ▏ [ 50 / 100]';

        expect(output).toEqual(expctd);

        expect(printCalls.length).toEqual(1);
        expect(printCalls.at(-1)).toEqual([expctd]);
      });
      it(should` print the progress bar when true`, () => {
        const { bar, printCalls } = testProgressBar({ print: false }, 100);

        const output = bar.set(50);
        const expctd = '▕██████████████████                  ▏ [ 50 / 100]';

        expect(output).toEqual(expctd);
        expect(printCalls.length).toEqual(0);
      });
    });
    describe('printFn', () => {
      // description: Function to use to print the progress bar
      // default: progressBar.printLn
      // safeFn: safe.func(v, dflt)

      it(should` print normally with default`, () => {
        const { bar, printCalls } = testProgressBar({}, 100);

        bar.set(50);
        expect(printCalls.at(-1)).toEqual(['▕██████████████████                  ▏ [ 50 / 100]']);
      });
      it(should` print using the provided function`, () => {
        const stub = jest.fn((line) => `{{ ${line} }}`);
        const { bar, printCalls } = testProgressBar({ printFn: stub }, 100);

        expect(printCalls.length).toEqual(0);
        expect(stub.mock.calls.length).toEqual(0);

        const output = bar.set(50);

        expect(output).toEqual('▕██████████████████                  ▏ [ 50 / 100]');
        expect(printCalls.length).toEqual(0);
        expect(stub.mock.calls.length).toEqual(1);
      });
    });
  });

  describe('getFullOptions', () => {
    it(should` produce a full options object`, () => {
      const opts = swissak.progressBar.getFullOptions({});

      process.stdout.columns = 120;

      expect(opts).toEqual({
        prefix: '',
        prefixWidth: 0,
        maxWidth: 120,
        wrapperFn: swissak.fn.noact,
        barWrapFn: swissak.fn.noact,
        barProgWrapFn: swissak.fn.noact,
        barCurrentWrapFn: swissak.fn.noact,
        barEmptyWrapFn: swissak.fn.noact,
        showCount: true,
        showPercent: false,
        countWidth: 0,
        progChar: '█',
        emptyChar: ' ',
        startChar: '▕',
        endChar: '▏',
        showCurrent: false,
        currentChar: '▞',
        print: true,
        printFn: swissak.progressBar.printLn
      });
    });

    describe('prefix', () => {
      it(should` default correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({});
        expect(opts.prefix).toEqual('');
      });
      it(should` set correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({ prefix: 'test' });
        expect(opts.prefix).toEqual('test');
      });
      kitchenSink.toEqual(
        'prefix',
        (v) => swissak.progressBar.getFullOptions({ prefix: v as any }).prefix,
        kitchenSink.safe.str('', true, ''),
        kitchenSink.general
      );
    });
    describe('prefixWidth', () => {
      it(should` default correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({});
        expect(opts.prefixWidth).toEqual(0);
      });
      it(should` set correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({ prefixWidth: 10 });
        expect(opts.prefixWidth).toEqual(10);
      });
      kitchenSink.toEqual(
        'prefixWidth',
        (v) => swissak.progressBar.getFullOptions({ prefixWidth: v as any }).prefixWidth,
        kitchenSink.safe.num(0, true, 0, undefined, 0),
        kitchenSink.num
      );
    });
    describe('maxWidth', () => {
      process.stdout.columns = 120;

      it(should` default correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({});
        expect(opts.maxWidth).toEqual(120);
      });
      it(should` set correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({ maxWidth: 10 });
        expect(opts.maxWidth).toEqual(10);
      });
      kitchenSink.toEqual(
        'maxWidth',
        (v) => swissak.progressBar.getFullOptions({ maxWidth: v as any }).maxWidth,
        kitchenSink.safe.num(120, true, 0, undefined, 120),
        kitchenSink.num
      );
    });
    describe('wrapperFn', () => {
      it(should` default correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({});
        expect(opts.wrapperFn).toEqual(swissak.fn.noact);
      });
      it(should` set correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({ wrapperFn: swissak.fn.noact });
        expect(opts.wrapperFn).toEqual(swissak.fn.noact);
      });
      kitchenSink.toEqual(
        'wrapperFn',
        (v) => swissak.progressBar.getFullOptions({ wrapperFn: v as any }).wrapperFn,
        kitchenSink.safe.func(swissak.fn.noact, swissak.fn.noact),
        kitchenSink.general
      );
    });
    describe('barWrapFn', () => {
      it(should` default correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({});
        expect(opts.barWrapFn).toEqual(swissak.fn.noact);
      });
      it(should` set correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({ barWrapFn: swissak.fn.noact });
        expect(opts.barWrapFn).toEqual(swissak.fn.noact);
      });
      kitchenSink.toEqual(
        'barWrapFn',
        (v) => swissak.progressBar.getFullOptions({ barWrapFn: v as any }).barWrapFn,
        kitchenSink.safe.func(swissak.fn.noact, swissak.fn.noact),
        kitchenSink.general
      );
    });
    describe('barProgWrapFn', () => {
      it(should` default correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({});
        expect(opts.barProgWrapFn).toEqual(swissak.fn.noact);
      });
      it(should` set correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({ barProgWrapFn: swissak.fn.noact });
        expect(opts.barProgWrapFn).toEqual(swissak.fn.noact);
      });
      kitchenSink.toEqual(
        'barProgWrapFn',
        (v) => swissak.progressBar.getFullOptions({ barProgWrapFn: v as any }).barProgWrapFn,
        kitchenSink.safe.func(swissak.fn.noact, swissak.fn.noact),
        kitchenSink.general
      );
    });
    describe('barCurrentWrapFn', () => {
      it(should` default correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({});
        expect(opts.barCurrentWrapFn).toEqual(swissak.fn.noact);
      });
      it(should` set correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({ barCurrentWrapFn: swissak.fn.noact });
        expect(opts.barCurrentWrapFn).toEqual(swissak.fn.noact);
      });
      kitchenSink.toEqual(
        'barCurrentWrapFn',
        (v) => swissak.progressBar.getFullOptions({ barCurrentWrapFn: v as any }).barCurrentWrapFn,
        kitchenSink.safe.func(swissak.fn.noact, swissak.fn.noact),
        kitchenSink.general
      );
    });
    describe('barEmptyWrapFn', () => {
      it(should` default correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({});
        expect(opts.barEmptyWrapFn).toEqual(swissak.fn.noact);
      });
      it(should` set correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({ barEmptyWrapFn: swissak.fn.noact });
        expect(opts.barEmptyWrapFn).toEqual(swissak.fn.noact);
      });
      kitchenSink.toEqual(
        'barEmptyWrapFn',
        (v) => swissak.progressBar.getFullOptions({ barEmptyWrapFn: v as any }).barEmptyWrapFn,
        kitchenSink.safe.func(swissak.fn.noact, swissak.fn.noact),
        kitchenSink.general
      );
    });
    describe('showCount', () => {
      it(should` default correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({});
        expect(opts.showCount).toEqual(true);
      });
      it(should` set correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({ showCount: false });
        expect(opts.showCount).toEqual(false);
      });
      kitchenSink.toEqual(
        'showCount',
        (v) => swissak.progressBar.getFullOptions({ showCount: v as any }).showCount,
        kitchenSink.safe.bool(true, true),
        kitchenSink.general
      );
    });
    describe('showPercent', () => {
      // description: Show percentage completed - `( 69%)`
      // default: false
      // safeFn: safe.bool(v, dflt)

      it(should` default correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({});
        expect(opts.showPercent).toEqual(false);
      });
      it(should` set correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({ showPercent: true });
        expect(opts.showPercent).toEqual(true);
      });
      kitchenSink.toEqual(
        'showPercent',
        (v) => swissak.progressBar.getFullOptions({ showPercent: v as any }).showPercent,
        kitchenSink.safe.bool(false, false),
        kitchenSink.general
      );
    });
    describe('countWidth', () => {
      it(should` default correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({});
        expect(opts.countWidth).toEqual(0);
      });
      it(should` set correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({ countWidth: 10 });
        expect(opts.countWidth).toEqual(10);
      });
      kitchenSink.toEqual(
        'countWidth',
        (v) => swissak.progressBar.getFullOptions({ countWidth: v as any }).countWidth,
        kitchenSink.safe.num(0, true, 0, undefined, 0),
        kitchenSink.num
      );
    });
    describe('progChar', () => {
      it(should` default correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({});
        expect(opts.progChar).toEqual('█');
      });
      it(should` set correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({ progChar: 'test' });
        expect(opts.progChar).toEqual('test');
      });
      kitchenSink.toEqual(
        'progChar',
        (v) => swissak.progressBar.getFullOptions({ progChar: v as any }).progChar,
        kitchenSink.safe.str('█', false, '█'),
        kitchenSink.general
      );
    });
    describe('emptyChar', () => {
      it(should` default correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({});
        expect(opts.emptyChar).toEqual(' ');
      });
      it(should` set correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({ emptyChar: 'test' });
        expect(opts.emptyChar).toEqual('test');
      });
      kitchenSink.toEqual(
        'emptyChar',
        (v) => swissak.progressBar.getFullOptions({ emptyChar: v as any }).emptyChar,
        kitchenSink.safe.str(' ', false, ' '),
        kitchenSink.general
      );
    });
    describe('startChar', () => {
      it(should` default correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({});
        expect(opts.startChar).toEqual('▕');
      });
      it(should` set correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({ startChar: 'test' });
        expect(opts.startChar).toEqual('test');
      });
      kitchenSink.toEqual(
        'startChar',
        (v) => swissak.progressBar.getFullOptions({ startChar: v as any }).startChar,
        kitchenSink.safe.str('▕', false, '▕'),
        kitchenSink.general
      );
    });
    describe('endChar', () => {
      it(should` default correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({});
        expect(opts.endChar).toEqual('▏');
      });
      it(should` set correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({ endChar: 'test' });
        expect(opts.endChar).toEqual('test');
      });
      kitchenSink.toEqual(
        'endChar',
        (v) => swissak.progressBar.getFullOptions({ endChar: v as any }).endChar,
        kitchenSink.safe.str('▏', false, '▏'),
        kitchenSink.general
      );
    });
    describe('showCurrent', () => {
      it(should` default correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({});
        expect(opts.showCurrent).toEqual(false);
      });
      it(should` set correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({ showCurrent: true });
        expect(opts.showCurrent).toEqual(true);
      });
      kitchenSink.toEqual(
        'showCurrent',
        (v) => swissak.progressBar.getFullOptions({ showCurrent: v as any }).showCurrent,
        kitchenSink.safe.bool(false, false),
        kitchenSink.general
      );
    });
    describe('currentChar', () => {
      it(should` default correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({});
        expect(opts.currentChar).toEqual('▞');
      });
      it(should` set correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({ currentChar: 'test' });
        expect(opts.currentChar).toEqual('test');
      });
      kitchenSink.toEqual(
        'currentChar',
        (v) => swissak.progressBar.getFullOptions({ currentChar: v as any }).currentChar,
        kitchenSink.safe.str('▞', false, '▞'),
        kitchenSink.general
      );
    });
    describe('print', () => {
      it(should` default correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({});
        expect(opts.print).toEqual(true);
      });
      it(should` set correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({ print: false });
        expect(opts.print).toEqual(false);
      });
      kitchenSink.toEqual(
        'print',
        (v) => swissak.progressBar.getFullOptions({ print: v as any }).print,
        kitchenSink.safe.bool(true, true),
        kitchenSink.general
      );
    });
    describe('printFn', () => {
      it(should` default correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({});
        expect(opts.printFn).toEqual(swissak.progressBar.printLn);
      });
      it(should` set correctly`, () => {
        const opts = swissak.progressBar.getFullOptions({ printFn: swissak.fn.noact });
        expect(opts.printFn).toEqual(swissak.fn.noact);
      });
      kitchenSink.toEqual(
        'printFn',
        (v) => swissak.progressBar.getFullOptions({ printFn: v as any }).printFn,
        kitchenSink.safe.func(swissak.progressBar.printLn, swissak.progressBar.printLn),
        kitchenSink.general
      );
    });
  });
});
