
let countX = 5;
let countY = 5;
let bit = 2;
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function draw() {
  resizeCanvas(windowWidth, windowHeight)
  background(220);
  
  circle(500 + countX, 500 + countY, 20)
  countX = 100 * sin(bit/50);
  countY = 100 * cos(bit/50);
  bit++;

  dsfsd


}

/*class Star{
  constructor(size, brightness, elliptoid, tint, blur)


}
*/
function star(){


}
