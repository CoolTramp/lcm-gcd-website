import { StringBuilder } from "../createElements/StringBuilder.js";
import { smoothInnerHTML } from "../createElements/smoothInnerHTML.js";

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
      if (Number.isInteger(+prime)) result *= (+prime) ** degree.maxDegree;
    }

    this._lcm = result;
    this._recordLCMinData(result);
    return result;
  }
  /**
   * Adds result of calculation LCM in data
   */
  _recordLCMinData(lcm) {
    this._data["answer"] = lcm;
  }

  /**
   * Gets and renders string on wep page.
   * @param {HTMLElement} logger - a place in HTML page
   * where will place the string
   */
  renderDetailedAnswerOnHTMLElement(logger) {
    smoothInnerHTML(logger, this.getString(), 5);
    // logger.innerHTML = this.getString();
  }

  /**
   * Gets a string for rendering, containing the prime factorization of the number with exponent degrees.
   * @returns {String} - the rendering string with the prime factorization of the number.
   * Example: (100,12)&nbsp; 2<sup>2</sup>·3·5<sup>2</sup> = 300
   */
  getString() {
    const stringBuilder = new StringBuilder();
    return stringBuilder.getAnswerString(this._data, "maxDegree");
  }

  renderAnswerOnly(logger) {
    logger.innerHTML = this._data.answer;
  }
}
