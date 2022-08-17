import Employee from './employee.js';
export default class SelfEmployedPerson extends Employee {
    _hourPay;
    _hoursWorked;
    constructor({ hourPay, hoursWorked = 0, ...personProps }) {
        super(personProps);
        this._hourPay = hourPay;
        this._hoursWorked = hoursWorked;
    }
    set hourPay(value) {
        this._hourPay = value;
    }
    set hoursWorked(value) {
        this._hoursWorked = value;
    }
    calcPay() {
        if (this._hoursWorked === 0) {
            return 0;
        }
        return this._hoursWorked * this._hourPay;
    }
    toString() {
        return `${this.getPersonInfo()}\n\t\t\tPay conditions:\n\t\t\t\t-> ${this._hourPay} € per hour\n\n\t\t\tWorked:\n\t\t\t\t-> ${this._hoursWorked} h\n\n\t\t\tSalary paid:\n\t\t\t\t-> ${this.calcPay()} €
      `;
    }
}
//# sourceMappingURL=self-employed-person.js.map