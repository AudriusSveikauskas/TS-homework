import BusinessLicencePerson from './entities/business-licence-person.js';
import Job from './entities/job.js';
import SelfEmployedPerson from './entities/self-employed-person.js';
import WorkPerson from './entities/work-person.js';
function printEmployeeInfo(employee) {
    console.log(`
  %c--- Created employee object is instance of ${employee.constructor.name} class. ---
  `, 'color: #ffe066');
    console.log(employee.toString());
}
const backendDeveloper = new WorkPerson({
    id: '25169845878',
    name: 'Apsas',
    surname: 'Revestenis',
    hourPay: 25,
    fullTimeEquivalent: 1,
});
printEmployeeInfo(backendDeveloper);
const frontendDeveloper = new WorkPerson({
    id: '25167745878',
    name: 'Eventas',
    surname: 'Klikauskas',
    hourPay: 25,
    fullTimeEquivalent: 0.5,
});
printEmployeeInfo(frontendDeveloper);
const selfEmployed1 = new SelfEmployedPerson({
    id: '25169845878',
    name: 'Beribė',
    surname: 'Jūračka',
    hourPay: 25,
    hoursWorked: 10,
});
printEmployeeInfo(selfEmployed1);
const selfEmployed2 = new SelfEmployedPerson({
    id: '25169145878',
    name: 'Fanalijus',
    surname: 'Analijus',
    hourPay: 10,
});
printEmployeeInfo(selfEmployed2);
const designer = new BusinessLicencePerson({
    id: '15169845878',
    name: 'Plunksytė',
    surname: 'Krupštytė',
});
printEmployeeInfo(designer);
const jobs = [
    new Job('Facebook adds', 200),
    new Job('Google adds', 700),
    new Job('Twitter adds', 400),
];
jobs[0].completeJob();
jobs[2].completeJob();
const marketingSpecialist = new BusinessLicencePerson({
    id: '15169845878',
    name: 'Protenis',
    surname: 'Knistauskenis',
    jobs,
});
printEmployeeInfo(marketingSpecialist);
//# sourceMappingURL=main.js.map