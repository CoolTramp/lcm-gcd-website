import { smoothInnerHTML } from "./smoothInnerHTML";
const tableWithFactorization = document.getElementById(
  "table-with-factorization"
);
/**
 * The HTMLTableCreator class
 * Creats HTML table with process prive factorisation
 * on the web page
 */
export class HTMLTableCreator {
  /**
   * Constructor The DivisionProcessLogger class
   * @param {HTMLElement} logger, the place in HTML
   * where will place the process of prime factorization.
   */
  constructor(logger) {
    this._logger = logger;
  }
  /**
   * log HTML table on HTMLElement logger
   */
  logTable(strings) {
    this._logger.innerHTML = this._creatTableForLog(strings);
    // smoothInnerHTML(this._logger, this._creatTableForLog(strings), 10);
  }
  /**
   * Creats HTML table.
   * @param {Array} strings - prime factorization process
   */
  _creatTableForLog(strings) {
    this._isArray(strings);
    let stringForLog = `<table id='table-with-factorization'>
                            <tr>`;
    strings.forEach((str) => {
      stringForLog += `   <th>
                                ${str}
                              </th> `;
    });
    stringForLog += `     </tr>
                          </table>`;
    return stringForLog;
  }
  /**
   * For checking Array
   * @param {Any} value for cheching
   * @returns {Bollean} true if value is array
   * that contains formatted strings;
   */
  _isArray(value) {
    if (!Array.isArray(value) || value.length === 0) {
      throw new Error("value must be an array with history of dividing");
    }
    return true;
  }
}
