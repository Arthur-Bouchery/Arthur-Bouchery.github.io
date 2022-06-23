    class Thruster extends Entity {
    constructor(parent, size, posX, posY, rotZ){
        mass=size*100;
        width=2+2*size;
        height=4+2*size;
        super(parent, height, width, mass, posX, posY, rotZ);
        this.thrust=1000*size; //i need to redo the whole physics handling
        this.active=false;
        this.killed=false;
    }

    thrust(percentage){
        if(this.parentGrid==null) return -1;
        //origin (aka x=0 y=0) is top/left of the shape according to the ctx canvas
        //but center of rotation is ship's center aka height/2 and width/2
        let m = this.parentGrid.getMass();
        let a = this.rotZ*Math.PI/180;
        let f = (percentage/100)*this.thrust;

        //first try to adapt those forces to the center of mass (center of the ship atm)
        let comp1 = f*Math.cos(a);//mouvement
        let comp2 = f*Math.sin(a);//moment

        let r = Math.sqrt(Math.abs(this.posX-this.parentGrid.width/2)^2+Math.abs(this.posY-this.parentGrid.height/2)^2);

        let newVX = comp1*(this.posX-this.parentGrid.width)/mass;
        let newVY = comp1*(this.posY-this.parentGrid.height)/mass;
        let newZ = comp2*r/(mass*this.parentGrid.height/2);

        //appel à la fonction qui applique ces forces
        this.parentGrid.relativeThrust(newVX, newVY, newZ)
    }
}
