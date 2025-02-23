# swiss-ak (Swiss Army Knife)

A collection of useful little things that I like to reuse across projects

<!-- DOCS: TOC START -->

  - [**Table of Contents**](#)
    - [**times**](#times)
    - [**waiters**](#waiters)
    - [**fn**](#fn)
    - [**ArrayTools**](#arraytools)
    - [**ObjectTools**](#objecttools)
    - [**StringTools**](#stringtools)
    - [**MathsTools**](#mathstools)
    - [**PromiseTools**](#promisetools)
    - [**ColourTools**](#colourtools)
    - [**TimeTools**](#timetools)
    - [**ErrorTools**](#errortools)
    - [**Cachier**](#cachier_title)
    - [**onDemand**](#ondemand)
    - [**symbols**](#symbols)
    - [**queue**](#queue)
    - [**timer**](#timer)
    - [**safe**](#safe)
    - [**Types**](#types)

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

  - [**waiters**](#waiters)
    - [wait](#wait)
    - [waitUntil](#waituntil)
    - [waitFor](#waitfor)
    - [waitEvery](#waitevery)
    - [stopInterval](#stopinterval)
    - [interval](#interval)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### wait

```typescript
wait(time: ms): Promise<unknown>
waiters.wait(time: ms): Promise<unknown>
```

Standard wait promise (using setTimeout)

```typescript
import { wait } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await wait(minutes(2));
console.log(new Date().toTimeString()); // 12:32:10
```

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `time`         | **Yes**  | `ms` |

| Return Type        |
|--------------------|
| `Promise<unknown>` |

<p style="text-align: right" align="right"><a href="#waiters"> [↑ Back to <b>waiters</b> ↑] </a></p>

### waitUntil

```typescript
waitUntil(time: ms): Promise<null>
waiters.waitUntil(time: ms): Promise<null>
```

Accurate (pinged) wait until given time

```typescript
import { waitUntil } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await waitUntil(Date.now() + minutes(10));
console.log(new Date().toTimeString()); // 12:40:10
```

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `time`         | **Yes**  | `ms` |

| Return Type     |
|-----------------|
| `Promise<null>` |

<p style="text-align: right" align="right"><a href="#waiters"> [↑ Back to <b>waiters</b> ↑] </a></p>

### waitFor

```typescript
waitFor(time: ms): Promise<null>
waiters.waitFor(time: ms): Promise<null>
```

Accurate (pinged) wait the given ms

```typescript
import { waitFor } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await waitFor(minutes(5));
console.log(new Date().toTimeString()); // 12:35:10
```

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `time`         | **Yes**  | `ms` |

| Return Type     |
|-----------------|
| `Promise<null>` |

<p style="text-align: right" align="right"><a href="#waiters"> [↑ Back to <b>waiters</b> ↑] </a></p>

### waitEvery

```typescript
waitEvery(timing: ms, offset: ms): Promise<null>
waiters.waitEvery(timing: ms, offset: ms): Promise<null>
```

Accurate (pinged) wait for next 'every X' event

```typescript
import { waitEvery } from 'swiss-ak';

console.log(new Date().toTimeString()); // 12:30:10
await waitEvery(hours(2));
console.log(new Date().toTimeString()); // 14:00:00
```

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `timing`       | **Yes**  | `ms` |
| *1* | `offset`       | *No*     | `ms` |

| Return Type     |
|-----------------|
| `Promise<null>` |

<p style="text-align: right" align="right"><a href="#waiters"> [↑ Back to <b>waiters</b> ↑] </a></p>

### stopInterval

```typescript
stopInterval(intID: number): void
waiters.stopInterval(intID: number): void
```

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

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `intID`        | **Yes**  | `number` |

| Return Type |
|-------------|
| `void`      |

<p style="text-align: right" align="right"><a href="#waiters"> [↑ Back to <b>waiters</b> ↑] </a></p>

### interval

```typescript
interval(action: (intID?: number, count?: number) => any, timing: ms): number
waiters.interval(action: (intID?: number, count?: number) => any, timing: ms): number
```

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

|  #  | Parameter Name | Required | Type                                      |
|:---:|:---------------|:---------|:------------------------------------------|
| *0* | `action`       | **Yes**  | `(intID?: number, count?: number) => any` |
| *1* | `timing`       | **Yes**  | `ms`                                      |

| Return Type |
|-------------|
| `number`    |

<p style="text-align: right" align="right"><a href="#waiters"> [↑ Back to <b>waiters</b> ↑] </a></p>

## fn
A collection of useful higher-order functions.

  - [**fn**](#fn)
    - [noop](#noop)
    - [noact](#noact)
    - [result](#result)
    - [resolve](#resolve)
    - [reject](#reject)
    - [**filters**](#filters)
      - [exists](#exists)
      - [isTruthy](#istruthy)
      - [isFalsy](#isfalsy)
      - [isEmpty](#isempty)
      - [isNotEmpty](#isnotempty)
      - [isEqual](#isequal)
      - [isNotEqual](#isnotequal)
      - [dedupe](#dedupe)
      - [dedupeMapped](#dedupemapped)
    - [**maps**](#maps)
      - [toString](#tostring)
      - [toNumber](#tonumber)
      - [toBool](#tobool)
      - [toProp](#toprop)
      - [toFixed](#tofixed)
    - [**sorts**](#sorts)
      - [asc](#asc)
      - [desc](#desc)
      - [byProp](#byprop)
      - [nearestTo](#nearestto)
      - [furthestFrom](#furthestfrom)
      - [array](#array)
      - [arrayAsc](#arrayasc)
      - [arrayDesc](#arraydesc)
    - [**reduces**](#reduces)
      - [combine](#combine)
      - [combineProp](#combineprop)
      - [mode](#mode)
      - [modeMapped](#modemapped)
    - [**everys**](#everys)
      - [isAllEqual](#isallequal)
      - [isUnique](#isunique)
    - [**groups**](#groups)
      - [bySize](#bysize)
      - [byNumGroups](#bynumgroups)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### noop

```typescript
fn.noop(): void
```

No operation. Do nothing, return nothing.

```typescript
const run = condition ? doSomething : fn.noop;
run();
```

| Return Type |
|-------------|
| `void`      |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

### noact

```typescript
fn.noact(item: T): T
```

No action. Returns the first argument it receives.

```typescript
const items = stuff
  .map(condition ? mapSomething : fn.noact)
```

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `item`         | *No*     | `T`  |

| Return Type |
|-------------|
| `T`         |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

### result

```typescript
fn.result(item: T): () => T
```

Returns a function that returns the first argument.

```typescript
const items = stuff
  .filter(condition ? mapSomething : fn.result(true))
```

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `item`         | *No*     | `T`  |

| Return Type |
|-------------|
| `() => T`   |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

### resolve

```typescript
fn.resolve(item: T): () => Promise<T>
```

Returns an async function that resolves to the first argument

Like fn.result, but wrapped in a Promise

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `item`         | *No*     | `T`  |

| Return Type        |
|--------------------|
| `() => Promise<T>` |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

### reject

```typescript
fn.reject(item: T): () => Promise<T>
```

Returns an async function that rejects with the first argument

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `item`         | *No*     | `T`  |

| Return Type        |
|--------------------|
| `() => Promise<T>` |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

### filters

```typescript
fn.filters;
```

Collection of functions that can be used with Array.filter

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### exists

```typescript
fn.exists(item: T): boolean
fn.filters.exists(item: T): boolean
filters.exists(item: T): boolean
```

Returns true if item isn't null or undefined.

```typescript
[null, 1, undefined, 2].filter(fn.exists); // [1, 2]
```

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `item`         | **Yes**  | `T`  |

| Return Type |
|-------------|
| `boolean`   |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### isTruthy

```typescript
fn.isTruthy(item: T): boolean
fn.filters.isTruthy(item: T): boolean
filters.isTruthy(item: T): boolean
```

Returns true if item is truthy.

```typescript
[0, 1, 2].filter(fn.isTruthy); // [1, 2]
['', 'a', 'b'].filter(fn.isTruthy); // ['a', 'b']
```

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `item`         | **Yes**  | `T`  |

| Return Type |
|-------------|
| `boolean`   |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### isFalsy

```typescript
fn.isFalsy(item: T): boolean
fn.filters.isFalsy(item: T): boolean
filters.isFalsy(item: T): boolean
```

Returns true if item is falsy.

```typescript
[0, 1, 2].filter(fn.isFalsy); // [0]
['', 'a', 'b'].filter(fn.isFalsy); // ['']
```

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `item`         | **Yes**  | `T`  |

| Return Type |
|-------------|
| `boolean`   |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### isEmpty

```typescript
fn.isEmpty(item: T[] | string): boolean
fn.filters.isEmpty(item: T[] | string): boolean
filters.isEmpty(item: T[] | string): boolean
```

Returns true if item's length is 0

```typescript
['', 'a', 'b'].filter(fn.isEmpty); // ['']
[[], [1], [2]].filter(fn.isEmpty); // [[]]
```

|  #  | Parameter Name | Required | Type            |
|:---:|:---------------|:---------|:----------------|
| *0* | `item`         | **Yes**  | `T[] \| string` |

| Return Type |
|-------------|
| `boolean`   |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### isNotEmpty

```typescript
fn.isNotEmpty(item: T[] | string): boolean
fn.filters.isNotEmpty(item: T[] | string): boolean
filters.isNotEmpty(item: T[] | string): boolean
```

Returns true if item's length is 1 or more

```typescript
['', 'a', 'b'].filter(fn.isNotEmpty); // ['a', 'b']
[[], [1], [2]].filter(fn.isNotEmpty); // [[1], [2]]
```

|  #  | Parameter Name | Required | Type            |
|:---:|:---------------|:---------|:----------------|
| *0* | `item`         | **Yes**  | `T[] \| string` |

| Return Type |
|-------------|
| `boolean`   |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### isEqual

```typescript
fn.isEqual(item: T): (other: T) => boolean
fn.filters.isEqual(item: T): (other: T) => boolean
filters.isEqual(item: T): (other: T) => boolean
```

Returns a function that returns true if the item is equal to provided value.

```typescript
[0, 1, 2].filter(fn.isEqual(1)); // [1]
```

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `item`         | **Yes**  | `T`  |

| Return Type             |
|-------------------------|
| `(other: T) => boolean` |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### isNotEqual

```typescript
fn.isNotEqual(item: T): (other: T) => boolean
fn.filters.isNotEqual(item: T): (other: T) => boolean
filters.isNotEqual(item: T): (other: T) => boolean
```

Returns a function that returns true if the item is not equal to provided value.

```typescript
[0, 1, 2].filter(fn.isNotEqual(1)); // [0, 2]
```

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `item`         | **Yes**  | `T`  |

| Return Type             |
|-------------------------|
| `(other: T) => boolean` |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### dedupe

```typescript
fn.dedupe(item: T, index: number, array: T[]): boolean
fn.filters.dedupe(item: T, index: number, array: T[]): boolean
filters.dedupe(item: T, index: number, array: T[]): boolean
```

Removes duplicate items from an array.

```typescript
[0, 1, 2, 1, 0].filter(fn.dedupe); // [0, 1, 2]
```

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `item`         | **Yes**  | `T`      |
| *1* | `index`        | **Yes**  | `number` |
| *2* | `array`        | **Yes**  | `T[]`    |

| Return Type |
|-------------|
| `boolean`   |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### dedupeMapped

```typescript
fn.dedupeMapped(mapFn: (value?: T, index?: number, array?: T[]) => U): (item: T, index: number, array: T[]) => boolean
fn.filters.dedupeMapped(mapFn: (value?: T, index?: number, array?: T[]) => U): (item: T, index: number, array: T[]) => boolean
filters.dedupeMapped(mapFn: (value?: T, index?: number, array?: T[]) => U): (item: T, index: number, array: T[]) => boolean
```

Removes duplicate items from an array based on a mapped value.

```typescript
[2, 4, 6, 8, 10, 12].filter(fn.dedupeMapped((v) => v % 3)); // [ 2, 4, 6 ] (maps to [ 2, 1, 0, 2, 1, 0 ])
```

|  #  | Parameter Name | Required | Type                                            |
|:---:|:---------------|:---------|:------------------------------------------------|
| *0* | `mapFn`        | **Yes**  | `(value?: T, index?: number, array?: T[]) => U` |

| Return Type                                       |
|---------------------------------------------------|
| `(item: T, index: number, array: T[]) => boolean` |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

### maps

```typescript
fn.maps;
```

Collection of functions that can be used with Array.map

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### toString

```typescript
fn.toString(item: T): string
fn.maps.toString(item: T): string
maps.toString(item: T): string
```

Maps the item to a string.

```typescript
[0, 1, 2].map(fn.toString); // ['0', '1', '2']
```

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `item`         | **Yes**  | `T`  |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### toNumber

```typescript
fn.toNumber(item: T): number
fn.maps.toNumber(item: T): number
maps.toNumber(item: T): number
```

Maps the item to a number.

```typescript
['0', '1', '2'].map(fn.toNumber); // [0, 1, 2]
```

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `item`         | **Yes**  | `T`  |

| Return Type |
|-------------|
| `number`    |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### toBool

```typescript
fn.toBool(item: T): boolean
fn.maps.toBool(item: T): boolean
maps.toBool(item: T): boolean
```

Maps the item to a boolean.

```typescript
[0, 1, 2].map(fn.toBool); // [false, true, true]
['true', 'false', '', 'text'].map(fn.toBool); // [true, false, false, true]
```

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `item`         | **Yes**  | `T`  |

| Return Type |
|-------------|
| `boolean`   |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### toProp

```typescript
fn.toProp(prop: string | number): (item: O) => P
fn.maps.toProp(prop: string | number): (item: O) => P
maps.toProp(prop: string | number): (item: O) => P
```

Maps the item to a given property of the item

```typescript
[{name: 'Jack'}, {name: 'Jill'}].map(fn.toProp('name')); // ['Jack', 'Jill']
```

|  #  | Parameter Name | Required | Type               |
|:---:|:---------------|:---------|:-------------------|
| *0* | `prop`         | **Yes**  | `string \| number` |

| Return Type      |
|------------------|
| `(item: O) => P` |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### toFixed

```typescript
fn.toFixed(precision: number): (num: number) => number
fn.maps.toFixed(precision: number): (num: number) => number
maps.toFixed(precision: number): (num: number) => number
```

Map the items (numbers) of an array to a fixed precision.

```typescript
[1.234, 5.678, 9.012].map(fn.toFixed(2)); // [1.23, 5.68, 9.01]
```

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `precision`    | **Yes**  | `number` |

| Return Type               |
|---------------------------|
| `(num: number) => number` |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

### sorts

```typescript
fn.sorts;
```

Collection of functions that can be used with Array.sort

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### asc

```typescript
fn.asc(a: any, b: any): number
fn.sorts.asc(a: any, b: any): number
sorts.asc(a: any, b: any): number
```

Sort ascending.

```typescript
[2, 4, 3, 1].sort(fn.asc); // [1, 2, 3, 4]
```

|  #  | Parameter Name | Required | Type  |
|:---:|:---------------|:---------|:------|
| *0* | `a`            | **Yes**  | `any` |
| *1* | `b`            | **Yes**  | `any` |

| Return Type |
|-------------|
| `number`    |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### desc

```typescript
fn.desc(a: any, b: any): number
fn.sorts.desc(a: any, b: any): number
sorts.desc(a: any, b: any): number
```

Sort descending.

```typescript
[2, 4, 3, 1].sort(fn.asc); // [4, 3, 2, 1]
```

|  #  | Parameter Name | Required | Type  |
|:---:|:---------------|:---------|:------|
| *0* | `a`            | **Yes**  | `any` |
| *1* | `b`            | **Yes**  | `any` |

| Return Type |
|-------------|
| `number`    |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### byProp

```typescript
fn.byProp(propName: string | number, sortFn: SortFn<T>): SortFn<O>
fn.sorts.byProp(propName: string | number, sortFn: SortFn<T>): SortFn<O>
sorts.byProp(propName: string | number, sortFn: SortFn<T>): SortFn<O>
```

Sort by a given property.

```typescript
const people = [{age: 2}, {age: 4}, {age: 3}, {age: 1}];
people.sort(fn.byProp('age', fn.asc)); // [{age: 1}, {age: 2}, {age: 3}, {age: 4}]
```

|  #  | Parameter Name | Required | Type               | Default |
|:---:|:---------------|:---------|:-------------------|:--------|
| *0* | `propName`     | **Yes**  | `string \| number` |         |
| *1* | `sortFn`       | *No*     | `SortFn<T>`        | `asc`   |

| Return Type |
|-------------|
| `SortFn<O>` |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### nearestTo

```typescript
fn.nearestTo(target: T): (a: any, b: any) => number
fn.sorts.nearestTo(target: T): (a: any, b: any) => number
sorts.nearestTo(target: T): (a: any, b: any) => number
```

Sort by the nearest value to the given value.

Values get converted to numbers before comparison.

```typescript
const people = [2, 4, 3, 1];
people.sort(fn.nearestTo(3)); // [3, 2, 4, 1]
```

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `target`       | **Yes**  | `T`  |

| Return Type                  |
|------------------------------|
| `(a: any, b: any) => number` |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### furthestFrom

```typescript
fn.furthestFrom(target: T): (a: any, b: any) => number
fn.sorts.furthestFrom(target: T): (a: any, b: any) => number
sorts.furthestFrom(target: T): (a: any, b: any) => number
```

Sort by the furthest value to the given value.

```typescript
const people = [2, 4, 3, 1];
people.sort(fn.furthestFrom(3)); // [1, 2, 4, 3]
```

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `target`       | **Yes**  | `T`  |

| Return Type                  |
|------------------------------|
| `(a: any, b: any) => number` |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### array

```typescript
fn.array(sortFn: SortFn<T>): (a: T[], b: T[]) => number
fn.sorts.array(sortFn: SortFn<T>): (a: T[], b: T[]) => number
sorts.array(sortFn: SortFn<T>): (a: T[], b: T[]) => number
```

Sort an array of arrays by the given sort function.

Sorts by the first item in the array, then the second, etc. until a non-zero result is found.

|  #  | Parameter Name | Required | Type        | Default |
|:---:|:---------------|:---------|:------------|:--------|
| *0* | `sortFn`       | *No*     | `SortFn<T>` | `asc`   |

| Return Type                  |
|------------------------------|
| `(a: T[], b: T[]) => number` |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### arrayAsc

```typescript
fn.arrayAsc;
fn.sorts.arrayAsc;
sorts.arrayAsc;
```

Sort an array of arrays in ascending order

Sorts by the first item in the array, then the second, etc. until a non-zero result is found.

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### arrayDesc

```typescript
fn.arrayDesc;
fn.sorts.arrayDesc;
sorts.arrayDesc;
```

Sort an array of arrays in descending order

Sorts by the first item in the array, then the second, etc. until a non-zero result is found.

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

### reduces

```typescript
fn.reduces;
```

Collection of functions that can be used with Array.reduce

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### combine

```typescript
fn.combine(a: T, b: T): T
fn.reduces.combine(a: T, b: T): T
reduces.combine(a: T, b: T): T
```

Adds or concats the items

```typescript
[1, 2, 3].reduce(fn.combine); // 6
['a', 'b', 'c'].reduce(fn.combine); // 'abc'
```

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `a`            | **Yes**  | `T`  |
| *1* | `b`            | **Yes**  | `T`  |

| Return Type |
|-------------|
| `T`         |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### combineProp

```typescript
fn.combineProp(propName: string | number): (a: O | T, b: O) => T
fn.reduces.combineProp(propName: string | number): (a: O | T, b: O) => T
reduces.combineProp(propName: string | number): (a: O | T, b: O) => T
```

Adds or concats the given property of the items

```typescript
const people = [{name: 'a', age: 1}, {name: 'b', age: 2}, {name: 'c', age: 3}];
people.reduce(fn.combineProp('age')); // 6
people.reduce(fn.combineProp('name')); // 'abc'
```

|  #  | Parameter Name | Required | Type               |
|:---:|:---------------|:---------|:-------------------|
| *0* | `propName`     | **Yes**  | `string \| number` |

| Return Type              |
|--------------------------|
| `(a: O \| T, b: O) => T` |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### mode

```typescript
fn.mode(prev: T, curr: T, index: number, arr: T[]): T
fn.reduces.mode(prev: T, curr: T, index: number, arr: T[]): T
reduces.mode(prev: T, curr: T, index: number, arr: T[]): T
```

Returns the most common value in an array.

```typescript
[1, 2, 3, 2, 1, 1].reduce(fn.mode); // 1
```

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `prev`         | **Yes**  | `T`      |
| *1* | `curr`         | **Yes**  | `T`      |
| *2* | `index`        | **Yes**  | `number` |
| *3* | `arr`          | **Yes**  | `T[]`    |

| Return Type |
|-------------|
| `T`         |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### modeMapped

```typescript
fn.modeMapped(mapFn: (value: T, index: number, array: T[]) => U): (prev: T, curr: T, index: number, arr: T[]) => T
fn.reduces.modeMapped(mapFn: (value: T, index: number, array: T[]) => U): (prev: T, curr: T, index: number, arr: T[]) => T
reduces.modeMapped(mapFn: (value: T, index: number, array: T[]) => U): (prev: T, curr: T, index: number, arr: T[]) => T
```

Returns the most common value in an array, based on a given map function.

```typescript
[2, 4, 6, 8, 9, 12].reduce(fn.modeMapped((v) => v % 3)); // 6 (maps to [ 2, 1, 0, 2, 0, 0 ])
```

|  #  | Parameter Name | Required | Type                                         |
|:---:|:---------------|:---------|:---------------------------------------------|
| *0* | `mapFn`        | **Yes**  | `(value: T, index: number, array: T[]) => U` |

| Return Type                                        |
|----------------------------------------------------|
| `(prev: T, curr: T, index: number, arr: T[]) => T` |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

### everys

```typescript
fn.everys;
```

Collection of functions that can be used with Array.every

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### isAllEqual

```typescript
fn.isAllEqual(val: T, i: number, arr: T[]): boolean
fn.everys.isAllEqual(val: T, i: number, arr: T[]): boolean
everys.isAllEqual(val: T, i: number, arr: T[]): boolean
```

Returns if all the items are equal to one another.

```typescript
[1, 1, 1].every(fn.isAllEqual); // true
[1, 2, 1].every(fn.isAllEqual); // false
```

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `val`          | **Yes**  | `T`      |
| *1* | `i`            | **Yes**  | `number` |
| *2* | `arr`          | **Yes**  | `T[]`    |

| Return Type |
|-------------|
| `boolean`   |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### isUnique

```typescript
fn.isUnique(val: T, i: number, arr: T[]): boolean
fn.everys.isUnique(val: T, i: number, arr: T[]): boolean
everys.isUnique(val: T, i: number, arr: T[]): boolean
```

Returns true if the item is unique in the array.

```typescript
[1, 1, 1].every(fn.isUnique); // false
[1, 2, 1].every(fn.isUnique); // false
[1, 2, 3].every(fn.isUnique); // true
```

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `val`          | **Yes**  | `T`      |
| *1* | `i`            | **Yes**  | `number` |
| *2* | `arr`          | **Yes**  | `T[]`    |

| Return Type |
|-------------|
| `boolean`   |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

### groups

```typescript
fn.groups;
```

Collection of functions that can be used with ArrayTools.group

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### bySize

```typescript
fn.bySize(size: number): (value: T, index: number, array: T[]) => number
fn.groups.bySize(size: number): (value: T, index: number, array: T[]) => number
groups.bySize(size: number): (value: T, index: number, array: T[]) => number
```

Group an array into groups of a given size.

> __Note:__ The last group may be smaller than the given size.

> __Note:__ The groups a distributed in order, so the first group will be filled up first, then the next, etc.

```typescript
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
ArrayTools.group(nums, fn.bySize(3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]
```

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `size`         | **Yes**  | `number` |

| Return Type                                       |
|---------------------------------------------------|
| `(value: T, index: number, array: T[]) => number` |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### byNumGroups

```typescript
fn.byNumGroups(numGroups: number): (value: T, index: number, array: T[]) => any
fn.groups.byNumGroups(numGroups: number): (value: T, index: number, array: T[]) => any
groups.byNumGroups(numGroups: number): (value: T, index: number, array: T[]) => any
```

Group an array into a certain number of groups as evenly as possible.

> __Note:__ The groups a distributed in order, so the first group will be filled up first, then the next, etc.

```typescript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
ArrayTools.group(nums, byNumGroups(3)); // [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]
```

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `numGroups`    | **Yes**  | `number` |

| Return Type                                    |
|------------------------------------------------|
| `(value: T, index: number, array: T[]) => any` |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

## ArrayTools
A collection of useful array functions.

  - [**ArrayTools**](#arraytools)
    - [create](#arraytools_create)
    - [filled](#filled)
    - [range](#range)
    - [zip](#zip)
    - [zipMax](#zipmax)
    - [sortByMapped](#sortbymapped)
    - [randomise](#randomise)
    - [reverse](#reverse)
    - [entries](#entries)
    - [repeat](#arraytools_repeat)
    - [roll](#roll)
    - [sortNumberedText](#sortnumberedtext)
    - [partition](#partition)
    - [groupObj](#groupobj)
    - [group](#group)
    - [findAndRemove](#findandremove)
    - [findLastAndRemove](#findlastandremove)
    - [filterAndRemove](#filterandremove)
    - [**utils**](#utils)
      - [isNumString](#isnumstring)
      - [partitionNums](#partitionnums)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### <span id="arraytools_create">create</span>

```typescript
create(length: number, value: T): T[]
ArrayTools.create(length: number, value: T): T[]
```

Create an array of the given length, where each value is the given value

|  #  | Parameter Name | Required | Type     | Default  |
|:---:|:---------------|:---------|:---------|:---------|
| *0* | `length`       | *No*     | `number` | `1`      |
| *1* | `value`        | *No*     | `T`      | `1 as T` |

| Return Type |
|-------------|
| `T[]`       |

<p style="text-align: right" align="right"><a href="#arraytools"> [↑ Back to <b>ArrayTools</b> ↑] </a></p>

### filled

```typescript
filled(length: number, value: T): T[]
ArrayTools.filled(length: number, value: T): T[]
```

Create an array of the given length, where each value is the given value

|  #  | Parameter Name | Required | Type     | Default |
|:---:|:---------------|:---------|:---------|:--------|
| *0* | `length`       | *No*     | `number` | `1`     |
| *1* | `value`        | **Yes**  | `T`      |         |

| Return Type |
|-------------|
| `T[]`       |

<p style="text-align: right" align="right"><a href="#arraytools"> [↑ Back to <b>ArrayTools</b> ↑] </a></p>

### range

```typescript
range(length: number, multiplier: number, offset: number): number[]
ArrayTools.range(length: number, multiplier: number, offset: number): number[]
```

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

|  #  | Parameter Name | Required | Type     | Default |
|:---:|:---------------|:---------|:---------|:--------|
| *0* | `length`       | *No*     | `number` | `1`     |
| *1* | `multiplier`   | *No*     | `number` | `1`     |
| *2* | `offset`       | *No*     | `number` | `0`     |

| Return Type |
|-------------|
| `number[]`  |

<p style="text-align: right" align="right"><a href="#arraytools"> [↑ Back to <b>ArrayTools</b> ↑] </a></p>

### zip

```typescript
zip(...arrs: T[]): ZippedArrays<T>[]
ArrayTools.zip(...arrs: T[]): ZippedArrays<T>[]
```

Converts multiple arrays into an array of 'tuples' for each value at the corresponding indexes.

Limited to the length of the shortest provided array

Inspired by python's 'zip'

```typescript
ArrayTools.zip([1, 2, 3, 4], ['a', 'b', 'c']); // [ [1, 'a'], [2, 'b'], [3, 'c'] ]
```

|  #   | Parameter Name | Required | Type  |
|:----:|:---------------|:---------|:------|
| *0…* | `arrs`         | *No*     | `T[]` |

| Return Type         |
|---------------------|
| `ZippedArrays<T>[]` |

<p style="text-align: right" align="right"><a href="#arraytools"> [↑ Back to <b>ArrayTools</b> ↑] </a></p>

### zipMax

```typescript
zipMax(...arrs: T[]): ZippedArrays<T>[]
ArrayTools.zipMax(...arrs: T[]): ZippedArrays<T>[]
```

Converts multiple arrays into an array of 'tuples' for each value at the corresponding indexes.

Unlike `zip`, it will match the length of the longest provided array, filling in any missing values with `undefined`

Inspired by python's 'zip'

```typescript
ArrayTools.zipMax([1, 2, 3, 4], ['a', 'b', 'c']); //[ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ], [ 4, undefined ] ]
```

|  #   | Parameter Name | Required | Type  |
|:----:|:---------------|:---------|:------|
| *0…* | `arrs`         | *No*     | `T[]` |

| Return Type         |
|---------------------|
| `ZippedArrays<T>[]` |

<p style="text-align: right" align="right"><a href="#arraytools"> [↑ Back to <b>ArrayTools</b> ↑] </a></p>

### sortByMapped

```typescript
sortByMapped(arr: T[], mapFn: (value: T, index: number, array: T[]) => M, sortFn: (a: M, b: M) => number): T[]
ArrayTools.sortByMapped(arr: T[], mapFn: (value: T, index: number, array: T[]) => M, sortFn: (a: M, b: M) => number): T[]
```

Sort an array by a mapped form of the values, but returning the initial values

```typescript
ArrayTools.sortByMapped(['2p', '3p', '1p'], (v) => Number(v.replace('p', ''))); // ['1p', '2p', '3p']
ArrayTools.sortByMapped(
  ['2p', '3p', '1p'],
  (v) => Number(v.replace('p', '')),
  (a, b) => b - a
); // ['3p', '2p', '1p']
```

|  #  | Parameter Name | Required | Type                                         | Default  |
|:---:|:---------------|:---------|:---------------------------------------------|:---------|
| *0* | `arr`          | **Yes**  | `T[]`                                        |          |
| *1* | `mapFn`        | **Yes**  | `(value: T, index: number, array: T[]) => M` |          |
| *2* | `sortFn`       | *No*     | `(a: M, b: M) => number`                     | `fn.asc` |

| Return Type |
|-------------|
| `T[]`       |

<p style="text-align: right" align="right"><a href="#arraytools"> [↑ Back to <b>ArrayTools</b> ↑] </a></p>

### randomise

```typescript
randomise(arr: T[]): T[]
ArrayTools.randomise(arr: T[]): T[]
```

Returns a clone of the provided array with it's items in a random order

```typescript
ArrayTools.randomise([1, 2, 3, 4, 5, 6]); // [ 5, 3, 4, 1, 2, 6 ]
ArrayTools.randomise([1, 2, 3, 4, 5, 6]); // [ 5, 1, 3, 2, 4, 6 ]
ArrayTools.randomise([1, 2, 3, 4, 5, 6]); // [ 6, 1, 4, 5, 2, 3 ]
ArrayTools.randomise([1, 2, 3, 4, 5, 6]); // [ 1, 4, 5, 2, 3, 6 ]
ArrayTools.randomise([1, 2, 3, 4, 5, 6]); // [ 2, 6, 1, 3, 4, 5 ]
```

|  #  | Parameter Name | Required | Type  |
|:---:|:---------------|:---------|:------|
| *0* | `arr`          | **Yes**  | `T[]` |

| Return Type |
|-------------|
| `T[]`       |

<p style="text-align: right" align="right"><a href="#arraytools"> [↑ Back to <b>ArrayTools</b> ↑] </a></p>

### reverse

```typescript
reverse(arr: T[]): T[]
ArrayTools.reverse(arr: T[]): T[]
```

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

|  #  | Parameter Name | Required | Type  |
|:---:|:---------------|:---------|:------|
| *0* | `arr`          | **Yes**  | `T[]` |

| Return Type |
|-------------|
| `T[]`       |

<p style="text-align: right" align="right"><a href="#arraytools"> [↑ Back to <b>ArrayTools</b> ↑] </a></p>

### entries

```typescript
entries(arr: T[]): [number, T][]
ArrayTools.entries(arr: T[]): [number, T][]
```

Returns array of 'tuples' of index/value pairs

```typescript
const arr = ['a', 'b', 'c'];
ArrayTools.entries(arr); // [ [0, 'a'], [1, 'b'], [2, 'c'] ]

for (let [index, value] of entries(arr)) {
 console.log(index); // 0, 1, 2
 console.log(value); // 'a', 'b', 'c'
}
```

|  #  | Parameter Name | Required | Type  |
|:---:|:---------------|:---------|:------|
| *0* | `arr`          | **Yes**  | `T[]` |

| Return Type     |
|-----------------|
| `[number, T][]` |

<p style="text-align: right" align="right"><a href="#arraytools"> [↑ Back to <b>ArrayTools</b> ↑] </a></p>

### <span id="arraytools_repeat">repeat</span>

```typescript
repeat(maxLength: number, ...items: T[]): T[]
ArrayTools.repeat(maxLength: number, ...items: T[]): T[]
```

Returns an array with the given items repeated

```typescript
ArrayTools.repeat(5, 'a'); // [ 'a', 'a', 'a', 'a', 'a' ]
ArrayTools.repeat(5, 'a', 'b'); // [ 'a', 'b', 'a', 'b', 'a' ]
```

|  #   | Parameter Name | Required | Type     |
|:----:|:---------------|:---------|:---------|
| *0*  | `maxLength`    | **Yes**  | `number` |
| *1…* | `items`        | *No*     | `T[]`    |

| Return Type |
|-------------|
| `T[]`       |

<p style="text-align: right" align="right"><a href="#arraytools"> [↑ Back to <b>ArrayTools</b> ↑] </a></p>

### roll

```typescript
roll(distance: number, arr: T[]): T[]
ArrayTools.roll(distance: number, arr: T[]): T[]
```

'Roll' the array by a given amount so that is has a new first item. Length and contents remain the same, but the order is changed

```typescript
ArrayTools.roll(1, [0, 1, 2, 3, 4, 5, 6, 7]); // [ 1, 2, 3, 4, 5, 6, 7, 0 ]
ArrayTools.roll(4, [0, 1, 2, 3, 4, 5, 6, 7]); // [ 4, 5, 6, 7, 0, 1, 2, 3 ]
```

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `distance`     | **Yes**  | `number` |
| *1* | `arr`          | **Yes**  | `T[]`    |

| Return Type |
|-------------|
| `T[]`       |

<p style="text-align: right" align="right"><a href="#arraytools"> [↑ Back to <b>ArrayTools</b> ↑] </a></p>

### sortNumberedText

```typescript
sortNumberedText(texts: string[], ignoreCase: boolean): string[]
ArrayTools.sortNumberedText(texts: string[], ignoreCase: boolean): string[]
```

Alphabetically sorts a list of strings, but keeps multi-digit numbers in numerical order (rather than alphabetical)

```typescript
const names = ['name1', 'name10', 'name2', 'foo20', 'foo10', 'foo9'];
names.sort(); // [ 'foo10', 'foo20', 'foo9', 'name1', 'name10', 'name2' ]
ArrayTools.sortNumberedText(names); // [ 'foo9', 'foo10', 'foo20', 'name1', 'name2', 'name10' ]
```

|  #  | Parameter Name | Required | Type       | Default |
|:---:|:---------------|:---------|:-----------|:--------|
| *0* | `texts`        | **Yes**  | `string[]` |         |
| *1* | `ignoreCase`   | *No*     | `boolean`  | `true`  |

| Return Type |
|-------------|
| `string[]`  |

<p style="text-align: right" align="right"><a href="#arraytools"> [↑ Back to <b>ArrayTools</b> ↑] </a></p>

### partition

```typescript
partition(array: T[], partitionSize: number): T[][]
ArrayTools.partition(array: T[], partitionSize: number): T[][]
```

Breaks an array into smaller arrays of a given size

```typescript
ArrayTools.partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]
```

|  #  | Parameter Name  | Required | Type     | Default                       |
|:---:|:----------------|:---------|:---------|:------------------------------|
| *0* | `array`         | **Yes**  | `T[]`    |                               |
| *1* | `partitionSize` | *No*     | `number` | `Math.ceil(array.length / 2)` |

| Return Type |
|-------------|
| `T[][]`     |

<p style="text-align: right" align="right"><a href="#arraytools"> [↑ Back to <b>ArrayTools</b> ↑] </a></p>

### groupObj

```typescript
groupObj(array: T[], mapFn: (item: T, index: number, arr: T[]) => string | number): { [id: string]: T[]; [id: number]: T[]; }
ArrayTools.groupObj(array: T[], mapFn: (item: T, index: number, arr: T[]) => string | number): { [id: string]: T[]; [id: number]: T[]; }
```

Group items from an array into an object of arrays, based on a given map function.

```typescript
const arr = [
  { group: 1, name: 'a' },
  { group: 2, name: 'b' },
  { group: 1, name: 'c' },
];
ArrayTools.groupObj(arr, item => item.group); // {
//   1: [ { group: 1, name: 'a' }, { group: 1, name: 'c' } ],
//   2: [ { group: 2, name: 'b' } ]
// }
```

|  #  | Parameter Name | Required | Type                                                     |
|:---:|:---------------|:---------|:---------------------------------------------------------|
| *0* | `array`        | **Yes**  | `T[]`                                                    |
| *1* | `mapFn`        | **Yes**  | `(item: T, index: number, arr: T[]) => string \| number` |

| Return Type                                 |
|---------------------------------------------|
| `{ [id: string]: T[]; [id: number]: T[]; }` |

<p style="text-align: right" align="right"><a href="#arraytools"> [↑ Back to <b>ArrayTools</b> ↑] </a></p>

### group

```typescript
group(array: T[], mapFn: (item: T, index: number, arr: T[]) => string | number): T[][]
ArrayTools.group(array: T[], mapFn: (item: T, index: number, arr: T[]) => string | number): T[][]
```

Group items from an array into an array of arrays, based on a given map function.

```typescript
const arr = [
  { group: 1, name: 'a' },
  { group: 2, name: 'b' },
  { group: 1, name: 'c' },
];
ArrayTools.group(arr, item => item.group); // [
//   [ { group: 1, name: 'a' }, { group: 1, name: 'c' } ],
//   [ { group: 2, name: 'b' } ]
// ]
```

|  #  | Parameter Name | Required | Type                                                     |
|:---:|:---------------|:---------|:---------------------------------------------------------|
| *0* | `array`        | **Yes**  | `T[]`                                                    |
| *1* | `mapFn`        | **Yes**  | `(item: T, index: number, arr: T[]) => string \| number` |

| Return Type |
|-------------|
| `T[][]`     |

<p style="text-align: right" align="right"><a href="#arraytools"> [↑ Back to <b>ArrayTools</b> ↑] </a></p>

### findAndRemove

```typescript
ArrayTools.findAndRemove(array: T[], predicate: (item: T, index: number, arr: T[]) => any, ...insertItems: T[]): T
```

Find the first item in an array that matches a given predicate, and remove it from the array

> **Note:** This function mutates the provided array

|  #   | Parameter Name | Required | Type                                        | Description                                                       |
|:----:|:---------------|:---------|:--------------------------------------------|:------------------------------------------------------------------|
| *0*  | `array`        | **Yes**  | `T[]`                                       | the array to mutate                                               |
| *1*  | `predicate`    | **Yes**  | `(item: T, index: number, arr: T[]) => any` | a function that returns true/truthy if the item should be removed |
| *2…* | `insertItems`  | *No*     | `T[]`                                       | items to insert in place of the removed item                      |

| Return Type |                                       |
|-------------|---------------------------------------|
| `T`         | removed item (undefined if not found) |

<p style="text-align: right" align="right"><a href="#arraytools"> [↑ Back to <b>ArrayTools</b> ↑] </a></p>

### findLastAndRemove

```typescript
ArrayTools.findLastAndRemove(array: T[], predicate: (item: T, index: number, arr: T[]) => any, ...insertItems: T[]): T
```

Find the last item in an array that matches a given predicate, and remove it from the array

> **Note:** This function mutates the provided array

|  #   | Parameter Name | Required | Type                                        | Description                                                       |
|:----:|:---------------|:---------|:--------------------------------------------|:------------------------------------------------------------------|
| *0*  | `array`        | **Yes**  | `T[]`                                       | the array to mutate                                               |
| *1*  | `predicate`    | **Yes**  | `(item: T, index: number, arr: T[]) => any` | a function that returns true/truthy if the item should be removed |
| *2…* | `insertItems`  | *No*     | `T[]`                                       | items to insert in place of the removed item                      |

| Return Type |                                       |
|-------------|---------------------------------------|
| `T`         | removed item (undefined if not found) |

<p style="text-align: right" align="right"><a href="#arraytools"> [↑ Back to <b>ArrayTools</b> ↑] </a></p>

### filterAndRemove

```typescript
ArrayTools.filterAndRemove(array: T[], predicate: (item: T, index: number, arr: T[]) => any): T[]
```

Find the items in an array that matches a given predicate, and remove them from the array

> **Note:** This function mutates the provided array

|  #  | Parameter Name | Required | Type                                        | Description                                                       |
|:---:|:---------------|:---------|:--------------------------------------------|:------------------------------------------------------------------|
| *0* | `array`        | **Yes**  | `T[]`                                       | the array to mutate                                               |
| *1* | `predicate`    | **Yes**  | `(item: T, index: number, arr: T[]) => any` | a function that returns true/truthy if the item should be removed |

| Return Type |               |
|-------------|---------------|
| `T[]`       | removed items |

<p style="text-align: right" align="right"><a href="#arraytools"> [↑ Back to <b>ArrayTools</b> ↑] </a></p>

### utils

```typescript
ArrayTools.utils;
```

Small helper functions that may help, but aren't important enough to be in ArrayTools directly

<p style="text-align: right" align="right"><a href="#arraytools"> [↑ Back to <b>ArrayTools</b> ↑] </a></p>

#### isNumString

```typescript
ArrayTools.utils.isNumString(text: string): boolean
```

Returns true if the given string is a number

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `text`         | **Yes**  | `string` |

| Return Type |
|-------------|
| `boolean`   |

<p style="text-align: right" align="right"><a href="#arraytools"> [↑ Back to <b>ArrayTools</b> ↑] </a></p>

#### partitionNums

```typescript
ArrayTools.utils.partitionNums(ignoreCase: boolean): (name: string) => (string | number)[]
```

Splits a string into an array of strings and numbers

|  #  | Parameter Name | Required | Type      |
|:---:|:---------------|:---------|:----------|
| *0* | `ignoreCase`   | **Yes**  | `boolean` |

| Return Type                              |
|------------------------------------------|
| `(name: string) => (string \| number)[]` |

<p style="text-align: right" align="right"><a href="#arraytools"> [↑ Back to <b>ArrayTools</b> ↑] </a></p>

## ObjectTools
A collection of functions for working with objects

  - [**ObjectTools**](#objecttools)
    - [remodel](#remodel)
    - [remodelEach](#remodeleach)
    - [map](#objecttools_map)
    - [mapValues](#mapvalues)
    - [mapKeys](#mapkeys)
    - [filter](#filter)
    - [clean](#objecttools_clean)
    - [invert](#invert)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### remodel

```typescript
ObjectTools.remodel(obj: T, func: (entries: [string, V][]) => [string, W][]): O
```

Apply a function to the entries of an object

```typescript
const input = {'foo': 2, 'bar': 1, 'baz': 4}
ObjectTools.remodel(input, (entries) => entries.filter(([k, v]) => v % 2 === 0)) // { foo: 2, baz: 4 }
```

|  #  | Parameter Name | Required | Type                                        |
|:---:|:---------------|:---------|:--------------------------------------------|
| *0* | `obj`          | **Yes**  | `T`                                         |
| *1* | `func`         | **Yes**  | `(entries: [string, V][]) => [string, W][]` |

| Return Type |
|-------------|
| `O`         |

<p style="text-align: right" align="right"><a href="#objecttools"> [↑ Back to <b>ObjectTools</b> ↑] </a></p>

### remodelEach

```typescript
ObjectTools.remodelEach(obj: T, func: (entry: [string, V], index: number, entries: [string, V][]) => [string, W]): O
```

Apply a function to each of the entries of an object

Note: similar to ObjectTools.map, but the function parameters are different. Prefer ObjectTools.map where possible.

```typescript
const input = {'foo': 2, 'bar': 1, 'baz': 4}
ObjectTools.remodelEach(input, ([k, v]) => [k, v * 2]) // { foo: 4, bar: 2, baz: 8 }
```

|  #  | Parameter Name | Required | Type                                                                         |
|:---:|:---------------|:---------|:-----------------------------------------------------------------------------|
| *0* | `obj`          | **Yes**  | `T`                                                                          |
| *1* | `func`         | **Yes**  | `(entry: [string, V], index: number, entries: [string, V][]) => [string, W]` |

| Return Type |
|-------------|
| `O`         |

<p style="text-align: right" align="right"><a href="#objecttools"> [↑ Back to <b>ObjectTools</b> ↑] </a></p>

### <span id="objecttools_map">map</span>

```typescript
ObjectTools.map(obj: T, func: (key: string, value: V, index: number) => [string, W]): any
```

Maps the keys and values of an object in a similar way to Array.map

```typescript
ObjectTools.map({a: 1, b: 2, c: 3}, (key, value) => [key, key + value]); // {a: 'a1', b: 'b2', c: 'c3'}
```

|  #  | Parameter Name | Required | Type                                                    |
|:---:|:---------------|:---------|:--------------------------------------------------------|
| *0* | `obj`          | **Yes**  | `T`                                                     |
| *1* | `func`         | **Yes**  | `(key: string, value: V, index: number) => [string, W]` |

| Return Type |
|-------------|
| `any`       |

<p style="text-align: right" align="right"><a href="#objecttools"> [↑ Back to <b>ObjectTools</b> ↑] </a></p>

### mapValues

```typescript
ObjectTools.mapValues(obj: T, func: (key: string, value: V, index: number) => W): any
```

Maps the values of an object in a similar way to Array.map

```typescript
ObjectTools.map({a: 1, b: 2, c: 3}, (key, value) => key.repeat(value)); // {a: 'a', b: 'bb', c: 'ccc'}
```

|  #  | Parameter Name | Required | Type                                          |
|:---:|:---------------|:---------|:----------------------------------------------|
| *0* | `obj`          | **Yes**  | `T`                                           |
| *1* | `func`         | **Yes**  | `(key: string, value: V, index: number) => W` |

| Return Type |
|-------------|
| `any`       |

<p style="text-align: right" align="right"><a href="#objecttools"> [↑ Back to <b>ObjectTools</b> ↑] </a></p>

### mapKeys

```typescript
ObjectTools.mapKeys(obj: T, func: (key: string, value: V, index: number) => string): T
```

Maps the values of an object in a similar way to Array.map

```typescript
ObjectTools.map({a: 1, b: 2, c: 3}, (key, value) => key.repeat(value)); // {a: 1, bb: 2, ccc: 3}
```

|  #  | Parameter Name | Required | Type                                               |
|:---:|:---------------|:---------|:---------------------------------------------------|
| *0* | `obj`          | **Yes**  | `T`                                                |
| *1* | `func`         | **Yes**  | `(key: string, value: V, index: number) => string` |

| Return Type |
|-------------|
| `T`         |

<p style="text-align: right" align="right"><a href="#objecttools"> [↑ Back to <b>ObjectTools</b> ↑] </a></p>

### filter

```typescript
ObjectTools.filter(obj: T, func: (key: string, value: V, index: number) => boolean): O
```

Removes entries from an object based on a predicate function

```typescript
ObjectTools.filter({a: 1, b: 2, c: 3}, (k, v) => v % 2 === 0) // { b: 2 }
```

|  #  | Parameter Name | Required | Type                                                |
|:---:|:---------------|:---------|:----------------------------------------------------|
| *0* | `obj`          | **Yes**  | `T`                                                 |
| *1* | `func`         | **Yes**  | `(key: string, value: V, index: number) => boolean` |

| Return Type |
|-------------|
| `O`         |

<p style="text-align: right" align="right"><a href="#objecttools"> [↑ Back to <b>ObjectTools</b> ↑] </a></p>

### <span id="objecttools_clean">clean</span>

```typescript
ObjectTools.clean(obj: T): O
```

Removes properties with undefined values

```typescript
ObjectTools.clean({a: 1, b: undefined, c: 3}) // { a: 1, c: 3 }
```

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `obj`          | **Yes**  | `T`  |

| Return Type |
|-------------|
| `O`         |

<p style="text-align: right" align="right"><a href="#objecttools"> [↑ Back to <b>ObjectTools</b> ↑] </a></p>

### invert

```typescript
ObjectTools.invert(obj: Ti): To
```

Inverts the keys and values of an object

```typescript
ObjectTools.invert({ a: 'foo', b: 'bar' }); // { foo: 'a', bar: 'b'}
```

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `obj`          | **Yes**  | `Ti` |

| Return Type |
|-------------|
| `To`        |

<p style="text-align: right" align="right"><a href="#objecttools"> [↑ Back to <b>ObjectTools</b> ↑] </a></p>

## StringTools
A collection of string utilities

  - [**StringTools**](#stringtools)
    - [capitalise](#capitalise)
    - [angloise](#angloise)
    - [clean](#stringtools_clean)
    - [repeat](#stringtools_repeat)
    - [makeRegExpSafe](#makeregexpsafe)
    - [replaceAll](#replaceall)
    - [randomId](#randomid)
    - [clx](#clx)
    - [**Case Manipulators**](#case-manipulators)
      - [toCamelCase](#tocamelcase)
      - [toLowerCamelCase](#tolowercamelcase)
      - [toUpperCamelCase](#touppercamelcase)
      - [toCharacterSeparated](#tocharacterseparated)
      - [toSlugCase](#toslugcase)
      - [toLowerSlugCase](#tolowerslugcase)
      - [toUpperSlugCase](#toupperslugcase)
      - [toSnakeCase](#tosnakecase)
      - [toLowerSnakeCase](#tolowersnakecase)
      - [toUpperSnakeCase](#touppersnakecase)
      - [toSpaced](#tospaced)
      - [toLowerSpaced](#tolowerspaced)
      - [toUpperSpaced](#toupperspaced)
      - [toCapitalisedSpaced](#tocapitalisedspaced)
      - [fromSlugCase](#fromslugcase)
      - [fromSnakeCase](#fromsnakecase)
      - [fromSpaced](#fromspaced)
      - [fromCamelCase](#fromcamelcase)
    - [**matchBrackets**](#matchbrackets)
      - [unique](#unique)
      - [depth](#depth)
      - [clean](#stringtools_matchbrackets_clean)
      - [grabDepth](#grabdepth)
      - [grabUnique](#grabunique)
      - [grab](#grab)
      - [getReplaceSymbols](#getreplacesymbols)
      - [BracketReplaceSymbols](#bracketreplacesymbols)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### capitalise

```typescript
StringTools.capitalise(input: string, forceRestToLowerCase: boolean): string
```

Capitalises the first letter of each word in a string

```typescript
StringTools.capitalise('hello world'); // 'Hello World'
```

|  #  | Parameter Name         | Required | Type      | Default |
|:---:|:-----------------------|:---------|:----------|:--------|
| *0* | `input`                | *No*     | `string`  | `''`    |
| *1* | `forceRestToLowerCase` | *No*     | `boolean` | `true`  |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

### angloise

```typescript
StringTools.angloise(input: string): string
```

Remove accents from a string

```typescript
StringTools.angloise('éèêë'); // 'eeee'
```

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `input`        | **Yes**  | `string` |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

### <span id="stringtools_clean">clean</span>

```typescript
StringTools.clean(input: string): string
```

Remove accents and non alphanumerics from a string

```typescript
StringTools.clean('éèêë_--ab0'); // 'eeeeab0'
```

|  #  | Parameter Name | Required | Type     | Default |
|:---:|:---------------|:---------|:---------|:--------|
| *0* | `input`        | *No*     | `string` | `''`    |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

### <span id="stringtools_repeat">repeat</span>

```typescript
StringTools.repeat(maxLength: number, repeated: string): string
```

Repeat the given string n times

```typescript
StringTools.repeat(5, '-') // '-----'
StringTools.repeat(1, '-') // '-'
StringTools.repeat(0, '-') // ''
StringTools.repeat(-1, '-') // ''
```

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `maxLength`    | **Yes**  | `number` |
| *1* | `repeated`     | **Yes**  | `string` |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

### makeRegExpSafe

```typescript
StringTools.makeRegExpSafe(text: string): string
```

Makes a string safe to use in a RegExp

```typescript
const textWithSpecChars = '$^*+?.()|{}[]\\';
const longText = `A long line with ${textWithSpecChars} in it`; // 'A long line with $^*+?.()|{}[]\ in it'

const safeText = makeRegExpSafe(textWithSpecChars); // '\$\^\*\+\?\.\(\)\|\{\}\[\]\\'
const regex = new RegExp(safeText);
longText.replace(regex, 'foobar'); // 'A long line with foobar in it'

longText.replace(new RegExp(makeRegExpSafe(textWithSpecChars)), 'foobar'); // 'A long line with foobar in it'
```

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `text`         | **Yes**  | `string` |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

### replaceAll

```typescript
StringTools.replaceAll(text: string, searchValue: string | RegExp, replacer: string | ((substring: string, ...args: any[]) => string)): string
```

'Polyfill' replacement for String.prototype.replaceAll, but uses String.prototype.replace (better backwards compatibility)

Accepts a string or RegExp as the searchValue, and a string or function as the replacer.

```typescript
const input = 'the quick brown fox jumps over the lazy dog';

StringTools.replaceAll(input, /A|E|I|O|U/i, (match) => match.toUpperCase()) // 'thE qUIck brOwn fOx jUmps OvEr thE lAzy dOg'
StringTools.replaceAll(input, /A|E|I|O|U/i, '#') // 'th# q##ck br#wn f#x j#mps #v#r th# l#zy d#g'
StringTools.replaceAll(input, 'o', (match) => match.toUpperCase()) // 'the quick brOwn fOx jumps Over the lazy dOg'
StringTools.replaceAll(input, 'o', '#') // 'the quick br#wn f#x jumps #ver the lazy d#g'
```

|  #  | Parameter Name | Required | Type                                                        |
|:---:|:---------------|:---------|:------------------------------------------------------------|
| *0* | `text`         | **Yes**  | `string`                                                    |
| *1* | `searchValue`  | **Yes**  | `string \| RegExp`                                          |
| *2* | `replacer`     | **Yes**  | `string \| ((substring: string, ...args: any[]) => string)` |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

### randomId

```typescript
StringTools.randomId(prefix: string, suffix: string): string
```

Generate a random ID.

Provides a random string of 10 alphanumeric characters, with the option to prefix and/or suffix the string.

> __Note:__ This is a very simple random ID generator, and is not suitable for use in security contexts, and does not guarantee uniqueness.

```typescript
StringTools.randomId(); // 'du9876optw'
StringTools.randomId(); // '7xf8kewrkf'
StringTools.randomId(); // 'bums15yb9n'
StringTools.randomId(); // '8tcl55y4u1'
StringTools.randomId(); // '41pxan1bog'
StringTools.randomId(); // '122pa9czh4'
StringTools.randomId(); // 'iu7xappxtz'

StringTools.randomId('foo-'); // 'foo-xpynpfiz06'
StringTools.randomId('', '-bar'); // 'dpyq3i2uwq-bar'
StringTools.randomId('foo-', '-bar'); // 'foo-wapluosnf6-bar'
```

|  #  | Parameter Name | Required | Type     | Default |
|:---:|:---------------|:---------|:---------|:--------|
| *0* | `prefix`       | *No*     | `string` | `''`    |
| *1* | `suffix`       | *No*     | `string` | `''`    |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

### clx

```typescript
clx(...args: ClxType[]): string
StringTools.clx(...args: ClxType[]): string
```

Composes a className from a list of strings, conditional objects and arrays.

Accepts the different ways of supplying classes in AngularJS (ng-class) and returns a single string (so suitable for React).

```typescript
clx('hello') // 'hello'
clx('foo', 'bar') // 'foo bar'
clx('foo', conditionA && 'bar') // 'foo'
clx('abc', conditionB && 'def') // 'abc def'
clx({'lorem': conditionA, 'ipsum': conditionB}) // 'ipsum'
```

|  #   | Parameter Name | Required | Type        |
|:----:|:---------------|:---------|:------------|
| *0…* | `args`         | *No*     | `ClxType[]` |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

### Case Manipulators

#### toCamelCase

```typescript
StringTools.toCamelCase(input: string | string[], capitaliseFirst: boolean): string
StringTools.fromSlugCase.toCamelCase(input: string | string[], capitaliseFirst: boolean): string
StringTools.fromSnakeCase.toCamelCase(input: string | string[], capitaliseFirst: boolean): string
StringTools.fromSpaced.toCamelCase(input: string | string[], capitaliseFirst: boolean): string
StringTools.fromCamelCase.toCamelCase(input: string | string[], capitaliseFirst: boolean): string
```

Convert a string to camel case (e.g. `thisIsCamelCase`)

|  #  | Parameter Name    | Required | Type                 | Default |
|:---:|:------------------|:---------|:---------------------|:--------|
| *0* | `input`           | **Yes**  | `string \| string[]` |         |
| *1* | `capitaliseFirst` | *No*     | `boolean`            | `false` |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### toLowerCamelCase

```typescript
StringTools.toLowerCamelCase(input: string | string[]): string
StringTools.fromSlugCase.toLowerCamelCase(input: string | string[]): string
StringTools.fromSnakeCase.toLowerCamelCase(input: string | string[]): string
StringTools.fromSpaced.toLowerCamelCase(input: string | string[]): string
StringTools.fromCamelCase.toLowerCamelCase(input: string | string[]): string
```

Convert a string to lower camel case (e.g. `thisIsLowerCamelCase`)

|  #  | Parameter Name | Required | Type                 |
|:---:|:---------------|:---------|:---------------------|
| *0* | `input`        | **Yes**  | `string \| string[]` |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### toUpperCamelCase

```typescript
StringTools.toUpperCamelCase(input: string | string[]): string
StringTools.fromSlugCase.toUpperCamelCase(input: string | string[]): string
StringTools.fromSnakeCase.toUpperCamelCase(input: string | string[]): string
StringTools.fromSpaced.toUpperCamelCase(input: string | string[]): string
StringTools.fromCamelCase.toUpperCamelCase(input: string | string[]): string
```

Convert a string to upper camel case (e.g. `ThisIsLowerCamelCase`)

|  #  | Parameter Name | Required | Type                 |
|:---:|:---------------|:---------|:---------------------|
| *0* | `input`        | **Yes**  | `string \| string[]` |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### toCharacterSeparated

```typescript
StringTools.toCharacterSeparated(input: string | string[], char: string, toUpper: boolean): string
StringTools.fromSlugCase.toCharacterSeparated(input: string | string[], char: string, toUpper: boolean): string
StringTools.fromSnakeCase.toCharacterSeparated(input: string | string[], char: string, toUpper: boolean): string
StringTools.fromSpaced.toCharacterSeparated(input: string | string[], char: string, toUpper: boolean): string
StringTools.fromCamelCase.toCharacterSeparated(input: string | string[], char: string, toUpper: boolean): string
```

Convert a string to text where words are separated by a given character (e.g. `this#is#character#separated`)

|  #  | Parameter Name | Required | Type                 | Default |
|:---:|:---------------|:---------|:---------------------|:--------|
| *0* | `input`        | **Yes**  | `string \| string[]` |         |
| *1* | `char`         | *No*     | `string`             | `','`   |
| *2* | `toUpper`      | *No*     | `boolean`            | `false` |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### toSlugCase

```typescript
StringTools.toSlugCase(input: string | string[], toUpper: boolean): string
StringTools.fromSlugCase.toSlugCase(input: string | string[], toUpper: boolean): string
StringTools.fromSnakeCase.toSlugCase(input: string | string[], toUpper: boolean): string
StringTools.fromSpaced.toSlugCase(input: string | string[], toUpper: boolean): string
StringTools.fromCamelCase.toSlugCase(input: string | string[], toUpper: boolean): string
```

Convert a string to camel case (e.g. `this-is-slug-case`)

|  #  | Parameter Name | Required | Type                 | Default |
|:---:|:---------------|:---------|:---------------------|:--------|
| *0* | `input`        | **Yes**  | `string \| string[]` |         |
| *1* | `toUpper`      | *No*     | `boolean`            | `false` |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### toLowerSlugCase

```typescript
StringTools.toLowerSlugCase(input: string | string[]): string
StringTools.fromSlugCase.toLowerSlugCase(input: string | string[]): string
StringTools.fromSnakeCase.toLowerSlugCase(input: string | string[]): string
StringTools.fromSpaced.toLowerSlugCase(input: string | string[]): string
StringTools.fromCamelCase.toLowerSlugCase(input: string | string[]): string
```

Convert a string to lower slug case (e.g. `this-is-lower-slug-case`)

|  #  | Parameter Name | Required | Type                 |
|:---:|:---------------|:---------|:---------------------|
| *0* | `input`        | **Yes**  | `string \| string[]` |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### toUpperSlugCase

```typescript
StringTools.toUpperSlugCase(input: string | string[]): string
StringTools.fromSlugCase.toUpperSlugCase(input: string | string[]): string
StringTools.fromSnakeCase.toUpperSlugCase(input: string | string[]): string
StringTools.fromSpaced.toUpperSlugCase(input: string | string[]): string
StringTools.fromCamelCase.toUpperSlugCase(input: string | string[]): string
```

Convert a string to upper camel case (e.g. `THIS-IS-UPPER-SLUG-CASE`)

|  #  | Parameter Name | Required | Type                 |
|:---:|:---------------|:---------|:---------------------|
| *0* | `input`        | **Yes**  | `string \| string[]` |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### toSnakeCase

```typescript
StringTools.toSnakeCase(input: string | string[], toUpper: boolean): string
StringTools.fromSlugCase.toSnakeCase(input: string | string[], toUpper: boolean): string
StringTools.fromSnakeCase.toSnakeCase(input: string | string[], toUpper: boolean): string
StringTools.fromSpaced.toSnakeCase(input: string | string[], toUpper: boolean): string
StringTools.fromCamelCase.toSnakeCase(input: string | string[], toUpper: boolean): string
```

Convert a string to snake case (e.g. `this_is_snake_case`)

|  #  | Parameter Name | Required | Type                 | Default |
|:---:|:---------------|:---------|:---------------------|:--------|
| *0* | `input`        | **Yes**  | `string \| string[]` |         |
| *1* | `toUpper`      | *No*     | `boolean`            | `false` |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### toLowerSnakeCase

```typescript
StringTools.toLowerSnakeCase(input: string | string[]): string
StringTools.fromSlugCase.toLowerSnakeCase(input: string | string[]): string
StringTools.fromSnakeCase.toLowerSnakeCase(input: string | string[]): string
StringTools.fromSpaced.toLowerSnakeCase(input: string | string[]): string
StringTools.fromCamelCase.toLowerSnakeCase(input: string | string[]): string
```

Convert a string to lower snake case (e.g. `this_is_lower_snake_case`)

|  #  | Parameter Name | Required | Type                 |
|:---:|:---------------|:---------|:---------------------|
| *0* | `input`        | **Yes**  | `string \| string[]` |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### toUpperSnakeCase

```typescript
StringTools.toUpperSnakeCase(input: string | string[]): string
StringTools.fromSlugCase.toUpperSnakeCase(input: string | string[]): string
StringTools.fromSnakeCase.toUpperSnakeCase(input: string | string[]): string
StringTools.fromSpaced.toUpperSnakeCase(input: string | string[]): string
StringTools.fromCamelCase.toUpperSnakeCase(input: string | string[]): string
```

Convert a string to upper snake case (e.g. `THIS_IS_UPPER_SNAKE_CASE`)

|  #  | Parameter Name | Required | Type                 |
|:---:|:---------------|:---------|:---------------------|
| *0* | `input`        | **Yes**  | `string \| string[]` |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### toSpaced

```typescript
StringTools.toSpaced(input: string | string[], toUpper: boolean): string
StringTools.fromSlugCase.toSpaced(input: string | string[], toUpper: boolean): string
StringTools.fromSnakeCase.toSpaced(input: string | string[], toUpper: boolean): string
StringTools.fromSpaced.toSpaced(input: string | string[], toUpper: boolean): string
StringTools.fromCamelCase.toSpaced(input: string | string[], toUpper: boolean): string
```

Convert a string to spaced case (e.g. `this is spaced case`)

|  #  | Parameter Name | Required | Type                 | Default |
|:---:|:---------------|:---------|:---------------------|:--------|
| *0* | `input`        | **Yes**  | `string \| string[]` |         |
| *1* | `toUpper`      | *No*     | `boolean`            | `false` |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### toLowerSpaced

```typescript
StringTools.toLowerSpaced(input: string | string[]): string
StringTools.fromSlugCase.toLowerSpaced(input: string | string[]): string
StringTools.fromSnakeCase.toLowerSpaced(input: string | string[]): string
StringTools.fromSpaced.toLowerSpaced(input: string | string[]): string
StringTools.fromCamelCase.toLowerSpaced(input: string | string[]): string
```

Convert a string to lower spaced case (e.g. `this is lower spaced case`)

|  #  | Parameter Name | Required | Type                 |
|:---:|:---------------|:---------|:---------------------|
| *0* | `input`        | **Yes**  | `string \| string[]` |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### toUpperSpaced

```typescript
StringTools.toUpperSpaced(input: string | string[]): string
StringTools.fromSlugCase.toUpperSpaced(input: string | string[]): string
StringTools.fromSnakeCase.toUpperSpaced(input: string | string[]): string
StringTools.fromSpaced.toUpperSpaced(input: string | string[]): string
StringTools.fromCamelCase.toUpperSpaced(input: string | string[]): string
```

Convert a string to upper spaced case (e.g. `THIS IS UPPER SPACED CASE`)

|  #  | Parameter Name | Required | Type                 |
|:---:|:---------------|:---------|:---------------------|
| *0* | `input`        | **Yes**  | `string \| string[]` |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### toCapitalisedSpaced

```typescript
StringTools.toCapitalisedSpaced(input: string | string[]): string
StringTools.fromSlugCase.toCapitalisedSpaced(input: string | string[]): string
StringTools.fromSnakeCase.toCapitalisedSpaced(input: string | string[]): string
StringTools.fromSpaced.toCapitalisedSpaced(input: string | string[]): string
StringTools.fromCamelCase.toCapitalisedSpaced(input: string | string[]): string
```

Convert a string to capitalised spaced case (e.g. `This Is Capitalised Spaced Case`)

|  #  | Parameter Name | Required | Type                 |
|:---:|:---------------|:---------|:---------------------|
| *0* | `input`        | **Yes**  | `string \| string[]` |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### fromSlugCase

```typescript
StringTools.fromSlugCase.toLowerCamelCase;
StringTools.fromSlugCase.toUpperCamelCase;
StringTools.fromSlugCase.toCamelCase;
StringTools.fromSlugCase.toLowerSlugCase;
StringTools.fromSlugCase.toUpperSlugCase;
StringTools.fromSlugCase.toSlugCase;
StringTools.fromSlugCase.toLowerSnakeCase;
StringTools.fromSlugCase.toUpperSnakeCase;
StringTools.fromSlugCase.toSnakeCase;
StringTools.fromSlugCase.toLowerSpaced;
StringTools.fromSlugCase.toUpperSpaced;
StringTools.fromSlugCase.toCapitalisedSpaced;
StringTools.fromSlugCase.toSpaced;
StringTools.fromSlugCase.toCharacterSeparated;
```

Has the following methods:

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### fromSnakeCase

```typescript
StringTools.fromSnakeCase.toLowerCamelCase;
StringTools.fromSnakeCase.toUpperCamelCase;
StringTools.fromSnakeCase.toCamelCase;
StringTools.fromSnakeCase.toLowerSlugCase;
StringTools.fromSnakeCase.toUpperSlugCase;
StringTools.fromSnakeCase.toSlugCase;
StringTools.fromSnakeCase.toLowerSnakeCase;
StringTools.fromSnakeCase.toUpperSnakeCase;
StringTools.fromSnakeCase.toSnakeCase;
StringTools.fromSnakeCase.toLowerSpaced;
StringTools.fromSnakeCase.toUpperSpaced;
StringTools.fromSnakeCase.toCapitalisedSpaced;
StringTools.fromSnakeCase.toSpaced;
StringTools.fromSnakeCase.toCharacterSeparated;
```

Has the following methods:

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### fromSpaced

```typescript
StringTools.fromSpaced.toLowerCamelCase;
StringTools.fromSpaced.toUpperCamelCase;
StringTools.fromSpaced.toCamelCase;
StringTools.fromSpaced.toLowerSlugCase;
StringTools.fromSpaced.toUpperSlugCase;
StringTools.fromSpaced.toSlugCase;
StringTools.fromSpaced.toLowerSnakeCase;
StringTools.fromSpaced.toUpperSnakeCase;
StringTools.fromSpaced.toSnakeCase;
StringTools.fromSpaced.toLowerSpaced;
StringTools.fromSpaced.toUpperSpaced;
StringTools.fromSpaced.toCapitalisedSpaced;
StringTools.fromSpaced.toSpaced;
StringTools.fromSpaced.toCharacterSeparated;
```

Has the following methods:

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### fromCamelCase

```typescript
StringTools.fromCamelCase.toLowerCamelCase;
StringTools.fromCamelCase.toUpperCamelCase;
StringTools.fromCamelCase.toCamelCase;
StringTools.fromCamelCase.toLowerSlugCase;
StringTools.fromCamelCase.toUpperSlugCase;
StringTools.fromCamelCase.toSlugCase;
StringTools.fromCamelCase.toLowerSnakeCase;
StringTools.fromCamelCase.toUpperSnakeCase;
StringTools.fromCamelCase.toSnakeCase;
StringTools.fromCamelCase.toLowerSpaced;
StringTools.fromCamelCase.toUpperSpaced;
StringTools.fromCamelCase.toCapitalisedSpaced;
StringTools.fromCamelCase.toSpaced;
StringTools.fromCamelCase.toCharacterSeparated;
```

Has the following methods:

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

### matchBrackets
Tools for matching corresponding brackets in a string

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### unique

```typescript
StringTools.matchBrackets.unique(input: string, replaceSymbols: Partial<BracketReplaceSymbols>): string
```

Replace brackets with symbols and with a unique ID for each bracket pair of each type

```typescript
const example = '{name: "Jane", info: { age: 31, interests: ["Tennis", "Board Games"] }}';
const uniqued = matchBrackets.unique(example);
uniqued; // '❴0✧name: "Jane", info: ❴1✧ age: 31, interests: ❲0✧"Tennis", "Board Games"❳0✧ ❵1✧❵0✧'
```

|  #  | Parameter Name   | Required | Type                             | Default |
|:---:|:-----------------|:---------|:---------------------------------|:--------|
| *0* | `input`          | **Yes**  | `string`                         |         |
| *1* | `replaceSymbols` | *No*     | `Partial<BracketReplaceSymbols>` | `{}`    |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### depth

```typescript
StringTools.matchBrackets.depth(input: string, replaceSymbols: Partial<BracketReplaceSymbols>): string
```

Replace brackets with symbols and with a numbers for how deep each bracket pair is for that bracket type

```typescript
const example = '{name: "Jane", info: { age: 31, interests: ["Tennis", "Board Games"] }}';
const depthed = matchBrackets.depth(example);
depthed; // '❴0✧name: "Jane", info: ❴1✧ age: 31, interests: ❲0✧"Tennis", "Board Games"❳0✧ ❵1✧❵0✧'
```

|  #  | Parameter Name   | Required | Type                             | Default |
|:---:|:-----------------|:---------|:---------------------------------|:--------|
| *0* | `input`          | **Yes**  | `string`                         |         |
| *1* | `replaceSymbols` | *No*     | `Partial<BracketReplaceSymbols>` | `{}`    |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### <span id="stringtools_matchbrackets_clean">clean</span>

```typescript
StringTools.matchBrackets.clean(input: string, replaceSymbols: Partial<BracketReplaceSymbols>): string
```

Return a string that's been matched with `unique` or `depth` and replace the symbols with the original brackets. Also works with substrings of such strings.

```typescript
const example = '{name: "Jane", info: { age: 31, interests: ["Tennis", "Board Games"] }}';
const uniqued = matchBrackets.unique(example);
uniqued; // '❴0✧name: "Jane", info: ❴1✧ age: 31, interests: ❲0✧"Tennis", "Board Games"❳0✧ ❵1✧❵0✧'

const cleaned = matchBrackets.clean(uniqued);
cleaned; // '{name: "Jane", info: { age: 31, interests: ["Tennis", "Board Games"] }}'
```

|  #  | Parameter Name   | Required | Type                             | Default |
|:---:|:-----------------|:---------|:---------------------------------|:--------|
| *0* | `input`          | **Yes**  | `string`                         |         |
| *1* | `replaceSymbols` | *No*     | `Partial<BracketReplaceSymbols>` | `{}`    |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### grabDepth

```typescript
StringTools.matchBrackets.grabDepth(input: string, bracketType: '()' | '[]' | '{}' | '<>' | 'round' | 'square' | 'curly' | 'angle', depthID: number, replaceSymbols: Partial<BracketReplaceSymbols>): string[]
```

Obtain all the bracketed substrings of the given bracket type from a string at a given depth.

```typescript
const example = `[
  [
    [1, 2, 3],
    [4, 5, 6]
  ],
  [
    [7, 8, 9]
  ]
]`;
const grabbed = matchBrackets.grabDepth(example, 'square', 2);
grabbed; // [ '[1, 2, 3]', '[4, 5, 6]', '[7, 8, 9]' ]
```

|  #  | Parameter Name   | Required | Type                                                                        | Default   |
|:---:|:-----------------|:---------|:----------------------------------------------------------------------------|:----------|
| *0* | `input`          | **Yes**  | `string`                                                                    |           |
| *1* | `bracketType`    | *No*     | `'()' \| '[]' \| '{}' \| '<>' \| 'round' \| 'square' \| 'curly' \| 'angle'` | `'round'` |
| *2* | `depthID`        | *No*     | `number`                                                                    | `0`       |
| *3* | `replaceSymbols` | *No*     | `Partial<BracketReplaceSymbols>`                                            | `{}`      |

| Return Type |
|-------------|
| `string[]`  |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### grabUnique

```typescript
StringTools.matchBrackets.grabUnique(input: string, bracketType: '()' | '[]' | '{}' | '<>' | 'round' | 'square' | 'curly' | 'angle', uniqueID: number, replaceSymbols: Partial<BracketReplaceSymbols>): string
```

Obtain all the bracketed substring of the given bracket type from a string with the given unique ID.
e.g. if uniqueID is 3, it will return the bracketed substring for the 4th instance of the opening bracket (see StringTools.matchBrackets.unique)

```typescript
const example = `[
  [
    [1, 2, 3],
    [4, 5, 6]
  ],
  [
    [7, 8, 9]
  ]
]`;
const grabbed = matchBrackets.grabUnique(example, 'square', 3);
grabbed; // '[4, 5, 6]'
```

|  #  | Parameter Name   | Required | Type                                                                        | Default   |
|:---:|:-----------------|:---------|:----------------------------------------------------------------------------|:----------|
| *0* | `input`          | **Yes**  | `string`                                                                    |           |
| *1* | `bracketType`    | *No*     | `'()' \| '[]' \| '{}' \| '<>' \| 'round' \| 'square' \| 'curly' \| 'angle'` | `'round'` |
| *2* | `uniqueID`       | *No*     | `number`                                                                    | `0`       |
| *3* | `replaceSymbols` | *No*     | `Partial<BracketReplaceSymbols>`                                            | `{}`      |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### grab

```typescript
StringTools.matchBrackets.grab(input: string, bracketType: '()' | '[]' | '{}' | '<>' | 'round' | 'square' | 'curly' | 'angle', replaceSymbols: Partial<BracketReplaceSymbols>): string[]
```

Grab all the bracketed substrings from a string of the given bracket type.

```typescript
const example = `[[[1, 2, 3], [4, 5, 6]], [[7, 8, 9]]]`;
matchBrackets.grab(example, 'square');
// [
//   '[[[1, 2, 3], [4, 5, 6]], [[7, 8, 9]]]',
//   '[[1, 2, 3], [4, 5, 6]]',
//   '[1, 2, 3]',
//   '[4, 5, 6]',
//   '[[7, 8, 9]]',
//   '[7, 8, 9]'
// ]
```

|  #  | Parameter Name   | Required | Type                                                                        | Default   |
|:---:|:-----------------|:---------|:----------------------------------------------------------------------------|:----------|
| *0* | `input`          | **Yes**  | `string`                                                                    |           |
| *1* | `bracketType`    | *No*     | `'()' \| '[]' \| '{}' \| '<>' \| 'round' \| 'square' \| 'curly' \| 'angle'` | `'round'` |
| *2* | `replaceSymbols` | *No*     | `Partial<BracketReplaceSymbols>`                                            | `{}`      |

| Return Type |
|-------------|
| `string[]`  |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### getReplaceSymbols

```typescript
StringTools.matchBrackets.getReplaceSymbols(replaceSymbols: Partial<BracketReplaceSymbols>): BracketReplaceSymbols
```

Get a full set of replace symbols

```typescript
matchBrackets.getReplaceSymbols();
// {
//   END: '✧',
//   '(': '❪',
//   ')': '❫',
//   '[': '❲',
//   ']': '❳',
//   '{': '❴',
//   '}': '❵',
//   '<': '❰',
//   '>': '❱'
// }

matchBrackets.getReplaceSymbols({
  END: '▣',
  '{': 'START_CURLY',
  '}': 'END_CURLY'
})
// {
//   END: '▣',
//   '(': '❪',
//   ')': '❫',
//   '[': '❲',
//   ']': '❳',
//   '{': 'START_CURLY',
//   '}': 'END_CURLY',
//   '<': '❰',
//   '>': '❱'
// }
```

|  #  | Parameter Name   | Required | Type                             | Default |
|:---:|:-----------------|:---------|:---------------------------------|:--------|
| *0* | `replaceSymbols` | *No*     | `Partial<BracketReplaceSymbols>` | `{}`    |

| Return Type             |
|-------------------------|
| `BracketReplaceSymbols` |

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

#### BracketReplaceSymbols

```typescript
StringTools.matchBrackets.BracketReplaceSymbols;
```

Type for controlling the symbols used to replace brackets

```typescript
{
  END: string;
  '(': string;
  ')': string;
  '[': string;
  ']': string;
  '{': string;
  '}': string;
  '<': string;
  '>': string;
}
```

<p style="text-align: right" align="right"><a href="#stringtools"> [↑ Back to <b>StringTools</b> ↑] </a></p>

## MathsTools
A collection of mathematical functions.

> Note: The field is 'Mathematics', and so it is 'MathsTools' not ~'MathTools'~

  - [**MathsTools**](#mathstools)
    - [fixFloat](#fixfloat)
    - [addAll](#addall)
    - [**round**](#round)
      - [floorTo](#floorto)
      - [roundTo](#roundto)
      - [ceilTo](#ceilto)
    - [lerp](#lerp)
    - [lerpArray](#lerparray)
    - [lerpObj](#lerpobj)
    - [clamp](#clamp)
    - [getOrdinal](#getordinal)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### fixFloat

```typescript
ff(num: number): number
MathsTools.ff(num: number): number
MathsTools.fixFloat(num: number): number
```

Fixes floating point errors that may occur when adding/subtracting/multiplying/dividing real/float numbers

Can also be used to round numbers to a given precision

> Note: 'fixFloat' is not a great name, but it's what I've always called it, so I'm sticking with it. 'ff' is a shorthand alias.

```typescript
0.1 + 0.2 // 0.30000000000000004
MathsTools.fixFloat(0.1 + 0.2) // 0.3
```

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `num`          | **Yes**  | `number` |

| Return Type |
|-------------|
| `number`    |

<p style="text-align: right" align="right"><a href="#mathstools"> [↑ Back to <b>MathsTools</b> ↑] </a></p>

### addAll

```typescript
MathsTools.addAll(...nums: number[]): number
```

Adds all numbers together. Each argument is a number (use spread operator to pass in an array) similar to Math.min/Math.max

```typescript
MathsTools.addAll(1, 2, 3, 4, 5); // 15
```

|  #   | Parameter Name | Required | Type       |
|:----:|:---------------|:---------|:-----------|
| *0…* | `nums`         | *No*     | `number[]` |

| Return Type |
|-------------|
| `number`    |

<p style="text-align: right" align="right"><a href="#mathstools"> [↑ Back to <b>MathsTools</b> ↑] </a></p>

### round

#### floorTo

```typescript
MathsTools.floorTo(to: number, value: number): number
MathsTools.round.floorTo(to: number, value: number): number
```

Floors a number down to the nearest multiple of the given number.

```typescript
MathsTools.round.floorTo(10, 102); // 100
MathsTools.round.floorTo(5, 53); // 50
MathsTools.round.floorTo(0.1, 0.25); // 0.2
```

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `to`           | **Yes**  | `number` |
| *1* | `value`        | **Yes**  | `number` |

| Return Type |
|-------------|
| `number`    |

<p style="text-align: right" align="right"><a href="#mathstools"> [↑ Back to <b>MathsTools</b> ↑] </a></p>

#### roundTo

```typescript
MathsTools.round.to(to: number, value: number): number
MathsTools.roundTo(to: number, value: number): number
MathsTools.round.roundTo(to: number, value: number): number
```

Floors a number down to the nearest multiple of the given number.

```typescript
MathsTools.round.to(10, 102); // 100
MathsTools.round.to(5, 53); // 55
MathsTools.round.to(0.1, 0.25); // 0.3
```

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `to`           | **Yes**  | `number` |
| *1* | `value`        | **Yes**  | `number` |

| Return Type |
|-------------|
| `number`    |

<p style="text-align: right" align="right"><a href="#mathstools"> [↑ Back to <b>MathsTools</b> ↑] </a></p>

#### ceilTo

```typescript
MathsTools.ceilTo(to: number, value: number): number
MathsTools.round.ceilTo(to: number, value: number): number
```

Floors a number down to the nearest multiple of the given number.

```typescript
MathsTools.round.ceilTo(10, 102); // 110
MathsTools.round.ceilTo(5, 53); // 55
MathsTools.round.ceilTo(0.1, 0.25); // 0.3
```

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `to`           | **Yes**  | `number` |
| *1* | `value`        | **Yes**  | `number` |

| Return Type |
|-------------|
| `number`    |

<p style="text-align: right" align="right"><a href="#mathstools"> [↑ Back to <b>MathsTools</b> ↑] </a></p>

### lerp

```typescript
MathsTools.lerp(progress: number, fromVal: number, toVal: number): number
```

Linearly interpolates between two values.

```typescript
MathsTools.lerp(0.5, 0, 10); // 5
```

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `progress`     | **Yes**  | `number` |
| *1* | `fromVal`      | **Yes**  | `number` |
| *2* | `toVal`        | **Yes**  | `number` |

| Return Type |
|-------------|
| `number`    |

<p style="text-align: right" align="right"><a href="#mathstools"> [↑ Back to <b>MathsTools</b> ↑] </a></p>

### lerpArray

```typescript
MathsTools.lerpArray(progress: number, fromArr: number[], toArr: number[]): number[]
```

Linearly interpolates between the values of 2 arrays.

```typescript
MathsTools.lerpArray(0.5, [0, 0, 0], [10, 100, 1000]) // [5, 50, 500]
```

|  #  | Parameter Name | Required | Type       |
|:---:|:---------------|:---------|:-----------|
| *0* | `progress`     | **Yes**  | `number`   |
| *1* | `fromArr`      | **Yes**  | `number[]` |
| *2* | `toArr`        | **Yes**  | `number[]` |

| Return Type |
|-------------|
| `number[]`  |

<p style="text-align: right" align="right"><a href="#mathstools"> [↑ Back to <b>MathsTools</b> ↑] </a></p>

### lerpObj

```typescript
MathsTools.lerpObj(progress: number, fromObj: T, toObj: T): T
```

Linearly interpolates between the values of 2 arrays.

```typescript
MathsTools.lerpObj(0.5, {'ARS': 0, 'CHE': 0, 'FUL': 0}, {'ARS': 100, 'CHE': 10, 'FUL': 20}) // {'ARS': 50, 'CHE': 5, 'FUL': 10}
```

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `progress`     | **Yes**  | `number` |
| *1* | `fromObj`      | **Yes**  | `T`      |
| *2* | `toObj`        | **Yes**  | `T`      |

| Return Type |
|-------------|
| `T`         |

<p style="text-align: right" align="right"><a href="#mathstools"> [↑ Back to <b>MathsTools</b> ↑] </a></p>

### clamp

```typescript
MathsTools.clamp(value: number, min: number, max: number): number
```

Clamps a value between a min and max.

```typescript
MathsTools.clamp(5, 0, 10); // 5
MathsTools.clamp(-5, 0, 10); // 0
```

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `value`        | **Yes**  | `number` |
| *1* | `min`          | **Yes**  | `number` |
| *2* | `max`          | **Yes**  | `number` |

| Return Type |
|-------------|
| `number`    |

<p style="text-align: right" align="right"><a href="#mathstools"> [↑ Back to <b>MathsTools</b> ↑] </a></p>

### getOrdinal

```typescript
MathsTools.getOrdinal(num: number): "th" | "st" | "nd" | "rd"
```

Gets the ordinal suffix for a number.

Note: all numbers are treated as positive.
Note: all decimals are 'th' (e.g. 1.2 is '1.2th') as they are tenth, hundredth, thousandth, etc.

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

|  #  | Parameter Name | Required | Type     | Default |
|:---:|:---------------|:---------|:---------|:--------|
| *0* | `num`          | *No*     | `number` | `0`     |

| Return Type                    |
|--------------------------------|
| `"th" \| "st" \| "nd" \| "rd"` |

<p style="text-align: right" align="right"><a href="#mathstools"> [↑ Back to <b>MathsTools</b> ↑] </a></p>

## PromiseTools
A collection of promise utilities

  - [**PromiseTools**](#promisetools)
    - [getDeferred](#getdeferred)
    - [all](#all)
    - [allLimit](#alllimit)
    - [each](#each)
    - [eachLimit](#eachlimit)
    - [map](#promisetools_map)
    - [mapLimit](#maplimit)
    - [allObj](#allobj)
    - [allLimitObj](#alllimitobj)
    - [PromiseFunc<T>](#promisefunct)
    - [PromiseItem<T>](#promiseitemt)
    - [DeferredPromise](#deferredpromise)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### getDeferred

```typescript
getDeferred(): DeferredPromise<T>
PromiseTools.getDeferred(): DeferredPromise<T>
```

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

| Return Type          |
|----------------------|
| `DeferredPromise<T>` |

<p style="text-align: right" align="right"><a href="#promisetools"> [↑ Back to <b>PromiseTools</b> ↑] </a></p>

### all

```typescript
all(items: PromiseTools.PromiseItem<T>[]): Promise<T[]>
PromiseTools.all(items: PromiseTools.PromiseItem<T>[]): Promise<T[]>
```

Similar to Promise.all, but accepts values, functions, and promises.

|  #  | Parameter Name | Required | Type                            |
|:---:|:---------------|:---------|:--------------------------------|
| *0* | `items`        | **Yes**  | `PromiseTools.PromiseItem<T>[]` |

| Return Type    |
|----------------|
| `Promise<T[]>` |

<p style="text-align: right" align="right"><a href="#promisetools"> [↑ Back to <b>PromiseTools</b> ↑] </a></p>

### allLimit

```typescript
allLimit(limit: number, items: PromiseTools.PromiseItem<T>[], noThrow: boolean): Promise<T[]>
PromiseTools.allLimit(limit: number, items: PromiseTools.PromiseItem<T>[], noThrow: boolean): Promise<T[]>
```

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

|  #  | Parameter Name | Required | Type                            | Default |
|:---:|:---------------|:---------|:--------------------------------|:--------|
| *0* | `limit`        | **Yes**  | `number`                        |         |
| *1* | `items`        | **Yes**  | `PromiseTools.PromiseItem<T>[]` |         |
| *2* | `noThrow`      | *No*     | `boolean`                       | `false` |

| Return Type    |
|----------------|
| `Promise<T[]>` |

<p style="text-align: right" align="right"><a href="#promisetools"> [↑ Back to <b>PromiseTools</b> ↑] </a></p>

### each

```typescript
each(items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<any>): Promise<void>
PromiseTools.each(items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<any>): Promise<void>
```

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

|  #  | Parameter Name | Required | Type                                                     |
|:---:|:---------------|:---------|:---------------------------------------------------------|
| *0* | `items`        | **Yes**  | `Ti[]`                                                   |
| *1* | `func`         | **Yes**  | `(item: Ti, index: number, array: Ti[]) => Promise<any>` |

| Return Type     |
|-----------------|
| `Promise<void>` |

<p style="text-align: right" align="right"><a href="#promisetools"> [↑ Back to <b>PromiseTools</b> ↑] </a></p>

### eachLimit

```typescript
eachLimit(limit: number, items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<any>): Promise<void>
PromiseTools.eachLimit(limit: number, items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<any>): Promise<void>
```

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

|  #  | Parameter Name | Required | Type                                                     |
|:---:|:---------------|:---------|:---------------------------------------------------------|
| *0* | `limit`        | **Yes**  | `number`                                                 |
| *1* | `items`        | **Yes**  | `Ti[]`                                                   |
| *2* | `func`         | **Yes**  | `(item: Ti, index: number, array: Ti[]) => Promise<any>` |

| Return Type     |
|-----------------|
| `Promise<void>` |

<p style="text-align: right" align="right"><a href="#promisetools"> [↑ Back to <b>PromiseTools</b> ↑] </a></p>

### <span id="promisetools_map">map</span>

```typescript
map(items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<To>): Promise<To[]>
PromiseTools.map(items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<To>): Promise<To[]>
```

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

|  #  | Parameter Name | Required | Type                                                    |
|:---:|:---------------|:---------|:--------------------------------------------------------|
| *0* | `items`        | **Yes**  | `Ti[]`                                                  |
| *1* | `func`         | **Yes**  | `(item: Ti, index: number, array: Ti[]) => Promise<To>` |

| Return Type     |
|-----------------|
| `Promise<To[]>` |

<p style="text-align: right" align="right"><a href="#promisetools"> [↑ Back to <b>PromiseTools</b> ↑] </a></p>

### mapLimit

```typescript
mapLimit(limit: number, items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<To>): Promise<To[]>
PromiseTools.mapLimit(limit: number, items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<To>): Promise<To[]>
```

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

|  #  | Parameter Name | Required | Type                                                    |
|:---:|:---------------|:---------|:--------------------------------------------------------|
| *0* | `limit`        | **Yes**  | `number`                                                |
| *1* | `items`        | **Yes**  | `Ti[]`                                                  |
| *2* | `func`         | **Yes**  | `(item: Ti, index: number, array: Ti[]) => Promise<To>` |

| Return Type     |
|-----------------|
| `Promise<To[]>` |

<p style="text-align: right" align="right"><a href="#promisetools"> [↑ Back to <b>PromiseTools</b> ↑] </a></p>

### allObj

```typescript
allObj(input: T): Promise<UnWrapPromiseObject<T>>
PromiseTools.allObj(input: T): Promise<UnWrapPromiseObject<T>>
```

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

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `input`        | **Yes**  | `T`  |

| Return Type                       |
|-----------------------------------|
| `Promise<UnWrapPromiseObject<T>>` |

<p style="text-align: right" align="right"><a href="#promisetools"> [↑ Back to <b>PromiseTools</b> ↑] </a></p>

### allLimitObj

```typescript
allLimitObj(limit: number, input: T, noThrow: boolean): Promise<UnWrapPromiseObject<T>>
PromiseTools.allLimitObj(limit: number, input: T, noThrow: boolean): Promise<UnWrapPromiseObject<T>>
```

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

|  #  | Parameter Name | Required | Type      | Default |
|:---:|:---------------|:---------|:----------|:--------|
| *0* | `limit`        | **Yes**  | `number`  |         |
| *1* | `input`        | **Yes**  | `T`       |         |
| *2* | `noThrow`      | *No*     | `boolean` | `false` |

| Return Type                       |
|-----------------------------------|
| `Promise<UnWrapPromiseObject<T>>` |

<p style="text-align: right" align="right"><a href="#promisetools"> [↑ Back to <b>PromiseTools</b> ↑] </a></p>

### PromiseFunc<T>

```typescript
PromiseFunc<T>;
```

A function that returns a promise

<p style="text-align: right" align="right"><a href="#promisetools"> [↑ Back to <b>PromiseTools</b> ↑] </a></p>

### PromiseItem<T>

```typescript
PromiseItem<T>;
```

A promise, a function that returns a promise (see PromiseFunc<T>), or a value

Accepted by `PromiseTools.all`, `PromiseTools.allLimit`, `PromiseTools.allObj`, and `PromiseTools.allLimitObj` in place of promises

<p style="text-align: right" align="right"><a href="#promisetools"> [↑ Back to <b>PromiseTools</b> ↑] </a></p>

### DeferredPromise

```typescript
DeferredPromise;
PromiseTools.DeferredPromise;
```

A deferred promise

<p style="text-align: right" align="right"><a href="#promisetools"> [↑ Back to <b>PromiseTools</b> ↑] </a></p>

## ColourTools
A collection of functions for working with colours.

  - [**ColourTools**](#colourtools)
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

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### ColourValues

```typescript
ColourTools.ColourValues;
```

A type with 3 numbers:
- red [0-255]
- green [0-255]
- blue [0-255]

<p style="text-align: right" align="right"><a href="#colourtools"> [↑ Back to <b>ColourTools</b> ↑] </a></p>

### HSLValues

```typescript
ColourTools.HSLValues;
```

A type with 3 numbers:
- hue [0-360]
- saturation [0-100]
- lightness [0-100]

<p style="text-align: right" align="right"><a href="#colourtools"> [↑ Back to <b>ColourTools</b> ↑] </a></p>

### namedColours

```typescript
ColourTools.namedColours;
```

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

<p style="text-align: right" align="right"><a href="#colourtools"> [↑ Back to <b>ColourTools</b> ↑] </a></p>

### parse

```typescript
ColourTools.parse(input: string): ColourValues
```

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

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `input`        | **Yes**  | `string` |

| Return Type    |
|----------------|
| `ColourValues` |

<p style="text-align: right" align="right"><a href="#colourtools"> [↑ Back to <b>ColourTools</b> ↑] </a></p>

### toHex

```typescript
ColourTools.toHex(colour: ColourValues): string
```

Convert a colour object (RGB array) to a hex string

```typescript
ColourTools.toHex([255, 0, 0]) // '#FF0000'
```

|  #  | Parameter Name | Required | Type           |
|:---:|:---------------|:---------|:---------------|
| *0* | `colour`       | **Yes**  | `ColourValues` |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#colourtools"> [↑ Back to <b>ColourTools</b> ↑] </a></p>

### getLuminance

```typescript
ColourTools.getLuminance(rgb: ColourValues): number
```

IMPORTANT: This is not the same as the HSL lightness value.

Get the luminance value of a given colour.

Between 0 and 255. Calculated using the formula:
 (RED × 0.299) + (GREEN × 0.587) + (BLUE × 0.114)

Is the Y (Luma) component of the YUV444 color model.

```typescript
ColourTools.getLuminance([255, 0, 0]); // 76.245
ColourTools.getLuminance([0, 255, 0]); // 149.685
ColourTools.getLuminance([0, 0, 255]); // 29.07
```

|  #  | Parameter Name | Required | Type           |
|:---:|:---------------|:---------|:---------------|
| *0* | `rgb`          | **Yes**  | `ColourValues` |

| Return Type |
|-------------|
| `number`    |

<p style="text-align: right" align="right"><a href="#colourtools"> [↑ Back to <b>ColourTools</b> ↑] </a></p>

### toYUV

```typescript
ColourTools.toYUV(rgb: ColourValues): ColourValues
```

Convert a colour object (RGB array) to a YUV array.

See https://en.wikipedia.org/wiki/YUV#Y%E2%80%B2UV444_to_RGB888_conversion

```typescript
ColourTools.toYUV([255, 0, 0]); // [76.245, 112.439, -38.094]
```

|  #  | Parameter Name | Required | Type           |
|:---:|:---------------|:---------|:---------------|
| *0* | `rgb`          | **Yes**  | `ColourValues` |

| Return Type    |
|----------------|
| `ColourValues` |

<p style="text-align: right" align="right"><a href="#colourtools"> [↑ Back to <b>ColourTools</b> ↑] </a></p>

### toHSL

```typescript
ColourTools.toHSL(colour: ColourValues, round: boolean): HSLValues
```

Convert a RGB array to a HSL array.

Adapted from https://www.30secondsofcode.org/js/s/rgb-to-hsl

```typescript
ColourTools.toHSL([255, 0, 0]); // [0, 100, 50]
ColourTools.toHSL([0, 255, 0]); // [120, 100, 50]
```

|  #  | Parameter Name | Required | Type           | Default |
|:---:|:---------------|:---------|:---------------|:--------|
| *0* | `colour`       | **Yes**  | `ColourValues` |         |
| *1* | `round`        | *No*     | `boolean`      | `true`  |

| Return Type |
|-------------|
| `HSLValues` |

<p style="text-align: right" align="right"><a href="#colourtools"> [↑ Back to <b>ColourTools</b> ↑] </a></p>

### fromHSL

```typescript
ColourTools.fromHSL(hsl: HSLValues, round: boolean): ColourValues
```

Convert a HSL array to a RGB array.

Adapted from https://www.30secondsofcode.org/js/s/hsl-to-rgb

```typescript
ColourTools.fromHSL([0, 100, 50]); // [255, 0, 0]
ColourTools.fromHSL([120, 100, 50]); // [0, 255, 0]
```

|  #  | Parameter Name | Required | Type        | Default |
|:---:|:---------------|:---------|:------------|:--------|
| *0* | `hsl`          | **Yes**  | `HSLValues` |         |
| *1* | `round`        | *No*     | `boolean`   | `true`  |

| Return Type    |
|----------------|
| `ColourValues` |

<p style="text-align: right" align="right"><a href="#colourtools"> [↑ Back to <b>ColourTools</b> ↑] </a></p>

### invertColour

```typescript
ColourTools.invertColour(rgb: ColourValues): ColourValues
```

Get the opposite colour of a given colour.

```typescript
ColourTools.invertColour([255, 0, 0]); // [0, 255, 255]
ColourTools.invertColour([0, 255, 0]); // [ 255, 0, 255 ]
ColourTools.invertColour([0, 0, 255]); // [ 255, 255, 0 ]
```

|  #  | Parameter Name | Required | Type           |
|:---:|:---------------|:---------|:---------------|
| *0* | `rgb`          | **Yes**  | `ColourValues` |

| Return Type    |
|----------------|
| `ColourValues` |

<p style="text-align: right" align="right"><a href="#colourtools"> [↑ Back to <b>ColourTools</b> ↑] </a></p>

### getContrastedColour

```typescript
ColourTools.getContrastedColour(colour: ColourValues): ColourValues
```

Get the colour that contrasts the most with a given colour. (White or black)

Returned colour can be used as a text colour on top of the provided colour

```typescript
ColourTools.getContrastedColour([255, 0, 0]); // [255, 255, 255]
ColourTools.getContrastedColour([255, 255, 0]); // [0, 0, 0]
```

|  #  | Parameter Name | Required | Type           |
|:---:|:---------------|:---------|:---------------|
| *0* | `colour`       | **Yes**  | `ColourValues` |

| Return Type    |
|----------------|
| `ColourValues` |

<p style="text-align: right" align="right"><a href="#colourtools"> [↑ Back to <b>ColourTools</b> ↑] </a></p>

### getLimitedColour

```typescript
ColourTools.getLimitedColour(colour: ColourValues, checkFn: (hsl: HSLValues) => boolean, adjustFn: (hsl: HSLValues) => HSLValues): ColourValues
```

Adjust a colour if a certain condition is met.
Used for lightening/darkening colours that are too light/dark

All values in functions are HSL

```typescript
ColourTools.getLimitedColour([255, 255, 255], ([h,s,l]) => l > 90, ([h,s,l]) => [h, s, 90]); // [ 230, 230, 230 ]
ColourTools.getLimitedColour([128, 128, 128], ([h,s,l]) => l > 90, ([h,s,l]) => [h, s, 90]); // [ 128, 128, 128 ]
```

|  #  | Parameter Name | Required | Type                            |
|:---:|:---------------|:---------|:--------------------------------|
| *0* | `colour`       | **Yes**  | `ColourValues`                  |
| *1* | `checkFn`      | **Yes**  | `(hsl: HSLValues) => boolean`   |
| *2* | `adjustFn`     | **Yes**  | `(hsl: HSLValues) => HSLValues` |

| Return Type    |
|----------------|
| `ColourValues` |

<p style="text-align: right" align="right"><a href="#colourtools"> [↑ Back to <b>ColourTools</b> ↑] </a></p>

## TimeTools
A collection of time-related utility functions.

  - [**TimeTools**](#timetools)
    - [toReadableDuration](#toreadableduration)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### toReadableDuration

```typescript
TimeTools.toReadableDuration(duration: ms, longNames: boolean, maxUnits: number): string
```

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

|  #  | Parameter Name | Required | Type      | Default |
|:---:|:---------------|:---------|:----------|:--------|
| *0* | `duration`     | **Yes**  | `ms`      |         |
| *1* | `longNames`    | *No*     | `boolean` | `false` |
| *2* | `maxUnits`     | *No*     | `number`  | `3`     |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#timetools"> [↑ Back to <b>TimeTools</b> ↑] </a></p>

## ErrorTools
Functions for handling errors.

  - [**ErrorTools**](#errortools)
    - [tryOr](#tryor)
    - [retry](#retry)
    - [retryOr](#retryor)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### tryOr

```typescript
tryOr(orValue: T, func: (...args: A) => Promise<T>, ...args: A[]): Promise<T>
ErrorTools.tryOr(orValue: T, func: (...args: A) => Promise<T>, ...args: A[]): Promise<T>
```

Try to execute a function and return its result if it succeeds, or return the default value if it fails.

```typescript
const result = tryOr('default', () => getSomething());
```

|  #   | Parameter Name | Required | Type                         |
|:----:|:---------------|:---------|:-----------------------------|
| *0*  | `orValue`      | **Yes**  | `T`                          |
| *1*  | `func`         | **Yes**  | `(...args: A) => Promise<T>` |
| *2…* | `args`         | *No*     | `A[]`                        |

| Return Type  |
|--------------|
| `Promise<T>` |

<p style="text-align: right" align="right"><a href="#errortools"> [↑ Back to <b>ErrorTools</b> ↑] </a></p>

### retry

```typescript
retry(maxTries: number, delay: ms, suppress: boolean, run: (attemptNumber) => T): Promise<T>
ErrorTools.retry(maxTries: number, delay: ms, suppress: boolean, run: (attemptNumber) => T): Promise<T>
```

Try to execute a function and return its result if it succeeds, or retry a given number of times until it succeeds.

```typescript
const result = tryOr(5, seconds(1), true, () => getSomething());
```

|  #  | Parameter Name | Required | Type                   | Default                     |
|:---:|:---------------|:---------|:-----------------------|:----------------------------|
| *0* | `maxTries`     | *No*     | `number`               | `10`                        |
| *1* | `delay`        | *No*     | `ms`                   | `0`                         |
| *2* | `suppress`     | *No*     | `boolean`              | `true`                      |
| *3* | `run`          | *No*     | `(attemptNumber) => T` | `fn.result(undefined as T)` |

| Return Type  |
|--------------|
| `Promise<T>` |

<p style="text-align: right" align="right"><a href="#errortools"> [↑ Back to <b>ErrorTools</b> ↑] </a></p>

### retryOr

```typescript
retryOr(orValue: T, maxTries: number, delay: ms, run: () => T | Promise<T>): Promise<T>
ErrorTools.retryOr(orValue: T, maxTries: number, delay: ms, run: () => T | Promise<T>): Promise<T>
```

Combination of retry and tryOr.

Try to execute a function and return its result if it succeeds, or retry a given number of times until it succeeds. Return the default value if it fails too many times

```typescript
const result = retryOr('default', 5, seconds(1), () => getSomething());
```

|  #  | Parameter Name | Required | Type                    | Default              |
|:---:|:---------------|:---------|:------------------------|:---------------------|
| *0* | `orValue`      | **Yes**  | `T`                     |                      |
| *1* | `maxTries`     | *No*     | `number`                | `10`                 |
| *2* | `delay`        | *No*     | `ms`                    | `0`                  |
| *3* | `run`          | *No*     | `() => T \| Promise<T>` | `fn.result(orValue)` |

| Return Type  |
|--------------|
| `Promise<T>` |

<p style="text-align: right" align="right"><a href="#errortools"> [↑ Back to <b>ErrorTools</b> ↑] </a></p>

## <span id="cachier_title">Cachier</span>
A simple caching tool to store and retrieve values by id.

Useful for storing values that are expensive to calculate, or that you want to reuse.

  - [**Cachier**](#cachier_title)
    - [**cachier**](#cachier_cachier)
      - [get](#get)
      - [getOrSave](#getorsave)
      - [getOrRun](#getorrun)
      - [save](#save)
      - [remove](#remove)
      - [clear](#clear)
      - [getAll](#getall)
      - [getDefaultExpiresIn](#getdefaultexpiresin)
      - [setDefaultExpiresIn](#setdefaultexpiresin)
      - [create](#cachier_cachier_create)
    - [Cachier<T>](#cachiert)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### <span id="cachier_cachier">cachier</span>

```typescript
cachier;
```

A generic cachier object for general purpose caching.

Call `cachier.create<T>()` to create a new isolated cachier object with a specific type.

```typescript
// Initial save
cachier.save('foo', { name: 'foo' }); // { "name": "foo" }
cachier.get('foo'); // { "name": "foo" }

// Overwrite
cachier.save('foo', { name: 'bar' }); // { "name": "bar" }
cachier.get('foo'); // { "name": "bar" }

// Get if exists, otherwise save
cachier.getOrSave('foo', { name: 'baz' }); // { "name": "bar" }
cachier.get('foo'); // { "name": "bar" }

// Get if exists, otherwise run function to create and save
cachier.getOrRun('foo', () => ({ name: 'qux' })); // { "name": "bar" }
cachier.get('foo'); // { "name": "bar" }

// Remove
cachier.remove('foo');
cachier.get('foo'); // undefined

// Populate
cachier.save('foo', { name: 'foo' }); // { "name": "foo" }
cachier.save('bar', { name: 'bar' }); // { "name": "bar" }
cachier.save('baz', { name: 'baz' }); // { "name": "baz" }

// Get all
cachier.getAll(); // { "foo": { "name": "foo" }, "bar": { "name": "bar" }, "baz": { "name": "baz" } }

// Clear
cachier.clear();
cachier.getAll(); // {}
```

<p style="text-align: right" align="right"><a href="#cachier"> [↑ Back to <b>Cachier</b> ↑] </a></p>

#### get

```typescript
cachier.get(id: string): T
cachier.create().get(id: string): T
```

Get a cached item by id.

```typescript
cachier.save('foo', { name: 'foo' });
cachier.get('foo'); // { "name": "foo" }
```

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `id`           | **Yes**  | `string` |

| Return Type |
|-------------|
| `T`         |

<p style="text-align: right" align="right"><a href="#cachier"> [↑ Back to <b>Cachier</b> ↑] </a></p>

#### getOrSave

```typescript
cachier.getOrSave(id: string, orValue: T, expiresIn: ms): T
cachier.create().getOrSave(id: string, orValue: T, expiresIn: ms): T
```

Get a cached item by id, or save a new item if it doesn't exist.

```typescript
cachier.getOrSave('foo', { name: 'lorem' }); // { "name": "lorem" }
cachier.get('foo'); // { "name": "lorem" }

cachier.getOrSave('foo', { name: 'SOMETHING DIFFERENT' }); // { "name": "lorem" }
cachier.get('foo'); // { "name": "lorem" }
```

|  #  | Parameter Name | Required | Type     | Default                 |
|:---:|:---------------|:---------|:---------|:------------------------|
| *0* | `id`           | **Yes**  | `string` |                         |
| *1* | `orValue`      | **Yes**  | `T`      |                         |
| *2* | `expiresIn`    | *No*     | `ms`     | `getDefaultExpiresIn()` |

| Return Type |
|-------------|
| `T`         |

<p style="text-align: right" align="right"><a href="#cachier"> [↑ Back to <b>Cachier</b> ↑] </a></p>

#### getOrRun

```typescript
cachier.getOrRun(id: string, orFunc: (id?: string) => T, expiresIn: ms): T
cachier.create().getOrRun(id: string, orFunc: (id?: string) => T, expiresIn: ms): T
```

Get a cached item by id, or run a function to create a new item if it doesn't exist.

The created item will be cached and returned.

```typescript
cachier.getOrRun('foo', () => ({ name: 'lorem' })); // { "name": "lorem" }
cachier.get('foo'); // { "name": "lorem" }

cachier.getOrRun('foo', () => ({ name: 'SOMETHING DIFFERENT' })); // { "name": "lorem" }
cachier.get('foo'); // { "name": "lorem" }
```

|  #  | Parameter Name | Required | Type                 | Default                 |
|:---:|:---------------|:---------|:---------------------|:------------------------|
| *0* | `id`           | **Yes**  | `string`             |                         |
| *1* | `orFunc`       | **Yes**  | `(id?: string) => T` |                         |
| *2* | `expiresIn`    | *No*     | `ms`                 | `getDefaultExpiresIn()` |

| Return Type |
|-------------|
| `T`         |

<p style="text-align: right" align="right"><a href="#cachier"> [↑ Back to <b>Cachier</b> ↑] </a></p>

#### save

```typescript
cachier.save(id: string, item: T, expiresIn: ms): T
cachier.create().save(id: string, item: T, expiresIn: ms): T
```

Save an item to the cache.

```typescript
cachier.save('foo', { name: 'foo' }); // { "name": "foo" }
cachier.get('foo'); // { "name": "foo" }
```

|  #  | Parameter Name | Required | Type     | Default                 |
|:---:|:---------------|:---------|:---------|:------------------------|
| *0* | `id`           | **Yes**  | `string` |                         |
| *1* | `item`         | **Yes**  | `T`      |                         |
| *2* | `expiresIn`    | *No*     | `ms`     | `getDefaultExpiresIn()` |

| Return Type |
|-------------|
| `T`         |

<p style="text-align: right" align="right"><a href="#cachier"> [↑ Back to <b>Cachier</b> ↑] </a></p>

#### remove

```typescript
cachier.remove(id: string): void
cachier.create().remove(id: string): void
```

Remove an item from the cache.

```typescript
cachier.save('foo', { name: 'foo' });
cachier.get('foo'); // { "name": "foo" }

cachier.remove('foo');
cachier.get('foo'); // undefined
```

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `id`           | **Yes**  | `string` |

| Return Type |
|-------------|
| `void`      |

<p style="text-align: right" align="right"><a href="#cachier"> [↑ Back to <b>Cachier</b> ↑] </a></p>

#### clear

```typescript
cachier.clear(): void
cachier.create().clear(): void
```

Clear all items from the cache.

```typescript
cachier.save('foo', { name: 'foo' });
cachier.getAll(); // { foo: { "name": "foo" } }

cachier.clear();
cachier.getAll(); // {}
```

| Return Type |
|-------------|
| `void`      |

<p style="text-align: right" align="right"><a href="#cachier"> [↑ Back to <b>Cachier</b> ↑] </a></p>

#### getAll

```typescript
cachier.getAll(): Record<string, T>
cachier.create().getAll(): Record<string, T>
```

Get all items from the cache.

```typescript
cachier.save('foo', { name: 'foo' });
cachier.save('bar', { name: 'bar' });
cachier.save('baz', { name: 'baz' });

cachier.getAll(); // { "foo": { "name": "foo" }, "bar": { "name": "bar" }, "baz": { "name": "baz" } }
```

| Return Type         |
|---------------------|
| `Record<string, T>` |

<p style="text-align: right" align="right"><a href="#cachier"> [↑ Back to <b>Cachier</b> ↑] </a></p>

#### getDefaultExpiresIn

```typescript
cachier.getDefaultExpiresIn(): ms
cachier.create().getDefaultExpiresIn(): ms
```

Get the default expiration time for items in the cache.

```typescript
cachier.getDefaultExpiresIn(); // Infinity
cachier.setDefaultExpiresIn(1000);
cachier.getDefaultExpiresIn(); // 1000
```

| Return Type |
|-------------|
| `ms`        |

<p style="text-align: right" align="right"><a href="#cachier"> [↑ Back to <b>Cachier</b> ↑] </a></p>

#### setDefaultExpiresIn

```typescript
cachier.setDefaultExpiresIn(newValue: ms): ms
cachier.create().setDefaultExpiresIn(newValue: ms): ms
```

Set the default expiration time for items in the cache.

```typescript
cachier.getDefaultExpiresIn(); // Infinity
cachier.setDefaultExpiresIn(1000);
cachier.getDefaultExpiresIn(); // 1000
```

|  #  | Parameter Name | Required | Type | Default    |
|:---:|:---------------|:---------|:-----|:-----------|
| *0* | `newValue`     | *No*     | `ms` | `Infinity` |

| Return Type |
|-------------|
| `ms`        |

<p style="text-align: right" align="right"><a href="#cachier"> [↑ Back to <b>Cachier</b> ↑] </a></p>

#### <span id="cachier_cachier_create">create</span>

```typescript
cachier.create<T>(defaultExpiresIn: ms): Cachier<U>
cachier.create().create<T>(defaultExpiresIn: ms): Cachier<U>
```

Create a new isolated cachier object with a specific type.

```typescript
const numCache = cachier.create<number>();

numCache.save('bar', 123);
cachier.save('foo', { name: 'foo' });

numCache.getAll(); // { "bar": 123 }
cachier.getAll(); // { "foo": { "name": "foo" } }
```

|  #  | Parameter Name     | Required | Type | Default    |
|:---:|:-------------------|:---------|:-----|:-----------|
| *0* | `defaultExpiresIn` | *No*     | `ms` | `Infinity` |

| Return Type  |
|--------------|
| `Cachier<U>` |

<p style="text-align: right" align="right"><a href="#cachier"> [↑ Back to <b>Cachier</b> ↑] </a></p>

### Cachier<T>

```typescript
Cachier<T>;
```

Type for a cachier object.

<p style="text-align: right" align="right"><a href="#cachier"> [↑ Back to <b>Cachier</b> ↑] </a></p>

## onDemand

```typescript
onDemand<T>(input: OnDemandInputObject<T>): T
```

A way of deferring the evaluation of object properties until they are accessed.

Provide it with an object where the values are either raw values or functions that return the value, and it will give you back a new object where the values are only evaluated when accessed.

```typescript
const demanded = onDemand({
  name: () => 'foo',
  random: () => Math.floor(Math.random() * 1000),
  data: () => ({lorem: 'ipsum'}),
  func: () => {
    const randomLetter1 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    return () => {
      const randomLetter2 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      return `${randomLetter1}-${randomLetter2}`;
    }
  },
  age: 30
});

// access a value
demanded.name; // 'foo'

// overwrite a value
demanded.name = 'bar';
demanded.name; // 'bar'

// getters are cached, so only execute once, and always return the same value
demanded.random // 701
demanded.random // 701
demanded.data === demanded.data // true

// getters can return functions
demanded.func(); // 'J-A'
demanded.func(); // 'J-M'
demanded.func(); // 'J-K'
demanded.func(); // 'J-S'

// You can also just provide raw values without needing a getter
demanded.age; // 30

type Example = typeof demanded; // {
  //  name: string;
  //  random: number;
  //  data: {
  //      lorem: string;
  //  };
  //  func: () => string;
  //  age: number;
  //}
```

  - [**onDemand**](#ondemand)
    - [OnDemandInputObject](#ondemandinputobject)

|  #  | Parameter Name | Required | Type                     |
|:---:|:---------------|:---------|:-------------------------|
| *0* | `input`        | **Yes**  | `OnDemandInputObject<T>` |

| Return Type |
|-------------|
| `T`         |

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### OnDemandInputObject

```typescript
OnDemandInputObject<T>;
```

A type that takes an object and makes all the values either functions that return the value, or the value itself.

Input type for the `onDemand` function.

<p style="text-align: right" align="right"><a href="#ondemand"> [↑ Back to <b>onDemand</b> ↑] </a></p>

## symbols

```typescript
symbols;
```

A series of characters that can be used for display symbols

| Name                    |                                                  | Symbol |
| :---------------------- | :----------------------------------------------- | :----: |
| TAB                     | `symbols.TAB`                                    |  ` `   |
| TICK                    | `symbols.TICK`                                   |   ✔    |
| CROSS                   | `symbols.CROSS`                                  |   ✖    |
| PLUS                    | `symbols.PLUS`                                   |   +    |
| MINUS                   | `symbols.MINUS`                                  |   -    |
| TIMES                   | `symbols.TIMES`                                  |   ×    |
| DIVIDE                  | `symbols.DIVIDE`                                 |   ÷    |
| ELLIPSIS                | `symbols.ELLIPSIS`                               |   …    |
| BULLET                  | `symbols.BULLET`                                 |   •    |
| BULLET_TRI              | `symbols.BULLET_TRI`                             |   ‣    |
| BULLET_HYP              | `symbols.BULLET_HYP`                             |   ⁃    |
| EJECT                   | `symbols.EJECT`                                  |   ⏏    |
| TILDE                   | `symbols.TILDE`                                  |   ~    |
| HOME                    | `symbols.HOME`                                   |   ~    |
| RADIO_EMPTY             | `symbols.RADIO_EMPTY`                            |   ◯    |
| RADIO_FULL              | `symbols.RADIO_FULL`                             |   ◉    |
| CURSOR                  | `symbols.CURSOR`                                 |   ❯    |
| CHEV_LFT                | `symbols.CHEV_LFT`                               |   ‹    |
| CHEV_RGT                | `symbols.CHEV_RGT`                               |   ›    |
| CHAIN                   | `symbols.CHAIN`                                  |   ⫘    |
| TRI_UPP                 | `symbols.TRI_UPP`                                |   ▲    |
| TRI_DWN                 | `symbols.TRI_DWN`                                |   ▼    |
| TRI_RGT                 | `symbols.TRI_RGT`                                |   ▶    |
| TRI_LFT                 | `symbols.TRI_LFT`                                |   ◀    |
| ARROW_UPP               | `symbols.ARROW_UPP`                              |   ↑    |
| ARROW_DWN               | `symbols.ARROW_DWN`                              |   ↓    |
| ARROW_RGT               | `symbols.ARROW_RGT`                              |   →    |
| ARROW_LFT               | `symbols.ARROW_LFT`                              |   ←    |
| ARROW_UPP_RGT           | `symbols.ARROW_UPP_RGT`                          |   ↗    |
| ARROW_DWN_RGT           | `symbols.ARROW_DWN_RGT`                          |   ↘    |
| ARROW_DWN_LFT           | `symbols.ARROW_DWN_LFT`                          |   ↙    |
| ARROW_UPP_LFT           | `symbols.ARROW_UPP_LFT`                          |   ↖    |
| ARROW_STILL             | `symbols.ARROW_STILL`                            |   •    |
| ARROW_FLIP_H            | `symbols.ARROW_FLIP_H`                           |   ↔    |
| ARROW_FLIP_V            | `symbols.ARROW_FLIP_V`                           |   ↕    |
| ARROW_ROTATE_UPP        | `symbols.ARROW_ROTATE_UPP`                       |   ⤴    |
| ARROW_ROTATE_DWN        | `symbols.ARROW_ROTATE_DWN`                       |   ⤵    |
| ARROW_ROTATE_LFT        | `symbols.ARROW_ROTATE_LFT`                       |   ⤶    |
| ARROW_ROTATE_RGT        | `symbols.ARROW_ROTATE_RGT`                       |   ⤷    |
| ARROW_ROTATE_CLOCK      | `symbols.ARROW_ROTATE_CLOCK`                     |   ↻    |
| ARROW_ROTATE_ANTI_CLOCK | `symbols.ARROW_ROTATE_ANTI_CLOCK`                |   ↺    |
| FRACTION_1_4            | `symbols.FRACTION_1_4`                           |   ¼    |
| FRACTION_1_2            | `symbols.FRACTION_1_2`                           |   ½    |
| FRACTION_3_4            | `symbols.FRACTION_3_4`                           |   ¾    |
| SUPERSCRIPT             | `symbols.SUPERSCRIPT['1']`                       |   ¹    |
|                         | `symbols.SUPERSCRIPT['2']`                       |   ²    |
|                         | `symbols.SUPERSCRIPT['3']`                       |   ³    |
|                         | `symbols.SUPERSCRIPT['4']`                       |   ⁴    |
|                         | `symbols.SUPERSCRIPT['5']`                       |   ⁵    |
|                         | `symbols.SUPERSCRIPT['6']`                       |   ⁶    |
|                         | `symbols.SUPERSCRIPT['7']`                       |   ⁷    |
|                         | `symbols.SUPERSCRIPT['8']`                       |   ⁸    |
|                         | `symbols.SUPERSCRIPT['9']`                       |   ⁹    |
|                         | `symbols.SUPERSCRIPT['0']`                       |   ⁰    |
|                         | `symbols.SUPERSCRIPT['-']`                       |   ⁻    |
|                         | `symbols.SUPERSCRIPT['+']`                       |   ⁺    |
|                         | `symbols.SUPERSCRIPT['=']`                       |   ⁼    |
|                         | `symbols.SUPERSCRIPT['(']`                       |   ⁽    |
|                         | `symbols.SUPERSCRIPT[')']`                       |   ⁾    |
|                         | `symbols.SUPERSCRIPT['i']`                       |   ⁱ    |
|                         | `symbols.SUPERSCRIPT['n']`                       |   ⁿ    |
|                         | `symbols.SUPERSCRIPT['o']`                       |   °    |
|                         | `symbols.SUPERSCRIPT['*']`                       |   °    |
| BLOCK                   | `symbols.BLOCK.full`                             |   █    |
|                         | `symbols.BLOCK.upperHalf`                        |   ▀    |
|                         | `symbols.BLOCK.lowerOneEighth`                   |   ▁    |
|                         | `symbols.BLOCK.lowerOneQuarter`                  |   ▂    |
|                         | `symbols.BLOCK.lowerThreeEighths`                |   ▃    |
|                         | `symbols.BLOCK.lowerHalf`                        |   ▄    |
|                         | `symbols.BLOCK.lowerFiveEighths`                 |   ▅    |
|                         | `symbols.BLOCK.lowerThreeQuarters`               |   ▆    |
|                         | `symbols.BLOCK.lowerSevenEighths`                |   ▇    |
|                         | `symbols.BLOCK.leftSevenEighths`                 |   ▉    |
|                         | `symbols.BLOCK.leftThreeQuarters`                |   ▊    |
|                         | `symbols.BLOCK.leftFiveEighths`                  |   ▋    |
|                         | `symbols.BLOCK.leftHalf`                         |   ▌    |
|                         | `symbols.BLOCK.leftThreeEighths`                 |   ▍    |
|                         | `symbols.BLOCK.leftOneQuarter`                   |   ▎    |
|                         | `symbols.BLOCK.leftOneEighth`                    |   ▏    |
|                         | `symbols.BLOCK.rightHalf`                        |   ▐    |
|                         | `symbols.BLOCK.upperOneEighth`                   |   ▔    |
|                         | `symbols.BLOCK.rightOneEighth`                   |   ▕    |
| SHADE                   | `symbols.SHADE.light`                            |   ░    |
|                         | `symbols.SHADE.medium`                           |   ▒    |
|                         | `symbols.SHADE.dark`                             |   ▓    |
| QUADRANT                | `symbols.QUADRANT.upperLeft`                     |   ▘    |
|                         | `symbols.QUADRANT.upperRight`                    |   ▝    |
|                         | `symbols.QUADRANT.lowerLeft`                     |   ▖    |
|                         | `symbols.QUADRANT.lowerRight`                    |   ▗    |
|                         | `symbols.QUADRANT.upperLeftLowerLeftLowerRight`  |   ▙    |
|                         | `symbols.QUADRANT.upperLeftLowerRight`           |   ▚    |
|                         | `symbols.QUADRANT.upperLeftUpperRightLowerLeft`  |   ▛    |
|                         | `symbols.QUADRANT.upperLeftUpperRightLowerRight` |   ▜    |
|                         | `symbols.QUADRANT.upperRightLowerLeft`           |   ▞    |
|                         | `symbols.QUADRANT.upperRightLowerLeftLowerRight` |   ▟    |

  - [**symbols**](#symbols)
    - [superscript](#superscript)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### superscript

```typescript
superscript(num: number | string): string
```

Converts a string or number to superscript (where possible)

Known superscript characters:
`¹²³⁴⁵⁶⁷⁸⁹⁰⁻⁺⁼⁽⁾ⁱⁿ°`

Characters without a superscript equivalent will be replaced with a `°`

```typescript
superscript(219) // '²¹⁹'
superscript(1234567890) // '¹²³⁴⁵⁶⁷⁸⁹⁰'
```

|  #  | Parameter Name | Required | Type               |
|:---:|:---------------|:---------|:-------------------|
| *0* | `num`          | **Yes**  | `number \| string` |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#symbols"> [↑ Back to <b>symbols</b> ↑] </a></p>

## <span id="queue">queue</span>
A way of managing queues from different parts of the code.

  - [**queue**](#queue)
    - [**QueueManager**](#queuemanager)
      - [setDefaultPauseTime](#setdefaultpausetime)
      - [setPauseTime](#setpausetime)
      - [add](#add)
      - [new](#new)
    - [queue](#queue_queue)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### QueueManager

```typescript
QueueManager;
```

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

<p style="text-align: right" align="right"><a href="#queue"> [↑ Back to <b>queue</b> ↑] </a></p>

#### setDefaultPauseTime

```typescript
queue.setDefaultPauseTime(time: ms): void
new QueueManager().setDefaultPauseTime(time: ms): void
```

Sets the default pause time for pauses between queue items.

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `time`         | **Yes**  | `ms` |

| Return Type |
|-------------|
| `void`      |

<p style="text-align: right" align="right"><a href="#queue"> [↑ Back to <b>queue</b> ↑] </a></p>

#### setPauseTime

```typescript
queue.setPauseTime(id: string, time: ms): void
new QueueManager().setPauseTime(id: string, time: ms): void
```

Sets the pause time for pauses between queue items for the specified queue.

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `id`           | **Yes**  | `string` |
| *1* | `time`         | **Yes**  | `ms`     |

| Return Type |
|-------------|
| `void`      |

<p style="text-align: right" align="right"><a href="#queue"> [↑ Back to <b>queue</b> ↑] </a></p>

#### add

```typescript
queue.add(id: string, promiseItem: PromiseTools.PromiseItem<T>): Promise<T>
new QueueManager().add(id: string, promiseItem: PromiseTools.PromiseItem<T>): Promise<T>
```

Adds a function to the queue.

|  #  | Parameter Name | Required | Type                          |
|:---:|:---------------|:---------|:------------------------------|
| *0* | `id`           | **Yes**  | `string`                      |
| *1* | `promiseItem`  | **Yes**  | `PromiseTools.PromiseItem<T>` |

| Return Type  |
|--------------|
| `Promise<T>` |

<p style="text-align: right" align="right"><a href="#queue"> [↑ Back to <b>queue</b> ↑] </a></p>

#### new

```typescript
queue.new(defaultPauseTime: ms): QueueManager
new QueueManager().new(defaultPauseTime: ms): QueueManager
QueueManager.new(defaultPauseTime: ms): QueueManager
```

Creates a new QueueManager instance.

|  #  | Parameter Name     | Required | Type | Default |
|:---:|:-------------------|:---------|:-----|:--------|
| *0* | `defaultPauseTime` | *No*     | `ms` | `0`     |

| Return Type    |
|----------------|
| `QueueManager` |

<p style="text-align: right" align="right"><a href="#queue"> [↑ Back to <b>queue</b> ↑] </a></p>

### <span id="queue_queue">queue</span>

```typescript
queue;
```

An instance of QueueManager

See QueueManager for more information.

<p style="text-align: right" align="right"><a href="#queue"> [↑ Back to <b>queue</b> ↑] </a></p>

## <span id="timer">timer</span>
A debug tool for measuring the duration of code blocks.

  - [**timer**](#timer)
    - [**Timer Instance**](#timer-instance)
      - [start](#start)
      - [end](#end)
      - [switch](#switch)
      - [getTable](#gettable)
      - [log](#log)
      - [reset](#reset)
      - [getDuration](#getduration)
      - [names](#names)
      - [displayNames](#displaynames)
      - [startTimes](#starttimes)
      - [endTimes](#endtimes)
    - [getTimer](#gettimer)
    - [timer](#timer_timer)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### Timer Instance

#### start

```typescript
timer.start(...labels: string[]): void
getTimer().start(...labels: string[]): void
```

Start a timer

|  #   | Parameter Name | Required | Type       |
|:----:|:---------------|:---------|:-----------|
| *0…* | `labels`       | **Yes**  | `string[]` |

| Return Type |
|-------------|
| `void`      |

<p style="text-align: right" align="right"><a href="#timer"> [↑ Back to <b>timer</b> ↑] </a></p>

#### end

```typescript
timer.end(...labels: string[]): void
getTimer().end(...labels: string[]): void
```

End a given timer

|  #   | Parameter Name | Required | Type       |
|:----:|:---------------|:---------|:-----------|
| *0…* | `labels`       | **Yes**  | `string[]` |

| Return Type |
|-------------|
| `void`      |

<p style="text-align: right" align="right"><a href="#timer"> [↑ Back to <b>timer</b> ↑] </a></p>

#### switch

```typescript
timer.switch(endLabel: string | string[], startLabel: string | string[]): void
getTimer().switch(endLabel: string | string[], startLabel: string | string[]): void
```

Switch the timer
The same as calling timer.end(endLabel) and timer.start(startLabel)

|  #  | Parameter Name | Required | Type                 |
|:---:|:---------------|:---------|:---------------------|
| *0* | `endLabel`     | **Yes**  | `string \| string[]` |
| *1* | `startLabel`   | **Yes**  | `string \| string[]` |

| Return Type |
|-------------|
| `void`      |

<p style="text-align: right" align="right"><a href="#timer"> [↑ Back to <b>timer</b> ↑] </a></p>

#### getTable

```typescript
timer.getTable(prefix: string, customEntries: ((durations: TimerDurations<TName>) => CustomEntryObj)[] | CustomEntryDict<TimerDurations<TName>, TName>): string
getTimer().getTable(prefix: string, customEntries: ((durations: TimerDurations<TName>) => CustomEntryObj)[] | CustomEntryDict<TimerDurations<TName>, TName>): string
```

Get the timing table as a string

|  #  | Parameter Name  | Required | Type                                                                                                        |
|:---:|:----------------|:---------|:------------------------------------------------------------------------------------------------------------|
| *0* | `prefix`        | *No*     | `string`                                                                                                    |
| *1* | `customEntries` | *No*     | `((durations: TimerDurations<TName>) => CustomEntryObj)[] \| CustomEntryDict<TimerDurations<TName>, TName>` |

| Return Type |                  |
|-------------|------------------|
| `string`    | the timing table |

<p style="text-align: right" align="right"><a href="#timer"> [↑ Back to <b>timer</b> ↑] </a></p>

#### log

```typescript
timer.log(prefix: string, customEntries: ((durations: TimerDurations<TName>) => CustomEntryObj)[] | CustomEntryDict<TimerDurations<TName>, TName>): number
getTimer().log(prefix: string, customEntries: ((durations: TimerDurations<TName>) => CustomEntryObj)[] | CustomEntryDict<TimerDurations<TName>, TName>): number
```

Log the timing table

|  #  | Parameter Name  | Required | Type                                                                                                        |
|:---:|:----------------|:---------|:------------------------------------------------------------------------------------------------------------|
| *0* | `prefix`        | *No*     | `string`                                                                                                    |
| *1* | `customEntries` | *No*     | `((durations: TimerDurations<TName>) => CustomEntryObj)[] \| CustomEntryDict<TimerDurations<TName>, TName>` |

| Return Type |                            |
|-------------|----------------------------|
| `number`    | the number of lines logged |

<p style="text-align: right" align="right"><a href="#timer"> [↑ Back to <b>timer</b> ↑] </a></p>

#### reset

```typescript
timer.reset(): void
getTimer().reset(): void
```

Reset the timer

| Return Type |
|-------------|
| `void`      |

<p style="text-align: right" align="right"><a href="#timer"> [↑ Back to <b>timer</b> ↑] </a></p>

#### getDuration

```typescript
timer.getDuration(): ms
getTimer().getDuration(): ms
```

Get the duration of a given timer

| Return Type |
|-------------|
| `ms`        |

<p style="text-align: right" align="right"><a href="#timer"> [↑ Back to <b>timer</b> ↑] </a></p>

#### names

```typescript
timer.names;
getTimer().names;
```

The names of the timers

<p style="text-align: right" align="right"><a href="#timer"> [↑ Back to <b>timer</b> ↑] </a></p>

#### displayNames

```typescript
timer.displayNames;
getTimer().displayNames;
```

The display names of the timers

<p style="text-align: right" align="right"><a href="#timer"> [↑ Back to <b>timer</b> ↑] </a></p>

#### startTimes

```typescript
timer.startTimes;
getTimer().startTimes;
```

The start times of the timers

<p style="text-align: right" align="right"><a href="#timer"> [↑ Back to <b>timer</b> ↑] </a></p>

#### endTimes

```typescript
timer.endTimes;
getTimer().endTimes;
```

The end times of the timers

<p style="text-align: right" align="right"><a href="#timer"> [↑ Back to <b>timer</b> ↑] </a></p>

### getTimer

```typescript
getTimer(name: string, verbose: boolean, wrapperFn: any, displayNames: TName): any
```

Usage:
```typescript
const timer = getTimer('Example', false, colr.red, {
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

|  #  | Parameter Name | Required | Type      | Default           |
|:---:|:---------------|:---------|:----------|:------------------|
| *0* | `name`         | *No*     | `string`  |                   |
| *1* | `verbose`      | *No*     | `boolean` | `false`           |
| *2* | `wrapperFn`    | *No*     | `any`     | `colr.dark.white` |
| *3* | `displayNames` | *No*     | `TName`   |                   |

| Return Type |
|-------------|
| `any`       |

<p style="text-align: right" align="right"><a href="#timer"> [↑ Back to <b>timer</b> ↑] </a></p>

### <span id="timer_timer">timer</span>

```typescript
timer;
```

Usage:
```typescript
timer.start('TOTAL', 'Intro');

await wait(seconds(4)); // do something async

timer.switch('Intro', 'Ending'); // same as calling timer.end('Intro') and timer.start('Ending')

await wait(seconds(6)); // do something async

timer.end('TOTAL', 'Ending');
timer.log();
```

Output:
```
Times:
	Intro:   4s
	Ending:  6s
	⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
	TOTAL:   10s
```

<p style="text-align: right" align="right"><a href="#timer"> [↑ Back to <b>timer</b> ↑] </a></p>

## safe
A series of simple functions for ensuring that a value is safe to use.

Used internally for input validation.

  - [**safe**](#safe)
    - [num](#safe_num)
    - [str](#safe_str)
    - [bool](#safe_bool)
    - [func](#safe_func)
    - [obj](#safe_obj)
    - [objWith](#safe_objwith)
    - [arr](#safe_arr)
    - [prop](#safe_prop)
    - [**arrOf**](#arrof)
      - [num](#safe_arrof_num)
      - [str](#safe_arrof_str)
      - [bool](#safe_arrof_bool)
      - [func](#safe_arrof_func)
      - [obj](#safe_arrof_obj)
      - [objWith](#safe_arrof_objwith)
      - [arr](#safe_arrof_arr)
      - [prop](#safe_arrof_prop)
    - [**ObjWithConfig<O>**](#objwithconfigo)
      - [ObjWithPropConfig<O>](#objwithpropconfigo)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### <span id="safe_num">num</span>

```typescript
safe.num(input: number, isInt: boolean, min: number, max: number, fallback: number): number
```

Process a number value, ensuring that it is safe to use.

```typescript
safe.num(10); // 10
safe.num(10000); // 10000
safe.num(-1); // -1
safe.num(true); // 0
safe.num('123'); // 0
safe.num(NaN); // 0
safe.num(Infinity); // 0
safe.num(null); // 0
safe.num(undefined); // 0

safe.num(10, true, 0, 100, 99); // 10
safe.num(10000, true, 0, 100, 99); // 100
safe.num(-1, true, 0, 100, 99); // 0
safe.num(true, true, 0, 100, 99); // 99
safe.num('123', true, 0, 100, 99); // 99
safe.num(NaN, true, 0, 100, 99); // 99
safe.num(Infinity, true, 0, 100, 99); // 100
safe.num(null, true, 0, 100, 99); // 99
safe.num(undefined, true, 0, 100, 99); // 99
```

|  #  | Parameter Name | Required | Type      | Default |
|:---:|:---------------|:---------|:----------|:--------|
| *0* | `input`        | **Yes**  | `number`  |         |
| *1* | `isInt`        | *No*     | `boolean` | `false` |
| *2* | `min`          | *No*     | `number`  |         |
| *3* | `max`          | *No*     | `number`  |         |
| *4* | `fallback`     | *No*     | `number`  | `0`     |

| Return Type |
|-------------|
| `number`    |

<p style="text-align: right" align="right"><a href="#safe"> [↑ Back to <b>safe</b> ↑] </a></p>

### <span id="safe_str">str</span>

```typescript
safe.str(input: string, allowBasicStringify: boolean, fallback: string): string
```

Process a string value, ensuring that it is safe to use.

```typescript
safe.str('foo'); // 'foo'
safe.str(''); // ''
safe.str(123); // ''
safe.str(true); // ''
safe.str({foo: 'bar'}); // ''
safe.str([]); // ''
safe.str(null); // ''
safe.str(undefined); // ''

safe.str('foo', true, 'bar'); // 'foo'
safe.str('', true, 'bar'); // ''
safe.str(123, true, 'bar'); // '123'
safe.str(true, true, 'bar'); // 'true'
safe.str({foo: 'bar'}, true, 'bar'); // 'bar'
safe.str([], true, 'bar'); // 'bar'
safe.str(null, true, 'bar'); // 'bar'
safe.str(undefined, true, 'bar'); // 'bar'
```

|  #  | Parameter Name        | Required | Type      | Default |
|:---:|:----------------------|:---------|:----------|:--------|
| *0* | `input`               | **Yes**  | `string`  |         |
| *1* | `allowBasicStringify` | *No*     | `boolean` | `false` |
| *2* | `fallback`            | *No*     | `string`  | `''`    |

| Return Type |
|-------------|
| `string`    |

<p style="text-align: right" align="right"><a href="#safe"> [↑ Back to <b>safe</b> ↑] </a></p>

### <span id="safe_bool">bool</span>

```typescript
safe.bool(input: boolean, fallback: boolean): boolean
```

Process a boolean value, ensuring that it is safe to use.

```typescript
safe.bool(true); // true
safe.bool(false); // false
safe.bool(1); // true
safe.bool(0); // false
safe.bool(123); // false
safe.bool('true'); // true
safe.bool('false'); // false
safe.bool('foobar'); // false
safe.bool({foo: 'bar'}); // false
safe.bool([]); // false
safe.bool(null); // false
safe.bool(undefined); // false

safe.bool(true, true); // true
safe.bool(false, true); // false
safe.bool(1, true); // true
safe.bool(0, true); // false
safe.bool(123, true); // true
safe.bool('true', true); // true
safe.bool('false', true); // false
safe.bool('foobar', true); // true
safe.bool({foo: 'bar'}, true); // true
safe.bool([], true); // true
safe.bool(null, true); // true
safe.bool(undefined, true); // true

|  #  | Parameter Name | Required | Type      | Default |
|:---:|:---------------|:---------|:----------|:--------|
| *0* | `input`        | **Yes**  | `boolean` |         |
| *1* | `fallback`     | *No*     | `boolean` | `false` |

| Return Type |
|-------------|
| `boolean`   |

<p style="text-align: right" align="right"><a href="#safe"> [↑ Back to <b>safe</b> ↑] </a></p>

### <span id="safe_func">func</span>

```typescript
safe.func<T>(input: T, fallback: T): T
```

Process a function value, ensuring that it is safe to use.

```typescript
safe.func((p: number) => 123); // (p: number) => 123
safe.func(true); // (() => {})
safe.func(false); // (() => {})
safe.func(123); // (() => {})
safe.func('foobar'); // (() => {})
safe.func({foo: 'bar'}); // (() => {})
safe.func([1, 2, 3]); // (() => {})
safe.func(null); // (() => {})
safe.func(undefined); // (() => {})

safe.func((p: number) => 123, (q: number) => 456); // (p: number) => 123
safe.func(true, (q: number) => 456); // (q: number) => 456
safe.func(false, (q: number) => 456); // (q: number) => 456
safe.func(123, (q: number) => 456); // (q: number) => 456
safe.func('foobar', (q: number) => 456); // (q: number) => 456
safe.func({foo: 'bar'}, (q: number) => 456); // (q: number) => 456
safe.func([1, 2, 3], (q: number) => 456); // (q: number) => 456
safe.func(null, (q: number) => 456); // (q: number) => 456
safe.func(undefined, (q: number) => 456); // (q: number) => 456
```

|  #  | Parameter Name | Required | Type | Default                      |
|:---:|:---------------|:---------|:-----|:-----------------------------|
| *0* | `input`        | **Yes**  | `T`  |                              |
| *1* | `fallback`     | *No*     | `T`  | `(() => {}) as unknown as T` |

| Return Type |
|-------------|
| `T`         |

<p style="text-align: right" align="right"><a href="#safe"> [↑ Back to <b>safe</b> ↑] </a></p>

### <span id="safe_obj">obj</span>

```typescript
safe.obj<T>(input: T, allowArrays: boolean, fallback: T): T
```

Process an object value, ensuring that it is safe to use.

```typescript
safe.obj({foo: 'bar'}); // {foo: 'bar'}
safe.obj([1, 2, 3]); // [1, 2, 3]
safe.obj(true); // {}
safe.obj(false); // {}
safe.obj(123); // {}
safe.obj('foobar'); // {}
safe.obj(null); // {}
safe.obj(undefined); // {}

safe.obj({foo: 'bar'}, true, {baz: 123}); // {foo: 'bar'}
safe.obj([1, 2, 3], true, {baz: 123}); // [1, 2, 3]
safe.obj(true, true, {baz: 123}); // {baz: 123}
safe.obj(false, true, {baz: 123}); // {baz: 123}
safe.obj(123, true, {baz: 123}); // {baz: 123}
safe.obj('foobar', true, {baz: 123}); // {baz: 123}
safe.obj(null, true, {baz: 123}); // {baz: 123}
safe.obj(undefined, true, {baz: 123}); // {baz: 123}
```

|  #  | Parameter Name | Required | Type      | Default   |
|:---:|:---------------|:---------|:----------|:----------|
| *0* | `input`        | **Yes**  | `T`       |           |
| *1* | `allowArrays`  | *No*     | `boolean` | `false`   |
| *2* | `fallback`     | *No*     | `T`       | `{} as T` |

| Return Type |
|-------------|
| `T`         |

<p style="text-align: right" align="right"><a href="#safe"> [↑ Back to <b>safe</b> ↑] </a></p>

### <span id="safe_objwith">objWith</span>

```typescript
safe.objWith<T>(input: T, objConfig: ObjWithConfig<T>, allowComposition: boolean): T
```

Process an object value, ensuring that it is safe to use, and has the neccesary properties.

You must provide a config object that defines the properties that are required, and how to process them.
Each required property must have a fallback value, and can have an optional `checkFn` and `safeFn`.
 - fallback - the value to use if the property is missing or invalid
 - checkFn - a function that returns true if the property is missing or invalid (defaults to `(v) => v === undefined`)
- safeFn - a function that returns the safe value to use (defaults to `(v, f) => f`)

```typescript
const config1: ObjWithConfig<{ foo: string }> = {
  foo: {
    fallback: 'a',
    safeFn: (v, f) => safe.str(v, false, f),
  },
};
safe.objWith({foo: 'bar'}, config1); // { foo: 'bar' }
safe.objWith([1, 2, 3], config1); // { '0': 1, '1': 2, '2': 3, foo: 'a' }
safe.objWith(true, config1); // { foo: 'a' }
safe.objWith(false, config1); // { foo: 'a' }
safe.objWith(123, config1); // { foo: 'a' }
safe.objWith('foobar', config1); // { foo: 'a' }
safe.objWith(null, config1); // { foo: 'a' }
safe.objWith(undefined, config1); // { foo: 'a' }

const config2: ObjWithConfig<{ foo: string; bar: number }> = {
  ...config1,
  bar: {
    fallback: 78,
    safeFn: (v, f) => safe.num(v, true, 0, 100, f),
  },
};
safe.objWith({foo: 'bar', bar: 45}, config2); // { foo: 'bar', bar: 45 }
safe.objWith([1, 2, 3], config2); // { '0': 1, '1': 2, '2': 3, foo: 'a', bar: 78 }
safe.objWith(true, config2); // { foo: 'a', bar: 78 }
safe.objWith(false, config2); // { foo: 'a', bar: 78 }
safe.objWith(123, config2); // { foo: 'a', bar: 78 }
safe.objWith('foobar', config2); // { foo: 'a', bar: 78 }
safe.objWith(null, config2); // { foo: 'a', bar: 78 }
safe.objWith(undefined, config2); // { foo: 'a', bar: 78 }
```

|  #  | Parameter Name     | Required | Type               | Default |
|:---:|:-------------------|:---------|:-------------------|:--------|
| *0* | `input`            | **Yes**  | `T`                |         |
| *1* | `objConfig`        | **Yes**  | `ObjWithConfig<T>` |         |
| *2* | `allowComposition` | *No*     | `boolean`          | `true`  |

| Return Type |
|-------------|
| `T`         |

<p style="text-align: right" align="right"><a href="#safe"> [↑ Back to <b>safe</b> ↑] </a></p>

### <span id="safe_arr">arr</span>

```typescript
safe.arr<T>(input: T[], fallback: T[], minLength: number, maxLength: number): T[]
```

Process an array value, ensuring that it is safe to use.

```typescript
safe.arr([1, 2, 3]); // [ 1, 2, 3 ]
safe.arr(true); // []
safe.arr(false); // []
safe.arr(123); // []
safe.arr('foobar'); // []
safe.arr({foo: 'bar'}); // []
safe.arr(null); // []
safe.arr(undefined); // []

safe.arr([1, 2, 3], [4, 5, 6]); // [ 1, 2, 3 ]
safe.arr(true, [4, 5, 6]); // [ 4, 5, 6 ]
safe.arr(false, [4, 5, 6]); // [ 4, 5, 6 ]
safe.arr(123, [4, 5, 6]); // [ 4, 5, 6 ]
safe.arr('foobar', [4, 5, 6]); // [ 4, 5, 6 ]
safe.arr({foo: 'bar'}, [4, 5, 6]); // [ 4, 5, 6 ]
safe.arr(null, [4, 5, 6]); // [ 4, 5, 6 ]
safe.arr(undefined, [4, 5, 6]); // [ 4, 5, 6 ]
```

|  #  | Parameter Name | Required | Type     | Default    |
|:---:|:---------------|:---------|:---------|:-----------|
| *0* | `input`        | **Yes**  | `T[]`    |            |
| *1* | `fallback`     | *No*     | `T[]`    | `[]`       |
| *2* | `minLength`    | *No*     | `number` | `0`        |
| *3* | `maxLength`    | *No*     | `number` | `Infinity` |

| Return Type |
|-------------|
| `T[]`       |

<p style="text-align: right" align="right"><a href="#safe"> [↑ Back to <b>safe</b> ↑] </a></p>

### <span id="safe_prop">prop</span>

```typescript
safe.prop(input: string | number, fallback: string | number): string | number
```

Process a value (string or number) that is expected to be used as a property name, ensuring that it is safe to use.

Equivalent to `typeof value === 'number' ? safe.num(value) : safe.str(value, true, '')`

```typescript
safe.prop('foo'); // 'foo'
safe.prop(''); // ''
safe.prop(123); // 123
safe.prop(true); // 'true'
safe.prop({foo: 'bar'}); // ''
safe.prop([]); // ''
safe.prop(null); // ''
safe.prop(undefined); // ''

safe.prop('foo', 'bar'); // 'foo'
safe.prop('', 'bar'); // ''
safe.prop(123, 'bar'); // 123
safe.prop(true, 'bar'); // 'true'
safe.prop({foo: 'bar'}, 'bar'); // 'bar'
safe.prop([], 'bar'); // 'bar'
safe.prop(null, 'bar'); // 'bar'
safe.prop(undefined, 'bar'); // 'bar'
```

|  #  | Parameter Name | Required | Type               | Default |
|:---:|:---------------|:---------|:-------------------|:--------|
| *0* | `input`        | **Yes**  | `string \| number` |         |
| *1* | `fallback`     | *No*     | `string \| number` | `''`    |

| Return Type        |
|--------------------|
| `string \| number` |

<p style="text-align: right" align="right"><a href="#safe"> [↑ Back to <b>safe</b> ↑] </a></p>

### arrOf
A series of functions for processing arrays of values.

<p style="text-align: right" align="right"><a href="#safe"> [↑ Back to <b>safe</b> ↑] </a></p>

#### <span id="safe_arrof_num">num</span>

```typescript
safe.arrOf.num(input: number[], isInt: boolean, min: number, max: number, fallback: number, fallbackArr: number[], arrMinLength: number, arrMaxLength: number): number[]
```

Process an array of numbers, ensuring that they are safe to use.

```typescript
safe.arrOf.num([1, 2, 3]); // [ 1, 2, 3 ]
safe.arrOf.num(['foo', 1, true, null, undefined, [], {}]); // [ 0, 1, 0, 0, 0, 0, 0 ]
safe.arrOf.num(true); // []
safe.arrOf.num(false); // []
safe.arrOf.num(123); // []
safe.arrOf.num('foobar'); // []
safe.arrOf.num({foo: 'bar'}); // []
safe.arrOf.num(null); // []
safe.arrOf.num(undefined); // []

safe.arrOf.num([1, 2, 3], true, 0, 100, 99, [4, 5, 6]); // [ 1, 2, 3 ]
safe.arrOf.num(['foo', 1, true, null, undefined, [], {}], true, 0, 100, 99, [4, 5, 6]); // [ 99, 1, 99, 99, 99, 99, 99 ]
safe.arrOf.num(true, true, 0, 100, 99, [4, 5, 6]); // [ 4, 5, 6 ]
safe.arrOf.num(false, true, 0, 100, 99, [4, 5, 6]); // [ 4, 5, 6 ]
safe.arrOf.num(123, true, 0, 100, 99, [4, 5, 6]); // [ 4, 5, 6 ]
safe.arrOf.num('foobar', true, 0, 100, 99, [4, 5, 6]); // [ 4, 5, 6 ]
safe.arrOf.num({foo: 'bar'}, true, 0, 100, 99, [4, 5, 6]); // [ 4, 5, 6 ]
safe.arrOf.num(null, true, 0, 100, 99, [4, 5, 6]); // [ 4, 5, 6 ]
safe.arrOf.num(undefined, true, 0, 100, 99, [4, 5, 6]); // [ 4, 5, 6 ]
```

|  #  | Parameter Name | Required | Type       | Default    |
|:---:|:---------------|:---------|:-----------|:-----------|
| *0* | `input`        | **Yes**  | `number[]` |            |
| *1* | `isInt`        | *No*     | `boolean`  | `false`    |
| *2* | `min`          | *No*     | `number`   |            |
| *3* | `max`          | *No*     | `number`   |            |
| *4* | `fallback`     | *No*     | `number`   |            |
| *5* | `fallbackArr`  | *No*     | `number[]` | `[]`       |
| *6* | `arrMinLength` | *No*     | `number`   | `0`        |
| *7* | `arrMaxLength` | *No*     | `number`   | `Infinity` |

| Return Type |
|-------------|
| `number[]`  |

<p style="text-align: right" align="right"><a href="#safe"> [↑ Back to <b>safe</b> ↑] </a></p>

#### <span id="safe_arrof_str">str</span>

```typescript
safe.arrOf.str(input: string[], allowStringify: boolean, fallback: string, fallbackArr: string[], arrMinLength: number, arrMaxLength: number): string[]
```

Process an array of strings, ensuring that they are safe to use.

```typescript
safe.arrOf.str(['foo', 'bar', 'baz']); // [ 'foo', 'bar', 'baz' ]
safe.arrOf.str(['foo', 1, true, null, undefined, [], {}]); // [ 'foo', '', '', '', '', '', '' ]
safe.arrOf.str(true); // []
safe.arrOf.str(false); // []
safe.arrOf.str(123); // []
safe.arrOf.str('foobar'); // []
safe.arrOf.str({foo: 'bar'}); // []
safe.arrOf.str(null); // []
safe.arrOf.str(undefined); // []

safe.arrOf.str(['foo', 'bar', 'baz'], true, 'LOREM', ['IPSUM']); // [ 'foo', 'bar', 'baz' ]
safe.arrOf.str(['foo', 1, true, null, undefined, [], {}], true, 'LOREM', ['IPSUM']); // [ 'foo', '1', 'true', 'LOREM', 'LOREM', 'LOREM', 'LOREM' ]
safe.arrOf.str(true, true, 'LOREM', ['IPSUM']); // [ 'IPSUM' ]
safe.arrOf.str(false, true, 'LOREM', ['IPSUM']); // [ 'IPSUM' ]
safe.arrOf.str(123, true, 'LOREM', ['IPSUM']); // [ 'IPSUM' ]
safe.arrOf.str('foobar', true, 'LOREM', ['IPSUM']); // [ 'IPSUM' ]
safe.arrOf.str({foo: 'bar'}, true, 'LOREM', ['IPSUM']); // [ 'IPSUM' ]
safe.arrOf.str(null, true, 'LOREM', ['IPSUM']); // [ 'IPSUM' ]
safe.arrOf.str(undefined, true, 'LOREM', ['IPSUM']); // [ 'IPSUM' ]
```

|  #  | Parameter Name   | Required | Type       | Default    |
|:---:|:-----------------|:---------|:-----------|:-----------|
| *0* | `input`          | **Yes**  | `string[]` |            |
| *1* | `allowStringify` | *No*     | `boolean`  | `false`    |
| *2* | `fallback`       | *No*     | `string`   |            |
| *3* | `fallbackArr`    | *No*     | `string[]` | `[]`       |
| *4* | `arrMinLength`   | *No*     | `number`   | `0`        |
| *5* | `arrMaxLength`   | *No*     | `number`   | `Infinity` |

| Return Type |
|-------------|
| `string[]`  |

<p style="text-align: right" align="right"><a href="#safe"> [↑ Back to <b>safe</b> ↑] </a></p>

#### <span id="safe_arrof_bool">bool</span>

```typescript
safe.arrOf.bool(input: boolean[], fallback: boolean, fallbackArr: boolean[], arrMinLength: number, arrMaxLength: number): boolean[]
```

Process an array of booleans, ensuring that they are safe to use.

```typescript
safe.arrOf.bool([false, true, false]); // [ false, true, false ]
safe.arrOf.bool(['foo', 123, true, null, undefined, [], {}]); // [ false, false, true, false, false, false, false ]
safe.arrOf.bool(true); // []
safe.arrOf.bool(false); // []
safe.arrOf.bool(123); // []
safe.arrOf.bool('foobar'); // []
safe.arrOf.bool({foo: 'bar'}); // []
safe.arrOf.bool(null); // []
safe.arrOf.bool(undefined); // []

safe.arrOf.bool([false, true, false], true, [true, true]); // [ false, true, false ]
safe.arrOf.bool(['foo', 123, true, null, undefined, [], {}], true, [true, true]); // [ true, true, true, true, true, true, true ]
safe.arrOf.bool(true, true, [true, true]); // [ true, true ]
safe.arrOf.bool(false, true, [true, true]); // [ true, true ]
safe.arrOf.bool(123, true, [true, true]); // [ true, true ]
safe.arrOf.bool('foobar', true, [true, true]); // [ true, true ]
safe.arrOf.bool({foo: 'bar'}, true, [true, true]); // [ true, true ]
safe.arrOf.bool(null, true, [true, true]); // [ true, true ]
safe.arrOf.bool(undefined, true, [true, true]); // [ true, true ]
```

|  #  | Parameter Name | Required | Type        | Default    |
|:---:|:---------------|:---------|:------------|:-----------|
| *0* | `input`        | **Yes**  | `boolean[]` |            |
| *1* | `fallback`     | *No*     | `boolean`   |            |
| *2* | `fallbackArr`  | *No*     | `boolean[]` | `[]`       |
| *3* | `arrMinLength` | *No*     | `number`    | `0`        |
| *4* | `arrMaxLength` | *No*     | `number`    | `Infinity` |

| Return Type |
|-------------|
| `boolean[]` |

<p style="text-align: right" align="right"><a href="#safe"> [↑ Back to <b>safe</b> ↑] </a></p>

#### <span id="safe_arrof_func">func</span>

```typescript
safe.arrOf.func<T>(input: T[], fallback: T, fallbackArr: T[], arrMinLength: number, arrMaxLength: number): T[]
```

Process an array of functions, ensuring that they are safe to use.

```typescript
safe.arrOf.func([(p) => 1]); // [(p) => 1]
safe.arrOf.func(['foo', 1, true, null, undefined, [], {}]); // [() => {}, () => {}, () => {}, () => {}, () => {}, () => {}, () => {}]
safe.arrOf.func(true); // []
safe.arrOf.func(false); // []
safe.arrOf.func(123); // []
safe.arrOf.func('foobar'); // []
safe.arrOf.func({foo: 'bar'}); // []
safe.arrOf.func(null); // []
safe.arrOf.func(undefined); // []

safe.arrOf.func([(p) => 1], (q) => 2, [(r) => 3]); // [(p) => 1]
safe.arrOf.func(['foo', 1, true, null, undefined, [], {}], (q) => 2, [(r) => 3]); // [(q) => 2, (q) => 2, (q) => 2, (q) => 2, (q) => 2, (q) => 2, (q) => 2]
safe.arrOf.func(true, (q) => 2, [(r) => 3]); //  [(r) => 3]
safe.arrOf.func(false, (q) => 2, [(r) => 3]); //  [(r) => 3]
safe.arrOf.func(123, (q) => 2, [(r) => 3]); //  [(r) => 3]
safe.arrOf.func('foobar', (q) => 2, [(r) => 3]); //  [(r) => 3]
safe.arrOf.func({foo: 'bar'}, (q) => 2, [(r) => 3]); //  [(r) => 3]
safe.arrOf.func(null, (q) => 2, [(r) => 3]); //  [(r) => 3]
safe.arrOf.func(undefined, (q) => 2, [(r) => 3]); //  [(r) => 3]
```

|  #  | Parameter Name | Required | Type     | Default    |
|:---:|:---------------|:---------|:---------|:-----------|
| *0* | `input`        | **Yes**  | `T[]`    |            |
| *1* | `fallback`     | *No*     | `T`      |            |
| *2* | `fallbackArr`  | *No*     | `T[]`    | `[]`       |
| *3* | `arrMinLength` | *No*     | `number` | `0`        |
| *4* | `arrMaxLength` | *No*     | `number` | `Infinity` |

| Return Type |
|-------------|
| `T[]`       |

<p style="text-align: right" align="right"><a href="#safe"> [↑ Back to <b>safe</b> ↑] </a></p>

#### <span id="safe_arrof_obj">obj</span>

```typescript
safe.arrOf.obj<T>(input: T[], allowArrays: boolean, fallback: T, fallbackArr: T[], arrMinLength: number, arrMaxLength: number): T[]
```

Process an array of objects, ensuring that they are safe to use.

```typescript
safe.arrOf.obj([{foo: 1}, {bar: 2}]); // [ { foo: 1 }, { bar: 2 } ]
safe.arrOf.obj(['foo', 1, true, null, undefined, [], {}]); // [ {}, {}, {}, {}, {}, [], {} ]
safe.arrOf.obj(true); // []
safe.arrOf.obj(false); // []
safe.arrOf.obj(123); // []
safe.arrOf.obj('foobar'); // []
safe.arrOf.obj({foo: 'bar'}); // []
safe.arrOf.obj(null); // []
safe.arrOf.obj(undefined); // []

safe.arrOf.obj([{foo: 1}, {bar: 2}], true, {l: 3}, [{i: 4}]); // [ { foo: 1 }, { bar: 2 } ]
safe.arrOf.obj(['foo', 1, true, null, undefined, [], {}], true, {l: 3}, [{i: 4}]); // [ { l: 3 }, { l: 3 }, { l: 3 }, { l: 3 }, { l: 3 }, [], { } ]
safe.arrOf.obj(true, true, {l: 3}, [{i: 4}]); // [ { i: 4 } ]
safe.arrOf.obj(false, true, {l: 3}, [{i: 4}]); // [ { i: 4 } ]
safe.arrOf.obj(123, true, {l: 3}, [{i: 4}]); // [ { i: 4 } ]
safe.arrOf.obj('foobar', true, {l: 3}, [{i: 4}]); // [ { i: 4 } ]
safe.arrOf.obj({foo: 'bar'}, true, {l: 3}, [{i: 4}]); // [ { i: 4 } ]
safe.arrOf.obj(null, true, {l: 3}, [{i: 4}]); // [ { i: 4 } ]
safe.arrOf.obj(undefined, true, {l: 3}, [{i: 4}]); // [ { i: 4 } ]
```

|  #  | Parameter Name | Required | Type      | Default    |
|:---:|:---------------|:---------|:----------|:-----------|
| *0* | `input`        | **Yes**  | `T[]`     |            |
| *1* | `allowArrays`  | *No*     | `boolean` | `false`    |
| *2* | `fallback`     | *No*     | `T`       |            |
| *3* | `fallbackArr`  | *No*     | `T[]`     | `[]`       |
| *4* | `arrMinLength` | *No*     | `number`  | `0`        |
| *5* | `arrMaxLength` | *No*     | `number`  | `Infinity` |

| Return Type |
|-------------|
| `T[]`       |

<p style="text-align: right" align="right"><a href="#safe"> [↑ Back to <b>safe</b> ↑] </a></p>

#### <span id="safe_arrof_objwith">objWith</span>

```typescript
safe.arrOf.objWith<T>(input: T[], objConfig: ObjWithConfig<T>, allowComposition: boolean, fallbackArr: T[], arrMinLength: number, arrMaxLength: number): T[]
```

Process an array of objects, ensuring that they are safe to use, and have the neccesary properties.

```typescript
const config1: ObjWithConfig<{ foo: string }> = {
  foo: {
    fallback: 'a',
    safeFn: (v, f) => safe.str(v, false, f)
  }
};
safe.arrOf.objWith([{ foo: 1 }, { bar: 2 }], config1); // [ { foo: 'a' }, { bar: 2, foo: 'a' } ]
safe.arrOf.objWith(['foo', 1, true, null, undefined, [], {}], config1); // [{ foo: 'a' },{ foo: 'a' },{ foo: 'a' },{ foo: 'a' },{ foo: 'a' },{ foo: 'a' },{ foo: 'a' }]
safe.arrOf.objWith(true, config1); // []
safe.arrOf.objWith(false, config1); // []
safe.arrOf.objWith(123, config1); // []
safe.arrOf.objWith('foobar', config1); // []
safe.arrOf.objWith({ foo: 'bar' }, config1); // []
safe.arrOf.objWith(null, config1); // []

const config2: ObjWithConfig<{ foo: string, bar: number }> = {
  ...config1,
  bar: {
    fallback: 78,
    safeFn: (v, f) => safe.num(v, true, 0, 100, f)
  }
};
safe.arrOf.objWith([{ foo: 1 }, { bar: 2 }], config2); // [ { foo: 'a', bar: 78 }, { bar: 2, foo: 'a' } ]
safe.arrOf.objWith(['foo', 1, true, null, undefined, [], {}], config2); // [{ foo: 'a', bar: 78 },{ foo: 'a', bar: 78 },{ foo: 'a', bar: 78 },{ foo: 'a', bar: 78 },{ foo: 'a', bar: 78 },{ foo: 'a', bar: 78 },{ foo: 'a', bar: 78 }]
safe.arrOf.objWith(true, config2); // []
safe.arrOf.objWith(false, config2); // []
safe.arrOf.objWith(123, config2); // []
safe.arrOf.objWith('foobar', config2); // []
safe.arrOf.objWith({ foo: 'bar' }, config2); // []
safe.arrOf.objWith(null, config2); // []
```

|  #  | Parameter Name     | Required | Type               | Default    |
|:---:|:-------------------|:---------|:-------------------|:-----------|
| *0* | `input`            | **Yes**  | `T[]`              |            |
| *1* | `objConfig`        | **Yes**  | `ObjWithConfig<T>` |            |
| *2* | `allowComposition` | *No*     | `boolean`          | `true`     |
| *3* | `fallbackArr`      | *No*     | `T[]`              | `[]`       |
| *4* | `arrMinLength`     | *No*     | `number`           | `0`        |
| *5* | `arrMaxLength`     | *No*     | `number`           | `Infinity` |

| Return Type |
|-------------|
| `T[]`       |

<p style="text-align: right" align="right"><a href="#safe"> [↑ Back to <b>safe</b> ↑] </a></p>

#### <span id="safe_arrof_arr">arr</span>

```typescript
safe.arrOf.arr<T>(input: T[][], fallback: T[], fallbackArr: T[][], arrMinLength: number, arrMaxLength: number): T[][]
```

Process an array of arrays, ensuring that they are safe to use.

```typescript
safe.arrOf.arr([['foo'], ['bar']]); // [ [ 'foo' ], [ 'bar' ] ]
safe.arrOf.arr(['foo', 1, true, null, undefined, [], {}]); // [ [], [], [], [], [], [], [] ]
safe.arrOf.arr(true); // []
safe.arrOf.arr(false); // []
safe.arrOf.arr(123); // []
safe.arrOf.arr('foobar'); // []
safe.arrOf.arr({foo: 'bar'}); // []
safe.arrOf.arr(null); // []
safe.arrOf.arr(undefined); // []

safe.arrOf.arr([['foo'], ['bar']], ['baz'], [['IPSUM']]); // [ [ 'foo' ], [ 'bar' ] ]
safe.arrOf.arr(['foo', 1, true, null, undefined, [], {}], ['baz'], [['IPSUM']]); // [ [ 'baz' ], [ 'baz' ], [ 'baz' ], [ 'baz' ], [ 'baz' ], [], [ 'baz' ] ]
safe.arrOf.arr(true, ['baz'], [['IPSUM']]); // [ [ 'IPSUM' ] ]
safe.arrOf.arr(false, ['baz'], [['IPSUM']]); // [ [ 'IPSUM' ] ]
safe.arrOf.arr(123, ['baz'], [['IPSUM']]); // [ [ 'IPSUM' ] ]
safe.arrOf.arr('foobar', ['baz'], [['IPSUM']]); // [ [ 'IPSUM' ] ]
safe.arrOf.arr({foo: 'bar'}, ['baz'], [['IPSUM']]); // [ [ 'IPSUM' ] ]
safe.arrOf.arr(null, ['baz'], [['IPSUM']]); // [ [ 'IPSUM' ] ]
safe.arrOf.arr(undefined, ['baz'], [['IPSUM']]); // [ [ 'IPSUM' ] ]
```

|  #  | Parameter Name | Required | Type     | Default    |
|:---:|:---------------|:---------|:---------|:-----------|
| *0* | `input`        | **Yes**  | `T[][]`  |            |
| *1* | `fallback`     | *No*     | `T[]`    |            |
| *2* | `fallbackArr`  | *No*     | `T[][]`  | `[]`       |
| *3* | `arrMinLength` | *No*     | `number` | `0`        |
| *4* | `arrMaxLength` | *No*     | `number` | `Infinity` |

| Return Type |
|-------------|
| `T[][]`     |

<p style="text-align: right" align="right"><a href="#safe"> [↑ Back to <b>safe</b> ↑] </a></p>

#### <span id="safe_arrof_prop">prop</span>

```typescript
safe.arrOf.prop(input: (string | number)[], fallback: string | number, fallbackArr: (string | number)[], arrMinLength: number, arrMaxLength: number): (string | number)[]
```

Process an array of values that can be used as properties (string or number), ensuring that they are safe to use.

```typescript
safe.arrOf.prop([['foo'], ['bar']]); // [ '', '' ]
safe.arrOf.prop(['foo', 1, true, null, undefined, [], {}]); // [ 'foo', 1, 'true', '', '', '', '' ]
safe.arrOf.prop(true); // []
safe.arrOf.prop(false); // []
safe.arrOf.prop(123); // []
safe.arrOf.prop('foobar'); // []
safe.arrOf.prop({foo: 'bar'}); // []
safe.arrOf.prop(null); // []
safe.arrOf.prop(undefined); // []

safe.arrOf.prop([['foo'], ['bar']], ['baz'], ['IPSUM']); // [ [ 'baz' ], [ 'baz' ] ]
safe.arrOf.prop(['foo', 1, true, null, undefined, [], {}], ['baz'], ['IPSUM']); // [ 'foo', 1, 'true', [ 'baz' ], [ 'baz' ], [ 'baz' ],[ 'baz' ] ]
safe.arrOf.prop(true, ['baz'], ['IPSUM']); // [ 'IPSUM' ]
safe.arrOf.prop(false, ['baz'], ['IPSUM']); // [ 'IPSUM' ]
safe.arrOf.prop(123, ['baz'], ['IPSUM']); // [ 'IPSUM' ]
safe.arrOf.prop('foobar', ['baz'], ['IPSUM']); // [ 'IPSUM' ]
safe.arrOf.prop({foo: 'bar'}, ['baz'], ['IPSUM']); // [ 'IPSUM' ]
safe.arrOf.prop(null, ['baz'], ['IPSUM']); // [ 'IPSUM' ]
safe.arrOf.prop(undefined, ['baz'], ['IPSUM']); // [ 'IPSUM' ]
```

|  #  | Parameter Name | Required | Type                   | Default    |
|:---:|:---------------|:---------|:-----------------------|:-----------|
| *0* | `input`        | **Yes**  | `(string \| number)[]` |            |
| *1* | `fallback`     | *No*     | `string \| number`     |            |
| *2* | `fallbackArr`  | *No*     | `(string \| number)[]` | `[]`       |
| *3* | `arrMinLength` | *No*     | `number`               | `0`        |
| *4* | `arrMaxLength` | *No*     | `number`               | `Infinity` |

| Return Type            |
|------------------------|
| `(string \| number)[]` |

<p style="text-align: right" align="right"><a href="#safe"> [↑ Back to <b>safe</b> ↑] </a></p>

### ObjWithConfig<O>

```typescript
safe.ObjWithConfig;
```

A type for defining the configuration of an object when using `safe.objWith`.

<p style="text-align: right" align="right"><a href="#safe"> [↑ Back to <b>safe</b> ↑] </a></p>

#### ObjWithPropConfig<O>

```typescript
safe.ObjWithPropConfig;
```

A type for defining what is required for a property of an object when using `safe.objWith`.

<p style="text-align: right" align="right"><a href="#safe"> [↑ Back to <b>safe</b> ↑] </a></p>

## Types
Some commonly used typescript types

  - [**Types**](#types)
    - [Prettify<T>](#prettifyt)
    - [Partial<T>](#partialt)
    - [DeepPartial<T>](#deeppartialt)
    - [KeysOnly<T>](#keysonlyt)
    - [Numbered<T>](#numberedt)
    - [OfType<O, T>](#oftypeo-t)
    - [ObjOfType<T>](#objoftypet)
    - [RemapOf<O, T>](#remapofo-t)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### Prettify<T>

```typescript
Prettify<T>;
```

Makes joined types more readable

```typescript
type A = {name: string};
type B = {age: number};

type NormalAB = A & B; // A & B
type PrettyAB = Prettify<A & B>; // {name: string; age: number;}
```

<p style="text-align: right" align="right"><a href="#types"> [↑ Back to <b>Types</b> ↑] </a></p>

### Partial<T>

```typescript
Partial<T>;
```

Makes all properties in T optional.

```typescript
interface ITest {
  a: string,
  b: boolean
};
type PartialTest = Partial<ITest>; // { a?: string, b?: boolean }
```

<p style="text-align: right" align="right"><a href="#types"> [↑ Back to <b>Types</b> ↑] </a></p>

### DeepPartial<T>

```typescript
DeepPartial<T>;
```

Like Partial, but makes all nested properties optional

```typescript
interface ITest {
  a: string;
  b: {
    foo: number;
  };
  c: boolean;
};
type DeepPartialTest = DeepPartial<ITest>; // { a?: string, b?: { foo?: number }, c?: boolean }
```

<p style="text-align: right" align="right"><a href="#types"> [↑ Back to <b>Types</b> ↑] </a></p>

### KeysOnly<T>

```typescript
KeysOnly<T>;
```

Makes all the values equal to the keys of T

```typescript
interface ITest {
  a: string,
  b: boolean
};
type KeysOnlyTest = KeysOnly<ITest>; // { a: 'a', b: 'b' }
```

<p style="text-align: right" align="right"><a href="#types"> [↑ Back to <b>Types</b> ↑] </a></p>

### Numbered<T>

```typescript
Numbered<T>;
```

Makes all the values numbers

```typescript
interface ITest {
  a: string,
  b: boolean
};
type NumberedTest = Numbered<ITest>; // { a: number, b: number }
```

<p style="text-align: right" align="right"><a href="#types"> [↑ Back to <b>Types</b> ↑] </a></p>

### OfType<O, T>

```typescript
OfType<O, T>;
```

Makes all the properties of object O have type T

> **Note:** This is the same as `RemapOf<O, T>`

```typescript
interface IExample {
  a: string;
  b: boolean;
}
OfType<IExample, number>; // { a: number; b: number; }
```

<p style="text-align: right" align="right"><a href="#types"> [↑ Back to <b>Types</b> ↑] </a></p>

### ObjOfType<T>

```typescript
ObjOfType<T>;
```

An object with any properties of type T

```typescript
type Example = [number, number];
ObjOfType<Example>; // { [key: string]: Example; }
```

<p style="text-align: right" align="right"><a href="#types"> [↑ Back to <b>Types</b> ↑] </a></p>

### RemapOf<O, T>

```typescript
RemapOf<O, T>;
```

Remap a given interface (O) with all properties of type T

> **Note:** This is the same as `OfType<O, T>`

```typescript
interface IExample {
  a: string;
  b: boolean;
}
RemapOf<IExample, number>; // { a: number; b: number; }
```

<p style="text-align: right" align="right"><a href="#types"> [↑ Back to <b>Types</b> ↑] </a></p>

<!-- DOCS: MAIN END -->

# Notes

> Over 9000 unit tests

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>
