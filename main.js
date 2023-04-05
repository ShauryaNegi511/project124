function setup{
video= creatCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,550);
canvas.position(560,150);
 
}
function draw {
document.getElementById("square_side").innerHTML="Width and Height of a Square will be=" +difference+"px"
background 
}
function modekDone(){
console.log("PoseNet Is Initialized and Loaded");
}
function draw() {
    background("5196e3")
}
function  gotPoses(results,error){
    if (error) {
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);
        console.log("rightwrist_x = "+results[0].pose.rightwrist_x+" rightwrist_y ="+results[0].pose.rightWrist.y);
        console.log("leftwrist_x = "+results[0].pose.leftwrist_x+" leftwrist_y ="+results[0].pose.leftWrist.y);
    }
}