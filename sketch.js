// creating physics engine object
//engine is used to create physics engine
const Engine = Matter.Engine;
//world is used to create physical world and add object
const World= Matter.World;
//body is used to create object which inhabit the world
const Bodies = Matter.Bodies;

//declaring variables
var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    
    //creating engine
    engine = Engine.create();
    //adding world to the engine
    world = engine.world;

    //creatig ground option 
    var ground_options ={
        isStatic: true
    }

    //adding rectangles to the bodies
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    //adding ground to the world
    World.add(world,ground);

    //adding physics property to ball
    var ball_option ={
        restitution:0.5 
    }

    //creating a ball using physics engine
    ball = Bodies.circle(200,100,20,ball_option);
    //adding ball to the world
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    //value of x and y positions ,position of object is continued to be updating due to physics engine
    rect(ground.position.x,ground.position.y,400,20);


    rect(200,200,50,50);

    ellipseMode(RADIUS);
    //value of x and y positions updating contnously due to physics engine
    ellipse(ball.position.x,ball.position.y,20,20);
}