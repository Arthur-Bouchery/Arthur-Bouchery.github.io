class Game{
  constructor(){
    this.startTime = 0;
    this.simulationTime = 0;
    this.lastFrameTime = 0;
    this.started = false;
    this.playerShip=null;
    this.elements = new Array();
    this.inputs = new Set();
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
      this.inputs.add(code);
      for(let i = 0; i<this.inputs.length; i++){
        switch (this.inputs[i]) {
          case "Numpad1":
            if(this.playerShip.children[1] && this.playerShip.children[1] === Thruster) this.playerShip.children[1].active = true;
            break;
          case "Numpad2":
            if(this.playerShip.children[2] && this.playerShip.children[2] === Thruster) this.playerShip.children[2].active = true;
            break;
          case "Numpad3":
            if(this.playerShip.children[3] && this.playerShip.children[3] === Thruster) this.playerShip.children[3].active = true;
            break;
          case "Numpad4":
            if(this.playerShip.children[4] && this.playerShip.children[4] === Thruster) this.playerShip.children[4].active = true;
            break;
          case "Numpad5":
            if(this.playerShip.children[5] && this.playerShip.children[5] === Thruster) this.playerShip.children[5].active = true;
            break;
          case "Numpad6":
            if(this.playerShip.children[6] && this.playerShip.children[6] === Thruster) this.playerShip.children[6].active = true;
            break;
          case "Numpad7":
            if(this.playerShip.children[7] && this.playerShip.children[7] === Thruster) this.playerShip.children[7].active = true;
          break;
          case "Numpad8":
            if(this.playerShip.children[8] && this.playerShip.children[8] === Thruster) this.playerShip.children[8].active = true;
          break;
          case "Numpad9":
            if(this.playerShip.children[9] && this.playerShip.children[9] === Thruster) this.playerShip.children[9].active = true;
            break;
          default:
            break;
        }
      }

    }, false);
    document.addEventListener('keyup', (event) => {
      var name = event.key;
      var code = event.code;
      // Console.log the key name and key code on keydown
      console.log(`Key released ${name} \r\n Key code value: ${code}`);
      this.inputs.splice(this.inputs.indexOf(code));
      for(let i = 0; i<this.inputs.length; i++){
        switch (this.inputs[i]) {
          case "Numpad1":
            if(this.playerShip.children[1] && this.playerShip.children[1] === Thruster) this.playerShip.children[1].active = false;
            break;
          case "Numpad2":
            if(this.playerShip.children[2] && this.playerShip.children[2] === Thruster) this.playerShip.children[2].active = false;
            break;
          case "Numpad3":
            if(this.playerShip.children[3] && this.playerShip.children[3] === Thruster) this.playerShip.children[3].active = false;
            break;
          case "Numpad4":
            if(this.playerShip.children[4] && this.playerShip.children[4] === Thruster) this.playerShip.children[4].active = false;
            break;
          case "Numpad5":
            if(this.playerShip.children[5] && this.playerShip.children[5] === Thruster) this.playerShip.children[5].active = false;
            break;
          case "Numpad6":
            if(this.playerShip.children[6] && this.playerShip.children[6] === Thruster) this.playerShip.children[6].active = false;
            break;
          case "Numpad7":
            if(this.playerShip.children[7] && this.playerShip.children[7] === Thruster) this.playerShip.children[7].active = false;
          break;
          case "Numpad8":
            if(this.playerShip.children[8] && this.playerShip.children[8] === Thruster) this.playerShip.children[8].active = false;
          break;
          case "Numpad9":
            if(this.playerShip.children[9] && this.playerShip.children[9] === Thruster) this.playerShip.children[9].active = false;
            break;
          default:
            break;
        }
      }
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
    ctx.clearRect(-60000,-60000,60000,60000);
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
