//Create variables here
var dog, dogImg, happyDog, database, foodS, foodStock;
var feed, addFood;
var fedTime, lastFed;
var foodObj;


function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
  Milk = loadImage("images/Milk.png")

}

function setup() {
  database = firebase.database();
  createCanvas(500,500);
  
 // foodObj = new Food();
  
  dog = createSprite(800,220,150,150);
  dog.addImage(dogImg)
  dog.scale = 0.15

  feed = createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
  foodStock=database.ref("Food")
  foodStock.on("value",readStock)

}


function draw() {  
  background(46,139,87);
 // foodObj.display();
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS)
   dog.addImage(happyDog)


 }
  drawSprites();
fill ("white")
text ("food remaining:"+foodS,170,200)
text("note:press the up arrow key to feed the dog",300,20)
}
function readStock(data){
foodS=data.val();
}

function writeStock(x){
  if(x<=0){
   x=0;
  }else{
    x=x-1;
  }
database.ref("/").update({
Food:x
})
}











