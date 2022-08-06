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
        const literalTypesTask2Label = document.createElement('label');
        literalTypesTask2Label.setAttribute('for', 'literal-breeds-list');
        literalTypesTask2Label.textContent = 'task 2';
        const mostPopularDogBreedsList = document.createElement('ul');
        mostPopularDogBreedsList.setAttribute('id', 'literal-breeds-list');
        const breed1 = 'Labrador Retriever';
        const breed2 = 'French Bulldog';
        const breed3 = 'German Shepherd';
        const breed4 = 'Golden Retriever';
        const breed5 = 'Bulldog';
        const breedsArr = [breed1, breed2, breed3, breed4, breed5];
        const printBreeds = (arr) => {
            arr.forEach((breed) => {
                const mostPopularDogBreedsListItem = document.createElement('li');
                mostPopularDogBreedsListItem.textContent = breed;
                mostPopularDogBreedsList.append(mostPopularDogBreedsListItem);
                console.log(breed);
            });
        };
        const taskWrapper = createWrapper();
        taskWrapper.append(literalTypesTask2Label, mostPopularDogBreedsList);
        container.append(taskWrapper);
        printBreeds(breedsArr);
    }
    console.groupEnd();
    console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
    {
        const literalTypesTask3Label = document.createElement('label');
        literalTypesTask3Label.setAttribute('for', 'literal-parts-list');
        literalTypesTask3Label.textContent = 'task 3';
        const carBodyPartsList = document.createElement('ul');
        carBodyPartsList.setAttribute('id', 'literal-parts-list');
        const part1 = 'Hood';
        const part2 = 'Front Bumper';
        const part3 = 'Rear Bumper';
        const part4 = 'Spoiler';
        const part5 = 'Fender';
        const breedsArr = [part1, part2, part3, part4, part5];
        const printBreeds = (arr) => {
            arr.forEach((part) => {
                const carBodyPartsListItem = document.createElement('li');
                carBodyPartsListItem.textContent = part;
                carBodyPartsList.append(carBodyPartsListItem);
                console.log(part);
            });
        };
        const taskWrapper = createWrapper();
        taskWrapper.append(literalTypesTask3Label, carBodyPartsList);
        container.append(taskWrapper);
        printBreeds(breedsArr);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=literal-types.js.map