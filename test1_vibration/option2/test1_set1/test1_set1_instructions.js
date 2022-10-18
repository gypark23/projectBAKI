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