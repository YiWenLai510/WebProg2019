let cvsWrapper = null;
let y = 100;
let vy = 0 ;
let rotAngle = 0;
let x1 = 0;
let x3 = 0;
var scrollSpeed = 2;
let bird = [];
let sound = [];
let bird_color_counter = 0;
let bird_flap_counter = 0;
let frame_counter = 0;
// assets from: https://github.com/sourabhv/FlapPyBird/tree/master/assets

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function preload() {
    var backgrounds = ["assets/sprites/background-day.png","assets/sprites/background-night.png"]
    bgImg = loadImage(backgrounds[getRandomInt(2)]);
    baseImg = loadImage("assets/sprites/base.png");
    bird = ["blue", "red", "yellow"].map(
            color => ["upflap", "midflap", "downflap"].map(flap => loadImage(`assets/sprites/${color}bird-${flap}.png`))
    );
    wing_sound = loadSound("assets/audio/wing.wav");
    bird_color_counter = getRandomInt(3);
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
    x3 = bgImg.width;
    // setup code below
}

function draw() {
    // Render function (called per frame.)
  
    background(0);
   
    scale(width/bgImg.width);
    image(bgImg,x1,0);
    image(bgImg,x3,0);
    image(baseImg,x1,400);
    image(baseImg,x3,400);
    ///////////////////////////////////////////////
    x1 -= scrollSpeed;
    x3 -= scrollSpeed;
    vy += 0.2;
    y += vy;

    rotAngle += 0.01;
    push();  
    translate(120, y);
    rotate(rotAngle);
    image(bird[bird_color_counter][bird_flap_counter],0,0);
    pop();

    if(frame_counter%5 == 0){
        bird_flap_counter += 1;  
    }
    frame_counter += 1;
    /////////////////////////////////////////////////////
    if (x1 <= -bgImg.width){
        x1 = bgImg.width;
    }
    if (x3 <= -bgImg.width){
        x3 = bgImg.width;
    }
    if(bird_flap_counter >= 3){
        bird_flap_counter = 0;
    }
}

function keyPressed() {
    if(keyCode == 32){
        wing_sound.play();        
        vy = -3;
        rotAngle = -0.1;
        rotate(rotAngle);

    }
}
