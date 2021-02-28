class monster{
    constructor(x,y,radius){
        var options={
           // restitution: 0.8,
            friction: 1,
            dencity: 1,
            //isStatic:true
        }
        
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("images/Monster-01.png");
        World.add(myworld,this.body);
    }
    display(){
        var pos= this.body.position
        var angle = this.body.angle
        push();
// translate(pos.x,pos.y);
        rotate(angle);
       // ellipseMode(RADIUS)
        imageMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill("red");
       // ellipse(0,0,this.radius);
        image(this.image,pos.x,pos.y,this.radius*2,this.radius*2)
        pop();
    }
}