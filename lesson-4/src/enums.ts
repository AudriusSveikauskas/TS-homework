/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */

console.group('Enum - užduotys');
{
  const container = document.getElementById('container') as HTMLDivElement;

  const taskTitle = document.createElement('h3');
  taskTitle.textContent = 'enums.ts';

  container.append(taskTitle);

  const createWrapper = (): HTMLDivElement => {
    const taskWrapper = document.createElement('div');
    taskWrapper.classList.add('task-wrapper');
    return taskWrapper;
  };

  // TASK 1
  enum BiggestLtCities {
    Vilnius = 'Vilnius',
    Kaunas = 'Kaunas',
    Klaipeda = 'Klaipėda',
    Panevezys = 'Panevėžys',
    Siauliai = 'Šiauliai',
  }

  type CityKeys = keyof typeof BiggestLtCities;

  // TASK 2
  enum CountriesHighestPopulation {
    China,
    India,
    USA,
    Indonesia,
    Pakistan,
  }

  type PopulationKeys = keyof typeof CountriesHighestPopulation;

  // TASK 3
  enum CountriesGDP {
    USA = 1,
    China,
    Japan,
    Germany,
    UK,
  }

  type GDPKeys = keyof typeof CountriesGDP;

  console.group('1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.');
  {
    const enumsTask1Label = document.createElement('label');
    enumsTask1Label.setAttribute('for', 'enums-cities-list');
    enumsTask1Label.textContent = 'task 1';

    const biggestLtCitiesList = document.createElement('ul');
    biggestLtCitiesList.setAttribute('id', 'enums-cities-list');

    const printCities = (key: CityKeys): void => {
      const biggestLtCitiesListItem = document.createElement('li');
      biggestLtCitiesListItem.textContent = BiggestLtCities[key];
      biggestLtCitiesList.append(biggestLtCitiesListItem);
      console.log(BiggestLtCities[key]);
    };

    const keysArr = ['Vilnius', 'Kaunas', 'Klaipeda', 'Panevezys', 'Siauliai'];
    keysArr.forEach((key) => {
      printCities(key as CityKeys);
    });

    const taskWrapper = createWrapper();
    taskWrapper.append(enumsTask1Label, biggestLtCitiesList);
    container.append(taskWrapper);
  }
  console.groupEnd();

  console.group(
    '2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.',
  );
  {
    const enumsTask2Label = document.createElement('label');
    enumsTask2Label.setAttribute('for', 'enums-population-list');
    enumsTask2Label.textContent = 'task 2';

    const biggestCountriesList = document.createElement('ul');
    biggestCountriesList.setAttribute('id', 'enums-population-list');

    const printCountries = (key: PopulationKeys): void => {
      const biggestCountriesListItem = document.createElement('li');
      biggestCountriesListItem.textContent = `${CountriesHighestPopulation[key]} (${key})`;
      biggestCountriesList.append(biggestCountriesListItem);
      console.log(CountriesHighestPopulation[key]);
    };

    const keysArr = ['China', 'India', 'USA', 'Indonesia', 'Pakistan'];
    keysArr.forEach((key) => {
      printCountries(key as PopulationKeys);
    });

    const taskWrapper = createWrapper();
    taskWrapper.append(enumsTask2Label, biggestCountriesList);
    container.append(taskWrapper);
  }
  console.groupEnd();

  console.group(
    '3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".',
  );
  {
    const enumsTask3Label = document.createElement('label');
    enumsTask3Label.setAttribute('for', 'enums-gdp-list');
    enumsTask3Label.textContent = 'task 3';

    const biggestGDPCountriesList = document.createElement('ul');
    biggestGDPCountriesList.setAttribute('id', 'enums-gdp-list');

    const printCountries = (key: GDPKeys): void => {
      const biggestGDPCountriesListItem = document.createElement('li');
      biggestGDPCountriesListItem.textContent = `${CountriesGDP[key]} (${key})`;
      biggestGDPCountriesList.append(biggestGDPCountriesListItem);
      console.log(CountriesGDP[key]);
    };

    const keysArr = ['USA', 'China', 'Japan', 'Germany', 'UK'];
    keysArr.forEach((key) => {
      printCountries(key as GDPKeys);
    });

    const taskWrapper = createWrapper();
    taskWrapper.append(enumsTask3Label, biggestGDPCountriesList);
    container.append(taskWrapper);
  }
  console.groupEnd();
}
console.groupEnd();
