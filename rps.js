
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1){
        return "Scissors";
    }if (choice == 2){
        return "Paper";
    } else {
        return "Rock";
    }
    
    

}

function getPlayerChoice(){
    let choice = prompt('Choose Wisely! Will it be the mighty ROCK, the nimble PAPER, or the efficient SCISSORS?');
    return choice;
    
}

function playRound(playerselection, computerselection){
if (playerselection.toUpperCase() == 'ROCK'){
    if (computerselection.toUpperCase() == 'PAPER') {
        return 'You Lose!'
    }
    if (computerselection.toUpperCase() == 'ROCK') {
        return 'TIE GO AGAIN'
    }
    if (computerselection.toUpperCase() == 'SCISSORS'){
        return 'Victory!'
    }
   
}
if (playerselection.toUpperCase() == 'PAPER'){
    if (computerselection.toUpperCase() == 'SCISSORS') {
        return 'You Lose!'
    }
    if (computerselection.toUpperCase() == 'PAPER') {
        return 'TIE GO AGAIN'
    }
    if (computerselection.toUpperCase() == 'ROCK'){
        return 'Victory!'
    }
 
}
if (playerselection.toUpperCase() == 'SCISSORS'){
    if (computerselection.toUpperCase() == 'ROCK') {
        return 'You Lose!'
    }
    if (computerselection.toUpperCase() == 'SCISSORS') {
        return 'TIE GO AGAIN'
    }
    if (computerselection.toUpperCase() == 'PAPER'){
        return 'Victory!'
    }
  
}
else {
    return alert("Thats not a choice, try again.")
}}


function game(rounds = 5){
  let roundCount = rounds
  let Victor = "";
  let lossCount = 0;
  let winCount = 0;
  console.log("hey this is right here")
  while (lossCount < roundCount/2 || winCount < roundCount/2) {
    console.log("the ")
    console.log("Hey this is right here")
    let computerselection = getComputerChoice();
    let playerselection = getPlayerChoice();
    Outcome = playRound(playerselection, computerselection);
    alert(Outcome);

    if (Outcome == "Victory!"){
      winCount +=1; 
    }
    if (Outcome == 'You Lose!'){
      lossCount +=1;
    }
    else {
      roundCount++;
    }
    roundCount--;
 
  
} 
  if (lossCount > winCount){
    Victor = console.log("Felled by the might of the machines. A relatable destiny");
   }   
  else {
    Victor = console.log("Congrats Player you are the big winner!");
  }
  return Victor  
}

function winner(result) {
  let message = "";
  if (result == console.log("Congrats Player you are the big winner!")){
    message = "You win the Match!!!"}
  else {
    message = "You have lost your last hand, all goes black."
  }
  return console.log(message);
}


let matchOutcome = game();


