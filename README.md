# swiss-ak (Swiss Army Knife)

A collection of useful little things that I like to reuse across projects

## times

A collection of utils for calculating simple times.
Each unit (e.g. second) has: a type (`second`), a constant (`SECOND`) and a function for getting multiples (`seconds(x: second) => ms`)

| unit        | type         | constant      | function                           |
| ----------- | ------------ | ------------- | ---------------------------------- |
| millisecond | `ms`         | `MILLISECOND` | `milliseconds(x: ms) => ms`        |
| second      | `second`     | `SECOND`      | `seconds(x: second) => ms`         |
| minute      | `minute`     | `MINUTE`      | `minutes(x: minute) => ms`         |
| hour        | `hour`       | `HOUR`        | `hours(x: hour) => ms`             |
| day         | `day`        | `DAY`         | `days(x: day) => ms`               |
| week        | `week`       | `WEEK`        | `weeks(x: week) => ms`             |
| month       | `month`      | `MONTH`       | `months(x: month) => ms`           |
| year        | `year`       | `YEAR`        | `years(x: year) => ms`             |
| decade      | `decade`     | `DECADE`      | `decades(x: decade) => ms`         |
| century     | `century`    | `CENTURY`     | `centuries(x: century) => ms`      |
| millennium  | `millennium` | `MILLENNIUM`  | `millenniums(x: millennium) => ms` |

### Usage

Examples

```typescript
import { MINUTE, hours, minutes } from 'swiss-ak';

const start = Date.now();
// wait for 2 hours and 12 minutes (132 minutes)
setTimeout(() => {
  const duration = Date.now() - start;
  console.log(`It's been ${duration / MINUTE} mins`); // Result: It's been 132 minutes
}, hours(2) + minutes(12));
```

## waiters

Async functions that return promises at or after a given time.

'Accurate/pinged' waiters ping at intermediary points to resolve at a more accurate time.

| Name      | Description                                          | Example                                         |
| --------- | ---------------------------------------------------- | ----------------------------------------------- |
| wait      | Standard wait promise (using setTimeout)             | `minutes(2)` = in 2 minutes                     |
| waitFor   | Accurate (pinged) wait the given ms                  | `minutes(2)` = in 2 minutes                     |
| waitUntil | Accurate (pinged) wait until given time              | `Date.now() + minutes(2)` = in 2 minutes        |
| waitEvery | Accurate (pinged) wait for next 'every X' event      | `hours(1)` = next full hour (e.g. 17:00, 22:00) |
| interval  | Accurate (pinged) interval for every 'every X' event | `hours(1)` = every hour, on the hour            |

### Usage

#### wait

```typescript
import { wait } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await wait(minutes(2));
console.log(new Date().toTimeString()); // 12:32:10
```

#### waitFor

```typescript
import { waitFor } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await waitFor(minutes(5));
console.log(new Date().toTimeString()); // 12:35:10
```

#### waitUntil

```typescript
import { waitUntil } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await waitUntil(Date.now() + minutes(10));
console.log(new Date().toTimeString()); // 12:40:10
```

#### waitEvery

```typescript
import { waitEvery } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await waitEvery(hours(2));
console.log(new Date().toTimeString()); // 14:00:00
```

#### interval / stopInterval

```typescript
import { interval, stopInterval } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
interval((intID, count) => {
  console.log(new Date().toTimeString()); // 13:00:00, 14:00:00, 15:00:00
  if (count === 3) {
    stopInterval(intID);
  }
}, hours(1));
```

## getTimer

A handy little tool for tracking how long things are taking

### Usage

```typescript
import { getTimer } from 'swiss-ak';

const timer = getTimer('Example');
timer.start('TOTAL', 'intro');

await wait(seconds(4)); // do something async

timer.switch('intro', 'ending'); // same as calling end('intro') and start('ending')

await wait(seconds(6)); // do something async

timer.end('TOTAL', 'ending');
timer.log();
```

Output:

```
Example Times:
	TOTAL: 10s
	intro: 4s
	ending: 6s
```

### timer

There is also a global instance for smaller projects/scripts

```typescript
import { timer } from 'swiss-ak';

timer.start('TOTAL');
```

## PromiseUtils

### DeferredPromise

A good old-fashioned (not recommended) deferred promise.

```typescript
import { getDeferred } from 'swiss-ak';

const run = () => {
  const deferred = getDeferred<number>();

  doSomethingWithACallback('a', 'b', (err: Error, result: number) => {
    // callback (just an example - don't actually do this this way)
    if (err) return deferred.reject(err);
    deferred.resolve(result);
  });

  return deferred.promise;
};

const luckyNumber: number = await run();
```

### PromiseUtils.allObj

Like Promise.all, but takes/gives an object instead of an array

```typescript
import { PromiseUtils, timer, ms, seconds } from 'swiss-ak';

const give = async (delay: ms, result: number, label: string) => {
  await waitFor(delay);
  timer.end(label);
  return result;
};

timer.start('allObj', 'a', 'b', 'c');

const results = PromiseUtils.allObj<number>({
  a: give(seconds(10), 1, 'a'),
  b: give(seconds(15), 2, 'b'),
  c: give(seconds(20), 3, 'c')
});

timer.end('allObj');

console.log(results); // { a: 1, b: 2, c: 3 }

timer.log();
// Times:
// 	allObj: 20s
// 	a: 10s
// 	b: 15s
// 	c: 20s
```

### PromiseUtils.allLimit

Like Promise.all, but limits the numbers of concurrently running items.

Takes an array of functions (that return Promises), rather than an array of Promises

```typescript
import { PromiseUtils, timer, ms, seconds } from 'swiss-ak';

const give = async (delay: ms, result: number, label: string) => {
  await waitFor(delay);
  timer.end(label);
  return result;
};

timer.start('allLimit', 'a', 'b', 'c', 'd');

const results = PromiseUtils.allLimit<number>(
  [give(seconds(5), 1, 'a'), give(seconds(5), 2, 'b'), give(seconds(5), 3, 'c'), give(seconds(5), 4, 'd')],
  2,
  true
);

timer.end('allLimit');

console.log(results); // [ 1, 2, 3, 4 ]

timer.log();
// Times:
// 	allLimit: 10s
// 	a: 5s
// 	b: 5s
// 	c: 10s
// 	d: 10s
```

### PromiseUtils.allLimitObj

A mix of allObj and allLimit.

Takes an array of functions (that return Promises), and limits the numbers of concurrently running items.

```typescript
import { PromiseUtils, timer, ms, seconds } from 'swiss-ak';

const give = async (delay: ms, result: number, label: string) => {
  await waitFor(delay);
  timer.end(label);
  return result;
};

timer.start('allLimitObj', 'a', 'b', 'c', 'd');

const results = PromiseUtils.allLimitObj<number>(
  {
    a: give(seconds(5), 1, 'a'),
    b: give(seconds(5), 2, 'b'),
    c: give(seconds(5), 3, 'c'),
    d: give(seconds(5), 4, 'd')
  },
  2,
  true
);

timer.end('allLimitObj');

console.log(results); // { a: 1, b: 2, c: 3, d: 4 }

timer.log();
// Times:
// 	allLimitObj: 10s
// 	a: 5s
// 	b: 5s
// 	c: 10s
// 	d: 10s
```

## progressBar

A util for creating a 'visual' progress bar for better representing progress of multiple operations.

### Usage

```typescript
import chalk from 'chalk';
import { getProgressBar } from 'swiss-ak';

const progress = getProgressBar(5, 'ABC', 20, chalk);

console.log('-'.repeat(20) + ' < 20 Chars');

for (let i = 1; i <= 5; i++) {
  console.log(progress.set(i));
}
console.log(progress.finish());
```

Output

```
-------------------- < 20 Chars
ABC ▕      ▏ [0 / 5]
ABC ▕█     ▏ [1 / 5]
ABC ▕██    ▏ [2 / 5]
ABC ▕████  ▏ [3 / 5]
ABC ▕█████ ▏ [4 / 5]
ABC ▕██████▏ [5 / 5]
```

### printLn function for node

Use instead of console.log.

Overwrites the previous line to give an updating progress bar

```javascript
const printLn = (text) => {
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
  process.stdout.moveCursor(0, -1);
  process.stdout.clearLine(0);
  process.stdout.write(text);
  process.stdout.write('\n');
};
```

## Notes

> These are used in non-vital personal projects and scripts.

> Need to be better tested before being used in prod.

> Failing/erroring/rejected promises may not behave as expected.
