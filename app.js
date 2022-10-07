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
    return choice;
    console.log("choice made" , choice)
}




getComputerChoice()