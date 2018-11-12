'use strict';

function Drop (canvasElement, speed) {
  this.size = 40;
  this.canvasElement = canvasElement;
  this.ctx = this.canvasElement.getContext('2d');
  this.x = this.canvasElement.width * Math.random();
  this.y = 0 - this.size;
  this.speed = speed;
  this.image = new Image();
  this.image.src = './Imagenes/drops/drop-2.png';
}

Drop.prototype.update = function () {
  this.y = this.y + this.speed;
};

Drop.prototype.draw = function () {
  this.ctx.drawImage(this.image, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
};

Drop.prototype.isInCanvas = function () {
  return this.canvasElement.height > this.y;
};
