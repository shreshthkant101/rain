class Rain{
    constructor(x, y,r){
    var options = {
      friction: 0.3,
      restitution: 0.6,
      density: 1
    }
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    this.x = x;
    this.y =y;
    this.Visiblity = 0;
    this.color = rgb(random(0,255),random(0,255),random(0,255));
    World.add(world, this.body);
}
    display(){
      var pos = this.body.position;
      
      push();
      translate(pos.x, pos.y);
      noStroke();
      ellipseMode(CENTER);
      fill(this.color);
      ellipse(this.x, this.y, this.r);
      pop();
      if(pos.y > displayHeight + 30){
          World.remove(world,this.body);
      }
    }
  
  }
  