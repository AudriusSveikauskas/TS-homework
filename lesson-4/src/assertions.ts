/* eslint no-console: ["error", { allow: ["groupCollapsed", "log", "groupEnd", "dir", "group"] }] */

/*
  Assertion(Teigimas) - tai papildoma direktyva tiksliau aprašyti tipui,
  kuomet programuotojui žinoma daugiau
  informacijos nei gali žinoti TypeScript transpiliatorius.

  Įmanoma 'teigti' tik tuos tipus, kurie priklauso potencialių tipų aibei
*/

type PossibleType = string | number;

const someNumber: PossibleType = 17 as number;
const title: PossibleType = 'Grace' as string;

const form = document.createElement('form') as HTMLFormElement;
form.setAttribute('id', 'form-add-user');
document.body.append(form);

// Šiuo atveju 'teigiame' kad rastas elementas bus būtent form'os elementas.
const formAddUser: HTMLFormElement = document.querySelector(
  '#form-add-user',
) as HTMLFormElement;
formAddUser.onsubmit = (e) => {
  e.preventDefault();
  console.log(`Ateityje pridėsiu vartotoją: ${title} (${someNumber})`);
};

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Assertions - užduotys');
{
  const container = document.getElementById('container') as HTMLDivElement;

  const createWrapper = (): HTMLDivElement => {
    const taskWrapper = document.createElement('div');
    taskWrapper.classList.add('task-wrapper');
    return taskWrapper;
  };

  const assertionsSubmitBtn = document.createElement('button');
  assertionsSubmitBtn.setAttribute('id', 'submit-button');
  assertionsSubmitBtn.textContent = 'Submit';

  console.group(
    '1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"',
  );
  {
    const assertionTask1Label = document.createElement('label');
    assertionTask1Label.setAttribute('for', 'submit-button');
    assertionTask1Label.textContent = 'assertions.ts -> task 1';

    const taskWrapperEl = createWrapper();
    taskWrapperEl.append(assertionTask1Label, assertionsSubmitBtn);

    container.append(taskWrapperEl);

    const submitBtn = document.getElementById(
      'submit-button',
    ) as HTMLButtonElement;
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('assertions.ts -> task 1 -> paspausta');
    });
  }
  console.groupEnd();

  console.group(
    '2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas',
  );
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
  }
  console.groupEnd();

  console.group(
    '3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje',
  );
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia
  }
  console.groupEnd();
}
console.groupEnd();
