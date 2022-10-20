const topLeft = document.getElementById("top-left")
const topRight = document.getElementById("top-right")
const bottomLeft = document.getElementById("bottom-left")
const bottomRight = document.getElementById("bottom-right")

function clicked() {
    document.getElementById("timerButton").style.display = "none";
    document.getElementById("timerExplanation").style.display = "none";
    document.getElementById("timerExplanation_1").style.display = "none";
    document.body.style.visibility = "visible";
    document.getElementById("testText").textContent = `Test ${testNo} of ${totalTest}: Tap out the correct gesture below`;
    executeTest();
  }

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

const map = [like, love, laugh, care, sad, angry];

const totalTest = 12;
var correct = 0;
var random_gesture;
var reactionNumber;
var user_string = "";
var input = 0;
var gesture_list = ['a;', 'aa;', 'b;', 'bb;', 'c;', 'cc;']; 
console.log("hello");
var testNo = 1;
var firstRun = true;
var vibrationDone = false;

function test(user_gesture) {
    user_string = user_gesture;
    if (vibrationDone) {
        if (user_string == gesture_list[reactionNumber] && testNo != 0) {
            correct++;
            console.log("Correct")
        }
        testNo++;
        user_string = "";
        vibrationDone = false;
        document.getElementById("selectNow").textContent = "Wait...";
            document.getElementById("testText").textContent = `Test ${testNo} of ${totalTest}: Tap out the correct gesture below`;
            executeTest();
    }

}

function playVibration() {
    map[reactionNumber]();
    console.log("vibration done");
    vibrationDone = true;
    document.getElementById("selectNow").textContent = "You may tap now!";
}
function executeTest() {
    if (firstRun && user_string == "") {
        vibrationDone = true;
        firstRun = false;
    }
    else if (testNo <= totalTest) {
        //random reaction number
        reactionNumber = Math.floor(Math.random() * gesture_list.length);
        random_gesture = gesture_list[reactionNumber];
        //wait 2 seconds to play the vibration
        console.log(`start${testNo} ${reactionNumber}`);
        setTimeout(playVibration, 2000);
    }
    else {
        alert(`Test done!\n\nSHOW THIS ALERT BOX BEFORE YOU MOVE ON SO WE CAN COLLECT DATA!\nPress OK to move on to the next experiment!\n\nFor BAKI: Option1(set1->set2) Test1_set1 ${correct}\nRedirecting to set2`);
        window.location = "/test1_vibration/option1/test1_set2/test1_set2_instructions.html";
    }
}


document.addEventListener("DOMContentLoaded", executeTest());