// Define a class for a task
class Task {
  constructor(name, desc, date) {
    this.name = name;
    this.desc = desc;
    this.date = date;
    this.completed = false;
  }
}

// Define an array to store tasks
let tasks = [];

// Get form and table elements
const form = document.querySelector('form');
const table = document.querySelector('table tbody');

// Add event listener to form submit
form.addEventListener('submit', event => {
  event.preventDefault();
  const name = form.elements['task-name'].value;
  const desc = form.elements['task-desc'].value;
  const date = form.elements['task-date'].value;
  const task = new Task(name, desc, date);
  tasks.push(task);
  addTaskToTable(task);
  form.reset();
});

// Function to add task to table
function addTaskToTable(task) {
  const row = document.createElement('tr');
  row.innerHTML = `
      <td>${task.name}</td>
      <td>${task.desc}</td>
      <td>${task.date}</td>
      <td class="actions">
        <button class="complete" data-index="${tasks.indexOf(
          task
        )}">Complete</button>
        <button class="edit" data-index="${tasks.indexOf(task)}">Edit</button>
        <button class="delete" data-index="${tasks.indexOf(
          task
        )}">Delete</button>
      </td>
    `;
  table.appendChild(row);
}

// Add event listener to table for complete, edit, and delete buttons
table.addEventListener('click', event => {
  const button = event.target;
  const index = button.dataset.index;
  switch (true) {
    case button.classList.contains('complete'):
      tasks[index].completed = true;
      button.disabled = true;
      button.textContent = 'Completed';
      button.classList.remove('complete');
      break;
    case button.classList.contains('edit'):
      try {
        const task = tasks[index];
        form.elements['task-name'].value = task.name;
        form.elements['task-desc'].value = task.desc;
        form.elements['task-date'].value = task.date;
        tasks.splice(index, 1);
        table.removeChild(button.closest('tr'));
      } catch (error) {
        console.error(error);
      } finally {
        console.log('Edit button clicked');
      }
      break;
    case button.classList.contains('delete'):
      try {
        tasks.splice(index, 1);
        table.removeChild(button.closest('tr'));
      } catch (error) {
        console.error(error);
      } finally {
        console.log('Delete button clicked');
      }
      break;
    default:
      console.log('Unknown button clicked');
  }
});
