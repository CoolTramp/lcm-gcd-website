/**
 * The StringBuilder class for creating string with degree of number
 */
export class StringBuilder {
    constructor() {
      this.string = '';
    }

  /**
  * Creats string with user number and thier
  * canonical factorization
  * @param {Object} data - constist of user number
  * and their canonical factorization
  * Example:
  * { '24': { '2': { degree: 3 }, '3': { degree: 1 } },
  *   '36': { '2': { degree: 2 }, '3': { degree: 2 } },
  *   '60': { '2': { degree: 2 }, '3': { degree: 1 }, '5': { degree: 1 } },
  *   '108': { '2': { degree: 3 }, '3': { degree: 2 } }
  * @returns {String} - The resulting string representing
  * 24= 2<sup>3</sup>·3&nbsp;&nbsp;&nbsp;
  * 36= 2<sup>2</sup>·3<sup>2</sup>&nbsp;&nbsp;&nbsp;
  * 60= 2<sup>2</sup>·3·5&nbsp;&nbsp;&nbsp;
  * 108= 2<sup>3</sup>·3<sup>2</sup>
  */
  getPrimeExponentString(data, degree) {
    let resultParts = [];

    for (let [userNumber, primes] of Object.entries(data)) {
        let firstString = 
          this._getStringWithUserNumber(userNumber);

        let primeFactorWithDegress = 
          this._addMultiplicationSignInString(this._primeFactorAndDegree(primes, degree));

        resultParts.push(
            this._concatinatStrings(firstString, primeFactorWithDegress));
      }

    return this._addSpaceInHTMLFormat(resultParts, 3);
  }
  
  /**
   * Creats styring with user number and the equal sing
   * @param {String} userNumber - user number
   * @return {String} - result of creating string
   * Example: "24= "
   */
  _getStringWithUserNumber(userNumber) {
      return `${userNumber}= `;
  }

  /**
   * Adds the multiplication sing beetwen primeParts
   * and then concatinates this with PrimeString
   * @param {String} primeString - string with user numbers
   * Example: (24,36,60,108)
   * @param {Array} primeParts - consists with prime number
   * and degree, if degree greater then 1
   * Example: [ '2<sup>2</sup>', '3', '5' ]
   * @returns {String} - сoncatenated string with multiplication sign.
   * Example: "(24,36,60,108)2<sup>2</sup>·3·5"
   */
  _addMultiplicationSignInString(primeParts) {
      return primeParts.join('·');
  }

  /**
   * To concatinates strings;
   * @param  {...any} strings - strings for contatination
   */
  _concatinatStrings(...strings) {
    return strings.join(' ');
  }

  /**
   * Creats string with prime number and thier degree
   * @param {Object} primes - each embeded object is
   * consist of canonical numbers numbers of user numbers
   * the key is prime number
   * the key degree is degree
   * { '2': { degree: 3 }, '3': { degree: 1 } }
   * { '2': { degree: 2 }, '3': { degree: 2 } }
   * { '2': { degre e: 2 }, '3': { degree: 1 }, '5': { degree: 1 } }
   * { '2': { degree: 3 }, '3': { degree: 2 } }
   * @return {Array} the result of creating strings 
   * Example: [ '2<sup>3</sup>', '3<sup>2</sup>' ]
  */
  _primeFactorAndDegree(data, degree) {
    let primeParts = [];
    for (let [primeNumber, degrees] of Object.entries(data)) {  
        if (Number.isInteger(+primeNumber)) {
            //if prime factor was in all user number
            if ((degrees.count === data['userNumbers']?.length
            || degree != 'minDegree')) {
                primeParts.push(
                    this._getStringWithDegrees(primeNumber, degrees[degree]));
            }
        }
    }
    return primeParts;
  }

  /**
   * Creates a string that shows the prime factors and their degrees
   * based on the given data. The string represents either the 
   * Least Common Divisor (LCD) or the Greatest Common Divisor (GCD).
   * Example:
   * For GCD, the string will be: (24,36,60,108)2<sup>3</sup>·3<sup>2</sup>
   * For LCD, the string will be: (24,36,60,108)2<sup>2</sup>·3·5
   * 
   * @param {Object} data - 
   * The prime factors and their maximum and minimum degrees from user numbers.
   * The minimum degree (minDegree) is used to compute LCM.
   * The maximum degree (maxDegree) and the count key are used to compute GCD.
   * The count key must be equal to the length of userNumbers in order to include the prime number in the string.
   * Example:
   * {
   *   '2': { count: 4, minDegree: 2, maxDegree: 3 },
   *   '3': { count: 4, minDegree: 1, maxDegree: 2 },
   *   '5': { count: 1, minDegree: 1, maxDegree: 1 },
   *   userNumbers: [24, 36, 60, 108]
   * }
   * @param {String} degree - The calculation mode.
   * Use "minDegree" to calculate LCM and "maxDegree" to calculate GCD.
   * @returns {String} -The resulting string representing
   * the prime factors and their degrees.
   * Example: (24,36,60,108)2<sup>3</sup>·3<sup>2</sup>
   */
  getAnswerString(data, degree) {
    let firstString = this._getFirstString(data['userNumbers']);

    let primeFactorWithDegree = 
      this._addMultiplicationSignInString(this._primeFactorAndDegree(data, degree));
    
    let computationAnswer =
      this._addAnswerToAnserString(data.answer);

    return this._concatinatStrings(firstString, primeFactorWithDegree, computationAnswer);
  }

  /**
  * Creats string with user numbers
  * @param {Array} userNumbers - array with all user numbers
  * Example: [24,36,60,108]
  * @returns {String} 
  * Example: "(24,36,60,108)"
  */
   _getFirstString(userNumbers) {
     return '(' + userNumbers.join(',') + ')' + this._getHTMLSpaceFormatString(1);
   }

  /**
   * Creates a string representation of a prime number with its degree,
   * if the degree is greater than 1.
   * @param {String} primeNumber - The prime number.
   * @param {Number} degree - The degree of the prime number.
   * @returns {String} - The formatted string representation.
   * Examples: createPrimeStringWithDegrees("2", 3) returns "2<sup>3</sup>".
   * createPrimeStringWithDegrees("2", 1) returns "2".
   */
  _getStringWithDegrees(primeNumber, degree) {
    let primePart = primeNumber;
    if (degree !== 1) {
      primePart += `<sup>${degree}</sup>`;
    }
    return primePart;
  }

  /**
   * Add the result of computation LCM or GCD to the answer string.
   * @param {String} string - thie string with all user numbers,
   * prime factors and thier degree 
   * Example: (24,36,60,108)&nbsp;&nbsp;2<sup>3</sup>·3<sup>3</sup>·5
   * @param {String} answer - result of computation GCD or LCM
   * Exmaple: 360;
   * @returns {String} - result of creating string
   * Example: "= 360"
   */ 
  _addAnswerToAnserString(answer) {
    return `= ${answer}`;
  }
    /**
   * Add the space in html format ( &nbsp; ) beetween stirngs
   * @param {Array} resultParts - consist of strings
   * Example:
   * [ '24= 2<sup>3</sup>·3',
   *   '36= 2<sup>2</sup>·3<sup>2</sup>',
   *   '60= 2<sup>2</sup>·3·5',
   *   '108= 2<sup>3</sup>·3<sup>2</sup>']
   * @param {Integer} - the count of spaces
   * @returns {String} - The resulting string representing
   * "24= 2<sup>3</sup>·3&nbsp;&nbsp;&nbsp;
   *  36= 2<sup>2</sup>·3<sup>2</sup>&nbsp;&nbsp;&nbsp;
   *  60= 2<sup>2</sup>·3·5&nbsp;&nbsp;&nbsp;
   *  108= 2<sup>3</sup>·3<sup>2</sup>""
   */
    _addSpaceInHTMLFormat(resultParts, count) {
      return resultParts.join(this._getHTMLSpaceFormatString(count));
    }

    /**
     * Creats string with spaces in HTML format ( &nbsp; )
     * @param {Integer} count - the count of spaces
     * Example: 3
     * @return {String} - the result of created string
     * Example: &nbsp;&nbsp;&nbsp;
     */
    _getHTMLSpaceFormatString(count) {
      return '&nbsp;'.repeat(count);
    }
}
