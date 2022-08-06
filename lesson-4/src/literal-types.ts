/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */

console.group('Literal types - užduotys');
{
  const container = document.getElementById('container') as HTMLDivElement;

  const taskTitle = document.createElement('h3');
  taskTitle.textContent = 'literal-types.ts';

  container.append(taskTitle);

  const createWrapper = (): HTMLDivElement => {
    const taskWrapper = document.createElement('div');
    taskWrapper.classList.add('task-wrapper');
    return taskWrapper;
  };

  type Berlin = 'Berlin';
  type Hamburg = 'Hamburg';
  type Munich = 'Munich';
  type Cologne = 'Cologne';
  type Frankfurt = 'Frankfurt';
  type BiggestGermanyCities = Berlin | Hamburg | Munich | Cologne | Frankfurt;

  type LabradorRetriever = 'Labrador Retriever';
  type FrenchBulldog = 'French Bulldog';
  type GermanShepherd = 'German Shepherd';
  type GoldenRetriever = 'Golden Retriever';
  type Bulldog = 'Bulldog';
  type MostPopularDogBreeds =
    | LabradorRetriever
    | FrenchBulldog
    | GermanShepherd
    | GoldenRetriever
    | Bulldog;

  console.group(
    '1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.',
  );
  {
    const literalTypesTask1Label = document.createElement('label');
    literalTypesTask1Label.setAttribute('for', 'literal-cities-list');
    literalTypesTask1Label.textContent = 'task 1';

    const biggestGermanyCitiesList = document.createElement('ul');
    biggestGermanyCitiesList.setAttribute('id', 'literal-cities-list');

    const city1: BiggestGermanyCities = 'Berlin';
    const city2: BiggestGermanyCities = 'Hamburg';
    const city3: BiggestGermanyCities = 'Munich';
    const city4: BiggestGermanyCities = 'Cologne';
    const city5: BiggestGermanyCities = 'Frankfurt';

    const citiesArr = [city1, city2, city3, city4, city5];

    const printCities = (arr: BiggestGermanyCities[]): void => {
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

  console.group(
    '2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.',
  );
  {
    const literalTypesTask2Label = document.createElement('label');
    literalTypesTask2Label.setAttribute('for', 'literal-breeds-list');
    literalTypesTask2Label.textContent = 'task 2';

    const mostPopularDogBreedsList = document.createElement('ul');
    mostPopularDogBreedsList.setAttribute('id', 'literal-breeds-list');

    const breed1: MostPopularDogBreeds = 'Labrador Retriever';
    const breed2: MostPopularDogBreeds = 'French Bulldog';
    const breed3: MostPopularDogBreeds = 'German Shepherd';
    const breed4: MostPopularDogBreeds = 'Golden Retriever';
    const breed5: MostPopularDogBreeds = 'Bulldog';

    const breedsArr = [breed1, breed2, breed3, breed4, breed5];

    const printBreeds = (arr: MostPopularDogBreeds[]): void => {
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

  console.group(
    '3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.',
  );
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
  }
  console.groupEnd();
}
console.groupEnd();
