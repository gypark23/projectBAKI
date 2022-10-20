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
    window.location = "/test1_vibration/test1_set2/test1_set2.html";
  }
}

const topLeft = document.getElementById("top-left")
const topRight = document.getElementById("top-right")
const bottomLeft = document.getElementById("bottom-left")
const bottomRight = document.getElementById("bottom-right")

var user_gesture = ""

topLeft.addEventListener("touchstart", e => {
    e.preventDefault()

    user_gesture += "a"
    console.log({user_gesture})

    // console.log("TL-Touches", e.touches.length)
    // console.log("TL-Targets", e.targetTouches.length)
    // console.log("TL-Changed", e.changedTouches.length)
})

topRight.addEventListener("touchstart", e => {
    e.preventDefault()

    user_gesture += ";"
    console.log({user_gesture})
    test(user_gesture)
    user_gesture = ""
    // console.log("TR-Touches", e.touches.length)
    // console.log("TR-Targets", e.targetTouches.length)
    // console.log("TR-Changed", e.changedTouches.length)
})


bottomLeft.addEventListener("touchstart", e => {
    e.preventDefault()
    user_gesture += "b"
    console.log({user_gesture})
    // console.log("BL-Touches", e.touches.length)
    // console.log("BL-Targets", e.targetTouches.length)
    // console.log("BL-Changed", e.changedTouches.length)
})

bottomRight.addEventListener("touchstart", e => {
    e.preventDefault()
    user_gesture += "c"
    console.log({user_gesture})
    // console.log("BR-Touches", e.touches.length)
    // console.log("BR-Targets", e.targetTouches.length)
    // console.log("BR-Changed", e.changedTouches.length)
})

document.addEventListener("touchstart", e => {
    ;[...e.changedTouches].forEach(touch => {
        const dot = document.createElement("div")
        dot.classList.add("dot")
        dot.style.top = `${touch.pageY}px`
        dot.style.left = `${touch.pageX}px`
        dot.id = touch.identifier
        document.body.append(dot)
    })
})

document.addEventListener("touchmove", e => {
    ;[...e.changedTouches].forEach(touch => {
        const dot = document.getElementById(touch.identifier)
        dot.style.top = `${touch.pageY}px`
        dot.style.left = `${touch.pageX}px`
    })
})

document.addEventListener("touchend", e => {
    ;[...e.changedTouches].forEach(touch => {
        const dot = document.getElementById(touch.identifier)
        dot.remove()
    })
})

