class Ship extends Entity{//refactor ship factory
  constructor(Name, hardpoints = null, weapons = null, shields = null, Parent, Height, Width, Mass, PosX, PosY, RotZ) {
    super(Parent, Height, Width, Mass, PosX, PosY, RotZ);
    this.name= Name;
    this.hardpoints = hardpoints;
    this.weapons = weapons; 
    this.children= this.children.concat(weapons);
    this.shields = shields;
    setInterval(console.log(this.name+"coordinates : "+this.posX+" "+this.posY), 100);
  }
  static getStarter(x, y){
    return new Ship("Starter", null, null, null, null, 100, 30, 50000, x, y, 0);
  }
  //apply movement considering ship's rotation
  relativeThrust(vX,vY,z){
    //origin (aka x=0 y=0) will be considered to be center of shape
    //angle=z*Math.PI/180; not implemented yet
    let a=this.rotZ*Math.PI/180;
    console.log(a);
    let newVX=vX*Math.cos(a)+vY*Math.sin(a);
    let newVY=vX*Math.sin(a)+vY*Math.cos(a);
    console.log(newVX+"         "+newVY+"   cos/sin: "+Math.cos(a)+" "+Math.sin(a));
    this.move(newVX,newVY,0);
  }
  move(vX,vY,mZ){
    this.vectorX+=vX;
    this.vectorY+=vY;
    this.momentumZ+=mZ;
  }
  render(ctx){
    super.render(ctx);
  }
}
