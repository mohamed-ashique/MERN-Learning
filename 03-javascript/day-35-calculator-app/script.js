console.log("Day 35 - Calculator App");

const firstNumberInput = document.getElementById("first-number");
const secondNumberInput = document.getElementById("second-number");

const addBtn = document.getElementById("add-btn");
const subtractBtn = document.getElementById("subtract-btn");
const multiplyBtn = document.getElementById("multiply-btn");
const divideBtn = document.getElementById("divide-btn");
const clearBtn = document.getElementById("clear-btn");

const resultMessage = document.getElementById("result-message");


function getInputNumbers() {
  const firstValue = firstNumberInput.value.trim();
  const secondValue = secondNumberInput.value.trim();

  if (firstValue === "" || secondValue === "") {
    return null;
  }

  const firstNumber = Number(firstValue);
  const secondNumber = Number(secondValue);

  return {
    firstNumber: firstNumber,
    secondNumber: secondNumber
  };
}

function showResult(message) {
  resultMessage.textContent = message;
  resultMessage.classList.add("success");
  resultMessage.classList.remove("error");
}

function showError(message) {
  resultMessage.textContent = message;
  resultMessage.classList.add("error");
  resultMessage.classList.remove("success");
}

addBtn.addEventListener("click", function () {
  const numbers = getInputNumbers();

  if (numbers === null) {
    showError("Please enter both numbers.");
    return;
  }

  const result = numbers.firstNumber + numbers.secondNumber;

  showResult(`Result: ${result}`);
});

subtractBtn.addEventListener("click", function () {
  const numbers = getInputNumbers();

  if (numbers === null) {
    showError("Please enter both numbers.");
    return;
  }

  const result = numbers.firstNumber - numbers.secondNumber;

  showResult(`Result: ${result}`);
});

multiplyBtn.addEventListener("click", function () {
  const numbers = getInputNumbers();

  if (numbers === null) {
    showError("Please enter both numbers.");
    return;
  }

  const result = numbers.firstNumber * numbers.secondNumber;

  showResult(`Result: ${result}`);
});



divideBtn.addEventListener("click", function () {
  const numbers = getInputNumbers();

  if (numbers === null) {
    showError("Please enter both numbers.");
    return;
  }

  if (numbers.secondNumber === 0) {
    showError("Cannot divide by zero.");
    return;
  }

  const result = numbers.firstNumber / numbers.secondNumber;

  showResult(`Result: ${result}`);
});

clearBtn.addEventListener("click", function () {
  firstNumberInput.value = "";
  secondNumberInput.value = "";

  resultMessage.textContent = "Result will appear here.";
  resultMessage.classList.remove("success", "error");
});