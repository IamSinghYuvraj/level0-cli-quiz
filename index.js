var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("What is your name ?");

console.log("Hello "+ userName + ", Welcome to my first cli quiz app in JavaScript! ");
console.log("Please answer in UPPERCASE LETTERS.")

//  asking to permission to start the quiz.
function permission(question, answer) {
  
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("Let's start the quiz!");

  } else {
    console.log(" Bye see you then! ");
  }
}

// quiz function
function play(question, answer) {
  
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("Congratulations, you got it right !");
    score = score + 1;
    console.log("Your Score is "+ score + " !")
  } else {
    console.log(" Unfortunately you are wrong ! ");
    score = score 
    console.log("Your Score is "+ score + " !")
  }
}

permission("Do you want to play this quiz?", "YES");
play("what is my college name? ", "VIDYALANKAR");
play("which city do I live? ", "MUMBAI");
play("what coding language am I learning ? ", "JAVASCRIPT");
play("what Sport I play the most?", "FOOTBALL");
play("Who is my Favorite Football player?", "RONALDO")
console.log("Your Total score is " + score + " !");