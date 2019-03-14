
let x1, y1;
let triW, triH;
let cvsWrapper = null;
let triAng;

// assets from: https://github.com/sourabhv/FlapPyBird/tree/master/assets

function preload() {
}
function setup() {
    cvsWrapper = document.getElementById("canvasWrapper");
    const myCanvas = createCanvas(
        cvsWrapper.offsetWidth,
        cvsWrapper.offsetHeight
    );
    myCanvas.parent("canvasWrapper");
  //createCanvas(400, 600);
	triW = 50;
	triH = 70;
	vx = 0;
	vy=0;
	ay =0.1;
	x1 = width/2 - triW/2;
	y1 = height/2 - triH/2;
    triAng = 0 ;
}

function draw() {
  background(220);
    fill("red");
  
	x1 += vx;
	vy += ay;
    y1 += vy;
    triAng += 0.01;
    translate(x1, y1);
    rotate(triAng);
	triangle(0,0,triW ,0, triW/2, -triH);
}
function keyPressed(){
	if(keyCode == 32)
		vy = -3;
        triAng = -PI/4;
}
