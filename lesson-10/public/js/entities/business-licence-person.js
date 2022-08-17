import Employee from './employee.js';
export default class BusinessLicencePerson extends Employee {
    _jobs;
    constructor({ jobs = [], ...personProps }) {
        super(personProps);
        this._jobs = jobs;
    }
    calcPay() {
        const finishedUnpaidJobs = this._jobs.filter((job) => job.isFinished() && !job.isPayed());
        const totalToPay = finishedUnpaidJobs.reduce((sum, rate) => sum + rate.getPay(), 0);
        finishedUnpaidJobs.forEach((job) => job.setJobPayed());
        return totalToPay;
    }
    toString() {
        let str = `${this.getPersonInfo()}\n\t\t\tPay conditions:\n\t\t\t\t-> for finished job\n\n\t\t\tAssigned jobs:\n`;
        if (!this._jobs.length) {
            str += '\t\t\t\t-> there are no assigned jobs\n';
        }
        else {
            this._jobs.forEach((job) => {
                str += `${job.toString()}`;
            });
        }
        str += `\n\t\t\tSalary paid:\n\t\t\t\t-> ${this.calcPay()} €
    `;
        return str;
    }
}
//# sourceMappingURL=business-licence-person.js.map