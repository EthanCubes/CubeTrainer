let startTime;
let stopTime;

function startTimer() {
    startTime = Date.now();
}

function stopTimer() {
    stopTime = Date.now();
    console.log(stopTime - startTime);
}