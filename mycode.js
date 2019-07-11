
var spr1;
var spr2;
var kitty;
var kittyImg;
let score = 0;
let bg
var kittyX = 0;
var kittyY = 0;

function preload() {
   kittyImg = loadImage('arrow.png');
}

function setup() {
bg = loadImage("extra epic.png")
   createCanvas(1600, 720);


   kitty = createSprite(width/2, height/2, 300, 225)
   kitty.addImage(kittyImg);

   kitty.onMousePressed = function() {
	//arrow.velocity.y = -5
	//kittyX = kitty.position.x;
	kittyY = kitty.position.y;
	//kittyZ = kitty.position.z;
	//alert(kittyY);
	//kitty.position = [800, 250];

	kitty.velocity.y = -3;

	//kitty.velocity.y = 1;	
   }

   kitty.onMouseReleased = function() {
      //arrow.velocity.y = 5

	kitty.velocity.y = 3;
   }

   spr1 = createSprite(width/5, height/20 ,2880, 250);
   spr1.shapeColor = color(153,0,26);
	//spr1.immovable.true	

    spr2 = createSprite(50, 50, 230, 255);
    spr2.shapeColor = color(1,220,1);
    spr2.velocity.x = 1;
}

function draw() {
   background(bg);
   
	spr2.overlap(kitty, increaseScore);
	
	if(kitty.position.y < 100)
	{
		kitty.velocity.y = 0;
	}

	if(kitty.position.y > 700)
	{
		kitty.velocity.y = 0;
	}

	if(spr2.position.x < 100)
	{
		spr2.velocity.x = 2
	}

		if(spr2.position.x > 1400)
	{
		spr2.velocity.x = -2
	}

 text("Score: " + score, 10, 600);	

   drawSprites();
}

function increaseScore()
{
	score++;
}
