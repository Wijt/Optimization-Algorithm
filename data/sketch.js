
let cPlane;
let dots = [];

let min = {x: null, y: null}, max = {x: null, y: null};


function centerScaleCanvas(canvas){
    let margin = 50;
    if (window.innerWidth < window.innerHeight) resizeCanvas(window.innerWidth, window.innerWidth);
    else resizeCanvas(window.innerHeight, window.innerHeight);
    resizeCanvas(width - margin, height - margin);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    canvas.position(x, y);
}

function setup(){
    //createCanvas(window.innerWidth, window.innerHeight);
    var canvas = createCanvas(500, 500);
    centerScaleCanvas(canvas);
    min.x = int(-width / 2);
    min.y = int(-height / 2);
    max.x = int(width / 2);
    max.y = int(height / 2);

    cPlane = new CoordinatePlane(0, 0);

    for(let i = 0; i < DOT_LENGTH; i++){
        new Dot(random(min.x, max.x), random(min.y, max.y));
    }
}


function draw() {
    translate(width/2,height/2);
    cPlane.show();
    dots.forEach(element => {
        element.show();
    });
}