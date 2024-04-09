let angle = 0;
let angleV = 0;
let angleA = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(24);
  textSize(24);
}

function draw() {
  
  angleV += angleA;
  angle += angleV;

  background(24);
  noStroke();
  fill(240, 100, 160);
  rectMode(CENTER);
  


  translate(width/2, height/2)
  text(angleA, -width/2.1, -height/2.1);
  rotate(angle);
  rect(0, 0, width/3, width/50);

  if (keyIsDown(DOWN_ARROW) || keyIsDown(LEFT_ARROW)) {
    angleA -= 0.000005;
  } else if (keyIsDown(UP_ARROW) || keyIsDown(RIGHT_ARROW)) {
    angleA += 0.000005;
  } else {
    if (angleV > 0) {
        angleV -= 0.0002;
        angleA = 0;
    } else {
        angleV += 0.0002;
        angleA = 0;
    }
    
  }



}
