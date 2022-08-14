export const showFullname = ({ name, surname, ...rest }) => ({ fullname: `${name} ${surname}`, ...rest });
export const printPersonFullname = (arr) => {
    arr.forEach((person, index) => {
        console.log(`\n------------ Person ${index} ------------
    \n`);
        for (const personKey in person) {
            console.log(`\t${personKey[0].toUpperCase() + personKey.slice(1).toLowerCase()}: ${person[personKey]}`);
        }
    });
};
//# sourceMappingURL=task13.js.map