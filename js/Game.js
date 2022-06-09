class Game{
  constructor(gameGrid){
    this.gameGrid = gameGrid;
    this.startTime = null;
    this.simulationTime = 0;
    this.lastFrameTime = 0;
    this.started = false;
  }
  function start(){
    this.startTime = Date.getTime();
  }
  function Render(){
    this.gameWorld.render();
  }
  function getTime(){
    if(started){
      return Date.getTime()-this.startTime;
    }else{
      console.log("not started yet");
    }
  }
}
