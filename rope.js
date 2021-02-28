class rope{
    constructor(body1,point2){
        var options = {
            bodyA : body1,
            pointB : point2,
            stiffness : 0.04,
            length : 200
            
        }
        this.pointB = point2;
           this.sling = Constraint.create(options);
           World.add(myworld,this.sling);
    }

     

    display(){
        
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
       push();
       strokeWeight(0);
       line(pointA.x,pointA.y,pointB.x,pointB.y);
       pop();
        
    }
}