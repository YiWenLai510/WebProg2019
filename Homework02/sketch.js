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
let loadStart=0;
let x2 = 100;
let x4 = 300;
let x5 = 500;
let y2l = -150;
let y4l = -150;
let y5l = -150;
let y2u = 350;
let y4u = 350;
let y5u = 350;
let dy = 0;
let score=[];
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
    score = ["0","1","2","3","4","5","6","7","8","9"].map(num => loadImage(`assets/sprites/${num}.png`));
    console.log(score);

    wing_sound = loadSound("assets/audio/wing.wav");
    bird_color_counter = getRandomInt(3);
    start_img = loadImage("assets/sprites/message.png");
    green_low_pipe = loadImage("assets/sprites/pipe-green-lower.png");
    green_Up_pipe = loadImage("assets/sprites/pipe-green-upper.png");
    gameover = loadImage("assets/sprites/gameover.png");
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
   
    if(loadStart == 0){
        image(start_img,50,120);
    }
    else{
        vy += 0.2;
        y += vy;

        rotAngle += 0.01;
        push();  
        translate(120, y);
        rotate(rotAngle);
        image(bird[bird_color_counter][bird_flap_counter],0 ,0);
        pop();

        image(green_Up_pipe,x2,y2l);
        image(green_low_pipe,x2,y2u);

        image(green_Up_pipe,x4,y4l);
        image(green_low_pipe,x4,y4u);

        image(green_Up_pipe,x5,y5l);
        image(green_low_pipe,x5,y5u);

    }
    x1 -= scrollSpeed;
    x3 -= scrollSpeed;
    x2 -= scrollSpeed;
    x4 -= scrollSpeed;
    x5 -= scrollSpeed;
    if(y>=400 || y <= 0){
        image(gameover,50,120);
        noLoop();
    }
    if(x2 == 120){
        if(y <= (y2l+320) ){
            image(gameover,50,120);
            noLoop();
        }
        if(y >= (y2u)){
            image(gameover,50,120);
            noLoop();
        }
    }
    if(x4 == 120){
        if(y <= (y4l+320) ){
            image(gameover,50,120);
            noLoop();
        }
        if(y >= (y4u)){
            image(gameover,50,120);
            noLoop();
        }
    }
    if(x5 == 120){
        if(y <= (y5l+320) ){
            image(gameover,50,120);
            noLoop();
        }
        if(y >= (y5u)){
            image(gameover,50,120);
            noLoop();
        }
    }


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
    if(x2 <= -100){
        x2 = 500;
        y2l = generate_yAxis(y2l);
        y2u = generate_yAxis(y2u);
    }
    if(x4 <= -100){
        x4 = 500;
        y4l = generate_yAxis(y4l);
        y4u = generate_yAxis(y4u);
    }
    if(x5 <= -100){
        x5 = 500;
        y5l = generate_yAxis(y5l);
        y5u = generate_yAxis(y5u);
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
    if(keyCode >= 0){
        loadStart = 1;
    }
}
function mousePressed(){
    if(loadStart == 0){
        loadStart = 1;
    }
    else{
        loadStart = 1;
    }
}
function generate_yAxis(yaxis){
    var b = getRandomInt(2);
    if(b == 1){
        yaxis += 10*(getRandomInt(3));
    }
    else{
        yaxis -= 10*(getRandomInt(3));
    }
    return yaxis
}
