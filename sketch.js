var movingrect,fixedrect;

function setup() {
  createCanvas(1200,800);
 fixedrect = createSprite(600, 400, 50, 80);
 fixedrect.shapeColor  = "green" 
 fixedrect.debug = true;

 movingrect = createSprite(400, 400, 80, 50);
 movingrect.shapeColor  = "green" 
 movingrect.debug = true;

}

function draw() {
  background("black");  
movingrect.x = mouseX;
movingrect.y = mouseY;

console.log(movingrect.x - fixedrect.x)

if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 &&
  fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 && 
  movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2  &&
  fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2 )
{
  movingrect.shapeColor = "red"
  fixedrect.shapeColor = "red"
}
else{
  movingrect.shapeColor = "green"
  fixedrect.shapeColor = "green"
}
  drawSprites();
}