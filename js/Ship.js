class Ship extends Entity{//refactor ship factory
  constructor(Name, hardpoints = null, weapons = null, shields = null, Parent, Height, Width, Mass, PosX, PosY, RotZ) {
    super(Parent, Height, Width, Mass, PosX, PosY, RotZ);
    this.name= Name;
    this.hardpoints = hardpoints;
    this.weapons = weapons; 
    this.children= this.children.concat(weapons);
    this.shields = shields;
    setInterval(console.log(this.name+"coordinates : "+this.posX+" "+this.posY), 1000);
  }
  static getStarter(Grid, x, y){
    return new Ship("Starter", null, null, null, Grid, 100, 30, 50000, x, y, 0);
  }
  render(ctx){
    super.render(ctx);
  }
}
