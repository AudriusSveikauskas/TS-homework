/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

import { PersonProps } from './person.js';
import Employee from './employee.js';
import calcWorkDaysPerMonth from '../helpers/work-days-per-month.js';

export type WorkPersonProps = PersonProps & {
  hourPay: number;
  fullTimeEquivalent: number;
};

export default class WorkPerson extends Employee {
  private readonly _hourPay: number;

  private readonly _fullTimeEquivalent: number;

  constructor({
    hourPay,
    fullTimeEquivalent,
    ...personProps
  }: WorkPersonProps) {
    super(personProps);
    this._hourPay = hourPay;
    this._fullTimeEquivalent = fullTimeEquivalent;
  }

  calcPay() {
    return (
      calcWorkDaysPerMonth() * this._hourPay * 8 * this._fullTimeEquivalent
    );
  }

  override toString() {
    return `${this.getPersonInfo()}\n\t\t\tPay conditions:\n\t\t\t\t-> ${
      this._hourPay
    } € per hour\n\n\t\t\tWorking (1 = full time):\n\t\t\t\t-> ${
      this._fullTimeEquivalent
    }\n\n\t\t\tSalary paid:\n\t\t\t\t-> ${this.calcPay()} €
      `;
  }
}
