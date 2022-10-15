"use strict";
var ROCK, PAPER, SCISSORS, stringArray = ['ROCK','PAPER','SCISSORS'];
let computerScore = 0, playerScore = 0;

// loop function
function game()
{
    for (let i = 0; i < 5; i++)
    {
        //COMPUTER PLAYER SELECTION FUNCTION
        function computerPlay() 
        {
            var num = Math.floor (Math.random() * 3 ) + 1;
            if(num == 1)
            {
                ROCK = stringArray [0];
            }
            else if(num == 2)
            {
                ROCK = stringArray [1];
            }       
            else
            {
                ROCK = stringArray [2];
            }
                return ROCK;
        }
        let compChoice = computerPlay();
        console.log("Computer Choice " + compChoice);
        //USER PLAYER SELECTION FUNCTION
        function userPlay()
        {
            var choice = prompt ("Players option 'Rock', 'Paper', or 'Scissors'") .toUpperCase();  
            if (choice == 'ROCK')
            {
                SCISSORS = stringArray [0];
            }
            else if (choice =='PAPER')
            {
                SCISSORS = stringArray [1];
            }
            else if (choice == 'SCISSORS')
            {
                SCISSORS = stringArray [2];
            }
            else
            {
                SCISSORS = "INVALID INPUT!"
            }
                return SCISSORS;
        }
        var userChoice = userPlay();
        {
            console.log("PLAYER INPUT " + userChoice);
        }
        //GAME FUNCTION
        function playGame(computerSelection, playerSelection)
        {
            if(computerSelection == 'ROCK' && playerSelection == 'SCISSORS')
            {
                PAPER = "COMPUTER WINS!!! ROCK BEATS SCISSORS";
                window.alert(PAPER)
                computerScore++
            }
            else if(computerSelection == 'SCISSORS' && playerSelection == 'PAPER')
            {
                PAPER = "COMPUTER WINS!!! SCISSORS BEATS ROCK";
                window.alert(PAPER)
                computerScore++
            }
            else if(computerSelection == 'ROCK' && playerSelection == 'PAPER')
            {
                PAPER = "USER WINS!!!  PAPER BEATS ROCK";
                window.alert(PAPER)
                playerScore++
            }
            else if(computerSelection == 'SCISSORS' && playerSelection == 'ROCK')
            {
                PAPER = "USER WINS!!!  ROCK BEATS SCISSORS";
                window.alert(PAPER)
                playerScore++
            }
            else if(computerSelection == 'PAPER' && playerSelection == 'SCISSORS')
            {
                PAPER = "USER WINS!!!  SCISSORS BEATS ROCK";
                window.alert(PAPER)
                playerScore++
            }
            else if(computerSelection == 'PAPER' && playerSelection == 'ROCK')
            {
                PAPER = "COMPUTER WINS!!! PAPER BEATS ROCK";
                window.alert(PAPER)
                computerScore++
            }
            else
            {
                PAPER = "TIE";
                window.alert(PAPER);
            }
                return PAPER;
        }
        console.log(playGame ( compChoice, userChoice ));
    }
        console.log("Computer " +computerScore+" User's score " +playerScore );
        if( computerScore > playerScore )
        {
            var final = "Computer Wins!"
        }
        else if( computerScore < playerScore )
        {
            final = "Player win Computer"
        }
        else
        {
            final = "TIE"
        }
        console.log(final);
}
game();