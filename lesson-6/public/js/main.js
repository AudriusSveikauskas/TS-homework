"use strict";
const printTitle = (title) => console.log(`%c\n\t${title}\n`, 'color: #63e6be');
const printResult = (result) => console.table(result);
const numbersArr = [1, [11, 22, [111, 222, 333]], 3, 4, [5, 55]];
const stringsArr = ['hello', ['wood', 'tree'], 'string', 'red', '777'];
console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
    const getFirstArrEl = (arr) => arr[0];
    printTitle('FIRST item of NUMBERS array:');
    printResult(getFirstArrEl(numbersArr));
    printTitle('FIRST item of STRINGS array:');
    printResult(getFirstArrEl(stringsArr));
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
    const getLastArrEl = (arr) => arr[arr.length - 1];
    printTitle('LAST item of NUMBERS array:');
    printResult(getLastArrEl(numbersArr));
    printTitle('LAST item of STRINGS array:');
    printResult(getLastArrEl(stringsArr));
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
    const cloneArr = (arr) => structuredClone(arr);
    const clonedNumbersArr = cloneArr(numbersArr);
    clonedNumbersArr[0] = 123;
    clonedNumbersArr[1] = 456;
    clonedNumbersArr[2] = 789;
    const clonedStringsArr = cloneArr(stringsArr);
    clonedStringsArr[0] = 'aaa';
    clonedStringsArr[2] = 'bbb';
    clonedStringsArr[3] = 'ccc';
    printTitle('Original NUMBERS array:');
    printResult(numbersArr);
    printTitle('Deep cloned and changed NUMBERS array:');
    printResult(clonedNumbersArr);
    printTitle('Original STRINGS array:');
    printResult(stringsArr);
    printTitle('Deep cloned and changed STRINGS array:');
    printResult(clonedStringsArr);
}
console.groupEnd();
console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
    const repeatItemsArr = [
        [777, 3],
        ['abc', 2],
        [false, 4],
        [[1, 2, [3, 33, 333]], 3],
        [{ name: 'Joe', age: 25 }, 2],
    ];
    const repeatItems = (itemToRepeat, numberOfIterations) => {
        const newArr = [];
        for (let i = 1; i <= numberOfIterations; i += 1) {
            newArr.push(itemToRepeat);
        }
        return newArr;
    };
    printTitle(`Original data:\n\n${JSON.stringify(repeatItemsArr)}`);
    repeatItemsArr.forEach((arr) => {
        printResult(repeatItems(arr[0], arr[1]));
    });
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
    const joinArrays = (...args) => args.reduce((acc, arr) => acc.concat(arr));
    const numArr1 = [1, 2, 3, 4];
    const numArr2 = [5, 6];
    const numArr3 = [7, 8, 9];
    printTitle(`Original data:
  \n\t arr1 = [${numArr1}]
  \t arr2 = [${numArr2}]
  \t arr3 = [${numArr3}]`);
    printResult(joinArrays(numArr1, numArr2, numArr3));
    const strArr1 = ['Monday', 'Tuesday'];
    const strArr2 = ['Wednesday', 'Thursday'];
    const strArr3 = ['Friday', 'Saturday'];
    const strArr4 = ['Sunday'];
    printTitle(`Original data:
  \n\t arr1 = [${strArr1}]
  \t arr2 = [${strArr2}]
  \t arr2 = [${strArr3}]
  \t arr3 = [${strArr4}]`);
    printResult(joinArrays(strArr1, strArr2, strArr3, strArr4));
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
}
console.groupEnd();
console.group(`
  7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
  Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
  Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`);
{
    const people = [
        {
            name: 'Atstovė',
            surname: 'Galtokaitė',
            university: 'VU',
            course: 2,
        },
        { name: 'Kurpius', surname: 'Medainis' },
        { name: 'Varnas', surname: 'Akilaitis', avgMonthlyPay: 2000 },
        { name: 'Ferodijus', surname: 'Cilcius' },
        { name: 'Sobora', surname: 'Kupolaityė', avgMonthlyPay: 1000 },
        {
            name: 'Zubrius',
            surname: 'Sulindauskas',
            university: 'VU',
            course: 2,
        },
        { name: 'Šidelė', surname: 'Gyslovienė', avgMonthlyPay: 1500 },
        {
            name: 'Užuodauskas',
            surname: 'Perrašimauskas',
            university: 'VGTU',
            course: 1,
        },
    ];
}
//# sourceMappingURL=main.js.map