camera=document.getElementById("camera");
Webcam.attach(camera);
function take_snapshot() {
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';


});
}
console.log("ml5",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/uJWJtVhVO/model.json",modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}