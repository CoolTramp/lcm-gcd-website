import { PrimeExponentVisualizer } from "../createElements/PrimeExponentVisualizer.js"

export class GCD {
  /**
  * Constructor LCM class
  * @param  {Array} numbers - array with numbers for finding LCM,
  * @field {Number} this.lcm - result calculation lcm.
  */
  constructor(data) {
    this._data = Object.assign({}, data);
    this._gcd = 1;
    this._computeGCD(this._data);
  }
  /**
  * Return GCD;
  */
  getGCD() {
    if (!this._gcd) {
      return this._computeGCD(this._data);
    } else {
      return this.gcd; 
    }
  }  
  /**
   * Colculates and return GCD of numbers.
   * @param {Array} degreesOfNumbers - double array which contains
   * arrays that has first index a number and second index degree
   * Example: [ [2, 1], [3, 2], [2, 3], [5, 1], [3, 2], [5, 1] ];
    *
  */
  _computeGCD(data) {
    let result = 1;
    for (let [prime, degree] of Object.entries(data)) {
      if ( Number.isInteger(+prime) 
           && data[prime]['count'] === data['userNumbers'].length) {
        result *= (+prime) ** degree.minDegree;
      }
    }
    this._gcd = result;
    this._recordLCMinData(result);
    return result;
  }
  /**
  * Adds result of calculation LCM in data
  */
    _recordLCMinData(lcm) {
     this._data['answer'] = lcm;
   }
   /**
   * To log the detailid process of prime factorization on the HTML
   * Example; GCD (10,2)  2 = 2
   * @param {HTMLElement} logger is the place in HTML
   * where will place prime exponent;
   */
   renderDetailedAnswerOnHTMLElement(logger) {
     const primeExponent = new PrimeExponentVisualizer(logger);
     const string =  
        primeExponent.getAnswerString(this._data, 'minDegree');
        logger.innerHTML = string;
   }

  renderAnswerOnly(logger) {
    logger.innerHTML = this._data.answer;
  }
  }
  