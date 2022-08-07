/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */

console.group('1. Aprašykite funkcijoms tipus jas deklaruojant');
{
  const multiply = (a: number, b: number) => a * b;

  const power = function power(base: number, exponent: number) {
    return base ** exponent;
  };

  const squareRoot = (number: number) => number ** (1 / 2);

  const root = function root(base: number, nthRoot: number) {
    return base ** (1 / nthRoot);
  };

  const printBlueText = (text: string) => console.log(`%c${text}`, 'color: #0000ee');

  const num1: number = 16;
  const num2: number = 4;

  console.log({
    [`multiply(${num1}, ${num2})`]: multiply(num1, num2),
    [`power(${num1}, ${num2})`]: power(num1, num2),
    [`squareRoot(${num1})`]: squareRoot(num1),
    [`root(${num1}, ${num2})`]: root(num1, num2),
  });
  printBlueText('printBlueText funkcijos argumentas');
}
console.groupEnd();

console.group('2. Aprašykite funkcijų tipus prieš deklaruojant funkcijas');
{
  type Multiply = (a: number, b: number) => number;
  const multiply: Multiply = (a, b) => a * b;

  type Power = (base: number, exponent: number) => number;
  const power: Power = function power(base, exponent) {
    return base ** exponent;
  };

  type SquareRoot = (number: number) => number;
  const squareRoot: SquareRoot = (number) => number ** (1 / 2);

  type Root = (base: number, nthRoot: number) => number;
  const root: Root = function root(base, nthRoot) {
    return base ** (1 / nthRoot);
  };

  type PrintBlueText = (text: string) => void;
  const printBlueText: PrintBlueText = (text) => console.log(`%c${text}`, 'color: #0000ee');

  const num1: number = 16;
  const num2: number = 4;

  console.log({
    [`multiply(${num1}, ${num2})`]: multiply(num1, num2),
    [`power(${num1}, ${num2})`]: power(num1, num2),
    [`squareRoot(${num1})`]: squareRoot(num1),
    [`root(${num1}, ${num2})`]: root(num1, num2),
  });
  printBlueText('printBlueText funkcijos argumentas');
}
console.groupEnd();
