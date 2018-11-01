
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
        splashScreen = buildDOM(`
          <main>
            <h1>Star Damm</h1>
            <button>Start</button>
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
        gameScreen = buildDOM(`
          <main>
            <p class="lives">3</p>     
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
            gameOverScreen = buildDOM(`
              <main>
                <h1>Game Over</h1>
                <button>Restart</button>
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


