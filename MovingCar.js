

//pink rectangle
let pkRectX = 100;
let pkRectY = 100;

//pink square
let sqaureX = 175;
let sqaureY = 50;

//Tyres
let Tyre1X = 150;
let Tyre1Y = 125;

let Tyre2X = 250;
let Tyre2Y = 125;

//lines

let Line1X = 225;
let Line1Y = 50;
let Line1A = 275;
let Line1B = 100;

let Line2X = 125;
let Line2Y = 100;
let Line2A = 175;
let Line2B = 50;

function setup() {
  createCanvas(400, 400);
  frameRate(30);


}

function draw() {
    background(225,225,225);
    
    
    fill(0,0,0);
    stroke(0,0,0);
    ellipse(Tyre1X,Tyre1Y,25,25);
    ellipse(Tyre2X,Tyre2Y,25,25);
    
    line(Line1X,Line1Y,Line1A,Line1B);
    line(Line2X,Line2Y,Line2A,Line2B);
    
    fill(212, 49, 165);
    
    rect(pkRectX,pkRectY,200,25);
    
    stroke(212, 49, 165)
    square(sqaureX,sqaureY,50);


    
//pink rectangle
pkRectX++
//pkRectY++

//pink square

sqaureX++
//sqaureY++

//Tyres

Tyre1X++
//Tyre1Y++

Tyre2X++
//Tyre2Y++

//lines

Line1X++
//Line1Y++
Line1A++
//Line1B++

Line2X++
//Line2Y++
Line2A++
//Line2B++

}


