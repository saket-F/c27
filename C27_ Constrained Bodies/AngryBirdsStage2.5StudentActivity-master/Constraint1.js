class Constraint1
{
    constructor(bodyA,bodyB)
    {
        var options = 
        {
      bodyA:bird.body,
      bodyB:constrainedlog.body,
      stiffness:0.31,
      length:20
        }
      
     this.chain=Constraint.create(options)
      World.add(world,this.chain)
    }

    display()
    {
        strokeWeight(5);
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    }

}