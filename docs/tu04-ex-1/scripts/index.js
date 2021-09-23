"use strict";

let loop = true;
while (loop) {
  let tries = 1;
  let randomNumber = parseInt(Math.random() * 100) + 1;
  let question = prompt(`Guess the number between 1 and 100!`);

  while (question != randomNumber) {
    //si el usuario cancela
    if (question == null) {
      loop = false;
      break;
    } // comprobar que rango es correcto
    if (question >= 1 && question <= 100) {
      if (question > randomNumber) {
        question = prompt("Your number is higher, try again:");
        tries++;
      } else {
        question = prompt("Your number is lower, try again:");
        tries++;
      }
    } else {
      //No han ingresado num entre 1 y 100
      question = prompt("Enter a valid number:");
    }
  } //han acertado
  if (question == randomNumber) {
    question = "";
    alert(`Congratulations! you did it in ${tries} tries!`);
    let again = confirm("Do you want to play again?");
    if (again == true) {
      loop = true;
      tries = 0;
    } else {
      loop = false;
      console.log("The user left the game");
    }
  }
}
