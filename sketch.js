var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 80);
  movingRect=createSprite(400,200,80,30);
  fixedRect.velocityX=2;
  movingRect.velocityX=-2;
}

function draw() {
  background(255,255,255); 
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;
  if (movingRect.x-fixedRect.x<=fixedRect.width/2+movingRect.width/2&&fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2&&movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2&&fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor="pink";
    movingRect.shapeColor="yellow"
  }else{
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="red";
  }
  if(movingRect.x-fixedRect.x<=fixedRect.width/2+movingRect.width/2&&fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2){
    movingRect.velocityX*=(-1)
    fixedRect.velocityX*=(-1)
  }
  if (movingRect.y-fixedRect.y<=fixedRect.height/2+movingRect.height/2&&fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2){
    movingRect.velocityY*=(-1)
    fixedRect.velocityY*=(-1)
  }
  console.log(movingRect.y-fixedRect.y);
  drawSprites();
}