/**
 *
 **Import:
 * - The FormattedDate class from the file class-formatteddate.js.
 **Export:
 * - The DisplayDate class.
 *
 * ? This guide gives you all you need to get started with JavaScript module syntax.
 * ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
 *
 */
import { FormattedDate } from './class-formatteddate.js';
export { DisplayDate };

/**
 *
 **class DisplayDate extends FormattedDate.
 *
 * Description: To construct the individual instance of Date with methods to format it and show it in a DOM element.
 *
 * ? When writing web pages and apps, one of the most common things you'll want to do is manipulate the document structure in some way.
 * ? This is usually done by using the Document Object Model (DOM), a set of APIs for controlling HTML and
 * ? styling information that makes heavy use of the Document object.
 * ? https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
 *
 * ? Classes are a template for creating objects. They encapsulate data with code to work on that data.
 * ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 *
 * @constructor(date = new Date())
 * @properties
 **Inheritance: date = Date (object);
 * @getters
 * @setters
 * @methods
 **Inheritance: shortDateFormat() : String;
 **Inheritance: longDateFormat() : String;
 * - showShortDateByElementId(elementId) : void;
 * Method description: Receives the DOM element and puts (innerHTML) the date in "3 JUL 22" format.
 *
 * - showLongDateByElementId(elementId) : void;
 * Method description: Receives the DOM element and puts (innerHTML) the date in "3RD JUL 2022" format.
 *
 */
class DisplayDate extends FormattedDate {
    constructor(date = new Date()) {
        super(date);
    }

    showShortDateByElementId(elementId) {
        const element = document.getElementById(elementId);
        element.innerText = this.shortDateFormat(this.date);
        return;
    }

    showLongDateByElementId(elementId) {
        const element = document.getElementById(elementId);
        element.innerText = this.longDateFormat(this.date);
        return;
    }

}
