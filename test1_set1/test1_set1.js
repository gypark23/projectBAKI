function like() {
    navigator.vibrate([80]);
    buttonPressed = true;
}
function love() {
    navigator.vibrate([80, 50, 80]);
    buttonPressed = true;
}
function laugh() {
    navigator.vibrate([80,50,80,50,80,50,80]);
    buttonPressed = true;
}
function care() {
    navigator.vibrate([80,50,80,50,200]);
    buttonPressed = true;
}
function sad() {
    navigator.vibrate([200]);
    buttonPressed = true;
}
function angry() {
    navigator.vibrate([200,80,200]);
    buttonPressed = true;
}

const map = [like, love, laugh, care, sad, angry];

const totalTest = 10;
var correct = 0;
var reactionNumber = 0;
var buttonPressed = false;
var input = 0;
console.log("hello");
var array = [1,2,3,4,5,6,7,8,9,10];
function test(num) {
    console.log(`pressed${num}`);
}

async function executeTests() {
    for (const testNo of array) {
        await executeTest(no);
    }

}


function executeTest(no) {
    //random reaction number
    reactionNumber = Math.floor(Math.random() * 6);
    //wait 2 seconds to play the vibration
    console.log(`start${testNo}`);
    setTimeout(playVibration, 2000);
    buttonPressed = false;
    correct += (reactionNumber == input ? 1 : 0);
}

function playVibration() {
    map[reactionNumber]();
    console.log(`done${testNo}`);
}

document.addEventListener("DOMContentLoaded", executeTests());