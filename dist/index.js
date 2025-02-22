var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all2) => {
  for (var name in all2)
    __defProp(target, name, { get: all2[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ArrayTools: () => ArrayTools,
  CENTURY: () => CENTURY,
  ColourTools: () => ColourTools,
  DAY: () => DAY,
  DECADE: () => DECADE,
  ErrorTools: () => ErrorTools,
  HOUR: () => HOUR,
  MILLENNIUM: () => MILLENNIUM,
  MILLISECOND: () => MILLISECOND,
  MINUTE: () => MINUTE,
  MONTH: () => MONTH,
  MathsTools: () => MathsTools,
  ObjectTools: () => ObjectTools,
  PromiseTools: () => PromiseTools,
  QueueManager: () => QueueManager,
  SECOND: () => SECOND,
  StringTools: () => StringTools,
  TimeTools: () => TimeTools,
  WEEK: () => WEEK,
  YEAR: () => YEAR,
  all: () => all,
  allLimit: () => allLimit,
  allLimitObj: () => allLimitObj,
  allObj: () => allObj,
  cachier: () => cachier,
  centuries: () => centuries,
  clx: () => clx,
  create: () => create,
  days: () => days,
  decades: () => decades,
  each: () => each,
  eachLimit: () => eachLimit,
  entries: () => entries,
  everys: () => everys,
  ff: () => ff,
  filled: () => filled,
  filters: () => filters,
  fn: () => fn,
  getDeferred: () => getDeferred,
  getMultiBarManager: () => getMultiBarManager,
  getProgressBar: () => getProgressBar,
  getTimer: () => getTimer,
  group: () => group,
  groupObj: () => groupObj,
  groups: () => groups,
  hours: () => hours,
  interval: () => interval,
  map: () => map,
  mapLimit: () => mapLimit,
  maps: () => maps,
  millenniums: () => millenniums,
  milliseconds: () => milliseconds,
  minutes: () => minutes,
  months: () => months,
  onDemand: () => onDemand,
  partition: () => partition,
  progressBar: () => progressBar,
  queue: () => queue,
  randomise: () => randomise,
  range: () => range,
  reduces: () => reduces,
  repeat: () => repeat,
  retry: () => retry,
  retryOr: () => retryOr,
  reverse: () => reverse,
  roll: () => roll,
  safe: () => safe,
  seconds: () => seconds,
  sortByMapped: () => sortByMapped,
  sortNumberedText: () => sortNumberedText,
  sorts: () => sorts,
  stopInterval: () => stopInterval,
  superscript: () => superscript,
  symbols: () => symbols,
  timer: () => timer,
  times: () => times,
  tryOr: () => tryOr,
  wait: () => wait,
  waitEvery: () => waitEvery,
  waitFor: () => waitFor,
  waitUntil: () => waitUntil,
  waiters: () => waiters,
  weeks: () => weeks,
  years: () => years,
  zip: () => zip,
  zipMax: () => zipMax
});
module.exports = __toCommonJS(src_exports);

// src/tools/safe.ts
var safe;
((safe2) => {
  safe2.num = (input, isInt = false, min, max, fallback = 0) => {
    let result = input;
    if (typeof result !== "number" || result === void 0 || result === null)
      result = fallback;
    if (Number.isNaN(result))
      result = fallback;
    if (isInt)
      result = Math.floor(result);
    if (min !== void 0 && result < min)
      result = min;
    if (max !== void 0 && result > max)
      result = max;
    if (Math.abs(result) === Infinity)
      result = fallback;
    if (min !== void 0 && result < min)
      result = min;
    if (max !== void 0 && result > max)
      result = max;
    return result;
  };
  safe2.str = (input, allowBasicStringify = false, fallback = "") => {
    var _a;
    let result = input;
    if (result === void 0 || result === null)
      result = fallback;
    if (typeof result !== "string") {
      if (allowBasicStringify) {
        if (["number", "boolean", "bigint"].includes(typeof result)) {
          result = result + "";
        } else if (["symbol"].includes(typeof result)) {
          result = (_a = result.toString) == null ? void 0 : _a.call(result);
        } else {
          result = fallback;
        }
      } else {
        result = fallback;
      }
    }
    return result;
  };
  safe2.bool = (input, fallback = false) => {
    let result = input;
    if (result === void 0 || result === null)
      result = fallback;
    if (typeof result !== "boolean") {
      if (result === "true" || result === 1) {
        result = true;
      } else if (result === "false" || result === 0) {
        result = false;
      } else {
        result = fallback;
      }
    }
    return result;
  };
  safe2.func = (input, fallback = () => {
  }) => {
    let result = input;
    if (typeof result !== "function" || result === void 0 || result === null)
      result = fallback;
    return result;
  };
  safe2.obj = (input, allowArrays = false, fallback = {}) => {
    let result = input;
    if (typeof result !== "object" || result === void 0 || result === null)
      result = fallback;
    if (!allowArrays && Array.isArray(result))
      result = fallback;
    return result;
  };
  safe2.objWith = (input, objConfig, allowComposition = true) => {
    const inputObj = safe2.obj(input, true, {});
    const result = allowComposition ? { ...inputObj } : inputObj;
    let isBroken = false;
    Object.entries(objConfig).forEach(([key, propConfig]) => {
      const { fallback, checkFn, safeFn } = propConfig;
      const origValue = inputObj[key];
      let safeValue = origValue ?? fallback;
      if (safeFn) {
        safeValue = safeFn(origValue, fallback);
        result[key] = safeValue;
      }
      if ((checkFn || ((v) => v === void 0))(origValue, fallback)) {
        isBroken = true;
        result[key] = safeValue;
      }
    });
    return result;
  };
  safe2.arr = (input, fallback = [], minLength = 0, maxLength = Infinity) => {
    let result = input;
    if (result === void 0 || result === null)
      result = fallback;
    if (!Array.isArray(result)) {
      const frommed = Array.from(result);
      if (!["string", "number", "boolean", "bigint", "symbol"].includes(typeof result) && Array.isArray(frommed) && frommed.length) {
        result = frommed;
      } else {
        result = fallback;
      }
    }
    if (result.length < minLength)
      result = [...result, ...fallback.slice(result.length)];
    if (result.length > maxLength)
      result = result.slice(0, maxLength);
    return result;
  };
  safe2.prop = (input, fallback = "") => {
    if (typeof input === "number") {
      return safe2.num(input, void 0, void 0, void 0, fallback);
    }
    return safe2.str(input, true, fallback);
  };
  let arrOf;
  ((arrOf2) => {
    arrOf2.num = (input, isInt = false, min, max, fallback, fallbackArr = [], arrMinLength = 0, arrMaxLength = Infinity) => {
      const result = safe2.arr(input, fallbackArr, arrMinLength, arrMaxLength);
      return result.map((item) => safe2.num(item, isInt, min, max, fallback));
    };
    arrOf2.str = (input, allowStringify = false, fallback, fallbackArr = [], arrMinLength = 0, arrMaxLength = Infinity) => {
      const result = safe2.arr(input, fallbackArr, arrMinLength, arrMaxLength);
      return result.map((item) => safe2.str(item, allowStringify, fallback));
    };
    arrOf2.bool = (input, fallback, fallbackArr = [], arrMinLength = 0, arrMaxLength = Infinity) => {
      const result = safe2.arr(input, fallbackArr, arrMinLength, arrMaxLength);
      return result.map((item) => safe2.bool(item, fallback));
    };
    arrOf2.func = (input, fallback, fallbackArr = [], arrMinLength = 0, arrMaxLength = Infinity) => {
      const result = safe2.arr(input, fallbackArr, arrMinLength, arrMaxLength);
      return result.map((item) => safe2.func(item, fallback));
    };
    arrOf2.obj = (input, allowArrays = false, fallback, fallbackArr = [], arrMinLength = 0, arrMaxLength = Infinity) => {
      const result = safe2.arr(input, fallbackArr, arrMinLength, arrMaxLength);
      return result.map((item) => safe2.obj(item, allowArrays, fallback));
    };
    arrOf2.objWith = (input, objConfig, allowComposition = true, fallbackArr = [], arrMinLength = 0, arrMaxLength = Infinity) => {
      const result = safe2.arr(input, fallbackArr, arrMinLength, arrMaxLength);
      return result.map((item) => safe2.objWith(item, objConfig, allowComposition));
    };
    arrOf2.arr = (input, fallback, fallbackArr = [], arrMinLength = 0, arrMaxLength = Infinity) => {
      const result = safe2.arr(input, fallbackArr, arrMinLength, arrMaxLength);
      return result.map((item) => safe2.arr(item, fallback));
    };
    arrOf2.prop = (input, fallback, fallbackArr = [], arrMinLength = 0, arrMaxLength = Infinity) => {
      const result = safe2.arr(input, fallbackArr, arrMinLength, arrMaxLength);
      return result.map((item) => safe2.prop(item, fallback));
    };
  })(arrOf = safe2.arrOf || (safe2.arrOf = {}));
})(safe || (safe = {}));

// src/tools/times.ts
var times;
((times2) => {
  times2.MILLISECOND = 1;
  times2.SECOND = 1e3 * times2.MILLISECOND;
  times2.MINUTE = 60 * times2.SECOND;
  times2.HOUR = 60 * times2.MINUTE;
  times2.DAY = 24 * times2.HOUR;
  times2.WEEK = 7 * times2.DAY;
  times2.MONTH = 30 * times2.DAY;
  times2.YEAR = 365.25 * times2.DAY;
  times2.DECADE = 10 * times2.YEAR;
  times2.CENTURY = 100 * times2.YEAR;
  times2.MILLENNIUM = 1e3 * times2.YEAR;
  times2.milliseconds = (x = 1) => safe.num(x, true);
  times2.seconds = (x = 1) => Math.round(safe.num(x) * times2.SECOND);
  times2.minutes = (x = 1) => Math.round(safe.num(x) * times2.MINUTE);
  times2.hours = (x = 1) => Math.round(safe.num(x) * times2.HOUR);
  times2.days = (x = 1) => Math.round(safe.num(x) * times2.DAY);
  times2.weeks = (x = 1) => Math.round(safe.num(x) * times2.WEEK);
  times2.months = (x = 1) => Math.round(safe.num(x) * times2.MONTH);
  times2.years = (x = 1) => Math.round(safe.num(x) * times2.YEAR);
  times2.decades = (x = 1) => Math.round(safe.num(x) * times2.DECADE);
  times2.centuries = (x = 1) => Math.round(safe.num(x) * times2.CENTURY);
  times2.millenniums = (x = 1) => Math.round(safe.num(x) * times2.MILLENNIUM);
})(times || (times = {}));
var MILLISECOND = times.MILLISECOND;
var SECOND = times.SECOND;
var MINUTE = times.MINUTE;
var HOUR = times.HOUR;
var DAY = times.DAY;
var WEEK = times.WEEK;
var MONTH = times.MONTH;
var YEAR = times.YEAR;
var DECADE = times.DECADE;
var CENTURY = times.CENTURY;
var MILLENNIUM = times.MILLENNIUM;
var milliseconds = times.milliseconds;
var seconds = times.seconds;
var minutes = times.minutes;
var hours = times.hours;
var days = times.days;
var weeks = times.weeks;
var months = times.months;
var years = times.years;
var decades = times.decades;
var centuries = times.centuries;
var millenniums = times.millenniums;

// src/tools/waiters.ts
var waiters;
((waiters2) => {
  waiters2.wait = (time) => new Promise((resolve) => setTimeout(resolve, safe.num(time, true, 0)));
  const PING_RATIO = 0.75;
  const ROUND_AMOUNT = 1.5;
  const getPingDuration = (time, now = Date.now()) => Math.ceil((time - now) * PING_RATIO / ROUND_AMOUNT) * ROUND_AMOUNT;
  waiters2.waitUntil = async (time) => {
    const args = {
      time: safe.num(time, true, 0)
    };
    while (Date.now() < args.time) {
      await waiters2.wait(getPingDuration(args.time));
    }
    return null;
  };
  waiters2.waitFor = async (time) => waiters2.waitUntil(Date.now() + safe.num(time, true, 0));
  const getNextEvery = (timing, offset = 0) => {
    const now = Date.now();
    const result = timing - (now - offset) % timing;
    return result <= 10 ? timing : result;
  };
  waiters2.waitEvery = (timing, offset) => {
    const args = {
      timing: safe.num(timing, true, 0),
      offset: safe.num(offset, true, 0)
    };
    return waiters2.waitFor(getNextEvery(args.timing, args.offset));
  };
  const stopped = [];
  waiters2.stopInterval = (intID) => {
    const args = {
      intID: safe.num(intID, true, 0)
    };
    stopped.push(args.intID);
  };
  waiters2.interval = (action, timing) => {
    const args = {
      action: safe.func(action),
      timing: safe.num(timing, true, 1, void 0, 1)
    };
    const intID = safe.num(Math.floor(Math.random() * Math.pow(10, 10)), true, 0);
    let count = 0;
    const run = async () => {
      await waiters2.waitEvery(args.timing);
      if (stopped.includes(intID)) {
        return;
      }
      args.action(intID, ++count);
      run();
    };
    run();
    return intID;
  };
})(waiters || (waiters = {}));
var wait = waiters.wait;
var waitUntil = waiters.waitUntil;
var waitFor = waiters.waitFor;
var waitEvery = waiters.waitEvery;
var stopInterval = waiters.stopInterval;
var interval = waiters.interval;

// src/tools/ArrayTools.ts
var ArrayTools;
((ArrayTools2) => {
  ArrayTools2.create = (length = 1, value = 1) => {
    const args = {
      length: safe.num(length, true, 0),
      value
    };
    return new Array(args.length).fill(args.value);
  };
  ArrayTools2.filled = (length = 1, value) => {
    const args = {
      length: safe.num(length, true, 0),
      value
    };
    return new Array(args.length).fill(args.value);
  };
  ArrayTools2.range = (length = 1, multiplier = 1, offset = 0) => {
    const args = {
      length: safe.num(length, true, 0),
      multiplier: safe.num(multiplier),
      offset: safe.num(offset)
    };
    return ArrayTools2.create(length, 1).map((v, i) => MathsTools.fixFloat(i * args.multiplier) + args.offset);
  };
  const zipFn = (length, arrs) => ArrayTools2.range(length).map((i) => arrs.map((arr) => (arr || [])[i]));
  ArrayTools2.zip = (...arrs) => {
    const input = safe.arrOf.arr(arrs);
    return zipFn(Math.min(...(input.length ? input : [[]]).map((arr) => (arr || []).length)), input);
  };
  ArrayTools2.zipMax = (...arrs) => {
    const input = safe.arr(arrs).map((arr) => safe.arr(arr));
    return zipFn(Math.max(...(input.length ? input : [[]]).map((arr) => (arr || []).length)), input);
  };
  ArrayTools2.sortByMapped = (arr, mapFn, sortFn = fn.asc) => {
    const args = {
      arr: safe.arr(arr),
      mapFn: safe.func(mapFn, fn.noact),
      sortFn: safe.func(sortFn, fn.asc)
    };
    return ArrayTools2.zip(args.arr, args.arr.map(args.mapFn)).sort((a, b) => args.sortFn(a[1], b[1])).map(([v]) => v);
  };
  ArrayTools2.randomise = (arr) => {
    const input = safe.arr(arr);
    return ArrayTools2.sortByMapped(input, () => Math.random());
  };
  ArrayTools2.reverse = (arr) => {
    const input = safe.arr(arr);
    return [...input].reverse();
  };
  ArrayTools2.entries = (arr) => {
    const input = safe.arr(arr);
    return ArrayTools2.zip(ArrayTools2.range(input.length), input);
  };
  ArrayTools2.repeat = (maxLength, ...items) => {
    const args = {
      maxLength: safe.num(maxLength, true, 0),
      items: safe.arr(items)
    };
    const simple = ArrayTools2.create(args.maxLength, args.items[0]);
    return args.items.length === 1 ? simple : simple.map((v, i) => args.items[i % args.items.length]);
  };
  ArrayTools2.roll = (distance, arr) => {
    const args = {
      distance: safe.num(distance, true),
      arr: safe.arr(arr)
    };
    return [...args.arr.slice(args.distance % args.arr.length), ...args.arr.slice(0, args.distance % args.arr.length)];
  };
  ArrayTools2.sortNumberedText = (texts, ignoreCase = true) => {
    const args = {
      texts: safe.arrOf.str(texts),
      ignoreCase: safe.bool(ignoreCase)
    };
    return ArrayTools2.sortByMapped(args.texts, utils.partitionNums(args.ignoreCase), (a, b) => {
      for (let i in a) {
        const result = fn.asc(a[i], b[i]);
        if (result !== 0)
          return result;
      }
      return 0;
    });
  };
  ArrayTools2.partition = (array, partitionSize = Math.ceil(array.length / 2)) => {
    const args = {
      array: safe.arr(array),
      partitionSize: safe.num(partitionSize, true, 1)
    };
    const numParts = Math.ceil(args.array.length / args.partitionSize);
    const result = [];
    for (let i = 0; i < numParts; i++) {
      result.push(args.array.slice(i * args.partitionSize, (i + 1) * args.partitionSize));
    }
    return result;
  };
  ArrayTools2.groupObj = (array, mapFn) => {
    const args = {
      array: safe.arr(array),
      mapFn: safe.func(mapFn, fn.noact)
    };
    const result = {};
    args.array.forEach((item, index) => {
      const key = args.mapFn(item, index, args.array);
      if (key === void 0)
        return;
      if (!result[key])
        result[key] = [];
      result[key].push(item);
    });
    return result;
  };
  ArrayTools2.group = (array, mapFn) => {
    const args = {
      array: safe.arr(array),
      mapFn: safe.func(mapFn, fn.noact)
    };
    const obj = ArrayTools2.groupObj(args.array, args.mapFn);
    return Object.values(obj);
  };
  ArrayTools2.findAndRemove = (array, predicate, ...insertItems) => {
    const args = {
      array: safe.arr(array),
      predicate: safe.func(predicate, () => false),
      insertItems: safe.arr(insertItems)
    };
    const index = args.array.findIndex(args.predicate);
    if (index === -1)
      return void 0;
    return args.array.splice(index, 1, ...args.insertItems)[0];
  };
  ArrayTools2.findLastAndRemove = (array, predicate, ...insertItems) => {
    const args = {
      array: safe.arr(array),
      predicate: safe.func(predicate, () => false),
      insertItems: safe.arr(insertItems)
    };
    const reverseIndex = ArrayTools2.reverse(args.array).findIndex(args.predicate);
    const index = reverseIndex === -1 ? -1 : args.array.length - 1 - reverseIndex;
    if (index === -1)
      return void 0;
    return args.array.splice(index, 1, ...args.insertItems)[0];
  };
  ArrayTools2.filterAndRemove = (array, predicate) => {
    const args = {
      array: safe.arr(array),
      predicate: safe.func(predicate, () => false)
    };
    const result = args.array.filter(args.predicate);
    result.forEach((item) => {
      ArrayTools2.findAndRemove(args.array, (i) => i === item);
    });
    return result;
  };
  let utils;
  ((utils2) => {
    utils2.isNumString = (text) => {
      const input = safe.str(text);
      return Boolean(input.match(/^[0-9-.]+$/));
    };
    utils2.partitionNums = (ignoreCase) => {
      const ignoreCaseSafe = safe.bool(ignoreCase);
      return (name) => {
        const args = {
          ignoreCase: ignoreCaseSafe,
          name: safe.str(name, true)
        };
        const baseStr = args.ignoreCase ? args.name.toLowerCase() : args.name;
        return baseStr.split(/([0-9]+)/).map((s) => utils2.isNumString(s) ? Number(s) : s).filter((s) => s !== "");
      };
    };
  })(utils = ArrayTools2.utils || (ArrayTools2.utils = {}));
})(ArrayTools || (ArrayTools = {}));
var create = ArrayTools.create;
var filled = ArrayTools.filled;
var range = ArrayTools.range;
var zip = ArrayTools.zip;
var zipMax = ArrayTools.zipMax;
var sortByMapped = ArrayTools.sortByMapped;
var randomise = ArrayTools.randomise;
var reverse = ArrayTools.reverse;
var entries = ArrayTools.entries;
var repeat = ArrayTools.repeat;
var roll = ArrayTools.roll;
var sortNumberedText = ArrayTools.sortNumberedText;
var partition = ArrayTools.partition;
var groupObj = ArrayTools.groupObj;
var group = ArrayTools.group;

// src/tools/MathsTools.ts
var MathsTools;
((MathsTools2) => {
  MathsTools2.fixFloat = (num, precision = 6) => {
    const args = {
      num: safe.num(num),
      precision: safe.num(precision, true, 0)
    };
    return Math.round(args.num * Math.pow(10, args.precision)) / Math.pow(10, args.precision);
  };
  MathsTools2.ff = MathsTools2.fixFloat;
  MathsTools2.addAll = (...nums) => {
    const args = {
      nums: safe.arrOf.num(nums, false, void 0, void 0, 0, [0], 1)
    };
    return args.nums.reduce((acc, num) => acc + num, 0);
  };
  MathsTools2.floorTo = (to, value) => {
    const args = {
      to: safe.num(to),
      value: safe.num(value)
    };
    return MathsTools2.fixFloat(Math.floor(args.value / args.to) * args.to);
  };
  MathsTools2.roundTo = (to, value) => {
    const args = {
      to: safe.num(to),
      value: safe.num(value)
    };
    return MathsTools2.fixFloat(Math.round(args.value / args.to) * args.to);
  };
  MathsTools2.ceilTo = (to, value) => {
    const args = {
      to: safe.num(to),
      value: safe.num(value)
    };
    return MathsTools2.fixFloat(Math.ceil(args.value / args.to) * args.to);
  };
  let round;
  ((round2) => {
    round2.floorTo = MathsTools2.floorTo;
    round2.roundTo = MathsTools2.roundTo;
    round2.ceilTo = MathsTools2.ceilTo;
    round2.to = MathsTools2.roundTo;
  })(round = MathsTools2.round || (MathsTools2.round = {}));
  MathsTools2.lerp = (progress, fromVal, toVal) => {
    const args = {
      progress: safe.num(progress),
      fromVal: safe.num(fromVal),
      toVal: safe.num(toVal)
    };
    return MathsTools2.fixFloat(args.fromVal + (args.toVal - args.fromVal) * args.progress);
  };
  MathsTools2.lerpArray = (progress, fromArr, toArr) => {
    const args = {
      progress: safe.num(progress),
      fromArr: safe.arrOf.num(fromArr),
      toArr: safe.arrOf.num(toArr)
    };
    return ArrayTools.zip(args.fromArr, args.toArr).map(([fromVal, toVal]) => MathsTools2.lerp(args.progress, fromVal, toVal));
  };
  MathsTools2.lerpObj = (progress, fromObj, toObj) => {
    const args = {
      progress: safe.num(progress),
      fromObj: safe.obj(fromObj),
      toObj: safe.obj(toObj)
    };
    const entries2 = Object.entries(args.fromObj);
    const lerped = entries2.map(
      ([key, fromVal]) => typeof fromVal === "number" ? [key, MathsTools2.lerp(args.progress, fromVal, args.toObj[key])] : [key, fromVal]
    );
    return Object.fromEntries(lerped);
  };
  MathsTools2.clamp = (value, min, max) => {
    const args = {
      value: safe.num(value),
      min: safe.num(min),
      max: safe.num(max)
    };
    const realMin = Math.min(args.min, args.max);
    const realMax = Math.max(args.min, args.max);
    return Math.max(realMin, Math.min(args.value, realMax));
  };
  MathsTools2.getOrdinal = (num = 0) => {
    const args = {
      num: safe.num(num)
    };
    const lastDigit = Math.abs(args.num) % 10;
    const isDecimal = args.num % 1 !== 0;
    if (isDecimal) {
      return "th";
    }
    if ([11, 12, 13].includes(args.num)) {
      return "th";
    }
    if (lastDigit === 1) {
      return "st";
    }
    if (lastDigit === 2) {
      return "nd";
    }
    if (lastDigit === 3) {
      return "rd";
    }
    return "th";
  };
})(MathsTools || (MathsTools = {}));
var ff = MathsTools.fixFloat;

// src/tools/fn.ts
var fn;
((fn2) => {
  fn2.noop = () => {
  };
  fn2.noact = (item) => item;
  fn2.result = (item) => () => item;
  fn2.resolve = (item) => () => Promise.resolve(item);
  fn2.reject = (item) => () => Promise.reject(item);
  fn2.exists = (item) => item !== void 0 && item !== null;
  fn2.isTruthy = (item) => Boolean(item);
  fn2.isFalsy = (item) => !Boolean(item);
  fn2.isEmpty = (item) => Boolean(!item || !item.length);
  fn2.isNotEmpty = (item) => Boolean(item && item.length);
  fn2.isEqual = (item) => (other) => Boolean(item === other);
  fn2.isNotEqual = (item) => (other) => Boolean(item !== other);
  fn2.dedupe = (item, index, array2) => array2.indexOf(item) === index;
  fn2.dedupeMapped = (mapFn) => {
    const args = {
      mapFn: safe.func(mapFn, (v) => v)
    };
    let mapped;
    return (item, index, array2) => {
      if (!mapped)
        mapped = array2.map(args.mapFn);
      return mapped.indexOf(mapped[index]) === index;
    };
  };
  fn2.toString = (item) => item + "";
  fn2.toNumber = (item) => Number(item);
  fn2.toBool = (item) => item !== "false" && Boolean(item);
  fn2.toProp = (prop) => {
    const args1 = {
      prop: safe.prop(prop, "")
    };
    return (item) => {
      const args = {
        item: safe.obj(item, true),
        ...args1
      };
      return args.item && args.item[args.prop];
    };
  };
  fn2.toFixed = (precision) => {
    const args1 = {
      precision: safe.num(precision, true, 0)
    };
    return (num) => {
      const args = {
        num: safe.num(num, false),
        ...args1
      };
      return MathsTools.fixFloat(args.num, args.precision);
    };
  };
  fn2.asc = (a, b) => {
    if (a < b)
      return -1;
    if (b < a)
      return 1;
    return 0;
  };
  fn2.desc = (a, b) => {
    if (a < b)
      return 1;
    if (b < a)
      return -1;
    return 0;
  };
  fn2.byProp = (propName, sortFn = fn2.asc) => {
    const args = {
      propName: safe.prop(propName, ""),
      sortFn: safe.func(sortFn, fn2.asc)
    };
    return (a, b) => args.sortFn(a[args.propName], b[args.propName]);
  };
  fn2.nearestTo = (target) => (a, b) => {
    const diffA = Math.abs(Number(target) - Number(a));
    const diffB = Math.abs(Number(target) - Number(b));
    return (Number.isNaN(diffA) ? Infinity : diffA) - (Number.isNaN(diffB) ? Infinity : diffB);
  };
  fn2.furthestFrom = (target) => (a, b) => {
    const diffA = Math.abs(Number(target) - Number(a));
    const diffB = Math.abs(Number(target) - Number(b));
    return (Number.isNaN(diffB) ? Infinity : diffB) - (Number.isNaN(diffA) ? Infinity : diffA);
  };
  fn2.array = (sortFn = fn2.asc) => (a, b) => {
    for (let i in a) {
      const result2 = sortFn(a[i], b[i]);
      if (result2 !== 0)
        return result2;
    }
    return 0;
  };
  fn2.arrayAsc = fn2.array(fn2.asc);
  fn2.arrayDesc = fn2.array(fn2.desc);
  fn2.combine = (a, b) => a + b;
  fn2.combineProp = (propName) => {
    const args = {
      propName: safe.prop(propName, "")
    };
    return (a, b) => (a[args.propName] ?? a) + b[args.propName];
  };
  fn2.mode = (prev, curr, index, arr) => {
    if (index > 1) {
      return prev;
    }
    const unique = arr.filter(fn2.dedupe);
    const counts = unique.map((item) => arr.filter((i) => i === item)).map((a) => a.length);
    const max = Math.max(...counts);
    return unique[counts.indexOf(max)];
  };
  fn2.modeMapped = (mapFn) => {
    const args = {
      mapFn: safe.func(mapFn, (v) => v)
    };
    let result2;
    return (prev, curr, index, arr) => {
      if (result2)
        return result2;
      const mapped = arr.map(args.mapFn);
      const uniqueU = mapped.filter(fn2.dedupe);
      const uniqueT = arr.filter(fn2.dedupeMapped(args.mapFn));
      const counts = uniqueU.map((item) => mapped.filter((i) => i === item)).map((a) => a.length);
      const max = Math.max(...counts);
      result2 = uniqueT[counts.indexOf(max)];
      return result2;
    };
  };
  fn2.isAllEqual = (val, i, arr) => {
    const args = {
      val,
      i: safe.num(i, true, 0),
      arr: safe.arr(arr)
    };
    return args.val === args.arr[0];
  };
  fn2.isUnique = (val, i, arr) => {
    const args = {
      val,
      i: safe.num(i, true, 0),
      arr: safe.arr(arr)
    };
    return args.arr.indexOf(args.val) === args.i;
  };
  fn2.bySize = (size) => {
    const args = {
      size: safe.num(size, true, 1)
    };
    return (value, index, array2) => Math.floor(index / args.size);
  };
  fn2.byNumGroups = (numGroups) => {
    const args = {
      numGroups: safe.num(numGroups, true, 1)
    };
    let size = null;
    let remainder = null;
    return (value, index, array2) => {
      if (size === null) {
        size = Math.ceil(array2.length / args.numGroups);
        remainder = array2.length % args.numGroups;
      }
      const largeGroup = Math.floor(index / size);
      if (largeGroup < remainder || remainder === 0)
        return largeGroup;
      return remainder + Math.floor((index - size * remainder) / (size - 1));
    };
  };
  let filters2;
  ((filters3) => {
    filters3.exists = fn2.exists;
    filters3.isTruthy = fn2.isTruthy;
    filters3.isFalsy = fn2.isFalsy;
    filters3.isEmpty = fn2.isEmpty;
    filters3.isNotEmpty = fn2.isNotEmpty;
    filters3.isEqual = fn2.isEqual;
    filters3.isNotEqual = fn2.isNotEqual;
    filters3.dedupe = fn2.dedupe;
    filters3.dedupeMapped = fn2.dedupeMapped;
  })(filters2 = fn2.filters || (fn2.filters = {}));
  let maps2;
  ((maps3) => {
    maps3.toString = fn2.toString;
    maps3.toNumber = fn2.toNumber;
    maps3.toBool = fn2.toBool;
    maps3.toProp = fn2.toProp;
    maps3.toFixed = fn2.toFixed;
  })(maps2 = fn2.maps || (fn2.maps = {}));
  let sorts2;
  ((sorts3) => {
    sorts3.asc = fn2.asc;
    sorts3.desc = fn2.desc;
    sorts3.byProp = fn2.byProp;
    sorts3.nearestTo = fn2.nearestTo;
    sorts3.furthestFrom = fn2.furthestFrom;
    sorts3.array = fn2.array;
    sorts3.arrayAsc = fn2.arrayAsc;
    sorts3.arrayDesc = fn2.arrayDesc;
  })(sorts2 = fn2.sorts || (fn2.sorts = {}));
  let reduces2;
  ((reduces3) => {
    reduces3.combine = fn2.combine;
    reduces3.combineProp = fn2.combineProp;
    reduces3.mode = fn2.mode;
    reduces3.modeMapped = fn2.modeMapped;
  })(reduces2 = fn2.reduces || (fn2.reduces = {}));
  let everys2;
  ((everys3) => {
    everys3.isAllEqual = fn2.isAllEqual;
    everys3.isUnique = fn2.isUnique;
  })(everys2 = fn2.everys || (fn2.everys = {}));
  let groups2;
  ((groups3) => {
    groups3.bySize = fn2.bySize;
    groups3.byNumGroups = fn2.byNumGroups;
  })(groups2 = fn2.groups || (fn2.groups = {}));
})(fn || (fn = {}));
var filters = fn.filters;
var maps = fn.maps;
var sorts = fn.sorts;
var reduces = fn.reduces;
var everys = fn.everys;
var groups = fn.groups;

// src/tools/TimeTools.ts
var units = [
  {
    value: MILLENNIUM,
    short: { singular: "mill", plural: "mills" },
    long: { singular: " millennium", plural: " millenniums" }
  },
  {
    value: CENTURY,
    short: { singular: "cent", plural: "cents" },
    long: { singular: " century", plural: " centuries" }
  },
  {
    value: YEAR,
    short: { singular: "y", plural: "y" },
    long: { singular: " year", plural: " years" }
  },
  {
    value: MONTH,
    short: { singular: "mon", plural: "mons" },
    long: { singular: " month", plural: " months" }
  },
  {
    value: DAY,
    short: { singular: "d", plural: "d" },
    long: { singular: " day", plural: " days" }
  },
  {
    value: HOUR,
    short: { singular: "h", plural: "h" },
    long: { singular: " hour", plural: " hours" }
  },
  {
    value: MINUTE,
    short: { singular: "m", plural: "m" },
    long: { singular: " minute", plural: " minutes" }
  },
  {
    value: SECOND,
    short: { singular: "s", plural: "s" },
    long: { singular: " second", plural: " seconds" }
  },
  {
    value: MILLISECOND,
    short: { singular: "ms", plural: "ms" },
    long: { singular: " millisecond", plural: " milliseconds" }
  }
];
var TimeTools;
((TimeTools2) => {
  TimeTools2.toReadableDuration = (duration, longNames = false, maxUnits = 3) => {
    const args = {
      duration: safe.num(duration, true),
      longNames: safe.bool(longNames, false),
      maxUnits: safe.num(maxUnits, true, 1, void 0, 3)
    };
    if (args.duration === 0)
      return "";
    const allUnitValues = units.map((unit, index) => {
      var _a;
      const previousUnitValue = ((_a = units[index - 1]) == null ? void 0 : _a.value) ?? Infinity;
      const amount = Math.floor(Math.abs(args.duration) % previousUnitValue / unit.value);
      return { amount, unit };
    }).filter(({ amount }) => amount > 0);
    const results = allUnitValues.slice(0, args.maxUnits).map(({ amount, unit }) => {
      const labelObj = args.longNames ? unit.long : unit.short;
      const label = amount > 1 ? labelObj.plural : labelObj.singular;
      return `${amount}${label}`;
    });
    if (args.longNames) {
      if (results.length <= 1) {
        return results.join("");
      }
      return [...results.slice(0, -1), "&&&&", ...results.slice(-1)].join(", ").replace("&&&&,", "&").replace(", &", " &");
    }
    return results.join(" ");
  };
})(TimeTools || (TimeTools = {}));

// src/tools/timer.ts
var dim = (text) => `\x1B[2m${text}\x1B[22m`;
var bold = (text) => `\x1B[1m${text}\x1B[22m`;
var colr = {
  dark: {
    white: (text) => `\x1B[37m${text}\x1B[39m`
  }
};
var getTimer = (name, verbose = false, wrapperFn = colr.dark.white, displayNames) => {
  const args = {
    name: safe.str(name),
    verbose: safe.bool(verbose, false),
    wrapperFn: safe.func(wrapperFn, colr.dark.white),
    displayNames: safe.obj(displayNames)
  };
  const startTimes = {};
  const endTimes = {};
  let dispNames = {
    ...args.displayNames || {}
  };
  const names = Object.fromEntries(Object.keys(dispNames).map((key) => [key, key]));
  const getDuration = (label) => {
    if (!startTimes[label])
      return 0;
    const start = startTimes[label];
    const end = endTimes[label] || Date.now();
    return end - start;
  };
  const getLogLine = (label, prefix = "", nameColLength = 0, duration = getDuration(label)) => {
    const lineStart = `${dispNames[label] || label}: `.padEnd(nameColLength + 1, " ");
    const lineEnd = `${TimeTools.toReadableDuration(duration, false, 4)}`;
    const line = bold(prefix + lineStart) + lineEnd;
    return {
      line: args.wrapperFn(line),
      width: (prefix + lineStart + lineEnd).replace("	", "").length
    };
  };
  startTimes.TOTAL = Date.now();
  return {
    ...names,
    start(...labels) {
      const args2 = {
        labels: safe.arrOf.str(labels)
      };
      for (let label of args2.labels) {
        startTimes[label] = Date.now();
      }
    },
    end(...labels) {
      const args2 = {
        labels: safe.arrOf.str(labels)
      };
      for (let label of args2.labels) {
        endTimes[label] = Date.now();
        if (args.verbose) {
          console.log(getLogLine(label) + "\n");
        }
      }
    },
    switch(endLabel, startLabel) {
      const args2 = {
        endLabel: endLabel instanceof Array ? safe.arrOf.str(endLabel) : safe.str(endLabel),
        startLabel: startLabel instanceof Array ? safe.arrOf.str(startLabel) : safe.str(startLabel)
      };
      if (args2.endLabel)
        this.end(...[args2.endLabel].flat());
      if (args2.startLabel)
        this.start(...[args2.startLabel].flat());
    },
    getTable(prefix, customEntries) {
      const args2 = {
        prefix: safe.str(prefix),
        customEntries: customEntries instanceof Array ? safe.arrOf.func(customEntries) : safe.obj(customEntries)
      };
      const output = [];
      const addOutput = (...args3) => {
        output.push(args3.join(" "));
      };
      const addLogLine = (label, prefix2, nameColLength2, duration) => {
        const result = getLogLine(label, prefix2, nameColLength2, duration);
        addOutput(result.line);
        return result.width;
      };
      const labels = Object.keys(startTimes);
      addOutput("");
      addOutput(args.wrapperFn(bold([args2.prefix, args.name, "Times:"].filter((x) => x && x.trim()).join(" "))));
      const displayNames2 = [...labels, ...Object.keys(names)].map((label) => dispNames[label] || label);
      const nameColLength = Math.max(...displayNames2.map((text) => `${text}: `.length));
      let longest = 0;
      for (let label of labels) {
        if (label !== "TOTAL") {
          longest = Math.max(longest, addLogLine(label, "	", nameColLength));
        }
      }
      if (args2.customEntries) {
        const durations = Object.fromEntries(labels.map((label) => [label, getDuration(label)]));
        let cEntries = [];
        if (args2.customEntries instanceof Array) {
          cEntries = args2.customEntries.map((func) => func(durations)).map((obj) => ({ ...obj, duration: obj.duration || (obj.end || Date.now()) - (obj.start || Date.now()) }));
        } else {
          cEntries = Object.entries(args2.customEntries).map(([label, func]) => ({ label, duration: (func || (() => 0))(durations) || 0 }));
        }
        if (cEntries.length) {
          addOutput(args.wrapperFn(dim("	" + "\u23AF".repeat(longest))));
          for (let { label, duration } of cEntries) {
            addLogLine(label, "	", nameColLength, duration);
          }
        }
      }
      addOutput(args.wrapperFn(dim("	" + "\u23AF".repeat(longest))));
      addLogLine("TOTAL", "	", nameColLength);
      addOutput("");
      return output.join("\n");
    },
    log(prefix, customEntries) {
      const args2 = {
        prefix: safe.str(prefix),
        customEntries: customEntries instanceof Array ? safe.arrOf.func(customEntries) : safe.obj(customEntries)
      };
      const table = this.getTable(args2.prefix, args2.customEntries);
      console.log(table);
      let lc = table.split("\n").length;
      return lc;
    },
    reset() {
      Object.keys(startTimes).forEach((key) => {
        delete startTimes[key];
      });
      Object.keys(endTimes).forEach((key) => {
        delete endTimes[key];
      });
      startTimes.TOTAL = Date.now();
    },
    getDuration,
    names,
    displayNames: dispNames,
    startTimes,
    endTimes
  };
};
var timer = getTimer();

// src/utils/optionUtils.ts
var option = (value, deflt, safeFn) => value !== void 0 ? safeFn(value, deflt) : deflt;
var optionalOption = (value, deflt, safeFn) => value !== void 0 ? safeFn(value, deflt) : void 0;

// src/tools/ObjectTools.ts
var ObjectTools;
((ObjectTools2) => {
  ObjectTools2.remodel = (obj, func) => {
    const args = {
      obj: safe.obj(obj),
      func: safe.func(func, (entries2) => entries2)
    };
    return Object.fromEntries(args.func(Object.entries(args.obj)) ?? Object.entries(args.obj));
  };
  ObjectTools2.remodelEach = (obj, func) => {
    const args = {
      obj: safe.obj(obj),
      func: safe.func(func, (entry) => entry)
    };
    return Object.fromEntries(Object.entries(args.obj).map((entry, index, entries2) => args.func(entry, index, entries2) ?? entry));
  };
  ObjectTools2.map = (obj, func) => {
    const args = {
      obj: safe.obj(obj),
      func: safe.func(func, (key, value) => [key, value])
    };
    return ObjectTools2.remodel(args.obj, (entries2) => entries2.map(([key, value], index) => args.func(key, value, index)));
  };
  ObjectTools2.mapValues = (obj, func) => {
    const args = {
      obj: safe.obj(obj),
      func: safe.func(func, (key, value) => value)
    };
    return ObjectTools2.remodel(args.obj, (entries2) => entries2.map(([key, value], index) => [key, args.func(key, value, index)]));
  };
  ObjectTools2.mapKeys = (obj, func) => {
    const args = {
      obj: safe.obj(obj),
      func: safe.func(func, (key) => key)
    };
    return ObjectTools2.remodel(args.obj, (entries2) => entries2.map(([key, value], index) => [args.func(key, value, index), value]));
  };
  ObjectTools2.filter = (obj, func) => {
    const args = {
      obj: safe.obj(obj),
      func: safe.func(func, () => true)
    };
    return ObjectTools2.remodel(args.obj, (entries2) => entries2.filter(([key, value], index) => args.func(key, value, index)));
  };
  ObjectTools2.clean = (obj) => {
    const args = {
      obj: safe.obj(obj)
    };
    return ObjectTools2.filter(args.obj, (key, value) => value !== void 0);
  };
  ObjectTools2.invert = (obj) => {
    const args = {
      obj: safe.obj(obj)
    };
    return ObjectTools2.remodelEach(args.obj, ([key, value]) => {
      var _a;
      const newKey = ((_a = value == null ? void 0 : value.toString) == null ? void 0 : _a.call(value)) ?? value + "";
      return [newKey, key];
    });
  };
})(ObjectTools || (ObjectTools = {}));

// src/tools/progressBar.ts
var progressBar;
((progressBar2) => {
  const getCharWidth = (num, max, width) => Math.round(width * (Math.max(0, Math.min(num / max, 1)) / 1));
  const getBarString = (current, max, width, opts) => {
    const { progChar, emptyChar, startChar, endChar, showCurrent, currentChar } = opts;
    const numProgChars = getCharWidth(current, max, width);
    const numNextChars = getCharWidth(current + 1, max, width);
    const numCurrentChars = showCurrent ? numNextChars - numProgChars : 0;
    const numEmptyChars = width - numProgChars - numCurrentChars;
    const prog = opts.barProgWrapFn(progChar.repeat(numProgChars));
    const curr = opts.barCurrentWrapFn(currentChar.repeat(numCurrentChars));
    const empt = opts.barEmptyWrapFn(emptyChar.repeat(numEmptyChars));
    const body = opts.barWrapFn(`${prog}${curr}${empt}`);
    return `${startChar}${body}${endChar}`;
  };
  const getSuffix = (current, maxNum, isMaxKnown, opts) => {
    let plainItems = [];
    let wrappedItems = [];
    if (opts.showCount) {
      const pad = Math.max(maxNum.toString().length, opts.countWidth);
      const countSuff = `[${current.toString().padStart(pad, " ")} / ${(isMaxKnown ? maxNum.toString() : "?").padStart(pad, " ")}]`;
      plainItems.push(countSuff);
      wrappedItems.push(opts.countWrapFn(countSuff));
    }
    if (opts.showPercent) {
      const percent = Math.round(current / Math.max(1, maxNum) * 100);
      const percentSuff = `(${percent.toString().padStart("100".toString().length, " ")}%)`;
      plainItems.push(percentSuff);
      wrappedItems.push(opts.percentWrapFn(percentSuff));
    }
    const plain = plainItems.filter((x) => x).join(" ");
    const wrapped = wrappedItems.filter((x) => x).join(" ");
    return [plain.length ? " " + plain : "", wrapped.length ? " " + wrapped : ""];
  };
  progressBar2.getProgressBar = (max, options = {}) => {
    const args = {
      max: safe.num(max, true, -1, void 0, -1),
      options: safe.obj(options, false, {})
    };
    const originalOpts = progressBar2.getFullOptions(args.options);
    let opts = originalOpts;
    let managerPackage = void 0;
    let current = 0;
    let finished = false;
    const isMaxKnown = args.max !== -1;
    const getBar = (applyWrap = false) => {
      const [suffix, suffixWrapped] = getSuffix(current, args.max, isMaxKnown, opts);
      const idealMinBarWidth = Math.min(5, opts.maxWidth - [suffix, opts.startChar, opts.endChar].join("").length);
      const maxPrefixWidth = opts.maxPrefixWidth !== Infinity ? opts.maxPrefixWidth : opts.maxWidth - ([suffix, opts.startChar, opts.endChar].join("").length + idealMinBarWidth);
      const fullPrefix = opts.prefix.padEnd(opts.prefixWidth).substring(0, maxPrefixWidth);
      const barString = getBarString(
        current,
        Math.max(1, args.max),
        Math.max(0, opts.maxWidth - [fullPrefix, suffix, opts.startChar, opts.endChar].join("").length),
        opts
      );
      const output = `${opts.prefixWrapFn(fullPrefix)}${barString}${suffixWrapped}`;
      if (applyWrap)
        return opts.wrapperFn(output);
      return output;
    };
    const update = () => {
      const output = getBar(true);
      if (managerPackage) {
        managerPackage.onUpdate(output);
      } else {
        if (opts.print)
          opts.printFn(output);
      }
      return output;
    };
    const next = () => {
      if (finished)
        return "";
      current++;
      if (managerPackage) {
        managerPackage.onNext(current);
      }
      return update();
    };
    const set = (newCurrent) => {
      const args2 = {
        newCurrent: safe.num(newCurrent, true, 0, void 0)
      };
      if (finished)
        return "";
      current = args2.newCurrent;
      if (managerPackage) {
        managerPackage.onSet(args2.newCurrent);
      }
      return update();
    };
    const reset = () => {
      return set(0);
    };
    const start = () => {
      if (finished)
        return "";
      if (managerPackage) {
        managerPackage.onStart();
      } else {
        if (opts.print)
          opts.printFn();
      }
      return update();
    };
    const finish = () => {
      finished = true;
      const output = update();
      if (managerPackage) {
        managerPackage.onFinish();
      } else {
        if (opts.print)
          opts.printFn();
      }
      return output;
    };
    const _registerManager = (pack, overrideOptions) => {
      managerPackage = pack;
      if (Object.keys(overrideOptions).length) {
        opts = progressBar2.getFullOptions({
          ...originalOpts,
          ...overrideOptions
        });
      }
      return opts;
    };
    const _unregisterManager = (pack) => {
      managerPackage = void 0;
      opts = originalOpts;
    };
    return {
      next,
      set,
      reset,
      getBar,
      update,
      start,
      finish,
      max: args.max === -1 ? void 0 : args.max,
      _registerManager,
      _unregisterManager
    };
  };
  progressBar2.getFullOptions = (opts = {}) => {
    var _a;
    return {
      prefix: option(opts.prefix, "", (v, dflt) => safe.str(v, true, dflt)),
      prefixWidth: option(opts.prefixWidth, 0, (v, dflt) => safe.num(v, true, 0, void 0, dflt)),
      maxPrefixWidth: option(opts.maxPrefixWidth, Infinity, (v, dflt) => safe.num(v, true, 0, void 0, dflt)),
      maxWidth: option(
        opts.maxWidth,
        ((_a = process == null ? void 0 : process.stdout) == null ? void 0 : _a.columns) !== void 0 ? process.stdout.columns : 100,
        (v, dflt) => safe.num(v, true, 0, void 0, dflt)
      ),
      wrapperFn: option(opts.wrapperFn, fn.noact, (v, dflt) => safe.func(v, dflt)),
      barWrapFn: option(opts.barWrapFn, fn.noact, (v, dflt) => safe.func(v, dflt)),
      barProgWrapFn: option(opts.barProgWrapFn, fn.noact, (v, dflt) => safe.func(v, dflt)),
      barCurrentWrapFn: option(opts.barCurrentWrapFn, fn.noact, (v, dflt) => safe.func(v, dflt)),
      barEmptyWrapFn: option(opts.barEmptyWrapFn, fn.noact, (v, dflt) => safe.func(v, dflt)),
      prefixWrapFn: option(opts.prefixWrapFn, fn.noact, (v, dflt) => safe.func(v, dflt)),
      countWrapFn: option(opts.countWrapFn, fn.noact, (v, dflt) => safe.func(v, dflt)),
      percentWrapFn: option(opts.percentWrapFn, fn.noact, (v, dflt) => safe.func(v, dflt)),
      showCount: option(opts.showCount, true, (v, dflt) => safe.bool(v, dflt)),
      showPercent: option(opts.showPercent, false, (v, dflt) => safe.bool(v, dflt)),
      countWidth: option(opts.countWidth, 0, (v, dflt) => safe.num(v, true, 0, void 0, dflt)),
      progChar: option(opts.progChar, "\u2588", (v, dflt) => safe.str(v, false, dflt)),
      emptyChar: option(opts.emptyChar, " ", (v, dflt) => safe.str(v, false, dflt)),
      startChar: option(opts.startChar, "\u2595", (v, dflt) => safe.str(v, false, dflt)),
      endChar: option(opts.endChar, "\u258F", (v, dflt) => safe.str(v, false, dflt)),
      showCurrent: option(opts.showCurrent, false, (v, dflt) => safe.bool(v, dflt)),
      currentChar: option(opts.currentChar, "\u259E", (v, dflt) => safe.str(v, false, dflt)),
      print: option(opts.print, true, (v, dflt) => safe.bool(v, dflt)),
      printFn: option(opts.printFn, progressBar2.utils.printLn, (v, dflt) => safe.func(v, dflt))
    };
  };
  progressBar2.getMultiBarManager = (options = {}) => {
    const args = {
      options: safe.obj(options, false, {})
    };
    const opts = progressBar2.getFullMultiBarManagerOptions(args.options);
    const { minSlots, maxSlots } = opts;
    const barPacks = [];
    let totalCount = 0;
    let previousDrawnLines = 0;
    let bumpLines = 0;
    const add = (bar, removeWhenFinished = opts.removeFinished) => {
      const args2 = {
        bar: safe.obj(bar),
        removeWhenFinished: safe.bool(removeWhenFinished, false)
      };
      if (!args2.bar._registerManager)
        return;
      const barIndex = totalCount;
      totalCount += 1;
      const varOpts = ObjectTools.mapValues(
        opts.variableOptions,
        (key, value) => {
          if (!value)
            return void 0;
          if (Array.isArray(value)) {
            return value[barIndex % value.length];
          }
          if (typeof value === "function") {
            const currentBars = [...getBars(), args2.bar];
            return value(args2.bar, barIndex, currentBars.indexOf(args2.bar), currentBars);
          }
          return void 0;
        }
      );
      const overrideOpts = {
        ...opts.overrideOptions,
        ...varOpts
      };
      const barPack = {
        bar: args2.bar,
        isFinished: false,
        lastOutput: "",
        fullOptions: overrideOpts,
        onUpdate: (outputString) => {
          barPack.lastOutput = outputString;
          update();
        },
        onStart: () => {
        },
        onFinish: () => {
          barPack.isFinished = true;
          if (args2.removeWhenFinished) {
            remove(args2.bar);
          }
        },
        onSet: () => {
        },
        onNext: () => {
        }
      };
      barPacks.push(barPack);
      barPack.fullOptions = args2.bar._registerManager(barPack, overrideOpts);
      bumpLines = Math.max(0, bumpLines - 1);
      barPack.lastOutput = barPack.bar.getBar(true);
      update();
    };
    const addNew = (max, options2 = {}) => {
      const args2 = {
        max: safe.num(max, true, -1, void 0, -1),
        options: safe.obj(options2, false, {})
      };
      const bar = progressBar2.getProgressBar(args2.max, args2.options);
      add(bar);
      return bar;
    };
    const remove = (bar) => {
      const args2 = {
        bar: safe.obj(bar)
      };
      if (!args2.bar._registerManager)
        return;
      const index = barPacks.findIndex((pack) => pack.bar === args2.bar);
      if (index === -1)
        return;
      barPacks.splice(index, 1);
      bumpLines += 1;
      update();
    };
    const update = () => {
      const result = [];
      let count = 0;
      barPacks.slice(0, maxSlots).forEach((pack, index) => {
        const wrappedBar = pack.lastOutput || pack.bar.getBar(true);
        result.push(wrappedBar);
        count++;
      });
      if (count < minSlots) {
        const emptySlots = minSlots - barPacks.length;
        result.push(...ArrayTools.repeat(emptySlots, ""));
        count += emptySlots;
      }
      if (!opts.alignBottom) {
        bumpLines = 0;
      }
      count += bumpLines;
      if (opts.print)
        opts.printFn(previousDrawnLines, `
`.repeat(bumpLines) + result.join("\n"));
      previousDrawnLines = count;
    };
    const getBars = () => {
      return barPacks.map((pack) => pack.bar);
    };
    return {
      add,
      addNew,
      remove,
      update,
      getBars
    };
  };
  progressBar2.getFullMultiBarManagerOptions = (opts) => {
    const numSlots = optionalOption(opts.numSlots, void 0, (v, d) => safe.num(v, true, 0, void 0, d));
    let minSlots = optionalOption(opts.minSlots, void 0, (v, d) => safe.num(v, true, 0, void 0, d));
    let maxSlots = optionalOption(opts.maxSlots, void 0, (v, d) => v === Infinity ? Infinity : safe.num(v, true, 0, void 0, d));
    if (minSlots !== void 0 && maxSlots !== void 0 && minSlots > maxSlots) {
      let temp = minSlots;
      minSlots = maxSlots;
      maxSlots = temp;
    }
    const result = {
      numSlots: option(numSlots, null, (v, d) => safe.num(v, true, 0, void 0, d)),
      minSlots: option(minSlots, numSlots ?? 0, (v, d) => safe.num(v, true, 0, maxSlots, d)),
      maxSlots: option(maxSlots, numSlots ?? Infinity, (v, d) => v === Infinity ? Infinity : safe.num(v, true, minSlots, void 0, d)),
      removeFinished: option(opts.removeFinished, false, (v, d) => safe.bool(v, d)),
      alignBottom: option(opts.alignBottom, false, (v, d) => safe.bool(v, d)),
      overrideOptions: option(opts.overrideOptions, {}, (v, d) => safe.obj(v, false, d)),
      variableOptions: option(opts.variableOptions, {}, (v, d) => safe.obj(v, false, d)),
      print: option(opts.print, true, (v, d) => safe.bool(v, d)),
      printFn: option(opts.printFn, progressBar2.utils.multiPrintFn, (v, d) => safe.func(v, d))
    };
    return result;
  };
  let utils;
  ((utils2) => {
    utils2.printLn = (...text) => {
      var _a, _b;
      const args = {
        text: safe.arrOf.str(text)
      };
      if (((_a = process == null ? void 0 : process.stdout) == null ? void 0 : _a.clearLine) && ((_b = process == null ? void 0 : process.stdout) == null ? void 0 : _b.cursorTo)) {
        if (!args.text.length) {
          process.stdout.write("\n");
        } else {
          const output = args.text.map((item) => item.toString()).join(" ");
          process.stdout.clearLine(0);
          process.stdout.cursorTo(0);
          process.stdout.moveCursor(0, -1);
          process.stdout.clearLine(0);
          process.stdout.write(output);
          process.stdout.write("\n");
        }
      } else {
        console.log(...args.text);
      }
    };
    utils2.multiPrintFn = (previousDrawnLines, output) => {
      var _a, _b, _c;
      const args = {
        previousDrawnLines: safe.num(previousDrawnLines, true, 0),
        output: safe.str(output, true, "")
      };
      const hasProcessFns = ((_a = process == null ? void 0 : process.stdout) == null ? void 0 : _a.clearLine) && ((_b = process == null ? void 0 : process.stdout) == null ? void 0 : _b.cursorTo) && ((_c = process == null ? void 0 : process.stdout) == null ? void 0 : _c.moveCursor);
      if (hasProcessFns) {
        let removeLines = args.previousDrawnLines;
        const outputLines = args.output.split("\n").length;
        if (outputLines > args.previousDrawnLines) {
          const extraLines = outputLines - args.previousDrawnLines;
          process.stdout.write("=========\n".repeat(extraLines));
          removeLines += extraLines;
        }
        for (let i = 0; i < removeLines; i++) {
          process.stdout.clearLine(0);
          process.stdout.cursorTo(0);
          process.stdout.moveCursor(0, -1);
          process.stdout.clearLine(0);
        }
        process.stdout.write(args.output + "\n");
      } else {
        console.log(args.output);
      }
    };
  })(utils = progressBar2.utils || (progressBar2.utils = {}));
})(progressBar || (progressBar = {}));
var getProgressBar = progressBar.getProgressBar;
var getMultiBarManager = progressBar.getMultiBarManager;

// src/tools/StringTools.ts
var StringTools;
((StringTools2) => {
  StringTools2.capitalise = (input = "", forceRestToLowerCase = true) => {
    const args = {
      input: safe.str(input),
      forceRestToLowerCase: safe.bool(forceRestToLowerCase)
    };
    return args.input.split(/\s/).map((word) => word.charAt(0).toUpperCase() + (args.forceRestToLowerCase ? word.slice(1).toLowerCase() : word.slice(1))).join(" ");
  };
  StringTools2.angloise = (input) => {
    const inp = safe.str(input);
    return inp.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };
  StringTools2.clean = (input = "") => {
    const inp = safe.str(input);
    return StringTools2.angloise([inp].flat().join(" ")).replace(/\s{1,}/g, " ").replace(/[^A-Za-z0-9 ]/gi, "");
  };
  StringTools2.repeat = (maxLength, repeated) => {
    const args = {
      maxLength: safe.num(maxLength, true),
      repeated: safe.str(repeated)
    };
    return args.repeated.repeat(Math.max(0, args.maxLength));
  };
  StringTools2.makeRegExpSafe = (text) => {
    const args = {
      text: safe.str(text)
    };
    return args.text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  };
  StringTools2.replaceAll = (text, searchValue, replacer) => {
    const args = {
      text: safe.str(text),
      searchValue: searchValue instanceof RegExp ? searchValue : safe.str(searchValue),
      replacer: typeof replacer === "function" ? safe.func(replacer) : safe.str(replacer)
    };
    let regex;
    if (args.searchValue instanceof RegExp) {
      regex = new RegExp(args.searchValue, "g" + args.searchValue.flags.replace(/g/g, ""));
    } else {
      regex = new RegExp(StringTools2.makeRegExpSafe(args.searchValue), "g");
    }
    return args.text.replace(regex, args.replacer);
  };
  StringTools2.randomId = (prefix = "", suffix = "") => {
    const args = {
      prefix: safe.str(prefix, true, ""),
      suffix: safe.str(suffix, true, "")
    };
    return args.prefix + Math.random().toString(36).substr(2, 10).padStart(10, "0") + args.suffix;
  };
  const processClxArray = (arr) => arr.filter(fn.exists).map((item) => {
    if (typeof item === "string")
      return item;
    if (item instanceof Array) {
      return processClxArray(item);
    }
    if (typeof item === "object") {
      return Object.keys(item).filter((key) => item[key]).join(" ");
    }
    return void 0;
  }).filter(fn.exists).flat();
  StringTools2.clx = (...args) => processClxArray(args).join(" ");
  const safeInput = (v) => {
    if (v instanceof Array)
      return safe.arrOf.str(v);
    return safe.str(v, false, "");
  };
  const caseHandler = (overrideSplitter) => {
    const getSplit = (input = "") => {
      if (overrideSplitter)
        return overrideSplitter(input);
      const arr = [input].flat();
      return arr.map((s) => StringTools2.clean(s.replace(/-|_/g, " ")).split(" ")).flat().filter((s) => s.length);
    };
    const toCamelCase2 = (input, capitaliseFirst = false) => {
      const args = {
        input: safeInput(input),
        capitaliseFirst: safe.bool(capitaliseFirst)
      };
      const split = getSplit(args.input);
      return split.map((word, index) => index === 0 && !args.capitaliseFirst ? word.toLowerCase() : StringTools2.capitalise(word, true)).join("");
    };
    const toLowerCamelCase2 = (input) => toCamelCase2(safeInput(input), false);
    const toUpperCamelCase2 = (input) => toCamelCase2(safeInput(input), true);
    const toCharacterSeparated2 = (input, char = ",", toUpper = false) => {
      const args = {
        input: safeInput(input),
        char: safe.str(char),
        toUpper: safe.bool(toUpper, false)
      };
      const split = getSplit(args.input);
      return split.map((word, index) => args.toUpper ? word.toUpperCase() : word.toLowerCase()).join(args.char);
    };
    const toSlugCase2 = (input, toUpper = false) => {
      const args = {
        input: safeInput(input),
        toUpper: safe.bool(toUpper)
      };
      return toCharacterSeparated2(args.input, "-", args.toUpper);
    };
    const toLowerSlugCase2 = (input) => toSlugCase2(safeInput(input), false);
    const toUpperSlugCase2 = (input) => toSlugCase2(safeInput(input), true);
    const toSnakeCase2 = (input, toUpper = false) => {
      const args = {
        input: safeInput(input),
        toUpper: safe.bool(toUpper)
      };
      return toCharacterSeparated2(args.input, "_", args.toUpper);
    };
    const toLowerSnakeCase2 = (input) => toSnakeCase2(safeInput(input), false);
    const toUpperSnakeCase2 = (input) => toSnakeCase2(safeInput(input), true);
    const toSpaced2 = (input, toUpper = false) => {
      const args = {
        input: safeInput(input),
        toUpper: safe.bool(toUpper)
      };
      return toCharacterSeparated2(args.input, " ", args.toUpper);
    };
    const toLowerSpaced2 = (input) => toSpaced2(safeInput(input), false);
    const toUpperSpaced2 = (input) => toSpaced2(safeInput(input), true);
    const toCapitalisedSpaced2 = (input) => StringTools2.capitalise(toSpaced2(safeInput(input), false));
    return {
      toLowerCamelCase: toLowerCamelCase2,
      toUpperCamelCase: toUpperCamelCase2,
      toCamelCase: toCamelCase2,
      toLowerSlugCase: toLowerSlugCase2,
      toUpperSlugCase: toUpperSlugCase2,
      toSlugCase: toSlugCase2,
      toLowerSnakeCase: toLowerSnakeCase2,
      toUpperSnakeCase: toUpperSnakeCase2,
      toSnakeCase: toSnakeCase2,
      toLowerSpaced: toLowerSpaced2,
      toUpperSpaced: toUpperSpaced2,
      toCapitalisedSpaced: toCapitalisedSpaced2,
      toSpaced: toSpaced2,
      toCharacterSeparated: toCharacterSeparated2
    };
  };
  const standardCaseHandler = caseHandler();
  ({
    toLowerCamelCase: StringTools2.toLowerCamelCase,
    toUpperCamelCase: StringTools2.toUpperCamelCase,
    toCamelCase: StringTools2.toCamelCase,
    toLowerSlugCase: StringTools2.toLowerSlugCase,
    toUpperSlugCase: StringTools2.toUpperSlugCase,
    toSlugCase: StringTools2.toSlugCase,
    toLowerSnakeCase: StringTools2.toLowerSnakeCase,
    toUpperSnakeCase: StringTools2.toUpperSnakeCase,
    toSnakeCase: StringTools2.toSnakeCase,
    toLowerSpaced: StringTools2.toLowerSpaced,
    toUpperSpaced: StringTools2.toUpperSpaced,
    toCapitalisedSpaced: StringTools2.toCapitalisedSpaced,
    toSpaced: StringTools2.toSpaced,
    toCharacterSeparated: StringTools2.toCharacterSeparated
  } = standardCaseHandler);
  StringTools2.fromSlugCase = standardCaseHandler;
  StringTools2.fromSnakeCase = standardCaseHandler;
  StringTools2.fromSpaced = standardCaseHandler;
  StringTools2.fromCamelCase = caseHandler(
    (input) => [input].flat().map((s) => StringTools2.clean(s)).map(
      (s) => s.replace(/([A-Z])/g, " $1").replace(/-|_/g, " ").trim()
    ).map((s) => s.split(" ")).flat()
  );
  let matchBrackets;
  ((matchBrackets2) => {
    const defaultReplaceSymbols = {
      END: "\u2727",
      "(": "\u276A",
      ")": "\u276B",
      "[": "\u2772",
      "]": "\u2773",
      "{": "\u2774",
      "}": "\u2775",
      "<": "\u2770",
      ">": "\u2771"
    };
    const safeSymbols = (symbols2) => ObjectTools.filter(safe.obj(symbols2), (k) => Object.keys(defaultReplaceSymbols).includes(k));
    const safeBracketType = (bracketType) => {
      const safed = safe.str(bracketType);
      if (["()", "[]", "{}", "<>", "round", "square", "curly", "angle"].includes(safed)) {
        return safed;
      }
      return "round";
    };
    const escapePCRE = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const runReplace = (input, replaceSymbols = {}, outputDepth = false) => {
      const fullSyms = matchBrackets2.getReplaceSymbols(replaceSymbols);
      let infos = {
        round: {
          depth: -1,
          currentID: -1,
          active: []
        },
        square: {
          depth: -1,
          currentID: -1,
          active: []
        },
        curly: {
          depth: -1,
          currentID: -1,
          active: []
        },
        angle: {
          depth: -1,
          currentID: -1,
          active: []
        }
      };
      const updateInfo = (info, startBr, endBr, br) => {
        var _a;
        let depth2;
        let id;
        if (br === startBr || br === endBr) {
          if (br === startBr) {
            depth2 = ++info.depth;
            id = ++info.currentID;
            info.active.push([depth2, id]);
          } else {
            depth2 = info.depth--;
            const activeIndex = info.active.findIndex(([d, i]) => d === depth2);
            if (activeIndex !== -1) {
              const found = (_a = info.active.splice(activeIndex, 1)) == null ? void 0 : _a[0];
              if (found)
                id = found[1];
            }
          }
        }
        return outputDepth ? depth2 : id;
      };
      return input.replace(/\(|\)|\[|\]|\{|\}|\<|\>/g, (br) => {
        let id = updateInfo(infos.round, "(", ")", br) || updateInfo(infos.square, "[", "]", br) || updateInfo(infos.curly, "{", "}", br) || updateInfo(infos.angle, "<", ">", br);
        return fullSyms[br] + (id || "0") + fullSyms.END;
      });
    };
    matchBrackets2.unique = (input, replaceSymbols = {}) => {
      const args = {
        input: safe.str(input),
        replaceSymbols: safeSymbols(replaceSymbols)
      };
      return runReplace(args.input, args.replaceSymbols, false);
    };
    matchBrackets2.depth = (input, replaceSymbols = {}) => {
      const args = {
        input: safe.str(input),
        replaceSymbols: safeSymbols(replaceSymbols)
      };
      return runReplace(args.input, args.replaceSymbols, true);
    };
    matchBrackets2.clean = (input, replaceSymbols = {}) => {
      const args = {
        input: safe.str(input),
        replaceSymbols: matchBrackets2.getReplaceSymbols(replaceSymbols)
      };
      const invertedSyms = ObjectTools.invert(args.replaceSymbols);
      const { END, ...withoutEND } = args.replaceSymbols;
      const startSyms = Object.values(withoutEND);
      const regex = new RegExp(`(${startSyms.map(escapePCRE).join("|")})[0-9]+${escapePCRE(args.replaceSymbols.END)}`, "g");
      return args.input.replace(regex, (m, startSym) => invertedSyms[startSym] || "");
    };
    const getBracketSymsForMatch = (bracketType, replaceSymbols) => {
      const fullSyms = matchBrackets2.getReplaceSymbols(replaceSymbols);
      const [openSym, closeSym] = {
        "()": ["(", ")"],
        "[]": ["[", "]"],
        "{}": ["{", "}"],
        "<>": ["<", ">"],
        round: ["(", ")"],
        square: ["[", "]"],
        curly: ["{", "}"],
        angle: ["<", ">"]
      }[bracketType].map((s) => fullSyms[s]);
      const endSym = fullSyms.END;
      return [openSym, closeSym, endSym];
    };
    const runGrabSearch = (fullDirty, [openSym, closeSym, endSym], findID, replaceSymbols) => {
      const regex = new RegExp(
        `${escapePCRE(openSym)}${findID}${escapePCRE(endSym)}(.|
)*?${escapePCRE(closeSym)}${findID}${escapePCRE(endSym)}`,
        "g"
      );
      const foundDirty = Array.from(fullDirty.matchAll(regex) || []).map((match) => match[0]);
      const found = foundDirty.map((str) => matchBrackets2.clean(str, replaceSymbols));
      return found;
    };
    matchBrackets2.grabDepth = (input, bracketType = "round", depthID = 0, replaceSymbols = {}) => {
      const args = {
        input: safe.str(input),
        bracketType: safeBracketType(bracketType),
        depthID: safe.num(depthID, true, 0),
        replaceSymbols: safeSymbols(replaceSymbols)
      };
      const syms = getBracketSymsForMatch(args.bracketType, args.replaceSymbols);
      const fullDirty = matchBrackets2.depth(args.input, args.replaceSymbols);
      return runGrabSearch(fullDirty, syms, args.depthID + "", args.replaceSymbols);
    };
    matchBrackets2.grabUnique = (input, bracketType = "round", uniqueID = 0, replaceSymbols = {}) => {
      var _a;
      const args = {
        input: safe.str(input),
        bracketType: safeBracketType(bracketType),
        uniqueID: safe.num(uniqueID, true, 0),
        replaceSymbols: safeSymbols(replaceSymbols)
      };
      const syms = getBracketSymsForMatch(args.bracketType, args.replaceSymbols);
      const fullDirty = matchBrackets2.unique(args.input, args.replaceSymbols);
      return (_a = runGrabSearch(fullDirty, syms, args.uniqueID + "", args.replaceSymbols)) == null ? void 0 : _a[0];
    };
    matchBrackets2.grab = (input, bracketType = "round", replaceSymbols = {}) => {
      const args = {
        input: safe.str(input),
        bracketType: safeBracketType(bracketType),
        replaceSymbols: safeSymbols(replaceSymbols)
      };
      const syms = getBracketSymsForMatch(args.bracketType, args.replaceSymbols);
      const fullDirty = matchBrackets2.unique(args.input, args.replaceSymbols);
      const [openSym, closeSym, endSym] = syms;
      const regex = new RegExp(`(?:${escapePCRE(openSym)}|${escapePCRE(closeSym)})([0-9]+)${escapePCRE(endSym)}`, "g");
      const allIDs = Array.from(fullDirty.matchAll(regex) || []).map((match) => Number(match[1])).filter(fn.dedupe);
      const found = allIDs.map((uniqueID) => {
        var _a;
        return (_a = runGrabSearch(fullDirty, syms, uniqueID + "", args.replaceSymbols)) == null ? void 0 : _a[0];
      });
      return found;
    };
    matchBrackets2.getReplaceSymbols = (replaceSymbols = {}) => {
      return safeSymbols({
        ...defaultReplaceSymbols,
        ...replaceSymbols
      });
    };
  })(matchBrackets = StringTools2.matchBrackets || (StringTools2.matchBrackets = {}));
})(StringTools || (StringTools = {}));
var clx = StringTools.clx;

// src/tools/PromiseTools.ts
var PromiseTools;
((PromiseTools2) => {
  PromiseTools2.getDeferred = () => {
    let resolve, reject;
    const promise = new Promise((res, rej) => {
      resolve = (arg) => {
        res(arg);
        return promise;
      };
      reject = (...args) => {
        rej(...args);
        return promise;
      };
    });
    return {
      resolve,
      reject,
      promise
    };
  };
  PromiseTools2.all = async (items) => {
    const args = {
      items: safe.arr(items).map(functionifyPromiseItem)
    };
    return await Promise.all(args.items.map((item) => item()));
  };
  PromiseTools2.allLimit = (limit, items, noThrow = false) => {
    const args = {
      limit: safe.num(limit, true, 1, void 0, 1),
      items: safe.arr(items).map(functionifyPromiseItem),
      noThrow: safe.bool(noThrow, false)
    };
    let runningCount = 0;
    let errors = [];
    let remaining = [...args.items];
    const result = [];
    const deferred = PromiseTools2.getDeferred();
    const update = () => {
      if (remaining.length === 0 && runningCount === 0) {
        if (errors.length && !args.noThrow) {
          deferred.reject(errors);
          return;
        }
        deferred.resolve(result);
        return;
      }
      if (runningCount < args.limit && remaining.length) {
        const next = remaining.shift();
        const index = args.items.indexOf(next);
        run(next, index);
      }
    };
    const run = async (prom, index) => {
      runningCount++;
      try {
        result[index] = await prom(index);
      } catch (err) {
        errors.push(err);
      }
      runningCount--;
      update();
    };
    for (let i = 0; i < Math.min(args.limit, args.items.length); i++) {
      update();
    }
    if (!args.items || args.items.length === 0) {
      deferred.resolve(result);
    }
    return deferred.promise;
  };
  PromiseTools2.each = async (items, func) => {
    const args = {
      items: safe.arr(items, []),
      func: safe.func(func, () => Promise.resolve())
    };
    await PromiseTools2.all(args.items.map((item, index, array) => args.func(item, index, array)));
  };
  PromiseTools2.eachLimit = async (limit, items, func) => {
    const args = {
      limit: safe.num(limit, true, 1, void 0, 1),
      items: safe.arr(items, []),
      func: safe.func(func, () => Promise.resolve())
    };
    await PromiseTools2.allLimit(
      args.limit,
      args.items.map((item, index, array) => () => args.func(item, index, array))
    );
  };
  PromiseTools2.map = async (items, func) => {
    const args = {
      items: safe.arr(items, []),
      func: safe.func(func, (v) => Promise.resolve(v))
    };
    const result = [];
    await PromiseTools2.all(
      args.items.map(async (item, index, array) => {
        const res = await args.func(item, index, array);
        result[index] = res;
      })
    );
    return result;
  };
  PromiseTools2.mapLimit = async (limit, items, func) => {
    const args = {
      limit: safe.num(limit, true, 1, void 0, 1),
      items: safe.arr(items, []),
      func: safe.func(func, (v) => Promise.resolve(v))
    };
    return await PromiseTools2.allLimit(
      args.limit,
      args.items.map((item, index, array) => () => {
        const res = args.func(item, index, array);
        return res;
      })
    );
  };
  const objectify = async (operate, input) => {
    const keys = Object.keys(input);
    const values = Object.values(input);
    const promFuncs = values.map(functionifyPromiseItem);
    const results = await operate(promFuncs);
    return Object.fromEntries(keys.map((key, index) => [key, results[index]]));
  };
  PromiseTools2.allObj = async (input) => {
    const args = {
      input: safe.obj(input, false, {})
    };
    return objectify((arr) => PromiseTools2.all(arr), args.input);
  };
  PromiseTools2.allLimitObj = async (limit, input, noThrow = false) => {
    const args = {
      limit: safe.num(limit, true, 1, void 0, 1),
      input: safe.obj(input, false, {}),
      noThrow: safe.bool(noThrow, false)
    };
    return objectify((items) => {
      return PromiseTools2.allLimit(args.limit, items, args.noThrow);
    }, args.input);
  };
  const functionifyPromiseItem = (item) => {
    if (typeof item === "function")
      return item;
    return async () => item;
  };
})(PromiseTools || (PromiseTools = {}));
var getDeferred = PromiseTools.getDeferred;
var all = PromiseTools.all;
var allLimit = PromiseTools.allLimit;
var each = PromiseTools.each;
var eachLimit = PromiseTools.eachLimit;
var map = PromiseTools.map;
var mapLimit = PromiseTools.mapLimit;
var allObj = PromiseTools.allObj;
var allLimitObj = PromiseTools.allLimitObj;

// src/tools/ErrorTools.ts
var ErrorTools;
((ErrorTools2) => {
  ErrorTools2.tryOr = async (orValue, func, ...args) => {
    try {
      return await func(...args);
    } catch (err) {
      return orValue;
    }
  };
  ErrorTools2.retry = async (maxTries = 10, delay = 0, suppress = true, run = fn.result(void 0)) => {
    const args = {
      maxTries: safe.num(maxTries, true, 1, void 0, 10),
      delay: safe.num(delay, true, 0),
      suppress: safe.bool(suppress, true),
      run: safe.func(run, fn.result(void 0))
    };
    const loop = async (attempt, lastErr) => {
      if (attempt >= args.maxTries) {
        if (!args.suppress)
          throw lastErr;
        return void 0;
      }
      try {
        const result = await args.run(attempt);
        return result;
      } catch (err) {
        if (args.delay)
          await wait(args.delay);
        return await loop(attempt + 1, err);
      }
    };
    return await loop(0);
  };
  ErrorTools2.retryOr = async (orValue, maxTries = 10, delay = 0, run = fn.result(orValue)) => {
    const args = {
      orValue,
      maxTries: safe.num(maxTries, true, 1),
      delay: safe.num(delay, true, 0),
      run: safe.func(run, fn.result(orValue))
    };
    return ErrorTools2.tryOr(args.orValue, () => ErrorTools2.retry(args.maxTries, args.delay, false, args.run));
  };
})(ErrorTools || (ErrorTools = {}));
var tryOr = ErrorTools.tryOr;
var retry = ErrorTools.retry;
var retryOr = ErrorTools.retryOr;

// src/tools/ColourTools.ts
var safeRGB = (rgb) => safe.arrOf.num(rgb, true, 0, 255, 0, [0, 0, 0], 3, 3);
var safeHSL = (hsl) => safe.arrOf.num(hsl, true, 0, 360, 0, [0, 0, 0], 3, 3).map((v, i) => safe.num(v, true, 0, [360, 100, 100][i], 0));
var ColourTools;
((ColourTools2) => {
  ColourTools2.namedColours = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fractal: [128, 128, 128],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray0: [0, 0, 0],
    gray1: [3, 3, 3],
    gray2: [5, 5, 5],
    gray3: [8, 8, 8],
    gray4: [10, 10, 10],
    gray5: [13, 13, 13],
    gray6: [15, 15, 15],
    gray7: [18, 18, 18],
    gray8: [20, 20, 20],
    gray9: [23, 23, 23],
    gray10: [26, 26, 26],
    gray11: [28, 28, 28],
    gray12: [31, 31, 31],
    gray13: [33, 33, 33],
    gray14: [36, 36, 36],
    gray15: [38, 38, 38],
    gray16: [41, 41, 41],
    gray17: [43, 43, 43],
    gray18: [46, 46, 46],
    gray19: [48, 48, 48],
    gray20: [51, 51, 51],
    gray21: [54, 54, 54],
    gray22: [56, 56, 56],
    gray23: [59, 59, 59],
    gray24: [61, 61, 61],
    gray25: [64, 64, 64],
    gray26: [66, 66, 66],
    gray27: [69, 69, 69],
    gray28: [71, 71, 71],
    gray29: [74, 74, 74],
    gray30: [77, 77, 77],
    gray31: [79, 79, 79],
    gray32: [82, 82, 82],
    gray33: [84, 84, 84],
    gray34: [87, 87, 87],
    gray35: [89, 89, 89],
    gray36: [92, 92, 92],
    gray37: [94, 94, 94],
    gray38: [97, 97, 97],
    gray39: [99, 99, 99],
    gray40: [102, 102, 102],
    gray41: [105, 105, 105],
    gray42: [107, 107, 107],
    gray43: [110, 110, 110],
    gray44: [112, 112, 112],
    gray45: [115, 115, 115],
    gray46: [117, 117, 117],
    gray47: [120, 120, 120],
    gray48: [122, 122, 122],
    gray49: [125, 125, 125],
    gray50: [127, 127, 127],
    gray51: [130, 130, 130],
    gray52: [133, 133, 133],
    gray53: [135, 135, 135],
    gray54: [138, 138, 138],
    gray55: [140, 140, 140],
    gray56: [143, 143, 143],
    gray57: [145, 145, 145],
    gray58: [148, 148, 148],
    gray59: [150, 150, 150],
    gray60: [153, 153, 153],
    gray61: [156, 156, 156],
    gray62: [158, 158, 158],
    gray63: [161, 161, 161],
    gray64: [163, 163, 163],
    gray65: [166, 166, 166],
    gray66: [168, 168, 168],
    gray67: [171, 171, 171],
    gray68: [173, 173, 173],
    gray69: [176, 176, 176],
    gray70: [179, 179, 179],
    gray71: [181, 181, 181],
    gray72: [184, 184, 184],
    gray73: [186, 186, 186],
    gray74: [189, 189, 189],
    gray75: [191, 191, 191],
    gray76: [194, 194, 194],
    gray77: [196, 196, 196],
    gray78: [199, 199, 199],
    gray79: [201, 201, 201],
    gray80: [204, 204, 204],
    gray81: [207, 207, 207],
    gray82: [209, 209, 209],
    gray83: [212, 212, 212],
    gray84: [214, 214, 214],
    gray85: [217, 217, 217],
    gray86: [219, 219, 219],
    gray87: [222, 222, 222],
    gray88: [224, 224, 224],
    gray89: [227, 227, 227],
    gray90: [229, 229, 229],
    gray91: [232, 232, 232],
    gray92: [235, 235, 235],
    gray93: [237, 237, 237],
    gray94: [240, 240, 240],
    gray95: [242, 242, 242],
    gray96: [245, 245, 245],
    gray97: [247, 247, 247],
    gray98: [250, 250, 250],
    gray99: [252, 252, 252],
    gray100: [255, 255, 255],
    gray: [126, 126, 126],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    none: [0, 0, 0],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  };
  const limitValue = (val) => Math.max(0, Math.min(255, val));
  const roundMinMax = (value, min = 0, max = 255) => Math.min(max, Math.max(min, Math.round(value)));
  ColourTools2.parse = (input) => {
    const args = {
      input: safe.str(input, true)
    };
    const trimmed = args.input.trim();
    if (ColourTools2.namedColours[trimmed]) {
      return ColourTools2.namedColours[trimmed];
    }
    if (/^rgb/.test(trimmed) || /([0-9]{1,3}(,|\s|\/)+){2}[0-9]{1,3}/.test(trimmed)) {
      const stripped = trimmed.replace(/[^0-9,/]/g, "");
      const [r, g, b] = [...stripped.split(/[^0-9]/).map(Number), 0, 0, 0].map(limitValue);
      return [r, g, b];
    }
    if (/^#/.test(trimmed) || /^([0-9A-F]{3}|[0-9A-F]{6})$/.test(trimmed)) {
      const stripped = trimmed.toUpperCase().replace(/[^0-9A-F]/g, "");
      let hexs = [];
      if (/^[0-9A-F]{3}$/.test(stripped)) {
        hexs = [...stripped.match(/[0-9A-F]{1}/g) || []].map((hex) => parseInt(hex, 16));
        hexs = hexs.map((val) => val * 17);
      }
      if (/^[0-9A-F]{6}$/.test(stripped)) {
        hexs = [...stripped.match(/[0-9A-F]{2}/g) || []].map((hex) => parseInt(hex, 16));
      }
      const [r, g, b] = hexs.map(limitValue);
      return [r, g, b];
    }
    return [0, 0, 0];
  };
  ColourTools2.toHex = (colour) => {
    const args = {
      colour: safeRGB(colour)
    };
    const hexs = args.colour.map((val) => (val ?? 0).toString(16).padStart(2, "0"));
    return `#${hexs.join("")}`;
  };
  ColourTools2.getLuminance = (rgb) => {
    const args = {
      rgb: safeRGB(rgb)
    };
    const [y, u, v] = ColourTools2.toYUV(args.rgb);
    return y;
  };
  ColourTools2.toYUV = (rgb) => {
    const args = {
      rgb: safeRGB(rgb)
    };
    const [r, g, b] = args.rgb;
    const y = MathsTools.fixFloat(0.299 * (r ?? 0) + 0.587 * (g ?? 0) + 0.114 * (b ?? 0));
    const u = MathsTools.fixFloat(-0.14713 * (r ?? 0) - 0.28886 * (g ?? 0) + 0.436 * (b ?? 0));
    const v = MathsTools.fixFloat(0.615 * (r ?? 0) - 0.51499 * (g ?? 0) - 0.10001 * (b ?? 0));
    return [y, u, v];
  };
  ColourTools2.toHSL = (colour, round = true) => {
    const args = {
      colour: safeRGB(colour),
      round: safe.bool(round, true)
    };
    const r = args.colour[0] / 255;
    const g = args.colour[1] / 255;
    const b = args.colour[2] / 255;
    const M = Math.max(r, g, b);
    const m = M - Math.min(r, g, b);
    let d = 0;
    if (m) {
      if (M === r) {
        d = (g - b) / m;
      } else {
        if (M === g) {
          d = 2 + (b - r) / m;
        } else {
          d = 4 + (r - g) / m;
        }
      }
    }
    const result = [
      60 * d < 0 ? 60 * d + 360 : 60 * d,
      100 * (m ? M <= 0.5 ? m / (2 * M - m) : m / (2 - (2 * M - m)) : 0),
      100 * (2 * M - m) / 2
    ];
    if (args.round) {
      return [roundMinMax(result[0], 0, 360), roundMinMax(result[1], 0, 100), roundMinMax(result[2], 0, 100)];
    }
    return result;
  };
  ColourTools2.fromHSL = (hsl, round = true) => {
    const args = {
      hsl: safeHSL(hsl),
      round: safe.bool(round, true)
    };
    const h = args.hsl[0];
    const s = args.hsl[1] / 100;
    const l = args.hsl[2] / 100;
    const k = (n) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    const result = [255 * f(0), 255 * f(8), 255 * f(4)];
    if (args.round) {
      return [roundMinMax(result[0], 0, 255), roundMinMax(result[1], 0, 255), roundMinMax(result[2], 0, 255)];
    }
    return result;
  };
  ColourTools2.invertColour = (rgb) => {
    const args = {
      rgb: safeRGB(rgb)
    };
    const [r, g, b] = args.rgb;
    return [255 - r, 255 - g, 255 - b];
  };
  const white = [255, 255, 255];
  const black = [0, 0, 0];
  ColourTools2.getContrastedColour = (colour) => {
    const args = {
      colour: safeRGB(colour)
    };
    return ColourTools2.getLuminance(args.colour) > 186 ? black : white;
  };
  ColourTools2.getLimitedColour = (colour, checkFn, adjustFn) => {
    const args = {
      colour: safeRGB(colour),
      checkFn: safe.func(checkFn, () => true),
      adjustFn: safe.func(adjustFn, (hsl2) => [...hsl2])
    };
    const hsl = ColourTools2.toHSL(args.colour);
    if (args.checkFn(hsl)) {
      const adjustedHSL = args.adjustFn(hsl);
      const safeAdjustedHSL = safeHSL(adjustedHSL);
      const out = ColourTools2.fromHSL(safeAdjustedHSL);
      return out;
    }
    return args.colour;
  };
})(ColourTools || (ColourTools = {}));

// src/tools/symbols.ts
var symbols = {
  TAB: "	",
  TICK: "\u2714",
  CROSS: "\u2716",
  PLUS: "+",
  MINUS: "-",
  TIMES: "\xD7",
  DIVIDE: "\xF7",
  ELLIPSIS: "\u2026",
  BULLET: "\u2022",
  BULLET_TRI: "\u2023",
  BULLET_HYP: "\u2043",
  EJECT: "\u23CF",
  TILDE: "~",
  HOME: "~",
  RADIO_EMPTY: "\u25EF",
  RADIO_FULL: "\u25C9",
  CURSOR: "\u276F",
  CHEV_LFT: "\u2039",
  CHEV_RGT: "\u203A",
  CHAIN: "\u2AD8",
  TRI_UPP: "\u25B2",
  TRI_DWN: "\u25BC",
  TRI_RGT: "\u25B6",
  TRI_LFT: "\u25C0",
  ARROW_UPP: "\u2191",
  ARROW_DWN: "\u2193",
  ARROW_RGT: "\u2192",
  ARROW_LFT: "\u2190",
  ARROW_UPP_RGT: "\u2197",
  ARROW_DWN_RGT: "\u2198",
  ARROW_DWN_LFT: "\u2199",
  ARROW_UPP_LFT: "\u2196",
  ARROW_STILL: "\u2022",
  ARROW_FLIP_H: "\u2194",
  ARROW_FLIP_V: "\u2195",
  ARROW_ROTATE_UPP: "\u2934",
  ARROW_ROTATE_DWN: "\u2935",
  ARROW_ROTATE_LFT: "\u2936",
  ARROW_ROTATE_RGT: "\u2937",
  ARROW_ROTATE_CLOCK: "\u21BB",
  ARROW_ROTATE_ANTI_CLOCK: "\u21BA",
  FRACTION_1_4: "\xBC",
  FRACTION_1_2: "\xBD",
  FRACTION_3_4: "\xBE",
  SUPERSCRIPT: {
    1: "\xB9",
    2: "\xB2",
    3: "\xB3",
    4: "\u2074",
    5: "\u2075",
    6: "\u2076",
    7: "\u2077",
    8: "\u2078",
    9: "\u2079",
    0: "\u2070",
    "-": "\u207B",
    "+": "\u207A",
    "=": "\u207C",
    "(": "\u207D",
    ")": "\u207E",
    i: "\u2071",
    n: "\u207F",
    o: "\xB0",
    "*": "\xB0"
  },
  BLOCK: {
    full: "\u2588",
    upperHalf: "\u2580",
    lowerOneEighth: "\u2581",
    lowerOneQuarter: "\u2582",
    lowerThreeEighths: "\u2583",
    lowerHalf: "\u2584",
    lowerFiveEighths: "\u2585",
    lowerThreeQuarters: "\u2586",
    lowerSevenEighths: "\u2587",
    leftSevenEighths: "\u2589",
    leftThreeQuarters: "\u258A",
    leftFiveEighths: "\u258B",
    leftHalf: "\u258C",
    leftThreeEighths: "\u258D",
    leftOneQuarter: "\u258E",
    leftOneEighth: "\u258F",
    rightHalf: "\u2590",
    upperOneEighth: "\u2594",
    rightOneEighth: "\u2595"
  },
  SHADE: {
    light: "\u2591",
    medium: "\u2592",
    dark: "\u2593"
  },
  QUADRANT: {
    upperLeft: "\u2598",
    upperRight: "\u259D",
    lowerLeft: "\u2596",
    lowerRight: "\u2597",
    upperLeftLowerLeftLowerRight: "\u2599",
    upperLeftLowerRight: "\u259A",
    upperLeftUpperRightLowerLeft: "\u259B",
    upperLeftUpperRightLowerRight: "\u259C",
    upperRightLowerLeft: "\u259E",
    upperRightLowerLeftLowerRight: "\u259F"
  }
};
var superscript = (num) => (num ?? "").toString().split("").map((char) => char === " " ? " " : symbols.SUPERSCRIPT[char] || symbols.SUPERSCRIPT["*"]).join("");

// src/tools/queue.ts
var QueueManager = class {
  constructor(defaultPauseTime) {
    this.promises = /* @__PURE__ */ new Map();
    this.pauseTimes = /* @__PURE__ */ new Map();
    this.defaultPauseTime = 0;
    const args = {
      defaultPauseTime: safe.num(defaultPauseTime, true, 0)
    };
    this.setDefaultPauseTime(args.defaultPauseTime);
  }
  getPromise(id) {
    const args = {
      id: safe.str(id, false, StringTools.randomId())
    };
    const existing = this.promises.get(args.id);
    if (existing)
      return existing;
    const promise = Promise.resolve();
    this.promises.set(args.id, promise);
    return promise;
  }
  setDefaultPauseTime(time) {
    const args = {
      time: safe.num(time, true, 0)
    };
    this.defaultPauseTime = args.time;
  }
  setPauseTime(id, time) {
    const args = {
      id: safe.str(id, false, StringTools.randomId()),
      time: safe.num(time, true, 0)
    };
    this.pauseTimes.set(args.id, args.time);
  }
  add(id, promiseItem) {
    const args = {
      id: safe.str(id, false, StringTools.randomId()),
      promiseItem: safe.func(promiseItem, async () => promiseItem)
    };
    const promise = this.getPromise(args.id).then(async () => {
      const result = await args.promiseItem();
      const pauseTime = this.pauseTimes.get(args.id) ?? this.defaultPauseTime;
      if (pauseTime >= 0)
        await wait(pauseTime);
      return result;
    });
    this.promises.set(args.id, promise);
    return promise;
  }
  new(defaultPauseTime = 0) {
    const args = {
      defaultPauseTime: safe.num(defaultPauseTime, true, 0)
    };
    return new QueueManager(args.defaultPauseTime);
  }
  static new(defaultPauseTime = 0) {
    const args = {
      defaultPauseTime: safe.num(defaultPauseTime, true, 0)
    };
    return new QueueManager(args.defaultPauseTime);
  }
};
var queue = new QueueManager();

// src/tools/cachier.ts
var cachierFactory = (defaultExpiresIn = Infinity) => {
  let storedItems = {};
  let defExpiresInVal = defaultExpiresIn;
  const getValidatedValue = (id) => {
    const item = storedItems[id];
    if (item === void 0)
      return { hasValidValue: false };
    if (item.expires < Date.now()) {
      delete storedItems[id];
      return { hasValidValue: false };
    }
    return { hasValidValue: true, value: item.value };
  };
  const get = (id) => {
    const args = {
      id: safe.str(id, false, "NO-ID")
    };
    const valid = getValidatedValue(args.id);
    return valid.hasValidValue ? valid.value : void 0;
  };
  const getOrSave = (id, orValue, expiresIn = getDefaultExpiresIn()) => {
    const args = {
      id: safe.str(id, false, "NO-ID"),
      orValue,
      expiresIn: safe.num(expiresIn, false, void 0, void 0, getDefaultExpiresIn())
    };
    try {
      const valid = getValidatedValue(args.id);
      if (valid.hasValidValue)
        return valid.value;
      storedItems[args.id] = {
        expires: Date.now() + args.expiresIn,
        value: args.orValue
      };
      return args.orValue;
    } catch (err) {
      return void 0;
    }
  };
  const getOrRun = (id, orFunc, expiresIn = getDefaultExpiresIn()) => {
    const args = {
      id: safe.str(id, false, "NO-ID"),
      orFunc: safe.func(orFunc),
      expiresIn: safe.num(expiresIn, false, void 0, void 0, getDefaultExpiresIn())
    };
    try {
      const valid = getValidatedValue(args.id);
      if (valid.hasValidValue)
        return valid.value;
      const newItem = args.orFunc(args.id);
      storedItems[args.id] = {
        expires: Date.now() + args.expiresIn,
        value: newItem
      };
      return newItem;
    } catch (err) {
      return void 0;
    }
  };
  const save = (id, item, expiresIn = getDefaultExpiresIn()) => {
    const args = {
      id: safe.str(id, false, "NO-ID"),
      item,
      expiresIn: safe.num(expiresIn, false, void 0, void 0, getDefaultExpiresIn())
    };
    storedItems[args.id] = {
      expires: Date.now() + args.expiresIn,
      value: args.item
    };
    return args.item;
  };
  const remove = (id) => {
    const args = {
      id: safe.str(id, false, "NO-ID")
    };
    delete storedItems[args.id];
  };
  const clear = () => {
    storedItems = {};
  };
  const getAll = () => {
    const entries2 = Object.keys(storedItems).map((id) => [id, getValidatedValue(id)]).filter(([_, { hasValidValue }]) => hasValidValue).map(([id, { value }]) => [id, value]);
    return Object.fromEntries(entries2);
  };
  const getDefaultExpiresIn = () => defExpiresInVal;
  const setDefaultExpiresIn = (newValue = Infinity) => {
    const args = {
      newValue: safe.num(newValue, false, void 0, void 0, Infinity)
    };
    defExpiresInVal = args.newValue;
    return defExpiresInVal;
  };
  const create2 = (defaultExpiresIn2 = Infinity) => cachierFactory(defaultExpiresIn2);
  return {
    get,
    getOrSave,
    getOrRun,
    save,
    remove,
    clear,
    getAll,
    getDefaultExpiresIn,
    setDefaultExpiresIn,
    create: create2
  };
};
var cachier = cachierFactory();

// src/tools/onDemand.ts
var onDemand = (input) => {
  const args = {
    input: safe.obj(input, true, {})
  };
  const result = {};
  const cache = {};
  const keys = Object.keys(args.input);
  const get = (key) => () => {
    if (cache[key])
      return cache[key];
    const func = args.input[key];
    const r = typeof func === "function" ? func() : func;
    cache[key] = r;
    return r;
  };
  const set = (key) => (value) => cache[key] = value;
  for (let key of keys) {
    Object.defineProperty(result, key, {
      enumerable: true,
      get: get(key),
      set: set(key)
    });
  }
  return result;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ArrayTools,
  CENTURY,
  ColourTools,
  DAY,
  DECADE,
  ErrorTools,
  HOUR,
  MILLENNIUM,
  MILLISECOND,
  MINUTE,
  MONTH,
  MathsTools,
  ObjectTools,
  PromiseTools,
  QueueManager,
  SECOND,
  StringTools,
  TimeTools,
  WEEK,
  YEAR,
  all,
  allLimit,
  allLimitObj,
  allObj,
  cachier,
  centuries,
  clx,
  create,
  days,
  decades,
  each,
  eachLimit,
  entries,
  everys,
  ff,
  filled,
  filters,
  fn,
  getDeferred,
  getMultiBarManager,
  getProgressBar,
  getTimer,
  group,
  groupObj,
  groups,
  hours,
  interval,
  map,
  mapLimit,
  maps,
  millenniums,
  milliseconds,
  minutes,
  months,
  onDemand,
  partition,
  progressBar,
  queue,
  randomise,
  range,
  reduces,
  repeat,
  retry,
  retryOr,
  reverse,
  roll,
  safe,
  seconds,
  sortByMapped,
  sortNumberedText,
  sorts,
  stopInterval,
  superscript,
  symbols,
  timer,
  times,
  tryOr,
  wait,
  waitEvery,
  waitFor,
  waitUntil,
  waiters,
  weeks,
  years,
  zip,
  zipMax
});
