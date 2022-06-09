class Grid{
  constructor(width, height){
    if (this.constructor === Entity) {
      throw new TypeError('Abstract class "Entity" cannot be instantiated directly');
    }
    this.width=width;
    this.height=height;
  }
}
