/**
 *
 **Import:
 * - The Session class from the file class-session.js.
 **Export:
 * - The appSession an instance of the Session class.
 *
 * ? This guide gives you all you need to get started with JavaScript module syntax.
 * ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
 *
 */
import { Session } from './modules/class-session.js';
export { appSession };


/**
 *
 * Description: Create an instance of the Session class.
 *
 * ? Classes are a template for creating objects. They encapsulate data with code to work on that data.
 * ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 *
 */
const appSession = new Session();


/**
 *
 * Description: Call the Session.initialize() to start the internal structure of the application.
 *
 * ? Starting with ECMAScript 2015, a shorter syntax for method definitions on objects initializers is introduced.
 * ? It is a shorthand for a function assigned to the method's name.
 * ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
 *
 */
 appSession.initialize();



/**
 *
 * ! Comment out this function before delivery in the project.
 *
 ** function fillFields()
 *
 * Description: The fuction fill the fields: Name, Description, Assigned To and Due Date.
 *
 */
/*
document.addEventListener('DOMContentLoaded', function fillFields() {

    // 1.) Get the fields elements.
    const nameField = document.getElementById('name-field-id');
    const descriptionField = document.getElementById('description-field-id');
    const assignedtoField = document.getElementById('assignedto-field-id');
    const duedateField = document.getElementById('duedate-field-id');

    // 2.) Fill the fields elements.
    nameField.value = 'Plan the project.';
    descriptionField.innerText = 'Developing a detailed project plan, defining the scope of the project and assigning team members to specific tasks.';
    assignedtoField.value = 'Anderson Lima.';
    duedateField.value = '2022-07-04';


});
*/