let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
setInterval(game, 1000 / 200);
let windowWidth= 360;
let windowHeight= 500;
let switcher = false;
let devMode = false;
const trunc = 6;
let finishLine = 1240;
const user = {
    x: 5,
    y: 5,
    vX: 0,
    vY: 0,
    dir: 'stop',
    size: 20,
    bullet: {
        x:-10,
        y: windowHeight + 10,
        size:trunc,
        vY: 0,
        velocity: 2
    },
    shot:false
};

const enemy ={
    x: 340,
    y: 480,
    vX: 0,
    size: 20,
    velocity: 0.3,
    bullet: {
        x:-10,
        y:-10,
        size:trunc,
        vY: 0,
        velocity: 2
    },
    shot:false,
    working: true
};
let gameOver = false;
let gameWon = false;
let velocity = 0.5;
let start = 0;
let progress = 0;

walls = [
    boldness=6,
    wallUnit= 36,
    {
        x:0,
        y:wallUnit,
        width: wallUnit,
        height:boldness
    },
    {
        x:2*wallUnit,
        y:wallUnit,
        width: 2*wallUnit,
        height: boldness
    },
    {
        x:5*wallUnit,
        y:wallUnit,
        width:2*wallUnit,
        height:boldness
    },
    {
        x:8*wallUnit,
        y:wallUnit,
        width:2*wallUnit,
        height:boldness
    },
    {
        x:wallUnit,
        y:wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:wallUnit,
        y:2*wallUnit,
        width:wallUnit,
        height:boldness
    },
    {
        x:4*wallUnit,
        y:wallUnit,
        width:boldness,
        height:2*wallUnit
    },
    {
        x:7*wallUnit,
        y:wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:8*wallUnit,
        y:wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:8*wallUnit,
        y:2*wallUnit,
        width:wallUnit,
        height: boldness
    },
    {
        x:3*wallUnit,
        y:2*wallUnit,
        width:boldness,
        height:wallUnit+boldness
    },
    {
        x:6*wallUnit,
        y:2*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:9*wallUnit,
        y:2*wallUnit,
        width:boldness,
        height:3*wallUnit
    },
    {
        x:wallUnit,
        y:3*wallUnit,
        width:2*wallUnit,
        height:boldness
    },
    {
        x:4*wallUnit,
        y:3*wallUnit,
        width: wallUnit,
        height:boldness
    },
    {
        x:5*wallUnit,
        y:2*wallUnit,
        width:boldness,
        height:wallUnit+boldness
    },
    {
        x:6*wallUnit,
        y:3*wallUnit,
        width:2*wallUnit,
        height:boldness
    },
    {
        x:wallUnit,
        y:3*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:8*wallUnit,
        y:3*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:0,
        y:5*wallUnit,
        width:2*wallUnit,
        height:boldness
    },
    {
        x:2*wallUnit,
        y:4*wallUnit,
        width:boldness,
        height:wallUnit+boldness
    },
    {
        x:3*wallUnit,
        y:4*wallUnit,
        width: wallUnit,
        height:boldness
    },
    {
        x:3*wallUnit,
        y:4*wallUnit,
        width:boldness,
        height:2*wallUnit
    },
    {
        x:4*wallUnit,
        y:4*wallUnit,
        width:boldness,
        height:2*wallUnit
    },
    {
        x:5*wallUnit,
        y:4*wallUnit,
        width:boldness,
        height:wallUnit,
    },
    {
        x:6*wallUnit,
        y:4*wallUnit,
        width:wallUnit,
        height:boldness
    },
    {
        x:5*wallUnit,
        y:5*wallUnit,
        width:wallUnit,
        height:boldness
    },
    {
        x:7*wallUnit,
        y:4*wallUnit,
        width:boldness,
        height:3*wallUnit
    },
    {
        x:8*wallUnit,
        y:5*wallUnit,
        width:wallUnit+boldness,
        height:boldness
    },
    {
        x:wallUnit,
        y:6*wallUnit,
        width:2*wallUnit+boldness,
        height:boldness
    },
    {
        x:4*wallUnit,
        y:6*wallUnit,
        width:wallUnit,
        height:boldness
    },
    {
        x:8*wallUnit,
        y:6*wallUnit,
        width:2*wallUnit,
        height:boldness
    },
    {
        x:5*wallUnit,
        y:6*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:6*wallUnit,
        y:5*wallUnit,
        width:boldness,
        height:3*wallUnit,
    },
    {
        x:8*wallUnit,
        y:6*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:wallUnit,
        y:6*wallUnit,
        width:boldness,
        height:2*wallUnit
    },
    {
        x:2*wallUnit,
        y:7*wallUnit,
        width:3*wallUnit+boldness,
        height:boldness
    },
    {
        x:8*wallUnit,
        y:7*wallUnit,
        width:wallUnit,
        height:boldness
    },
    {
        x:wallUnit,
        y:8*wallUnit,
        width:3*wallUnit,
        height:boldness
    },
    {
        x:5*wallUnit,
        y:8*wallUnit,
        width:wallUnit+boldness,
        height:boldness
    },
    {
        x:7*wallUnit,
        y:8*wallUnit,
        width:2*wallUnit,
        height:boldness
    },
    {
        x:7*wallUnit,
        y:8*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:9*wallUnit,
        y:8*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:4*wallUnit,
        y:8*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:5*wallUnit,
        y:8*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:wallUnit,
        y:9*wallUnit,
        width:2*wallUnit,
        height:boldness
    },
    {
        x:3*wallUnit,
        y:9*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:4*wallUnit,
        y:9*wallUnit,
        width:wallUnit+boldness,
        height:boldness
    },
    {
        x:6*wallUnit,
        y:9*wallUnit,
        width:wallUnit+boldness,
        height:boldness
    },
    {
        x:8*wallUnit,
        y:9*wallUnit,
        width:boldness,
        height:wallUnit+boldness
    },
    {
        x:0,
        y:10*wallUnit,
        width:2*wallUnit,
        height:boldness
    },
    {
        x:2*wallUnit,
        y:10*wallUnit,
        width: boldness,
        height:wallUnit
    },
    {
        x:4*wallUnit,
        y:10*wallUnit,
        width:boldness,
        height:wallUnit,
    },
    {
        x:4*wallUnit,
        y:10*wallUnit,
        width:wallUnit,
        height:boldness
    },
    {
        x:6*wallUnit,
        y:10*wallUnit,
        width:2*wallUnit,
        height:boldness
    },
    {
        x:9*wallUnit,
        y:10*wallUnit,
        width:wallUnit,
        height:boldness
    },
    {
        x:9*wallUnit,
        y:10*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:wallUnit,
        y:11*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:2*wallUnit,
        y:11*wallUnit,
        width:wallUnit,
        height:boldness
    },
    {
        x:3*wallUnit,
        y:11*wallUnit,
        width:boldness,
        height:wallUnit,
    },
    {
        x:3*wallUnit,
        y:11*wallUnit,
        width:wallUnit+boldness,
        height:boldness
    },
    {
        x:5*wallUnit,
        y:11*wallUnit,
        width:wallUnit,
        height:boldness
    },
    {
        x:5*wallUnit,
        y:11*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:7*wallUnit,
        y:11*wallUnit,
        width:boldness,
        height:2*wallUnit,
    },
    {
        x:8*wallUnit,
        y:11*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:8*wallUnit,
        y:11*wallUnit,
        width:wallUnit+boldness,
        height:boldness
    },
    {
        x:wallUnit,
        y:12*wallUnit,
        width:wallUnit,
        height:boldness
    },
    {
        x:2*wallUnit,
        y:12*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:3*wallUnit,
        y:12*wallUnit,
        width:2*wallUnit+boldness,
        height:boldness
    },
    {
        x:6*wallUnit,
        y:12*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:9*wallUnit,
        y:12*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:wallUnit,
        y:13*wallUnit,
        width: boldness,
        height: 2*wallUnit
    },
    {
        x:3*wallUnit,
        y:13*wallUnit,
        width: wallUnit,
        height:boldness
    },
    {
        x:4*wallUnit,
        y:13*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:5*wallUnit,
        y:13*wallUnit,
        width:4*wallUnit+boldness,
        height:boldness
    },
    {
        x:5*wallUnit,
        y:13*wallUnit,
        width: boldness,
        height:2*wallUnit
    },
    {
        x:9*wallUnit,
        y:13*wallUnit,
        width:boldness,
        height:2*wallUnit
    },
    {
        x:2*wallUnit,
        y:14*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:2*wallUnit,
        y:14*wallUnit,
        width: 2*wallUnit+boldness,
        height: boldness
    },
    {
        x:6*wallUnit,
        y:14*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:6*wallUnit,
        y:14*wallUnit,
        width:2*wallUnit+boldness,
        height:boldness
    },
    {
        x:8*wallUnit,
        y:14*wallUnit,
        width:boldness,
        height:3*wallUnit
    },
    {
        x:wallUnit,
        y:15*wallUnit,
        width:4*wallUnit+boldness,
        height:boldness
    },
    {
        x:3*wallUnit,
        y:15*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:7*wallUnit,
        y:15*wallUnit,
        width: boldness,
        height: 3*wallUnit
    },
    {
        x:0,
        y:16*wallUnit,
        width:wallUnit,
        height:boldness
    },
    {
        x:wallUnit,
        y:16*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:2*wallUnit,
        y:16*wallUnit,
        width:2*wallUnit,
        height: boldness
    },
    {
        x:3*wallUnit,
        y:16*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:5*wallUnit,
        y:16*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:6*wallUnit,
        y:16*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:9*wallUnit,
        y:16*wallUnit,
        width:wallUnit,
        height:boldness
    },
    {
        x:wallUnit,
        y:17*wallUnit,
        width:wallUnit,
        height:boldness,
    },
    {
        x:2*wallUnit,
        y:17*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:4*wallUnit,
        y:17*wallUnit,
        width:boldness,
        height:wallUnit,
    },
    {
        x:4*wallUnit,
        y:17*wallUnit,
        width:wallUnit+boldness,
        height:boldness
    },
    {
        x:6*wallUnit,
        y:17*wallUnit,
        width:wallUnit,
        height:boldness
    },
    {
        x:8*wallUnit,
        y:17*wallUnit,
        width:2*wallUnit,
        height:boldness,
    },
    {
        x:9*wallUnit,
        y:17*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:wallUnit,
        y:18*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:wallUnit,
        y:18*wallUnit,
        width:wallUnit+boldness,
        height:boldness
    },
    {
        x:3*wallUnit,
        y:18*wallUnit,
        width:boldness,
        height:3*wallUnit
    },
    {
        x:3*wallUnit,
        y:18*wallUnit,
        width:wallUnit+boldness,
        height:boldness
    },
    {
        x:5*wallUnit,
        y:18*wallUnit,
        width:boldness,
        height:wallUnit,
    },
    {
        x:6*wallUnit,
        y:18*wallUnit,
        width:boldness,
        height:wallUnit,
    },
    {
        x:7*wallUnit,
        y:18*wallUnit,
        width: wallUnit,
        height: boldness
    },
    {
        x:wallUnit,
        y:19*wallUnit,
        width:wallUnit,
        height:boldness,
    },
    {
        x:2*wallUnit,
        y:19*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:4*wallUnit,
        y:19*wallUnit,
        width:boldness,
        height:3*wallUnit
    },
    {
        x:4*wallUnit,
        y:19*wallUnit,
        width:wallUnit+boldness,
        height:boldness
    },
    {
        x:6*wallUnit,
        y:19*wallUnit,
        width:2*wallUnit,
        height:boldness,
    },
    {
        x:8*wallUnit,
        y:19*wallUnit,
        width:boldness,
        height:4*wallUnit
    },
    {
        x:9*wallUnit,
        y:19*wallUnit,
        width:boldness,
        height:2*wallUnit,
    },
    {
        x:9*wallUnit,
        y:19*wallUnit,
        width:wallUnit,
        height:boldness
    },
    {
        x:wallUnit,
        y:20*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:wallUnit,
        y:20*wallUnit,
        width:wallUnit+boldness,
        height:boldness
    },
    {
        x:5*wallUnit,
        y:20*wallUnit,
        width:boldness,
        height:2*wallUnit,
    },
    {
        x:5*wallUnit,
        y:20*wallUnit,
        width:wallUnit,
        height:boldness,
    },
    {
        x:6*wallUnit,
        y:20*wallUnit,
        width:boldness,
        height:2*wallUnit,
    },
    {
        x:7*wallUnit,
        y:20*wallUnit,
        width:boldness,
        height:2*wallUnit,  
    },
    {
        x:wallUnit,
        y:21*wallUnit,
        width:2*wallUnit+boldness,
        height:boldness
    },
    {
        x:0,
        y:22*wallUnit,
        width:wallUnit,
        height:boldness
    },
    {
        x:wallUnit,
        y:22*wallUnit,
        width:boldness,
        height:2*wallUnit
    },
    {
        x:2*wallUnit,
        y:22*wallUnit,
        width:boldness,
        height:2*wallUnit
    },
    {
        x:3*wallUnit,
        y:22*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:3*wallUnit,
        y:22*wallUnit,
        width:wallUnit+boldness,
        height:boldness
    },
    {
        x:6*wallUnit,
        y:22*wallUnit,
        width:wallUnit+boldness,
        height:boldness
    },
    {
        x:9*wallUnit,
        y:22*wallUnit,
        width:boldness,
        height:wallUnit,
    },
    {
        x:9*wallUnit,
        y:22*wallUnit,
        width:wallUnit,
        height:boldness
    },
    {
        x:3*wallUnit,
        y:23*wallUnit,
        width:wallUnit,
        height:boldness
    },
    {
        x:4*wallUnit,
        y:23*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:5*wallUnit,
        y:23*wallUnit,
        width:2*wallUnit,
        height:boldness,
    },
    {
        x:7*wallUnit,
        y:23*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:wallUnit,
        y:24*wallUnit,
        width:wallUnit+boldness,
        height:boldness
    },
    {
        x:3*wallUnit,
        y:24*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:3*wallUnit,
        y:24*wallUnit,
        width:3*wallUnit,
        height:boldness
    },
    {
        x:6*wallUnit,
        y:24*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:7*wallUnit,
        y:24*wallUnit,
        width:3*wallUnit,
        height:boldness
    },
    {
        x:wallUnit,
        y:25*wallUnit,
        width:2*wallUnit+boldness,
        height:boldness
    },
    {
        x:wallUnit,
        y:25*wallUnit,
        width:boldness,
        height:5*wallUnit
    },
    {
        x:4*wallUnit,
        y:25*wallUnit,
        width:boldness,
        height:wallUnit,
    },
    {
        x:4*wallUnit,
        y:25*wallUnit,
        width:wallUnit,
        height:boldness,
    },
    {
        x:6*wallUnit,
        y:25*wallUnit,
        width:3*wallUnit,
        height:boldness
    },
    {
        x:2*wallUnit,
        y:26*wallUnit,
        width:boldness,
        height:4*wallUnit
    },
    {
        x:2*wallUnit,
        y:26*wallUnit,
        width:2*wallUnit+boldness,
        height:boldness
    },
    {
        x:5*wallUnit,
        y:26*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:5*wallUnit,
        y:26*wallUnit,
        width:4*wallUnit,
        height:boldness
    },
    {
        x:9*wallUnit,
        y:26*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:3*wallUnit,
        y:27*wallUnit,
        width:boldness,
        height:4*wallUnit
    },
    {
        x:3*wallUnit,
        y:27*wallUnit,
        width:2*wallUnit+boldness,
        height:boldness
    },
    {
        x:6*wallUnit,
        y:27*wallUnit,
        width:boldness,
        height:2*wallUnit
    },
    {
        x:7*wallUnit,
        y:27*wallUnit,
        width:boldness,
        height:2*wallUnit,
    },
    {
        x:7*wallUnit,
        y:27*wallUnit,
        width:2*wallUnit+boldness,
        height:boldness
    },
    {
        x:4*wallUnit,
        y:28*wallUnit,
        width:boldness,
        height:4*wallUnit
    },
    {
        x:4*wallUnit,
        y:28*wallUnit,
        width:wallUnit,
        height:boldness
    },
    {
        x:5*wallUnit,
        y:28*wallUnit,
        width:boldness,
        height:3*wallUnit
    },
    {
        x:8*wallUnit,
        y:28*wallUnit,
        width:boldness,
        height:wallUnit,
    },
    {
        x:8*wallUnit,
        y:28*wallUnit,
        width:2*wallUnit,
        height:boldness
    },
    {
        x:6*wallUnit,
        y:29*wallUnit,
        width:wallUnit+boldness,
        height:boldness
    },
    {
        x:8*wallUnit,
        y:29*wallUnit,
        width:wallUnit,
        height:boldness
    },
    {
        x:wallUnit,
        y:30*wallUnit,
        width:wallUnit+boldness,
        height:boldness
    },
    {
        x:6*wallUnit,
        y:30*wallUnit,
        width:4*wallUnit,
        height:boldness
    },
    {
        x:0,
        y:31*wallUnit,
        width:3*wallUnit+boldness,
        height:boldness
    },
    {
        x:5*wallUnit,
        y:31*wallUnit,
        width:4*wallUnit,
        height:boldness
    },
    {
        x:9*wallUnit,
        y:31*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:wallUnit,
        y:32*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:wallUnit,
        y:32*wallUnit,
        width:3*wallUnit+boldness,
        height:boldness
    },
    {
        x:5*wallUnit,
        y:32*wallUnit,
        width:boldness,
        height:wallUnit,
    },
    {
        x:5*wallUnit,
        y:32*wallUnit,
        width:4*wallUnit+boldness,
        height:boldness
    },
    {
        x:wallUnit,
        y:33*wallUnit,
        width:3*wallUnit,
        height:boldness
    },
    {
        x:4*wallUnit,
        y:33*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:5*wallUnit,
        y:33*wallUnit,
        width:4*wallUnit,
        height:boldness
    },
    {
        x:9*wallUnit,
        y:33*wallUnit,
        width:boldness,
        height:wallUnit
    },
    {
        x:0,
        y:34*wallUnit,
        width:3*wallUnit,
        height:boldness
    },
    {
        x:4*wallUnit,
        y:34*wallUnit,
        width:5*wallUnit+boldness,
        height:boldness
    }

]



document.addEventListener('keydown', keyPush);
document.getElementById('retry').addEventListener('click', function () {
    user.vX = 0;
    user.vY = 0;
    user.x = boldness; user.y = boldness;
    enemy.x = 340;
    enemy.y = 480;
    enemy.shot = true; 
    enemy.bullet.y= start + windowHeight+10;   
    walls.forEach(wall => {
        wall.y+=progress;
    });
    progress=0;
    finishLine = 1240;
    canvas.style.display = "initial";
    document.getElementById('gameOver').style.display = 'none';
    document.getElementById('retry').style.display = 'none';
    gameOver = false;
    user.dir = 'stop';
})


function keyPush(event) {
    switch (event.keyCode) {
        case 37: user.dir = 'left'; break;
        case 38: user.dir = 'up'; break;
        case 39: user.dir = 'right'; break;
        case 40: user.dir = 'down'; break;
        case 32: user.shot = ((user.dir == "down"||user.dir == "stop")
        &&user.bullet.y>windowHeight); break;
    }
}
function move() {
    switch (user.dir) {
        case 'left': user.vX = -velocity; user.vY = 0; break;
        case 'up': user.vX = 0; user.vY = -velocity; break;
        case 'right': user.vX = velocity; user.vY = 0; break;
        case 'down': user.vX = 0; user.vY = velocity; break;
    }
}


function game() {
    if(!gameWon){

        switcher = !switcher
        move();
        enemyLogic(enemy,user);
        checkWay(walls);
    
        if(user.y>finishLine-windowWidth/3-80){
            start = 0;
        }
        else if(user.y>2*windowWidth/3){
    
            start = user.y-2*windowWidth/3;
            progress+=start;
        }
        else if(user.y>windowWidth/3-progress&&user.y<windowWidth/3){
            start = user.y-windowWidth/3;
            progress+=start;
        }
        else{
            start = 0;
        }
        if(devMode){
            start = 900;
            devMode =false;
        }  
        user.bullet.vY  = (user.bullet.velocity+user.y*0.0005);
        enemy.bullet.vY = -(enemy.bullet.velocity+user.y*0.001);
    
        walls.forEach(wall => {
            wall.y-=start;
        });
        finishLine-=start;
    
        if(!gameOver){
            user.x += user.vX;
            user.y += user.vY-start;
            user.bullet.x += user.bullet.vX; 
            user.bullet.y += user.bullet.vY;
        }
    
        if(enemy.working){
            enemy.x+=enemy.vX;
        }
        enemy.bullet.y += enemy.bullet.vY;
    
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, windowWidth, windowHeight);
    
        if(enemy.bullet.y<start&&!enemy.shot&&enemy.working){
            enemy.shot=true;
        }
        if(enemy.bullet.y<start-300){
            enemy.working = true;
        }
    
        drawWall(walls);
    
        ctx.fillStyle = 'lightBlue';
        ctx.fillRect(0,windowHeight-20,windowWidth,20);
    
        ctx.fillStyle = 'lightGreen';
        ctx.fillRect(0,finishLine,windowWidth,100);
    
        
    
        drawTank();
        if(enemy.working||switcher){
            drawEnemy(enemy);
        }
        
        if(user.shot) {
            switch (user.dir) {
                case 'stop': user.bullet.x = user.x + user.size/2 -trunc/2 ; user.bullet.y = user.y + user.size + trunc/2; user.bullet.vX = 0; user.bullet.vY = user.bullet.velocity; user.shot = false; break;
    
                case 'up': user.bullet.x = user.x + user.size / 2 - trunc/2; user.bullet.y = user.y - trunc; user.bullet.vx = 0; user.bullet.vy = -user.bullet.velocity; user.shot = false; break;
                 
                case 'down': user.bullet.x = user.x + user.size / 2 - trunc/2; user.bullet.y = user.y + user.size + trunc; user.bullet.vX = 0; user.bullet.vY = user.bullet.velocity; user.shot = false; break;
            }
        }
    
        if(enemy.shot){
            enemy.bullet.x = enemy.x + enemy.size / 2 - trunc/2; enemy.bullet.y = enemy.y - trunc;
            enemy.bullet.vY = -enemy.bullet.velocity;
            enemy.shot = false;
        }
    
        if(user.bullet.x+user.bullet.size>enemy.x&&
            user.bullet.x<enemy.x+enemy.size&&
            user.bullet.y+user.bullet.size>enemy.y&&
            user.bullet.y<enemy.y+enemy.size&&enemy.working){
                enemy.working = false;
                enemy.bullet.y = start - 10;
                user.shot = false;
        }
        if(enemy.bullet.x+enemy.bullet.size>user.x&&
            enemy.bullet.x<user.x+user.size&&
            enemy.bullet.y+enemy.bullet.size>user.y&&
            enemy.bullet.y<user.y+user.size){
                gameOver = true;
        }
    
        ctx.fillStyle = 'red';
        ctx.fillRect(user.bullet.x, user.bullet.y, user.bullet.size, user.bullet.size);
    
        if(enemy.working){
            ctx.fillStyle = 'yellow';
            ctx.fillRect(enemy.bullet.x, enemy.bullet.y, enemy.bullet.size, enemy.bullet.size);
        }
    
    
    
        if (gameOver) {
            canvas.style.display = "none";
            document.getElementById('gameOver').style.display = 'block';
            document.getElementById('retry').style.display = 'block';
        }
        if(user.y>finishLine){
            gameWon=true;
        }
    }
}

function drawTank(){
    if (user.dir == 'stop') {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(user.x, user.y);
        ctx.lineTo(user.x + user.size, user.y);
        ctx.lineTo(user.x + user.size, user.y + user.size);
        ctx.lineTo(user.x + user.size / 2 - trunc/2, user.y + user.size);
        ctx.lineTo(user.x + user.size / 2 - trunc/2, user.y + user.size + trunc);
        ctx.lineTo(user.x + user.size / 2 + trunc/2, user.y + user.size + trunc);
        ctx.lineTo(user.x + user.size / 2 + trunc/2, user.y + user.size);
        ctx.lineTo(user.x, user.y + user.size);
        ctx.closePath();
        ctx.fill();
    }
    if (user.dir == 'right') {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(user.x, user.y);
        ctx.lineTo(user.x + user.size, user.y);
        ctx.lineTo(user.x + user.size, user.y + user.size / 2 - trunc/2);
        ctx.lineTo(user.x + user.size + trunc, user.y + user.size / 2 - trunc/2);
        ctx.lineTo(user.x + user.size + trunc, user.y + user.size / 2 + trunc/2);
        ctx.lineTo(user.x + user.size, user.y + user.size / 2 + trunc/2);
        ctx.lineTo(user.x + user.size, user.y + user.size);
        ctx.lineTo(user.x, user.y + user.size);
        ctx.closePath();
        ctx.fill();
    }

    if (user.dir == 'left') {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(user.x, user.y);
        ctx.lineTo(user.x + user.size, user.y);
        ctx.lineTo(user.x + user.size, user.y + user.size);
        ctx.lineTo(user.x, user.y + user.size);
        ctx.lineTo(user.x, user.y + user.size / 2 + trunc/2);
        ctx.lineTo(user.x - trunc, user.y + user.size / 2 + trunc/2);
        ctx.lineTo(user.x - trunc, user.y + user.size / 2 - trunc/2);
        ctx.lineTo(user.x, user.y + user.size / 2 - trunc/2);
        ctx.closePath();
        ctx.fill();
    }

    if (user.dir == 'up') {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(user.x, user.y);
        ctx.lineTo(user.x + user.size / 2 - trunc/2, user.y);
        ctx.lineTo(user.x + user.size / 2 - trunc/2, user.y - trunc);
        ctx.lineTo(user.x + user.size / 2 + trunc/2, user.y - trunc);
        ctx.lineTo(user.x + user.size / 2 + trunc/2, user.y);
        ctx.lineTo(user.x + user.size, user.y);
        ctx.lineTo(user.x + user.size, user.y + user.size);
        ctx.lineTo(user.x, user.y + user.size);
        ctx.closePath();
        ctx.fill();
    }

    if (user.dir == 'down') {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(user.x, user.y);
        ctx.lineTo(user.x + user.size, user.y);
        ctx.lineTo(user.x + user.size, user.y + user.size);
        ctx.lineTo(user.x + user.size / 2 - trunc/2, user.y + user.size);
        ctx.lineTo(user.x + user.size / 2 - trunc/2, user.y + user.size + trunc);
        ctx.lineTo(user.x + user.size / 2 + trunc/2, user.y + user.size + trunc);
        ctx.lineTo(user.x + user.size / 2 + trunc/2, user.y + user.size);
        ctx.lineTo(user.x, user.y + user.size);
        ctx.closePath();
        ctx.fill();
    }
}

function drawWall(walls){
    walls.forEach(wall =>{
        ctx.fillStyle = 'blue';
        ctx.fillRect(wall.x,wall.y,wall.width,wall.height);
    });
}

function checkWay(walls){
    if (user.dir == 'left' && user.x < 0) {
        user.vX = 0;
    }
    else if (user.dir == 'right' && user.x + user.size > windowWidth) {
        user.vX = 0;
    }
    else if (user.dir == 'up' && user.y< 0) {
        user.vY = 0;
    }
    else if (user.dir == 'down' && user.forEachy + user.size > windowHeight) {
        user.vY = 0;
    }
    let checkableWalls = [];

    walls.forEach(wall=>{
        if(user.dir=='left'&&user.y+user.size>wall.y&&user.y<wall.y+wall.height){
            checkableWalls.push(wall);
        }
        else if(user.dir=='right'&&user.y+user.size>wall.y&&user.y<wall.y+wall.height){
            checkableWalls.push(wall);
        }
        else if(user.dir=='up'&&user.x+user.size>wall.x&&user.x<wall.x+wall.width){
            checkableWalls.push(wall);
        }
        else if(user.dir=='down'&&user.x+user.size>wall.x&&user.x<wall.x+wall.width){
            checkableWalls.push(wall);
        }
    })

    checkableWalls.forEach(wall => {   
    if (user.dir == 'left'){
        if(user.x+user.size>wall.x+wall.width&&user.x==wall.x+wall.width&&user.y+user.size>wall.y&&user.y<wall.y+wall.height){
            user.vX=0;
        }
    }
    if (user.dir == 'right'){
        if(user.x<wall.x&&user.x+user.size==wall.x&&user.y+user.size>wall.y&&user.y<wall.y+wall.height){
            user.vX=0;
        }
    }
    if (user.dir == 'up'){
        if(user.y+user.size>wall.y+wall.height&&user.y==wall.y+wall.height&&user.x+user.size>wall.x&&user.x<wall.x+wall.width){
            user.vY=0;
        }
    }
    if (user.dir == 'down'){
        if(user.y<wall.y&&user.y+user.size==wall.y&&user.x+user.size>wall.x&&user.x<wall.x+wall.width){
            user.vY=0;
        }
    }
    });

}

function drawEnemy(enemy){
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(enemy.x, enemy.y);
    ctx.lineTo(enemy.x + enemy.size / 2 - trunc/2, enemy.y);
    ctx.lineTo(enemy.x + enemy.size / 2 - trunc/2, enemy.y - trunc);
    ctx.lineTo(enemy.x + enemy.size / 2 + trunc/2, enemy.y - trunc);
    ctx.lineTo(enemy.x + enemy.size / 2 + trunc/2, enemy.y);
    ctx.lineTo(enemy.x + enemy.size, enemy.y);
    ctx.lineTo(enemy.x + enemy.size, enemy.y + enemy.size);
    ctx.lineTo(enemy.x, enemy.y + enemy.size);
    ctx.closePath();
    ctx.fill();
}

function enemyLogic(enemy, user){
    if(enemy.x<user.x){
        enemy.vX = enemy.velocity;
    }
    else{
        enemy.vX = -enemy.velocity;
    }
}
