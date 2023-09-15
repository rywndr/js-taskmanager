# 🚀 Task Manager Website 📝

## 🌟 Introduction

🎉 This project is not your ordinary to-do list; it's a dynamic showcase of JavaScript prowess! Here, I've used the power of JavaScript classes, switch statements, and try-catch-finally statements to craft a Task Manager. 😎

## 🧰 JavaScript Classes

### Task Class

The beating heart of our Task Manager is the `Task` class! 🚀🤖

```javascript
class Task {
  constructor(name, desc, date) {
    this.name = name;
    this.desc = desc;
    this.date = date;
    this.completed = false;
  }
}
```

### 🚀 How It Works:

- It creates a task instance filled with the details you provide. 📝

- Then it's enlisted into the tasks array!

## 💡 Switch Statements

### Task Action Handling

Switch statements come into play when you decide to take action! Whether you want to complete, edit, or delete a task! 🛡️

```javascript
table.addEventListener('click', event => {
  const button = event.target;
  const index = button.dataset.index;
  switch (true) {
    case button.classList.contains('complete'):
      // Marks the task as completed and updates the UI. 🌟
      break;
    case button.classList.contains('edit'):
      // Allows users to edit the task's details. ✍️
      break;
    case button.classList.contains('delete'):
      // Deletes the task from the list and updates the UI. 🗑️
      break;
    default:
      console.log('Unknown button clicked');
  }
});
```

### 🌟 How It Works:

- Our trusty switch statements identify your precise intent based on the button you click. 🎯

- Depending on whether you choose to complete, edit, or delete a task, the corresponding code block springs into action!

## 🚨 Try-Catch-Finally Statements

### Error Handling

When things get dicey, our try-catch-finally statements step in to save the day! ⚡😇

```javascript
    case button.classList.contains('edit'):
  try {
    // Attempt to edit the task. ✏️
    // If an error occurs, it is caught and logged. 🚒
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Edit button clicked');
  }
  break;
case button.classList.contains('delete'):
  try {
    // Attempt to delete the task. 🗑️
    // If an error occurs, it is caught and logged. 🚒
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Delete button clicked');
  }
  break;
```

## ✏️ How It Works:

- When you're in the mood to edit or delete a task, the try-catch blocks got it covered. 🦸

- If something unexpected happens (like trying to edit a task that doesn't exist), our error-catchers will swoop in to save the day, ensuring a smooth user experience!
