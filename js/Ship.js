class Ship extends Entity{//refactor ship factory
  constructor(Name, hardpoints, weapons, shields, Parent, Height, Width, Mass, PosX, PosY, RotZ) {
    super(Parent, Height, Width, Mass, PosX, PosY, RotZ);
    this.name= Name;
    this.hardpoints = hardpoints;
    this.weapons = weapons; 
    this.children= this.children.concat(weapons);
    this.shields = shields;
  }
  function render(ctx){
    super(ctx);
  }
}
