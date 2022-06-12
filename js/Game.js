class Game{
  constructor(){
    this.startTime = 0;
    this.simulationTime = 0;
    this.lastFrameTime = 0;
    this.started = false;
    this.elements = new Array();
  }
  static start(){
    const canvas = document.getElementById("gameView");
    var ctx = canvas.getContext('2d');
    ctx.fillRect(50,50,100,30);
    console.log(canvas.width+" "+canvas.height);
    var instance = new Game();
    var starter = Ship.getStarter(70,70);
    instance.addElement(starter);
    instance.startTime = Date.now();
    console.log(instance);
    console.log(instance.startTime);
    instance.started = true;
    setInterval(
      function () {
        instance.render(ctx);
      }
      ,100
    );
  } 
  addElement(e){
    this.elements.push(e);
  }
  render(ctx){
    let frameStart = Date.now();
    let nb=0;
    for(let i = 0; i<this.elements.length; i++){
      let e = this.elements[i];
      e.refreshPos(frameStart-(this.lastFrameTime == 0 ? frameStart : this.lastFrameTime));
      e.render(ctx);
    }
    this.lastFrameTime=Date.now()-frameStart;
    console.log("frameTime (ms) : "+this.lastFrameTime);
  }
  getTime(){
    if(started){
      let temp = Date.now()-this.startTime;
      console.log("game Time : "+temp);
      return temp;
    }else{
      console.log("not started yet");
    }
  }
}
