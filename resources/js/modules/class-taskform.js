/**
 *
 **Import:
 * - The VerifyValue class from the file class-verifyvalue.js.
 **Export:
 * - The TaskForm class.
 *
 * ? This guide gives you all you need to get started with JavaScript module syntax.
 * ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
 *
 */
import { VerifyValue } from './class-verifyvalue.js';
export { TaskForm };

/**
 *
 **class TaskForm extends VerifyValue.
 *
 * Description: To construct the individual instance of TaskForm with properties and methods to verify user input.
 *
 * ? When writing web pages and apps, one of the most common things you'll want to do is manipulate the document structure in some way.
 * ? This is usually done by using the Document Object Model (DOM), a set of APIs for controlling HTML and
 * ? styling information that makes heavy use of the Document object.
 * ? https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
 *
 * ? Events are actions or occurrences that happen in the system you are programming,
 * ? which the system tells you about so your code can react to them.
 * ? https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
 *
 * ? Classes are a template for creating objects. They encapsulate data with code to work on that data.
 * ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 *
 * @constructor(nameField, descriptionField, assignedToField, dueDateField, statusField, nameMessage, descriptionMessage, assignedToMessage, dueDateMessage)
 * @properties
 * - nameField = String;
 * - descriptionField = String;
 * - assignedToField = String;
 * - dueDateField = Date (object);
 * - statusField = String;
 * - nameMessage = String;
 * - descriptionMessage = String;
 * - assignedToMessage = String;
 * - dueDateMessage = String;
 * @getters
 * @setters
 * @methods
 **Inheritance: verifyShortStringbyElement(element) : String;
 * Method description: Receives a DOM element value of the type string and checks if its value is empty
 *  and less than 9 characters long, returning a message.
 *
 **Inheritance: verifyLongStringbyElement(element) : String;
 * Method description: Receives a DOM element value of the type string and checks if its value is empty
 *  and less than 16 characters long, returning a message.
 *
 **Inheritance: verifyDatebyElement(element) : String;
 * Method description: Receives a DOM element value of the type date and checks if its value is empty
 *  and less than current date, returning a message.
 *
 * - verifyFormInputData(event) : String;
 * Method description: Receives a event (Event interface) and verify the user input on the fields
 *  name, description, assigned to and due date one per time then return a message.
 *
 */
class TaskForm extends VerifyValue {
    constructor(nameField, descriptionField, assignedToField, dueDateField, statusField, nameMessage, descriptionMessage, assignedToMessage, dueDateMessage) {
        super();
        this.nameField = nameField;
        this.descriptionField = descriptionField;
        this.assignedToField = assignedToField;
        this.dueDateField = dueDateField;
        this.statusField = statusField;
        this.nameMessage = nameMessage;
        this.descriptionMessage = descriptionMessage;
        this.assignedToMessage = assignedToMessage;
        this.dueDateMessage = dueDateMessage;
    }

    verifyFormInputData(event) {

        let message = '';

        message += this.verifyShortStringbyElement(this.nameField);
        if (message !== '') {
            this.nameMessage.innerText = message;
            this.nameField.focus();
            event.preventDefault();
            return message;
        } else {
            this.nameMessage.innerText = '';
            event.preventDefault();
        }
        message += this.verifyLongStringbyElement(this.descriptionField);
        if (message !== '') {
            this.descriptionMessage.innerText = message;
            this.descriptionField.focus();
            event.preventDefault();
            return message;
        } else {
            this.descriptionMessage.innerText = '';
            event.preventDefault();
        }
        message += this.verifyShortStringbyElement(this.assignedToField);
        if (message !== '') {
            this.assignedToMessage.innerText = message;
            this.assignedToField.focus();
            event.preventDefault();
            return message;
        } else {
            this.assignedToMessage.innerText = '';
            event.preventDefault();
        }
        message += this.verifyDatebyElement(this.dueDateField);
        if (message !== '') {
            this.dueDateMessage.innerText = message;
            this.dueDateField.focus();
            event.preventDefault();
            return message;
        } else {
            this.dueDateMessage.innerText = '';
            event.preventDefault();
            return message;
        }
    }

}
