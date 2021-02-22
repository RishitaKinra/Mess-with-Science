class Sand{
    constructor(x,y,radius){
        var options = {
            'friction': 0.2,
            'density': 0.4,
            'restitution': 1,
            'spring':2,
            'magnetism':15
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
        fill("white");
        ellipse(0,0,this.radius);
        pop();
    }
}