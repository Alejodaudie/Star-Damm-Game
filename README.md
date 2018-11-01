# Star Damm Game


## Description

Star Damm is a game where the player will try to fill the beer drops inside the bottle (thanks to the movement of the beer bottle), creating the magnificent Estrella Damm beer that we drink every day and that we like so much. Each time you pass to the next levels (fill the bottle beer to the top), the beer drops will go faster. There's no losing condition but the winning condition is: get to the farthest level.


## MVP (DOM - CANVAS)

CANVAS - The MVP version will be the first level of the game: a player (beer bottle) and the enemies (beer drops).


## Backlog

- Add score
- Add time
- Add level
- Add username
- Storage HighScore Star Damm Players
- Design
- Logo
- Music
- Levels (with differents beer drops speeds)
- Mobile version


## Data structure

### game.js

```
Game(){
  this.canvas;
  this.ctx;
this.bottle;
this.drops [ ]

}

Game.prototype.startGame(){
}

Game.prototype.startLoop(){
  loop()
}

Game.prototype.updateAll(){
}

Game.prototype.clearAll(){
}

Game.prototype.drawAll(){
}

Game.prototype.checkAllCollisons(){
}

Game.prototype.finishGameCallback(){
}
```


### bottle.js

```
Bottle (canvas ) {
  this.x
  this.y
  this.direction 0
  this.size
  this.speed
  this.canvas
  this.ctx
  this.bottleHeight
}

Bottle.prototype.setDirection()
Bottle.prototype.collidesWithEnemies() 
Bottle.prototype.update()
Bottle.prototype.draw()
```


### drops.js  (enemies)

```
Drops (canvas ) {
  this.x
  this.y
  this.direction 0
  this.size
  this.speed
  this.canvas
  this.ctx
}

Drops.prototype.update()
Drops.prototype.draw()
Drops.prototype.isInScreen()
```


## States y States Transitions

Definition of the different states and their transition (transition functions)

```
- splashScreen()
  - destroyGameOver(if)
  - buildSplash()
  - addEventListener(startGame)
  
  
- starGame()
  - destroySplash()
  - destroyGameOver()
  - create new Game()
  - game.start()
  
  
- gameOver()
  - destroyGame()
  - buildGameOver()
  - addEventListener( if splashScreen, else starGame)
```


## Task

- Repo/GIT
- Create files
- Main - buildDom
- Main - buildSplash
- Main - addEventListener
- Main - destroySplash
- Game - buildDom
- Game - TimeOut test
- Main - GameOver
- Main - destroy Game
- Main - GameOver RESTART
- Main - removeGameOver
- Game - addEventListener
- Game - loop
- Game - create bottle
- Bottle (player) - create
- Bottle (player) - directions
- Game - clear
- Game - create drops
- Drops - create
- Game - enemies (drops) position
- Drops - check if still in screen
- Game - collision + remove
- Game - gameOver


## Links

### Trello

Link url

## Git

URls for the project repo and deploy 
[Link Repo](https://github.com/Alejodaudie/Star-Damm-Game)
[Link Deploy]()

## Slides

URls for the project presentation (slides) 
[Link Slides.com](http://slides.com)
