"use strict";
console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
    const lastArrayElementIndex = (arr) => arr.length - 1;
    console.log('[1, 2, 3, 4] last index:', lastArrayElementIndex([1, 2, 3, 4]));
    console.log('["green", "red", "blue", "pink", "white"] last index:', lastArrayElementIndex(['green', 'red', 'blue', 'pink', 'white']));
    console.log('[{name: "Jonas", age: 45}, {name: "Petras", age: 30}] last index:', lastArrayElementIndex([
        { name: 'Jonas', age: 45 },
        { name: 'Petras', age: 30 },
    ]));
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
    const arrayElementIndex = (arr) => {
        arr.forEach((_item, index) => {
            console.log(`Indeksas: ${index}`);
        });
    };
    console.log('arrayElementIndex([1, 2, 3, 4])');
    arrayElementIndex([1, 2, 3, 4]);
    console.log("arrayElementIndex(['green', 'red', 'blue', 'pink', 'white'])");
    arrayElementIndex(['green', 'red', 'blue', 'pink', 'white']);
    console.log("arrayElementIndex([{ name: 'Jonas', age: 45 }, { name: 'Petras', age: 30 }])");
    arrayElementIndex([
        { name: 'Jonas', age: 45 },
        { name: 'Petras', age: 30 },
    ]);
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
    const arrayElementItem = (arr) => {
        arr.forEach((item) => {
            console.log(`Reikšmė: ${typeof item === 'object' ? Object.values(item) : item}`);
        });
    };
    console.log('arrayElementIndex([1, 2, 3, 4])');
    arrayElementItem([1, 2, 3, 4]);
    console.log("arrayElementIndex(['green', 'red', 'blue', 'pink', 'white'])");
    arrayElementItem(['green', 'red', 'blue', 'pink', 'white']);
    console.log("arrayElementIndex([{ name: 'Jonas', age: 45 }, { name: 'Petras', age: 30 }])");
    arrayElementItem([
        { name: 'Jonas', age: 45 },
        { name: 'Petras', age: 30 },
    ]);
}
console.groupEnd();
console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
{
    const arrayElementIndexItem = (arr) => {
        arr.forEach((item, index) => {
            console.log(`[${index}] => ${typeof item === 'object' ? Object.values(item) : item}`);
        });
    };
    console.log('arrayElementIndex([1, 2, 3, 4])');
    arrayElementIndexItem([1, 2, 3, 4]);
    console.log("arrayElementIndex(['green', 'red', 'blue', 'pink', 'white'])");
    arrayElementIndexItem(['green', 'red', 'blue', 'pink', 'white']);
    console.log("arrayElementIndex([{ name: 'Jonas', age: 45 }, { name: 'Petras', age: 30 }])");
    arrayElementIndexItem([
        { name: 'Jonas', age: 45 },
        { name: 'Petras', age: 30 },
    ]);
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
    const arrayElementIndexItemReverse = (arr) => {
        for (let i = arr.length - 1; i >= 0; i -= 1) {
            console.log(`[${i}] => ${typeof arr[i] === 'object' ? Object.values(arr[i]) : arr[i]}`);
        }
    };
    console.log('arrayElementIndex([1, 2, 3, 4])');
    arrayElementIndexItemReverse([1, 2, 3, 4]);
    console.log("arrayElementIndex(['green', 'red', 'blue', 'pink', 'white'])");
    arrayElementIndexItemReverse(['green', 'red', 'blue', 'pink', 'white']);
    console.log("arrayElementIndex([{ name: 'Jonas', age: 45 }, { name: 'Petras', age: 30 }])");
    arrayElementIndexItemReverse([
        { name: 'Jonas', age: 45 },
        { name: 'Petras', age: 30 },
    ]);
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
    const arrayElementIndexInRow = (arr) => {
        let str = '';
        arr.forEach((_item, index) => {
            str += `${index} `;
        });
        console.log(`Indeksai: ${str}`);
    };
    console.log('arrayElementIndex([1, 2, 3, 4])');
    arrayElementIndexInRow([1, 2, 3, 4]);
    console.log("arrayElementIndex(['green', 'red', 'blue', 'pink', 'white'])");
    arrayElementIndexInRow(['green', 'red', 'blue', 'pink', 'white']);
    console.log("arrayElementIndex([{ name: 'Jonas', age: 45 }, { name: 'Petras', age: 30 }])");
    arrayElementIndexInRow([
        { name: 'Jonas', age: 45 },
        { name: 'Petras', age: 30 },
    ]);
}
console.groupEnd();
console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
    const arrayElementItemsInRow = (arr) => {
        let str = '';
        arr.forEach((item) => {
            str += `${typeof item === 'object' ? Object.values(item) : item} `;
        });
        console.log(`Reikšmės: ${str}`);
    };
    console.log('arrayElementIndex([1, 2, 3, 4])');
    arrayElementItemsInRow([1, 2, 3, 4]);
    console.log("arrayElementIndex(['green', 'red', 'blue', 'pink', 'white'])");
    arrayElementItemsInRow(['green', 'red', 'blue', 'pink', 'white']);
    console.log("arrayElementIndex([{ name: 'Jonas', age: 45 }, { name: 'Petras', age: 30 }])");
    arrayElementItemsInRow([
        { name: 'Jonas', age: 45 },
        { name: 'Petras', age: 30 },
    ]);
}
console.groupEnd();
console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
{
    const arrayElementIndexItemInRow = (arr) => {
        let str = '';
        arr.forEach((item, index) => {
            str += `[${index}] => ${typeof item === 'object' ? Object.values(item) : item}, `;
        });
        console.log(str);
    };
    console.log('arrayElementIndex([1, 2, 3, 4])');
    arrayElementIndexItemInRow([1, 2, 3, 4]);
    console.log("arrayElementIndex(['green', 'red', 'blue', 'pink', 'white'])");
    arrayElementIndexItemInRow(['green', 'red', 'blue', 'pink', 'white']);
    console.log("arrayElementIndex([{ name: 'Jonas', age: 45 }, { name: 'Petras', age: 30 }])");
    arrayElementIndexItemInRow([
        { name: 'Jonas', age: 45 },
        { name: 'Petras', age: 30 },
    ]);
}
console.groupEnd();
console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
    const numbersArr = [-9, 5, -7, -3, 0, -1, -2];
    const multiplyItems = (arr) => arr.map((item) => item * 2);
    console.log(multiplyItems(numbersArr));
}
console.groupEnd();
console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
    const numbersArr = [-9, 5, -7, -3, 0, -1, -2];
    const squareItems = (arr) => arr.map((item) => item ** 2);
    console.log(squareItems(numbersArr));
}
console.groupEnd();
console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
    const numbersArr = [-9, 5, -7, -3, 0, -1, -2];
    const multiplyItemsIndex = (arr) => arr.map((item, index) => item * index);
    console.log(multiplyItemsIndex(numbersArr));
}
console.groupEnd();
console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
    const numbersArr = [-9, 5, -7, -3, 0, -1, -2];
    const filterPositiveNumbers = (arr) => arr.filter((num) => num >= 0);
    console.log(filterPositiveNumbers(numbersArr));
}
console.groupEnd();
console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
    const numbersArr = [-9, 5, -7, -3, 0, -1, -2];
    const filterNegativeNumbers = (arr) => arr.filter((num) => num < 0);
    console.log(filterNegativeNumbers(numbersArr));
}
console.groupEnd();
console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
    const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const filterEvenNumbers = (arr) => arr.filter((num) => !(num % 2));
    console.log(filterEvenNumbers(numbersArr));
}
console.groupEnd();
console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
    const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const filterOddNumbers = (arr) => arr.filter((num) => num % 2);
    console.log(filterOddNumbers(numbersArr));
}
console.groupEnd();
console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
    const numbersArr = [-9, 5, -7, -3, 0, -1, -2];
    const makeNumbersPositive = (arr) => arr.map((num) => Math.abs(num));
    console.log(makeNumbersPositive(numbersArr));
}
console.groupEnd();
//# sourceMappingURL=main.js.map