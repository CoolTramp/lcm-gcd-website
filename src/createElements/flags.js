
export const flagsLanguage = ["en", "ru", "pl"];
export const imagesPath = "../img/flags/flag_";

let currentFlagNumber = 0;
export function setCurrentFlagNumber(value) {
    currentFlagNumber = value;
}
  
export function getCurrentFlagNumber() {
    return currentFlagNumber;
}