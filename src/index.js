module.exports = function reverse (n) {
  if (n < 0) {
    n = n * -1;
  }

  let x = '';
  for ( let i = 0; i < String(n).length; i++) {
    x = x + String(n)[String(n).length - 1 - i];
  }

  return Number(x);
};
