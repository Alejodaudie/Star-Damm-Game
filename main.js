
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
  
    var livesElement;

     // -- splash

     function buildSplash() {
        splashScreen = buildDom(`
          <main class = "cointainer">
          <div class = "intro">
            <h1>Star Damm Game</h1>
            <h2>WELCOME</h2>
            <h3>Please, enter your date of birth</h3>
            <div class = "input">
            <label> Age : </label>
            <input type = "text" placeholder = '+ 18'>
            </div>
            <div class = "buttons">
                <button class = "button">OK</button>
            </div>
            <h4>To play the game you must be over 18 years old</h4>
            <div><p>By entering this site game, you are agreeing to our Terms & Conditions found here, Privacy Policy found here and By continuing to browse 
                this site you are agreeing to accept our use of cookies. Read our Privacy Policy to find out more. Read the Star Damm game responsibility 
                statement here. Star Damm game endorses responsible and moderate drinking. For this reason, we would like to recommend the following reading: Beer, 
                beer and beer, we love Star Damm game . STAR® Damm Game of Spain. Star game, Alejo Daudí Beer game country of Barcelona & Logo, ENJOY RESPONSIBLY and 
                Star game Designs are trademarks owned by The Alejo Star Damm Company SD. ©2000-2014 The Star Damm Company SD. All rights reserved. Imported in the BCN 
                by Star D Beers Co. Barcelona, BCN. Enjoy responsibly.</p></div>
            </div> 
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
          <main id="game-screen">
            <p>Time: <span class="time"></span></p>
            <p class="lives">3 vidas</p>     
            <canvas width="640px" height="480px"></canvas>   
          </main>
        `);
    
        document.body.prepend(gameScreen);
    
        var canvasElement = document.querySelector('canvas');
        livesElement = document.querySelector('p.lives');
    
        var game = new Game(canvasElement);
        game.start();
        
        game.onGameOverCallback(destroyGameScreen);
        game.onLiveLost(updateLives);
    
      }
    
      function updateLives(lives) {
        livesElement.innerText = lives;
      }
    
      function destroyGameScreen() {
        gameScreen.remove();
        buildGameOverScreen();
      }

        // -- game over 

        function buildGameOverScreen() {
            gameOverScreen = buildDom(`
              <main class = "container">
                <div class = "game-over">
                  <h1>Game Over</h1>
                  <p class = "message"><span class = 'username'></span> Score : <span class = 'score'></span></p>
                  <div class = "buttons">
                  <div class = "restart-buttons">
                  <button class = "button">Play Again</button>
                  </div>
                  </div>
                </div>
              </main>  
            `);
        
            document.body.prepend(gameOverScreen);
        
            restartButton = document.querySelector('button');
        
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


