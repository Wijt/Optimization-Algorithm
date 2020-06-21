
function giveParts(dots){ // ALGORITHM ONE
    let partedArray = [];
    let partHeight = height / ROW_COUNT;
    let partWidth = width / COLUMN_COUNT;
    let partNo = 0;
    for (let partTopY = 0; partTopY <= height; partTopY += partHeight){
        for (let partLeftX = 0; partLeftX <= width; partLeftX += partWidth){
            let partDots = [];
            rect(partLeftX, partTopY, partWidth, partHeight);
            textAlign(CENTER, CENTER);
            text(partNo++, partLeftX+partWidth/2, partTopY+partHeight/2);
            for (let i=0; i < dots.length; i++){
                if (dots[i].pos.x > partLeftX && dots[i].pos.x < partLeftX + partWidth) {
                    if (dots[i].pos.y > partTopY && dots[i].pos.y < partTopY + partHeight){
                        partDots.push(dots.slice(dots[i],1)[0]);
                    }
                }
            }
            partedArray.push(partDots);
        }
    }
    return partedArray;
}
