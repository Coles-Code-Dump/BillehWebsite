// Coles-Code-Dump

var p = new Player();
var p2 = new Player2();
var g = new Ground();
var c = new Cloud();
var b = new Background();


function setup() {
    createCanvas(600, 600);
}

function draw(event) {
    background(0, 0, 255);
     b.show();
    c.update();
    c.show();
    g.show();
    p.update();
    p.show();
    p2.update();
    p2.show();
    c.update();
    c.show();
    if (mouseIsPressed) {
        p2.death();
    }
}

    function keyPressed(event) {
    var x = event.keyCode;
    if (keyCode === UP_ARROW) {
        p.dir(0, -1);
        console.log('e');
        if (p.y = 400) {
            p.dir(0, 1);
        console.log('e');
        }
    } else if (keyCode === DOWN_ARROW) {
        p.dir(0, 1);
        console.log('e');
    } else if (keyCode === RIGHT_ARROW) {
        p.dir(1, 0);
        console.log('e');
    } else if (keyCode === LEFT_ARROW) {
        p.dir(-1, 0);
        console.log('e');
    } else if (x == 87) {
        p.dir(0, -1);
        console.log('e');
        if (p.y = 400) {
            p.dir(0, 1);
        }
    } else if (x  == 83) {
        p.dir(0, 1);
        console.log('e');
    } else if (x == 68) {
        p.dir(1, 0);
    } else if (x == 65) {
        p.dir(-1, 0);
        console.log('e');
    } else if (x == 32) {
        p.dir(0, -1);
        console.log('e');
        if (p.y = 400) {
            p.dir(0, 1);
        }
    } else if (x == 70) {
        p.dir(0, -1);
        console.log('e');
    } else if (x == 75) {
        fill(255, 0, 0);
        ellipse(50,50,30,30);
        console.log('0');
    }
}

function Cloud() {
    this.x = 0;
    this.y = 100;
    this.scl = 50;
    this.xspeed = 1;
    this.yspeed = 0;

    this.update = function () {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }

    this.show = function () {
        fill(255);
        ellipse(this.x, this.y, this.scl, this.scl);
        ellipse(this.x + 25, this.y + 25, this.scl, this.scl);
        ellipse(this.x + 50, this.y + 25, this.scl, this.scl);
        ellipse(this.x + 25, this.y, this.scl, this.scl);
        ellipse(this.x + 50, this.y, this.scl, this.scl);
        ellipse(this.x + 75, this.y, this.scl, this.scl);
        ellipse(this.x + 25, this.y + -25, this.scl, this.scl);
        ellipse(this.x + 50, this.y + -25, this.scl, this.scl);

        ellipse(this.x - 500, this.y + 100, this.scl, this.scl);
        ellipse(this.x + 25 - 500, this.y + 25 + 100, this.scl, this.scl);
        ellipse(this.x + 50 - 500, this.y + 25 + 100, this.scl, this.scl);
        ellipse(this.x + 25 - 500, this.y + 100, this.scl, this.scl);
        ellipse(this.x + 50 - 500, this.y + 100, this.scl, this.scl);
        ellipse(this.x + 75 - 500, this.y + 100, this.scl, this.scl);
        ellipse(this.x + 25 - 500, this.y + -25 + 100, this.scl, this.scl);
        ellipse(this.x + 50 - 500, this.y + -25 + 100, this.scl, this.scl);

        if (this.x > 1200) {
            this.x = -100;
        }
    }
}

function Ground() {
    this.x = 0;
    this.y = 550;
    this.scl = 600;
    this.scl2 = 600;
    this.show = function () {
        fill(0, 255, 0);
        rect(this.x, this.y, this.scl, this.scl2);
    }
}

function Background() {
    this.x = 0;
    this.y = 250;
    this.scl = 300;
    this.scl2 = 100;
    this.scl3 = 200;
    this.scl4 = 400;
    this.sclw = 20;
    this.sclw2 = 30;

    this.show = function() {
        fill(150);
        rect(this.x, this.y, this.scl2, this.scl);
        rect(this.x + 150, this.y + 100, this.scl2, this.scl3);
        rect(this.x + 300, this.y - 100, this.scl2, this.scl4);
        rect(this.x + 450, this.y, this.scl2, this.scl);
        fill(200);
        rect(this.x + 20, this.y + 25, this.sclw, this.sclw2);
        rect(this.x + 60, this.y + 25, this.sclw, this.sclw2);
        rect(this.x + 20, this.y + 75, this.sclw, this.sclw2);
        rect(this.x + 60, this.y + 75, this.sclw, this.sclw2);
        rect(this.x + 20, this.y + 125, this.sclw, this.sclw2);
        rect(this.x + 60, this.y + 125, this.sclw, this.sclw2);
        rect(this.x + 20, this.y + 175, this.sclw, this.sclw2);
        rect(this.x + 60, this.y + 175, this.sclw, this.sclw2);
        rect(this.x + 20, this.y + 225, this.sclw, this.sclw2);
        rect(this.x + 60, this.y + 225, this.sclw, this.sclw2);
        rect(this.x + 170, this.y + 125, this.sclw, this.sclw2);
        rect(this.x + 210, this.y + 125, this.sclw, this.sclw2);
        rect(this.x + 170, this.y + 175, this.sclw, this.sclw2);
        rect(this.x + 210, this.y + 175, this.sclw, this.sclw2);
        rect(this.x + 170, this.y + 225, this.sclw, this.sclw2);
        rect(this.x + 210, this.y + 225, this.sclw, this.sclw2);
        rect(this.x + 320, this.y - 75, this.sclw, this.sclw2);
        rect(this.x + 360, this.y - 75, this.sclw, this.sclw2);
        rect(this.x + 320, this.y - 25, this.sclw, this.sclw2);
        rect(this.x + 360, this.y - 25, this.sclw, this.sclw2);
        rect(this.x + 320, this.y + 25, this.sclw, this.sclw2);
        rect(this.x + 360, this.y + 25, this.sclw, this.sclw2);
        rect(this.x + 320, this.y + 75, this.sclw, this.sclw2);
        rect(this.x + 360, this.y + 75, this.sclw, this.sclw2);
        rect(this.x + 320, this.y + 125, this.sclw, this.sclw2);
        rect(this.x + 360, this.y + 125, this.sclw, this.sclw2);
        rect(this.x + 320, this.y + 175, this.sclw, this.sclw2);
        rect(this.x + 360, this.y + 175, this.sclw, this.sclw2);
        rect(this.x + 320, this.y + 225, this.sclw, this.sclw2);
        rect(this.x + 360, this.y + 225, this.sclw, this.sclw2);
        rect(this.x + 470, this.y + 25, this.sclw, this.sclw2);
        rect(this.x + 510, this.y + 25, this.sclw, this.sclw2);
        rect(this.x + 470, this.y + 75, this.sclw, this.sclw2);
        rect(this.x + 510, this.y + 75, this.sclw, this.sclw2);
        rect(this.x + 470, this.y + 125, this.sclw, this.sclw2);
        rect(this.x + 510, this.y + 125, this.sclw, this.sclw2);
        rect(this.x + 470, this.y + 175, this.sclw, this.sclw2);
        rect(this.x + 510, this.y + 175, this.sclw, this.sclw2);
        rect(this.x + 470, this.y + 225, this.sclw, this.sclw2);
        rect(this.x + 510, this.y + 225, this.sclw, this.sclw2);
    }
}

function Player() {
    this.x = 0;
    this.y = 600;
    this.xspeed = 1;
    this.yspeed = 0;
    this.scl = 50;
    this.scl2 = 30;
    this.scll = 10;
    this.scll2 = 30;
    this.sclh = 30;
    this.sclh2 = 10;
    this.scle = 5;
    this.scla = 30;
    this.scla2 = 10;

    this.update = function () {
        this.x = this.x + this.xspeed * 5;
        this.y = this.y + this.yspeed * 5;

        this.x = constrain(this.x, 0, width - 80);
        this.y = constrain(this.y, 0, height - 80);
    }

    this.dir = function (x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.hold = function(pos) {
        if (this.x < this.x2) {
          return true;
          console.log('e');
        } else {
         return false;
         console.log('a');
        }
    };

    this.show = function () {
        fill(255);
        rect(this.x, this.y, this.scl, this.scl);
        rect(this.x + 10, this.y + -30, this.scl2, this.scl2);
        rect(this.x + 40, this.y + 50, this.scll, this.scll2);
        rect(this.x, this.y + 50, this.scll, this.scll2);
        rect(this.x + 50, this.y, this.scla, this.scla2);
        rect(this.x - 30, this.y, this.scla, this.scla2);
        fill(200, 200, 0);
        rect(this.x + 10, this.y + -40, this.sclh, this.sclh2);
        fill(0);
        rect(this.x + 15, this.y + -20, this.scle, this.scle);
        rect(this.x + 30, this.y + -20, this.scle, this.scle);
    }
}

function Player2() {
    this.x = 600;
    this.y = 600;
    this.xspeed = -1;
    this.yspeed = 0;
    this.scl = 50;
    this.scl2 = 30;
    this.scll = 10;
    this.scll2 = 30;
    this.sclh = 30;
    this.sclh2 = 10;
    this.scle = 5;
    this.scla = 30;
    this.scla2 = 10;

    this.update = function () {
        this.x = this.x + this.xspeed * 2;
        this.y = this.y + this.yspeed * 2;

        if (this.x < 40) {
            this.xspeed = 1;
        } else if (this.x > 500) {
            this.xspeed = -1;
        }

        this.x = constrain(this.x, 0, width - 80);
        this.y = constrain(this.y, 0, height - 80);
    }

    this.death = function() {
        if (p.x > this.x, p.x < this.x) {
        fill(255, 0, 0);
        ellipse(this.x + 25, this.y + 25, 30, 30);
        console.log('a');
        }
    }

    this.show = function () {
        fill(255, 165, 0);
        rect(this.x, this.y, this.scl, this.scl);
        rect(this.x + 10, this.y + -30, this.scl2, this.scl2);
        rect(this.x + 40, this.y + 50, this.scll, this.scll2);
        rect(this.x, this.y + 50, this.scll, this.scll2);
        rect(this.x + 50, this.y, this.scla, this.scla2);
        rect(this.x - 30, this.y, this.scla, this.scla2);
        fill(200, 200, 0);
        rect(this.x + 10, this.y + -40, this.sclh, this.sclh2);
        fill(0);
        rect(this.x + 15, this.y + -20, this.scle, this.scle);
        rect(this.x + 30, this.y + -20, this.scle, this.scle);
    }
}