class Game{
  constructor(){
    this.startTime = 0;
    this.simulationTime = 0;
    this.lastFrameTime = 0;
    this.started = false;
    this.playerShip=null;
    this.elements = new Array();
  }
  static start(){
    //récupération du canvas
    const canvas = document.getElementById("gameView");
    var ctx = canvas.getContext('2d');
    //ctx.fillRect(50,50,100,30);
    console.log(canvas.width+" "+canvas.height);

    //création des éléments du jeu
    var instance = new Game();
    var starter = Ship.getStarter(70,70);
    instance.addElement(starter);
    instance.playerShip=starter;

    //mise en place des écouteurs d'évènements
    // Add event listener on keydown
    document.addEventListener('keydown', (event) => {
      var name = event.key;
      var code = event.code;
      // Console.log the key name and key code on keydown
      console.log(`Key pressed ${name} \r\n Key code value: ${code}`);
      if(name=="z"){instance.playerShip.relativeThrust(0,-1,0);};
      if(name=="s"){instance.playerShip.relativeThrust(0,1,0);};
      if(name=="q"){instance.playerShip.relativeThrust(-1,0,0);};
      if(name=="d"){instance.playerShip.relativeThrust(1,0,0);};
      if(name=="a"){instance.playerShip.move(0,0,-1);};
      if(name=="e"){instance.playerShip.move(0,0,1);};
    }, false);

    //démarrage du rendu
    let targetFrameTime = 17;
    instance.startTime = window.performance.now();
    console.log(instance);
    console.log(instance.startTime);
    instance.started = true;
    setInterval(
      function () {
        instance.render(ctx, targetFrameTime);
        let nb=0;
        document.getElementById("frames").innerText="frames : "+nb;
        nb++;
        document.getElementById("fTime").innerText="frame time(ms) : "+instance.lastFrameTime;
        document.getElementById("ship").innerText="ship status : \n ship: "+instance.playerShip.name+"\n position"+instance.playerShip.posX+" "+instance.playerShip.posY+" "+instance.playerShip.rotZ+"\n vector x y"+instance.playerShip.vectorX+" "+instance.playerShip.vectorY;
      }
      ,targetFrameTime
    );
  }
   
  addElement(e){
    this.elements.push(e);
  }
  render(ctx, t){
    //erase last frame
    ctx.clearRect(-600,-600,600,600);
    //render
    let frameStart = window.performance.now();
    let nb=0;
    for(let i = 0; i<this.elements.length; i++){
      this.elements[i].refreshPos(t);
      this.elements[i].render(ctx);
    }
    this.lastFrameTime=window.performance.now()-frameStart;
    //console.log("frameTime (ms) : "+this.lastFrameTime);
  }
  getTime(){
    if(started){
      let temp = window.performance.now()-this.startTime;
      console.log("game Time : "+temp);
      return temp;
    }else{
      console.log("not started yet");
    }
  }
}
