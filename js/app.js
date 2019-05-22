/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer, gamePlaying;

score = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying =true;



init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    // Random number
    if(gamePlaying){

        var dice1 = Math.floor(Math.random() * 6 + 1);
        var dice2 = Math.floor(Math.random() * 6 + 1);


        // change image     
        
        var diceDom1 = document.querySelector('.dice1');
        var diceDom2 = document.querySelector('.dice2');

    
        diceDom1.style.display='block';
        diceDom2.style.display='block';

    
        diceDom1.src = 'img/dice-' + dice1 + '.png';
        diceDom2.src = 'img/dice-' + dice2 + '.png';

    
        // Update the round score if the dice number is not the 1
    
      if (dice1 !== 1 && dice2 !== 1) {
            // Game continue
            roundScore += dice1 + dice2;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
            // if player rolls 1 cureent score deleted and roll turns nextplayer
            nextPalyer();
    
        }

    }


})


document.querySelector('.btn-hold').addEventListener('click', function(){
   
    if(gamePlaying) {

    // add current score to GLobal score
    score[activePlayer] += roundScore;
    // Changing UI
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

   var input = document.querySelector('.final-score').value;
    var winningScore;
    
    // Undefined, 0, null or "" are COERCED to false
    // Anything else is COERCED to true
    if(input) {
        winningScore = input;
    } else {
        winningScore = 50;
    }

    if(score[activePlayer] >= winningScore){
        //change 'Player $' to 'Winner!'
        document.querySelector('#name-' + activePlayer).textContent = 'Winner !'
        // Hide Dice
        document.querySelector('.dice1').style.display='none';
        document.querySelector('.dice2').style.display='none';

        // Add winner class to make a 'Winner!' text a little shiny
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        // Remove active class when there is a winner
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        //if paleyers score reach winnerscore gamePlaying will 'false' so btns doesn't work anymore except New Game btn
        gamePlaying = false;
    } else {

   // next player
    nextPalyer();
    
}

    }


})

function nextPalyer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice1').style.display='none';
    document.querySelector('.dice2').style.display='none';


}

document.querySelector('.btn-new').addEventListener('click', init);


function init(){

    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';


    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.add('active');

    document.querySelector('#name-0').textContent = 'Player 1'
    document.querySelector('#name-1').textContent = 'Player 2'

    gamePlaying = true;

   
}
























