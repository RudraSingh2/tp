class Ball {
    constructor(x, y, radius) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y,radius,options);
      this.radius = radius;
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4);
      stroke("green")
      ellipseMode(CENTER);
      fill(255);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    
    }
  };
    function keyPressed(){
      if (keyCode === UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})

    }
  }
  
  