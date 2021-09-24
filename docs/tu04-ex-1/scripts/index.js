"use strict";

let loop = true;
while (loop) {
  let tries = 1;
  let randomNumber = parseInt(Math.random() * 100) + 1;
  let question = prompt(`Guess the number between 1 and 100!`);

  while (question != randomNumber) {
    //if the user chooses to cancel
    if (question == null) {
      loop = false;
      break;
    } // checking that the number is correct
    if (question >= 1 && question <= 100) {
      if (question > randomNumber) {
        question = prompt("Your number is higher, try again:");
        tries++;
      } else {
        question = prompt("Your number is lower, try again:");
        tries++;
      }
    } else {
      //They didn't enter a number between 1 and 100;
      question = prompt("Enter a valid number:");
    }
  } //The number is right
  if (question == randomNumber) {   
    alert(`Congratulations! you did it in ${tries} tries!`);
    let again = confirm("Do you want to play again?");
    //If the user accepts, the loop continues.
    again == true ? loop = true : loop = false , console.log("the user left the game");
   }
}
