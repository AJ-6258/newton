class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1,
            
            density:1.2

        }
        this.x=x;
        this.y=y;
        this.r=r;
        
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body);
    
    }
    display(){

        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        strokeWeight(2);
        stroke("pink");
        fill("pink");
        ellipseMode(CENTER); 
        ellipse(0,0,this.r,this.r);
        pop();
    }
}