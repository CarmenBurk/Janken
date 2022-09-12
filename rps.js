
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
    choice = prompt('Choose Wisely! Will it be the mighty ROCK, the nimble PAPER, or the efficient SCISSORS?');
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
    return "Thats not a choice, try again."
}}


function game(rounds = 5){
 
  let Victor = "";
  let lossCount = 0;
  let winCount = 0;
  While (lossCount < rounds/2 || winCount < rounds/2); {
    const computerselection = getComputerChoice();
    const playerselection = getPlayerChoice();
    Outcome = playRound();

    if (Outcome == "Victory!"){
      winCount +=1; 
    }
    if (Outcome == 'You Lose!'){
      lossCount +=1;
    }
    else {
      rounds += 1;
    }
 
  
} 
  if (lossCount > winCount){
    Victor = console.log("Felled by the might of the machines. A relatable destiny");
   }   
  else {
    Victor = Console.log("Congrats Player you are the big winner!");
  }
  return Victor  
}
alert("Its time for a motherfucking shooooooooowdown")
console.log("yo yo yo yo yo ")
game()
