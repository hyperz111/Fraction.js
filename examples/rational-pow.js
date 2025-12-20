/*
Fraction.js v5.3.4 8/22/2025
https://raw.org/article/rational-numbers-in-javascript/

Copyright (c) 2025, Robert Eisele (https://raw.org/)
Licensed under the MIT license.
*/
const { Fraction } = require('../lib/index.js');

// Calculates (a/b)^(c/d) if result is rational using Newton's Method
// Derivation: https://raw.org/book/analysis/rational-numbers/
function root(a, b, c, d) {
  // Initial estimate
  let x = new Fraction(100 * (Math.floor(Math.pow(a / b, c / d)) || 1), 100);
  const abc = new Fraction(a, b).pow(c);

  for (let i = 0; i < 30; i++) {
    const n = abc
      .mul(x.pow(1 - d))
      .sub(x)
      .div(d)
      .add(x);

    if (x.n === n.n && x.d === n.d) {
      return n;
    }
    x = n;
  }
  return null;
}

root(18, 2, 1, 2); // 3/1
