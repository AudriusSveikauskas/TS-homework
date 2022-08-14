export const showPersonWithoutNameSurnameGender = ({ name, surname, sex, ...rest }) => ({ ...rest });
export const printPersonWithoutNameSurnameGender = (arr) => arr
    .forEach((person, index) => {
    console.log(`\n------------ Person ${index + 1} ------------
    \n`);
    for (const personKey in person) {
        console.log(`\t${personKey[0].toUpperCase() + personKey.slice(1).toLowerCase()}: ${person[personKey]}`);
    }
});
//# sourceMappingURL=task12.js.map