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

  type Owner = [string, string];
  type Dog = [string, number];

  type OwnerAndDog = [Owner, Dog];

  const owner1: Owner = ['LeBron', 'James'];
  const owner2: Owner = ['Kevin', 'Durant'];
  const owner3: Owner = ['Stephen', 'Curry'];
  const owner4: Owner = ['James', 'Harden'];
  const owner5: Owner = ['Anthony', 'Davis'];

  const dog1: Dog = ['Labrador Retriever', 5];
  const dog2: Dog = ['French Bulldog', 2];
  const dog3: Dog = ['German Shepherd', 8];
  const dog4: Dog = ['Golden Retriever', 3];
  const dog5: Dog = ['Bulldog', 7];

  const ownerAndDog1: OwnerAndDog = [owner1, dog1];
  const ownerAndDog2: OwnerAndDog = [owner2, dog2];
  const ownerAndDog3: OwnerAndDog = [owner3, dog3];
  const ownerAndDog4: OwnerAndDog = [owner4, dog4];
  const ownerAndDog5: OwnerAndDog = [owner5, dog5];

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
    const tuplesTask2Label = document.createElement('label');
    tuplesTask2Label.setAttribute('for', 'tuples-owner-dog-list');
    tuplesTask2Label.textContent = 'task 2';

    const ownerAndDogList = document.createElement('ul');
    ownerAndDogList.setAttribute('id', 'tuples-owner-dog-list');

    const ownerAndDogListArr: OwnerAndDog[] = [
      ownerAndDog1,
      ownerAndDog2,
      ownerAndDog3,
      ownerAndDog4,
      ownerAndDog5,
    ];

    const printOwnerAndDog = (arr: OwnerAndDog[]): void => {
      arr.forEach((el) => {
        const ownerAndDogListItem = document.createElement('li');
        ownerAndDogListItem.textContent = `${el[0][0]} ${el[0][1]} (${el[1][0]}, ${el[1][1]})`;
        ownerAndDogList.append(ownerAndDogListItem);
        console.log(`${el[0][0]} ${el[0][1]} (${el[1][0]}, ${el[1][1]})`);
      });
    };

    const taskWrapper = createWrapper();
    taskWrapper.append(tuplesTask2Label, ownerAndDogList);
    container.append(taskWrapper);

    printOwnerAndDog(ownerAndDogListArr);
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
