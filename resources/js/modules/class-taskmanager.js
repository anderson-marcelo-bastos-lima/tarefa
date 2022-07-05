/**
 *
 **Import:
 * - The Task class from the file class-task.js.
 * - The FormattedDate class from the file class-formatteddate.js.
 * - The appSession an instance of the Session class from the file main.js.
 **Export:
 * - The TaskManager class.
 *
 * ? This guide gives you all you need to get started with JavaScript module syntax.
 * ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
 *
 */
import { Task } from './class-task.js';
import { FormattedDate } from './class-formatteddate.js';
import { appSession } from '../main.js';
export { TaskManager };

/**
 *
 **class TaskManager
 *
 * Description: To construct an individual instance of a collection of tasks(array).
 *
 * ? The Array object, as with arrays in other programming languages, enables storing a collection of multiple items
 * ? under a single variable name, and has members for performing common array operations.
 * ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 *
 * ? When writing web pages and apps, one of the most common things you'll want to do is manipulate the document structure in some way.
 * ? This is usually done by using the Document Object Model (DOM), a set of APIs for controlling HTML and
 * ? styling information that makes heavy use of the Document object.
 * ? https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
 *
 * ? Classes are a template for creating objects. They encapsulate data with code to work on that data.
 * ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 *
 * @constructor(id = 0)
 * @properties
 * - id: Number;
 * - tasks: Array (object);
 * @getters
 * @setters
 * @methods
 * - addTask(name, description, assignedto, duedate, status) : Task (object);
 * Method description: Receives the user input already validated, generate a unique ID, create a instance of Task(Object),
 *  push it to the TaskManager.tasks property of the type Array(Object), store it on the localStore feature
 *  and than call the TaskManager.render(this.tasks) method to show the TaskManager.tasks on the page.
 *
 * - deleteTask(id) : String;
 * Method description: Receives the id of the task and remove it from the TaskManager.tasks property of the type Array(Object)
 *
 * - getAllTasks() : String;
 * Method description: Call the TaskManager.render(this.tasks) method to show the TaskManager.tasks on the page.
 *
 * - getTasksWithStatus(status) : String;
 * Method description: Receives the status (String), loop the TaskManager.tasks property of the type Array(Object)
 *  and the objects with Task.status = status push into a new Array (Object) and than call the TaskManager.render(new Array) method
 *  to show the filtered Array of tasks on the page.
 *
 * - render(arrayOfObjects) : String;
 * Method description: Receives an Array of objects with objects of the type Task class,
 *  loop the array to generate the HTML for each object of the type Task class and then insert it (innerHTML) on the page.
 *
 */
class TaskManager {
    constructor(id = 0) {
        this.id = id;
        this.tasks = []
    }

    addTask(name, description, assignedto, duedate, status) {
        console.log('before id= ' + this.id);
        this.id++;
        console.log('after id= ' + this.id);
        const task = new Task(this.id, name, description, assignedto, duedate, status);
        this.tasks.push(task);
        this.render(this.tasks);
        localStorage.setItem(this.id, JSON.stringify(task));
        return task;
    }

    loadTasks(arrayOfTasks) {
        for (let i = 0; i < arrayOfTasks.length; i++) {
            const obj = JSON.parse(arrayOfTasks[i]);
            const task = new Task(obj.id, obj.name, obj.description, obj.assignedto, obj.duedate, obj.status);
            this.tasks.push(task);
        }
        return this.render(this.tasks);
    }

    deleteTask(id) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id == id) {
                console.log('array.id= ' + this.tasks[i].id);
                this.tasks.splice(i, 1);
                break;
            }
        }
        for (let m = 0; m < localStorage.length; m++) {
            console.log('before Remove key= ' + localStorage.key(m));
            console.log('before Remove Item= ' + localStorage.getItem(localStorage.key(m)));
            if (localStorage.key(m) === id) {
                console.log('I am here.');
                localStorage.removeItem(localStorage.key(m));
                break;
            }
        }
        return;
    }

    updateToDone(id) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id == id) {
                this.tasks[i].status = 'Done';
                break;
            }
        }
        for (let m = 0; m < localStorage.length; m++) {
            if (localStorage.getItem(localStorage.key(m)).toString === id.toString) {
                let obj = JSON.parse(localStorage.getItem(localStorage.key(m)));
                obj.status = 'Done';
                localStorage.setItem(id, JSON.stringify(obj));
                break;
            }
        }
        return;
    }

    getAllTasks() {
        return this.render(this.tasks);
    }

    getTasksWithStatus(status) {
        let filteredArray = [];
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].status === status) {
                filteredArray.push(this.tasks[i]);
            }
        }
        return this.render(filteredArray);
    }

    render(arrayOfObjects) {

        const divListTaskSection = document.getElementById('list-task-section-id');
        divListTaskSection.innerHTML = '';


        let printHTML = '';
        for (let i = 0; i < arrayOfObjects.length; i++) {
            printHTML += '<div class="task">';
            printHTML += '<div class="task-fields-layer">';
            printHTML += '    <div class="task-column-left">';
            printHTML += '        <p class="task-field-label">Id:<span class="task-field-value">' + arrayOfObjects[i].id + '</span> Name: </p>';
            printHTML += '        <p class="task-field-value">' + arrayOfObjects[i].name + '</p>';
            printHTML += '    </div>';
            printHTML += '    <div class="task-column-right">';
            printHTML += '        <p class="task-field-label">Status:</p>';
            printHTML += '        <p class="task-field-value">' + arrayOfObjects[i].status + '</p>';
            printHTML += '    </div>';
            printHTML += '</div>';
            printHTML += '<div class="task-fields-layer">';
            printHTML += '    <div class="task-column-left">';
            printHTML += '        <p class="task-field-label">AssignedTo:</p>';
            printHTML += '        <p class="task-field-value">' + arrayOfObjects[i].assignedto + '</p>';
            printHTML += '    </div>';
            printHTML += '    <div class="task-column-right">';
            printHTML += '        <p class="task-field-label">DueDate:</p>';
            const formattedDateObj = new FormattedDate;
            printHTML += '        <p class="task-field-value">' + formattedDateObj.shortDateFormat(arrayOfObjects[i].duedate) + '</p>';
            printHTML += '    </div>';
            printHTML += '</div>';
            printHTML += '<p class="task-field-label">Description:</p>';
            printHTML += '<p class="task-field-value">' + arrayOfObjects[i].description + '</p>';
            printHTML += '<div class="task-button-container">';
            printHTML += '    <input type="hidden" id="hidden-delete-id' + arrayOfObjects[i].id + ' name="hidden-field-id" value="' + arrayOfObjects[i].id + '"></input>';
            if (arrayOfObjects[i].status !== 'Done') {
                printHTML += '    <button class="btn-done" type="button" id="btn-done-id' + arrayOfObjects[i].id + '">MARK AS DONE</button>';
            }
            printHTML += '    <button class="btn-delete" type="button" id="btn-delete-id' + arrayOfObjects[i].id + '">DELETE</button>';
            printHTML += '</div>';
            printHTML += '</div>';
        }
        divListTaskSection.innerHTML = printHTML;

        const classBtnDelete = document.getElementsByClassName('btn-delete');
        for (let y = 0; y < classBtnDelete.length; y++) {
            classBtnDelete[y].onclick = function () { appSession.deleteTask(classBtnDelete[y]) };
        }

        const classBtnDone = document.getElementsByClassName('btn-done');
        for (let y = 0; y < classBtnDone.length; y++) {
            classBtnDone[y].onclick = function () { appSession.updateTask(classBtnDone[y]) };
        }


        return printHTML;
    } // render
} // class