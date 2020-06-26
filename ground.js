class Ground{
    constructor(x,y,width,height){
        var options={
            'isStatic':true,
            'friction':0.7,
            'density':1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        push();
        rectMode(CENTER);
        fill(255);
        noStroke();
        rect(this.x,this.y,this.width,this.height);
        pop();
    }

}