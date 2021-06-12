var rectfixed, rectmoving;

function setup() {
  createCanvas(800,400);
  rectfixed=createSprite(400, 200, 50, 50);
  rectmoving=createSprite(200,200, 40, 40);
  rectfixed.shapeColor= "blue";
  rectmoving.shapeColor="yellow";
}

function draw() {
  background(255,255,255); 
  rectmoving.x=mouseX;
  rectmoving.y=mouseY; 

  if (rectmoving.x-rectfixed.x<rectfixed.width/2+rectmoving.width/2
    && rectfixed.x-rectmoving.x<rectfixed.width/2+rectmoving.width/2
    &&rectmoving.y-rectfixed.y<rectfixed.height/2+rectmoving.height/2
    && rectfixed.y-rectmoving.y<rectfixed.height/2+rectmoving.height/2) {
    rectfixed.shapeColor= "red";
  rectmoving.shapeColor="green";
  } else {
    rectfixed.shapeColor= "blue";
  rectmoving.shapeColor="yellow";
  }
  drawSprites();
}