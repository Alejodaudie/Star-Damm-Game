'use strict'

function Drop(canvasElement) {
    this.size = 40;
    this.canvasElement = canvasElement;
    this.ctx = this.canvasElement.getContext('2d');
    this.x = this.canvasElement.width + 50;
    this.y = Math.floor(Math.random() * this.canvasElement.height);
}

Drop.prototype.update = function() {
    this.x -= 5;
}

Drop.prototype.draw = function() {
    this.ctx.fillRect(this.x, this.y - this.size / 2, this.size, this.size)
}

Drop.prototype.isInCanvas = function() {
    return this.x > -this.size;
}