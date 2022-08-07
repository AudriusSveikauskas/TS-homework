/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */

console.group('Užduotys');
{
  console.group('1. Aprašykite funkcijoms ir kintamiesiems tipus');
  {
    const numbersArr: number[] = [1, -8, -6, 7, 5, 1];

    const addPositiveNumbers = (arr: number[]): number => arr
      .reduce((sum, num) => (num > 0 ? sum + num : sum), 0);

    console.log(
      numbersArr,
      `Positive numbers sum: ${addPositiveNumbers(numbersArr)}`,
    );
  }
  console.groupEnd();

  console.group(
    "2. Sukurkite ir tipais aprašykite funkciją, kuri sudarytų string'ą iš string'ų masyvo elementų pirmųjų raidžių",
  );
  {
    const printAbbreviation = function printAbbreviation(
      arr: string[],
    ): string {
      let abbreviation: string = '';
      arr.forEach((word) => {
        abbreviation += word[0];
      });
      return abbreviation;
    };

    console.log(
      printAbbreviation(['Lietuviškas', 'Nepriklausomas', 'Kanalas']),
    );
    console.log(printAbbreviation(['Lietuvos', 'Respublikos', 'Televizija']));
    console.log(printAbbreviation(['Loughing', 'Out', 'Loud']));
  }
  console.groupEnd();

  console.group(
    '3. Sukurkite ir tipais aprašykite funkciją, kuri saudaugintų visus number masyvo skaičius',
  );
  {
    const multiplyArrayNumbers = function multiplyArrayNumbers(
      arr: number[],
    ): number {
      return arr.reduce((acc, num) => acc * num);
    };

    console.log(multiplyArrayNumbers([1, 7, 8]));
    console.log(multiplyArrayNumbers([98, 74, 5, 0]));
    console.log(multiplyArrayNumbers([17, 10, 5]));
  }
  console.groupEnd();
}
console.groupEnd();
