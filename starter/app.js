/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, count=0;

var highScore, next;

init();



function init()
{
            gamePlaying=true;        
            scores = [0,0];
            roundScore = 0;
            activePlayer = 0;



//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

        document.querySelector('.dice').style.display = 'none';

        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.getElementById('name-0').textContent = 'Player-1';
        document.getElementById('name-1').textContent = 'Player-2';
    
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        
        document.querySelector('.player-0-panel').classList.add('active');

        
    
    
    
    
}




function nextPlayer()
{
    
        activePlayer === 0 ? activePlayer=1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        
        /*document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');*/
       
        var diceDom = document.querySelector('.dice').style.display = 'none';
       
    
    
    
    
}

 document.querySelector('.btn-edit').addEventListener('click', function(){
                                                       
         var Hiscore = prompt('Enter new highscore');
         
         highScore = Hiscore;
    
                                                       
    });







document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(gamePlaying) {
    
        
    var diceDom = document.querySelector('.dice');
    //var diceDom = document.querySelector('.dice2');
    //1.Random value
    var dice = Math.floor(Math.random() * 6) + 1;
    //var dice2 = Math.floor(Math.random() * 6) + 1;
    
    
        
   
    //2.Display the dice
    diceDom.style.display = 'block';
    
    //3. roll dice
    diceDom.src = 'dice-' + dice + '.png';
    //diceDom.src = 'dice-' + dice2 + '.png';
    
    
    if(dice !== 1){
       //Add to score
         if(dice ==6 && next == 6)
             {
                 roundScore = 0;
                 next = 0;
                 nextPlayer();
                 
             }
        else{
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        next = dice;
        }
       }
    else{
       //next player
       nextPlayer();
       
    }   
        
    }
    
  
    
});


document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if(gamePlaying) {
        
         //Add score to main score
    scores[activePlayer] += roundScore;
    
    
     //add to UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    
    
    //check if player wins
    
    if(scores[activePlayer] >= highScore )
        {
            
          document.querySelector('#name-' + activePlayer ).textContent = 'Winner!';
          document.querySelector('.dice').style.display = 'none';
          document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
          document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
          gamePlaying = false;  
            
        }
    else
        {
           //next player
            nextPlayer(); 
        }
    
        
        
    }
    
   
    
});

  document.querySelector('.btn-new').addEventListener('click', init);
  

 







