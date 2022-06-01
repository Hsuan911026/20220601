var colors = "064789-427aa1-ebf2fa-679436-a5be00".split("-").map(a=>"#"+a)
class Ball{
 constructor(){//預設值
  this.r=random(150)
  this.p={x:random(width),y:random(height)}
  this.v={x:random(-1,1),y:random(-1,1)}
  this.color=random(colors)
 }
 
 }

var ball
var balls=[]
function setup() {
 createCanvas(windowWidth, windowHeight);
 background(100);
 for(var i=0;i<120;i++){
 ball=new Ball//產生一個新的ball元件
 balls.push(ball)
}
}

function draw() {
 background(100);
 for(var i=0;i<balls.length;i++){
 let ball =balls[i]
  fill(ball.color)
  circle(ball.p.x ,ball.p.y ,ball.r);
  ball.p.x+=ball.v.x
  ball.p.y+=ball.v.y
 
 
 
 
 
 
 }
}