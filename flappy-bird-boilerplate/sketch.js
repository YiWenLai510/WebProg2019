let cvsWrapper = null;
let y1 = 0;
let y2 = 0;
// assets from: https://github.com/sourabhv/FlapPyBird/tree/master/assets

function preload() {
}

function setup() {
    // Game basic setup.
    // Mounting canvas onto div for convenient styling.
    cvsWrapper = document.getElementById("canvasWrapper");
    const myCanvas = createCanvas(
        cvsWrapper.offsetWidth,
        cvsWrapper.offsetHeight
    );
    myCanvas.parent("canvasWrapper");

    // setup code below
}

function draw() {
    // Render function (called per frame.)
  
    background(0);
    translate(x1, y1);
    image(bgImg,0,0);
}

function keyPressed() {
}
