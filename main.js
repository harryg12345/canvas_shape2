function setup() {
    canvas = createCanvas(640,480)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
}
function draw() {
    fill("green");
    rect(70,45,450, 40);
rect(70,400,450, 40);
rect(50,45,40, 380);
rect(490,50,40, 380);
fill("red");
    circle(70, 70, 50);
    circle(509, 70, 50);
    circle(70, 425, 50);
    circle(509, 425, 50);
    image(video,250,150,100,100)
}


 