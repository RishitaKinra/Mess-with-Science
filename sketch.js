
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer;
var plane;
var stone1, stone2, stone3;
var rubberBall,rubberBall2,rubberBall3,rubberBall4;
var iron, iron2;
var sandBall1, sandBall2, sandBall3, sandBall4, sandBall5, sandBall6, sandBall7, sandBall8, sandBall9, sandBall10, sandBall11, sandBall12;

function setup() {
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(mouseX,mouseY);
	plane = new Plane(windowWidth/2,windowHeight-10,windowWidth,20);

	stone1 = new Stone(675,564);
	stone2 = new Stone(1350,564);
	stone3 = new Stone(974,564);

	rubberBall = new Rubber(windowWidth-246,70,20);
	rubberBall2 = new Rubber(windowWidth-540,70,15);
	rubberBall3 = new Rubber(windowWidth-876,70,15);
	rubberBall4 = new Rubber(windowWidth-1000,70,15);

	iron = new Iron(300,30,170,50);
	iron2 = new Iron(windowWidth-120,30,50,50);

	sandBall1 = new Sand(500,30,5);
	sandBall2 = new Sand(510,30,5);
	sandBall3 = new Sand(515,30,5);
	sandBall4 = new Sand(530,30,5);
	sandBall5 = new Sand(535,30,5);
	sandBall6 = new Sand(555,30,5);
	sandBall7 = new Sand(600,30,5);
	sandBall8 = new Sand(615,30,5);
	sandBall9 = new Sand(650,30,5);
	sandBall10 = new Sand(800,30,5);
	sandBall11 = new Sand(810,30,5);
	sandBall12 = new Sand(815,30,5);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  Engine.update(engine);

  hammer.display();
  plane.display();

  stone1.display();
  stone2.display();
  stone3.display();

  rubberBall.display();
  rubberBall2.display();
  rubberBall3.display();
  rubberBall4.display();

  iron.display();
  iron2.display();

  sandBall1.display();
  sandBall2.display();
  sandBall3.display();
  sandBall4.display();
  sandBall5.display();
  sandBall6.display();
  sandBall7.display();
  sandBall8.display();
  sandBall12.display();
  sandBall9.display();
  sandBall10.display();
  sandBall11.display();
  
  drawSprites();
 
}



