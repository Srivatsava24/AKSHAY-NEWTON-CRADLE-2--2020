class Rope{
    constructor(bodyA, pointB){
        
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness:1,
            length:300
        }
        this.pointB=pointB;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    display(){
        var pointA = this.body.bodyA.position;
        var pointB = this.pointB;
        push()
        strokeWeight(2);
        stroke("white");
        fill(0);
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        pop();
    }
}