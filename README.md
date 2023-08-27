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
    - [**progressBar**](#progressbar)
    - [**symbols**](#symbols)
    - [**queue**](#queue)
    - [**timer**](#timer)
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
stopInterval(intID: number): number
waiters.stopInterval(intID: number): number
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
| `number`    |

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
      - [arrayAsc](#arrayasc)
      - [arrayDesc](#arraydesc)
    - [**reduces**](#reduces)
      - [combine](#combine)
      - [combineProp](#combineprop)
      - [mode](#mode)
      - [modeMapped](#modemapped)
    - [**everys**](#everys)
      - [isAllEqual](#isallequal)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### noop

```typescript
fn.noop(undefined): void
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
| *0* | `item`         | **Yes**  | `T`  |

| Return Type |
|-------------|
| `T`         |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

### result

```typescript
fn.result(item: T): () => T
```

Returns a function that returns a function that returns the first argument.

```typescript
const items = stuff
  .filter(condition ? mapSomething : fn.result(true))
```

|  #  | Parameter Name | Required | Type |
|:---:|:---------------|:---------|:-----|
| *0* | `item`         | **Yes**  | `T`  |

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
| *0* | `item`         | **Yes**  | `T`  |

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
| *0* | `item`         | **Yes**  | `T`  |

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
fn.dedupeMapped(mapFn: (value: T, index: number, array: T[]) => U): (item: T, index: number, array: T[]) => boolean
fn.filters.dedupeMapped(mapFn: (value: T, index: number, array: T[]) => U): (item: T, index: number, array: T[]) => boolean
filters.dedupeMapped(mapFn: (value: T, index: number, array: T[]) => U): (item: T, index: number, array: T[]) => boolean
```

Removes duplicate items from an array based on a mapped value.

```typescript
[2, 4, 6, 8, 10, 12].filter(fn.dedupeMapped((v) => v % 3)); // [ 2, 4, 6 ] (maps to [ 2, 1, 0, 2, 1, 0 ])
```

|  #  | Parameter Name | Required | Type                                         |
|:---:|:---------------|:---------|:---------------------------------------------|
| *0* | `mapFn`        | **Yes**  | `(value: T, index: number, array: T[]) => U` |

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
fn.toProp(prop: string): (item: O) => P
fn.maps.toProp(prop: string): (item: O) => P
maps.toProp(prop: string): (item: O) => P
```

Maps the item to a given property of the item

```typescript
[{name: 'Jack'}, {name: 'Jill'}].map(fn.toProp('name')); // ['Jack', 'Jill']
```

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `prop`         | **Yes**  | `string` |

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
fn.byProp(propName: string, sortFn: SortFn<T>): SortFn<O>
fn.sorts.byProp(propName: string, sortFn: SortFn<T>): SortFn<O>
sorts.byProp(propName: string, sortFn: SortFn<T>): SortFn<O>
```

Sort by a given property.

```typescript
const people = [{age: 2}, {age: 4}, {age: 3}, {age: 1}];
people.sort(fn.byProp('age', fn.asc)); // [{age: 1}, {age: 2}, {age: 3}, {age: 4}]
```

|  #  | Parameter Name | Required | Type        | Default |
|:---:|:---------------|:---------|:------------|:--------|
| *0* | `propName`     | **Yes**  | `string`    |         |
| *1* | `sortFn`       | *No*     | `SortFn<T>` | `asc`   |

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

#### arrayAsc

```typescript
fn.arrayAsc(a: any[], b: any[]): any
fn.sorts.arrayAsc(a: any[], b: any[]): any
sorts.arrayAsc(a: any[], b: any[]): any
```

Sort an array of arrays in ascending order

|  #  | Parameter Name | Required | Type    |
|:---:|:---------------|:---------|:--------|
| *0* | `a`            | **Yes**  | `any[]` |
| *1* | `b`            | **Yes**  | `any[]` |

| Return Type |
|-------------|
| `any`       |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### arrayDesc

```typescript
fn.arrayDesc(a: any[], b: any[]): any
fn.sorts.arrayDesc(a: any[], b: any[]): any
sorts.arrayDesc(a: any[], b: any[]): any
```

Sort an array of arrays in descending order

|  #  | Parameter Name | Required | Type    |
|:---:|:---------------|:---------|:--------|
| *0* | `a`            | **Yes**  | `any[]` |
| *1* | `b`            | **Yes**  | `any[]` |

| Return Type |
|-------------|
| `any`       |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

### reduces

```typescript
fn.reduces;
```

Collection of functions that can be used with Array.reduce

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### combine

```typescript
fn.combine(a: any, b: any): any
fn.reduces.combine(a: any, b: any): any
reduces.combine(a: any, b: any): any
```

Adds or concats the items

```typescript
[1, 2, 3].reduce(fn.combine); // 6
['a', 'b', 'c'].reduce(fn.combine); // 'abc'
```

|  #  | Parameter Name | Required | Type  |
|:---:|:---------------|:---------|:------|
| *0* | `a`            | **Yes**  | `any` |
| *1* | `b`            | **Yes**  | `any` |

| Return Type |
|-------------|
| `any`       |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

#### combineProp

```typescript
fn.combineProp(propName: string): (a: any, b: any) => any
fn.reduces.combineProp(propName: string): (a: any, b: any) => any
reduces.combineProp(propName: string): (a: any, b: any) => any
```

Adds or concats the given property of the items

```typescript
const people = [{name: 'a', age: 1}, {name: 'b', age: 2}, {name: 'c', age: 3}];
people.reduce(fn.combineProp('age')); // 6
people.reduce(fn.combineProp('name')); // 'abc'
```

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `propName`     | **Yes**  | `string` |

| Return Type               |
|---------------------------|
| `(a: any, b: any) => any` |

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
fn.isAllEqual(val: T, arr: T[]): boolean
fn.everys.isAllEqual(val: T, arr: T[]): boolean
everys.isAllEqual(val: T, arr: T[]): boolean
```

Returns if all the items are equal to one another.

```typescript
[1, 1, 1].every(fn.isAllEqual); // true
[1, 2, 1].every(fn.isAllEqual); // false
```

|  #  | Parameter Name | Required | Type  |
|:---:|:---------------|:---------|:------|
| *0* | `val`          | **Yes**  | `T`   |
| *1* | `arr`          | **Yes**  | `T[]` |

| Return Type |
|-------------|
| `boolean`   |

<p style="text-align: right" align="right"><a href="#fn"> [↑ Back to <b>fn</b> ↑] </a></p>

## ArrayTools

```typescript
ArrayTools;
```

A collection of useful array functions.

  - [**ArrayTools**](#arraytools)
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
    - [**utils**](#utils)
      - [isNumString](#isnumstring)
      - [partitionNums](#partitionnums)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### create

```typescript
create(length: number, value: T): T[]
ArrayTools.create(length: number, value: T): T[]
filled(length: number, value: T): T[]
ArrayTools.filled(length: number, value: T): T[]
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
zip(...arrs: T[]): UnwrapArrays<T>[]
ArrayTools.zip(...arrs: T[]): UnwrapArrays<T>[]
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
| `UnwrapArrays<T>[]` |

<p style="text-align: right" align="right"><a href="#arraytools"> [↑ Back to <b>ArrayTools</b> ↑] </a></p>

### zipMax

```typescript
zipMax(...arrs: T[]): UnwrapArrays<T>[]
ArrayTools.zipMax(...arrs: T[]): UnwrapArrays<T>[]
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
| `UnwrapArrays<T>[]` |

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

### repeat

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
ArrayTools.groupObj(arr, item => item.id); // {
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
ArrayTools.groupObj(arr, item => item.id); // [
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
    - [map](#map)
    - [mapValues](#mapvalues)
    - [mapKeys](#mapkeys)
    - [filter](#filter)
    - [clean](#clean)
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

### map

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

### clean

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
    - [clean](#clean)
    - [repeat](#repeat)
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
      - [clean](#clean)
      - [grabDepth](#grabdepth)
      - [grabUnique](#grabunique)
      - [grab](#grab)
      - [getReplaceSymbols](#getreplacesymbols)
      - [BracketReplaceSymbols](#bracketreplacesymbols)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### capitalise

```typescript
StringTools.capitalise(input: string): string
```

Capitalises the first letter of each word in a string

```typescript
StringTools.capitalise('hello world'); // 'Hello World'
```

|  #  | Parameter Name | Required | Type     | Default |
|:---:|:---------------|:---------|:---------|:--------|
| *0* | `input`        | *No*     | `string` | `''`    |

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

### clean

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

### repeat

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
| *1* | `char`         | **Yes**  | `string`             |         |
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

#### clean

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
MathsTools.addAll(...args: number[]): number
```

Adds all numbers together. Each argument is a number (use spread operator to pass in an array) similar to Math.min/Math.max

```typescript
MathsTools.addAll(1, 2, 3, 4, 5); // 15
```

|  #   | Parameter Name | Required | Type       |
|:----:|:---------------|:---------|:-----------|
| *0…* | `args`         | *No*     | `number[]` |

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
    - [map](#map)
    - [mapLimit](#maplimit)
    - [allObj](#allobj)
    - [allLimitObj](#alllimitobj)
    - [DeferredPromise](#deferredpromise)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### getDeferred

```typescript
getDeferred(undefined): DeferredPromise<T>
PromiseTools.getDeferred(undefined): DeferredPromise<T>
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
all(promises: Promise<T>[]): Promise<any>
PromiseTools.all(promises: Promise<T>[]): Promise<any>
```

An alias for Promise.all

|  #  | Parameter Name | Required | Type           |
|:---:|:---------------|:---------|:---------------|
| *0* | `promises`     | **Yes**  | `Promise<T>[]` |

| Return Type    |
|----------------|
| `Promise<any>` |

<p style="text-align: right" align="right"><a href="#promisetools"> [↑ Back to <b>PromiseTools</b> ↑] </a></p>

### allLimit

```typescript
allLimit(limit: number, items: ((index: number) => Promise<T>)[], noThrow: boolean): Promise<T[]>
PromiseTools.allLimit(limit: number, items: ((index: number) => Promise<T>)[], noThrow: boolean): Promise<T[]>
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

|  #  | Parameter Name | Required | Type                                | Default |
|:---:|:---------------|:---------|:------------------------------------|:--------|
| *0* | `limit`        | **Yes**  | `number`                            |         |
| *1* | `items`        | **Yes**  | `((index: number) => Promise<T>)[]` |         |
| *2* | `noThrow`      | *No*     | `boolean`                           | `false` |

| Return Type    |
|----------------|
| `Promise<T[]>` |

<p style="text-align: right" align="right"><a href="#promisetools"> [↑ Back to <b>PromiseTools</b> ↑] </a></p>

### each

```typescript
each(items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<any>): Promise<any>
PromiseTools.each(items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<any>): Promise<any>
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

| Return Type    |
|----------------|
| `Promise<any>` |

<p style="text-align: right" align="right"><a href="#promisetools"> [↑ Back to <b>PromiseTools</b> ↑] </a></p>

### eachLimit

```typescript
eachLimit(limit: number, items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<any>): Promise<any>
PromiseTools.eachLimit(limit: number, items: Ti[], func: (item: Ti, index: number, array: Ti[]) => Promise<any>): Promise<any>
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

| Return Type    |
|----------------|
| `Promise<any>` |

<p style="text-align: right" align="right"><a href="#promisetools"> [↑ Back to <b>PromiseTools</b> ↑] </a></p>

### map

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
retryOr(orValue: T, maxTries: number, delay: ms, suppress: boolean, run: () => T): Promise<T>
ErrorTools.retryOr(orValue: T, maxTries: number, delay: ms, suppress: boolean, run: () => T): Promise<T>
```

Combination of retry and tryOr.

Try to execute a function and return its result if it succeeds, or retry a given number of times until it succeeds. Return the default value if it fails too many times

```typescript
const result = retryOr('default', 5, seconds(1), true, () => getSomething());
```

|  #  | Parameter Name | Required | Type      | Default              |
|:---:|:---------------|:---------|:----------|:---------------------|
| *0* | `orValue`      | **Yes**  | `T`       |                      |
| *1* | `maxTries`     | *No*     | `number`  | `10`                 |
| *2* | `delay`        | *No*     | `ms`      | `0`                  |
| *3* | `suppress`     | *No*     | `boolean` | `true`               |
| *4* | `run`          | *No*     | `() => T` | `fn.result(orValue)` |

| Return Type  |
|--------------|
| `Promise<T>` |

<p style="text-align: right" align="right"><a href="#errortools"> [↑ Back to <b>ErrorTools</b> ↑] </a></p>

## progressBar
A progress bar that can be used in the terminal.

> NOTE: This is eventually be moved to `swiss-node`

  - [**progressBar**](#progressbar)
    - [printLn](#println)
    - [Options](#options)
    - [**getProgressBar**](#getprogressbar)
      - [update](#update)
      - [next](#next)
      - [set](#set)
      - [reset](#reset)
      - [start](#start)
      - [finish](#finish)
      - [max](#max)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### printLn

```typescript
printLn(...text: any[]): void
progressBar.printLn(...text: any[]): void
```

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

|  #   | Parameter Name | Required | Type    |
|:----:|:---------------|:---------|:--------|
| *0…* | `text`         | *No*     | `any[]` |

| Return Type |
|-------------|
| `void`      |

<p style="text-align: right" align="right"><a href="#progressbar"> [↑ Back to <b>progressBar</b> ↑] </a></p>

### Options

```typescript
ProgressBarOptions;
progressBar.ProgressBarOptions;
```

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

<p style="text-align: right" align="right"><a href="#progressbar"> [↑ Back to <b>progressBar</b> ↑] </a></p>

### getProgressBar

```typescript
getProgressBar(max: number, options: ProgressBarOptions): ProgressBar
progressBar.getProgressBar(max: number, options: ProgressBarOptions): ProgressBar
```

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

|  #  | Parameter Name | Required | Type                 | Default |
|:---:|:---------------|:---------|:---------------------|:--------|
| *0* | `max`          | **Yes**  | `number`             |         |
| *1* | `options`      | *No*     | `ProgressBarOptions` | `{}`    |

| Return Type   |
|---------------|
| `ProgressBar` |

<p style="text-align: right" align="right"><a href="#progressbar"> [↑ Back to <b>progressBar</b> ↑] </a></p>

#### update

```typescript
getProgressBar().update;
```

Trigger the progress bar to update/rerender

<p style="text-align: right" align="right"><a href="#progressbar"> [↑ Back to <b>progressBar</b> ↑] </a></p>

#### next

```typescript
getProgressBar().next;
```

Set the progress bar to the next value

<p style="text-align: right" align="right"><a href="#progressbar"> [↑ Back to <b>progressBar</b> ↑] </a></p>

#### set

```typescript
getProgressBar().set;
```

Set the progress bar to a specific value

<p style="text-align: right" align="right"><a href="#progressbar"> [↑ Back to <b>progressBar</b> ↑] </a></p>

#### reset

```typescript
getProgressBar().reset;
```

Set the progress bar to 0

<p style="text-align: right" align="right"><a href="#progressbar"> [↑ Back to <b>progressBar</b> ↑] </a></p>

#### start

```typescript
getProgressBar().start;
```

Start displaying the progress bar

<p style="text-align: right" align="right"><a href="#progressbar"> [↑ Back to <b>progressBar</b> ↑] </a></p>

#### finish

```typescript
getProgressBar().finish;
```

Stop displaying the progress bar

<p style="text-align: right" align="right"><a href="#progressbar"> [↑ Back to <b>progressBar</b> ↑] </a></p>

#### max

```typescript
getProgressBar().max;
```

Readonly number value of the max value (provided to getProgressBar as first argument)

<p style="text-align: right" align="right"><a href="#progressbar"> [↑ Back to <b>progressBar</b> ↑] </a></p>

## symbols

```typescript
symbols;
```

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

## queue
A way of managing queues from different parts of the code.

  - [**queue**](#queue)
    - [**QueueManager**](#queuemanager)
      - [setDefaultPauseTime](#setdefaultpausetime)
      - [setPauseTime](#setpausetime)
      - [add](#add)
      - [new](#new)
    - [queue](#queue)

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
queue.setDefaultPauseTime(time: number): void
new QueueManager().setDefaultPauseTime(time: number): void
```

Sets the default pause time for pauses between queue items.

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `time`         | **Yes**  | `number` |

| Return Type |
|-------------|
| `void`      |

<p style="text-align: right" align="right"><a href="#queue"> [↑ Back to <b>queue</b> ↑] </a></p>

#### setPauseTime

```typescript
queue.setPauseTime(id: string, time: number): void
new QueueManager().setPauseTime(id: string, time: number): void
```

Sets the pause time for pauses between queue items for the specified queue.

|  #  | Parameter Name | Required | Type     |
|:---:|:---------------|:---------|:---------|
| *0* | `id`           | **Yes**  | `string` |
| *1* | `time`         | **Yes**  | `number` |

| Return Type |
|-------------|
| `void`      |

<p style="text-align: right" align="right"><a href="#queue"> [↑ Back to <b>queue</b> ↑] </a></p>

#### add

```typescript
queue.add(id: string, fn: () => Promise<T>): Promise<T>
new QueueManager().add(id: string, fn: () => Promise<T>): Promise<T>
```

Adds a function to the queue.

|  #  | Parameter Name | Required | Type               |
|:---:|:---------------|:---------|:-------------------|
| *0* | `id`           | **Yes**  | `string`           |
| *1* | `fn`           | **Yes**  | `() => Promise<T>` |

| Return Type  |
|--------------|
| `Promise<T>` |

<p style="text-align: right" align="right"><a href="#queue"> [↑ Back to <b>queue</b> ↑] </a></p>

#### new

```typescript
queue.new(defaultPauseTime: number): QueueManager
new QueueManager().new(defaultPauseTime: number): QueueManager
```

Creates a new QueueManager instance.

|  #  | Parameter Name     | Required | Type     |
|:---:|:-------------------|:---------|:---------|
| *0* | `defaultPauseTime` | *No*     | `number` |

| Return Type    |
|----------------|
| `QueueManager` |

<p style="text-align: right" align="right"><a href="#queue"> [↑ Back to <b>queue</b> ↑] </a></p>

### queue

```typescript
queue;
```

An instance of QueueManager

See QueueManager for more information.

<p style="text-align: right" align="right"><a href="#queue"> [↑ Back to <b>queue</b> ↑] </a></p>

## timer
A debug tool for measuring the duration of code blocks.

  - [**timer**](#timer)
    - [getTimer](#gettimer)
    - [timer](#timer)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

### getTimer

```typescript
getTimer(name: string, verbose: boolean, wrapperFn: any, chalk: any, displayNames: TName): any
```

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

|  #  | Parameter Name | Required | Type      | Default   |
|:---:|:---------------|:---------|:----------|:----------|
| *0* | `name`         | *No*     | `string`  |           |
| *1* | `verbose`      | *No*     | `boolean` | `false`   |
| *2* | `wrapperFn`    | *No*     | `any`     | `noWrap`  |
| *3* | `chalk`        | *No*     | `any`     | `noChalk` |
| *4* | `displayNames` | *No*     | `TName`   |           |

| Return Type |
|-------------|
| `any`       |

<p style="text-align: right" align="right"><a href="#timer"> [↑ Back to <b>timer</b> ↑] </a></p>

### timer

```typescript
timer;
```

Global timer

<p style="text-align: right" align="right"><a href="#timer"> [↑ Back to <b>timer</b> ↑] </a></p>

## Types
Some commonly used typescript types

  - [**Types**](#types)
    - [Partial<T>](#partialt)
    - [KeysOnly<T>](#keysonlyt)
    - [Numbered<T>](#numberedt)
    - [OfType<O, T>](#oftypeo-t)
    - [ObjOfType<T>](#objoftypet)
    - [RemapOf<O, T>](#remapofo-t)

<p style="text-align: right" align="right"><a href="#"> [↑ Back to top ↑] </a></p>

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

> These are used in non-vital personal projects and scripts.

> Need to be better tested before being used in prod.

> Failing/erroring/rejected promises may not behave as expected.

<p style="text-align: right" align="right"><a href="#swiss-ak-swiss-army-knife"> [↑ Back to top ↑] </a></p>
