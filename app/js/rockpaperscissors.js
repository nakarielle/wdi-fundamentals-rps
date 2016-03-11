////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();      
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = "tie";
    }
    else if (playerMove === 'rock') {
        if (computerMove === 'scissors') {
            winner = "player";
        }
        else {
            winner = "computer";
        }
    }
    else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            winner = "computer";
        }
        else {
            winner = "player";
        }
    }
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            winner = "player";
        }
        else {
            winner = "computer";
            
        }
    }
    return winner;
}




function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var round = 0;
    while (playerWins < 5 && computerWins < 5) {
        round += 1;
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var result = getWinner(playerMove,computerMove);
        if (result === "player") {
            playerWins += 1;
        }
        else if (result === "computer") {
            computerWins += 1;
        }
        console.log("Round " + round);
        console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
        console.log("The score is currently " + playerWins + " to " + computerWins);
    }
    if (playerWins === 5) {
        console.log("Game Over! Player Wins!");
    }
    else if (computerWins === 5) {
        console.log("Game Over! Computer Wins!");
    }
}



playToFive();
