function setup() {
    createCanvas(windowWidth, windowHeight); 
    background (150,150,150);
    angleMode(DEGREES);
}

function draw() {
fill (0);
    rect(0,0,600,500);
    strokeWeight(5);
    stroke(255); 

    ellipse(10,30,20,20);
    push();
    translate(20,65);
    rotate(10);
    ellipse(0,0,10,50);
    pop();

    ellipse(50, 100, 50, 50);
    ellipse(75,160,80,50);
    ellipse(125,200,20,70);

    push();
   translate(200,250);
   rotate(50);
    ellipse(0,0,80,100);
    pop();

    push();
    translate(300,330);
    rotate(95);
    ellipse(0,0,80,200);
    pop();

    push();
    translate(430,360);
    rotate(20);
    ellipse(0,0,50,80);
    pop();

    push();
    translate(450,420);
    rotate(250);
    ellipse(0,0,40,120);
    pop();

    push();
    translate(480,460);
    rotate(80);
    ellipse(0,0,20,200);
    pop();

    push();
    translate(550,480);
    rotate(0);
    ellipse(0,0,30,30);
    pop();
}
