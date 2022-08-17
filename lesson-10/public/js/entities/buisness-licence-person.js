import Employee from './employee.js';
export default class BuisnessLicencePerson extends Employee {
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
        let str = `${this.getPersonInfo()}\n\tJobs:\n`;
        this._jobs.forEach((job) => {
            str += `${job.toString()}`;
        });
        return str;
    }
}
//# sourceMappingURL=buisness-licence-person.js.map