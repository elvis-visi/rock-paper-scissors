//console.log("visi")

//you will play against a computer

//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors
function getComputerChoice() {

    //random from 3 choices
    let random = Math.floor(Math.random() * 3) + 1;
    console.log("random number",random)

    let choice;

    switch(random)
    {
        case 1:
            choice =  "Rock";
            break;
        case 2:
            choice =  "Paper";
            break;
                
        case 3:
            choice =  "Scissors";
            break;    
        default:
            break;     

    }
    console.log("choice made" , choice)
    return choice;
}  
  

//single round, player and computer selection
function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

     if( (computerSelection === 'PAPER' && playerSelection === "ROCK")
     || (computerSelection === 'ROCK' && playerSelection === "SCISSORS")
     || (computerSelection === 'SCISSORS' && playerSelection === "PAPER")
     )

     {
         return `"You Lose!" ${computerSelection} beats ${playerSelection}"`

     }else if
     ( (playerSelection === 'PAPER' && computerSelection === "ROCK")
     || (playerSelection === 'ROCK' && computerSelection === "SCISSORS")
     || (playerSelection=== 'SCISSORS' && computerSelection === "PAPER")
     )
     {

        return `"You win!" ${playerSelection} beats ${computerSelection}"`
     }else{
        return `"Draw" ${playerSelection} equak to ${computerSelection}"`
     }
    
    //Paper beats rock

    //rock beats scissors

    //scissors beat paper





  }

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


