/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */

console.group('Tuples - užduotys');
{
  const container = document.getElementById('container') as HTMLDivElement;

  const taskTitle = document.createElement('h3');
  taskTitle.textContent = 'tuples.ts';

  container.append(taskTitle);

  const createWrapper = (): HTMLDivElement => {
    const taskWrapper = document.createElement('div');
    taskWrapper.classList.add('task-wrapper');
    return taskWrapper;
  };

  type HomoSapiens = [string, number];

  const darius: HomoSapiens = ['Darius', 35];
  const ona: HomoSapiens = ['Ona', 26];
  const jonas: HomoSapiens = ['Jonas', 48];
  const vilma: HomoSapiens = ['Vilma', 55];

  console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
  {
    const tuplesTask1Label = document.createElement('label');
    tuplesTask1Label.setAttribute('for', 'tuples-homo-sapiens-list');
    tuplesTask1Label.textContent = 'task 1';

    const homoSapiensList = document.createElement('ul');
    homoSapiensList.setAttribute('id', 'tuples-homo-sapiens-list');

    const homoSapiensArr: HomoSapiens[] = [darius, ona, jonas, vilma];

    const printHumans = (arr: HomoSapiens[]): void => {
      arr.forEach((human) => {
        const homoSapiensListItem = document.createElement('li');
        homoSapiensListItem.textContent = `${human[0]} (${human[1]})`;
        homoSapiensList.append(homoSapiensListItem);
        console.log(`${human[0]} (${human[1]})`);
      });
    };

    const taskWrapper = createWrapper();
    taskWrapper.append(tuplesTask1Label, homoSapiensList);
    container.append(taskWrapper);

    printHumans(homoSapiensArr);
  }
  console.groupEnd();

  console.group(
    '2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)',
  );
  {
    // sprendimo pavyzdžius spausdinkite čia
  }
  console.groupEnd();

  console.group(
    '3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)',
  );
  {
    // sprendimo pavyzdžius spausdinkite čia
  }
  console.groupEnd();
}
console.groupEnd();
