import Employee from './employee.js';
import calcWorkDaysPerMonth from '../helpers/work-days-per-month.js';
export default class WorkPerson extends Employee {
    _hourPay;
    _fullTimeEquivalent;
    constructor({ hourPay, fullTimeEquivalent, ...personProps }) {
        super(personProps);
        this._hourPay = hourPay;
        this._fullTimeEquivalent = fullTimeEquivalent;
    }
    calcPay() {
        return (calcWorkDaysPerMonth() * this._hourPay * 8 * this._fullTimeEquivalent);
    }
    toString() {
        return `${this.getPersonInfo()}\n\t\t\tPay conditions:\n\t\t\t\t-> ${this._hourPay} € per hour\n\n\t\t\tWorking (1 = full time):\n\t\t\t\t-> ${this._fullTimeEquivalent}\n\n\t\t\tSalary paid:\n\t\t\t\t-> ${this.calcPay()} €
      `;
    }
}
//# sourceMappingURL=work-person.js.map