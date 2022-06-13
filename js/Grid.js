class Grid{
  constructor(height, width){
    if (this.constructor === Grid) {
      throw new TypeError('Abstract class "Grid" cannot be instantiated directly');
    }
    this.width=width;
    this.height=height;
    this.children = new Array();
  }

  appendChild(child){
    this.children.push(child);
  }
}
