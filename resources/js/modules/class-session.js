/**
 *
 **Import:
 * - The TaskManager class from the file class-taskmanager.js.
 * - The TaskForm class from the file class-taskform.js.
 * - The DisplayDate class from the file class-displaydate.js.
 * - The ToggleDisplay class from the file class-toggledisplay.js.
 * - The appSession an instance of the Session class from the file main.js.
 **Export:
 * - The Session class.
 *
 * ? This guide gives you all you need to get started with JavaScript module syntax.
 * ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
 *
 */
import { TaskManager } from './class-taskmanager.js';
import { TaskForm } from './class-taskform.js';
import { DisplayDate } from './class-displaydate.js';
import { ToggleDisplay } from './class-toggledisplay.js';
import { appSession } from '../main.js';
export { Session };

/**
 *
 **class Session.
 *
 * Description: To construct the individual instance of the application(class Session) with properties and methods to initialize the internal structure.
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
 * @constructor(taskManager = new TaskManager())
 * @properties
 * - taskManager = TaskManager (object);
 * @getters
 * @setters
 * @methods
 * - displayDate() : void;
 * Method description: Display today's date in a friendly format on the page.
 *
 * - loadDataBase() : void;
 * Method description: Read the data stored in localStorage and update the application.
 *
 * - toggleDisplay() : void;
 * Method description: Adds an interaction to expand and collapse the Add Task form.
 *
 * - verifyUserInputAddTask(event) : void;
 * Method description: Capture user input, verify the data and add a task.
 *
 * - deleteTask(element) : void;
 * Method description: Receives the DOM element and deletes the task.
 *
 * - updateTask(element) : void;
 * Method description: Receives the DOM element and updates the task.
 *
 * - initialize() : void;
 * Method description: Initialize the internal structure of the application.
 *
 */
class Session {
    constructor(taskManager = new TaskManager()) {
        this.taskManager = taskManager;
    }

    displayDate() {
        const spanOnVerticalOrientation = new DisplayDate();
        spanOnVerticalOrientation.showShortDateByElementId('span-vertical-id');
        const spanOnHorizontalOrientation = new DisplayDate();
        spanOnHorizontalOrientation.showLongDateByElementId('span-horizontal-id');
        return;
    }

    loadDataBase() {
        let maxId = 0;
        let arrayOfTasks = [];
        for (let i = 0; i < localStorage.length; i++) {
            arrayOfTasks.push(localStorage.getItem(localStorage.key(i)));
            if (Number(localStorage.key(i)) > maxId) {
                maxId = Number(localStorage.key(i));
            }
        }
        this.taskManager.loadTasks(arrayOfTasks);
        this.taskManager.id = maxId;
        return;
    }

    toggleDisplay() {
        const formExpandedCollapsed = new ToggleDisplay();
        formExpandedCollapsed.togglebyElementId('add-task-form-id', 'collapsed-form-id');
        return;
    }

    verifyUserInputAddTask(event) {
        const nameField = document.getElementById('name-field-id');
        const descriptionField = document.getElementById('description-field-id');
        const assignedToField = document.getElementById('assignedto-field-id');
        const dueDateField = document.getElementById('duedate-field-id');
        const statusField = document.getElementById('status-field-id');
        const nameMessage = document.getElementById('name-field-message');
        const descriptionMessage = document.getElementById('description-field-message');
        const assignedToMessage = document.getElementById('assignedto-field-message');
        const dueDateMessage = document.getElementById('duedate-field-message');
        const formAddTask = new TaskForm(nameField, descriptionField, assignedToField, dueDateField, statusField, nameMessage, descriptionMessage, assignedToMessage, dueDateMessage);
        const verifyMessage = formAddTask.verifyFormInputData(event);
        if (verifyMessage === '') {
            appSession.taskManager.addTask(nameField.value, descriptionField.value, assignedToField.value, dueDateField.value, statusField.value);
            nameField.value = '';
            descriptionField.value = '';
            assignedToField.value = '';
            dueDateField.value = '';
        }
        return;
    }

    deleteTask(element) {
        // Get the right Task.
        const containerDiv = element.parentElement;
        const hiddenElement = containerDiv.getElementsByTagName('input');
        let taskId = hiddenElement.item(0).value;

        // Update the array of tasks and the database.
        appSession.taskManager.deleteTask(taskId);

        // Update the page.
        containerDiv.parentElement.remove();

        // Every method must have the return line.
        return;
    }

    updateTask(element) {
        // Get the right Task.
        const containerDiv = element.parentElement;
        const hiddenElement = containerDiv.getElementsByTagName('input');
        let taskId = hiddenElement.item(0).value;

        // Update the array of tasks and the database.
        appSession.taskManager.updateToDone(taskId);

        // Update the page.
        const arrayOfP = containerDiv.parentElement.getElementsByTagName('p');
        arrayOfP.item(3).innerHTML = 'Done';
        element.remove();

        // Every method must have the return line.
        return;
    }

    initialize() {

        /**
        *
        **Step 1: Show the date on the page.
        *
        * Description: Sets up Session.displayDate() that will be called whenever the "DOMContentLoaded" event is delivered.
        *
        */
        document.addEventListener('DOMContentLoaded', this.displayDate, false);

        /**
         *
         **Step 2: Load the tasks stored in the localStore.
         *
         * Description: Call the loadDataBase() method of the Session class.
         *
         */
        this.loadDataBase();

        /**
        *
        **Step 3: Enable expand and collapse the form by clicking the green arrow button.
        *
        * Description: Sets up Session.toggleDisplay() that will be called whenever the event of the DOM element is delivered.
        *
        */
        document.getElementById('form-expanded-toggle-id').addEventListener('click', this.toggleDisplay, false);
        document.getElementById('form-collapsed-toggle-id').addEventListener('click', this.toggleDisplay, false);


        /**
         *
         **Step 4: Enables adding a task by clicking the "Add task" button.
         *
         * Description: Sets up Session.addTask(event) that will be called whenever the "submit" event of the DOM element is delivered.
         *
         * ?The addEventListener() method of the EventTarget interface sets up a function
         * ? that will be called whenever the specified event is delivered to the target.
         *
         */
        document.querySelector('#add-task-form-id').addEventListener('submit', this.verifyUserInputAddTask, false);


        return;

    }

}
