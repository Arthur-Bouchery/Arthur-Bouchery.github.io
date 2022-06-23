class Ship extends Entity{//refactor ship factory
  constructor(Name, Parent, Height, Width, Mass, PosX, PosY, RotZ) {
    super(Parent, Height, Width, Mass, PosX, PosY, RotZ);
    this.name= Name;
    setInterval(console.log(this.name+"coordinates : "+this.posX+" "+this.posY), 100);
  }
  static getStarter(x, y){
    let starter = new Ship("Starter", null, 100, 30, 50000, x, y, 0);
    let t1 = new Thruster(starter,2,0,0,0);
    let t2 = new Thruster(starter,2,30,0,180);
    let t3 = new Thruster(starter,2,0,100,90);
    let t4 = new Thruster(starter,2,30,100,90);
    return starter;
  }

  refreshPos(elapsedTime){
    this.children.forEach(thruster => {
      if(thruster.active) thruster.thrust(100);
    });
  }

  //apply movement considering ship's rotation
  relativeThrust(vX,vY,z){
    //angle=z*Math.PI/180; not implemented yet
    let a=this.rotZ*Math.PI/180;
    console.log(a);
    let newVX=vX*Math.cos(a)-vY*Math.sin(a);
    let newVY=vX*Math.sin(a)+vY*Math.cos(a);
    console.log(newVX+"         "+newVY+"   cos/sin: "+Math.cos(a)+" "+Math.sin(a));
    this.move(newVX,newVY,z);
  }
  move(vX,vY,mZ){
    //speed capped at s pixel/s value
    let s = 10;
    this.vectorX = vX >= 0 ? this.vectorX+vX >=s ? s : this.vectorX+vX : this.vectorX+vX <= -s ? -s : this.vectorX+vX;
    this.vectorY = vY >= 0 ? this.vectorY+vY >=s ? s : this.vectorY+vY : this.vectorY+vY <= -s ? -s : this.vectorY+vY;
    this.momentumZ = mZ >=0 ? this.momentumZ+mZ >= 20 ? 20 : this.momentumZ+mZ : this.momentumZ+mZ <= -20 ? -20 : this.momentumZ+mZ;
  }
  render(ctx){
    super.render(ctx);
  }
}
