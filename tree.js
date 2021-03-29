class Tree {
    constructor(x, y){
        var options = {
            isStatic :  true, 
        } 
        this.x = x;
        this.y = y;
        this.width = 450;
        this.height =  600;
        this.thickness = 10;
        this.image = loadImage("tree.png");
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.thickness, options);
        World.add(world, this.body);
    }
    display(){
        var pose = this.body.position;
        push ();
        translate (pose.x, pose.y);
        imageMode(CENTER);
        image(this.image, 0, -this.height/2, this.width, this.height);
        pop ();
    }
 }
