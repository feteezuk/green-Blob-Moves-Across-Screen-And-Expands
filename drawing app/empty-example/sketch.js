
var circleX = 0;
var greeX = 0;
var yheight = 25;
var xwidth = 50;


function setup() {

createCanvas(600,460);

}

function draw() {


//ellipse

fill(greeX,400,0);
ellipse(circleX,mouseY,xwidth,yheight);

circleX = mouseX
greeX = greeX + .5;
yheight= yheight ;
xwidth = xwidth;


if (mouseIsPressed) {

    ellipse(mouseX,mouseY,xwidth,yheight);
    yheight = 100;
	xwidth =100;
	noStroke();
  } 


}

function mouseIsPressed(){
	background(150,150,150);
	




}