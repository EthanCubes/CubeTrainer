let startTime;
let stopTime;
let timing = false;

function startTimer() {
    startTime = Date.now();
    timing = true;
}

function stopTimer() {
    stopTime = Date.now();
    timing = false;
    console.log(stopTime - startTime);
}

function timerTrigger() {
    if (timing) {
        stopTimer();
    } 
    else {
        startTimer();
    }
}