var path,boy;
var pathImg,boyImg;
var Invisableline1,Invisableline2;
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  boyImg = loadAnimation ("Runner-1.png" ,  "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale =1.2;

  boy =createSprite(300,300,30,30);
  boy.addAnimation("Runningboy",boyImg);
  boy.scale = 0.1;

  Invisableline1 =createSprite(25,200,5,400);
  Invisableline1.visible =false ;

  Invisableline2 =createSprite(400,200,5,400);
  Invisableline2.visible =false ;
}

function draw() {
  background(0);
  
  
  if( keyDown ("right")){
   boy.velocityX=2;
   

  }
  if( keyDown ("left")){
    boy.velocityX=-2;
    
 
   }

  if (path.y > 400){
  path.y = height/2;

  }

  boy.collide(Invisableline2);
  boy.collide(Invisableline1);
  drawSprites();
}
