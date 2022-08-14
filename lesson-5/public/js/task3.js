export const showNameSurnameMarried = ({ name, surname, married, }) => ({
    name,
    surname,
    married: Boolean(married),
});
export const printPersonNameSurnameMarried = ({ name, surname, married, }) => {
    console.log(`\t${name} ${surname} ${married ? 'is married.' : 'is not married.'}`);
};
//# sourceMappingURL=task3.js.map