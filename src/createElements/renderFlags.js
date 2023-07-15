/**
 * Creates HTML elements div with images flages
 */
import { countLanguages } from './Languages.js'
import { flagsLanguage } from './flags.js';
import { imagesPath } from './flags.js'
import { getCurrentFlagNumber } from './flags.js';


const containerLanguages = document.getElementById('container-languages');
const flagsToggle = document.getElementById('flags-toggle');

/**
 * Creats HTMLelemens div and add thier on the HTML page.
 */
export function renderAllFlagsOnPage() {

    for (let i=0; i<flagsLanguage.length; i++) {
        let flagName = flagsLanguage[i];

        let newDiv = document.createElement('div');
        setID(newDiv, flagName);
        addStyles(newDiv, flagName);
        containerLanguages.appendChild(newDiv);
    }
 }
 
 function setID(el, flagName) {
    el.id = flagName;
 }

 /**
  * 
  * @param {HTMLelement} el div for rendering 
  * @param {String} flagLanguage with short language name
  * Example: en, ru, pl
  */
 function addStyles(el, flagLanguage) {
    el.classList.add('any-flags');
    addImage(el, flagLanguage);
 }

 function addImage(el, flagLanguage) {
     el.style.backgroundImage = `url(${imagesPath + flagLanguage}.png)` 
 }
 
//  renderAllFlagsOnPage();
 document.addEventListener('DOMContentLoaded', function() {
    renderAllFlagsOnPage();
  });
  
