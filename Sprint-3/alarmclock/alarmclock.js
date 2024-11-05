function formatTimeUnit(unit) {
  return unit < 10 ? `0${unit}` : unit;
}

function setAlarm() {
  const time = document.querySelector("#alarmSet").value;
  const totalTimeInSeconds = time;
  const totalMinutes = Math.floor(totalTimeInSeconds / 60);
  const remainingSeconds = totalTimeInSeconds % 60;
  const heading = document.querySelector("#timeRemaining");
  heading.innerText = `Time Remaining: ${formatTimeUnit(
    totalMinutes
  )}:${formatTimeUnit(remainingSeconds)}`;
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
