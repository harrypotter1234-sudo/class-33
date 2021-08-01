

class snowclass{
    constructor(x, y,angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic :false
        }
        this.body = Bodies.circle(x, y, 1, options);
        Matter.Body.setAngle(this.body,angle)
        this.x = x;
        this.y = y;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0,10,10);
        pop();
      }
}