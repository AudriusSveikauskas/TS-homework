/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

import Employee from './employee.js';
import { PersonProps } from './person.js';
import Job from './job.js';

export type BusinessLicencePersonProps = PersonProps & { jobs?: Job[] };

export default class BusinessLicencePerson extends Employee {
  private _jobs: Job[];

  constructor({ jobs = [], ...personProps }: BusinessLicencePersonProps) {
    super(personProps);
    this._jobs = jobs;
  }

  calcPay() {
    // Find all finished and unpaid jobs
    const finishedUnpaidJobs = this._jobs.filter(
      (job) => job.isFinished() && !job.isPayed(),
    );

    // Calculate the total amount for the finished jobs
    const totalToPay = finishedUnpaidJobs.reduce(
      (sum, rate) => sum + rate.getPay(),
      0,
    );

    // Mark paid jobs
    finishedUnpaidJobs.forEach((job) => job.setJobPayed());

    return totalToPay;
  }

  override toString() {
    let str = `${this.getPersonInfo()}\n\t\t\tPay conditions:\n\t\t\t\t-> for finished job\n\n\t\t\tAssigned jobs:\n`;
    if (!this._jobs.length) {
      str += '\t\t\t\t-> there are no assigned jobs\n';
    } else {
      this._jobs.forEach((job) => {
        str += `${job.toString()}`;
      });
    }
    str += `\n\t\t\tSalary paid:\n\t\t\t\t-> ${this.calcPay()} €
    `;
    return str;
  }
}
