export const showPersonSalary = ({ income, ...rest }) => {
    const personWithSalary = { ...rest };
    if (income) {
        personWithSalary.salary = income;
    }
    return personWithSalary;
};
export const printPersonSalary = (arr) => arr.forEach((person, index) => {
    console.log(`\n------------ Person ${index} ------------
    \n`);
    for (const personKey in person) {
        console.log(`\t${personKey[0].toUpperCase() + personKey.slice(1).toLowerCase()}: ${person[personKey]}`);
    }
});
//# sourceMappingURL=task11.js.map