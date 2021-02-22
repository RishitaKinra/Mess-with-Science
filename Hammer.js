class Hammer{
    constructor(x,y){
        var options = {
            'density': 2,
            'restitution': 0.5,
            'friction': 1
        }

        this.body = Bodies.rectangle(x,y,50,20,options);
        this.width = 60;
        this.height = 150;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        pos.x = mouseX;
        pos.y = mouseY;

        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
        rect(0,0,this.width,this.height);
        pop();
    }
}