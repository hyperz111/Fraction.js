/**
 * Type for handling multiple types of input for Fraction operations.
 */
type FractionInput =
  | Fraction
  | number
  | bigint
  | string
  | [number | bigint | string, number | bigint | string]
  | {
      n: number | bigint;
      d: number | bigint;
    };

/**
 * This class offers the possibility to calculate fractions.
 * You can pass a fraction in different formats. Either as array, as double, as string or as an integer.
 *
 * Array/Object form
 * [ 0 //=> <numerator>, 1 //=> <denominator> ]
 * { n //=> <numerator>, d //=> <denominator> }
 *
 * Integer form
 * - Single integer value as BigInt or Number
 *
 * Double form
 * - Single double value as Number
 *
 * String form
 * 123.456 - a simple double
 * 123/456 - a string fraction
 * 123.'456' - a double with repeating decimal places
 * 123.(456) - synonym
 * 123.45'6' - a double with repeating last place
 * 123.45(6) - synonym
 *
 * @example
 * ````
 * let f = new Fraction("9.4'31'");
 * f.mul([-4, 3]).div(4.9);
 * ```
 */
declare class Fraction {
  s: bigint;
  /**
   * Numerator
   */
  n: bigint;
  /**
   * Denominator
   */
  d: bigint;

  constructor(num?: FractionInput);

  /**
   * Calculates the absolute value
   *
   * @example
   * ```
   * new Fraction(-4).abs() //=> 4
   * ```
   **/
  abs(): Fraction;
  /**
   * Inverts the sign of the current fraction
   *
   * @example
   * ```
   * new Fraction(-4).neg() //=> 4
   * ```
   **/
  neg(): Fraction;
  /**
   * Adds two rational numbers
   *
   * @example
   * ```
   * new Fraction({n: 2, d: 3}).add("14.9") //=> 467 / 30
   * ```
   **/
  add(num: FractionInput): Fraction;
  /**
   * Subtracts two rational numbers
   *
   * @example
   * ```
   * new Fraction({n: 2, d: 3}).add("14.9") //=> -427 / 30
   * ```
   **/
  sub(num: FractionInput): Fraction;
  /**
   * Multiplies two rational numbers
   *
   * @example
   * ```
   * new Fraction("-17.(345)").mul(3) //=> 5776 / 111
   * ```
   **/
  mul(num: FractionInput): Fraction;
  /**
   * Divides two rational numbers
   *
   * @example
   * ```
   * new Fraction("-17.(345)").inverse().div(3)
   * ```
   **/
  div(num: FractionInput): Fraction;
  /**
   * Calculates the fraction to some integer exponent
   *
   * @example
   * ```
   * new Fraction(-1,2).pow(-3) //=> -8
   * ```
   */
  pow(num: FractionInput): Fraction;
  /**
   * Calculates the logarithm of a fraction to a given rational base
   *
   * @example
   * ```
   * new Fraction(27, 8).log(9, 4) //=> 3/2
   * ```
   */
  log(num: FractionInput): Fraction;
  /**
   * Calculates the fractional gcd of two rational numbers
   *
   * @example
   * ```
   * new Fraction(5,8).gcd(3,7) //=> 1/56
   * ```
   */
  gcd(num: FractionInput): Fraction;
  /**
   * Calculates the fractional lcm of two rational numbers
   *
   * @example
   * ```
   * new Fraction(5,8).lcm(3,7) //=> 15
   * ```
   */
  lcm(num: FractionInput): Fraction;
  /**
   * Calculates the modulo of two rational numbers - a more precise fmod
   *
   * @example
   * ```
   * new Fraction('4.(3)').mod([7, 8]) //=> (13/3) % (7/8) = (5/6)
   * ```
   * @example
   * ```
   * new Fraction(20, 10).mod().equals(0) ? "is Integer"
   * ```
   **/
  mod(num: FractionInput): Fraction;
  /**
   * Calculates the ceil of a rational number
   *
   * @example
   * ```
   * new Fraction('4.(3)').ceil() //=> (5 / 1)
   * ```
   **/
  ceil(places?: number): Fraction;
  /**
   * Calculates the floor of a rational number
   *
   * @example
   * ```
   * new Fraction('4.(3)').floor() //=> (4 / 1)
   * ```
   **/
  floor(places?: number): Fraction;
  /**
   * Rounds a rational numbers
   *
   * @example
   * ```
   * new Fraction('4.(3)').round() //=> (4 / 1)
   * ```
   **/
  round(places?: number): Fraction;
  /**
   * Rounds a rational number to a multiple of another rational number
   *
   * @example
   * ```
   * new Fraction('0.9').roundTo("1/8") //=> 7 / 8
   * ```
   **/
  roundTo(num: FractionInput): Fraction;
  /**
   * Gets the inverse of the fraction, means numerator and denominator are exchanged
   *
   * @example
   * ```
   * new Fraction([-3, 4]).inverse() //=> -4 / 3
   * ```
   **/
  inverse(): Fraction;
  simplify(eps?: number): Fraction;
  /**
   * Check if two rational numbers are the same
   *
   * @example
   * ```
   * new Fraction(19.6).equals([98, 5]);
   * ```
   **/
  equals(num: FractionInput): boolean;
  /**
   * Check if this rational number is less than another
   *
   * @example
   * ```
   * new Fraction(19.6).lt([98, 5]);
   * ```
   **/
  lt(num: FractionInput): boolean;
  /**
   * Check if this rational number is less than or equal another
   *
   * @example
   * ```
   * new Fraction(19.6).lte([98, 5]);
   * ```
   **/
  lte(num: FractionInput): boolean;
  /**
   * Check if this rational number is greater than another
   *
   * @example
   * ```
   * new Fraction(19.6).gt([98, 5]);
   * ```
   **/
  gt(num: FractionInput): boolean;
  /**
   * Check if this rational number is greater than or equal another
   *
   * @example
   * ```
   * new Fraction(19.6).gte([98, 5]);
   * ```
   **/
  gte(num: FractionInput): boolean;
  /**
   * Compare two rational numbers
   * < 0 if this < that
   * > 0 if this > that
   * = 0 if this = that
   *
   * @example
   * ```
   * new Fraction(19.6).compare([98, 5]);
   * ```
   **/
  compare(num: FractionInput): number;
  /**
   * Check if two rational numbers are divisible
   *
   * @example
   * ```
   * new Fraction(19.6).divisible(1.5);
   * ```
   */
  divisible(num: FractionInput): boolean;
  /**
   * Returns a decimal representation of the fraction
   *
   * @example
   * ```
   * new Fraction("100.'91823'").valueOf() //=> 100.91823918239183
   * ```
   **/
  valueOf(): number;
  /**
   * Creates a string representation of a fraction with all digits
   *
   * @example
   * ```
   * new Fraction("100.'91823'").toString() //=> "100.(91823)"
   * ```
   **/
  toString(decimalPlaces?: number): string;
  /**
   * Returns a latex representation of a Fraction object
   *
   * @example
   * ```
   * new Fraction("1.'3'").toLatex() //=> "\frac{4}{3}"
   * ```
   **/
  toLatex(showMixed?: boolean): string;
  /**
   * Returns a string-fraction representation of a Fraction object
   *
   * @example
   * ```
   * new Fraction("1.'3'").toFraction() //=> "4 1/3"
   * ```
   **/
  toFraction(showMixed?: boolean): string;
  /**
   * Returns an array of continued fraction elements
   *
   * @example
   * ```
   * new Fraction("7/8").toContinued() //=> [0,1,7]
   * ```
   */
  toContinued(): bigint[];
  /**
   * Clones the actual object
   *
   * @example
   * ```
   * new Fraction("-17.(345)").clone()
   * ```
   **/
  clone(): Fraction;
}

export { Fraction, type FractionInput };
