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
    console.log(canvas.width+" "+canvas.height);
    var instance = new Game(Grid);
    var starter = Ship.getStarter();
    instance.addElement(starter);
    instance.startTime = Date.now();
    console.log(this.startTime);
    instance.started = true;
    setInterval(
      function () {
        instance.render(ctx);
      }
      ,50
    );
  }
  addElement(e){
    this.elements.push(e);
  }
  render(ctx){
    let frameStart = Date.now();
    for(let i = 0; i<this.elements.length; i++){
      let e = this.elements[i];
      e.render(ctx);
      e.refreshPos(frameStart-this.lastFrameTime);
    }
    console.log("frameTime (ms) : "+(Date.now()-this.lastFrameTime));
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
