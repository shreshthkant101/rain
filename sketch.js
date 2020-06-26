const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var canvas;

function setup(){
    canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    rain = [];
}
function draw(){
    background(0);
    Engine.update(engine);
    
    rain.push(new Rain(random(displayWidth),0,10));
    
    for(var j = 0; j < rain.length; j += 1){
        rain[j].display();
    }
}
