function main(){
  firstStep(); 
  lineGo();
  lineGo();
  lineGo();
}

function firstStep(){
  putBeeper();
  move();
  turnLeft();
  move();
  putBeeper();
   }

function lineGo(){
  
  turnRight();
  move();
  turnLeft();
  move();
 putBeeper();
   }
