class Entity extends Grid {
 
  constructor(Parent, Height, Width, Mass, PosX, PosY, RotZ) {
    super(Height, Width);
    if (this.constructor === Entity) {
      throw new TypeError('Abstract class "Entity" cannot be instantiated directly');
    }
    this.mass = Mass;
    this.posX = PosX;//positions relatives à la "grille" parent
    this.posY = PosY;//
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
    //reset ctx position if no parent
    if(!this.parentGrid){
      ctx.setTransform(1,0,0,1,0,0);
      let x = this.posX; 
      let y = this.posY;
    }else{
      let x = this.posX+this.parentGrid.posX; 
      let y = this.posY+this.parentGrid.posY;
    }
    ctx.fillStyle = 'rgb(100,90,100)';
   
    //rotation centrée
    ctx.translate(this.posX+this.width/2,this.posY+this.height/2);
    ctx.rotate(this.rotZ*Math.PI/180);
    ctx.translate(-this.posX-this.width/2,-this.posY-this.height/2);
    
    //dessin
    ctx.fillRect(x,y,this.height,this.width);
    //rendu des entitées contenues dans l'entité
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
