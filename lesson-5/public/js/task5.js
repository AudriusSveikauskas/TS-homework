export const showNameSurnameGender = ({ name, surname, sex, }) => ({ name, surname, sex });
export const printPersonNameSurnameGender = ({ name, surname, sex, }) => {
    console.log(`\t${name} ${surname} ${sex === 'male' ? 'is a man' : 'is a woman'}.`);
};
//# sourceMappingURL=task5.js.map