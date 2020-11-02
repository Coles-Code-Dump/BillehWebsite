// var/const
const player = new Player();
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//calling functions
background();
ground();
while(player.x < 300) {
player.update();
}
player.show();

//drawing functions
function background() {
    ctx.fillStyle = "skyBlue";
    ctx.fillRect(0, 0, 600, 600);
}

function ground() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 550, 600, 50);
}

//player function
function Player() {
    this.x = 0;
    this.y = 500;
    this.xspeed = 0.1;
    this.yspeed = 0;
    this.scl = 50;
    this.scll1 = 10;
    this.scll2 = 50;
    this.sclh = 25;

    this.update = function() {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
        
    }

    this.show = function() {
        ctx.fillStyle = "purple";
        ctx.fillRect(this.x, this.y, this.scl, this.scl);
        ctx.fillRect(this.x, this.y + 50, this.scll1, this.scll2);
        ctx.fillRect(this.x + 40, this.y + 50, this.scll1, this.scll2);
    }
}