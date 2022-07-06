/**
 *
 **Export:
 * - The VerifyValue class.
 *
 * ? This guide gives you all you need to get started with JavaScript module syntax.
 * ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
 *
 */
export { VerifyValue };

/**
 *
 **class VerifyValue.
 *
 * Description: To construct the individual instance of a validator(VerifyValue) with methods to verify data.
 *
 * ? JavaScript Date objects represent a single moment in time in a platform-independent format.
 * ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 *
 * ? Classes are a template for creating objects. They encapsulate data with code to work on that data.
 * ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 *
 * @constructor()
 * @properties
 * @getters
 * @setters
 * @methods
 * - verifyStringbyElement(element, size) : String;
 * Method description: Receives a DOM element and a size of the type number and checks if its value is empty
 *  and less than "size" characters long, returning a message.
 *
 * - verifyDatebyElement(element) : String;
 * Method description: Receives a DOM element value of the type date and checks if its value is empty
 *  and less than current date, returning a message.
 *
 *
 */
class VerifyValue {

    constructor() { }

    verifyStringbyElement(element, size) {
        let message = '';
        if (element.value === '') {
            message += 'The field must not be empty. \n';
        }
        if (element.value !== '' && element.value.length < size) {
            message += 'The field must be longer than ' + size + ' characters. \n';
        }
        return message;
    }

    verifyDatebyElement(element) {
        const elementValue = Date.parse(element.value);
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);
        let message = '';
        if (isNaN(elementValue)) {
            message += 'Please select a date. \n';
        }
        if (!isNaN(elementValue) && elementValue < yesterday.getTime()) {
            message += 'The date must not be less than the current date. \n';
        }
        return message;
    }

}
