class Rubber{
    constructor(x,y,radius){
        var options = {
            'friction': 5,
            'density': 0.4,
            'restitution': 1.6
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(0,0,this.radius);
        pop();
    }
}