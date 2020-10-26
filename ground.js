class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true

        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body= Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

    }
    display(){

        var Groundpos= this.body.position
        push()
        translate(Groundpos.x,Groundpos.y);
        rectMode(CENTER);
        fill(128,128,128)
		rect(0,0,this.width, this.height);
		pop()


    }
}
