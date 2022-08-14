import { HeightUnits, WeightUnits } from './enums.js';
export default class Person {
    name;
    surname;
    age;
    height;
    weight;
    id;
    static idCounter = 0;
    static minAge = 1;
    static maxAge = 150;
    static heightUnits = HeightUnits.CENTIMETERS;
    static weightUnits = WeightUnits.KILOGRAMS;
    getName() {
        return this.name;
    }
    setName(value) {
        this.name = Person.normalizeNameSurname(value);
    }
    getSurname() {
        return this.surname;
    }
    setSurname(value) {
        this.surname = Person.normalizeNameSurname(value);
    }
    getAge() {
        return this.age;
    }
    setAge(value) {
        this.age = Person.checkAge(value);
    }
    getHeight() {
        return Person.convertHeightToDefaultUnits(this.height);
    }
    setHeight(value, unit) {
        this.height = Person.convertHeightToCentimeters(value, unit);
    }
    getWeight() {
        return Person.convertWeightKilogramsToDefaultUnits(this.weight);
    }
    setWeight(value, unit) {
        this.weight = Person.convertWeightToKilograms(value, unit);
    }
    constructor({ name, surname, age, height, heightUnits, weight, weightUnits, }) {
        this.setName(name);
        this.setSurname(surname);
        this.setAge(age);
        this.setHeight(height, heightUnits);
        this.setWeight(weight, weightUnits);
        Person.idCounter += 1;
        this.id = `(${Person.idCounter})`;
    }
    static normalizeNameSurname(value) {
        return value
            .trim()
            .replaceAll('-', ' ')
            .split(' ')
            .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }
    static checkAge(age) {
        if (age < Person.minAge || age > Person.maxAge) {
            throw new Error(`Age must be in range ${Person.minAge}-${Person.maxAge}!`);
        }
        else if (age % 1 > 0) {
            throw new Error('Age must be an integer!');
        }
        else {
            return age;
        }
    }
    static convertHeightToCentimeters(height, unit) {
        if (unit === HeightUnits.METERS) {
            return Number((height * 100).toFixed(2));
        }
        if (unit === HeightUnits.INCHES) {
            return Number((height * 2.54).toFixed(2));
        }
        return Number(height.toFixed(2));
    }
    static convertHeightToDefaultUnits(height) {
        if (this.heightUnits === HeightUnits.METERS) {
            return Number((height / 100).toFixed(2));
        }
        if (this.heightUnits === HeightUnits.INCHES) {
            return Number((height / 2.54).toFixed(2));
        }
        return Number(height.toFixed(2));
    }
    static convertWeightToKilograms(weight, unit) {
        if (unit === WeightUnits.POUNDS) {
            return Number((weight / 2.20462262185).toFixed(2));
        }
        return Number(weight.toFixed(2));
    }
    static convertWeightKilogramsToDefaultUnits(weight) {
        if (this.weightUnits === WeightUnits.POUNDS) {
            return Number((weight * 2.20462262185).toFixed(2));
        }
        return Number(weight.toFixed(2));
    }
    toString() {
        return `${this.id} ${this.getName()} ${this.getSurname()}:\n\t- age: ${this.getAge()} years,\n\t- height: ${this.getHeight()} ${Person.heightUnits},\n\t- weight: ${this.getWeight()} ${Person.weightUnits}.`;
    }
}
//# sourceMappingURL=person.js.map