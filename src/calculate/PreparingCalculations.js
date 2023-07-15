import { PrimeFactorization } from './PrimeFactorization.js'
import { TrackingDivideHistory } from './TrackingDivideHistory.js'
import { PadFormatter } from '../format/PadFormatter.js'
import { HTMLTableCreator } from '../createElements/HTMLTablePrimeFactorizationProcess.js'

const tableWithFactorization = document.getElementById('table-with-factorization');

  /**
  * Superclass for LCM and GCD. 
  * LCM - stands for "Least Common Multiple". 
  * GCD - Greatest Common Divisor
  */
export class PreparingCalculations {
  /**
  * Constructor The PreparingCalculations class:
  * @param {Array} numbers - the positive integer for calculate LCD or GCD,
  * @throws {Error} if not a positive integer,
  * @field {Array} this._paddedStrings will constain the padded strings
  * Example: ["10 | 2<br>&nbsp;&nbsp;5 | 5", ... ]
  * @field {Array} this._primeFactors will contain prime factors 
  */
  constructor(...numbers) {
    this._numbers = this._deleteRepeating(numbers);
    this._numbers = this._deleteIsNotPositiveInteger(this._numbers);

    this._trackingDivideHistory = new TrackingDivideHistory();
    this._primeFactorization = new PrimeFactorization(this._trackingDivideHistory);
    this._padFormatter = new PadFormatter();

    this._paddedStrings = [];
    this._primeFactors = [];
    this._getPrimeFactorsAndFormatterStrings(this._numbers);
  }
  /**
   * Adds call methods this.addPrimeFactorsToArray()
   * and this.addDividingHistoryStringToFormattedStringsArray(),
   * @param {Array} numbers for will caclulate LCD or GCD
   * Example: [2520, 25];
   */
   _getPrimeFactorsAndFormatterStrings(numbers) {
    numbers.forEach(number =>
    {
      this._addPrimeFactorsToArray(number);
      this._addDividingHistoryStringToFormattedStringsArray();
    });
  }
 /**
 * Adds the prime factors of a number to the this.primeFactors array.
 * @param {Number} number - The number to factorize.
 * For example: [ 2, 2, 2, 5, 5 ]
 */
  _addPrimeFactorsToArray(number) {
    const factors = this._primeFactorization.calculatePrimeFactors(number);
    this._primeFactors.push(factors);
  }
  /**
   * Adds the padded string to the this.formattedString array,
   * For example: "10 | 2<br>&nbsp;&nbsp;5 | 5"
   */
  _addDividingHistoryStringToFormattedStringsArray() {
    let tuples = this._trackingDivideHistory
      .getHistoryOfDividingNumber();

    let paddedString = this._padFormatter
      .creatStringFrom(tuples);

    this._paddedStrings.push(paddedString);  
  }
  /**
   * To log the process of prime factorization on the HTML
   * @param {HTMLElement} logger is the place in HTML
   * where will place the process of prime factorization.
   */
  renderProcessOfDividionOnHTMLElement(logger) {
    const htmlTableCreator = new HTMLTableCreator(logger);
    const strings = this._paddedStrings;
    htmlTableCreator.logTable(strings); 
  }
  /**
   * Check a input for calculating the LCD,
   * @param {Array} numbers - array for checking,
   * @throws {Error} if numbers if not array
   * with positive integers
   */
  _checkInput(numbers) {
      if (numbers.length <= 1) {
        throw new Error('there must be at least 2 different digits for calculating LCD');
      }

      numbers.forEach(value => {
        if (!Number.isInteger(value) || value <= 0) {
          throw new Error('all number must be positive integer');
        }
      }); 
  }
  /**
   * Deletes repeating numbers
   * @param {Array} numbers - numbers
   * @return {Array} array without repeating numbers
   */
  _deleteRepeating(numbers) {
    return numbers.filter((value, index, self) => 
      self.indexOf(value) === index);
  }
  _deleteIsNotPositiveInteger(numbers) {
    const FIRST_AVAILABLE_NUMBER_FOR_FACTORIZATION = 2;
    return numbers.filter(value => 
        Number.isInteger(value) && value>=FIRST_AVAILABLE_NUMBER_FOR_FACTORIZATION
      );
  }
  // get formattedStrings() {
  //   return this._paddedStrings;
  // }
  get primeFactors() {
    return this._primeFactors;
  }  
}
