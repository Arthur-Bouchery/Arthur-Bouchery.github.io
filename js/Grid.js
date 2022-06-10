class Grid{
  constructor(width, height){
    if (this.constructor === Grid) {
      throw new TypeError('Abstract class "Grid" cannot be instantiated directly');
    }
    this.width=width;
    this.height=height;
  }
}
