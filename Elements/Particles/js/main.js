var canvas = document.querySelector('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');

function Particle (){

    this.x = random(0,window.innerWidth - 25);
    this.y = random(0,window.innerHeight - 25);
    this.dx = (Math.random()-0.5)*2;
    this.dy = (Math.random()-0.5)*2;
    console.log(this.dx,this.dy);
    this.move = function(){

        if(this.x-50 < 0 || this.x+50 > window.innerWidth){
            this.dx = -this.dx;
        }
        if(this.y-50 < 0 || this.y+50 > window.innerHeight){
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
    }

}

var particle = new Particle();

function draw(){
    requestAnimationFrame(draw);

    c.clearRect(0,0,window.innerWidth,window.innerHeight);
    c.beginPath();
    c.fillStyle = '#000';
    c.arc(particle.x,particle.y,4,0,360,false);
    particle.move();
    c.fill();
}
draw();
