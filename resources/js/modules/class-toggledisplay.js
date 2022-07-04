/**
 *
 **Export:
 * - The ToggleDisplay class.
 *
 * ? This guide gives you all you need to get started with JavaScript module syntax.
 * ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
 *
 */
export { ToggleDisplay };

/**
 *
 **class ToggleDisplay.
 *
 * Description: To construct the individual instance of DOM elements with methods to switch the property display.
 *
 * ? When writing web pages and apps, one of the most common things you'll want to do is manipulate the document structure in some way.
 * ? This is usually done by using the Document Object Model (DOM), a set of APIs for controlling HTML and
 * ? styling information that makes heavy use of the Document object.
 * ? https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
 *
 * ? Classes are a template for creating objects. They encapsulate data with code to work on that data.
 * ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 *
 * @constructor()
 * @properties
 * @getters
 * @setters
 * @methods
 * - togglebyElementId(elementId1, elementId2) : void;
 * Method description: Receives two DOM element ids id1 and id2.
 *  If id1 is "none" change it to "block" and id2 to "none".
 *  Or if d1 is "block" change it to "none" and id2 to "block".
 *
 */
class ToggleDisplay {
    constructor() { }

    togglebyElementId(elementId1, elementId2) {
        const element1 = document.getElementById(elementId1);
        const element2 = document.getElementById(elementId2);
        if (element1.style.display === 'none' || element1.style.display === '') {
            element1.style.display = 'block';
            element2.style.display = 'none';
        } else {
            element1.style.display = 'none';
            element2.style.display = 'block';
        }
        return;
    }

}
