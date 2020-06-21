
function giveParts(dots){
    let partedArray = [];
    let partHeight = height / ROW_COUNT;
    let partWidth = width / COLUMN_COUNT;
    for (let partTopY = 0; partTopY < height; partTopY += partHeight){
        for (let partLeftX = 0; partLeftX < width; partLeftX += partWidth){
            let partDots = [];
            rect(partLeftX, partTopY, partWidth, partHeight);
            dots.forEach(dot => {
                if (dot.pos.x > partLeftX && dot.pos.x < partLeftX + partWidth) {
                    if (dot.pos.y > partTopY && dot.pos.y < partTopY + partHeight){
                        partDots.push(dots.pop(dot));
                    }
                }
            });
            partedArray.push(partDots);
        }
    }
    return partedArray;
}
