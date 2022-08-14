// eslint-disable-next-line import/no-unresolved,import/extensions
import { HeightUnits, WeightUnits } from './enums.js';

export interface PersonProps {
  id?: number;
  name: string;
  surname: string;
  age: number;
  height: number;
  weight: number;
  heightUnits?: HeightUnits;
  weightUnits?: WeightUnits;
}

export default class Person {
  private name!: string;

  private surname!: string;

  private age!: number;

  private height!: number;

  private weight!: number;

  public readonly id: string;

  private static idCounter: number = 0;

  static minAge = 1;

  static maxAge = 150;

  static heightUnits: HeightUnits = HeightUnits.CENTIMETERS;

  static weightUnits: WeightUnits = WeightUnits.KILOGRAMS;

  getName(): string {
    return this.name;
  }

  setName(value: string) {
    this.name = Person.normalizeNameSurname(value);
  }

  getSurname(): string {
    return this.surname;
  }

  setSurname(value: string) {
    this.surname = Person.normalizeNameSurname(value);
  }

  getAge(): number {
    return this.age;
  }

  setAge(value: number) {
    this.age = Person.checkAge(value);
  }

  getHeight(): number {
    return Person.convertHeightToDefaultUnits(this.height);
  }

  setHeight(value: number, unit?: HeightUnits) {
    this.height = Person.convertHeightToCentimeters(value, unit);
  }

  getWeight(): number {
    return Person.convertWeightKilogramsToDefaultUnits(this.weight);
  }

  setWeight(value: number, unit?: WeightUnits) {
    this.weight = Person.convertWeightToKilograms(value, unit);
  }

  constructor({
    name,
    surname,
    age,
    height,
    heightUnits,
    weight,
    weightUnits,
  }: PersonProps) {
    this.setName(name);
    this.setSurname(surname);
    this.setAge(age);
    this.setHeight(height, heightUnits);
    this.setWeight(weight, weightUnits);
    Person.idCounter += 1;
    this.id = `(${Person.idCounter})`;
  }

  static normalizeNameSurname(value: string) {
    return value
      .trim()
      .replaceAll('-', ' ')
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  static checkAge(age: number) {
    if (age < Person.minAge || age > Person.maxAge) {
      throw new Error(
        `Age must be in range ${Person.minAge}-${Person.maxAge}!`,
      );
    } else if (age % 1 > 0) {
      throw new Error('Age must be an integer!');
    } else {
      return age;
    }
  }

  static convertHeightToCentimeters(height: number, unit?: HeightUnits) {
    if (unit === HeightUnits.METERS) {
      return Number((height * 100).toFixed(2));
    }
    if (unit === HeightUnits.INCHES) {
      return Number((height * 2.54).toFixed(2));
    }
    return Number(height.toFixed(2));
  }

  static convertHeightToDefaultUnits(height: number) {
    if (this.heightUnits === HeightUnits.METERS) {
      return Number((height / 100).toFixed(2));
    }
    if (this.heightUnits === HeightUnits.INCHES) {
      return Number((height / 2.54).toFixed(2));
    }
    return Number(height.toFixed(2));
  }

  static convertWeightToKilograms(weight: number, unit?: WeightUnits) {
    if (unit === WeightUnits.POUNDS) {
      return Number((weight / 2.20462262185).toFixed(2));
    }
    return Number(weight.toFixed(2));
  }

  static convertWeightKilogramsToDefaultUnits(weight: number) {
    if (this.weightUnits === WeightUnits.POUNDS) {
      return Number((weight * 2.20462262185).toFixed(2));
    }
    return Number(weight.toFixed(2));
  }

  toString(): string {
    return `${
      this.id
    } ${this.getName()} ${this.getSurname()}:\n\t- age: ${this.getAge()} years,\n\t- height: ${this.getHeight()} ${
      Person.heightUnits
    },\n\t- weight: ${this.getWeight()} ${Person.weightUnits}.`;
  }
}
