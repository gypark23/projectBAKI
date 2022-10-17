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
