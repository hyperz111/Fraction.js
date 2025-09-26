/*
Fraction.js v5.3.4 8/22/2025
https://raw.org/article/rational-numbers-in-javascript/

Copyright (c) 2025, Robert Eisele (https://raw.org/)
Licensed under the MIT license.
*/

// A double is basically a rational approximation itself already.
// Here is a function to extract the double and return the most precise Fraction out of it, even if it is not the closest intended number.

const _buf = new ArrayBuffer(8);
const _view = new DataView(_buf);

function doubleToRational(x) {

    if (x === 0)
        return new Fraction(0n, 1n);

    const ax = Math.abs(x);

    // Write as float64, then read raw IEEE-754 bits
    _view.setFloat64(0, ax, false); // big-endian for consistent layout
    const hi = _view.getUint32(0, false);
    const lo = _view.getUint32(4, false);

    const expField = (hi >>> 20) & 0x7ff;
    const fracBits = (BigInt(hi & 0xfffff) << 32n) | BigInt(lo);

    if (expField === 0x7ff)
        throw new RangeError("NaN/Infinity not supported");

    // Mantissa (52-bit): subnormal has no hidden 1, normal has implicit leading 1
    const mantissa = (expField === 0)
        ? fracBits
        : ((1n << 52n) | fracBits);

    // Unbiased exponent, then subtract 52 because mantissa is a 52-bit integer
    // value = mantissa * 2^(unbiasedExp - 52)
    const unbiasedExp = (expField === 0 ? -1022 : (expField - 1023));
    const k = BigInt(unbiasedExp - 52);

    // Build numerator/denominator
    let num, den;
    if (k >= 0n) {
        num = mantissa << k;
        den = 1n;
    } else {
        num = mantissa;
        den = 1n << (-k);
    }

    if (x < 0) 
        num = -num;

    // Fraction.js will reduce internally
    return new Fraction(num, den);
}

// Example
console.log(doubleToRational(0.1))
