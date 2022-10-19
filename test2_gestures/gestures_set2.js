const topLeft = document.getElementById("top-left")
const topRight = document.getElementById("top-right")
const bottomLeft = document.getElementById("bottom-left")
const bottomRight = document.getElementById("bottom-right")

var user_gesture = ""


document.addEventListener("touchstart", e => {
    ;[...e.changedTouches].forEach(touch => {
        const dot = document.createElement("div")
        dot.classList.add("dot")
        dot.style.top = `${touch.pageY}px`
        dot.style.left = `${touch.pageX}px`

        // console.log("x1:" + dot.style.left)
        // console.log("y1:" + dot.style.top)

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

        // console.log("x2:" + dot.style.left)
        // console.log("y2:" + dot.style.top)

        dot.remove()
    })
})


topLeft.addEventListener("touchstart", e => {
    e.preventDefault()
    

    // user_gesture += ";"
    // console.log({user_gesture})
    // user_gesture = ""
    // console.log("TR-Touches", e.touches.length)
    // console.log("TR-Targets", e.targetTouches.length)
    // console.log("TR-Changed", e.changedTouches.length)
})

topRight.addEventListener("touchstart", e => {
    e.preventDefault()

    // user_gesture += ";"
    // console.log({user_gesture})
    // user_gesture = ""
    // console.log("TR-Touches", e.touches.length)
    // console.log("TR-Targets", e.targetTouches.length)
    // console.log("TR-Changed", e.changedTouches.length)
})

bottomLeft.addEventListener("touchstart", e => {
    e.preventDefault()
    // user_gesture += "c"
    // console.log({user_gesture})
    // console.log("BL-Touches", e.touches.length)
    // console.log("BL-Targets", e.targetTouches.length)
    // console.log("BL-Changed", e.changedTouches.length)
})

bottomRight.addEventListener("touchstart", e => {
    e.preventDefault()
    // user_gesture += "d"
    // console.log({user_gesture})
    // console.log("BR-Touches", e.touches.length)
    // console.log("BR-Targets", e.targetTouches.length)
    // console.log("BR-Changed", e.changedTouches.length)
})


// function like() {
//     navigator.vibrate([150]);
//     buttonPressed = true;
// }
// function love() {
//     navigator.vibrate([150, 100, 150]);
//     buttonPressed = true;
// }
// function laugh() {
//     navigator.vibrate([300, 100, 150, 100, 300]);
//     buttonPressed = true;
// }
// function care() {
//     navigator.vibrate([150, 100, 150, 100, 300, 100, 300]);
//     buttonPressed = true;
// }
// function sad() {
//     navigator.vibrate([300, 100, 300]);
//     buttonPressed = true;
// }
// function angry() {
//     navigator.vibrate([300, 100, 300, 100, 300, 100, 300]);
//     buttonPressed = true;
// }

// const map = [like, love, laugh, care, sad, angry];

// const totalTest = 12;
// var correct = 0;
// var reactionNumber = 0;
// var buttonPressed = -1;
// var input = 0;
// console.log("hello");
// var testNo = 0;
// var firstRun = true;
// var vibrationDone = false;

// function test(num) {
//     buttonPressed = parseInt(num);
//     if (vibrationDone) {
//         if (buttonPressed == reactionNumber && testNo != 0) {
//             correct++;
//         }
//         testNo++;
//         buttonPressed = -1;
//         vibrationDone = false;
//         document.getElementById("selectNow").textContent = "Wait...";
//             document.getElementById("testText").textContent = `Test ${testNo} of ${totalTest}: Select the correct emoticon below`;
//             executeTest();
//     }

// }

// function playVibration() {
//     map[reactionNumber]();
//     console.log("vibration done");
//     vibrationDone = true;
//     document.getElementById("selectNow").textContent = "You may select now!";
// }
// function executeTest() {
//     if (firstRun && buttonPressed != -1) {
//         vibrationDone = true;
//         firstRun = false;
//     }
//     else if (testNo <= totalTest) {
//         //random reaction number
//         reactionNumber = Math.floor(Math.random() * 6);
//         //wait 2 seconds to play the vibration
//         console.log(`start${testNo} ${reactionNumber}`);
//         setTimeout(playVibration, 2000);
//     }
//     else {
//         alert(`Test done!\n\nSHOW THIS ALERT BOX BEFORE YOU MOVE ON SO WE CAN COLLECT DATA!\nPress OK to move on to the next experiment!\n\nFor BAKI: Option1(set1->set2) Test1_set1 ${correct}\nRedirecting to set2`);
//         window.location = "/test1_vibration/option1/test1_set2/test1_set2_instructions.html";
//     }
// }


// document.addEventListener("DOMContentLoaded", executeTest());