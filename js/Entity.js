class Entity extends Grid {
 
  constructor(Height, Width, Mass, PosX, PosY, RotZ) {
    if (this.constructor === Entity) {
      throw new TypeError('Abstract class "Entity" cannot be instantiated directly');
    }
    super(Height, Width);
    this.Mass = Mass;
    this.PosX = PosX;
    this.PosY = PosY;
    this.RotZ = RotZ;
    this.vectorX = 0; //pixel/s
    this.vectorY = 0; //pixel/s
    this.momentumZ = 0; //angle/s
    this.parentGrid = new Array();
  }
 
  function render(ctx){
    ctx.fillStyle = 'rgb(100,90,100)';
    ctx.fillRect
  }
  
  //int elapsedTime in millisec
  function refreshPos(elapsedTime) {
    this.PosX=this.PosX+(elapsedTime/1000)*this.vectorX;
    this.PosY=this.PosY+(elapsedTime/1000)*this.vectorY;
    this.RotZ=(this.RotZ+(elapsedTime/1000)*this.momentumZ)%360;
  }
}
