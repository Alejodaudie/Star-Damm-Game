
'use strict';


function buildDom(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}

function main() {

    var splashScreen;
    var gameScreen;
    var gameOverScreen;
  
    var startButton;
    var restartButton;
    var timerElement;



     // -- splash

     function buildSplash() {
        splashScreen = buildDom(`
          <main class = "main-Splash">
          <section class="splash container">
            <div><img  src='./AlejoGImp/letraStarDamm.png' alt='damm'></div>
            <h1 class = "h1-Splash"></h1>
            <div class="splash-div">
              <h2>WELCOME</h2>
              <h3>Please, enter your date of birth</h3>
              <div class="input">
              <label class ="Age"> Age : </label>
              <input type="number" placeholder = '+ 18'>
              </div>
              <div class = "buttons">
                  <button class="button">
                  OK
                  </button>
              </div>
              <h4>To play the game you must be over 18 years old</h4>
            </div>
            <footer>
              <p>By entering this site game, you are agreeing to our Terms & Conditions found here, Privacy Policy found here and By continuing to browse 
                this site you are agreeing to accept our use of cookies. Read our Privacy Policy to find out more. Read the Star Damm game responsibility 
                statement here. Star Damm game endorses responsible and moderate drinking. For this reason, we would like to recommend the following reading: Beer, 
                beer and beer, we love Star Damm game . STAR® Damm Game of Spain. Star game, Alejo Daudí Beer game country of Barcelona & Logo, ENJOY RESPONSIBLY and 
                Star game Designs are trademarks owned by The Alejo Star Damm Company SD. ©2000-2014 The Star Damm Company SD. All rights reserved. Imported in the BCN 
                by Star D Beers Co. Barcelona, BCN. Enjoy responsibly.</p>

              <p>©Copyright 2050 by Alejo Daudí. All rights reversed.</p>
            </footer>
            </section>
          </main>
        `);
    
        document.body.prepend(splashScreen);
    
        startButton = document.querySelector('button');
    
        startButton.addEventListener('click', destroySplash);
      }
    
      function destroySplash() {
        splashScreen.remove();
        startButton.removeEventListener('click', destroySplash);
    
        buildGameScreen();
      }

      // -- game

      function buildGameScreen() {
        gameScreen = buildDom(`
          <main class = "main-Game">
            <header class="headerGame">
              <img src="./Imagenes/grifo/grifo-7.png">
            </header>
            <p class="time"><span class="timer">Time: </span></p>   
            <canvas width="640px" height="680px"></canvas>   
          </main>
        `);
    
        document.body.prepend(gameScreen);
    
        var canvasElement = document.querySelector('canvas');
      
    
        var game = new Game(canvasElement);
        game.start();
        
        game.onTimeUpdate(updateTime);

        game.onGameOverCallback(destroyGameScreen);
    
      }
    
      function updateTime(timeLeft) {
        timerElement = document.querySelector('.timer');
        timerElement.innerText = timeLeft;
      }

      function destroyGameScreen() {
        gameScreen.remove();
        buildGameOverScreen();
      }

        // -- game over 

        function buildGameOverScreen() {
            gameOverScreen = buildDom(`
              <main class="main-GameOver">
                <div class="game-over">
                  <h1 class="h1-GameOver">Game Over</h1>
                  <p class="message"><span class = 'username'></span> Score : <span class = 'score'></span></p>
                  <div class="buttons">
                  <div class="restart-buttons">
                  <button class="button">Play Again</button>
                  </div>
                  </div>
                </div>
              </main>  
            `);
        
            document.body.prepend(gameOverScreen);
        
            restartButton = document.querySelector('.button');
        
            restartButton.addEventListener('click', destroyGameOverScreen)
        
          }
        
          function destroyGameOverScreen() {
            gameOverScreen.remove();
        
            restartButton.removeEventListener('click', destroyGameOverScreen)
        
            buildGameScreen();
          }


            // -- initialize
        
          buildSplash();
        
        }
        
        window.addEventListener('load', main);


