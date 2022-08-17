/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

export type PersonProps = {
  id: string;
  name: string;
  surname: string;
};

export default abstract class Person {
  private readonly _id: string;

  private readonly _name: string;

  private readonly _surname: string;

  constructor({ id, name, surname }: PersonProps) {
    this._id = id;
    this._name = name;
    this._surname = surname;
  }

  // public getPersonInfo = (): string => `${this._name} ${this._surname}`;

  public getPersonInfo() {
    return `\n\t\t${this._name} ${this._surname}\n\n\t\t\tEmployee ID:\n\t\t\t\t-> ${this._id}\n`;
  }

  public abstract toString(): string;
}
