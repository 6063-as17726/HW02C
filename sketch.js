function setup() {
    createCanvas(windowWidth, windowHeight); 
    background (150,150,150);
}

function draw() {
fill (0);
    rect(0,0,600,500);
    strokeWeight(5);
    stroke(255); 
    ellipse(50, 100, 50, 50);
    ellipse(75,160,80,50);
    ellipse(125,200,20,70);
    angleMode(degrees);
    rotate(100);
    ellipse(60,300,80,100);
    ellipse(30,400,80,200);
}
