
var circleX = 0;
var greeX = 0;
var yheight = 25;
var xwidth = 50;


function setup() {

createCanvas(600,460);

}

function draw() {

background(150,150,150);
//ellipse

fill(greeX,400,0);
ellipse(circleX,200,xwidth,yheight);

circleX = circleX + .5;
greeX = greeX + .5;
yheight= yheight + .5;
xwidth = xwidth+.5;







}

function mousePressed(){
	background(150,150,150);



}