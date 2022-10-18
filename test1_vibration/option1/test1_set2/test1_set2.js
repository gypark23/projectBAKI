function like() {
    navigator.vibrate([300]);
    buttonPressed = true;
}
function love() {
    navigator.vibrate([150, 100, 300, 100, 150, 100, 150]);
    buttonPressed = true;
}
function laugh() {
    navigator.vibrate([150, 100, 150, 100, 150, 100, 150]);
    buttonPressed = true;
}
function care() {
    navigator.vibrate([300, 100, 150, 100, 300, 100, 150]);
    buttonPressed = true;
}
function sad() {
    navigator.vibrate([150, 100, 150, 100, 150]);
    buttonPressed = true;
}
function angry() {
    navigator.vibrate([150, 100, 300]);
    buttonPressed = true;
}

const map = [like, love, laugh, care, sad, angry];

const totalTest = 12;
var correct = 0;
var reactionNumber = 0;
var buttonPressed = -1;
var input = 0;
console.log("hello");
var testNo = 0;
var firstRun = true;
var vibrationDone = false;

function test(num) {
    buttonPressed = parseInt(num);
    if (vibrationDone) {
        if (buttonPressed == reactionNumber && testNo != 0) {
            correct++;
        }
        testNo++;
        buttonPressed = -1;
        vibrationDone = false;
        document.getElementById("selectNow").textContent = "Wait...";
            document.getElementById("testText").textContent = `Test ${testNo} of ${totalTest}: Select the correct emoticon below`;
            executeTest();
    }

}

function playVibration() {
    map[reactionNumber]();
    console.log("vibration done");
    vibrationDone = true;
    document.getElementById("selectNow").textContent = "You may select now!";
}
function executeTest() {
    if (firstRun && buttonPressed != -1) {
        vibrationDone = true;
        firstRun = false;
    }
    else if (testNo <= totalTest) {
        //random reaction number
        reactionNumber = Math.floor(Math.random() * 6);
        //wait 2 seconds to play the vibration
        console.log(`start${testNo} ${reactionNumber}`);
        setTimeout(playVibration, 2000);
    }
    else {
        alert(`Test done!\n\nSHOW THIS ALERT BOX BEFORE YOU MOVE ON SO WE CAN COLLECT DATA!\nPress OK to end the experiment!\n\nFor BAKI: Option1(set1->set2) Test1_set2 ${correct}\nTest1_vibration Done`);
        window.location = "../test2_set2/test2_set2_instructions.html";
    }
}


document.addEventListener("DOMContentLoaded", executeTest());
