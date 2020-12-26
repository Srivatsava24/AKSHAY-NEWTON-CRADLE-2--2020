class Bob{
    constructor(posx, posy,radius){
        var options = {
          restitution:1.2,
                friction:1,
                density:1.2
            }
        this.x = posx;
          this.y = posy;
          this.r = radius;
          this.body = Bodies.rectangle(this.x, this.y, this.r,this.r,options)
        World.add(world, this.body);
    }
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle)
	  fill("Maroon");
	  stroke("white");
      strokeWeight(2);
      ellipse(0, 0, this.r,this.r);
      pop();
        }
    }