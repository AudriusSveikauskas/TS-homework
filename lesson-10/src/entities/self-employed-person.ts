/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

import Employee from './employee.js';
import { PersonProps } from './person.js';

export type SelfEmployedPersonProps = PersonProps & {
  hourPay: number;
  hoursWorked?: number;
};

export default class SelfEmployedPerson extends Employee {
  private _hourPay: number;

  private _hoursWorked?: number;

  constructor({
    hourPay,
    hoursWorked = 0,
    ...personProps
  }: SelfEmployedPersonProps) {
    super(personProps);
    this._hourPay = hourPay;
    this._hoursWorked = hoursWorked;
  }

  set hourPay(value: number) {
    this._hourPay = value;
  }

  set hoursWorked(value: number) {
    this._hoursWorked = value;
  }

  calcPay() {
    if (this._hoursWorked === 0) {
      return 0;
    }
    return this._hoursWorked! * this._hourPay;
  }

  override toString() {
    return `${this.getPersonInfo()}\n\t\t\tPay conditions:\n\t\t\t\t-> ${
      this._hourPay
    } € per hour\n\n\t\t\tWorked:\n\t\t\t\t-> ${
      this._hoursWorked
    } h\n\n\t\t\tSalary paid:\n\t\t\t\t-> ${this.calcPay()} €
      `;
  }
}
