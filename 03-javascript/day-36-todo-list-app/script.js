console.log("Day 40 - Edit Tasks and Save to localStorage");

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskStatus = document.getElementById("task-status");
const taskList = document.getElementById("task-list");
const clearAllBtn = document.getElementById("clear-all-btn");

let tasks = JSON.parse(localStorage.getItem("todoTasks")) || [];

function saveTasks() {
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

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
    const completedClass = task.isCompleted ? "completed" : "";
    const completeButtonText = task.isCompleted ? "Undo" : "Complete";
    const completeButtonClass = task.isCompleted ? "undo-btn" : "complete-btn";

    taskList.innerHTML += `
      <li class="task-item">
        <span class="task-text ${completedClass}">
          ${task.text}
        </span>

        <div class="task-actions">
          <button class="${completeButtonClass}" data-id="${task.id}">
            ${completeButtonText}
          </button>

          <button class="edit-btn" data-id="${task.id}">
            Edit
          </button>

          <button class="delete-btn" data-id="${task.id}">
            Delete
          </button>
        </div>
      </li>
    `;
  }

  if (tasks.length === 0) {
    showStatus("Add your first task.", "");
  } else {
    const completedTasks = tasks.filter(function (task) {
      return task.isCompleted === true;
    });

    const pendingTasks = tasks.length - completedTasks.length;

    showStatus(
      `Total: ${tasks.length} | Completed: ${completedTasks.length} | Pending: ${pendingTasks}`,
      "success",
    );
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
    isCompleted: false,
  };

  tasks.push(newTask);

  saveTasks();
  renderTasks();

  taskInput.value = "";
  taskInput.focus();
}

function deleteTask(taskId) {
  tasks = tasks.filter(function (task) {
    return task.id !== taskId;
  });

  saveTasks();
  renderTasks();

  showStatus("Task deleted successfully.", "success");
}

function editTask(taskId) {
  const taskToEdit = tasks.find(function (task) {
    return task.id === taskId;
  });

  if (!taskToEdit) {
    showStatus("Task not found.", "error");
    return;
  }

  const updatedText = prompt("Edit your task:", taskToEdit.text);

  if (updatedText === null) {
    showStatus("Edit cancelled.", "error");
    return;
  }

  const cleanText = updatedText.trim();

  if (cleanText === "") {
    showStatus("Task text cannot be empty.", "error");
    return;
  }

  tasks = tasks.map(function (task) {
    if (task.id === taskId) {
      return {
        id: task.id,
        text: cleanText,
        isCompleted: task.isCompleted,
      };
    }

    return task;
  });

  saveTasks();
  renderTasks();

  showStatus("Task updated successfully.", "success");
}

function toggleTaskComplete(taskId) {
  tasks = tasks.map(function (task) {
    if (task.id === taskId) {
      return {
        id: task.id,
        text: task.text,
        isCompleted: !task.isCompleted,
      };
    }

    return task;
  });

  saveTasks();
  renderTasks();
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

  saveTasks();
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

  if (event.target.classList.contains("edit-btn")) {
    const taskId = Number(event.target.dataset.id);

    editTask(taskId);
  }

  if (
    event.target.classList.contains("complete-btn") ||
    event.target.classList.contains("undo-btn")
  ) {
    const taskId = Number(event.target.dataset.id);

    toggleTaskComplete(taskId);
  }
});

clearAllBtn.addEventListener("click", function () {
  clearAllTasks();
});

renderTasks();
