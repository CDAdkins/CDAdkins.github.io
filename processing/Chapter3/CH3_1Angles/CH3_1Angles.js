let i;
let reverse;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(24);
  i = 10;
  reverse = false;
  textSize(24);
}

function draw() {
    if (i >= 100) {
        reverse = true;
    } else if (i <= 10) {
        reverse = false;
    }

    if (reverse) {
        i /= 1.0015;
    } else {
        i *= 1.0015;
    }
  background(24, 24, 24, i/4);
  noStroke();
  fill(240, 100, 160);
  rectMode(CENTER);
  text("Rotating object at " + round(i) + " radians/second", 10, 30);


  translate(width/2, height/2)
  rotate(i);
  rect(0, 0, width/3, 50);
}
