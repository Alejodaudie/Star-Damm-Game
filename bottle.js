'use strict'

function Bottle(canvasElement) {
    this.canvasElement = canvasElement;
    this.ctx = this.canvasElement.getContext('2d');
    this.bottleWidth = 37;
    this.bottleHeight = 100;
    this.width = 30;
    this.height = 30;
    this.x = this.canvasElement.width / 2;
    this.y = this.canvasElement.height;
    this.lives = 5;
    this.speed = 7;
    this.direction = 0;
    this.collisionCanvas = false;
    this.image = new Image();
    this.image.src = './Imagenes/bottle-ok.png'
    
}

Bottle.prototype.draw = function() {

this.ctx.fillStyle = 'yellow';
this.ctx.fillRect(this.x - 15, this.y - this.height, this.width, this.height);
this.ctx.drawImage(this.image, this.x - this.bottleWidth / 2, this.y - this.bottleHeight, this.bottleWidth, this.bottleHeight)

}


Bottle.prototype.setDirection = function(direction) {
    if (!this.collisionCanvas) {
        this.direction = direction;   
    }

}

Bottle.prototype.update = function() {
    this.collisionCanvas = false;
    if (this.x <= this.bottleWidth / 2) {
        this.setDirection(1);
        this.collisionCanvas = true;
    }

    if (this.x >= this.canvasElement.width - this.bottleWidth / 2) {
        this.setDirection(-1);
        this.collisionCanvas = true;
    }

    if (!this.collisionCanvas) {
        this.x += this.speed * this.direction;
    }
}

Bottle.prototype.collidesWithDrop = function(drop) {

    var collidesTop = drop.y + drop.size >= this.y - this.bottleHeight;
    var collidesLeft = this.x < drop.x + drop.size;
    var collidesRight = this.x + this.width >= drop.x;
    

    return collidesRight && collidesTop && collidesLeft
    
}

Bottle.prototype.fill = function() {
    if(this.height < 65) {
        this.height += 5;
    }
}

