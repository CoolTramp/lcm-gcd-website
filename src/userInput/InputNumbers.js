
import { Canonical } from '../calculate/Canonical.js';
import { LCM } from '../calculate/LCM.js'
import { GCD } from '../calculate/GCD.js'

/**
   * The InputNumbers.js module provides functions for 
   * receiving and processing user input.
   */  

  const spanPromptForUser = document.getElementById('span-prompt-for-user');
  const inputNumber = document.getElementById('input-number');
  const btnAddNumber = document.getElementById('btn-add-number');
  const btnDeleteNumber = document.getElementById('btn-del-number');
  const btnTrash = document.getElementById('btn-trash');
  const userNumbersContainer = document.getElementById('user-numbers-container');

  const containerEnter = document.getElementById('container-enter');
  const checkboxLcm = document.getElementById('checkbox-lcm');
  const checkboxGcd = document.getElementById('checkbox-gcd');
  const btnEnter = document.getElementById('btn-enter');

  let allUserNumbers = [];

  btnAddNumber.addEventListener('click', () => {
      renderNumberOnPage();
      if (allUserNumbers.length >= 2) {
        showContainerWithEnter();
      } 
  });

  inputNumber.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        renderNumberOnPage();
    }
    if (allUserNumbers.length >= 2) {
      showContainerWithEnter();
    } 
  });

  const hiddenContainerEnter = document.getElementsByClassName('hidden-container')[0];
  function showContainerWithEnter() {
    hiddenContainerEnter.classList.add('show-container');
  }
  function hideContainderWithEnter() {
    hiddenContainerEnter.classList.remove('show-container');
  }

  /**
   * Renders a number from user input on the page if it is a positive integer.
   * If the user input is not a positive integer, the function will call the 
   * showPromptForUser function. to display a prompt with animation
   * and added the number to the allUserNumbers array as a string.
   * In any case, the value of HTML element inputNumber will be cleared;
   */
  function renderNumberOnPage() {
    checkUserInput() 
      ? (allUserNumbers.push(inputNumber.value), showUserNumber(inputNumber.value))
      : showPromptForUser();
  
    cleanInput();
  }

  function cleanInput() {
    inputNumber.value = '';
  }
  /**
  * Cheaks the user input.
  * It must be integer greater then zero.
  * The input must be provided in the HTML element with the ID "inputNumber".
  * @returns {Bollean} true if the input is a positive integer, false otherwise.
  */ 
  function checkUserInput() {
    const userValue = +inputNumber.value;
    return Number.isInteger(userValue) ? userValue > 1 : false;
  }
  
  //================
  //show user number
  //================
  /**
   * Place new div element with number of user in div 
   * container with ID user-numbers-container
   * @param {String} currentNumber
   */
  function showUserNumber(currentNumber) {
    userNumbersContainer.appendChild(creatDiv(currentNumber));
  }
  /**
   * Create new div element 
   * @param {String} currentNumber with user number
   * @returns {HTMLElement} configurated div element
   */
  function creatDiv(currentNumber) {
    return configurateDiv(document.createElement('div'), currentNumber)
  }
  /**
   * Configurate new div element
   * @param {HTMLElement} newDiv 
   * @param {String} currentNumber with user number
   * @returns {HTMLElement} configurated div element
   */
  function configurateDiv(newDiv, currentNumber) {
    newDiv.textContent = currentNumber;
    newDiv.classList.add('drop-number-animation');
    newDiv.draggable = true;
    newDiv.style.cursor = "grab";
    newDiv.ondragstart = dragUserNumber;
    return newDiv;
  }

  //===============
  //promts for user
  //===============
  /**
   * Shows a prompt to the user if their input was incorrect.
   * If the input is incorrect for the first time, 
   * the function will run the drop animation with the prompt.
   * If the input is incorrect for the second time, 
   * the function will show a second animation that will flash the prompt.
   * The prompt is displayed on the element with the ID "spanPromptForUser".
   */
  let promptIsShown = false;
  function showPromptForUser() {
    if (!promptIsShown) {
      spanPromptForUser.style.visibility = 'visible';
      spanPromptForUser.classList.add('drop-prompt-animation');
      setTimeout( () => {
        spanPromptForUser.classList.remove('drop-prompt-animation');
      }, 2000);
      promptIsShown = true;
    } else {
      spanPromptForUser.classList.add('flash-text');
      setTimeout( () => {
        spanPromptForUser.classList.remove('flash-text');
      }, 4000);
    }
  }

  //========================
  // button Delete number
  //========================

  /**
   * Delete last HTMLElement div with user number from page
   */
  function deleteUserNumberElement() {
    const lastUserNumber = userNumbersContainer.lastChild;
    lastUserNumber.classList.remove('drop-number-animation');
    lastUserNumber.classList.add('fly-number');
    setTimeout( () => {
      userNumbersContainer.removeChild(lastUserNumber);
    }, 100);

  }
  
  function removeLastUserNumberFromArray() {
    allUserNumbers.pop();
    
    if (allUserNumbers.length < 2) {
      hideContainderWithEnter();
    }
  }



  btnDeleteNumber.addEventListener('click', function() {
    deleteUserNumberElement();
    removeLastUserNumberFromArray();
  });

  //===================
  // button Trash (removes all user number from the allUserNumbers array
  // and allows to remove one number if the user drag it and drop on the trash)
  //===================

  /**
   * Runs animation if user click on the btn-trash element 
   */
  function shakeTrash() {
    btnTrash.classList.add('shake-animation');
    setTimeout( () => {
      btnTrash.classList.remove('shake-animation');
    }, 500);
  }

  function cleanArrayWithUserNumbers() {
    allUserNumbers.splice(0, allUserNumbers.length);
  }
  
  function removeAllUserNumberElements() {
    for (let i=0; i<userNumbersContainer.childElementCount; i++) {
      setTimeout(deleteUserNumberElement, i*110);
    }

  }


  btnTrash.addEventListener('click', function() {
    shakeTrash();
    cleanArrayWithUserNumbers();
    removeAllUserNumberElements();
    hideContainderWithEnter();
  });

  //==============
  //HTMLElement div with user number which the user drag
  //==============
  let holderItem;

  /**
  * Allow to drag any HTMLElement div with user number
  */
  function dragUserNumber() {
    holderItem = event.target;
  }

  function dragOverUserNumber() {
    event.preventDefault();
  }
  btnTrash.addEventListener('dragover', dragOverUserNumber);

  /**
   * Removes HTMLElement div when user drop HTMLElement on the button trash
   */
  function dropUserNumber() {
    event.preventDefault();
    removeUserNumberFromArray();
    holderItem.remove();
  }
  btnTrash.addEventListener('drop', dropUserNumber);

  function removeUserNumberFromArray() {
    const index = allUserNumbers.indexOf(holderItem.innerText);
    if (index > -1) {
      allUserNumbers.splice(index, 1);
    }

    if (allUserNumbers.length < 2) {
      hideContainderWithEnter();
    }
  }

  //======
  //enter
  //======

const primeFactorizationProcess = document.getElementById("prime-factorization-process");
const canonicalFactorizationProcess = document.getElementById('canonical-factorizations-process');
const stringNamedLCMInTop = document.getElementById('string-named-LCM-in-top');
const stringNamedGCDInTop = document.getElementById('string-named-GCD-in-top');
const stringNamedLCMInBottom = document.getElementById('string-named-LCM-in-bottom');
const stringNamedGCDInBottom = document.getElementById('string-named-GCD-in-bottom');

const LCMAnswerTop = document.getElementById('lcm-answer-top');
const LCMAnswer = document.getElementById('lcm-answer');
const GCDAnswerTop = document.getElementById('gcd-answer-top');
const GCDAnswer = document.getElementById('gcd-answer');

function compute() {
  cleanInput();
  cleanAnswers();
  const numArray = prepareNumberForCamputing(allUserNumbers);
  const canonical = new Canonical(...numArray);
  
  canonical.renderProcessOfDividionOnHTMLElement(primeFactorizationProcess);
  canonical.renderPrimeExponentOnHTMLElement(canonicalFactorizationProcess);

  checkCheckboxes();

  if (checkboxLcm.checked) {
    show(stringNamedLCMInBottom, LCMAnswer, stringNamedLCMInTop, LCMAnswerTop);
    const lcm = new LCM(canonical.degrees);
    lcm.renderDetailedAnswerOnHTMLElement(LCMAnswer);
    lcm.renderAnswerOnly(LCMAnswerTop);
  }

  if (checkboxGcd.checked) {
    show(stringNamedGCDInBottom, GCDAnswer, stringNamedGCDInTop, GCDAnswerTop);
    const gcd = new GCD(canonical.degrees);
    gcd.renderDetailedAnswerOnHTMLElement(GCDAnswer);
    gcd.renderAnswerOnly(GCDAnswerTop);
  }
}

/**
 * If a user didn't choose all checkboxes,
 * all checkboxex will be choosed.
 */
function checkCheckboxes() {
  if (!checkboxGcd.checked && !checkboxLcm.checked) {
    checkboxGcd.checked = true;
    checkboxLcm.checked = true;
  }
}

function prepareNumberForCamputing(nubmers) {
  return deleteRepeatNumber(convertStringToNumber(nubmers));
}

function convertStringToNumber(numbers) {
  return numbers.map(str => parseInt(str));
}

function deleteRepeatNumber(numbers) {
  return Array.from(new Set(numbers));
}

function cleanAnswers() {
  const elements = [
    stringNamedLCMInTop,
    stringNamedGCDInTop,
    LCMAnswerTop,
    GCDAnswerTop,
    stringNamedLCMInBottom,
    stringNamedGCDInBottom,
    LCMAnswer,
    GCDAnswer
  ];

  for (let element of elements) {
    element.style.display = 'none';
  }
}

/**
 * Change style 'display' in HTMLElements 
 * @param  {...any} elements - HTMLElements which will 
 * style display will be 'block'
 */
function show(...elements) {
  for (let element of elements) {
    element.style.display = 'block';
  }
}

const hiddenComputationContainer = document.getElementsByClassName('hidden-container')[1];
function showComputationContainer() {
  hiddenComputationContainer.classList.add('show-container');
}

btnEnter.addEventListener('click', ()=> {
  compute();
  showComputationContainer();
});