
let cPlane;
let partedArray = [];


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
    for (var i = 0; i < ROW_COUNT * COLUMN_COUNT; i++){
        partedArray.push([]);
    }
    //createCanvas(window.innerWidth, window.innerHeight);
    var canvas = createCanvas(500, 500);
    centerScaleCanvas(canvas);
    textAlign(CENTER, CENTER);
    min.x = int(-width / 2);
    min.y = int(-height / 2);
    max.x = int(width / 2);
    max.y = int(height / 2);

    cPlane = new CoordinatePlane(0, 0);

    for(let i = 0; i < DOT_LENGTH; i++){
        new Dot(random(0,width), random(0,height));
    }

}


function draw() {    
    cPlane.show();
    
    ellipse(mouseX, mouseY, PLAYER_R);
    
    let playerIndex = getPart(mouseX, mouseY);
    partedArray[playerIndex].forEach(dot => {
        let distance = dist(mouseX, mouseY, dot.pos.x, dot.pos.y); 
        if(distance < DOT_R / 2 + PLAYER_R / 2){
            console.log("hit");
            dot.label = 1;
        }else{
            dot.label = -1;
        }
    });

    partedArray.forEach(parts => {
        parts.forEach(dot => {
            dot.show();
        })
    });
    
    let fps = frameRate();
    fill(255);
    stroke(0);
    text("FPS: " + fps.toFixed(2), 35, height - 10);
}