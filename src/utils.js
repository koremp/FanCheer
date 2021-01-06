export function get(key) {
  return (obj) => obj[key];
}

export function equal(key, value) {
  return (obj) => obj[key] === value;
}

export function zeroPad(nr, base) {
  const len = (String(base).length - String(nr).length) + 1;
  return len > 0 ? new Array(len).join('0') + nr : nr;
}
