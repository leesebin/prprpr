
var r=0;
var b = 255;

function setup() {
  createCanvas(673, 733);
  background(0);

}
function draw() {
r = map(mouseX,0,600,0,255);
background(r,0,b);

fill(250,118,222)

  fill(0); 
 rect(5,5,150,150);

  fill(0);
  rect(5,163,150,190);
  
   fill(0,50,150);
  rect(5,535,150,190);
  
   
  fill(200,0,0);
  rect(165,5,500,523);
  
fill(255);
  rect(165,535,400,190);
  
  fill(255);
  rect(575,535,90,90);
  
  fill(2553,255,0);
  rect(575,635,90,90);
 
}
