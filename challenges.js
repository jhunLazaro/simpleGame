

var scores, roundScore, activePlayer, gamePlaying; //global variable
init();
var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying){
        
       //1. Random number
       var dice1 = Math.floor(Math.random() *6) + 1;
       var dice2 = Math.floor(Math.random() *6) + 1;
       //2.display the result
       document.getElementById('dice-1').style.display = 'block';
       document.getElementById('dice-2').style.display = 'block';
       
       document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
       document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
       //3. update the roundscore 
       
       if (dice1 !== 1 && dice2 !== 1){ //!== is different
        //add score
        roundScore += dice1 + dice2;
        // same as roundScore = roundScore + dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else{
        //next player
       nextPlayer();
    }
       /*
       if(dice === 6 && lastDice === 6){
           //player losses score
           scores[activePlayer] = 0;
           document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
           nextPlayer(); // if the player roll the dice 6 two time in a row he losses his score

       }else if (dice !== 1){
           //add score
           roundScore += dice;
           // same as roundScore = roundScore + dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
       } else{
           //next player
          nextPlayer();
       }
       lastDice = dice;
       */
    }
    });
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying){
        //Add the current score to global score
        scores[activePlayer] += roundScore;
        //update the ui
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        

        var input = document.querySelector('.Final-score').value;
        var winningScore;
         
        //console.log(input);
        // undefined, 0, null or "" are COERCED to false
        if(input){
            winningScore = input;
        }else{
            winningScore = 100;
            
        }
        //check if player won the game
        
       
        if (scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'You win!';
            hideDice();
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); 
            gamePlaying = false;
            
        }else {
            nextPlayer();
        }
    }
        
        
    });

    function nextPlayer(){
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //ternary operator
            // ? is then and : is else
            // same as
            /*if (activePlayer === 0){
                activePlayer = 1;
            } else {
                activePlayer = 0;
            }*/
            roundScore = 0;
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
            //document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('.player-1-panel').classList.add('active');
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            hideDice();
    }

    document.querySelector('.btn-new').addEventListener('click', init);

    function init() { //initialize
        scores = [0,0];
        roundScore = 0;
        activePlayer = 0;
        gamePlaying = true;
        hideDice();

        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.getElementById('name-0').textContent = 'Jun 1';
        document.getElementById('name-1').textContent = 'Jun 2';
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
    }
    function hideDice(){
        document.getElementById('dice-1').style.display = 'none';
       document.getElementById('dice-2').style.display = 'none';
    }
//  = dice;
    //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';  //other way





