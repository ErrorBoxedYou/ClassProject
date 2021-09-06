var ball;
function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,10,10);
  ball.shapeColor = "orange";
}

function draw() 
{
  background(30);
  if(keyDown(UP_ARROW)){
    ball.x -= 5; 
  }
  else if(keyDown(DOWN_ARROW)){
    ball.x += 5;
  }
  drawSprites();

}




