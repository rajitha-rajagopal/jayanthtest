var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 80, 50);
  fixedRect.shapeColor="red";
 movingRect=createSprite(200, 200, 50, 50);
 movingRect.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
console.log(movingRect.x-fixedRect.x)

if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 ){
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}
else
{
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
}
  drawSprites();
}