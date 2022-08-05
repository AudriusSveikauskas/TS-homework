"use strict";
console.group('Enum - užduotys');
{
    const container = document.getElementById('container');
    const taskTitle = document.createElement('h3');
    taskTitle.textContent = 'enums.ts';
    container.append(taskTitle);
    const createWrapper = () => {
        const taskWrapper = document.createElement('div');
        taskWrapper.classList.add('task-wrapper');
        return taskWrapper;
    };
    let BiggestLtCities;
    (function (BiggestLtCities) {
        BiggestLtCities["Vilnius"] = "Vilnius";
        BiggestLtCities["Kaunas"] = "Kaunas";
        BiggestLtCities["Klaipeda"] = "Klaip\u0117da";
        BiggestLtCities["Panevezys"] = "Panev\u0117\u017Eys";
        BiggestLtCities["Siauliai"] = "\u0160iauliai";
    })(BiggestLtCities || (BiggestLtCities = {}));
    console.group('1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.');
    {
        const enumsTask1Label = document.createElement('label');
        enumsTask1Label.setAttribute('for', 'enums-cities-list');
        enumsTask1Label.textContent = 'task 1';
        const biggestLtCitiesList = document.createElement('ul');
        biggestLtCitiesList.setAttribute('id', 'enums-cities-list');
        const printCities = (key) => {
            const biggestLtCitiesListItem = document.createElement('li');
            biggestLtCitiesListItem.textContent = BiggestLtCities[key];
            biggestLtCitiesList.append(biggestLtCitiesListItem);
            console.log(BiggestLtCities[key]);
        };
        const keysArr = ['Vilnius', 'Kaunas', 'Klaipeda', 'Panevezys', 'Siauliai'];
        keysArr.forEach((key) => {
            printCities(key);
        });
        const taskWrapper = createWrapper();
        taskWrapper.append(enumsTask1Label, biggestLtCitiesList);
        container.append(taskWrapper);
    }
    console.groupEnd();
    console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
    {
    }
    console.groupEnd();
    console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
    {
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=enums.js.map