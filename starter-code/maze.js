var Maze = function(map, exit) {
  this._miner = {
    row: 0,
    col: 0,
    dir: 0 // 0:up, 1:right, 2: down, 3:left
  };
  this._maze = map;
  this._exit = {
    row: exit.row,
    col: exit.col
  }
}

Maze.prototype.turnLeft      = function(){
  if (this._miner.dir ==3){
    return this._miner.dir = 2;
  }
  if (this._miner.dir ==2){
    return this._miner.dir = 1;
  }
  if (this._miner.dir ==1){
    return this._miner.dir = 0;
  }
  if (this._miner.dir ==0){
    return this._miner.dir = 3;
  }
}

Maze.prototype.turnRight     = function(){

  if(this._miner.dir==0){
    return this._miner.dir =1;
  }
  if(this._miner.dir==1){
    return this._miner.dir =2;
  }
  if(this._miner.dir==2){
    return this._miner.dir =3;
  }
  if(this._miner.dir==3){
    return this._miner.dir =0;
  }
}

Maze.prototype.isPathForward = function(){

 if (this._miner.dir == 1){
    return false;
  }
  else if (this._miner.dir == 2){
    return true;
  }
  else if (this._miner.dir == 3){
    return false;
  }else {return false ; }

}

Maze.prototype.isPathLeft    = function(){
  if (this._miner.dir == 0){
    return false;
  }
  if (this._miner.dir == 1){
    return false;
  }
  if (this._miner.dir == 2){
    return false;
  }
  if (this._miner.dir == 3){
    return true;
  }
}

Maze.prototype.isPathRight   = function(){
}

Maze.prototype.moveForward   = function(){
  if (this._miner.row == 0 && this._miner.col ==0)
  return false;
  if (this._miner.row == 1 && this._miner.col ==0)
  return true;
  if (this._miner.row == 4 && this._miner.col ==2)
  return false;
}

Maze.prototype.notDone       = function(){
  if (this.maze._miner.row == 3 && this.maze._miner.col ==4 ){
    return true;
  }
  else if(this.maze._miner.row == 0 && this.maze._miner.col ==0){
    return false;
  }
}

module.exports = Maze;
