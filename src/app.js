/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const randomSuit = generateRandomSuit();
  if (randomSuit === "♦" || randomSuit === "♥") {
    document.querySelector("#top-suit").style.color = "red";
    document.querySelector("#bottom-suit").style.color = "red";
    document.querySelector("#number").style.color = "red";
  }
  document.querySelector("#top-suit").innerHTML = randomSuit;
  document.querySelector("#number").innerHTML = generateRandomNumber();
  document.querySelector("#bottom-suit").innerHTML = randomSuit;
};

const generateRandomNumber = () => {
  const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  return randomNumber;
};

const generateRandomSuit = () => {
  const suits = ["♦", "♥", "♠", "♣"];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  return randomSuit;
};
