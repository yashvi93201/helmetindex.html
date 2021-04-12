nose_x=0;
nose_y=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/R04FHxzG/astronaut-helmet-png-6.png');

}
function setup(){

canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotResults );
}
function modelLoaded(){
console.log('model is loaded!');

}
function gotResults(results){
    if(results.length>0){
console.log(results);
console.log("nosex="+results[0].pose.nose.x);
console.log("nosey"+results[0].pose.nose.y);
nose_x=results[0].pose.leftEye.x;
nose_y=results[0].pose.leftEye.y;

    }
}
function draw(){
image(video,0,0,300,300);
image(clown_nose,nose_x-80,nose_y-80,150,150);
}
function take_snapshot(){
    save('MyFilterImage.png');
}
