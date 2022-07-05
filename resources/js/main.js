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