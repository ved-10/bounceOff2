var fixedRect;
var movingRect;




function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.debug=true;
  movingRect = createSprite(400,800,80,30);
  movingRect.debug = true;

 fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  fixedRect.velocityY =5;
  movingRect.velocityY = -5;
}

function draw() {
  background(255,255,255);  


 bounceOff(fixedRect , movingRect);



  

  drawSprites();
}

function bounceOff(V1,V2){
  if (V2.x - V1.x < V1.width/2 + V2.width/2
    && V1.x - V2.x < V1.width/2 + V2.width/2) {
  V2.velocityX = V2.velocityX * (-1);
  V1.velocityX = V1.velocityX * (-1);
}
if (V2.y - V1.y < V1.height/2 + V2.height/2
  && V1.y - V2.y < V1.height/2 + V2.height/2){
  V2.velocityY = V2.velocityY * (-1);
  V1.velocityY = V1.velocityY * (-1);
}

}


