function like() {
    navigator.vibrate([80]);
    buttonPressed = true;
}
function love() {
    navigator.vibrate([80, 50, 80]);
    buttonPressed = true;
}
function laugh() {
    navigator.vibrate([80, 50, 80, 50, 80, 50, 80]);
    buttonPressed = true;
}
function care() {
    navigator.vibrate([80, 50, 80, 50, 200]);
    buttonPressed = true;
}
function sad() {
    navigator.vibrate([200]);
    buttonPressed = true;
}
function angry() {
    navigator.vibrate([200, 80, 200]);
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
        if (testNo <= totalTest) executeTest();
    }
    
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

function playVibration() {
    map[reactionNumber]();
    console.log("vibration done");
    vibrationDone = true;
}

document.addEventListener("DOMContentLoaded", executeTest());
