var bullet1, bullet2, bullet3;
var wall1, wall2, wall3;
var speed;
var weight;
var thickness;
var path1, path2;
var lbullet;
var lwall;




function setup() {
  createCanvas(1350,650);

 speed = random(55, 70);
weight = random(400, 1500);
thickness =  random(22, 83);

bullet1  = createSprite(50, 100, 60, 10);
bullet1.shapeColor = "orange"
//bullet1.velocityX = speed;

bullet2 = createSprite(50, 340, 60, 10);
bullet2.shapeColor = "cyan"
//bullet2.velocityX = speed;

bullet3 = createSprite(50, 560, 60, 10);
bullet3.shapeColor = "tan"
//bullet3.velocityX = speed;

wall1= createSprite(1300, 100, thickness,height/5 );
wall1 = shapeColor = color(80, 80, 80);

wall2 = createSprite(1300, 330, thickness, height/5);
wall2 = shapeColor = color(80, 80, 80);

wall3 = createSprite(1300, 560, thickness, height/5);
wall3 = shapeColor = color(80, 80, 80);

path1 = createSprite(600, 220, 2000, 10);
path1.shapeColor = "white";

path2 = createSprite(600, 450, 2000, 10);
path2.shapeColor = "white";
}

function draw() {
  background("black");
 

 
  hasCollided();
  drawSprites();
}

function hasCollided(lbullet, lwall){

  if(hasCollided(bullet1, wall1))
  {
    bullet1.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
  if (damage>10)
  {
    wall1.shapeColor = color(255, 0, 0);
  }
  if(damage<10)
  {
    wall1.shapeColor = color(0, 255, 0);
  }
  }





}