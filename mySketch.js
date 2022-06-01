function setup() {
	createCanvas(windowWidth, windowHeight);
	background("#ffe5d9");
}
function drawflower(clr,size=1) {
	push()
    fill("#B373B3")
		ellipse(0, 0, 50);		//目前此圓，仍以圓心為座標點
	if(clr){
		 fill(clr)
	}
	else
	{
		fill(255,90,61)
	}
		ellipseMode(CORNER)   // 設定以左上角為座標點上的座標
	
	for(var i=0;i<16;i++){
		ellipse(30, -15, 100*size, 30);  // 設定以左上角為座標點，做一個花瓣
		line(35, -5, 120*size,-5)
		rotate(PI/8)
	}
	pop()
	
	
	
}
var colors=["#9c89b8","#f0a6ca","#efc3e6","#f0e6ef","#b8bedd"]

function draw() {
	background("#ffe5d9")
	var count=0
	for(i=0;i<height;i=i+150)
	{
		for(j=0;j<width;j=j+150)
			
	{
		count=count+1
	push()
	translate(j,i)
	scale(0.8)
	rotate(frameCount/100)
	drawflower(colors[count%colors.length],map(mouseX,0,width,0,1))
	pop()

}
}
}


/*
push()
	translate(0,0)
	drawflower("#E67399",map(mouseX,0,width,0,2))
	pop()
	push()
	translate(300,0); 
	drawflower()
	pop()
	push()
	translate(0,600);
	drawflower()
	pop()
	push()
	translate(-300,0);
	drawflower("#C4D1F7")
	pop()
	*/