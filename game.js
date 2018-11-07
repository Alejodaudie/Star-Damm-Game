'use strict'

function Game(canvasElement) {
    this.bottle = null;
    this.drops = [];
    this.canvasElement = canvasElement;  
    this.bottle = new Bottle (this.canvasElement);  
    this.gameIsOver = false;
    this.timeLeft = null;
    this.level = 1;
    this.message = '';
}

Game.prototype.start = function() {

    this.ctx = this.canvasElement.getContext('2d');

    this.startLoop();

}


// Digo que cuando pase al siguiente nivel, me aparezca un mensaje en medio.

Game.prototype.mensajeNivel = function() {
    this.message = new Message (this.canvasElement, 'Level ' + this.level);
    if(this.level > 5) {
        this.message = null;
    }
    
    setTimeout(function() {
        this.message = '';
    }.bind(this), 2000)
};


Game.prototype.startLoop = function() {




    var handleKeyDown = function(event) {  /* PREGUNTAR */

        if  (event.key === 'ArrowLeft') {
            this.bottle.setDirection(-1);
            
        } else if (event.key === 'ArrowRight') {
            this.bottle.setDirection(1);
            
        }
        this.bottle.x += this.bottle.speed * this.bottle.direction;
    }.bind(this);

    document.addEventListener('keydown', handleKeyDown);  /* PREGUNTAR */

    

    // Digo que para cada nivel hay 30 segundos para pasar al siguiente nivel, si no Game Over.

    var timeOutId = setTimeout(function(){
        this.finishGame()
    }.bind(this),30000)

    if(this.level === 2) {
        clearTimeOut(timeOutId);
        timeOutId = setTimeout(function(){
            this.finishGame()
        }.bind(this),10000)
    }
    if(this.level === 3) {
        clearTimeOut(timeOutId);
        timeOutId = setTimeout(function(){
            this.finishGame()
        }.bind(this),10000)
    }
    if(this.level === 4) {
        clearTimeOut(timeOutId);
        timeOutId = setTimeout(function(){
            this.finishGame()
        }.bind(this),10000)
    }
    if(this.level === 5) {
        clearTimeOut(timeOutId);
        timeOutId = setTimeout(function(){
            this.finishGame()
        }.bind(this),10000)
    }



    var loop = function() {

        // Aumento de velocidad gotas (drops), cada next level.

        if(this.level === 1) {
            if (Math.random() > 0.98) {
                this.drops.push(new Drop(this.canvasElement, 5));
            }
        }
        if(this.level === 2) {
            if (Math.random() > 0.97) {
                this.drops.push(new Drop(this.canvasElement, 10));
            }
        }
        if(this.level === 3) {
            if (Math.random() > 0.97) {
                this.drops.push(new Drop(this.canvasElement, 15));
            }
        }
        if(this.level === 4) {
            if (Math.random() > 0.97) {
                this.drops.push(new Drop(this.canvasElement, 20));
            }
        }
        if(this.level === 5) {
            if (Math.random() > 0.97) {
                this.drops.push(new Drop(this.canvasElement, 25));
            }
        }
        if(this.level > 5) {
            this.finishGame();
        }


        // Digo que cuando la botella se llene hasta la altura 65, paso al siguiente nivel.

        if (this.bottle.height === 65) {
                this.bottle = new Bottle (this.canvasElement);  
                this.level ++;
                this.mensajeNivel();
            }
        
            

        this.checkAllCollisions();
        this.updateAll();
        this.clearAll();
        this.drawAll();
        
        

        if (!this.gameIsOver) {
            requestAnimationFrame(loop);

        }


    }.bind(this);

    loop();
};


/* Tengo que tener hasta aquí para que me funcione las 3 screens (Splash Screen/Game Screen/Game Over Screen), y a partir de ahora, ya empiezo 
   ha hacer las animaciones, objetos (player=bottle & enemies=drops) y draw. */

   Game.prototype.updateAll = function() {
       this.bottle.update();
       this.drops.forEach(function(drop) {
           drop.update();
       })

   }

   Game.prototype.clearAll = function() {
       this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height); 

       this.drops = this.drops.filter(function(drop) {
           return drop.isInCanvas();
       });
   }

   Game.prototype.drawAll = function() {
       this.bottle.draw();
       this.drops.forEach(function(drop) {
           drop.draw();
       })
       if (this.message) {
           this.message.draw();
       } 
   }
  
   Game.prototype.checkAllCollisions = function() {
       this.drops.forEach(function(drop, index) {
           if (this.bottle.collidesWithDrop(drop)) {
               //this.bottle.lives--;
               //this.lostLive(this.bottle.lives);
               this.drops.splice(index, 1);
               this.bottle.fill();

               if (!this.bottle.lives) {
                   this.finishGame();
               }
           }
       }.bind(this));
   }


   /* Tengo que tener esto ultimo para que me funcione las 3 screens (Splash Screen/Game Screen/Game Over Screen), y anterior a esto es decir en medio
      estarán las animaciones, objetos (player=bottle & enemies=drops) y draw. */

   Game.prototype.onGameOverCallback = function(callback) {
        this.gameOverCallback = callback;
   }

   Game.prototype.onLiveLost = function(callback) {
        this.lostLive = callback;
   }

   Game.prototype.finishGame = function() {
    this.gameIsOver = true;   
    this.gameOverCallback();
   }
   