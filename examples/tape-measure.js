/*
Fraction.js v5.3.4 8/22/2025
https://raw.org/article/rational-numbers-in-javascript/

Copyright (c) 2025, Robert Eisele (https://raw.org/)
Licensed under the MIT license.
*/
const { Fraction } = require('../lib/index.js');

function closestTapeMeasure(frac) {
  // A tape measure is usually divided in parts of 1/16

  return new Fraction(frac).roundTo('1/16');
}
console.log(closestTapeMeasure('1/3')); // 5/16
