status="";
array1="";

function preload(){
    img1=loadImage("OIP.jpg");

}

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    objectdetector=ml5.objectDetector("cocossd",modeloaded);
}

function modeloaded(){
    console.log("model is loaded");
    status=true;
    objectdetector.detect(img1,gotresults);
    document.getElementById("status").innerHTML="status:being detected";
}

function gotresults(error,results){
    if(error){
        console.error("error");
    }
    else{
     console.log(results);
     array1=results;
    }
}

function draw(){
    image(img1,0,0.480,380);
    if(status!=""){
    for(i=0;i<array1.length;i++){
        percentage=floor(array1[i].confidence*100);
        fill("red");
        text(array1[i].label+" "+percentage+"%".array1[i].x,array1[i].y);
        noFill();
        stroke("red");
        rect(array1[i].x,array1[i].y,array1[i].width,array1[i].height);
    }
    }
}