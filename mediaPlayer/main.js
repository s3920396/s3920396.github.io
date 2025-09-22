/* THE A2 MAIN IDEA */
/* work on making a play list*/
/* I adjusted the loop of the songs by adding a titling. This was done by following a tutorial to implment a system that will display text when the song plays.*/

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

function updateTotalTime() {
  let videoSeconds = videoElement.duration;
  let totalMin = Math.floor(videoSeconds / 60);
  let totalSec = videoSeconds % 60;
  if (totalSec < 10) {
    totalSec = "0" + totalSec;
  }
  totalTimeText.textContent = `${totalMin}:${totalSec}`;
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
  /* findpercentage of total time */
  let timePercent = (videoElement.currentTime / videoElement.duration) * 100;
  //console.log(timePercent);
  timeline.value = timePercent;
  updateCurentTime();
}

//current time
function updateCurrentTime() {
  let videoSeconds = videoElement.currentTime;
  let totalMin = Math.floor(videoSeconds / 60);
  let totalSec = Math.floor(videoSeconds % 60);
  if (totalSec < 10) {
    totalSec = "0" + totalSec;
  }
  currentTimeText.textContent = `${totalMin}:${totalSec}`;
}

videoElement.addEventListener("timeupdate", updateTimeline);

//when clicking on the timeline I will jump to it
timeline.addEventListener("click", jumpToTime);

function jumpToTime(ev){
// find how far we clicked
let clickX = ev.offsetX;
//find how wide my timeline is
let timeLineWidth = timeline.offsetWidth;
// find the ratio of click to width of the song
let clickPercent = clickX / timeLineWidth;
//update the current time of the image
videoElement.currentTime = videoElement.duration * clickPercent;

}
// play next song after perivous one ended

// song listing
let currentSongNumber = 0;

//song storage for the loop
const songArray = [
"https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
"https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Hes.mp3",
"https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/p-hase_Dry-Down-feat-Ben-Snaath.mp3"
];

const songTitles = [
  "Miac - The Longest Hum",
  "P-Hase Hes",
  "P-Hase Dry Down feat. Ben Snaath"
];


//play back
function updateCurrentSong(songNumber){
  //input number
  mediaSource.src = songArray[songNumber];
  //new song load
  videoElement.load();
  //playback
  videoElement.play();

//update the song name alongside the song
document.getElementById("songTitle").textContent = songTitles[songNumber];

}

videoElement.addEventListener("ended", playNextOnEnd);

function playNextOnEnd(){
  if(currentSongNumber < songArray.length - 1){
    updateCurrentSong(currentSongNumber + 1);
    currentSongNumber += 1;
    updateCurrentSong(currentSongNumber);
  } else {
    // loop back to the start
    updateCurrentSong(0);
    currentSongNumber = 0;
    updateCurrentSong(currentSongNumber);

  }
}

//the skip button

document.getElementById("skipButton").addEventListener("click", [playNextOnEnd]);

// play first song
updateCurrentSong(currentSongNumber);

// when current song ends play the next one
videoElement.addEventListener("ended", playNextOnEnd);




