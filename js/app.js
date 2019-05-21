/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer,winnerScore;

score = [0,0];
roundScore = 0;
activePlayer = 0;
winnerScore = 10;
 

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;


document.querySelector('.btn-roll').addEventListener('click', function(){
    // Random number

    var dice = Math.floor(Math.random() * 6 + 1);

    // change image     
    
    var diceDom = document.querySelector('.dice');

    diceDom.style.display='block';

    diceDom.src = 'img/dice-' + dice + '.png';

    // Update the round score if the dice number is not the 1

    if (dice > 1) {
        roundScore += dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {

        nextPalyer();

    }

})


document.querySelector('.btn-hold').addEventListener('click', function(){
    // add current score to GLobal score
    score[activePlayer] += roundScore;
    // Changing UI
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

    if(score[activePlayer] >= winnerScore){
        //change 'Player $' to 'Winner!'
        document.querySelector('#name-' + activePlayer).textContent = 'Winner !'
        // Hide Dice
        document.querySelector('.dice').style.display='none';
        // Add winner class to make a 'Winner!' text a little shiny
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        // Remove active class when there is a winner
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
              
    } else {

   // next player
    nextPalyer();
    }

})

function nextPalyer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display='none';

}







