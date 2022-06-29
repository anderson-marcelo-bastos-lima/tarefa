/**
* 1. Validade the fields of the Add Task form on the submit event.
*/
document.querySelector('#add-task-form-id').addEventListener('submit', function validateTaskForm(event) {


    // To display the message.
    const errorMessageDiv = document.getElementById('error-message');

    // To validate the Task Name field .
    const taskName = document.getElementById('name-field-id');
    // To validate the Task Description field .
    const taskDescription = document.getElementById('description-field-id');
    // To validate the Assigned To field.
    const taskAssignedTo = document.getElementById('assignedto-field-id');
    // To validate the Due Date field.
    const todayDate = new Date();
    let taskDueDate = Date.parse(document.getElementById('duedate-field-id').value);
    const yesterdayDate = new Date(todayDate.getTime());
    yesterdayDate.setDate(todayDate.getDate() - 1);

    // All errors concatenate in this string.
    let errorMessage = '';

    // Task Name field: Not Empty and longer than 8 characters.
    if (taskName.value === '') {
        errorMessage += 'The Task Name field must not be empty. \n';
    }
    if (taskName.value !== '' && taskName.value.length < 9) {
        errorMessage += 'The Task Name field must be longer than eight characters. \n';
    }
    // Task Description field: Not Empty and longer than 15 characters.
    if (taskDescription.value === '') {
        errorMessage += 'The Task Description field must not be empty. \n';
    }
    if (taskDescription.value !== '' && taskDescription.value.length < 15) {
        errorMessage += 'The Task Description field must be longer than fifteen characters. \n';
    }
    // Assigned To field: Not Empty and longer than 8 characters.
    if (taskAssignedTo.value === '') {
        errorMessage += 'The Assigned To field must not be empty. \n';
    }
    if (taskAssignedTo.value !== '' && taskAssignedTo.value.length < 8) {
        errorMessage += 'The Assigned To field must be longer than eight characters. \n';
    }
    // Due Date field: Not Empty and not less than current date.
    if (isNaN(taskDueDate)) {
        errorMessage += 'The Due Date field cannot be empty. \n';
    }
    if (!isNaN(taskDueDate) && taskDueDate < yesterdayDate.getTime()) {
        errorMessage += 'The Due Date field must not be less than the current date. \n';
    }

    // If there are errors show the message if not redirect to the login page.
    if (errorMessage !== "") {
        // The div element with the id = errorMessageDiv receive the error message.
        errorMessageDiv.innerText = errorMessage;
        // Prevent the form button from submitting.
        event.preventDefault();
    } else {
        // The div element with the id = errorMessageDiv receive the success message.
        errorMessage += 'All fields are validated and filled in correctly. \n';
        errorMessageDiv.innerText = errorMessage;
        // Prevent the form button from submitting.
        event.preventDefault();
    }

}, false);




/**
 * 2. A Date object is created as soon as the page loads at the currenttime.
 * So, after the DOM  content is loaded, show the today date in a user-friendly format of the day, month, and year.
 */
document.addEventListener('DOMContentLoaded', function () {

    // To display the message.
    const errorMessageSpan = document.getElementById('topright');

    // Get the current date or today date.
    const todayDate = new Date();

    // Create a array with the months of the year
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Get the abreviation of the month instead of the number/index of the month.
    let month = months[todayDate.getMonth()];

    // The div element with the id = errorMessageDiv receive the date.
    errorMessageSpan.innerText = todayDate.getDate() + ' ' + month + ' ' + todayDate.getFullYear().toString().substr(-2);

});