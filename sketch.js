const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow1, snow2,snow3,snow4,snow5;
var backgroundImg,platform; 
var bg;

function preload() {
  this.bg = loadImage("snow2.jpg")
this.image1 = loadImage("snow1.jpg");
this.image2 = loadImage("snow2.jpg");
this.image3 = loadImage("snow3.jpg");
//this.image4 = loadImage("snow4.webdp");
//this.image5 = loadImage("snow5.webdp");
loadAnimation("snow1.jpg","snow2.jpg","snow3.jpg","snow4.webp","snow5.webp")
}
function setup() {
  createCanvas(800,400);
}

function draw() {
background(bg);

//jump when the space key is pressed
if(keyDown("space")&& snow3.y >= 100) {
  snow3.velocityY = 12;
  //add gravity
  snow3.velocityY = snow3
  
  .velocityY + 0.8
}

  drawSprites();
}