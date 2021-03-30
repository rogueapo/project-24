var ground;
var ball

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	ground = createSprite(400,655,800,10);
	ground.shapeColor = color(255,255,255)

	boxPosition = 500;

	boxY = 600;
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	boxLeftSprite = createSprite(boxPosition,boxY,20,100)
	boxLeftSprite.shapeColor = color(255,8,0)
	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
	World.add(world, boxLeftSprite);

	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
	boxBase.shapeColor=color(255,0,0);
	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
	World.add(world, boxBottomBody);

	boxRightSprite = createSprite(boxPosition+200, boxY, 20,100);
	boxRightSprite.shapeColor = color(255,0,0);
	boxRightBody = Bodies.rectangle(boxPosition+200 , boxY, 20,100 , {isStatic:true} );
	World.add(world, boxRightSprite)
	ball = new paper(10,10);
  
  
}


function draw() {
  	rectMode(CENTER);
  	background(0);

  	ball.display();
  	drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){


		Matter.Body.applyforce(ball.body ,ball.body.position,{x:85,y:-85});

	}
}

