
var sea,ship;
var seaImg,shipImg;

function preload(){
  
  sealmg=loadImage("sea.png")
//Choose the correct option by uncommenting the right line to load the animation for ship.
   shiplmg = loadImage("ship-1.png","ship-2.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(sea.png);
 
  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("ship-2","ship-1");
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  
//Uncomment the correct line to make the background move to create a forward moving effect for the boat.
  sea.velocityY = -3;
  sea.x = -3;
  sea.velocityX = -3;
  sea.velocityX = 3;
  

  
    
  drawSprites();
}
