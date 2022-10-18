function like() {
    navigator.vibrate([150]);
    buttonPressed = true;
}
function love() {
    navigator.vibrate([150, 100, 150]);
    buttonPressed = true;
}
function laugh() {
    navigator.vibrate([150, 100, 150, 100, 150, 100, 150]);
    buttonPressed = true;
}
function care() {
    navigator.vibrate([150, 100, 150, 100, 300]);
    buttonPressed = true;
}
function sad() {
    navigator.vibrate([300]);
    buttonPressed = true;
}
function angry() {
    navigator.vibrate([300, 100, 300]);
    buttonPressed = true;
}

const map = [like, love, laugh, care, sad, angry];

const totalTest = 10;
var correct = 0;
var reactionNumber = 0;
var buttonPressed = -1;
var input = 0;
console.log("hello");
var testNo = 1;
var firstRun = true;
var vibrationDone = false;

function test(num) {
    buttonPressed = parseInt(num);
    if (vibrationDone) {
        if (buttonPressed == reactionNumber) {
            correct++;
        }
        testNo++;
        buttonPressed = -1;
        vibrationDone = false;
        document.getElementById("selectNow").textContent="Wait...";
        if (testNo <= totalTest) {
            document.getElementById("testText").textContent=`Test ${testNo} of 10: Select the correct emoticon below`;
            executeTest();
        }
    }
    
}

function playVibration() {
    map[reactionNumber]();
    console.log("vibration done");
    vibrationDone = true;
    document.getElementById("selectNow").textContent="You may select now!";
}
function executeTest() {
    if (testNo <= totalTest) {
        //random reaction number
        reactionNumber = Math.floor(Math.random() * 6);
        //wait 2 seconds to play the vibration
        console.log(`start${testNo}`);
        setTimeout(playVibration, 2000);
    }
    else {

    }
}


document.addEventListener("DOMContentLoaded", executeTest());
