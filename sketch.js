
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var polygon1
var ground1,ground2
var slingshot1
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16
var score=0
function preload()
{
	getBgImage();
}

function setup() {
	createCanvas(1000, 700);
   

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	polygon1=new Polygon(400,400,50)
    slingshot1=new SlingShot(polygon1.body,{x:100,y:350});
	ground1= new Ground(500,400,240,20)
	ground2= new Ground(500,650,1000,20)
	box1=new Box(500,360,30,40)
	box2=new Box(470,360,30,40)
	box3=new Box(440,360,30,40)
	box4=new Box(410,360,30,40)
	box5=new Box(530,360,30,40)
	box6=new Box(560,360,30,40)
	box7=new Box(590,360,30,40)
	box8=new Box(500,320,30,40)
	box9=new Box(470,320,30,40)
	box10=new Box(440,320,30,40)
	box11=new Box(560,320,30,40)
	box12=new Box(530,320,30,40)
	box13=new Box(530,280,30,40)
	box14=new Box(470,280,30,40)
	box15=new Box(500,280,30,40)
	box16=new Box(500,240,30,40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  
  drawSprites();
  noStroke();
    textSize(35);
    fill("white");
    text("SCORE: "+ score, width-300,50)
  ground1.display();
  ground2.display();
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();
  box13.display();
  box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();
  box16.display();
  box16.score();
  polygon1.display();
  slingshot1.display();
}

function mouseDragged() {

	Matter.Body.setPosition(polygon1.body, { x: mouseX, y: mouseY });
	
	}
	
	function mouseReleased() {
	
	slingshot1.fly();
	
	}

	function keyPressed(){

		if(keyCode === 32){
	
			slingshot1.attach(polygon1.body);
		}
	
	
	}
	async function getBgImage() {
    
		var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
		var responseJSON = await response.json();
	
		console.log(responseJSON);
	
		var datetime = responseJSON.datetime;
		console.log(datetime);
	
		var hour = datetime.slice(11,13);
		console.log(hour);
		if(hour>=06 && hour<=19){
			background("white");
	}
	else{
		 background("black")
	}
}