"use strict";
console.group('Literal types - užduotys');
{
    const container = document.getElementById('container');
    const taskTitle = document.createElement('h3');
    taskTitle.textContent = 'literal-types.ts';
    container.append(taskTitle);
    const createWrapper = () => {
        const taskWrapper = document.createElement('div');
        taskWrapper.classList.add('task-wrapper');
        return taskWrapper;
    };
    console.group('1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
    {
        const literalTypesTask1Label = document.createElement('label');
        literalTypesTask1Label.setAttribute('for', 'literal-cities-list');
        literalTypesTask1Label.textContent = 'task 1';
        const biggestGermanyCitiesList = document.createElement('ul');
        biggestGermanyCitiesList.setAttribute('id', 'literal-cities-list');
        const city1 = 'Berlin';
        const city2 = 'Hamburg';
        const city3 = 'Munich';
        const city4 = 'Cologne';
        const city5 = 'Frankfurt';
        const citiesArr = [city1, city2, city3, city4, city5];
        const printCities = (arr) => {
            arr.forEach((city) => {
                const biggestGermanyCitiesListItem = document.createElement('li');
                biggestGermanyCitiesListItem.textContent = city;
                biggestGermanyCitiesList.append(biggestGermanyCitiesListItem);
                console.log(city);
            });
        };
        const taskWrapper = createWrapper();
        taskWrapper.append(literalTypesTask1Label, biggestGermanyCitiesList);
        container.append(taskWrapper);
        printCities(citiesArr);
    }
    console.group('2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.');
    {
    }
    console.groupEnd();
    console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
    {
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=literal-types.js.map