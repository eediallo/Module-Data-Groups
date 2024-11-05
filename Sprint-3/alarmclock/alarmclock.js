const time = document.querySelector("#alarmSet").value;
const totalTimeInSeconds = time;
const totalMinutes = Math.floor(totalTimeInSeconds / 60);
const remainingSeconds = totalTimeInSeconds % 60;

function setAlarm() {
  const heading = document.querySelector("#timeRemaining");
  heading.innerText = "Time Remaining: 00:19";
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
