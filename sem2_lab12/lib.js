const sum = (a, b) => +a + +b;

const sumMany = (...args) =>
  args.reduce((sum, next) => {
    +sum + +next;
  }, 0);

const multi = (...args) => {
  if (!args.length) {
    return null;
  }
  return args.reduce((sum, next) => sum * next);
};

const getLast = array => {
  const length = array ? array.length : 0;
  return length ? array[length - 1] : undefined;
};

const inRange = (number, start, end) => {
  const _start = typeof end === "undefined" ? 0 : start;
  const _end = _start >= 0 ? end : start;
  return _start <= number && number < _end;
};

const reverse = arg =>
  Array.isArray(arg)
    ? arg.reverse()
    : String(arg)
        .split("")
        .reverse();

const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Divide by 0");
  }
  return a / b;
};

module.exports = {
  sum,
  sumMany,
  multi,
  getLast,
  inRange,
  reverse,
  divide
};
