import { PrimeExponentVisualizer } from "../createElements/PrimeExponentVisualizer.js"

export class LCM {
    /**
     * Constructor LCM class
     * @param  {Array} numbers - array with numbers for finding LCM,
     * @field {Number} this.lcm - result calculation lcm.
     */
    constructor(data) {
      this._data = Object.assign({}, data);
      this._lcm = 0;
      this._computeLCM(this._data);
    }
    /**
     * Return LCM;
     */
      getLCM() {
      if (!this._lcm) {
        return this._computeLCM(this._data);
      } else {
        return this._lcm; 
      }
    }
    /**
     * Colculates and return LCM of numbers.
     * @param {Object} - degrees 
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
    _computeLCM(data) {
      let result = 1;

      for (let [prime, degree] of Object.entries(data)) {
        if (Number.isInteger(+prime))
          result *= (+prime) ** degree.maxDegree;
      }
      
      this._lcm = result; 
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
    * To log the process of prime factorization on the HTML
    * Example: LCM (2,10)  2·5 = 10
    * @param {HTMLElement} logger is the place in HTML
    * where will place prime exponent;
    */
    renderDetailedAnswerOnHTMLElement(logger) {
        const primeExponent = new PrimeExponentVisualizer(logger);
        const string =  
           primeExponent.getAnswerString(this._data, 'maxDegree');
           logger.innerHTML = string;
       }
   
    renderAnswerOnly(logger) {
      logger.innerHTML = this._data.answer;
    }
  }


  
  
  
   


  