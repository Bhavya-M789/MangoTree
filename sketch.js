
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var tree1, ground1;
var boy, boyImg;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
boyImg  = loadImage("boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(460, 575, 100, 500);
	boy.addImage(boyImg);
	boy.scale = 0.16;

	//Create the Bodies Here.
	tree = new Tree(1300, 400);
	mango1  = new Mango(1310, 270, 30);
	mango2  = new Mango(1170, 340, 25);
	mango3  = new Mango(1230, 200, 30);
	mango4 = new Mango(1440, 330, 25);
	mango5 = new Mango(1460, 240, 30);
	mango6 =  new Mango(1360, 145, 25);
	ground = new  Ground(800, 685, 1600, 30);
	stone = new Stone(375, 485, 30);
	chain1 = new Chain(stone.body, {x: 375, y: 485});
	Engine.run(engine);
  
}


function draw() {
  background("lightblue");
  text ("Press Space To Restart!", 150, 50);
  
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  ground.display();
  stone.display();
  chain1.display();

  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);
  detectcollision(stone, mango6);
  
  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:  mouseX, y: mouseY});
}

function mouseReleased(){
	chain1.fly();
}

function detectcollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance  = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
		if(distance <= lmango.r + lstone.r){
			Matter.Body.setStatic(lmango.body, false);
			lmango.velocityY = 6;
		}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x : 235, y : 420});
		chain1.attach(stone.body);
	}
}