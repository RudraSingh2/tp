var ground,groundBody;
var box,boxBody;
var box1,box1Body;
var box2,box2Body;
 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}



function setup() {
	createCanvas(800, 700);
	


	ground = createSprite(800,680,1800,20)

	box = createSprite(300,650,20,50)
	box.shapeColor = "red"
	
	box1 = createSprite(360,660,120,20)
	box1.shapeColor = "red"

	box2 = createSprite(420,650,20,50)
	box2.shapeColor = "red"


	engine = Engine.create();
	world = engine.world;

	

	 
	
	Engine.run(engine);
	ball = new Ball(200,200,30);

	boxBody = Bodies.rectangle(300,650,20,50, { restitution:2, isStatic:true});
	World.add(world, boxBody);

	box1Body = Bodies.rectangle(360,680,120,20, { restitution:2, isStatic:true});
	World.add(world, box1Body);

	box2Body = Bodies.rectangle(800, 690 , 1800 ,20, { restitution:2, isStatic:true});
	World.add(world, box2Body);

	groundBody = Bodies.rectangle(420,650,20,50, { restitution:2, isStatic:true});
	World.add(world, groundBody);
	
		}
	
function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  	
 

 
  ball.display();
  drawSprites();
  
  
 
}
 



