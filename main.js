
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
    var levelElement;
    var inputAge;
    var age;
    var p;

    var backMusic = document.createElement('audio');
    backMusic.src = './Music/applejack-cancion-del-anuncio-de-estrella-damm-2010.mp3';

    function playBackMusic() {
      backMusic.play();
    }

    function stopBackMusic() {
      backMusic.pause();
      backMusic.currentTime = 0.0;
    }



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
              <input type="number" placeholder = '+ 18' class="input-age">
              </div>
              <p id="Age"></p>
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

              <p class="p-Copyright">©Copyright 2050 by Alejo Daudí. All rights reversed.</p>
            </footer>
            </section>
          </main>
        `);
    
        document.body.prepend(splashScreen);
    
        startButton = document.querySelector('button');
        inputAge = document.querySelector('.input-age');
        p = document.querySelector('#Age');
    
        startButton.addEventListener('click', destroySplash);
      }
    
      function destroySplash() {
        age = inputAge.value
        if(age >= 18) {
          splashScreen.remove();
          startButton.removeEventListener('click', destroySplash);
      
          buildGameScreen();
        } else {
          if(p.innerText.length) {
            p.innerText = '';
          }
          const div = document.querySelector('.input')
          p.innerText = 'Little boy, You are underage';
          div.appendChild(p)
        }
      }

      // -- game

      function buildGameScreen() {
        gameScreen = buildDom(`
          <main class="main-Game">
            <div class="game-wrapper">
              <p class="time">Time: <span class="timer">30</span></p>   
              <canvas width="840px" height="780px"></canvas> 
            </div>
          </main>
        `);
    
        document.body.prepend(gameScreen);

        playBackMusic();
    
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
        stopBackMusic();
        gameScreen.remove();
        buildGameOverScreen();
      }

        // -- game over 

        function buildGameOverScreen() {
            gameOverScreen = buildDom(`
              <main class="main-GameOver">
                <div class="game-over">
                  <h1 class="h1-GameOver">Game Over</h1>
                  <p class="message"><span class='username'></span> Level: <span class='level'></span></p>
                  <div class="buttons">
                    <div class="restart-buttons">
                      <button class="button">Play Again</button>
                    </div>
                  </div>
                </div>
              </main>  
            `);
        
            document.body.prepend(gameOverScreen);
            levelElement = document.querySelector('.level');
            var level = localStorage.getItem('level');
            levelElement.innerText = level;
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


