
function getComputerChoice(){
    let choice = Math.floor (Math.random() * 3) + 1;
    if (choice == 1){
        return "Scissors";
    }if (choice == 2){
        return "Paper";
    } else {
        return "Rock";
    }
    
    

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


const playerselection = "rock";
const computerselection = getComputerChoice();
console.log(playRound(playerselection,computerselection));

