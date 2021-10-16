function preload(){

}


function setup(){
Canvas1 = createCanvas(450,450);
Canvas1.center();
video = createCapture(VIDEO);
    video.hide();
    
    Posenet = ml5.poseNet(video, Modelloaded);
    Posenet.on('pose', gotresult);
}

function Modelloaded(){
    console.log("model has been loaded");
}


function gotresult(result){
    if(result.length > 0)
    {
      console.log(result);
      noseX = result[0].pose.nose.x;
        noseY= result[0].pose.nose.y;
    
    }
    }



function draw(){
    image(video, 0, 0, 450, 450);
}

function takeimage(){
    save("myimage.png");
}