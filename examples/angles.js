/*
Fraction.js v5.3.4 8/22/2025
https://raw.org/article/rational-numbers-in-javascript/

Copyright (c) 2025, Robert Eisele (https://raw.org/)
Licensed under the MIT license.
*/

// This example generates a list of angles with human readable radians

const { Fraction } = require('../lib/index.js');

const tab = [];
for (let d = 1; d <= 360; d++) {
  const pi = new Fraction(2, 360).mul(d);
  const tau = new Fraction(1, 360).mul(d);

  if (pi.d <= 6n && pi.d != 5n)
    tab.push([d, pi.toFraction() + 'pi', tau.toFraction() + 'tau']);
}

console.table(tab);
