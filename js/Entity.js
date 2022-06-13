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
    this.parentGrid = null;
    if(Parent!=null){this.setParent(Parent)};
  }

  setParent(p){
    this.parentGrid = p;
    this.parentGrid.appendChild(p);
  }

  drop(child){//optimiser
    for (let i = 0; i<this.children.length; i++){
      if(child===this.children[i]){
        this.children.remove(child);
        if(this.parentGrid){
          child.setPos(this.posX,this.posY);
          this.parentGrid.appendChild(child);
        }
      }
    }
  }
 
  render(ctx){//revoir la récursivité de cette fonction
    //reset ctx position if no parent
    let x = this.posX; 
    let y = this.posY;
    if(this.parentGrid){
      x = x+this.parentGrid.posX; 
      y = y+this.parentGrid.posY;
    }else{
      ctx.setTransform(1,0,0,1,0,0);
    }
   
    //rotation centrée
    ctx.translate(this.posX+this.width/2,this.posY+this.height/2);
    ctx.rotate(this.rotZ*Math.PI/180);
    ctx.translate(-this.posX-this.width/2,-this.posY-this.height/2);
    
    //dessin
    ctx.fillStyle = 'rgb(100,90,100)';
    ctx.fillRect(x,y,this.width,this.height);
    //rendu des entitées contenues dans l'entité
    if(this.children){
      for(let i=0;i<this.children.length;i++){
        if(this.children[i]!=null){
          this.children[i].render(ctx);
        }
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
