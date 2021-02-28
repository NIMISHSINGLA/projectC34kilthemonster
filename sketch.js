
 
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;

  
  var myengine,myworld,ground1,hero1;
  var backgroungImage;
  var chain;
  var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
  var monster1;
  
  function preload() {
    //preload the images here
    backgroundd = loadImage("images/GamingBackground.png")

    
    }
    
  function setup() {


    createCanvas(1350,600);
    myengine = Engine.create();
    myworld = myengine.world;
    ground1 = new ground(650,500,1300,20);
    hero1 = new hero(300,400,100);
    chain = new rope(hero1.body,{x:300,y:100})
    box1 = new box(650,480,50,50);
    box2 = new box(600,480,50,50)
    box3 = new box(550,480,50,50);
    box4 = new box(700,480,50,50);
    box5 = new box(750,480,50,50)
    box6 = new box(600,430,50,50)
    box7 = new box(700,430,50,50);
    box8 = new box(650,430,50,50);
    box9 = new box(650,380,50,50)
    box10 = new box(650,330,50,50)
    monster1 = new monster(900,480,70,70);
    
    
     
  }
  
  function draw() {
    background(backgroundd); 
    
    rectMode(CENTER);
    Engine.update(myengine);
    ground1.display();
    hero1.display();
    chain.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    monster1.display();

  }



  function mouseDragged(){
    Matter.Body.setPosition(hero1.body,{x:mouseX , y:mouseY})
  }
