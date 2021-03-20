const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var opt = {
    isStatic: true
  }
  ground = Bodies.rectangle(200, 380, 400, 20, opt);
  World.add(world, ground);
  var ballopt = {
    restitution: 0.8
  }

  ball = Bodies.circle(200, 200, 60, ballopt);
  World.add(world, ball);
}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 60, 60);
  drawSprites();
}