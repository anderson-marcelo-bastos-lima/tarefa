/**
 *
 **Export:
 * - The FormattedDate class.
 *
 * ? This guide gives you all you need to get started with JavaScript module syntax.
 * ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
 *
 */
export { FormattedDate };

/**
 *
 **class FormattedDate.
 *
 * Description: To construct the individual instance of a Date with methods to format.
 *
 * ? JavaScript Date objects represent a single moment in time in a platform-independent format.
 * ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 *
 * ? Classes are a template for creating objects. They encapsulate data with code to work on that data.
 * ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 *
 * @constructor(date = new Date())
 * @properties
 * - date = Date (object);
 * @getters
 * @setters
 * @methods
 * - shortDateFormat() : String;
 * Method description: Receives a date and turns it into "3 JUL 22" format.
 *
 * - longDateFormat() : String;
 * Method description: Receives a date and turns it into "3RD JUL 2022" format.
 *
 */
class FormattedDate {
    constructor(date = new Date()) {
        this.date = date;
    }

    shortDateFormat() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return this.date.getDate() + ' ' + months[this.date.getMonth()] + ' ' + this.date.getFullYear().toString().substr(-2);
    }

    longDateFormat() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const days = ['0', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];
        return days[this.date.getDate()] + ' ' + months[this.date.getMonth()] + ' ' + this.date.getFullYear();
    }

}
