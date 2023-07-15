/**
 * The drop-menu.js script adds animation on menu
 * 31.03.2023
 */
const menuForLogger = document.getElementById('prime-facrotization-menu');
const restoreDown = document.getElementById('restore-down');
const increaseFontSize = document.getElementById('increase-font-size');
const reduceFontSize = document.getElementById('reduce-font-size');
const primeFactorizationProcess = document.getElementById('prime-factorization-container');

/**
 * The flag to track stage of the menu
 */
let clickedOnMenu = true;

/**
 * Handles the click event for the 'menuForLogger' button
 * and determines which animation should be applied.
 */
menuForLogger.onclick = () => {
    if (clickedOnMenu) {
        turnOnAnimation('up-menu', 'down-menu');
    } else {
        turnOnAnimation('down-menu', 'up-menu');
    }
}
/**
 * Turns animation for buttons, 
 * @param {String} classForRemove - the name of class with the animation to be removed,
 * @param {String} classForAdd - the name of class with the animation to be added.
 */
function turnOnAnimation(classForRemove, classForAdd) {
    const buttons = [restoreDown, increaseFontSize, reduceFontSize];
    
    buttons.forEach(button => {
        toggleClasses(button, classForRemove, classForAdd);
    })
}
/**
 * Toggles classes with animation
 * @param {HTMLElement} button - the HTML button element,
 * @param {HTMLElement} classForRemove - the class with animation to be removed,
 * @param {HTMLElement} classForAdd - the class with animation to be added.
 */
function toggleClasses(button, classForRemove, classForAdd) {
    button.classList.remove(classForRemove);
    button.classList.add(classForAdd);
    button.classList.toggle('hide');
}

/**
 * Toggles the scroll-overflow class
 */
restoreDown.onclick = () => {
  primeFactorizationProcess.classList.toggle('scroll-overflow');
};
/**
 * Change the font size of 'table-with-factorization' th element,
 * The 'increaseFontSize' button increases the font size,
 * The 'reduceFontSize' button recudeses  the font size.
 */
document.addEventListener("DOMContentLoaded", () => {
    const thes = document.getElementsByTagName('th');
    const PIXEL = 1;

    reduceFontSize.onclick = () => {
      for (const th of thes) {
        changeFontSize(th, -PIXEL);
      }
    };
    increaseFontSize.onclick = () => {
        for (const th of thes) {
          changeFontSize(th, PIXEL);
        }
      };
  });

  const changeFontSize = (th, pixel) => {
    const currentFontSize = getCurrentFontSizeFromComponent(th);
    th.style.fontSize = (currentFontSize + pixel) + "px";
  };
  
  const getCurrentFontSizeFromComponent = (th) => {
    const currentFontSize = parseInt(window.getComputedStyle(th).fontSize);
    return currentFontSize;
};
 

