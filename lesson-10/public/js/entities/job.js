import formatDate from '../helpers/format-date.js';
export default class Job {
    static jobIDCounter = 0;
    _id;
    _jobTitle;
    _jobPay;
    _finished = false;
    _payed = false;
    _dateFinished;
    constructor(jobTitle, jobRate) {
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
        return `\t\t\t\t-> ${this._id}: ${this._jobTitle} - ${this._jobPay} € ${formatDate(this._dateFinished)}\n`;
    }
}
//# sourceMappingURL=job.js.map