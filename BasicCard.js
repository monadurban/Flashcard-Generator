var inquirer = require("inquirer");
var basicQuestions = require("./basic-questions.json");
var counter = 0;
var correctAnswerCount = 0;

var BasicCard = function(frontArg, backArg){
 this.frontArg = frontArg;
 this.backArg = backArg;
};


var askQuestions = function (){

  if(counter < 4){

  inquirer.prompt([

    {type: "input",
      message: basicQuestions[counter].frontCard,
      name: "question"
      }//if


 ]).then(function(answer){

  var userInput = answer.question.toLowerCase();

    if(userInput === basicQuestions[counter].backCard){
          console.log("\nGreat job!");
          correctAnswerCount++;
        }//if

        else{
          console.log("\nNope! Maybe next time!");
        }//else

  console.log(basicQuestions[counter].fullAnswer);
  counter++
  askQuestions();

  });//closing then
} //closing if

else{
  console.log("\nGame Over!")
  console.log("Correct Answers: " + correctAnswerCount + "/4");
  inquirer.prompt([

      {type: "confirm",
        message: "Want to play again?",
        name: "playAgain",
        default: true
        }
    ]).then(function(answer){

      if (answer.playAgain === true){
        counter = 0;
        correctAnswerCount = 0;
        askQuestions();

      }
      else{
        console.log("Thank you for playing!");
      }

  });
}

}; //closing function

askQuestions();

var questionOne = new BasicCard("Who was the first president of the United States?", "george washington");
// console.log(questionOne.frontArg, questionOne.backArg);

var questionTwo = new BasicCard("Which cells in the blood do not have a nucleus?", "erythrocytes");

var questionThree = new BasicCard("If the foot is abducted, it is moved in which direction?", "outward");

var questionFour = new BasicCard("Which cranial nerve is related to the sense of smell?", "olfactory");

module.exports = BasicCard;