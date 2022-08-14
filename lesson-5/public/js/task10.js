export const showHasCarByGender = (counter, person) => {
    if (!person.hasCar) {
        return counter;
    }
    if (!counter[person.sex]) {
        counter[person.sex] = 0;
    }
    counter[person.sex] += 1;
    return counter;
};
export const printHasCarByGender = (list) => {
    for (const gender in list) {
        console.log(`\t${gender[0].toUpperCase() + gender.slice(1).toLowerCase()}: ${list[gender]}.`);
    }
};
//# sourceMappingURL=task10.js.map