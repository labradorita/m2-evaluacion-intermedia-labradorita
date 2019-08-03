"use strict";

const inputElement = document.querySelector(".js-number");
const tryCount = document.querySelector(".js-try");
const buttonElement = document.querySelector(".js-button");
const textElement = document.querySelector(".js-resultText");
let acc = 0;
// generate random number & show in console
const getRandomNumber = function() {
  return Math.floor(Math.random() * 100);
};
const randomNumber = getRandomNumber();
console.log(randomNumber);

const getInputValue = function() {
  return parseInt(inputElement.value);
};

function numberGame(ev) {
  ev.preventDefault();
  changeText();
  addTry();
}

const inputValue = parseInt(inputElement.value);
// debugger;
function changeText() {
  const inputValue = getInputValue();
  console.log(inputValue);
  if (inputValue < 1 || inputValue > 100) {
    textElement.innerHTML = "El número debe estar entre 1 y 100";
  } else if (inputValue === randomNumber) {
    textElement.innerHTML = "¡HAS GANADO, CAMPEONA!";
  } else if (inputValue > randomNumber) {
    textElement.innerHTML = "Demasiado alto";
  } else {
    textElement.innerHTML = "Demasiado bajo";
  }
}

// function for counter
function addTry() {
  if (inputElement.value) {
    acc = acc + 1;
    tryCount.innerHTML = acc;
  }
}

buttonElement.addEventListener("click", numberGame);
