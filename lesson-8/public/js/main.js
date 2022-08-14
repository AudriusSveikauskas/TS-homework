import Person from './person.js';
import { HeightUnits, WeightUnits } from './enums.js';
const personsPropsArr = [
    {
        name: '   iEvA-mariJA   ',
        surname: ' balčiūtĖ-kaminsKIENĖ ',
        age: 33,
        height: 165,
        heightUnits: HeightUnits.CENTIMETERS,
        weight: 55,
        weightUnits: WeightUnits.KILOGRAMS,
    },
    {
        name: ' jONAS petraS   ',
        surname: ' klementauSkas   ',
        age: 30,
        height: 1.95,
        heightUnits: HeightUnits.METERS,
        weight: 120,
    },
    {
        name: 'Vardenis',
        surname: 'Pavardenis',
        age: 260,
        height: 200,
        weight: 150,
    },
    {
        name: 'Jonas',
        surname: 'Jonaitis',
        age: 50.5,
        height: 1.8,
        heightUnits: HeightUnits.METERS,
        weight: 95,
        weightUnits: WeightUnits.KILOGRAMS,
    },
    {
        name: 'gabiJA         ',
        surname: '     grybauskaitė babrauskienė',
        age: 43,
        height: 69,
        heightUnits: HeightUnits.INCHES,
        weight: 118,
        weightUnits: WeightUnits.POUNDS,
    },
];
function createPerson(personProps) {
    let newPerson;
    try {
        newPerson = new Person(personProps);
    }
    catch ({ message }) {
        return `Object not created, error: ${message}`;
    }
    return newPerson;
}
const personsArr = personsPropsArr.map((prop) => createPerson(prop));
console.log(`\n\t---- Default units: CM & KG ----
\n`);
personsArr.forEach((person) => console.log(person.toString()));
console.log(`\n\t---- Default units: IN & LBS ----
\n`);
Person.heightUnits = HeightUnits.INCHES;
Person.weightUnits = WeightUnits.POUNDS;
personsArr.forEach((person) => console.log(person.toString()));
//# sourceMappingURL=main.js.map