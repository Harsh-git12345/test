var ball;
var database, ballposition, pos;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
    console.log(database);
    pos = database.ref("ball/position");
    pos.on("value", readposition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
    database.ref("ball/position").set({
        x: ballposition.x + x,
        y: ballposition.y + y
    }) 
}

function readposition(data) {
    ballposition = data.val();
    ball.x = ballposition.x;
    ball.y = ballposition.y;
}
