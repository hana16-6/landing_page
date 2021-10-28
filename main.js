let icon = document.getElementById("icon");
let video = document.getElementById("video");
let videoPoster = document.getElementById("video-poster");
icon.addEventListener("click",play)
function play (){
    console.log("hiiiiiiiiiiiiiiiiiiiiiiii");
    this.style.display = "none";
    video.controls = true;
    video.setAttribute("controls",true);
    video.autoplay = true;
    video.load();  
} 
video.onended = function() {
    icon.style.display = "block";
    video.setAttribute("poster","Assets/bg-img/video.jpg");
    video.controls = false;
    //video.removeAttribute("contols");
    video.autoplay = false;
    video.load(); 
};