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
  }
  Render(){
    this.gameGrid.render();
  }
  getTime(){
    if(started){
      return Date.getTime()-this.startTime;
    }else{
      console.log("not started yet");
    }
  }
}
