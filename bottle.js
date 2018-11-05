'use strict'

function Bottle(canvasElement) {
    this.canvasElement = canvasElement;
    this.ctx = this.canvasElement.getContext('2d');
    this.size = 50;
    this.x = this.canvasElement.width / 2;
    this.y = this.canvasElement.height;
    this.lives = 3;
    this.speed = 5;
    this.direction = 0;
    this.collisionCanvas = false;
    
}

Bottle.prototype.draw = function() {
    this.ctx.fillRect(this.x - this.size / 2, this.y - this.size, this.size, this.size)
}

Bottle.prototype.setDirection = function(direction) {
    if (!this.collisionCanvas) {
        this.direction = direction;   
    }

}

Bottle.prototype.update = function() {
    this.collisionCanvas = false;
    if (this.x <= this.size / 2) {
        this.setDirection(1);
        this.collisionCanvas = true;
    }

    if (this.x >= this.canvasElement.width - this.size / 2) {
        this.setDirection(-1);
        this.collisionCanvas = true;
    }

    if (!this.collisionCanvas) {
        this.x += this.speed * this.direction;
    }
}

Bottle.prototype.collidesWithDrop = function(drop) {

    var collidesTop = drop.y <= this.y + this.size;
    var collidesBottom = drop.y + drop.size >= this.y;
    var collidesRight = drop.x <= this.x + this.size;

    return collidesRight && collidesBottom && collidesTop;
    
}