var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/tools/times.ts
var times_exports = {};
__export(times_exports, {
  CENTURY: () => CENTURY,
  DAY: () => DAY,
  DECADE: () => DECADE,
  HOUR: () => HOUR,
  MILLENNIUM: () => MILLENNIUM,
  MILLISECOND: () => MILLISECOND,
  MINUTE: () => MINUTE,
  MONTH: () => MONTH,
  SECOND: () => SECOND,
  WEEK: () => WEEK,
  YEAR: () => YEAR,
  centuries: () => centuries,
  days: () => days,
  decades: () => decades,
  hours: () => hours,
  millenniums: () => millenniums,
  milliseconds: () => milliseconds,
  minutes: () => minutes,
  months: () => months,
  seconds: () => seconds,
  weeks: () => weeks,
  years: () => years
});
var MILLISECOND = 1;
var SECOND = 1e3 * MILLISECOND;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
var WEEK = 7 * DAY;
var MONTH = 30 * DAY;
var YEAR = 365.25 * DAY;
var DECADE = 10 * YEAR;
var CENTURY = 100 * YEAR;
var MILLENNIUM = 1e3 * YEAR;
var milliseconds = (x = 1) => x;
var seconds = (x = 1) => x * SECOND;
var minutes = (x = 1) => x * MINUTE;
var hours = (x = 1) => x * HOUR;
var days = (x = 1) => x * DAY;
var weeks = (x = 1) => x * WEEK;
var months = (x = 1) => x * MONTH;
var years = (x = 1) => x * YEAR;
var decades = (x = 1) => x * DECADE;
var centuries = (x = 1) => x * CENTURY;
var millenniums = (x = 1) => x * MILLENNIUM;

// src/tools/waiters.ts
var waiters_exports = {};
__export(waiters_exports, {
  interval: () => interval,
  stopInterval: () => stopInterval,
  wait: () => wait,
  waitEvery: () => waitEvery,
  waitFor: () => waitFor,
  waitUntil: () => waitUntil
});
var wait = (time) => new Promise((resolve) => setTimeout(resolve, time));
var PING_RATIO = 0.75;
var ROUND_AMOUNT = 1.5;
var getPingDuration = (time, now = Date.now()) => Math.ceil((time - now) * PING_RATIO / ROUND_AMOUNT) * ROUND_AMOUNT;
var waitUntil = async (time) => {
  while (Date.now() < time) {
    await wait(getPingDuration(time));
  }
  return null;
};
var waitFor = async (time) => waitUntil(Date.now() + time);
var getNextEvery = (timing, offset = 0) => {
  const now = Date.now();
  const result = timing - (now - offset) % timing;
  return result <= 10 ? timing : result;
};
var waitEvery = (timing, offset) => waitFor(getNextEvery(timing, offset));
var stopped = [];
var stopInterval = (intID) => stopped.push(intID);
var interval = (action, timing) => {
  const intID = Math.floor(Math.random() * Math.pow(10, 10));
  let count = 0;
  const run = async () => {
    await waitEvery(timing);
    if (stopped.includes(intID)) {
      return;
    }
    action(intID, ++count);
    run();
  };
  run();
  return intID;
};

// src/tools/timer.ts
var getTimer = (name) => {
  let startTimes = {};
  let endTimes = {};
  return {
    start(...labelArr) {
      for (let label of labelArr) {
        startTimes[label] = Date.now();
      }
    },
    end(...labelArr) {
      for (let label of labelArr) {
        endTimes[label] = Date.now();
      }
    },
    switch(endLabel, startLabel) {
      if (endLabel)
        this.end(...[endLabel].flat());
      if (startLabel)
        this.start(...[startLabel].flat());
    },
    log(prefix) {
      console.log("");
      console.log([prefix, name, "Times:"].filter((x) => x && x.trim()).join(" "));
      for (let label of Object.keys(startTimes)) {
        const start = startTimes[label];
        const end = endTimes[label] || Date.now();
        const duration = end - start;
        console.log(`	${label}: ${duration / SECOND}s`);
      }
      console.log("");
    },
    reset() {
      startTimes = {};
      endTimes = {};
    }
  };
};
var timer = getTimer();

// src/tools/progressBar.ts
var progressBar_exports = {};
__export(progressBar_exports, {
  getProgressBar: () => getProgressBar,
  printLn: () => printLn
});
var noWrap = (x) => x;
var noChalk = {
  dim: noWrap,
  bold: noWrap
};
var getBarString = (current, max, width = 50, chalk = noChalk, progChar = "\u2588", emptyChar = " ", prefix = "\u2595", suffix = "\u258F") => {
  const numProgChars = Math.round(width * (Math.max(0, Math.min(current / max, 1)) / 1));
  const numEmptyChars = width - numProgChars;
  const body = `${progChar.repeat(numProgChars)}${emptyChar.repeat(numEmptyChars)}`;
  return `${chalk.dim(prefix)}${chalk.bold(body)}${chalk.dim(suffix)}`;
};
var getDefaultWidth = () => {
  if (process == null ? void 0 : process.stdout) {
    return process.stdout.columns;
  } else {
    return 100;
  }
};
var printLn = (...text) => {
  if (process == null ? void 0 : process.stdout) {
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
var print = (text, wrapperFn = noWrap) => {
  const wrapped = wrapperFn(text || "");
  printLn(wrapped);
};
var getProgressBar = (max, prefix = "", maxWidth = getDefaultWidth(), chalk = noChalk, wrapperFn = noChalk) => {
  let current = 0;
  let finished = false;
  const update = () => {
    const suffix = `[${current.toString().padStart(max.toString().length, " ")} / ${max}]`;
    const output = `${prefix} ${getBarString(current, max, Math.max(0, maxWidth - (prefix.length + suffix.length + 4)), chalk)} ${suffix}`;
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
  const finish = () => {
    finished = true;
    const output = update();
    print();
    return output;
  };
  return {
    next,
    set,
    reset,
    update,
    finish
  };
};

// src/tools/PromiseUtils.ts
var getDeferred = () => {
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
var allLimit = (items, limit = items.length, noThrow = false) => {
  let runningCount = 0;
  let errors = [];
  let remaining = [...items];
  const result = [];
  const deferred = getDeferred();
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
  return deferred.promise;
};
var objectify = async (func, input) => {
  const keys = Object.keys(input);
  const results = await func(Object.values(input));
  return Object.fromEntries(keys.map((key, index) => [key, results[index]]));
};
var allObj = async (input) => {
  return objectify(Promise.all, input);
};
var allLimitObj = async (input, limit, noThrow = false) => {
  return objectify((items) => {
    return allLimit(items, limit, noThrow);
  }, input);
};
var PromiseUtils = {
  getDeferred,
  allObj,
  allLimit,
  allLimitObj
};
export {
  CENTURY,
  DAY,
  DECADE,
  HOUR,
  MILLENNIUM,
  MILLISECOND,
  MINUTE,
  MONTH,
  PromiseUtils,
  SECOND,
  WEEK,
  YEAR,
  centuries,
  days,
  decades,
  getDeferred,
  getProgressBar,
  getTimer,
  hours,
  interval,
  millenniums,
  milliseconds,
  minutes,
  months,
  printLn,
  progressBar_exports as progressBar,
  seconds,
  stopInterval,
  timer,
  times_exports as times,
  wait,
  waitEvery,
  waitFor,
  waitUntil,
  waiters_exports as waiters,
  weeks,
  years
};
