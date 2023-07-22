
import { flagsLanguage } from './flags.js';
import { imagesPath } from './flags.js'
import { getCurrentFlagNumber } from './flags.js';
import { setCurrentFlagNumber } from './flags.js';
import { renderAllFlagsOnPage } from './renderFlags.js'
  
  const containerLanguages = document.getElementById('container-languages');
  const flagsToggle = document.getElementById('flags-toggle');
  const heading = document.getElementById('heading');
  const spanPrimeFactorization = document.getElementById('span-above-prime-factorization');
  const spanCanonicalFactorizations = document.getElementById('span-above-canonical-factorizations')

  // const spanAnswer = document.getElementById('span-above-lcm-answer');
  const spanAnswer = document.getElementById('span-answer');
  const inputNumber = document.getElementById('input-number');
  const btnAddNumber = document.getElementById('btn-add-number');
  const btnDelNumber = document.getElementById('btn-del-number');
  // const btnClearAll = document.getElementById('btn-clear-all');
  const spanPromptForUser = document.getElementById('span-prompt-for-user');
  const trash = document.getElementById('btn-trash');
  const enter = document.getElementById('btn-enter');

  const spanInContainerEnter = document.getElementById('span-in-container-enter');
  const textCheckboxLcm = document.getElementById('text-checkbox-lcm');
  const textCheckboxGcd = document.getElementById('text-checkbox-gcd');

  // const lcmAnswer = document.getElementById('lcm-answer');
  // const gcdAnswer = document.getElementById('gcd-answer');
  const stringNamedGcdInTop = document.getElementById('string-named-GCD-in-top');
  const stringNamedLcmInTop = document.getElementById('string-named-LCM-in-top');
  const stringNamedGcdInBottom = document.getElementById('string-named-GCD-in-bottom');
  const stringNamedLcmInBottom = document.getElementById('string-named-LCM-in-bottom');

  /**
   * Add new strings in order of flagsLanguage array
   */


  const headingText = 
  [
    'Here you can compute LCD and GCD',
    'Здесь вы можете вычислить НОК и НОД',
    'Tutaj możesz obliczyć NWW i NWD'
  ]

  const primeFactorizationText = 
  [ 
    'decompose the numbers into prime factors:',
    'разложим числа на простые множители:',
    'rozkładamy liczby na czynniki pierwsze:' 
  ]

  const canonicalFactorizationsText =
  [ 
    'create canonical factorizations for each of the given numbers:',
    'создаем канонические разложения каждого из указанных чисел:',
    'tworzymy rozkłady kanoniczne każdej z podanych liczb:'
  ]

  const answerText = 
  [
    'answer:', 
    'ответ:',
    'odpowiedź:'
  ]

  const placeholderForInputNumber = [
    'type numbers and click enter', 
    'напиши числа и нажми enter',
    'napisz liczbę i nacisnij enter'
  ]

  const warningsForBadUserInput = [
    'you can type only integer greater then one',
    'ты можешь вводить только целые числа более единицы',
    'możesz wprowadzić liczbę całkowitą większą niż jedynka'
  ]
  spanPromptForUser.innerText = warningsForBadUserInput[0]
  
  const btnAddNumberText = [
    'add number',
    'добавить число',
    'dodać liczbę'
  ]

  const btnDelNumberText= [
    'delete last number',
    'удалить последнее число',
    'usunąć ostatni numer'
  ]

  const trashText = [
    'delete all numbers',
    'удалить все числа',
    'usuń wszystkie liczby'
  ]

  const promptYourNumberHere = [
    'your numbers:',
    'твои числа:',
    'twoje liczby:'
  ]

  const spanInContainerEnterText = [
    'what do you want to solve?',
    'что хочешь вычислись?',
    'co chcesz obliczyć?'
  ]

  const enterText = [
    'click to calculate',
    'нажми чтобы вычислить',
    'kliknij aby obliczyć'
  ]

  const textCheckboxLcmText = [
    'LCM', 
    'НОK',
    'NWW'
  ]

  const textCheckboxGcdText = [
    'GCD',
    'НОД',
    'NWD'
  ]


  function changeInnerText () {
    const HTMLelements = [
      [ headingText, heading ], 
      [ primeFactorizationText, spanPrimeFactorization ],
      [ canonicalFactorizationsText, spanCanonicalFactorizations ], 
      [ answerText, spanAnswer ],
      [ warningsForBadUserInput, spanPromptForUser],
      [ spanInContainerEnterText, spanInContainerEnter],
      [ textCheckboxLcmText, textCheckboxLcm],
      [ textCheckboxGcdText, textCheckboxGcd],
      [ textCheckboxLcmText, stringNamedLcmInBottom],
      [ textCheckboxGcdText, stringNamedGcdInBottom],
      [ textCheckboxLcmText, stringNamedLcmInTop],
      [ textCheckboxGcdText, stringNamedGcdInTop]
    ];

    for (let [arrayName, element] of HTMLelements) {
       element.innerText = `${arrayName[getCurrentFlagNumber()]}`;
    }

    const buttons = [
      [ btnAddNumberText, btnAddNumber],
      [ btnDelNumberText, btnDelNumber],
      [ trashText, trash],
      [ enterText, enter]
    ]

    for (let [arrayName, button] of buttons) {
      button.title = `${arrayName[getCurrentFlagNumber()]}`;
    }

    inputNumber.placeholder = placeholderForInputNumber[getCurrentFlagNumber()];
    inputNumber.onblur = () => {
      inputNumber.placeholder = placeholderForInputNumber[getCurrentFlagNumber()];
    } 
  }

  /**
   * Listener for container with all language
   */
  containerLanguages.addEventListener('click', (event) => {
    const clickedElement = event.target;
  
    if (clickedElement.id) {
      const flagNumber = findNumberOfFlag(clickedElement.id);
      if (flagNumber !== -1) {
        setCurrentFlagNumber(flagNumber);
        changeFlag();
        changeInnerText();
      }
    }
  });
  
  function findNumberOfFlag(flagName) {
    return flagsLanguage.indexOf(flagName);
  }

  function changeFlag() {
    const url = `${imagesPath}${flagsLanguage[getCurrentFlagNumber()]}.png`;
    flagsToggle.style.backgroundImage = `url(${url})`;
  }

  /**
   * Togge animation for flags menu
   */
  let flagsHided = false;
  flagsToggle.onclick = () => {
    if (!flagsHided) {
      containerLanguages.style.animation = 'flags-up 1s 1 forwards';
      flagsHided = true;
    } else {
      containerLanguages.style.animation = 'flags-down 1s 1 forwards';
      flagsHided = false;
    }
  }
  
  


