
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2, bob3, bob4, bob5;
var roof;
var r1,r2,r3,r4,r5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof (400,200,400,20);

	bob1 = new Paper(300,400,50);
	bob2 = new Paper(350,400,50);
	bob3 = new Paper(400,400,50);
	bob4 = new Paper(450,400,50);
	bob5 = new Paper(500,400,50);

	r1 = new Constraints (bob1.body, roof.body, -100,0);
	r2 = new Constraints (bob2.body, roof.body, -50,0);
	r3 = new Constraints (bob3.body, roof.body, 0,0);
	r4 = new Constraints (bob4.body, roof.body, 50,0);
	r5 = new Constraints (bob5.body, roof.body, 100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}



