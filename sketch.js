const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var bgimg;
var snowobj=[] ;
var engine,world;




function preload(){
bgimg = loadImage("snow3.jpg");}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


 
 //Engine.run(engine);
}

function draw() {
  background(bgimg);  
  Engine.update(engine);
  drawSprites();
  if(frameCount%5===0){
snowobj.push(new snowclass(random(10,width),0,PI/7))

  }
  


for(var i=0;i<snowobj.length;i++){
  snowobj[i].display();
}

}


    

  