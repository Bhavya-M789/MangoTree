class Ground {
    constructor(x, y, width, height ){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pose = this.body.position 
        rectMode(CENTER);
        strokeWeight(0);
        fill("RosyBrown");
        rect(pose.x, pose.y, this.width, this.height);
    }
}