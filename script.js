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
    time = time / 1000;
    console.log(time);
    if (time < 0.06) { //0.06 is the threshfold where you get a resolve in cubing, I think.
        alert("Stop Holding!!!! (or spamming)")
        console.log("Error code=001")
    }
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
    if (timing){
        time = Date.now() - startTime;
        time = time / 1000;
    }
    timer.innerHTML = "<h1>" + time + "</h1>";
}

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        timerTrigger();
    }
})