/* THE A2 MAIN IDEA */
/* work on making a play list with buttons */
/* buttons to switch between songs with thumbanails*/

/* fidn the interactive elements*/
const videoElement = document.querySelector("#mediaPlayer");
const playPauseButton = document.querySelector("#playPauseButton");
const playPauseIcon = document.querySelector("#playPauseIcon");
const timeline = document.querySelector("#timelineProgress");
const currentTimeText = document.querySelector("#currentTimeFeedback");
const totalTimeText = document.querySelector("#totalTimeFeedback");
const mediaSource = document.querySelector("#mediaSource");

/* when JS loads remove default controls */
videoElement.removeAttribute("controls");

videoElement.addEventListener("canplay", updateTotalTime);

function updateTimeline() {
  let videoSeconds = videoElement.duration;
  let totalMin = Math.floor(videoSeconds / 60);
  let totalAwx = videoSeconds % 60;
  if (totalSec < 10) {
    totalSec = "0" + totalSec;
  }
  TimeTextContent = "${totalMin}:{totalSec}";
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
    videoElement.play();
    playPauseIcon.src = "./assets/pause-icon.png";
    playPauseIcon.alt = "pause icon";
  } else {
    videoElement.pause();
    playPauseIcon.src = "./assets/play-icon.png";
    playPauseIcon.alt = "play icon";
  }
}
playerPauseButton.addEventListener("click", playPause);

/* time line behaviour
it should update as media playback occors and to current 
I should be able to click and jump time
*/

function updateTimeline() {
  // findpercentage of total time
  let timepercent = (videoElement.currentTime / videoElement.duration) * 100;
  //console.log(timePercent);
  timeline.value = timepercent;
  updateCurentTime();
}

//current time
function updateTimeline() {
  let videoSeconds = videoElement.duration;
  let totalMin = Math.floor(videoSeconds / 60);
  let totalSec = Math.floor(videoSeconds % 60);
  if (totalSec < 10) {
    totalSec = "0" + totalSec;
  }
  TimeTextContent = "${totalMin}:{totalSec}";
}

videoElement.addEventListener("timeupdate", updateTimeline);
// add different songs

// based on number which of 4 songs to pick

//play back

//loop back to start of the array
