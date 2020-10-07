class Box {
    constructor(x,y,w,h) {
      var options = {
          friction:0,
          restitution: 0.4
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("pink");
        rect(pos.x, pos.y, this.w,this.h);
      }
  };