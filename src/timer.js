let startTime;
let stopTime;

let timerStatus = "idle";
// Idle, Prepping, Ready, Timing, Stopped

let prepStartTime;

let time = 0;

setInterval(updateTimer, 10);

function startTimer() {
    startTime = Date.now();

    const trigger = document.getElementById("trigger");
}

function stopTimer() {
    stopTime = Date.now();
    time = stopTime - startTime;
    time = time / 1000;
    console.log(time);
    const trigger = document.getElementById("trigger");

    generateScramble(); // From scramble.js
}

function updateTimer() {
    const timer = document.getElementById("timer");
    if (timerStatus === "timing"){
        time = Date.now() - startTime;
        time = time / 1000;
        timer.style.color = "black";
    }
    else {
        if (timerStatus === "prepping") {
            timer.style.color = "red";
        }
        else {
            if (timerStatus === "ready") {
                timer.style.color = "lightGreen";
            }
            else {
                timer.style.color = "black";
            }
        }
    }

    timer.innerHTML = "<h1>" + time + "</h1>";
}

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        if (timerStatus === "idle") {
            timerStatus = "prepping";
            prepStartTime = Date.now();
            console.log("Prepping...")
        } 
        else {
            if (timerStatus === "timing") {
                stopTimer();
                timerStatus = "stopped";
            } 
            else {
                if (timerStatus === "prepping") {
                    let prepTime = Date.now() - prepStartTime;
                    if (prepTime > 1000) {
                        timerStatus = "ready";
                        console.log("Ready...")
                    }
                }
            }
        }
    }
})

document.addEventListener("keyup", function(event) {
    if (event.code === "Space") {
        if (timerStatus === "ready") {
            startTimer();
            timerStatus = "timing";
        } 
        else {
            if (timerStatus === "stopped") {
                timerStatus = "idle";
            }
            else {
                timerStatus = "idle";
            }
        }
    }
})