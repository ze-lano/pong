
let xLim = 600, yLim = 400; // canvas size
let rWidth = 5, rHeight = 80, rVelocity = 8;      //playes 1
let r2Width = 5, r2Height = 80, r2Velocity = 0;      //player 2
let xBall = xLim/2, yBall = yLim/2;
let xR1 = 5, yR1 = yLim / 2 - rHeight / 2, xR2 = xLim - xR1 - rWidth, yR2 = yR1;
let p1Points = 0, p2Points = 0;

let bRadius = 10, bDiam = bRadius * 2, xVelocity = 5, yVelocity = 6;


function setup() {
  createCanvas(xLim, yLim);
}

function draw() {
  background(0);
  circle(xBall,yBall,bDiam);
  drawPlayer(xR1, yR1);
  moveBall();
  updateP2();
  moveR1();
  checkColision();
  checkBorders();
  goal();
  showPoints();
  
}

function drawPlayer(x,y){
  rect(x, y, rWidth, rHeight);
}

function updateP2(){
  r2Velocity = yBall - yR2 - rHeight / 2 - 45;
  yR2 += r2Velocity
  yR2 = constrain(yR2, 0, yLim - r2Height)
  
  drawPlayer(xR2, yR2);
}
function moveBall() {
  xBall += xVelocity;
  yBall += yVelocity;
}

function checkBorders() {
  if (xBall > xLim - bRadius || xBall < bRadius){
    xVelocity *= -1;
  }
  if (yBall > yLim - bRadius || yBall < bRadius){
    yVelocity *= -1;
  }
}

function moveR1(){
  if (keyIsDown(UP_ARROW) ) {
    yR1 -= rVelocity;
  }

  if (keyIsDown(DOWN_ARROW) ) {
    yR1 += rVelocity;
  }
  yR1 = constrain (yR1, 0, yLim - rHeight)
}

function checkColision(){
  // check collision with player 1
  if (xBall - bRadius < xR1 + rWidth &&
    yBall - bRadius < yR1 + rHeight &&
    yBall + bRadius> yR1){
    xVelocity *= -1
  }
  // check collision with player 2
  if (xBall + bRadius > xR2  &&
    yBall - bRadius < yR2 + rHeight  &&
    yBall + bRadius > yR2){
    xVelocity *= -1
  }

}

function goal (){
  if (xBall + bRadius > xLim) {
    p1Points +=  1
    xBall = xLim/2;
    yBall = yLim/2;
  }
  if (xBall - bRadius < 0) {
    p2Points += 1
    xBall = xLim/2;
    yBall = yLim/2;

  } 
}

function showPoints(){
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(p1Points, xLim / 2 - 30, 30);
  text(p2Points, xLim / 2 + 30, 30);

}


