class Constraints{
    
    constructor(bodyA,bodyB,offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
      
        var option = {
            bodyA: bodyA,
            bodyB: bodyB,
           pointB : {x:this.offsetX, y:this.offsetY},
            stiffness: 0.9,
            length:200
        }  
        this.constraint= Constraint.create(option);
        World.add(world,this.constraint);
      
    }

    display(){
        var pointA=this.constraint.bodyA.position;
        var pointB=this.constraint.bodyB.position;

        var anchorX = pointB.x + this.offsetX;
        var anchorY = pointB.y + this.offsetY;
            
  
        strokeWeight(3);
        stroke("white")
        var anchorX = pointB.x + this.offsetX;
        var anchorX = pointB.x + this.offsetX;
        line (pointA.x,pointA.y,anchorX,anchorY);
       
    }
}