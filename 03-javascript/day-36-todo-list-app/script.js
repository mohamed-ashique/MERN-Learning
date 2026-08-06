console.log("Day 38 - Delete Tasks and Clear All Tasks");

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskStatus = document.getElementById("task-status");
const taskList = document.getElementById("task-list");
const clearAllBtn = document.getElementById("clear-all-btn");

let tasks = [];

function showStatus(message, type) {
  taskStatus.textContent = message;

  taskStatus.classList.remove("success", "error");

  if (type === "success") {
    taskStatus.classList.add("success");
  } else if (type === "error") {
    taskStatus.classList.add("error");
  }
}

function renderTasks() {
  taskList.innerHTML = "";

  for (const task of tasks) {
    taskList.innerHTML += `
      <li class="task-item">
        <span class="task-text">${task.text}</span>

        <button class="delete-btn" data-id="${task.id}">
          Delete
        </button>
      </li>
    `;
  }

  if (tasks.length === 0) {
    showStatus("Add your first task.", "");
  } else {
    showStatus(`You have ${tasks.length} task(s).`, "success");
  }
}

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    showStatus("Please enter a task.", "error");
    return;
  }

  const newTask = {
    id: Date.now(),
    text: taskText,
    isCompleted: false
  };

  tasks.push(newTask);

  renderTasks();

  taskInput.value = "";
  taskInput.focus();
}

function deleteTask(taskId) {
  tasks = tasks.filter(function (task) {
    return task.id !== taskId;
  });

  renderTasks();

  showStatus("Task deleted successfully.", "success");
}

function clearAllTasks() {
  if (tasks.length === 0) {
    showStatus("There are no tasks to clear.", "error");
    return;
  }

  const isConfirmed = confirm("Are you sure you want to clear all tasks?");

  if (!isConfirmed) {
    showStatus("Clear all cancelled.", "error");
    return;
  }

  tasks = [];

  renderTasks();

  showStatus("All tasks cleared.", "success");
}

addTaskBtn.addEventListener("click", function () {
  addTask();
});

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const taskId = Number(event.target.dataset.id);

    deleteTask(taskId);
  }
});

clearAllBtn.addEventListener("click", function () {
  clearAllTasks();
});