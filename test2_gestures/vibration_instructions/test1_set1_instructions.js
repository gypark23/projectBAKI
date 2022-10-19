function like() {
    navigator.vibrate([150]);
    buttonPressed = true;
}
function love() {
    navigator.vibrate([150, 100, 150]);
    buttonPressed = true;
}
function laugh() {
    navigator.vibrate([300, 100, 150, 100, 300]);
    buttonPressed = true;
}
function care() {
    navigator.vibrate([150, 100, 150, 100, 300, 100, 300]);
    buttonPressed = true;
}
function sad() {
    navigator.vibrate([300, 100, 300]);
    buttonPressed = true;
}
function angry() {
    navigator.vibrate([300, 100, 300, 100, 300, 100, 300]);
    buttonPressed = true;
}

//document.getElementById("timerButton").style.visibility = "visible";

const countDownEl = document.getElementById("timer");
function clicked() {
    document.getElementById("timerButton").style.display = "none";
    document.getElementById("timerExplanation").style.display = "none";
    document.body.style.visibility = "visible";
    setInterval(updateCounter, 1000);
}


//60 seconds start from 59
let time = 59;
function updateCounter() {
    console.log("hi");
  const minutes = Math.floor(time / 6000);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  countDownEl.innerHTML = `${minutes}:${seconds}`;
  time--;

  if(time < 0) {
    window.location = "/test2_gestures/test2_set1/gestures_set1_instructions.html";
  }
}
