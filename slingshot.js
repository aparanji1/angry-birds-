class Slingshot{
    constructor(bodyA,pB){
        var options={
            bodyA:bodyA,
            pointB:pB,
            length:10,
            stifness:0.04,
        }
this.sling=Matter.Constraint.create(options) 
this.pB = pB;
World.add(world,this.sling)
    }

    display(){
        var pointa=this.sling.bodyA.position;
        var pointb=this.pB;
    line (pointa.x,pointa.y,pointb.x,pointb.y)
    }

    fly(){
        this.sling.bodyA=null
        
    }
}