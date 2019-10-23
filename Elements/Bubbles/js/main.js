var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var colorStyle = [
    '#2C3E50',
    '#FC4349',
    '#FF4600',
    '#6DBCDB',
    '#F2C777'
];

var c = canvas.getContext('2d');
var maxSize = 10;
var mouseX;
var mouseY;

window.addEventListener('mousemove',function (ev) {
    mouseX = ev.x;
    mouseY = ev.y
});
window.addEventListener('resize',function(){
    resizeCanvas(canvas);
    init();
});
function Circle(x, y, dx,dy, minSize){

    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = minSize;
    this.minSize = minSize;
    this.colorStyle = colorStyle[Math.floor(Math.random()*5)];

    this.draw = function(){
        c.beginPath();
        c.fillStyle = this.colorStyle;
        c.arc(this.x,this.y,this.r,0,360,false);
        c.fill();
    };
    this.update = function(){
        this.draw();

        this.x += this.dx;
        this.y += this.dy;
        if(this.x - this.minSize < 0 || this.x + this.minSize > innerWidth){
            this.dx = -this.dx;
        }
        if(this.y -this.minSize < 0 || this.y + this.minSize > innerHeight){
            this.dy = -this.dy;
        }

        if(mouseX - this.x < 50 && mouseX - this.x > -50 && mouseY - this.y < 50 && mouseY - this.y > -50){
            this.r = maxSize * minSize;
        }else{
            this.r = this.minSize;
        }

    }
}

var circleArray = [];
function init(){

    circleArray = [];
    for(var i = 0; i< 1500 ; i++){
        var x = Math.random()* window.innerWidth;
        var y = Math.random()* window.innerHeight;
        var dx = (Math.random() - 0.5) * 2;
        var dy = (Math.random() - 0.5) * 2;
        var circle = new Circle(x,y,dx,dy,Math.random()*5);
        circleArray.push(circle);
    }
}

function animate(){

    c.clearRect(0,0,window.innerWidth,window.innerHeight);
    requestAnimationFrame(animate);
    for(var i = 0; i < circleArray.length ; i++){
        var circle = circleArray[i];
        circle.update();
    }

}

//init your canvas
init();
animate();

function resizeCanvas(cnvs){
    cnvs.width = innerWidth;
    cnvs.height = innerHeight
}
