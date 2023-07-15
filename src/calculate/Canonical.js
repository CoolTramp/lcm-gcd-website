import { PreparingCalculations } from "./PreparingCalculations.js";
import { PrimeExponentVisualizer } from "../createElements/PrimeExponentVisualizer.js"
/**
 * The Degree class for compute the degree of number
 * 
 * Inherits field:
 * @field {Array} this._primeFactors will contain arrays 
 * with prime factors.
 * Example: [[2, 2, 5], [ 2, 2, 2, 5, 5 ]];
 *
 * Inherits method:
 * Creats the HTML table with process dividion.
 * @method _logProcessOfDividionOnHTMLElement
 * @param {HTMLElement} logger is the place in HTML
 * where will place the process of prime factorizat ion.
 * 
 1. `canonical`: Contains user numbers and their canonical numbers (prime factors and their degrees).
 *    Example:
 *    {
 *      '24': { '2': { degree: 3 }, '3': { degree: 1 } },
 *      '36': { '2': { degree: 2 }, '3': { degree: 2 } },
 *      '60': { '2': { degree: 2 }, '3': { degree: 1 }, '5': { degree: 1 } },
 *      '108': { '2': { degree: 3 }, '3': { degree: 2 } },
 *    }
 * 
 * 2. `data`: Contains data for computing LCM and GCD, including prime factors, count,
 *    minDegree (minimum degree of a prime factor detected in user numbers), and
 *    maxDegree (maximum degree of a prime factor).
 *    Example:
 *    {
 *      '2': { count: 4, minDegree: 2, maxDegree: 3 },
 *      '3': { count: 4, minDegree: 1, maxDegree: 2 },
 *      '5': { count: 1, minDegree: 1, maxDegree: 1 },
 *      userNumbers: [ 24, 36, 60, 108 ]
 *    }
 */
export class Canonical extends PreparingCalculations {
  /**
   * Constructor The Degree class
   * @param {Array} numbers - array with positive integer for calculation
  */
  constructor(...numbers) {
    super(...numbers);
    this.numbers = numbers;
    this._countUserNumbers = 0;
    this._canonical = {};
    this._data = {};
    this._addUserNumbers();
    this._computeDataAndCanonical();
  }
  /**
   * Add Array with all user numbers in the object this._data
   */
  _addUserNumbers() {
    this._data['userNumbers'] = this.numbers;
  }
  /**
  * Calculates the degree of numbers from this._primeFactors array, 
  * @returns {Array} converted result of calculation.
  */
  _computeDataAndCanonical() {
      let temp = {};

      this._primeFactors.forEach(primeFactors => {
          temp = this._getDegreesFrom(primeFactors);
          this._initializeCanonical();
          this._processTempData(temp);
      },);
  }
  /**
 * Counts degrees of prime numbers.
 * @param {Array} primeFactors - array with prime factors of user number.
 * Example: [2,2,2,3].
 * @returns {Object} with prime number, count 
 * (Iterating if a factor from one array is present in the next array)
 * and their degree.
 * Example: { '2': { count: 1, degree: 3 }, '3': { count: 1, degree: 1 } }
 */
_getDegreesFrom(primeFactors) {
  return primeFactors.reduce((acc, num) => {
      if (!acc[num]) acc[num] = {'count': 1, 'degree': 1};
      else acc[num].degree++;
      return acc;
  },  {});
}
/**
* Processes the data from the temp object for further analysis.
* @param {Object} temp - containt the prime number and their count
* (Iterating if a factor from one array is present in the next array), degree.
* Example: { '2': { count: 1, degree: 3 }, '3': { count: 1, degree: 1 } }
*/
_processTempData(temp) {
  for (let primeNumber in temp) {
    this._addDegreesInCanonical(
       this._countUserNumbers,
       primeNumber,
       temp[primeNumber].degree);
    this._addCountMinAndMaxDegree(primeNumber, temp);
  }

  this._countUserNumbers++
}

/**
* Sets user number and its canonical representation in the canonical object
* Example:  '24': { '2': { degree: 3 }, '3': { degree: 1 } },
* @param {Integer} numberIndex - value of the countUserNumbers count
* @param {String} primeNumber - prime number 
* @param {Interger} degree of prime number
*/
_addDegreesInCanonical(numberIndex, primeNumber, degree) {
  this._canonical[this._numbers[numberIndex]][primeNumber] = { degree: degree };
}

/**
* Adds the count (Iterating if a factor from one array is present in the next array),
* minimum degree, and maximum degree for a prime number key.
* If the prime number key does not exist in the data object, it creates a new entry.
* If the prime number key already exists, it updates the existing entry.
* @param {String} primeNumber - Prime number
*/
_addCountMinAndMaxDegree(primeNumber, temp) {
  if (!this._data.hasOwnProperty(primeNumber)) {
  this._setPrimeNumberData(
      primeNumber, 
      temp[primeNumber].count,
      temp[primeNumber].degree)
  } else {
      this._updateData(primeNumber, temp[primeNumber].degree)
  }
}

/**
* Creates a new key (primeNumbers) and an object value that contains 
* the count, (Iterating if a factor from one array is present in the next array)
* minimal degree, and maximal degree of a prime number.
* Example: '2': { count: 4, minDegree: 2, maxDegree: 3 },
* @param {String} primeNumber - Prime number
* @param {Integer} count - Number of occurrences of the prime number in each user number
* @param {Integer} degree - Exponential value of the prime number
*/
_setPrimeNumberData(primeNumber, count, degree) {
  this._data[primeNumber] = {
    count: count,
    minDegree: degree,
    maxDegree: degree
  };
}

/**
* Update count (Iterating if a factor from one array is present in the next array),
* minimal degree, and maximal degree of a prime number.
* Example: '2': { count: 4, minDegree: 2, maxDegree: 3 },
* @param {Integer} primeNumber - prime number
* @param {*} degree - degree of prime numbers
*/
_updateData(primeNumber, degree) {
  this._data[primeNumber].minDegree = Math.min(degree, this._data[primeNumber]?.minDegree);
  this._data[primeNumber].maxDegree = Math.max(degree, this._data[primeNumber]?.maxDegree);
  this._data[primeNumber].count++;
}

/**
* Initialize a new empty object for key
*/
_initializeCanonical() {
  this._canonical[this._numbers[this._countUserNumbers]] = {};
}

/**
 * @param {HTMLElement} logger - a place in HTML page where will
 * place the string
 */
renderPrimeExponentOnHTMLElement(logger) {
  const primeExponent = new PrimeExponentVisualizer(logger);
  const string = 
    primeExponent.getPrimeExponentString(this._canonical, 'degree');
    logger.innerHTML = string;
}

get degrees() {
  return this._data;
}

}
  