
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;

  var engine, world;
  var holder,ball,ground;

  function setup() {
    createCanvas(700,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();  
    holder = new Holder();
    ball = new Ball(300,300,30);
    ball2 = new Ball(400,300,30);
    ball3 = new Ball(500,300,30);
    ball4=new Ball(600,300,30)
    connector = new Connector({x:300,y:100},ball.body);
    connector2 = new Connector({x:400,y:100},ball2.body);
    connector3 = new Connector({x:500,y:100},ball3.body);
    connector4=new Connector({x:600,y:100},ball4.body);
  }


  function draw() {
    background("black"); 
    Engine.update(engine);

    textSize(15);
   
    ground.display();
    holder.display();
    ball.display();
    ball2.display();
    ball3.display();
    ball4.display();
    connector.display();
    connector2.display();
    connector3.display();
    connector4.display();

    
  }

  function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    Matter.Body.setPosition(ball2.body, {x: mouseX +200, y: mouseY});
    Matter.Body.setPosition(ball3.body, {x: mouseX+400 , y: mouseY});
    Matter.Body.setPosition(ball4.body, {x: mouseX+400 , y: mouseY});
    Matter.Body.setStatic(ball.body, false);
    Matter.Body.setStatic(ball2.body, false);
    Matter.Body.setStatic(ball3.body, false);
    Matter.Body.setStatic(ball4.body, false);
  }
  function keyPressed(){
  if(keyCode=ENTER){
    Matter.Body.setStatic(ball.body, true);
    Matter.Body.setStatic(ball2.body, true);
    Matter.Body.setStatic(ball3.body, true);
    Matter.Body.setStatic(ball3.body, true);
    
  }
  }



    




