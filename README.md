# swiss-ak (Swiss Army Knife)

A collection of useful little things that I like to reuse across projects

<!-- DOCS: TOC START -->

  - [Table of Contents](#)
    - [times](#times)
    - [waiters](#waiters)
      - [wait](#wait)
      - [waitUntil](#waituntil)
      - [waitFor](#waitfor)
      - [waitEvery](#waitevery)
      - [stopInterval](#stopinterval)
      - [interval](#interval)
    - [fn](#fn)
      - [noop](#noop)
      - [noact](#noact)
      - [result](#result)
      - [resolve](#resolve)
      - [reject](#reject)
      - [filters](#filters)
        - [exists](#exists)
        - [isTruthy](#istruthy)
        - [isFalsy](#isfalsy)
        - [isEmpty](#isempty)
        - [isNotEmpty](#isnotempty)
        - [isEqual](#isequal)
        - [isNotEqual](#isnotequal)
        - [dedupe](#dedupe)
        - [dedupeMapped](#dedupemapped)
      - [maps](#maps)
        - [toString](#tostring)
        - [toNumber](#tonumber)
        - [toBool](#tobool)
        - [toProp](#toprop)
        - [toFixed](#tofixed)
      - [sorts](#sorts)
        - [asc](#asc)
        - [desc](#desc)
        - [byProp](#byprop)
        - [nearestTo](#nearestto)
        - [furthestFrom](#furthestfrom)
        - [arrayAsc](#arrayasc)
        - [arrayDesc](#arraydesc)
      - [reduces](#reduces)
        - [combine](#combine)
        - [combineProp](#combineprop)
        - [mode](#mode)
        - [modeMapped](#modemapped)
      - [everys](#everys)
        - [isAllEqual](#isallequal)
    - [ArrayTools](#arraytools)
      - [create](#create)
      - [range](#range)
      - [zip](#zip)
      - [zipMax](#zipmax)
      - [sortByMapped](#sortbymapped)
      - [randomise](#randomise)
      - [reverse](#reverse)
      - [entries](#entries)
      - [repeat](#repeat)
      - [roll](#roll)
      - [sortNumberedText](#sortnumberedtext)
      - [partition](#partition)
      - [groupObj](#groupobj)
      - [group](#group)
      - [utils](#utils)
        - [isNumString](#isnumstring)
        - [partitionNums](#partitionnums)
    - [ObjectTools](#objecttools)
      - [remodel](#remodel)
      - [remodelEach](#remodeleach)
      - [map](#map)
      - [mapValues](#mapvalues)
      - [mapKeys](#mapkeys)
      - [filter](#filter)
      - [clean](#clean)
    - [StringTools](#stringtools)
      - [capitalise](#capitalise)
      - [angloise](#angloise)
      - [clean](#clean)
      - [repeat](#repeat)
      - [StringCaseHandler](#stringcasehandler)
        - [toLowerCamelCase](#tolowercamelcase)
        - [toUpperCamelCase](#touppercamelcase)
        - [toCamelCase](#tocamelcase)
        - [toLowerSlugCase](#tolowerslugcase)
        - [toUpperSlugCase](#toupperslugcase)
        - [toSlugCase](#toslugcase)
        - [toLowerSnakeCase](#tolowersnakecase)
        - [toUpperSnakeCase](#touppersnakecase)
        - [toSnakeCase](#tosnakecase)
        - [toLowerSpaced](#tolowerspaced)
        - [toUpperSpaced](#toupperspaced)
        - [toCapitalisedSpaced](#tocapitalisedspaced)
        - [toSpaced](#tospaced)
        - [toCharacterSeparated](#tocharacterseparated)
      - [fromSlugCase](#fromslugcase)
      - [fromSnakeCase](#fromsnakecase)
      - [fromSpaced](#fromspaced)
      - [fromCamelCase](#fromcamelcase)
      - [clx](#clx)
    - [MathsTools](#mathstools)
      - [fixFloat](#fixfloat)
      - [addAll](#addall)
      - [round](#round)
        - [floorTo](#floorto)
        - [roundTo](#roundto)
        - [ceilTo](#ceilto)
      - [lerp](#lerp)
      - [lerpArray](#lerparray)
      - [lerpObj](#lerpobj)
      - [clamp](#clamp)
      - [getOrdinal](#getordinal)
    - [PromiseTools](#promisetools)
      - [getDeferred](#getdeferred)
      - [all](#all)
      - [allLimit](#alllimit)
      - [each](#each)
      - [eachLimit](#eachlimit)
      - [map](#map)
      - [mapLimit](#maplimit)
      - [allObj](#allobj)
      - [allLimitObj](#alllimitobj)
      - [DeferredPromise](#deferredpromise)
    - [ColourTools](#colourtools)
      - [ColourValues](#colourvalues)
      - [HSLValues](#hslvalues)
      - [namedColours](#namedcolours)
      - [parse](#parse)
      - [toHex](#tohex)
      - [getLuminance](#getluminance)
      - [toYUV](#toyuv)
      - [toHSL](#tohsl)
      - [fromHSL](#fromhsl)
      - [invertColour](#invertcolour)
      - [getContrastedColour](#getcontrastedcolour)
      - [getLimitedColour](#getlimitedcolour)
    - [TimeTools](#timetools)
      - [toReadableDuration](#toreadableduration)
    - [ErrorTools](#errortools)
      - [tryOr](#tryor)
      - [retry](#retry)
      - [retryOr](#retryor)
    - [progressBar](#progressbar)
      - [printLn](#println)
      - [Options](#options)
      - [getProgressBar](#getprogressbar)
        - [update](#update)
        - [next](#next)
        - [set](#set)
        - [reset](#reset)
        - [start](#start)
        - [finish](#finish)
        - [max](#max)
    - [symbols](#symbols)
      - [superscript](#superscript)
    - [queue](#queue)
      - [QueueManager](#queuemanager)
        - [setDefaultPauseTime](#setdefaultpausetime)
        - [setPauseTime](#setpausetime)
        - [add](#add)
        - [new](#new)
      - [queue](#queue)
    - [timer](#timer)
      - [getTimer](#gettimer)
      - [timer](#timer)
    - [Helper Types](#helper-types)
      - [Partial<T>](#partialt)
      - [KeysOnly<T>](#keysonlyt)
      - [Numbered<T>](#numberedt)
      - [OfType<T, U>](#oftypet-u)
      - [ObjOfType<T>](#objoftypet)
      - [RemapOf<O, T>](#remapofo-t)

<!-- DOCS: TOC END -->

<!-- DOCS: MAIN START -->

## times
A collection of Tools for calculating simple times.
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

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

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

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### wait
- `wait`
- `waiters.wait`

Standard wait promise (using setTimeout)

```typescript
import { wait } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await wait(minutes(2));
console.log(new Date().toTimeString()); // 12:32:10
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### waitUntil
- `waitUntil`
- `waiters.waitUntil`

Accurate (pinged) wait until given time

```typescript
import { waitUntil } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await waitUntil(Date.now() + minutes(10));
console.log(new Date().toTimeString()); // 12:40:10
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### waitFor
- `waitFor`
- `waiters.waitFor`

Accurate (pinged) wait the given ms

```typescript
import { waitFor } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await waitFor(minutes(5));
console.log(new Date().toTimeString()); // 12:35:10
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### waitEvery
- `waitEvery`
- `waiters.waitEvery`

Accurate (pinged) wait for next 'every X' event

```typescript
import { waitEvery } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await waitEvery(hours(2));
console.log(new Date().toTimeString()); // 14:00:00
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### stopInterval
- `stopInterval`
- `waiters.stopInterval`

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

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### interval
- `interval`
- `waiters.interval`

Accurate (pinged) interval for every 'every X' event

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

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## fn
A collection of useful higher-order functions.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### noop
- `fn.noop`

No operation. Do nothing, return nothing.

```typescript
const run = condition ? doSomething : fn.noop;
run();
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### noact
- `fn.noact`

No action. Returns the first argument it receives.

```typescript
const items = stuff
  .map(condition ? mapSomething : fn.noact)
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### result
- `fn.result`

Returns a function that returns a function that returns the first argument.

```typescript
const items = stuff
  .filter(condition ? mapSomething : fn.result(true))
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### resolve
- `fn.resolve`

Returns an async function that resolves to the first argument

Like fn.result, but wrapped in a Promise

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### reject
- `fn.reject`

Returns an async function that rejects with the first argument

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### filters
- `fn.filters`

Collection of functions that can be used with Array.filter

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### exists
- `fn.exists`
- `fn.filters.exists`
- `filters.exists`

Returns true if item isn't null or undefined.

```typescript
[null, 1, undefined, 2].filter(fn.exists); // [1, 2]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### isTruthy
- `fn.isTruthy`
- `fn.filters.isTruthy`
- `filters.isTruthy`

Returns true if item is truthy.

```typescript
[0, 1, 2].filter(fn.isTruthy); // [1, 2]
['', 'a', 'b'].filter(fn.isTruthy); // ['a', 'b']
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### isFalsy
- `fn.isFalsy`
- `fn.filters.isFalsy`
- `filters.isFalsy`

Returns true if item is falsy.

```typescript
[0, 1, 2].filter(fn.isFalsy); // [0]
['', 'a', 'b'].filter(fn.isFalsy); // ['']
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### isEmpty
- `fn.isEmpty`
- `fn.filters.isEmpty`
- `filters.isEmpty`

Returns true if item's length is 0

```typescript
['', 'a', 'b'].filter(fn.isEmpty); // ['']
[[], [1], [2]].filter(fn.isEmpty); // [[]]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### isNotEmpty
- `fn.isNotEmpty`
- `fn.filters.isNotEmpty`
- `filters.isNotEmpty`

Returns true if item's length is 1 or more

```typescript
['', 'a', 'b'].filter(fn.isNotEmpty); // ['a', 'b']
[[], [1], [2]].filter(fn.isNotEmpty); // [[1], [2]]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### isEqual
- `fn.isEqual`
- `fn.filters.isEqual`
- `filters.isEqual`

Returns a function that returns true if the item is equal to provided value.

```typescript
[0, 1, 2].filter(fn.isEqual(1)); // [1]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### isNotEqual
- `fn.isNotEqual`
- `fn.filters.isNotEqual`
- `filters.isNotEqual`

Returns a function that returns true if the item is not equal to provided value.

```typescript
[0, 1, 2].filter(fn.isNotEqual(1)); // [0, 2]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### dedupe
- `fn.dedupe`
- `fn.filters.dedupe`
- `filters.dedupe`

Removes duplicate items from an array.

```typescript
[0, 1, 2, 1, 0].filter(fn.dedupe); // [0, 1, 2]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### dedupeMapped
- `fn.dedupeMapped`
- `fn.filters.dedupeMapped`
- `filters.dedupeMapped`

Removes duplicate items from an array based on a mapped value.

```typescript
[2, 4, 6, 8, 10, 12].filter(fn.dedupeMapped((v) => v % 3)); // [ 2, 4, 6 ] (maps to [ 2, 1, 0, 2, 1, 0 ])
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### maps
- `fn.maps`

Collection of functions that can be used with Array.map

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toString
- `fn.toString`
- `fn.maps.toString`
- `maps.toString`

Maps the item to a string.

```typescript
[0, 1, 2].map(fn.toString); // ['0', '1', '2']
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toNumber
- `fn.toNumber`
- `fn.maps.toNumber`
- `maps.toNumber`

Maps the item to a number.

```typescript
['0', '1', '2'].map(fn.toNumber); // [0, 1, 2]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toBool
- `fn.toBool`
- `fn.maps.toBool`
- `maps.toBool`

Maps the item to a boolean.

```typescript
[0, 1, 2].map(fn.toBool); // [false, true, true]
['true', 'false', '', 'text'].map(fn.toBool); // [true, false, false, true]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toProp
- `fn.toProp`
- `fn.maps.toProp`
- `maps.toProp`

Maps the item to a given property of the item

```typescript
[{name: 'Jack'}, {name: 'Jill'}].map(fn.toProp('name')); // ['Jack', 'Jill']
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toFixed
- `fn.toFixed`
- `fn.maps.toFixed`
- `maps.toFixed`

Map the items (numbers) of an array to a fixed precision.

```typescript
[1.234, 5.678, 9.012].map(fn.toFixed(2)); // [1.23, 5.68, 9.01]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### sorts
- `fn.sorts`

Collection of functions that can be used with Array.sort

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### asc
- `fn.asc`
- `fn.sorts.asc`
- `sorts.asc`

Sort ascending.

```typescript
[2, 4, 3, 1].sort(fn.asc); // [1, 2, 3, 4]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### desc
- `fn.desc`
- `fn.sorts.desc`
- `sorts.desc`

Sort descending.

```typescript
[2, 4, 3, 1].sort(fn.asc); // [4, 3, 2, 1]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### byProp
- `fn.byProp`
- `fn.sorts.byProp`
- `sorts.byProp`

Sort by a given property.

```typescript
const people = [{age: 2}, {age: 4}, {age: 3}, {age: 1}];
people.sort(fn.byProp('age', fn.asc)); // [{age: 1}, {age: 2}, {age: 3}, {age: 4}]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### nearestTo
- `fn.nearestTo`
- `fn.sorts.nearestTo`
- `sorts.nearestTo`

Sort by the nearest value to the given value.

```typescript
const people = [2, 4, 3, 1];
people.sort(fn.nearestTo(3)); // [3, 2, 4, 1]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### furthestFrom
- `fn.furthestFrom`
- `fn.sorts.furthestFrom`
- `sorts.furthestFrom`

Sort by the furthest value to the given value.

```typescript
const people = [2, 4, 3, 1];
people.sort(fn.furthestFrom(3)); // [1, 2, 4, 3]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### arrayAsc
- `fn.arrayAsc`
- `fn.sorts.arrayAsc`
- `sorts.arrayAsc`

Sort an array of arrays in ascending order

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### arrayDesc
- `fn.arrayDesc`
- `fn.sorts.arrayDesc`
- `sorts.arrayDesc`

Sort an array of arrays in descending order

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### reduces
- `fn.reduces`

Collection of functions that can be used with Array.reduce

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### combine
- `fn.combine`
- `fn.reduces.combine`
- `reduces.combine`

Adds or concats the items

```typescript
[1, 2, 3].reduce(fn.combine); // 6
['a', 'b', 'c'].reduce(fn.combine); // 'abc'
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### combineProp
- `fn.combineProp`
- `fn.reduces.combineProp`
- `reduces.combineProp`

Adds or concats the given property of the items

```typescript
const people = [{name: 'a', age: 1}, {name: 'b', age: 2}, {name: 'c', age: 3}];
people.reduce(fn.combineProp('age')); // 6
people.reduce(fn.combineProp('name')); // 'abc'
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### mode
- `fn.mode`
- `fn.reduces.mode`
- `reduces.mode`

Returns the most common value in an array.

```typescript
[1, 2, 3, 2, 1, 1].reduce(fn.mode); // 1
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### modeMapped
- `fn.modeMapped`
- `fn.reduces.modeMapped`
- `reduces.modeMapped`

Returns the most common value in an array, based on a given map function.

```typescript
[2, 4, 6, 8, 9, 12].reduce(fn.modeMapped((v) => v % 3)); // 6 (maps to [ 2, 1, 0, 2, 0, 0 ])
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### everys
- `fn.everys`

Collection of functions that can be used with Array.every

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### isAllEqual
- `fn.isAllEqual`
- `fn.everys.isAllEqual`
- `everys.isAllEqual`

Returns if all the items are equal to one another.

```typescript
[1, 1, 1].every(fn.isAllEqual); // true
[1, 2, 1].every(fn.isAllEqual); // false
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## ArrayTools
- `ArrayTools`

A collection of useful array functions.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### create
- `create`
- `ArrayTools.create`
- `filled`
- `ArrayTools.filled`

Create an array of the given length, where each value is the given value

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### range
- `range`
- `ArrayTools.range`

Returns an array of the given length, where each value is equal to it's index
e.g. [0, 1, 2, ..., length]

```typescript
ArrayTools.range(3);  // [0, 1, 2]
ArrayTools.range(5);  // [0, 1, 2, 3, 4]
ArrayTools.range(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

ArrayTools.range(3, 2);  // [0, 2, 4]
ArrayTools.range(5, 2);  // [0, 2, 4, 6, 8]
ArrayTools.range(10, 10); // [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### zip
- `zip`
- `ArrayTools.zip`

Converts multiple arrays into an array of 'tuples' for each value at the corresponding indexes.

Limited to the length of the shortest provided array

Inspired by python's 'zip'

```typescript
ArrayTools.zip([1, 2, 3, 4], ['a', 'b', 'c']); // [ [1, 'a'], [2, 'b'], [3, 'c'] ]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### zipMax
- `zipMax`
- `ArrayTools.zipMax`

Converts multiple arrays into an array of 'tuples' for each value at the corresponding indexes.

Unlike `zip`, it will match the length of the longest provided array, filling in any missing values with `undefined`

Inspired by python's 'zip'

```typescript
ArrayTools.zipMax([1, 2, 3, 4], ['a', 'b', 'c']); //[ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ], [ 4, undefined ] ]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### sortByMapped
- `sortByMapped`
- `ArrayTools.sortByMapped`

Sort an array by a mapped form of the values, but returning the initial values

```typescript
ArrayTools.sortByMapped(['2p', '3p', '1p'], (v) => Number(v.replace('p', ''))); // ['1p', '2p', '3p']
ArrayTools.sortByMapped(
  ['2p', '3p', '1p'],
  (v) => Number(v.replace('p', '')),
  (a, b) => b - a
); // ['3p', '2p', '1p']
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### randomise
- `randomise`
- `ArrayTools.randomise`

Returns a clone of the provided array with it's items in a random order

```typescript
ArrayTools.randomise([1, 2, 3, 4, 5, 6]); // [ 5, 3, 4, 1, 2, 6 ]
ArrayTools.randomise([1, 2, 3, 4, 5, 6]); // [ 5, 1, 3, 2, 4, 6 ]
ArrayTools.randomise([1, 2, 3, 4, 5, 6]); // [ 6, 1, 4, 5, 2, 3 ]
ArrayTools.randomise([1, 2, 3, 4, 5, 6]); // [ 1, 4, 5, 2, 3, 6 ]
ArrayTools.randomise([1, 2, 3, 4, 5, 6]); // [ 2, 6, 1, 3, 4, 5 ]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### reverse
- `reverse`
- `ArrayTools.reverse`

Returns a new array with the order reversed without affecting original array

```typescript
const arr1 = [1, 2, 3];
arr1            // [1, 2, 3]
arr1.reverse(); // [3, 2, 1]
arr1            // [3, 2, 1]

const arr2 = [1, 2, 3];
arr2            // [1, 2, 3]
ArrayTools.reverse(arr2);  // [3, 2, 1]
arr2            // [1, 2, 3]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### entries
- `entries`
- `ArrayTools.entries`

Returns array of 'tuples' of index/value pairs

```typescript
const arr = ['a', 'b', 'c'];
ArrayTools.entries(arr); // [ [0, 'a'], [1, 'b'], [2, 'c'] ]

for (let [index, value] of entries(arr)) {
 console.log(index); // 0, 1, 2
 console.log(value); // 'a', 'b', 'c'
}
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### repeat
- `repeat`
- `ArrayTools.repeat`

Returns an array with the given items repeated

```typescript
ArrayTools.repeat(5, 'a'); // [ 'a', 'a', 'a', 'a', 'a' ]
ArrayTools.repeat(5, 'a', 'b'); // [ 'a', 'b', 'a', 'b', 'a' ]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### roll
- `roll`
- `ArrayTools.roll`

'Roll' the array by a given amount so that is has a new first item. Length and contents remain the same, but the order is changed

```typescript
ArrayTools.roll(1, [0, 1, 2, 3, 4, 5, 6, 7]); // [ 1, 2, 3, 4, 5, 6, 7, 0 ]
ArrayTools.roll(4, [0, 1, 2, 3, 4, 5, 6, 7]); // [ 4, 5, 6, 7, 0, 1, 2, 3 ]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### sortNumberedText
- `sortNumberedText`
- `ArrayTools.sortNumberedText`

Alphabetically sorts a list of strings, but keeps multi-digit numbers in numerical order (rather than alphabetical)

```typescript
const names = ['name1', 'name10', 'name2', 'foo20', 'foo10', 'foo9'];
names.sort(); // [ 'foo10', 'foo20', 'foo9', 'name1', 'name10', 'name2' ]
ArrayTools.sortNumberedText(names); // [ 'foo9', 'foo10', 'foo20', 'name1', 'name2', 'name10' ]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### partition
- `partition`
- `ArrayTools.partition`

Breaks an array into smaller arrays of a given size

```typescript
ArrayTools.partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### groupObj
- `groupObj`
- `ArrayTools.groupObj`

Group items from an array into an object of arrays, based on a given map function.

```typescript
const arr = [
  { group: 1, name: 'a' },
  { group: 2, name: 'b' },
  { group: 1, name: 'c' },
];
ArrayTools.groupObj(arr, item => item.id); // {
//   1: [ { group: 1, name: 'a' }, { group: 1, name: 'c' } ],
//   2: [ { group: 2, name: 'b' } ]
// }
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### group
- `group`
- `ArrayTools.group`

Group items from an array into an array of arrays, based on a given map function.

```typescript
const arr = [
  { group: 1, name: 'a' },
  { group: 2, name: 'b' },
  { group: 1, name: 'c' },
];
ArrayTools.groupObj(arr, item => item.id); // [
//   [ { group: 1, name: 'a' }, { group: 1, name: 'c' } ],
//   [ { group: 2, name: 'b' } ]
// ]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### utils
- `ArrayTools.utils`

Small helper functions that may help, but aren't important enough to be in ArrayTools directly

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### isNumString
- `ArrayTools.utils.isNumString`

Returns true if the given string is a number

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### partitionNums
- `ArrayTools.utils.partitionNums`

Splits a string into an array of strings and numbers

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## ObjectTools
A collection of functions for working with objects

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### remodel
- `ObjectTools.remodel`

Apply a function to the entries of an object

```typescript
const input = {'foo': 2, 'bar': 1, 'baz': 4}
ObjectTools.remodel(input, (entries) => entries.filter(([k, v]) => v % 2 === 0)) // { foo: 2, baz: 4 }
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### remodelEach
- `ObjectTools.remodelEach`

Apply a function to each of the entries of an object

Note: similar to ObjectTools.map, but the function parameters are different. Prefer ObjectTools.map where possible.

```typescript
const input = {'foo': 2, 'bar': 1, 'baz': 4}
ObjectTools.remodelEach(input, ([k, v]) => [k, v * 2]) // { foo: 4, bar: 2, baz: 8 }
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### map
- `ObjectTools.map`

Maps the keys and values of an object in a similar way to Array.map

```typescript
ObjectTools.map({a: 1, b: 2, c: 3}, (key, value) => [key, key + value]); // {a: 'a1', b: 'b2', c: 'c3'}
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### mapValues
- `ObjectTools.mapValues`

Maps the values of an object in a similar way to Array.map

```typescript
ObjectTools.map({a: 1, b: 2, c: 3}, (key, value) => key.repeat(value)); // {a: 'a', b: 'bb', c: 'ccc'}
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### mapKeys
- `ObjectTools.mapKeys`

Maps the values of an object in a similar way to Array.map

```typescript
ObjectTools.map({a: 1, b: 2, c: 3}, (key, value) => key.repeat(value)); // {a: 1, bb: 2, ccc: 3}
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### filter
- `ObjectTools.filter`

Removes entries from an object based on a predicate function

```typescript
ObjectTools.filter({a: 1, b: 2, c: 3}, (k, v) => v % 2 === 0) // { b: 2 }
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### clean
- `ObjectTools.clean`

Removes properties with undefined values

```typescript
ObjectTools.clean({a: 1, b: undefined, c: 3}) // { a: 1, c: 3 }
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## StringTools
A collection of string utilities

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### capitalise
- `StringTools.capitalise`

Capitalises the first letter of each word in a string

```typescript
StringTools.capitalise('hello world'); // 'Hello World'
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### angloise
- `StringTools.angloise`

Remove accents from a string

```typescript
StringTools.angloise('éèêë'); // 'eeee'
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### clean
- `StringTools.clean`

Remove accents and non alphanumerics from a string

```typescript
StringTools.clean('éèêë_--ab0'); // 'eeeeab0'
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### repeat
- `StringTools.repeat`

Repeat the given string n times

```typescript
StringTools.repeat(5, '-') // '-----'
StringTools.repeat(1, '-') // '-'
StringTools.repeat(0, '-') // ''
StringTools.repeat(-1, '-') // ''
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### StringCaseHandler

#### toLowerCamelCase
- `StringTools.toLowerCamelCase`
- `StringTools.fromSlugCase.toLowerCamelCase`
- `StringTools.fromSnakeCase.toLowerCamelCase`
- `StringTools.fromSpaced.toLowerCamelCase`
- `StringTools.fromCamelCase.toLowerCamelCase`

Convert a string to lower camel case (e.g. `thisIsLowerCamelCase`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toUpperCamelCase
- `StringTools.toUpperCamelCase`
- `StringTools.fromSlugCase.toUpperCamelCase`
- `StringTools.fromSnakeCase.toUpperCamelCase`
- `StringTools.fromSpaced.toUpperCamelCase`
- `StringTools.fromCamelCase.toUpperCamelCase`

Convert a string to upper camel case (e.g. `ThisIsLowerCamelCase`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toCamelCase
- `StringTools.toCamelCase`
- `StringTools.fromSlugCase.toCamelCase`
- `StringTools.fromSnakeCase.toCamelCase`
- `StringTools.fromSpaced.toCamelCase`
- `StringTools.fromCamelCase.toCamelCase`

Convert a string to camel case (e.g. `thisIsCamelCase`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toLowerSlugCase
- `StringTools.toLowerSlugCase`
- `StringTools.fromSlugCase.toLowerSlugCase`
- `StringTools.fromSnakeCase.toLowerSlugCase`
- `StringTools.fromSpaced.toLowerSlugCase`
- `StringTools.fromCamelCase.toLowerSlugCase`

Convert a string to lower slug case (e.g. `this-is-lower-slug-case`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toUpperSlugCase
- `StringTools.toUpperSlugCase`
- `StringTools.fromSlugCase.toUpperSlugCase`
- `StringTools.fromSnakeCase.toUpperSlugCase`
- `StringTools.fromSpaced.toUpperSlugCase`
- `StringTools.fromCamelCase.toUpperSlugCase`

Convert a string to upper camel case (e.g. `THIS-IS-UPPER-SLUG-CASE`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toSlugCase
- `StringTools.toSlugCase`
- `StringTools.fromSlugCase.toSlugCase`
- `StringTools.fromSnakeCase.toSlugCase`
- `StringTools.fromSpaced.toSlugCase`
- `StringTools.fromCamelCase.toSlugCase`

Convert a string to camel case (e.g. `this-is-slug-case`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toLowerSnakeCase
- `StringTools.toLowerSnakeCase`
- `StringTools.fromSlugCase.toLowerSnakeCase`
- `StringTools.fromSnakeCase.toLowerSnakeCase`
- `StringTools.fromSpaced.toLowerSnakeCase`
- `StringTools.fromCamelCase.toLowerSnakeCase`

Convert a string to lower snake case (e.g. `this_is_lower_snake_case`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toUpperSnakeCase
- `StringTools.toUpperSnakeCase`
- `StringTools.fromSlugCase.toUpperSnakeCase`
- `StringTools.fromSnakeCase.toUpperSnakeCase`
- `StringTools.fromSpaced.toUpperSnakeCase`
- `StringTools.fromCamelCase.toUpperSnakeCase`

Convert a string to upper snake case (e.g. `THIS_IS_UPPER_SNAKE_CASE`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toSnakeCase
- `StringTools.toSnakeCase`
- `StringTools.fromSlugCase.toSnakeCase`
- `StringTools.fromSnakeCase.toSnakeCase`
- `StringTools.fromSpaced.toSnakeCase`
- `StringTools.fromCamelCase.toSnakeCase`

Convert a string to snake case (e.g. `this_is_snake_case`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toLowerSpaced
- `StringTools.toLowerSpaced`
- `StringTools.fromSlugCase.toLowerSpaced`
- `StringTools.fromSnakeCase.toLowerSpaced`
- `StringTools.fromSpaced.toLowerSpaced`
- `StringTools.fromCamelCase.toLowerSpaced`

Convert a string to lower spaced case (e.g. `this is lower spaced case`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toUpperSpaced
- `StringTools.toUpperSpaced`
- `StringTools.fromSlugCase.toUpperSpaced`
- `StringTools.fromSnakeCase.toUpperSpaced`
- `StringTools.fromSpaced.toUpperSpaced`
- `StringTools.fromCamelCase.toUpperSpaced`

Convert a string to upper spaced case (e.g. `THIS IS UPPER SPACED CASE`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toCapitalisedSpaced
- `StringTools.toCapitalisedSpaced`
- `StringTools.fromSlugCase.toCapitalisedSpaced`
- `StringTools.fromSnakeCase.toCapitalisedSpaced`
- `StringTools.fromSpaced.toCapitalisedSpaced`
- `StringTools.fromCamelCase.toCapitalisedSpaced`

Convert a string to capitalised spaced case (e.g. `This Is Capitalised Spaced Case`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toSpaced
- `StringTools.toSpaced`
- `StringTools.fromSlugCase.toSpaced`
- `StringTools.fromSnakeCase.toSpaced`
- `StringTools.fromSpaced.toSpaced`
- `StringTools.fromCamelCase.toSpaced`

Convert a string to spaced case (e.g. `this is spaced case`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### toCharacterSeparated
- `StringTools.toCharacterSeparated`
- `StringTools.fromSlugCase.toCharacterSeparated`
- `StringTools.fromSnakeCase.toCharacterSeparated`
- `StringTools.fromSpaced.toCharacterSeparated`
- `StringTools.fromCamelCase.toCharacterSeparated`

Convert a string to text where words are separated by a given character (e.g. `this#is#character#separated`)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### fromSlugCase
Has the following methods:
- `StringTools.fromSlugCase.toLowerCamelCase`
- `StringTools.fromSlugCase.toUpperCamelCase`
- `StringTools.fromSlugCase.toCamelCase`
- `StringTools.fromSlugCase.toLowerSlugCase`
- `StringTools.fromSlugCase.toUpperSlugCase`
- `StringTools.fromSlugCase.toSlugCase`
- `StringTools.fromSlugCase.toLowerSnakeCase`
- `StringTools.fromSlugCase.toUpperSnakeCase`
- `StringTools.fromSlugCase.toSnakeCase`
- `StringTools.fromSlugCase.toLowerSpaced`
- `StringTools.fromSlugCase.toUpperSpaced`
- `StringTools.fromSlugCase.toCapitalisedSpaced`
- `StringTools.fromSlugCase.toSpaced`
- `StringTools.fromSlugCase.toCharacterSeparated`

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### fromSnakeCase
Has the following methods:
- `StringTools.fromSnakeCase.toLowerCamelCase`
- `StringTools.fromSnakeCase.toUpperCamelCase`
- `StringTools.fromSnakeCase.toCamelCase`
- `StringTools.fromSnakeCase.toLowerSlugCase`
- `StringTools.fromSnakeCase.toUpperSlugCase`
- `StringTools.fromSnakeCase.toSlugCase`
- `StringTools.fromSnakeCase.toLowerSnakeCase`
- `StringTools.fromSnakeCase.toUpperSnakeCase`
- `StringTools.fromSnakeCase.toSnakeCase`
- `StringTools.fromSnakeCase.toLowerSpaced`
- `StringTools.fromSnakeCase.toUpperSpaced`
- `StringTools.fromSnakeCase.toCapitalisedSpaced`
- `StringTools.fromSnakeCase.toSpaced`
- `StringTools.fromSnakeCase.toCharacterSeparated`

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### fromSpaced
Has the following methods:
- `StringTools.fromSpaced.toLowerCamelCase`
- `StringTools.fromSpaced.toUpperCamelCase`
- `StringTools.fromSpaced.toCamelCase`
- `StringTools.fromSpaced.toLowerSlugCase`
- `StringTools.fromSpaced.toUpperSlugCase`
- `StringTools.fromSpaced.toSlugCase`
- `StringTools.fromSpaced.toLowerSnakeCase`
- `StringTools.fromSpaced.toUpperSnakeCase`
- `StringTools.fromSpaced.toSnakeCase`
- `StringTools.fromSpaced.toLowerSpaced`
- `StringTools.fromSpaced.toUpperSpaced`
- `StringTools.fromSpaced.toCapitalisedSpaced`
- `StringTools.fromSpaced.toSpaced`
- `StringTools.fromSpaced.toCharacterSeparated`

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### fromCamelCase
Has the following methods:
- `StringTools.fromCamelCase.toLowerCamelCase`
- `StringTools.fromCamelCase.toUpperCamelCase`
- `StringTools.fromCamelCase.toCamelCase`
- `StringTools.fromCamelCase.toLowerSlugCase`
- `StringTools.fromCamelCase.toUpperSlugCase`
- `StringTools.fromCamelCase.toSlugCase`
- `StringTools.fromCamelCase.toLowerSnakeCase`
- `StringTools.fromCamelCase.toUpperSnakeCase`
- `StringTools.fromCamelCase.toSnakeCase`
- `StringTools.fromCamelCase.toLowerSpaced`
- `StringTools.fromCamelCase.toUpperSpaced`
- `StringTools.fromCamelCase.toCapitalisedSpaced`
- `StringTools.fromCamelCase.toSpaced`
- `StringTools.fromCamelCase.toCharacterSeparated`

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### clx
- `clx`
- `StringTools.clx`

Composes a className from a list of strings, conditional objects and arrays.

Accepts the different ways of supplying classes in AngularJS (ng-class) and returns a single string (so suitable for React).

```typescript
clx('hello') // 'hello'
clx('foo', 'bar') // 'foo bar'
clx('foo', conditionA && 'bar') // 'foo'
clx('abc', conditionB && 'def') // 'abc def'
clx({'lorem': conditionA, 'ipsum': conditionB}) // 'ipsum'
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## MathsTools
A collection of mathematical functions.

> Note: The field is 'Mathematics', and so it is 'MathsTools' not ~'MathTools'~

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### fixFloat
- `ff`
- `MathsTools.ff`
- `MathsTools.fixFloat`

Fixes floating point errors that may occur when adding/subtracting/multiplying/dividing real/float numbers

Can also be used to round numbers to a given precision

> Note: 'fixFloat' is not a great name, but it's what I've always called it, so I'm sticking with it. 'ff' is a shorthand alias.

```typescript
0.1 + 0.2 // 0.30000000000000004
MathsTools.fixFloat(0.1 + 0.2) // 0.3
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### addAll
- `MathsTools.addAll`

Adds all numbers together. Each argument is a number (use spread operator to pass in an array) similar to Math.min/Math.max

```typescript
MathsTools.addAll(1, 2, 3, 4, 5); // 15
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### round

#### floorTo
- `MathsTools.floorTo`
- `MathsTools.round.floorTo`

Floors a number down to the nearest multiple of the given number.

```typescript
MathsTools.round.floorTo(10, 102); // 100
MathsTools.round.floorTo(5, 53); // 50
MathsTools.round.floorTo(0.1, 0.25); // 0.2
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### roundTo
- `MathsTools.round.to`
- `MathsTools.roundTo`
- `MathsTools.round.roundTo`

Floors a number down to the nearest multiple of the given number.

```typescript
MathsTools.round.to(10, 102); // 100
MathsTools.round.to(5, 53); // 55
MathsTools.round.to(0.1, 0.25); // 0.3
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### ceilTo
- `MathsTools.ceilTo`
- `MathsTools.round.ceilTo`

Floors a number down to the nearest multiple of the given number.

```typescript
MathsTools.round.ceilTo(10, 102); // 110
MathsTools.round.ceilTo(5, 53); // 55
MathsTools.round.ceilTo(0.1, 0.25); // 0.3
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### lerp
- `MathsTools.lerp`

Linearly interpolates between two values.

```typescript
MathsTools.lerp(0.5, 0, 10); // 5
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### lerpArray
- `MathsTools.lerpArray`

Linearly interpolates between the values of 2 arrays.

```typescript
MathsTools.lerpArray(0.5, [0, 0, 0], [10, 100, 1000]) // [5, 50, 500]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### lerpObj
- `MathsTools.lerpObj`

Linearly interpolates between the values of 2 arrays.

```typescript
MathsTools.lerpObj(0.5, {'ARS': 0, 'CHE': 0, 'FUL': 0}, {'ARS': 100, 'CHE': 10, 'FUL': 20}) // {'ARS': 50, 'CHE': 5, 'FUL': 10}
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### clamp
- `MathsTools.clamp`

Clamps a value between a min and max.

```typescript
MathsTools.clamp(5, 0, 10); // 5
MathsTools.clamp(-5, 0, 10); // 0
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### getOrdinal
- `MathsTools.getOrdinal`

Gets the ordinal suffix for a number.

```typescript
MathsTools.getOrdinal(1); // 'st'
MathsTools.getOrdinal(2); // 'nd'
MathsTools.getOrdinal(3); // 'rd'
MathsTools.getOrdinal(4); // 'th'

MathsTools.getOrdinal(11); // 'th'
MathsTools.getOrdinal(12); // 'th'
MathsTools.getOrdinal(13); // 'th'
MathsTools.getOrdinal(14); // 'th'

MathsTools.getOrdinal(21); // 'st'
MathsTools.getOrdinal(22); // 'nd'
MathsTools.getOrdinal(23); // 'rd'
MathsTools.getOrdinal(24); // 'th'
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## PromiseTools
A collection of promise utilities

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### getDeferred
- `getDeferred`
- `PromiseTools.getDeferred`

A deferred promise

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

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### all
- `all`
- `PromiseTools.all`

An alias for Promise.all

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### allLimit
- `allLimit`
- `PromiseTools.allLimit`

Like Promise.all, but limits the numbers of concurrently running items.

Takes an array of functions (that return Promises), rather than an array of Promises

```typescript
import { PromiseTools, timer, ms, seconds } from 'swiss-ak';

const give = async (delay: ms, result: number, label: string) => {
  await waitFor(delay);
  timer.end(label);
  return result;
};

timer.start('allLimit', 'a', 'b', 'c', 'd');

const results = PromiseTools.allLimit<number>(2, [
  give(seconds(5), 1, 'a'),
  give(seconds(5), 2, 'b'),
  give(seconds(5), 3, 'c'),
  give(seconds(5), 4, 'd')
]);

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

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### each
- `each`
- `PromiseTools.each`

Run an async function against each item in an array

```typescript
import { PromiseTools, ms, seconds, wait } from 'swiss-ak';

const arr = [1, 2, 3, 4];

await PromiseTools.each<number>(arr, async (val: number) => {
  await wait(seconds(2));
  sendToSomewhere(val);
});
console.log(''); // after 2 seconds
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### eachLimit
- `eachLimit`
- `PromiseTools.eachLimit`

Run an async function against each item in an array, limiting the number of items that can run concurrently.

See PromiseTools.allLimit for information about limited functions.

```typescript
import { PromiseTools, ms, seconds, wait } from 'swiss-ak';

const arr = [1, 2, 3, 4];

await PromiseTools.eachLimit<number>(2, arr, async (val: number) => {
  await wait(seconds(2));
  sendToSomewhere(val);
});
console.log(''); // after 4 seconds
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### map
- `map`
- `PromiseTools.map`

Run an async map function against each item in an array, mapping the results to a returned array

```typescript
import { PromiseTools, ms, seconds, wait } from 'swiss-ak';

const arr = [1, 2, 3, 4];

const mapped = await PromiseTools.map<number>(arr, async (val: number) => {
  await wait(seconds(2));
  return val * 2;
});

console.log(mapped); // [2, 4, 6, 8] (after 2 seconds)
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### mapLimit
- `mapLimit`
- `PromiseTools.mapLimit`

Run an async map function against each item in an array, mapping the results to a returned array, and limiting the number of items that can run concurrently.

See PromiseTools.allLimit for information about limited functions.

```typescript
import { PromiseTools, ms, seconds, wait } from 'swiss-ak';

const arr = [1, 2, 3, 4];

const mapped = await PromiseTools.mapLimit<number>(2, arr, async (val: number) => {
  await wait(seconds(2));
  return val * 2;
});

console.log(mapped); // [2, 4, 6, 8] (after 4 seconds)
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### allObj
- `allObj`
- `PromiseTools.allObj`

Like Promise.all, but pass/receive objects rather than arrays

```typescript
import { PromiseTools, timer, ms, seconds } from 'swiss-ak';

const give = async (delay: ms, result: number, label: string) => {
  await waitFor(delay);
  timer.end(label);
  return result;
};

timer.start('allObj', 'a', 'b', 'c');

const results = PromiseTools.allObj<number>({
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

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### allLimitObj
- `allLimitObj`
- `PromiseTools.allLimitObj`

A mix of allObj and allLimit.

Takes an array of functions (that return Promises), and limits the numbers of concurrently running items.

```typescript
import { PromiseTools, timer, ms, seconds } from 'swiss-ak';

const give = async (delay: ms, result: number, label: string) => {
  await waitFor(delay);
  timer.end(label);
  return result;
};

timer.start('allLimitObj', 'a', 'b', 'c', 'd');

const results = PromiseTools.allLimitObj<number>(2, {
  a: give(seconds(5), 1, 'a'),
  b: give(seconds(5), 2, 'b'),
  c: give(seconds(5), 3, 'c'),
  d: give(seconds(5), 4, 'd')
});

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

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### DeferredPromise
- `DeferredPromise`
- `PromiseTools.DeferredPromise`

A deferred promise

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## ColourTools
A collection of functions for working with colours.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### ColourValues
- `ColourTools.ColourValues`

A type with 3 numbers:
- red [0-255]
- green [0-255]
- blue [0-255]

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### HSLValues
- `ColourTools.HSLValues`

A type with 3 numbers:
- hue [0-360]
- saturation [0-100]
- lightness [0-100]

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### namedColours
- `ColourTools.namedColours`

A dictionary of different colour names and their RGB values

| Name                 | RGB           | Hex     |
| -------------------- | ------------- | ------- |
| aliceblue            | 240, 248, 255 | #f0f8ff |
| antiquewhite         | 250, 235, 215 | #faebd7 |
| aqua                 | 0, 255, 255   | #00ffff |
| aquamarine           | 127, 255, 212 | #7fffd4 |
| azure                | 240, 255, 255 | #f0ffff |
| beige                | 245, 245, 220 | #f5f5dc |
| bisque               | 255, 228, 196 | #ffe4c4 |
| black                | 0, 0, 0       | #000000 |
| blanchedalmond       | 255, 235, 205 | #ffebcd |
| blue                 | 0, 0, 255     | #0000ff |
| blueviolet           | 138, 43, 226  | #8a2be2 |
| brown                | 165, 42, 42   | #a52a2a |
| burlywood            | 222, 184, 135 | #deb887 |
| cadetblue            | 95, 158, 160  | #5f9ea0 |
| chartreuse           | 127, 255, 0   | #7fff00 |
| chocolate            | 210, 105, 30  | #d2691e |
| coral                | 255, 127, 80  | #ff7f50 |
| cornflowerblue       | 100, 149, 237 | #6495ed |
| cornsilk             | 255, 248, 220 | #fff8dc |
| crimson              | 220, 20, 60   | #dc143c |
| cyan                 | 0, 255, 255   | #00ffff |
| darkblue             | 0, 0, 139     | #00008b |
| darkcyan             | 0, 139, 139   | #008b8b |
| darkgoldenrod        | 184, 134, 11  | #b8860b |
| darkgray             | 169, 169, 169 | #a9a9a9 |
| darkgreen            | 0, 100, 0     | #006400 |
| darkgrey             | 169, 169, 169 | #a9a9a9 |
| darkkhaki            | 189, 183, 107 | #bdb76b |
| darkmagenta          | 139, 0, 139   | #8b008b |
| darkolivegreen       | 85, 107, 47   | #556b2f |
| darkorange           | 255, 140, 0   | #ff8c00 |
| darkorchid           | 153, 50, 204  | #9932cc |
| darkred              | 139, 0, 0     | #8b0000 |
| darksalmon           | 233, 150, 122 | #e9967a |
| darkseagreen         | 143, 188, 143 | #8fbc8f |
| darkslateblue        | 72, 61, 139   | #483d8b |
| darkslategray        | 47, 79, 79    | #2f4f4f |
| darkslategrey        | 47, 79, 79    | #2f4f4f |
| darkturquoise        | 0, 206, 209   | #00ced1 |
| darkviolet           | 148, 0, 211   | #9400d3 |
| deeppink             | 255, 20, 147  | #ff1493 |
| deepskyblue          | 0, 191, 255   | #00bfff |
| dimgray              | 105, 105, 105 | #696969 |
| dimgrey              | 105, 105, 105 | #696969 |
| dodgerblue           | 30, 144, 255  | #1e90ff |
| firebrick            | 178, 34, 34   | #b22222 |
| floralwhite          | 255, 250, 240 | #fffaf0 |
| forestgreen          | 34, 139, 34   | #228b22 |
| fractal              | 128, 128, 128 | #808080 |
| fuchsia              | 255, 0, 255   | #ff00ff |
| gainsboro            | 220, 220, 220 | #dcdcdc |
| ghostwhite           | 248, 248, 255 | #f8f8ff |
| gold                 | 255, 215, 0   | #ffd700 |
| goldenrod            | 218, 165, 32  | #daa520 |
| gray0                | 0, 0, 0       | #000000 |
| gray1                | 3, 3, 3       | #030303 |
| gray2                | 5, 5, 5       | #050505 |
| gray3                | 8, 8, 8       | #080808 |
| gray4                | 10, 10, 10    | #0a0a0a |
| gray5                | 13, 13, 13    | #0d0d0d |
| gray6                | 15, 15, 15    | #0f0f0f |
| gray7                | 18, 18, 18    | #121212 |
| gray8                | 20, 20, 20    | #141414 |
| gray9                | 23, 23, 23    | #171717 |
| gray10               | 26, 26, 26    | #1a1a1a |
| gray11               | 28, 28, 28    | #1c1c1c |
| gray12               | 31, 31, 31    | #1f1f1f |
| gray13               | 33, 33, 33    | #212121 |
| gray14               | 36, 36, 36    | #242424 |
| gray15               | 38, 38, 38    | #262626 |
| gray16               | 41, 41, 41    | #292929 |
| gray17               | 43, 43, 43    | #2b2b2b |
| gray18               | 46, 46, 46    | #2e2e2e |
| gray19               | 48, 48, 48    | #303030 |
| gray20               | 51, 51, 51    | #333333 |
| gray21               | 54, 54, 54    | #363636 |
| gray22               | 56, 56, 56    | #383838 |
| gray23               | 59, 59, 59    | #3b3b3b |
| gray24               | 61, 61, 61    | #3d3d3d |
| gray25               | 64, 64, 64    | #404040 |
| gray26               | 66, 66, 66    | #424242 |
| gray27               | 69, 69, 69    | #454545 |
| gray28               | 71, 71, 71    | #474747 |
| gray29               | 74, 74, 74    | #4a4a4a |
| gray30               | 77, 77, 77    | #4d4d4d |
| gray31               | 79, 79, 79    | #4f4f4f |
| gray32               | 82, 82, 82    | #525252 |
| gray33               | 84, 84, 84    | #545454 |
| gray34               | 87, 87, 87    | #575757 |
| gray35               | 89, 89, 89    | #595959 |
| gray36               | 92, 92, 92    | #5c5c5c |
| gray37               | 94, 94, 94    | #5e5e5e |
| gray38               | 97, 97, 97    | #616161 |
| gray39               | 99, 99, 99    | #636363 |
| gray40               | 102, 102, 102 | #666666 |
| gray41               | 105, 105, 105 | #696969 |
| gray42               | 107, 107, 107 | #6b6b6b |
| gray43               | 110, 110, 110 | #6e6e6e |
| gray44               | 112, 112, 112 | #707070 |
| gray45               | 115, 115, 115 | #737373 |
| gray46               | 117, 117, 117 | #757575 |
| gray47               | 120, 120, 120 | #787878 |
| gray48               | 122, 122, 122 | #7a7a7a |
| gray49               | 125, 125, 125 | #7d7d7d |
| gray50               | 127, 127, 127 | #7f7f7f |
| gray51               | 130, 130, 130 | #828282 |
| gray52               | 133, 133, 133 | #858585 |
| gray53               | 135, 135, 135 | #878787 |
| gray54               | 138, 138, 138 | #8a8a8a |
| gray55               | 140, 140, 140 | #8c8c8c |
| gray56               | 143, 143, 143 | #8f8f8f |
| gray57               | 145, 145, 145 | #919191 |
| gray58               | 148, 148, 148 | #949494 |
| gray59               | 150, 150, 150 | #969696 |
| gray60               | 153, 153, 153 | #999999 |
| gray61               | 156, 156, 156 | #9c9c9c |
| gray62               | 158, 158, 158 | #9e9e9e |
| gray63               | 161, 161, 161 | #a1a1a1 |
| gray64               | 163, 163, 163 | #a3a3a3 |
| gray65               | 166, 166, 166 | #a6a6a6 |
| gray66               | 168, 168, 168 | #a8a8a8 |
| gray67               | 171, 171, 171 | #ababab |
| gray68               | 173, 173, 173 | #adadad |
| gray69               | 176, 176, 176 | #b0b0b0 |
| gray70               | 179, 179, 179 | #b3b3b3 |
| gray71               | 181, 181, 181 | #b5b5b5 |
| gray72               | 184, 184, 184 | #b8b8b8 |
| gray73               | 186, 186, 186 | #bababa |
| gray74               | 189, 189, 189 | #bdbdbd |
| gray75               | 191, 191, 191 | #bfbfbf |
| gray76               | 194, 194, 194 | #c2c2c2 |
| gray77               | 196, 196, 196 | #c4c4c4 |
| gray78               | 199, 199, 199 | #c7c7c7 |
| gray79               | 201, 201, 201 | #c9c9c9 |
| gray80               | 204, 204, 204 | #cccccc |
| gray81               | 207, 207, 207 | #cfcfcf |
| gray82               | 209, 209, 209 | #d1d1d1 |
| gray83               | 212, 212, 212 | #d4d4d4 |
| gray84               | 214, 214, 214 | #d6d6d6 |
| gray85               | 217, 217, 217 | #d9d9d9 |
| gray86               | 219, 219, 219 | #dbdbdb |
| gray87               | 222, 222, 222 | #dedede |
| gray88               | 224, 224, 224 | #e0e0e0 |
| gray89               | 227, 227, 227 | #e3e3e3 |
| gray90               | 229, 229, 229 | #e5e5e5 |
| gray91               | 232, 232, 232 | #e8e8e8 |
| gray92               | 235, 235, 235 | #ebebeb |
| gray93               | 237, 237, 237 | #ededed |
| gray94               | 240, 240, 240 | #f0f0f0 |
| gray95               | 242, 242, 242 | #f2f2f2 |
| gray96               | 245, 245, 245 | #f5f5f5 |
| gray97               | 247, 247, 247 | #f7f7f7 |
| gray98               | 250, 250, 250 | #fafafa |
| gray99               | 252, 252, 252 | #fcfcfc |
| gray100              | 255, 255, 255 | #ffffff |
| gray                 | 126, 126, 126 | #7e7e7e |
| green                | 0, 128, 0     | #008000 |
| greenyellow          | 173, 255, 47  | #adff2f |
| grey                 | 128, 128, 128 | #808080 |
| honeydew             | 240, 255, 240 | #f0fff0 |
| hotpink              | 255, 105, 180 | #ff69b4 |
| indianred            | 205, 92, 92   | #cd5c5c |
| indigo               | 75, 0, 130    | #4b0082 |
| ivory                | 255, 255, 240 | #fffff0 |
| khaki                | 240, 230, 140 | #f0e68c |
| lavender             | 230, 230, 250 | #e6e6fa |
| lavenderblush        | 255, 240, 245 | #fff0f5 |
| lawngreen            | 124, 252, 0   | #7cfc00 |
| lemonchiffon         | 255, 250, 205 | #fffacd |
| lightblue            | 173, 216, 230 | #add8e6 |
| lightcoral           | 240, 128, 128 | #f08080 |
| lightcyan            | 224, 255, 255 | #e0ffff |
| lightgoldenrodyellow | 250, 250, 210 | #fafad2 |
| lightgray            | 211, 211, 211 | #d3d3d3 |
| lightgreen           | 144, 238, 144 | #90ee90 |
| lightgrey            | 211, 211, 211 | #d3d3d3 |
| lightpink            | 255, 182, 193 | #ffb6c1 |
| lightsalmon          | 255, 160, 122 | #ffa07a |
| lightseagreen        | 32, 178, 170  | #20b2aa |
| lightskyblue         | 135, 206, 250 | #87cefa |
| lightslategray       | 119, 136, 153 | #778899 |
| lightslategrey       | 119, 136, 153 | #778899 |
| lightsteelblue       | 176, 196, 222 | #b0c4de |
| lightyellow          | 255, 255, 224 | #ffffe0 |
| lime                 | 0, 255, 0     | #00ff00 |
| limegreen            | 50, 205, 50   | #32cd32 |
| linen                | 250, 240, 230 | #faf0e6 |
| magenta              | 255, 0, 255   | #ff00ff |
| maroon               | 128, 0, 0     | #800000 |
| mediumaquamarine     | 102, 205, 170 | #66cdaa |
| mediumblue           | 0, 0, 205     | #0000cd |
| mediumorchid         | 186, 85, 211  | #ba55d3 |
| mediumpurple         | 147, 112, 219 | #9370db |
| mediumseagreen       | 60, 179, 113  | #3cb371 |
| mediumslateblue      | 123, 104, 238 | #7b68ee |
| mediumspringgreen    | 0, 250, 154   | #00fa9a |
| mediumturquoise      | 72, 209, 204  | #48d1cc |
| mediumvioletred      | 199, 21, 133  | #c71585 |
| midnightblue         | 25, 25, 112   | #191970 |
| mintcream            | 245, 255, 250 | #f5fffa |
| mistyrose            | 255, 228, 225 | #ffe4e1 |
| moccasin             | 255, 228, 181 | #ffe4b5 |
| navajowhite          | 255, 222, 173 | #ffdead |
| navy                 | 0, 0, 128     | #000080 |
| none                 | 0, 0, 0       | #000000 |
| oldlace              | 253, 245, 230 | #fdf5e6 |
| olive                | 128, 128, 0   | #808000 |
| olivedrab            | 107, 142, 35  | #6b8e23 |
| orange               | 255, 165, 0   | #ffa500 |
| orangered            | 255, 69, 0    | #ff4500 |
| orchid               | 218, 112, 214 | #da70d6 |
| palegoldenrod        | 238, 232, 170 | #eee8aa |
| palegreen            | 152, 251, 152 | #98fb98 |
| paleturquoise        | 175, 238, 238 | #afeeee |
| palevioletred        | 219, 112, 147 | #db7093 |
| papayawhip           | 255, 239, 213 | #ffefd5 |
| peachpuff            | 255, 218, 185 | #ffdab9 |
| peru                 | 205, 133, 63  | #cd853f |
| pink                 | 255, 192, 203 | #ffc0cb |
| plum                 | 221, 160, 221 | #dda0dd |
| powderblue           | 176, 224, 230 | #b0e0e6 |
| purple               | 128, 0, 128   | #800080 |
| red                  | 255, 0, 0     | #ff0000 |
| rosybrown            | 188, 143, 143 | #bc8f8f |
| royalblue            | 65, 105, 225  | #4169e1 |
| saddlebrown          | 139, 69, 19   | #8b4513 |
| salmon               | 250, 128, 114 | #fa8072 |
| sandybrown           | 244, 164, 96  | #f4a460 |
| seagreen             | 46, 139, 87   | #2e8b57 |
| seashell             | 255, 245, 238 | #fff5ee |
| sienna               | 160, 82, 45   | #a0522d |
| silver               | 192, 192, 192 | #c0c0c0 |
| skyblue              | 135, 206, 235 | #87ceeb |
| slateblue            | 106, 90, 205  | #6a5acd |
| slategray            | 112, 128, 144 | #708090 |
| slategrey            | 112, 128, 144 | #708090 |
| snow                 | 255, 250, 250 | #fffafa |
| springgreen          | 0, 255, 127   | #00ff7f |
| steelblue            | 70, 130, 180  | #4682b4 |
| tan                  | 210, 180, 140 | #d2b48c |
| teal                 | 0, 128, 128   | #008080 |
| thistle              | 216, 191, 216 | #d8bfd8 |
| tomato               | 255, 99, 71   | #ff6347 |
| turquoise            | 64, 224, 208  | #40e0d0 |
| violet               | 238, 130, 238 | #ee82ee |
| wheat                | 245, 222, 179 | #f5deb3 |
| white                | 255, 255, 255 | #ffffff |
| whitesmoke           | 245, 245, 245 | #f5f5f5 |
| yellow               | 255, 255, 0   | #ffff00 |
| yellowgreen          | 154, 205, 50  | #9acd32 |

```typescript
ColourTools.namedColours.blue // [0, 0, 255]
ColourTools.namedColours.red // [255, 0, 0]
ColourTools.namedColours.green // [0, 255, 0]

ColourTools.namedColours.azure // [240, 255, 255]
ColourTools.namedColours.darkorange // [255, 140, 0]
ColourTools.namedColours.dodgerblue // [30, 144, 255]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### parse
- `ColourTools.parse`

Parse a string into a colour object (RGB array)
Not extensive. Currently limited to:
- 3 char hexes
- 6 char hexes
- comma separated RGB values
- named colours (from namedColours dictionary)

```typescript
ColourTools.parse('#FF0000') // [255, 0, 0]
ColourTools.parse('rgb(255, 0, 0)') // [255, 0, 0]
ColourTools.parse('red') // [255, 0, 0]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### toHex
- `ColourTools.toHex`

Convert a colour object (RGB array) to a hex string

```typescript
ColourTools.toHex([255, 0, 0]) // '#FF0000'
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### getLuminance
- `ColourTools.getLuminance`

IMPORTANT: This is not the same as the HSL luminance value.

Get the luminance value of a given colour.

Between 0 and 255. Calculated using the formula:
 (RED × 0.299) + (GREEN × 0.587) + (BLUE × 0.114)

Is the Y (Luma) component of the YUV444 color model.

```typescript
ColourTools.getLuminance([255, 0, 0]); // 76.245
ColourTools.getLuminance([0, 255, 0]); // 149.685
ColourTools.getLuminance([0, 0, 255]); // 29.07
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### toYUV
- `ColourTools.toYUV`

Convert a colour object (RGB array) to a YUV array.

See https://en.wikipedia.org/wiki/YUV#Y%E2%80%B2UV444_to_RGB888_conversion

```typescript
ColourTools.toYUV([255, 0, 0]); // [76.245, 112.439, -38.094]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### toHSL
- `ColourTools.toHSL`

Convert a RGB array to a HSL array.

Adapted from https://www.30secondsofcode.org/js/s/rgb-to-hsl

```typescript
ColourTools.toHSL([255, 0, 0]); // [0, 100, 50]
ColourTools.toHSL([0, 255, 0]); // [120, 100, 50]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### fromHSL
- `ColourTools.fromHSL`

Convert a HSL array to a RGB array.

Adapted from https://www.30secondsofcode.org/js/s/hsl-to-rgb

```typescript
ColourTools.fromHSL([0, 100, 50]); // [255, 0, 0]
ColourTools.fromHSL([120, 100, 50]); // [0, 255, 0]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### invertColour
- `ColourTools.invertColour`

Get the opposite colour of a given colour.

```typescript
ColourTools.invertColour([255, 0, 0]); // [0, 255, 255]
ColourTools.invertColour([0, 255, 0]); // [ 255, 0, 255 ]
ColourTools.invertColour([0, 0, 255]); // [ 255, 255, 0 ]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### getContrastedColour
- `ColourTools.getContrastedColour`

Get the colour that contrasts the most with a given colour. (White or black)

Returned colour can be used as a text colour on top of the provided colour

```typescript
ColourTools.getContrastedColour([255, 0, 0]); // [255, 255, 255]
ColourTools.getContrastedColour([255, 255, 0]); // [0, 0, 0]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### getLimitedColour
- `ColourTools.getLimitedColour`

Adjust a colour if a certain condition is met.
Used for lightening/darkening colours that are too light/dark

All values in functions are HSL

```typescript
ColourTools.getLimitedColour([255, 255, 255], ([h,s,l]) => l > 90, ([h,s,l]) => [h, s, 90]); // [ 230, 230, 230 ]
ColourTools.getLimitedColour([128, 128, 128], ([h,s,l]) => l > 90, ([h,s,l]) => [h, s, 90]); // [ 128, 128, 128 ]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## TimeTools
A collection of time-related utility functions.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### toReadableDuration
- `TimeTools.toReadableDuration`

Converts a duration in milliseconds to a human readable string.

```typescript
TimeTools.toReadableDuration(20); // '20ms'
TimeTools.toReadableDuration(seconds(59)); // '59s'
TimeTools.toReadableDuration(seconds(60)); // '1m'
TimeTools.toReadableDuration(hours(23)); // '23h'
TimeTools.toReadableDuration(hours(24)); // '1d'
TimeTools.toReadableDuration(days(10)); // '10d'

TimeTools.toReadableDuration(20, true) // '20 milliseconds'
TimeTools.toReadableDuration(seconds(59), true) // '59 seconds'
TimeTools.toReadableDuration(seconds(60), true) // '1 minute'
TimeTools.toReadableDuration(hours(23), true) // '23 hours'
TimeTools.toReadableDuration(hours(24), true) // '1 day'
TimeTools.toReadableDuration(days(10), true) // '10 days'

const realisticDuration = days(10) + hours(2) + seconds(31) + 512; // 871231512
TimeTools.toReadableDuration(realisticDuration, true, 4) // '10 days, 2 hours, 31 seconds & 512 milliseconds'
TimeTools.toReadableDuration(realisticDuration, true) // '10 days, 2 hours & 31 seconds'
TimeTools.toReadableDuration(realisticDuration, true, 2) // '10 days & 2 hours'
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## ErrorTools
Functions for handling errors.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### tryOr
- `tryOr`
- `ErrorTools.tryOr`

Try to execute a function and return its result if it succeeds, or return the default value if it fails.

```typescript
const result = tryOr('default', () => getSomething());
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### retry
- `retry`
- `ErrorTools.retry`

Try to execute a function and return its result if it succeeds, or retry a given number of times until it succeeds.

```typescript
const result = tryOr(5, seconds(1), true, () => getSomething());
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### retryOr
- `retryOr`
- `ErrorTools.retryOr`

Combination of retry and tryOr.

Try to execute a function and return its result if it succeeds, or retry a given number of times until it succeeds. Return the default value if it fails too many times

```typescript
const result = retryOr('default', 5, seconds(1), true, () => getSomething());
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## progressBar
A progress bar that can be used in the terminal.

> NOTE: This is eventually be moved to `swiss-node`

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### printLn
- `printLn`
- `progressBar.printLn`

Can use instead of console.log

Overwrites the previous line if possible (i.e. node);

Usage
```javascript
import { printLn } from 'swiss-ak';

printLn('A');
printLn('B'); // Replaces the 'A' line
printLn('C'); // Replaces the 'B' line
printLn(); // Jumps a line
printLn('D'); // Replaces the empty line
```

Output
```
C
D
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### Options
- `ProgressBarOptions`
- `progressBar.ProgressBarOptions`

All options are optional.

| Property         | Default                           | Description                                            |
| ---------------- | --------------------------------- | ------------------------------------------------------ |
| prefix           | `''`                              | String to show to left of progress bar                 |
| prefixWidth      | `1`                               | Min width of prefix - `10` => `Example˽˽˽`             |
| maxWidth         | `process.stdout.columns` or `100` | The maximum width the entire string may extend         |
| wrapperFn        | nothing                           | function to wrap the printed string (eg `chalk.cyan)`  |
| barWrapFn        | nothing                           | function to wrap the bar                               |
| barProgWrapFn    | nothing                           | function to wrap the 'complete' segment of the bar     |
| barCurrentWrapFn | nothing                           | function to wrap the 'current' segment of the bar      |
| barEmptyWrapFn   | nothing                           | function to wrap the empty/track part of the line      |
| showCount        | `true`                            | Show numerical values of the count - `[11 / 15]`       |
| showPercent      | `false`                           | Show percentage completed - `( 69%)`                   |
| countWidth       | `0`                               | Min width of nums for showCount - `3` => `[˽˽1 / ˽15]` |
| progChar         | `'█'`                             | Character to use for progress section of bar           |
| emptyChar        | `' '`                             | Character to use for empty (rail) section of bar       |
| startChar        | `'▕'`                             | Character to start the progress bar with               |
| endChar          | `'▏'`                             | Character to end the progress bar with                 |
| showCurrent      | `'▏'`                             | Show the 'current' segment of the bar seperately       |
| currentChar      | `'▏'`                             | Character to use the the 'current' segment             |

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### getProgressBar
- `getProgressBar`
- `progressBar.getProgressBar`

Usage:
```typescript
import chalk from 'chalk'
import {getProgressBar} from 'swiss-ak';

console.log('-'.repeat(20) + ' < 20 Chars');

const progress = getProgressBar(5, {
  prefix: 'ABC',
  maxWidth: 20,
  chalk,
  wrapperFn: chalk.green
});
for (let i = 1; i <= 5; i++) {
  progress.set(i);
}
progress.finish();
```

Output:
```
-------------------- < 20 Chars
ABC ▕      ▏ [0 / 5]
ABC ▕█     ▏ [1 / 5]
ABC ▕██    ▏ [2 / 5]
ABC ▕████  ▏ [3 / 5]
ABC ▕█████ ▏ [4 / 5]
ABC ▕██████▏ [5 / 5]
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### update
- `getProgressBar().update`

Trigger the progress bar to update/rerender

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### next
- `getProgressBar().next`

Set the progress bar to the next value

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### set
- `getProgressBar().set`

Set the progress bar to a specific value

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### reset
- `getProgressBar().reset`

Set the progress bar to 0

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### start
- `getProgressBar().start`

Start displaying the progress bar

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### finish
- `getProgressBar().finish`

Stop displaying the progress bar

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### max
- `getProgressBar().max`

Readonly number value of the max value (provided to getProgressBar as first argument)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## symbols
- `symbols`

A series of characters that can be used for display symbols

| Name                    |                                   | Symbol |
| :---------------------- | :-------------------------------- | :----: |
| TAB                     | `symbols.TAB`                     |  ` `   |
| TICK                    | `symbols.TICK`                    |   ✔    |
| CROSS                   | `symbols.CROSS`                   |   ✖    |
| PLUS                    | `symbols.PLUS`                    |   +    |
| MINUS                   | `symbols.MINUS`                   |   -    |
| TIMES                   | `symbols.TIMES`                   |   ×    |
| DIVIDE                  | `symbols.DIVIDE`                  |   ÷    |
| ELLIPSIS                | `symbols.ELLIPSIS`                |   …    |
| BULLET                  | `symbols.BULLET`                  |   •    |
| EJECT                   | `symbols.EJECT`                   |   ⏏    |
| TILDE                   | `symbols.TILDE`                   |   ~    |
| HOME                    | `symbols.HOME`                    |   ~    |
| CHEV_LFT                | `symbols.CHEV_LFT`                |   ‹    |
| CHEV_RGT                | `symbols.CHEV_RGT`                |   ›    |
| TRI_UPP                 | `symbols.TRI_UPP`                 |   ▲    |
| TRI_DWN                 | `symbols.TRI_DWN`                 |   ▼    |
| TRI_RGT                 | `symbols.TRI_RGT`                 |   ▶    |
| TRI_LFT                 | `symbols.TRI_LFT`                 |   ◀    |
| ARROW_UPP               | `symbols.ARROW_UPP`               |   ↑    |
| ARROW_DWN               | `symbols.ARROW_DWN`               |   ↓    |
| ARROW_RGT               | `symbols.ARROW_RGT`               |   →    |
| ARROW_LFT               | `symbols.ARROW_LFT`               |   ←    |
| ARROW_UPP_RGT           | `symbols.ARROW_UPP_RGT`           |   ↗    |
| ARROW_DWN_RGT           | `symbols.ARROW_DWN_RGT`           |   ↘    |
| ARROW_DWN_LFT           | `symbols.ARROW_DWN_LFT`           |   ↙    |
| ARROW_UPP_LFT           | `symbols.ARROW_UPP_LFT`           |   ↖    |
| ARROW_STILL             | `symbols.ARROW_STILL`             |   •    |
| ARROW_FLIP_H            | `symbols.ARROW_FLIP_H`            |   ↔    |
| ARROW_FLIP_V            | `symbols.ARROW_FLIP_V`            |   ↕    |
| ARROW_ROTATE_UPP        | `symbols.ARROW_ROTATE_UPP`        |   ⤴    |
| ARROW_ROTATE_DWN        | `symbols.ARROW_ROTATE_DWN`        |   ⤵    |
| ARROW_ROTATE_LFT        | `symbols.ARROW_ROTATE_LFT`        |   ⤶    |
| ARROW_ROTATE_RGT        | `symbols.ARROW_ROTATE_RGT`        |   ⤷    |
| ARROW_ROTATE_CLOCK      | `symbols.ARROW_ROTATE_CLOCK`      |   ↻    |
| ARROW_ROTATE_ANTI_CLOCK | `symbols.ARROW_ROTATE_ANTI_CLOCK` |   ↺    |
| FRACTION_1_4            | `symbols.FRACTION_1_4`            |   ¼    |
| FRACTION_1_2            | `symbols.FRACTION_1_2`            |   ½    |
| FRACTION_3_4            | `symbols.FRACTION_3_4`            |   ¾    |
| SUPERSCRIPT             | `symbols.SUPERSCRIPT['1']`        |   ¹    |
|                         | `symbols.SUPERSCRIPT['2']`        |   ²    |
|                         | `symbols.SUPERSCRIPT['3']`        |   ³    |
|                         | `symbols.SUPERSCRIPT['4']`        |   ⁴    |
|                         | `symbols.SUPERSCRIPT['5']`        |   ⁵    |
|                         | `symbols.SUPERSCRIPT['6']`        |   ⁶    |
|                         | `symbols.SUPERSCRIPT['7']`        |   ⁷    |
|                         | `symbols.SUPERSCRIPT['8']`        |   ⁸    |
|                         | `symbols.SUPERSCRIPT['9']`        |   ⁹    |
|                         | `symbols.SUPERSCRIPT['0']`        |   ⁰    |
|                         | `symbols.SUPERSCRIPT['-']`        |   ⁻    |
|                         | `symbols.SUPERSCRIPT['+']`        |   ⁺    |
|                         | `symbols.SUPERSCRIPT['=']`        |   ⁼    |
|                         | `symbols.SUPERSCRIPT['(']`        |   ⁽    |
|                         | `symbols.SUPERSCRIPT[')']`        |   ⁾    |
|                         | `symbols.SUPERSCRIPT['i']`        |   ⁱ    |
|                         | `symbols.SUPERSCRIPT['n']`        |   ⁿ    |
|                         | `symbols.SUPERSCRIPT['o']`        |   °    |
|                         | `symbols.SUPERSCRIPT['*']`        |   °    |

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### superscript
- `superscript`

Converts a string or number to superscript (where possible)

Known superscript characters:
`¹²³⁴⁵⁶⁷⁸⁹⁰⁻⁺⁼⁽⁾ⁱⁿ°`

Characters without a superscript equivalent will be replaced with a `°`

```typescript
superscript(219) // '²¹⁹'
superscript(1234567890) // '¹²³⁴⁵⁶⁷⁸⁹⁰'
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## queue
A way of managing queues from different parts of the code.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### QueueManager
- `QueueManager`

Allows you to queue up functions to be executed in order.

Importantly, it allows you to add to the queue from another part of the code, without needing to access a promise directly.

```typescript
const printDocument = async (id: number) => {
  // do something
  await wait(seconds(5));
}

const queue = new QueueManager();

const start = Date.now();

// happening async/concurrently
PromiseTools.each(range(5), async (i) => {
  await wait(seconds(Math.random() * 1));
  console.log(Date.now() - start, ' - trigger:', i, );
  await queue.add('printer', () => printDocument(i))
  console.log(Date.now() - start, ' - printed:', i);
})

// Output:

// 184 ' - trigger:' 0
// 355 ' - trigger:' 2
// 435 ' - trigger:' 4
// 448 ' - trigger:' 1
// 487 ' - trigger:' 3
// 5190 ' - printed:' 0
// 10195 ' - printed:' 2
// 15200 ' - printed:' 4
// 20205 ' - printed:' 1
// 25208 ' - printed:' 3
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### setDefaultPauseTime
- `queue.setDefaultPauseTime`
- `new QueueManager().setDefaultPauseTime`

Sets the default pause time for pauses between queue items.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### setPauseTime
- `queue.setPauseTime`
- `new QueueManager().setPauseTime`

Sets the pause time for pauses between queue items for the specified queue.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### add
- `queue.add`
- `new QueueManager().add`

Adds a function to the queue.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

#### new
- `queue.new`
- `new QueueManager().new`

Creates a new QueueManager instance.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### queue
- `queue`

An instance of QueueManager

See QueueManager for more information.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## timer
A debug tool for measuring the duration of code blocks.

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### getTimer
- `getTimer`

Usage:
```typescript
const timer = getTimer('Example', false, chalk.red, chalk, {
  TOTAL: 'TOTAL',
  INTRO: 'Action 1',
  ENDING: 'Action 2'
});
timer.start(timer.TOTAL, timer.INTRO);

await wait(seconds(4)); // do something async

timer.switch(timer.INTRO, timer.ENDING); // same as calling end(timer.INTRO) and start(timer.ENDING)

await wait(seconds(6)); // do something async

timer.end(timer.TOTAL, timer.ENDING);
timer.log();
```

Output:
```
Example Times:
	Action 1: 4s
	Action 2: 6s
	⎯⎯⎯⎯⎯⎯⎯
	TOTAL:    10s
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### timer
- `timer`

Global timer

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

## Helper Types
Some commonly used types

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### Partial<T>
- `Partial`

Makes all properties in T optional.

```typescript
interface ITest {
  a: string,
  b: boolean
};
type PartialTest = Partial<ITest>; // { a?: string, b?: boolean }
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### KeysOnly<T>
- `KeysOnly`

Makes all the values equal to the keys of T

```typescript
interface ITest {
  a: string,
  b: boolean
};
type KeysOnlyTest = KeysOnly<ITest>; // { a: 'a', b: 'b' }
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### Numbered<T>
- `Numbered`

Makes all the values numbers

```typescript
interface ITest {
  a: string,
  b: boolean
};
type NumberedTest = Numbered<ITest>; // { a: number, b: number }
```

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### OfType<T, U>
- `OfType`

Makes all the properties of object T have type U

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### ObjOfType<T>
- `ObjOfType`

An object with any properties of type T

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### RemapOf<O, T>
- `RemapOf`

Remap a given interface (O) with all properties of type T

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

<!-- DOCS: MAIN END -->

# Notes

> These are used in non-vital personal projects and scripts.

> Need to be better tested before being used in prod.

> Failing/erroring/rejected promises may not behave as expected.

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>
