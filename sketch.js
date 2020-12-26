

//Creating constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//Creating variables
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

//Creating function setup
function setup() {
  createCanvas(1500,650);

  engine = Engine.create();
  world = engine.world;

  bob1 = new Bob(455,300,80)
  bob2 = new Bob(535,300,80)
  bob3 = new Bob(615,300,80)
  bob4 = new Bob(695,300,80)
  bob5 = new Bob(775,300,80)
  rope1 = new Rope(bob1.body,{x:455,y:200})
  rope2 = new Rope(bob2.body,{x:535,y:200})
  rope3 = new Rope(bob3.body,{x:615,y:200})
  rope4 = new Rope(bob4.body,{x:695,y:200})
  rope5 = new Rope(bob5.body,{x:775,y:200})



  Engine.run(engine);
}
	//Creating function mouseDragged
    function mouseDragged() {
      Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY });
    }


//Creating function draw
function draw() {
  background("blue");
  Engine.update(engine);


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  fill("yellow");
  textSize(40);
  textStyle(BOLD);
  stroke(124,252,0);
  textFont("Arial");
  text("AKSHAY'S NEWTON'S CRADLE - 2 2020",330,80);

  fill("SeaShell");
  textSize(23);
  textStyle(NORMAL);
  stroke("SeaShell");
  textFont("Arial");
  text("DRAG THE BOB AND RELEASE IT",20,340)

  drawSprites();
} 