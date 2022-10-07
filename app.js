//console.log("visi")

//you will play against a computer

//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors
function getComputerChoice() {

    //random from 3 choices
    let random = Math.floor(Math.random() * 3) + 1;
    //console.log("random number",random)

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

    let winner;

     if( (computerSelection === 'PAPER' && playerSelection === "ROCK")
     || (computerSelection === 'ROCK' && playerSelection === "SCISSORS")
     || (computerSelection === 'SCISSORS' && playerSelection === "PAPER")
     )
    
     {
        winner = "computer"
         console.log(`You Lose! ${computerSelection} beats ${playerSelection}`) 

     }else if
     ( (playerSelection === 'PAPER' && computerSelection === "ROCK")
     || (playerSelection === 'ROCK' && computerSelection === "SCISSORS")
     || (playerSelection === 'SCISSORS' && computerSelection === "PAPER")
     )
     {
       
        winner = "player"
        console.log(`You win!" ${playerSelection} beats ${computerSelection}`)
     }else{
        console.log(`Draw ${playerSelection} equal to ${computerSelection}`)
    }

     return winner;
    

  }

  function game() {

    let playerScore = 0;
    let computerScore = 0;

    //play 5 rounds
    for( let i = 0; i < 5; i++)
    {
        let userChoice = prompt("Make a choice(Paper,Rock or Scissors")
        let result = playRound(userChoice,getComputerChoice()) 
        if(result === "player")
        {
            playerScore++;
        }else if(result === "computer"){
            computerScore++;
        }

        console.log(`Player ${playerScore} to Comp ${computerScore}`)
    }
    if(playerScore > computerScore) {
        return `You win by score ${playerScore} to ${computerScore}`
    }else if (playerScore < computerScore) {
        return `You lose by score ${playerScore} to ${computerScore}`
    }else{
        return `Draw ${playerScore} to ${computerScore}`
    }

    //say who won in the end



  }


console.log(game());


