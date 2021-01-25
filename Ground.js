/*class Ground {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true,
        'restitution':0,
        'friction':0,
        'density':1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
        
      World.add(world, this.body);
      }
    display(){
      rectMode(CENTER);
  
      fill(255);
  
      rect(this.body.position.x, this.body.position.y, this.width, this. height);
      }
    };*/


    class ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}