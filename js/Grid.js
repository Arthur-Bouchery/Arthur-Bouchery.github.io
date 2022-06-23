class Grid{
  constructor(height, width){
    if (this.constructor === Grid) {
      throw new TypeError('Abstract class "Grid" cannot be instantiated directly');
    }
    this.width=width;
    this.height=height;
    this.children = new Array();
  }

  setParent(p){
    this.parentGrid = p;
    this.parentGrid.appendChild(this);
  }
  
  appendChild(child){
    this.children.push(child);
  }
}
