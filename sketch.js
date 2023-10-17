
let xLim = 600, yLim = 400; // canvas size
let raqWidth = 5, raqHeight = 80, raqVelocity = 8;
let xBall = 100, yBall = 100, xRaq = 5, yRaq = yLim / 2 - raqHeight / 2;

let ballRadius = 10, ballDiam = ballRadius * 2, xVelocity = 5, yVelocity = 6;


function setup() {
  createCanvas(xLim, yLim);
}

function draw() {
  background(0);
  circle(xBall,yBall,ballDiam);
  rect(xRaq, yRaq, raqWidth, raqHeight);
  moveBall();
  moveRaq();
  checkBorders();
  checkColision();
  
}

function moveBall() {
  xBall += xVelocity;
  yBall += yVelocity;
}

function checkBorders() {
  if (xBall > xLim - ballRadius || xBall < ballRadius){
    xVelocity *= -1;
  }
  if (yBall > yLim - ballRadius || yBall < ballRadius){
    yVelocity *= -1;
  }
}

function moveRaq(){
  if (keyIsDown(UP_ARROW) && yRaq > 0) {
    yRaq -= raqVelocity;
  }

  if (keyIsDown(DOWN_ARROW) && yRaq < yLim - raqHeight) {
    yRaq += raqVelocity;
  }
}

function checkColision(){
  if (xBall - ballRadius < xRaq + raqWidth &&
    yBall - ballRadius < yRaq + raqHeight &&
    yBall + ballRadius> yRaq){
    xVelocity *= -1
  }
}