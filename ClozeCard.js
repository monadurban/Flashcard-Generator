var inquirer = require("inquirer");
var clozeQuestions = require("./cloze-questions.json");
var counter = 0;
var correctAnswerCount = 0;

function ClozeCard(cloze, partial){
  this.cloze = cloze;
  this.partial = "..." + partial;
  this.fullText = [cloze] + " " +partial;
  this.returnCloze = function(){
    console.log("Answer: " + this.cloze);
};
  this.returnPartial = function(){
  console.log(this.partial);
};
  this.returnFullText = function(){
  console.log(this.fullText);

};

};

var askQuestions = function (){

  if(counter < 4){

  inquirer.prompt([

    {type: "input",
      message: "..." + clozeQuestions[counter].partial,
      name: "question"
      }//if
 ]).then(function(answer){

  var userInput = answer.question.toLowerCase();

    if(userInput === clozeQuestions[counter].cloze){
          console.log("\nGreat job!");
          correctAnswerCount++;
        }//if

        else{
          console.log("\nNope! Maybe next time!");
        }//else

  console.log(clozeQuestions[counter].fullAnswer);
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
var questionOneCloze = new ClozeCard("George Washington", "was the first president of the United States.");

var questionTwoCloze = new ClozeCard("Erythrocytes", "are the blood cells that do not have a nucleus.")

var questionThreeCloze = new ClozeCard("Abduction", "is the movement of a limb away from the midline of the body.")

var questionFourCloze = new ClozeCard("olfactory", "is the cranial nerve related to the sense of smell.")

