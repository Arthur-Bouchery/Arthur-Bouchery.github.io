class Game{
  constructor(){
    this.startTime = false;
    this.simulationTime = 0;
    this.lastFrameTime = 0;
    this.started = false;
    this.elements = new Array();
  }
  static start(){
    const canvas = document.getElementById("gameView");
    var Grid = new Grid(canvas.width, canvas.height);
    var instance = new Game(Grid);
    var starter = Ship.getStarter();
    instance.addElement(starter);
    this.startTime = Date.getTime();
    console.log(this.startTime);
    this.started = true;
    setInterval(this.render(),50);
  }
  addElement(e){
    this.elements.add(e);
  }
  render(){
    var ctx = this.gameGrid.getcontext('2d');
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
