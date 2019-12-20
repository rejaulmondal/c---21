var fixedRect, movingRect;

var gameob1, gameob2,gameob3,gameob4;



function setup() {
  
  createCanvas(1200,800);
  
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameob1 = createSprite(300, 200,80,30);
  gameob1.shapeColor = "green";
  gameob1.debug = true;

  gameob2 = createSprite(400, 500,80,30);
  gameob2.shapeColor = "green";
  gameob2.debug = true;

  gameob3 = createSprite(300, 100,50, 80);
  gameob3.shapeColor = "green";
  gameob3.debug = true;

  gameob4 = createSprite(300, 700,80,30);
  gameob4.shapeColor = "green";
  gameob4.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  
  gameob3.velocityY = 5;
  gameob4.velocityY = -5;
}

function draw() {
 
  background(0,0,0);  

  gameob1.y = World.mouseY;
  gameob1.x = World.mouseX;

  bounceOff(movingRect,fixedRect);
  bounceOff(gameob4,gameob3);

  if(isTouching(gameob1,gameob2)){
    gameob1.shapeColor = "blue";
    gameob2.shapeColor = "blue";
  }

  else{
    gameob1.shapeColor = "green";
    gameob2.shapeColor = "green";
  }
  drawSprites();

}

