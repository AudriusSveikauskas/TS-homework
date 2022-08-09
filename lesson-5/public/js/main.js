"use strict";
const people = [
    {
        name: 'Jonas',
        surname: 'Jonaitis',
        sex: 'male',
        age: 26,
        income: 1200,
        married: false,
        hasCar: false,
    },
    {
        name: 'Severija',
        surname: 'Piktutytė',
        sex: 'female',
        age: 26,
        income: 1300,
        married: false,
        hasCar: true,
    },
    {
        name: 'Valdas',
        surname: 'Vilktorinas',
        sex: 'male',
        age: 16,
        income: 0,
        married: false,
        hasCar: false,
    },
    {
        name: 'Virginijus',
        surname: 'Uostauskas',
        sex: 'male',
        age: 32,
        income: 2400,
        married: true,
        hasCar: true,
    },
    {
        name: 'Samanta',
        surname: 'Uostauskienė',
        sex: 'female',
        age: 28,
        income: 1200,
        married: true,
        hasCar: true,
    },
    {
        name: 'Janina',
        surname: 'Stalautinskienė',
        sex: 'female',
        age: 72,
        income: 364,
        married: false,
        hasCar: false,
    },
];
console.group('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
    const personToIdentity = ({ name, surname }) => ({
        name,
        surname,
    });
    const identities = people.map(personToIdentity);
    console.table(people);
    console.table(identities);
}
console.groupEnd();
console.group('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
    const selectTaskProps = ({ married, hasCar }) => ({
        married: Boolean(married),
        hasCar: Boolean(hasCar),
    });
    const result = people.map(selectTaskProps);
    console.table(people);
    console.table(result);
}
console.groupEnd();
console.group('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
    const selectTaskProps = ({ name, surname, married }) => ({
        name,
        surname,
        married: Boolean(married),
    });
    const result = people.map(selectTaskProps);
    console.log(result);
}
console.groupEnd();
console.group('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
}
console.groupEnd();
console.group('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
}
console.groupEnd();
console.group('6. Atspausdinkite visus vyrus');
{
}
console.groupEnd();
console.group('7. Atspausdinkite visas moteris');
{
}
console.groupEnd();
console.group('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
}
console.groupEnd();
console.group('9. Atspausdinkite žmones kurie yra susituokę');
{
}
console.groupEnd();
console.group('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
}
console.groupEnd();
console.group('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
}
console.groupEnd();
console.group('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
}
console.groupEnd();
console.group('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
}
console.groupEnd();
//# sourceMappingURL=main.js.map