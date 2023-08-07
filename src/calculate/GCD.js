import { StringBuilder } from "../createElements/StringBuilder.js";
import { smoothInnerHTML } from "../createElements/smoothInnerHTML.js";

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
      if (
        Number.isInteger(+prime) &&
        data[prime]["count"] === data["userNumbers"].length
      ) {
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
   * Example: (100,12)&nbsp; 2<sup>2</sup> = 4
   */
  getString() {
    const stringBuilder = new StringBuilder();
    return stringBuilder.getAnswerString(this._data, "minDegree");
  }

  renderAnswerOnly(logger) {
    logger.innerHTML = this._data.answer;
  }
}
