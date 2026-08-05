console.log("Day 37 - Add Tasks to Todo List");

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskStatus = document.getElementById("task-status");
const taskList = document.getElementById("task-list");
const clearAllBtn = document.getElementById("clear-all-btn");

const tasks = [];

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
        ${task.text}
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

  
}

addTaskBtn.addEventListener("click", function () {
  addTask();
});

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});