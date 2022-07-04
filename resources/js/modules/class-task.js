/**
 *
 **Export:
 * - The Task class.
 *
 * ? This guide gives you all you need to get started with JavaScript module syntax.
 * ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
 *
 */
export {Task};

/**
 *
 **class Task.
 *
 * Description: To construct the individual instance of a task.
 *
 * ? Classes are a template for creating objects. They encapsulate data with code to work on that data.
 * ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 *
 * @constructor(id, name, description, assignedto, duedate, status)
 * @properties
 * - id = String;
 * - name = String;
 * - description = String;
 * - assignedto = String;
 * - duedate = Date (object);
 * - status = String;
 * @getters
 * @setters
 * @methods
 *
 */
class Task {
    constructor(id, name, description, assignedto, duedate, status) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.assignedto = assignedto;
        this.duedate = duedate;
        this.status = status;
    }
}
