const videoElement = document.querySelector("#mediaPlayer");
const playerPauseButton = document.querySelector("#playPauseButton");
const timeline = document.querySelector("#timelineProgress");

/* when JS loads remove default controls */
videoElement.removeAttribute("controls");

videoElement.addEventListener ("canplay", updateTotalTime);

function updateTimeline(){
 let videoSeconds = videoElement.duration;
  let totalMin =Math.floor(videoSeconds/ 60);
let totalAwx = videoSeconds % 60;
if(totalSec < 10) {
  totalSec = "0" + totalSec;
}
currentTimeTextContent = 
}



/* play pause button behaviour: If media is not playing
if media is playing
When I click it begins and pauses the playback of the media file 
feedback
toggle icon based on play state
cursor change on hover
*/

function playPause() {
  if (videoElement.paused || videoElement.ended) {
    videoElement.plaY();
    playerPauseButton.textContent = "⏸";
  } else {
    videoElement.pause();
    playerPauseButton.textContent = "▶";
  }
}
playerPauseButton.addEventListener("click", playPause);

/* time line behaviour
it should update as media playback occors and to current 
I should be able to click and jump time
*/

function updateTimeline() {
  // findpercentage of total time
  let timepercent = videoElement.currentTime(videoElement.duration);
  //timeline.value = 0;
}
videoElement.addEventListener("timeupdate", updateTimeline);
