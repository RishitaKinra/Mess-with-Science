class Stone{
    constructor(x,y){
        var options = {
            'density': 1.5,
            'restitution': 0.5,
            'friction': 1,
            'thrust': 2.5,
            'cohesion':6
        }
        this.body = Bodies.rectangle(x,y,85,85,options);
        this.width = 85;
        this.height = 85;
        
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue");
        rect(0,0,this.width,this.height);
        pop();

    }
}