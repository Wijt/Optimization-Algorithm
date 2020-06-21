
function giveParts(dots){ // ALGORITHM ONE
    let partedArray = [];
    let partHeight = height / ROW_COUNT;
    let partWidth = width / COLUMN_COUNT;
    for (let partTopY = 0; partTopY < height; partTopY += partHeight){
        for (let partLeftX = 0; partLeftX < width; partLeftX += partWidth){
            let partDots = [];
            for (let i=0; i < dots.length; i++){
                if (dots[i].pos.x > partLeftX && dots[i].pos.x < partLeftX + partWidth) {
                    if (dots[i].pos.y > partTopY && dots[i].pos.y < partTopY + partHeight){
                        partDots.push(dots[i]);
                    }
                }
            }
            partedArray.push(partDots);
        }
    }
    return partedArray;
}

function getPart(x, y){ //ALGORITHM TWO
    let xP = int(map(x, 0, width, 0, COLUMN_COUNT));
    let yP = int(map(y, 0, height, 0, ROW_COUNT));
    let partIndex = COLUMN_COUNT * yP + xP;
    return partIndex;
}

function drawParts(){
    push();
        let partHeight = height / ROW_COUNT;
        let partWidth = width / COLUMN_COUNT;
        let partNo = 0;
        for (let partTopY = 0; partTopY < height; partTopY += partHeight){
            for (let partLeftX = 0; partLeftX < width; partLeftX += partWidth){
                fill(color(255,255,255,25));
                rect(partLeftX, partTopY, partWidth, partHeight);
                fill(255)
                text(partNo++, partLeftX + partWidth / 2, partTopY + partHeight / 2);
            }
        }
    pop();
}

