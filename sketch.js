var torre;
var torreimagem;
var fantasma;
var fantasmaimagem;
var portaimagem;
var varandaimagem;
var estadodejogo="jogar";
var varandaG;
var portaG;
var porta;
var invisivel;
var varanda;
var invisivelG;
var paredeinvisivel1;
var paredeinvisivel2;
var fantasmaimagempulo;
var somsusto;



function preload(){

torreimagem=loadImage("tower.png");
fantasmaimagem=loadAnimation("ghost-standing.png");
fantasmaimagempulo=loadAnimation("ghost-jumping.png");
portaimagem=loadImage("door.png");
varandaimagem=loadImage("climber.png");
somsusto=loadSound("spooky.wav");

}
    
function setup(){
 
createCanvas(600,600);    

torre=createSprite(300,300);
torre.addImage(torreimagem);
torre.velocityY=5

fantasma=createSprite(200,200.50,50);
fantasma.addAnimation("parado",fantasmaimagem);
fantasma.addAnimation("pulo",fantasmaimagempulo);
fantasma.scale=0.3;

paredeinvisivel1=createSprite(60,100,10,1000)
paredeinvisivel1.visible=false;

paredeinvisivel2=createSprite(540,100,10,1000)
paredeinvisivel2.visible=false;


varandaG= new Group();
portaG= new Group();
invisivelG= new Group();

}

function draw(){
background("white");
somsusto.play;

if(estadodejogo==="jogar"){ 

//duplicar plano
if(torre.y>600){
    torre.y=300}

//movimento fantasma

fantasma.changeAnimation("parado");

if(keyDown("space")){

  fantasma.velocityY=-5
  fantasma.changeAnimation("pulo");  
}

fantasma.velocityY=fantasma.velocityY+0.5;

if(keyDown(LEFT_ARROW)){

fantasma.velocityX=fantasma.velocityX-0.5    
}

if(keyDown(RIGHT_ARROW)){

    fantasma.velocityX=fantasma.velocityX+0.5    
 }


 if(fantasma.isTouching(invisivelG)||fantasma.y>600){

  estadodejogo="fim";

 

 }

fantasma.collide(varandaG);
fantasma.collide(paredeinvisivel1);
fantasma.collide(paredeinvisivel2);

 

  
 

 
 


portaF();
varandaF();
invisivelF();
}

else if(estadodejogo==="fim"){


  fantasma.visible=false;
  torre.velocityY=0;
  portaG.setVelocityYEach(0);
  varandaG.setVelocityYEach(0);
  
  
  

  
 }










drawSprites(); 


if(estadodejogo==="fim"){

  fill("red"); 
  textSize(50)
  text("fim de jogo",200,300);
  

}
}   


function portaF(){

if (World.frameCount % 60 == 0){

  porta=createSprite(Math.round(random(200,400)),0,50,50);
  porta.velocityY=5;
  porta.addImage(portaimagem);
  portaG.add(porta);
  porta.lifetime=200;
  fantasma.depth=porta.depth
  fantasma.depth=fantasma.depth+1
}
  }


function varandaF(){


if(World.frameCount % 60 == 0){

  varanda=createSprite(300,10);
  varanda.x=porta.x;
  varanda.y=porta.y+70;
  varanda.velocityY=5;
  varanda.addImage(varandaimagem);
  varandaG.add(varanda);
  varanda.lifetime=200;





}


}

function invisivelF(){

if(World.frameCount % 60 == 0){

invisivel=createSprite(300,10,100,10);
invisivel.x=porta.x;
invisivel.y=porta.y+70;
invisivel.velocityY=5;
invisivelG.add(invisivel);
invisivel.lifetime=200;
invisivel.visible=false;

}


}

