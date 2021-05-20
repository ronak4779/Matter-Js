
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
	//paper = new Paper(300,300,50);


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  
 // drawSprites();
 //paper.display();
}



