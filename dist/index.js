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
  getProgressBar: () => getProgressBar,
  getTimer: () => getTimer,
  group: () => group,
  groupObj: () => groupObj,
  hours: () => hours,
  interval: () => interval,
  map: () => map,
  mapLimit: () => mapLimit,
  maps: () => maps,
  millenniums: () => millenniums,
  milliseconds: () => milliseconds,
  minutes: () => minutes,
  months: () => months,
  partition: () => partition,
  printLn: () => printLn,
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
  times2.milliseconds = (x = 1) => x;
  times2.seconds = (x = 1) => x * times2.SECOND;
  times2.minutes = (x = 1) => x * times2.MINUTE;
  times2.hours = (x = 1) => x * times2.HOUR;
  times2.days = (x = 1) => x * times2.DAY;
  times2.weeks = (x = 1) => x * times2.WEEK;
  times2.months = (x = 1) => x * times2.MONTH;
  times2.years = (x = 1) => x * times2.YEAR;
  times2.decades = (x = 1) => x * times2.DECADE;
  times2.centuries = (x = 1) => x * times2.CENTURY;
  times2.millenniums = (x = 1) => x * times2.MILLENNIUM;
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
  waiters2.wait = (time) => new Promise((resolve) => setTimeout(resolve, time));
  const PING_RATIO = 0.75;
  const ROUND_AMOUNT = 1.5;
  const getPingDuration = (time, now = Date.now()) => Math.ceil((time - now) * PING_RATIO / ROUND_AMOUNT) * ROUND_AMOUNT;
  waiters2.waitUntil = async (time) => {
    while (Date.now() < time) {
      await waiters2.wait(getPingDuration(time));
    }
    return null;
  };
  waiters2.waitFor = async (time) => waiters2.waitUntil(Date.now() + time);
  const getNextEvery = (timing, offset = 0) => {
    const now = Date.now();
    const result = timing - (now - offset) % timing;
    return result <= 10 ? timing : result;
  };
  waiters2.waitEvery = (timing, offset) => waiters2.waitFor(getNextEvery(timing, offset));
  const stopped = [];
  waiters2.stopInterval = (intID) => stopped.push(intID);
  waiters2.interval = (action, timing) => {
    const intID = Math.floor(Math.random() * Math.pow(10, 10));
    let count = 0;
    const run = async () => {
      await waiters2.waitEvery(timing);
      if (stopped.includes(intID)) {
        return;
      }
      action(intID, ++count);
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
  let utils;
  ((utils2) => {
    utils2.isNumString = (text) => Boolean(text.match(/^[0-9-.]+$/));
    utils2.partitionNums = (ignoreCase) => (name) => (ignoreCase ? name.toLowerCase() : name).split(/([0-9]+)/).map((s) => utils2.isNumString(s) ? Number(s) : s);
  })(utils = ArrayTools2.utils || (ArrayTools2.utils = {}));
  ArrayTools2.create = (length = 1, value = 1) => new Array(Math.floor(Math.max(0, length))).fill(value);
  ArrayTools2.filled = ArrayTools2.create;
  ArrayTools2.range = (length = 1, multiplier = 1, offset = 0) => ArrayTools2.create(length, 1).map((v, i) => MathsTools.fixFloat(i * multiplier) + offset);
  const zipFn = (length, arrs) => ArrayTools2.range(length).map((i) => arrs.map((arr) => (arr || [])[i]));
  ArrayTools2.zip = (...arrs) => zipFn(Math.min(...(arrs.length ? arrs : [[]]).map((arr) => (arr || []).length)), arrs);
  ArrayTools2.zipMax = (...arrs) => zipFn(Math.max(...(arrs.length ? arrs : [[]]).map((arr) => (arr || []).length)), arrs);
  ArrayTools2.sortByMapped = (arr, mapFn, sortFn = fn.asc) => ArrayTools2.zip(arr, arr.map(mapFn)).sort((a, b) => sortFn(a[1], b[1])).map(([v]) => v);
  ArrayTools2.randomise = (arr) => ArrayTools2.sortByMapped(arr, () => Math.random());
  ArrayTools2.reverse = (arr) => [...arr].reverse();
  ArrayTools2.entries = (arr) => ArrayTools2.zip(ArrayTools2.range(arr.length), arr);
  ArrayTools2.repeat = (maxLength, ...items) => {
    const simple = ArrayTools2.create(maxLength, items[0]);
    return items.length === 1 ? simple : simple.map((v, i) => items[i % items.length]);
  };
  ArrayTools2.roll = (distance, arr) => [
    ...arr.slice(distance % arr.length),
    ...arr.slice(0, distance % arr.length)
  ];
  ArrayTools2.sortNumberedText = (texts, ignoreCase = true) => {
    return ArrayTools2.sortByMapped(texts, utils.partitionNums(ignoreCase), (a, b) => {
      for (let i in a) {
        const result = fn.asc(a[i], b[i]);
        if (result !== 0)
          return result;
      }
      return 0;
    });
  };
  ArrayTools2.partition = (array, partitionSize = Math.ceil(array.length / 2)) => {
    const numParts = Math.ceil(array.length / partitionSize);
    const result = [];
    for (let i = 0; i < numParts; i++) {
      result.push(array.slice(i * partitionSize, (i + 1) * partitionSize));
    }
    return result;
  };
  ArrayTools2.groupObj = (array, mapFn) => {
    const result = {};
    array.forEach((item, index) => {
      const key = mapFn(item, index, array);
      if (key === void 0)
        return;
      if (!result[key])
        result[key] = [];
      result[key].push(item);
    });
    return result;
  };
  ArrayTools2.group = (array, mapFn) => {
    const obj = ArrayTools2.groupObj(array, mapFn);
    return Object.values(obj);
  };
})(ArrayTools || (ArrayTools = {}));
var create = ArrayTools.create;
var filled = ArrayTools.create;
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
  MathsTools2.fixFloat = (num, precision = 6) => Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);
  MathsTools2.ff = MathsTools2.fixFloat;
  MathsTools2.addAll = (...args) => args.reduce((acc, num) => acc + num, 0);
  MathsTools2.floorTo = (to, value) => MathsTools2.fixFloat(Math.floor(value / to) * to);
  MathsTools2.roundTo = (to, value) => MathsTools2.fixFloat(Math.round(value / to) * to);
  MathsTools2.ceilTo = (to, value) => MathsTools2.fixFloat(Math.ceil(value / to) * to);
  let round;
  ((round2) => {
    round2.floorTo = MathsTools2.floorTo;
    round2.roundTo = MathsTools2.roundTo;
    round2.ceilTo = MathsTools2.ceilTo;
    round2.to = MathsTools2.roundTo;
  })(round = MathsTools2.round || (MathsTools2.round = {}));
  MathsTools2.lerp = (progress, fromVal, toVal) => fromVal + (toVal - fromVal) * progress;
  MathsTools2.lerpArray = (progress, fromArr, toArr) => ArrayTools.zip(fromArr, toArr).map(([fromVal, toVal]) => MathsTools2.lerp(progress, fromVal, toVal));
  MathsTools2.lerpObj = (progress, fromObj, toObj) => {
    const entries2 = Object.entries(fromObj);
    const lerped = entries2.map(([key, fromVal]) => typeof fromVal === "number" ? [key, MathsTools2.lerp(progress, fromVal, toObj[key])] : [key, fromVal]);
    return Object.fromEntries(lerped);
  };
  MathsTools2.clamp = (value, min, max) => Math.max(Math.min(min, max), Math.min(value, Math.max(min, max)));
  MathsTools2.getOrdinal = (num = 0) => {
    const lastDigit = num % 10;
    if ([11, 12, 13].includes(num)) {
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
  fn2.dedupe = (item, index, array) => array.indexOf(item) === index;
  fn2.dedupeMapped = (mapFn) => {
    let mapped;
    return (item, index, array) => {
      if (!mapped)
        mapped = array.map(mapFn);
      return mapped.indexOf(mapped[index]) === index;
    };
  };
  fn2.toString = (item) => item + "";
  fn2.toNumber = (item) => Number(item);
  fn2.toBool = (item) => item !== "false" && Boolean(item);
  fn2.toProp = (prop) => (item) => item && item[prop];
  fn2.toFixed = (precision) => (num) => MathsTools.fixFloat(num, precision);
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
    return (a, b) => sortFn(a[propName], b[propName]);
  };
  fn2.nearestTo = (target) => (a, b) => Math.abs(Number(target) - Number(a)) - Math.abs(Number(target) - Number(b));
  fn2.furthestFrom = (target) => (a, b) => Math.abs(Number(target) - Number(b)) - Math.abs(Number(target) - Number(a));
  fn2.arrayAsc = (a, b) => {
    for (let i in a) {
      const result2 = fn2.asc(a[i], b[i]);
      if (result2 !== 0)
        return result2;
    }
    return 0;
  };
  fn2.arrayDesc = (a, b) => {
    for (let i in a) {
      const result2 = fn2.desc(a[i], b[i]);
      if (result2 !== 0)
        return result2;
    }
    return 0;
  };
  fn2.combine = (a, b) => a + b;
  fn2.combineProp = (propName) => (a, b) => a[propName] + b[propName];
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
    let result2;
    return (prev, curr, index, arr) => {
      if (result2)
        return result2;
      const mapped = arr.map(mapFn);
      const uniqueU = mapped.filter(fn2.dedupe);
      const uniqueT = arr.filter(fn2.dedupeMapped(mapFn));
      const counts = uniqueU.map((item) => mapped.filter((i) => i === item)).map((a) => a.length);
      const max = Math.max(...counts);
      result2 = uniqueT[counts.indexOf(max)];
      return result2;
    };
  };
  fn2.isAllEqual = (val, i, arr) => val === arr[0];
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
  })(everys2 = fn2.everys || (fn2.everys = {}));
})(fn || (fn = {}));
var filters = fn.filters;
var maps = fn.maps;
var sorts = fn.sorts;
var reduces = fn.reduces;
var everys = fn.everys;

// src/tools/fakeChalk.ts
var noWrap = (x) => x;
var noChalk = {
  dim: noWrap,
  bold: noWrap
};

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
    if (duration === 0)
      return "";
    const allUnitValues = units.map((unit, index) => {
      var _a;
      const previousUnitValue = ((_a = units[index - 1]) == null ? void 0 : _a.value) ?? Infinity;
      const amount = Math.floor(Math.abs(duration) % previousUnitValue / unit.value);
      return { amount, unit };
    }).filter(({ amount }) => amount > 0);
    const results = allUnitValues.slice(0, maxUnits).map(({ amount, unit }) => {
      const labelObj = longNames ? unit.long : unit.short;
      const label = amount > 1 ? labelObj.plural : labelObj.singular;
      return `${amount}${label}`;
    });
    if (longNames) {
      if (results.length <= 1) {
        return results.join("");
      }
      return [...results.slice(0, -1), "&&&&", ...results.slice(-1)].join(", ").replace("&&&&,", "&").replace(", &", " &");
    }
    return results.join(" ");
  };
})(TimeTools || (TimeTools = {}));

// src/tools/timer.ts
var getTimer = (name, verbose = false, wrapperFn = noWrap, chalk = noChalk, displayNames) => {
  let startTimes = {};
  let endTimes = {};
  let dispNames = {
    ...displayNames || {}
  };
  const names = Object.fromEntries(Object.keys(dispNames).map((key) => [key, key]));
  const getDuration = (label) => {
    const start = startTimes[label];
    const end = endTimes[label] || Date.now();
    return end - start;
  };
  const logLine = (label, prefix = "", nameColLength = 0, duration = getDuration(label)) => {
    const lineStart = `${dispNames[label] || label}: `.padEnd(nameColLength + 1, " ");
    const lineEnd = `${TimeTools.toReadableDuration(duration, false, 4)}`;
    const line = chalk.bold(prefix + lineStart) + lineEnd;
    console.log(wrapperFn(line));
    return (prefix + lineStart + lineEnd).replace("	", "").length;
  };
  startTimes.TOTAL = Date.now();
  return {
    ...names,
    start(...labelArr) {
      for (let label of labelArr) {
        startTimes[label] = Date.now();
      }
    },
    end(...labelArr) {
      for (let label of labelArr) {
        endTimes[label] = Date.now();
        if (verbose) {
          logLine(label);
          console.log("");
        }
      }
    },
    switch(endLabel, startLabel) {
      if (endLabel)
        this.end(...[endLabel].flat());
      if (startLabel)
        this.start(...[startLabel].flat());
    },
    log(prefix, customEntries) {
      let lc = 0;
      const log = (...args) => {
        lc++;
        console.log(...args);
      };
      const logLine2 = (label, prefix2, nameColLength2, duration) => {
        lc++;
        return logLine(label, prefix2, nameColLength2, duration);
      };
      const labels = Object.keys(startTimes);
      log("");
      log(wrapperFn(chalk.bold([prefix, name, "Times:"].filter((x) => x && x.trim()).join(" "))));
      const displayNames2 = [...labels, ...Object.keys(names)].map((label) => dispNames[label] || label);
      const nameColLength = Math.max(...displayNames2.map((text) => `${text}: `.length));
      let longest = 0;
      for (let label of labels) {
        if (label !== "TOTAL") {
          longest = Math.max(longest, logLine2(label, "	", nameColLength));
        }
      }
      if (customEntries) {
        const durations = Object.fromEntries(labels.map((label) => [label, getDuration(label)]));
        let cEntries = [];
        if (customEntries instanceof Array) {
          cEntries = customEntries.map((func) => func(durations)).map((obj) => ({ ...obj, duration: obj.duration || (obj.end || Date.now()) - (obj.start || Date.now()) }));
        } else {
          cEntries = Object.entries(customEntries).map(([label, func]) => ({ label, duration: (func || (() => 0))(durations) || 0 }));
        }
        log(wrapperFn(chalk.dim("	" + "\u23AF".repeat(longest))));
        for (let { label, duration } of cEntries) {
          logLine2(label, "	", nameColLength, duration);
        }
      }
      log(wrapperFn(chalk.dim("	" + "\u23AF".repeat(longest))));
      logLine2("TOTAL", "	", nameColLength);
      log("");
      return lc;
    },
    reset() {
      startTimes = {};
      endTimes = {};
    },
    names,
    displayNames: dispNames
  };
};
var timer = getTimer();

// src/tools/progressBar.ts
var progressBar;
((progressBar2) => {
  progressBar2.printLn = (...text) => {
    var _a, _b;
    if (((_a = process == null ? void 0 : process.stdout) == null ? void 0 : _a.clearLine) && ((_b = process == null ? void 0 : process.stdout) == null ? void 0 : _b.cursorTo)) {
      if (!text.length) {
        process.stdout.write("\n");
      } else {
        const output = text.map((item) => item.toString()).join(" ");
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.moveCursor(0, -1);
        process.stdout.clearLine(0);
        process.stdout.write(output);
        process.stdout.write("\n");
      }
    } else {
      console.log(...text);
    }
  };
  const print = (text, wrapperFn = fn.noact) => {
    const wrapped = wrapperFn(text || "");
    progressBar2.printLn(wrapped);
  };
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
    let items = [""];
    if (opts.showCount) {
      const pad = Math.max(maxNum.toString().length, opts.countWidth);
      items.push(`[${current.toString().padStart(pad, " ")} / ${(isMaxKnown ? maxNum.toString() : "?").padStart(pad, " ")}]`);
    }
    if (opts.showPercent) {
      const percent = Math.round(current / Math.max(1, maxNum) * 100);
      items.push(`(${percent.toString().padStart("100".toString().length, " ")}%)`);
    }
    const joined = items.filter((x) => x).join(" ");
    return joined.length ? " " + joined : "";
  };
  const getFullOptions = (opts = {}) => {
    var _a;
    return {
      prefix: "",
      prefixWidth: 1,
      maxWidth: ((_a = process == null ? void 0 : process.stdout) == null ? void 0 : _a.columns) ? process.stdout.columns : 100,
      wrapperFn: fn.noact,
      barWrapFn: fn.noact,
      barProgWrapFn: fn.noact,
      barCurrentWrapFn: fn.noact,
      barEmptyWrapFn: fn.noact,
      showCount: true,
      showPercent: false,
      countWidth: 0,
      progChar: "\u2588",
      emptyChar: " ",
      startChar: "\u2595",
      endChar: "\u258F",
      showCurrent: false,
      currentChar: "\u259E",
      ...opts
    };
  };
  progressBar2.getProgressBar = (max, options = {}) => {
    const opts = getFullOptions(options);
    const { prefix, prefixWidth, maxWidth, wrapperFn, startChar, endChar } = opts;
    let current = 0;
    let finished = false;
    const maxNum = typeof max === "number" ? max : 1;
    const isMaxKnown = typeof max === "number";
    const update = () => {
      const suffix = getSuffix(current, maxNum, isMaxKnown, opts);
      const fullPrefix = prefix.padEnd(prefixWidth);
      const output = `${fullPrefix}${getBarString(
        current,
        Math.max(1, maxNum),
        Math.max(0, maxWidth - [fullPrefix, suffix, startChar, endChar].join("").length),
        opts
      )}${suffix}`;
      print(output, wrapperFn);
      return output;
    };
    const next = () => {
      if (finished)
        return "";
      current++;
      return update();
    };
    const set = (newCurrent) => {
      if (finished)
        return "";
      current = newCurrent;
      return update();
    };
    const reset = () => {
      return set(0);
    };
    const start = () => {
      progressBar2.printLn();
      return update();
    };
    const finish = () => {
      finished = true;
      const output = update();
      progressBar2.printLn();
      return output;
    };
    return {
      next,
      set,
      reset,
      update,
      start,
      finish,
      max
    };
  };
})(progressBar || (progressBar = {}));
var printLn = progressBar.printLn;
var getProgressBar = progressBar.getProgressBar;

// src/tools/ObjectTools.ts
var ObjectTools;
((ObjectTools2) => {
  ObjectTools2.remodel = (obj, func) => Object.fromEntries(func(Object.entries(obj)) ?? Object.entries(obj));
  ObjectTools2.remodelEach = (obj, func) => Object.fromEntries(Object.entries(obj).map((entry, index, entries2) => func(entry, index, entries2) ?? entry));
  ObjectTools2.map = (obj, func) => ObjectTools2.remodel(obj, (entries2) => entries2.map(([key, value], index) => func(key, value, index)));
  ObjectTools2.mapValues = (obj, func) => ObjectTools2.remodel(obj, (entries2) => entries2.map(([key, value], index) => [key, func(key, value, index)]));
  ObjectTools2.mapKeys = (obj, func) => ObjectTools2.remodel(obj, (entries2) => entries2.map(([key, value], index) => [func(key, value, index), value]));
  ObjectTools2.filter = (obj, func) => ObjectTools2.remodel(obj, (entries2) => entries2.filter(([key, value], index) => func(key, value, index)));
  ObjectTools2.clean = (obj) => ObjectTools2.filter(obj, (key, value) => value !== void 0);
  ObjectTools2.invert = (obj) => ObjectTools2.remodelEach(obj, ([key, value]) => {
    var _a;
    const newKey = ((_a = value == null ? void 0 : value.toString) == null ? void 0 : _a.call(value)) ?? value + "";
    return [newKey, key];
  });
})(ObjectTools || (ObjectTools = {}));

// src/tools/StringTools.ts
var StringTools;
((StringTools2) => {
  StringTools2.capitalise = (input = "") => (input || "").split(/\s/).map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
  StringTools2.angloise = (input) => input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  StringTools2.clean = (input = "") => StringTools2.angloise([input].flat().join(" ")).replace(/\s{1,}/g, " ").replace(/[^A-Za-z0-9 ]/gi, "");
  StringTools2.repeat = (maxLength, repeated) => (repeated && typeof repeated === "string" ? repeated : "").repeat(Math.max(0, maxLength));
  const caseHandler = (overrideSplitter) => {
    const getSplit = (input = "") => {
      if (overrideSplitter)
        return overrideSplitter(input);
      const arr = [input].flat();
      return arr.map((s) => StringTools2.clean(s.replace(/-|_/g, " ")).split(" ")).flat().filter((s) => s.length);
    };
    const toCamelCase2 = (input, capitaliseFirst = false) => {
      const split = getSplit(input);
      return split.map((word, index) => index === 0 && !capitaliseFirst ? word.toLowerCase() : StringTools2.capitalise(word)).join("");
    };
    const toLowerCamelCase2 = (input) => toCamelCase2(input, false);
    const toUpperCamelCase2 = (input) => toCamelCase2(input, true);
    const toCharacterSeparated2 = (input, char, toUpper = false) => {
      const split = getSplit(input);
      return split.map((word, index) => toUpper ? word.toUpperCase() : word.toLowerCase()).join(char);
    };
    const toSlugCase2 = (input, toUpper = false) => toCharacterSeparated2(input, "-", toUpper);
    const toLowerSlugCase2 = (input) => toSlugCase2(input, false);
    const toUpperSlugCase2 = (input) => toSlugCase2(input, true);
    const toSnakeCase2 = (input, toUpper = false) => toCharacterSeparated2(input, "_", toUpper);
    const toLowerSnakeCase2 = (input) => toSnakeCase2(input, false);
    const toUpperSnakeCase2 = (input) => toSnakeCase2(input, true);
    const toSpaced2 = (input, toUpper = false) => toCharacterSeparated2(input, " ", toUpper);
    const toLowerSpaced2 = (input) => toSpaced2(input, false);
    const toUpperSpaced2 = (input) => toSpaced2(input, true);
    const toCapitalisedSpaced2 = (input) => StringTools2.capitalise(toSpaced2(input, false));
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
  const processClxArray = (arr) => arr.filter(Boolean).map((item) => {
    if (typeof item === "string")
      return item;
    if (item instanceof Array) {
      return processClxArray(item);
    }
    if (typeof item === "object") {
      return Object.keys(item).filter((key) => item[key]).join(" ");
    }
  }).flat();
  StringTools2.clx = (...args) => processClxArray(args).join(" ");
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
      return input.replaceAll(/\(|\)|\[|\]|\{|\}|\<|\>/g, (br) => {
        let id = updateInfo(infos.round, "(", ")", br) || updateInfo(infos.square, "[", "]", br) || updateInfo(infos.curly, "{", "}", br) || updateInfo(infos.angle, "<", ">", br);
        return fullSyms[br] + (id || "0") + fullSyms.END;
      });
    };
    matchBrackets2.unique = (input, replaceSymbols = {}) => runReplace(input, replaceSymbols, false);
    matchBrackets2.depth = (input, replaceSymbols = {}) => runReplace(input, replaceSymbols, true);
    matchBrackets2.clean = (input, replaceSymbols = {}) => {
      const fullSyms = matchBrackets2.getReplaceSymbols(replaceSymbols);
      const invertedSyms = ObjectTools.invert(fullSyms);
      const { END, ...withoutEND } = fullSyms;
      const startSyms = Object.values(withoutEND);
      const regex = new RegExp(`(${startSyms.map((s) => `\\${s}`).join("|")})[0-9]+${fullSyms.END}`, "g");
      return input.replaceAll(regex, (m, startSym) => invertedSyms[startSym] || "");
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
      const regex = new RegExp(`${openSym}${findID}${endSym}(.|
)*?${closeSym}${findID}${endSym}`, "g");
      const foundDirty = Array.from(fullDirty.matchAll(regex) || []).map((match) => match[0]);
      const found = foundDirty.map((str) => matchBrackets2.clean(str, replaceSymbols));
      return found;
    };
    matchBrackets2.grabDepth = (input, bracketType = "round", depthID = 0, replaceSymbols = {}) => {
      const syms = getBracketSymsForMatch(bracketType, replaceSymbols);
      const fullDirty = matchBrackets2.depth(input, replaceSymbols);
      return runGrabSearch(fullDirty, syms, depthID !== void 0 ? depthID + "" : "", replaceSymbols);
    };
    matchBrackets2.grabUnique = (input, bracketType = "round", uniqueID = 0, replaceSymbols = {}) => {
      var _a;
      const syms = getBracketSymsForMatch(bracketType, replaceSymbols);
      const fullDirty = matchBrackets2.unique(input, replaceSymbols);
      return (_a = runGrabSearch(fullDirty, syms, uniqueID !== void 0 ? uniqueID + "" : "", replaceSymbols)) == null ? void 0 : _a[0];
    };
    matchBrackets2.grab = (input, bracketType = "round", replaceSymbols = {}) => {
      const syms = getBracketSymsForMatch(bracketType, replaceSymbols);
      const fullDirty = matchBrackets2.unique(input, replaceSymbols);
      const [openSym, closeSym, endSym] = syms;
      const regex = new RegExp(`(?:${openSym}|${closeSym})([0-9]+)${endSym}`, "g");
      const allIDs = Array.from(fullDirty.matchAll(regex) || []).map((match) => Number(match[1])).filter(fn.dedupe);
      const found = allIDs.map((uniqueID) => {
        var _a;
        return (_a = runGrabSearch(fullDirty, syms, uniqueID + "", replaceSymbols)) == null ? void 0 : _a[0];
      });
      return found;
    };
    matchBrackets2.getReplaceSymbols = (replaceSymbols = {}) => {
      return {
        ...defaultReplaceSymbols,
        ...replaceSymbols
      };
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
  PromiseTools2.all = async (promises) => {
    await Promise.all(promises);
  };
  PromiseTools2.allLimit = (limit, items, noThrow = false) => {
    let runningCount = 0;
    let errors = [];
    let remaining = [...items];
    const result = [];
    const deferred = PromiseTools2.getDeferred();
    const update = () => {
      if (remaining.length === 0 && runningCount === 0) {
        if (errors.length && !noThrow) {
          deferred.reject(errors);
          return;
        }
        deferred.resolve(result);
        return;
      }
      if (runningCount < limit && remaining.length) {
        const next = remaining.shift();
        const index = items.indexOf(next);
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
    for (let i = 0; i < Math.min(limit, items.length); i++) {
      update();
    }
    if (!items || items.length === 0) {
      deferred.resolve(result);
    }
    return deferred.promise;
  };
  PromiseTools2.each = async (items, func) => {
    await Promise.all(items.map((item, index, array) => func(item, index, array)));
  };
  PromiseTools2.eachLimit = async (limit, items, func) => {
    await PromiseTools2.allLimit(
      limit,
      items.map((item, index, array) => () => func(item, index, array))
    );
  };
  PromiseTools2.map = async (items, func) => {
    const result = [];
    await Promise.all(
      items.map(async (item, index, array) => {
        const res = await func(item, index, array);
        result[index] = res;
      })
    );
    return result;
  };
  PromiseTools2.mapLimit = async (limit, items, func) => await PromiseTools2.allLimit(
    limit,
    items.map((item, index, array) => () => {
      const res = func(item, index, array);
      return res;
    })
  );
  const objectify = async (func, input) => {
    const keys = Object.keys(input);
    const results = await func(Object.values(input));
    return Object.fromEntries(keys.map((key, index) => [key, results[index]]));
  };
  PromiseTools2.allObj = async (input) => {
    return objectify((arr) => Promise.all(arr), input);
  };
  PromiseTools2.allLimitObj = async (limit, input, noThrow = false) => {
    return objectify((items) => {
      return PromiseTools2.allLimit(limit, items, noThrow);
    }, input);
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
    const loop = async (attempt, lastErr) => {
      if (attempt >= maxTries) {
        if (!suppress)
          throw lastErr;
        return void 0;
      }
      try {
        const result = await run(attempt);
        return result;
      } catch (err) {
        if (delay)
          await wait(delay);
        return await loop(attempt + 1, err);
      }
    };
    return await loop(0);
  };
  ErrorTools2.retryOr = async (orValue, maxTries = 10, delay = 0, suppress = true, run = fn.result(orValue)) => ErrorTools2.tryOr(orValue, () => ErrorTools2.retry(maxTries, delay, suppress, run));
})(ErrorTools || (ErrorTools = {}));
var tryOr = ErrorTools.tryOr;
var retry = ErrorTools.retry;
var retryOr = ErrorTools.retryOr;

// src/tools/ColourTools.ts
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
    const trimmed = (input + "").trim();
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
    const hexs = colour.map((val) => (val ?? 0).toString(16).padStart(2, "0"));
    return `#${hexs.join("")}`;
  };
  ColourTools2.getLuminance = (rgb) => {
    const [y, u, v] = ColourTools2.toYUV(rgb);
    return y;
  };
  ColourTools2.toYUV = (rgb) => {
    const [r, g, b] = rgb;
    const y = MathsTools.fixFloat(0.299 * (r ?? 0) + 0.587 * (g ?? 0) + 0.114 * (b ?? 0));
    const u = MathsTools.fixFloat(-0.14713 * (r ?? 0) - 0.28886 * (g ?? 0) + 0.436 * (b ?? 0));
    const v = MathsTools.fixFloat(0.615 * (r ?? 0) - 0.51499 * (g ?? 0) - 0.10001 * (b ?? 0));
    return [y, u, v];
  };
  ColourTools2.toHSL = (colour, round = true) => {
    const r = colour[0] / 255;
    const g = colour[1] / 255;
    const b = colour[2] / 255;
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
    if (round) {
      return [roundMinMax(result[0], 0, 360), roundMinMax(result[1], 0, 100), roundMinMax(result[2], 0, 100)];
    }
    return result;
  };
  ColourTools2.fromHSL = (hsl, round = true) => {
    const h = hsl[0];
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    const k = (n) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    const result = [255 * f(0), 255 * f(8), 255 * f(4)];
    if (round) {
      return [roundMinMax(result[0], 0, 255), roundMinMax(result[1], 0, 255), roundMinMax(result[2], 0, 255)];
    }
    return result;
  };
  ColourTools2.invertColour = (rgb) => {
    const [r, g, b] = rgb;
    return [255 - r, 255 - g, 255 - b];
  };
  const white = [255, 255, 255];
  const black = [0, 0, 0];
  ColourTools2.getContrastedColour = (colour) => ColourTools2.getLuminance(colour) > 186 ? black : white;
  ColourTools2.getLimitedColour = (colour, checkFn, adjustFn) => {
    const hsl = ColourTools2.toHSL(colour);
    if (checkFn(hsl)) {
      const adjusted = adjustFn(hsl);
      const out = ColourTools2.fromHSL(adjusted);
      return out;
    }
    return colour;
  };
})(ColourTools || (ColourTools = {}));

// src/tools/symbols.ts
var symbols = {
  TAB: "	",
  NBSP: " ",
  TICK: "\u2714",
  CROSS: "\u2716",
  PLUS: "+",
  MINUS: "-",
  TIMES: "\xD7",
  DIVIDE: "\xF7",
  ELLIPSIS: "\u2026",
  BULLET: "\u2022",
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
  }
};
var superscript = (num) => (num ?? "").toString().split("").map((char) => char === " " ? " " : symbols.SUPERSCRIPT[char] || symbols.SUPERSCRIPT["*"]).join("");

// src/tools/queue.ts
var QueueManager = class {
  constructor(defaultPauseTime) {
    this.promises = /* @__PURE__ */ new Map();
    this.pauseTimes = /* @__PURE__ */ new Map();
    this.defaultPauseTime = 0;
    if (defaultPauseTime)
      this.setDefaultPauseTime(defaultPauseTime);
  }
  getPromise(id) {
    const existing = this.promises.get(id);
    if (existing)
      return existing;
    const promise = Promise.resolve();
    this.promises.set(id, promise);
    return promise;
  }
  setDefaultPauseTime(time) {
    this.defaultPauseTime = time;
  }
  setPauseTime(id, time) {
    this.pauseTimes.set(id, time);
  }
  add(id, fn2) {
    const promise = this.getPromise(id).then(async () => {
      const result = await fn2();
      const pauseTime = this.pauseTimes.get(id) ?? -1;
      if (pauseTime >= 0)
        await wait(pauseTime);
      return result;
    });
    this.promises.set(id, promise);
    return promise;
  }
  new(defaultPauseTime) {
    return new QueueManager(defaultPauseTime);
  }
};
var queue = new QueueManager();
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
  getProgressBar,
  getTimer,
  group,
  groupObj,
  hours,
  interval,
  map,
  mapLimit,
  maps,
  millenniums,
  milliseconds,
  minutes,
  months,
  partition,
  printLn,
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
