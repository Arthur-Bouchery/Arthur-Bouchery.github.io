const Grid = require("./Grid");
class Entity extends Grid {
 
  constructor(Parent, Height, Width, Mass, PosX, PosY, RotZ) {
    if (this.constructor === Entity) {
      throw new TypeError('Abstract class "Entity" cannot be instantiated directly');
    }
    super(Height, Width);
    this.mass = Mass;
    this.posX = PosX;
    this.posY = PosY;
    this.rotZ = RotZ;
    this.vectorX = 0; //pixel/s
    this.vectorY = 0; //pixel/s
    this.momentumZ = 0; //angle/s
    this.parentGrid = parent;
    thid.parentGrid.appendChild(this);
    this.children = new Array();
  }

  drop(child){//optimiser
    for (let i = 0; i<this.children.length; i++){
      if(child===this.children[i]){
        this.children.remove(child);
        if(this.parentGrid){
          child.setPos(this.posX,this.posY);
          this.parentGrid.add(child);
        }
      }
    }
  }

  appendChild(child){
    this.children.add(child);
  }
 
  render(ctx){//revoir la récursivité de cette fonction
    ctx.beginPath();
    ctx.fillStyle = 'rgb(100,90,100)';
    //rotation centrée
    ctx.translate(this.posX+this.width/2,this.posY+this.height/2);
    ctx.rotate(this.rotZ*Math.PI/180);
    ctx.translate(-this.posX-this.width/2,-this.posY-this.height/2);
    
    if(!this.parentGrid){
      ctx.rect(this.posX,this.posY,this.height,this.width);
    }else{
      ctx.rect(this.posX+this.parentGrid.posX,this.posY+this.parentGrid.posY,this.height,this.width);
    }
    
    
    if(this.parentGrid && this.parentGrid===Entity){
      ctx.translate(this.parentGrid.width/2,this.parentGrid.height/2);
      ctx.rotate(this.parentGrid.rotZ*Math.PI*180);
      ctx.translate(-this.parentGrid.width/2,-this.parentGrid.height/2);
    }
    ctx.fill();
    ctx.closePath();
    if(this.children.length>0){
      for(let i=0;i<this.children.length;i++){
        this.children[i].render(ctx);
      }
    }
  }
  
  //int elapsedTime in millisec
  refreshPos(elapsedTime) {
    this.posX=this.posX+(elapsedTime/1000)*this.vectorX;
    this.posY=this.posY+(elapsedTime/1000)*this.vectorY;
    this.rotZ=(this.rotZ+(elapsedTime/1000)*this.momentumZ)%360;
  }

  setPos(x,y){
    this.posX=x;
    this.posY=y;
    //this.rotZ=z;
  }
}
