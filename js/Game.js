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
    var ctx = canvas.getcontext('2d');
    console.log(canvas.width+" "+canvas.height);
    var grid = new Grid(canvas.width, canvas.height);
    var instance = new Game(Grid);
    var starter = Ship.getStarter();
    instance.addElement(starter);
    this.startTime = Date.now();
    console.log(this.startTime);
    this.started = true;
    setInterval(this.render(ctx),50);
  }
  addElement(e){
    this.elements.push(e);
  }
  render(ctx){
    
    this.gameGrid.render(ctx);
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
