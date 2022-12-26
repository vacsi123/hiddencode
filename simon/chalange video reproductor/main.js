var video_tag = document.getElementById("videoshort");

function playVideo(){
    video_tag.play();
}
function pauseVideo(){
    video_tag.pause();
    
     }

     function stopVideo(){
        video_tag.pause();
        video_tag.currentTime = 0;
        }
    function skip(){
        video_tag.currentTime += 5;
        }

video_tag.addEventListener("timeupdate",function(){
    console.log(video_tag.currentTime);
    
})

