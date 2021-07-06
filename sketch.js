var garden,rabbit, apple, leaf, oranLeaf;
var gardenImg,rabbitImg, appleImg, leafImg, oranLeafImg;
var number;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  oranLeafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

  
number = Math.round(random(50, 100));
  

  

  



}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;
  
  spawnApples();
  spawnLeafs();
  spawnOranLeafs();
  drawSprites();
}
function spawnApples(){
if(frameCount % 250 === 0){
apple = createSprite(50, 40, 30, 30);
apple.addImage(appleImg);
apple.scale = 0.07;
apple.y = Math.round(random(80, 120));
apple.velocityY = 3;
console.log(apple.depth)
console.log(apple.depth)

}
}

function spawnLeafs(){
if(frameCount % 300 === 0){
leaf = createSprite(150, 40, 30, 30);
leaf.addImage(leafImg);
leaf.scale = 0.07;
leaf.y = Math.round(random(80, 120));
leaf.velocityY = 3;
console.log(leaf.depth)
console.log(leaf.depth)

}
}

function spawnOranLeafs(){
if(frameCount % 100 === 0){
oranLeaf = createSprite(250, 40, 30, 30);
oranLeaf.addImage(oranLeafImg);
oranLeaf.scale = 0.07;
oranLeaf.y = Math.round(random(80, 120));
oranLeaf.velocityY = 3;
console.log(oranLeaf.depth)
console.log(oranLeaf.depth)

}
}