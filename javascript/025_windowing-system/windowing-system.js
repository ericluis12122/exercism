export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position()
  }

  resize(newSize) {
    this.size.width = newSize.width
    this.size.height = newSize.height
    if(newSize.width < 1)
      this.size.width = 1;
    if(newSize.height < 1)
      this.size.height = 1;
    if(newSize.width + this.position.x > this.screenSize.width)
      this.size.width = this.screenSize.width - this.position.x;
    if(newSize.height + this.position.y > this.screenSize.height)
      this.size.height = this.screenSize.height - this.position.y;
  }

  move(newPosition) {
    this.position.x = newPosition.x
    this.position.y = newPosition.y
    if(newPosition.x < 0)
      this.position.x = 0;
    if(newPosition.y < 0)
      this.position.y = 0;
    if(newPosition.x + this.size.width > this.screenSize.width)
      this.position.x = this.screenSize.width - this.size.width;
    if(newPosition.y + this.size.height > this.screenSize.height)
      this.position.y = this.screenSize.height - this.size.height;
  }
}

export function changeWindow(programWindow) {
    programWindow.size.width = 400;
    programWindow.size.height = 300;
    programWindow.position.x = 100;
    programWindow.position.y = 150;
    return programWindow;
  }