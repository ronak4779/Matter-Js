
      class Paper{
        constructor(x,y,r) {
         
            var options =  {
                isStatic:false,
                 restitution:0.3,
                 friction:0.5,
                 density:1.2
             }

           this.body = Bodies.circle(this.x, this.y, this.r/2, options);
            this.x = x;
            this.y = y;
            this.r = r;
        
           World.add(world, this.body);
           
            }
         display(){
           var pos = this.body.position;
          // var angle = this.body.angle;
       
           push();
           translate(pos.x, pos.y);
           rotate();
          
           
           rectMode(CENTER)
           //rect(200,200,50,50,100);
          ellipse(0,0,this.r,this.r);
          
       
           pop();
         };
            
            };
    
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
       
       
