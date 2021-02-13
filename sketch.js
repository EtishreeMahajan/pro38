var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Constraint = Matter.Constraint;
var engine, world, bodies;
var mConstraint;
function setup() {
    createCanvas(600, 600);
    engine = Engine.create();
    world = engine.world;
    
    bob1 = new Pendulum(180, 400, "blue");
    bob2 = new Pendulum(240, 400, "blue");
    bob3 = new Pendulum(300, 400, "blue");
    bob4 = new Pendulum(360, 400, "blue");
    bob5 = new Pendulum(420, 400, "blue");

    sling1 = new Sling(bob1.body, { x: 180, y: 200 });
    sling2 = new Sling(bob2.body, { x: 240, y: 200 });
    sling3 = new Sling(bob3.body, { x: 300, y: 200 });
    sling4 = new Sling(bob4.body, { x: 360, y: 200 });
    sling5 = new Sling(bob5.body, { x: 420, y: 200 });

}

function draw() {
    background(0);
    Engine.update(engine);

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
    
}

function mouseDragged() {
    Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY })
}