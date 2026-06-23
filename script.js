let startTime;
let stopTime;
let time = 0;

setInterval(updateTimer, 10);

function startTimer() {
    startTime = Date.now();

    const trigger = document.getElementById("trigger");
    trigger.innerHTML = "Stop";
    trigger.style.color = "red";
}

function stopTimer() {
    stopTime = Date.now();
    time = stopTime - startTime;
    time = time / 1000;
    console.log(time);
    if (time < 0.06) { //0.06 is the threshfold where you get a resolve in cubing, I think.
        alert("Stop spamming!")
    }
    const trigger = document.getElementById("trigger");
    trigger.innerHTML = "Start";
    trigger.style.color = "black";
}

function updateTimer() {
    const timer = document.getElementById("timer");
    if (timerStatus === "timing"){
        time = Date.now() - startTime;
        time = time / 1000;
    }
    timer.innerHTML = "<h1>" + time + "</h1>";
}

let timerStatus = "idle";
// Idle, Prepping, Timing, Stopped

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        if (timerStatus === "idle") {
            timerStatus = "prepping";
        } 
        else {
            if (timerStatus === "timing") {
                stopTimer();
                timerStatus = "stopped";
            }
        }
        console.log(timerStatus + "1");
    }
})

document.addEventListener("keyup", function(event) {
    if (event.code === "Space") {
        if (timerStatus === "prepping") {
            startTimer();
            timerStatus = "timing";
        } 
        else {
            if (timerStatus === "stopped") {
                timerStatus = "idle";
            }
        }
        console.log(timerStatus + "2");
    }
})

function buttonClicked() {
    alert("This button doesn't actually do anything.")
}