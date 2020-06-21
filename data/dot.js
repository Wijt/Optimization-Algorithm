class Dot{
    constructor(x, y){
        this.pos = {x: x, y: y};
        this.label = -1; //x > y ? 1 : -1;
        let partIndex = getPart(x, y);
        partedArray[partIndex].push(this);
    }
    
    show() {
        push();
            noStroke();
            if (this.label == 1){
                fill(DOT_ONE);
            }else if (this.label == -1){
                fill(DOT_TWO);
            }else{
                fill(DOT_ZERO)
            }
            ellipse(this.pos.x, this.pos.y, DOT_R, DOT_R);
        pop();
    }
}