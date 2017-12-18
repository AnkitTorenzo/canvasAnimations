var canvas = document.querySelector('canvas');
var image = document.querySelector('img');
canvas.width = innerWidth;
canvas.height = innerHeight;


var imgHeight = image.clientHeight;
var imgWidth = image.clientWidth;
var c = canvas.getContext('2d');
var stick = true;
window.addEventListener('resize',function () {
   canvas.width = innerWidth;
   canvas.height = innerHeight;
   init();
});

function Snow(){

    this.x = Math.random()*canvas.width;
    this.y = Math.random()* -canvas.height;
    this.dx = Math.random()*2;
    this.dy = Math.random()*2;
    this.r = Math.random()*3;

    this.draw = function(){
        c.fillStyle = '#FFF';
        c.beginPath();
        c.arc(this.x,this.y,this.r,0,360,false);
        c.fill();
    };

    this.update = function(){
        this.draw();

        if(this.x > canvas.width){
            this.x = 0;
        }

        if(this.y > canvas.height){
            this.y = 0;
        }

        if(this.y >= imgHeight+50 && this.y <= (imgHeight+50)+5 && this.x >= (canvas.width/2)-(imgWidth/2) && this.x <= (canvas.width/2)+(imgWidth/2) && stick){
            this.y += 0;
            this.x += 0;
        }else{

            this.x += this.dx;
            this.y += this.dy;
        }
    }
}
var snowFall = [];
function init(){

    snowFall = [];
    for(var i = 0; i< 400 ; i++){
        var snow = new Snow();
        snowFall.push(snow);
    }
}

function draw(){
    c.clearRect(0,0,innerWidth,innerHeight);
    requestAnimationFrame(draw);
    c.fillStyle = '#000';
    c.fillRect(0,0,canvas.width,canvas.height);
    c.fill();
    for(var i = 0; i< snowFall.length ; i++){
        snowFall[i].update();
    }
}

window.addEventListener('click',function(){
    stick = false;
    setTimeout(function(){
        stick = true;
    },600);
});

init();
draw();
