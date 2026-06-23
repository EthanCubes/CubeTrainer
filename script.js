let startTime;
let stopTime;
let timing = false;
let time = 0;

setInterval(updateTimer, 10);

function startTimer() {
    startTime = Date.now();
    timing = true;

    const trigger = document.getElementById("trigger");
    trigger.innerHTML = "Stop";
    trigger.style.color = "red";
}

function stopTimer() {
    stopTime = Date.now();
    timing = false;
    time = stopTime - startTime;
    console.log(time);
    const trigger = document.getElementById("trigger");
    trigger.innerHTML = "Start";
    trigger.style.color = "black";
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