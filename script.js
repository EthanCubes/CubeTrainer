let startTime;
let stopTime;
let timing = false;
let time = 0;

setInterval(updateTimer, 10);

function startTimer() {
    startTime = Date.now();
    timing = true;
}

function stopTimer() {
    stopTime = Date.now();
    timing = false;
    time = stopTime - startTime;
    console.log(time);
}

function timerTrigger() {
    if (timing) {
        stopTimer();
    } 
    else {
        startTimer();
    }
}

function updateTimer() {
    const timer = document.getElementById("timer");
    timer.innerHTML = "<h1>" + time + "</h1>";
}