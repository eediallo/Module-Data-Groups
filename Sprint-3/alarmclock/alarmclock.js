function formatTimeUnit(unit) {
  return unit < 10 ? `0${unit}` : unit;
}

function setAlarm() {
  const heading = document.querySelector("#timeRemaining");
  const time = document.querySelector("#alarmSet").value;
  let totalTimeInSeconds = parseInt(time);
  const initialMinutes = Math.floor(totalTimeInSeconds / 60);
  const InitialSeconds = totalTimeInSeconds % 60;

  heading.innerText = `Time Remaining: ${formatTimeUnit(
    initialMinutes
  )}:${formatTimeUnit(InitialSeconds)}`;

  countDownEverySeconds(totalTimeInSeconds, heading);
}

function countDownEverySeconds(totalTimeInSeconds, heading) {
  const setIntervalId = setInterval(() => {
    totalTimeInSeconds--;
    const totalMinutes = Math.floor(totalTimeInSeconds / 60);
    const remainingSeconds = totalTimeInSeconds % 60;
    heading.innerText = `Time Remaining: ${formatTimeUnit(
      totalMinutes
    )}:${formatTimeUnit(remainingSeconds)}`;

    playAudioWhenTimerReachesZero(totalTimeInSeconds, setIntervalId);
  }, 1000);
}

function playAudioWhenTimerReachesZero(totalTimeInSeconds, setIntervalId) {
  if (totalTimeInSeconds < 0) {
    clearInterval(setIntervalId);
    playAlarm();
  }
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
