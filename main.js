Webcam.attach("#camera");
camera=document.getElementById("camera");
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});



function captureimage(){
    Webcam.snap(function(x){
document.getElementById("result").innerHTML='<img id="y" src="'+x+'"/>';
    });
}