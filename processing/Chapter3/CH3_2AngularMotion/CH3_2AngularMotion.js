let angle = 0;
let angleV = 0;
let angleA = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(24);
  textSize(24);
  angleMode(RADIANS);
}

function draw() {
  
  angleV += angleA;
  angle += angleV;

  background(24);
  noStroke();
  fill(240, 100, 160);
  rectMode(CENTER);


  translate(width/2, height/2)
  text("Acceleration: " + round(angleA*10000), -width/2.05, -height/2.1);
  text("Velocity: " + round(angleV*1000), -width/2.05, -height/2.25);
  rotate(angle);
  rect(0, 0, width/2.5, width/50);

  if (keyIsDown(DOWN_ARROW) || keyIsDown(LEFT_ARROW)) {
    angleA -= 0.00005;
  } else if (keyIsDown(UP_ARROW) || keyIsDown(RIGHT_ARROW)) {
    angleA += 0.00005;
  } else {
    if (angleV > 0.001) {
        angleV -= 0.002;
        
    } else if (angleV < -0.001) {
        angleV += 0.002;
        
    } else {
        angleV = 0;
        fill(255);
    }
    angleA = 0;
    
  }



}
