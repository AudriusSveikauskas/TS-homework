/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

import formatDate from '../helpers/format-date.js';

export default class Job {
  private static jobIDCounter = 0;

  private readonly _id: string;

  private readonly _jobTitle: string;

  private readonly _jobPay: number;

  private _finished: boolean = false;

  private _payed: boolean = false;

  private _dateFinished?: Date;

  constructor(jobTitle: string, jobRate: number) {
    Job.jobIDCounter += 1;
    const jobID = Job.jobIDCounter;
    this._id = `Job No.${jobID}`;
    this._jobTitle = jobTitle;
    this._jobPay = jobRate;
    this._finished = false;
    this._payed = false;
  }

  completeJob = () => {
    this._finished = true;
    this._dateFinished = new Date();
  };

  setJobPayed() {
    this._payed = true;
  }

  getPay = () => this._jobPay;

  isFinished = () => this._finished;

  isPayed = () => this._payed;

  toString() {
    if (!this.isFinished) {
      return `\t\t\t\t-> ${this._id}: ${this._jobTitle} - ${this._jobPay} €\n`;
    }
    return `\t\t\t\t-> ${this._id}: ${this._jobTitle} - ${
      this._jobPay
    } € ${formatDate(this._dateFinished)}\n`;
  }
}
