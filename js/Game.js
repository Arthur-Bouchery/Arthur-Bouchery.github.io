class Game{
  constructor(gameGrid){
    this.gameGrid = gameGrid;
    this.startTime = null;
    this.simulationTime = 0;
    this.lastFrameTime = 0;
    this.started = false;
  }
  static start(){
    this.startTime = Date.getTime();
    console.log(this.startTime);
    setInterval(33)
  }
  Render(){
    var canvas = document.getElementById("gameView");
    var ctx = canvas.getcontext('2d');
    this.gameGrid.render(ctx);
  }
  getTime(){
    if(started){
      return Date.getTime()-this.startTime;
    }else{
      console.log("not started yet");
    }
  }
}
