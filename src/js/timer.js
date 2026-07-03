let solveData = {solves: []};
let currentSolve = {time: undefined, scramble: undefined};

let startTime;
let stopTime;

let previousTime;

let timerStatus = "idle";
// Idle, Prepping, Ready, Timing, Stopped

let prepStartTime;

let time = 0;

setInterval(updateTimer, 10);

function startTimer() {
    startTime = Date.now();
}

function stopTimer() {
    stopTime = Date.now();
    time = stopTime - startTime;
    time = time / 1000;
    console.log(time);
    const trigger = document.getElementById("trigger");

    currentSolve.time = time;
    currentSolve.scramble = scramble;
    solveData.solves.push(JSON.parse(JSON.stringify(currentSolve)));
    console.log(solveData);
    updateLocalStorage();

    updateTimeDifference();
    updateSolvesGUI();
    generateScramble(); // From scramble.js
    previousTime = time;
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
    toggleElements();
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
                    if (prepTime > 500) {
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
                if (!(timerStatus === "disabled")) {
                    timerStatus = "idle";
                }
            }
        }
    }
})

function toggleElements() {
    const scramble = document.getElementById("scrambleContainer");
    const modeSelect = document.getElementById("modeSelect");
    const setSelect = document.getElementById("setSelect");
    const drawing = document.getElementById("drawing");
    const solves = document.getElementById("solves")
    const timeDifference = document.getElementById("timeDifference");
    if (timerStatus === "timing") {
        scramble.style.display = "none";
        modeSelect.style.display = "none";
        setSelect.style.display = "none";
        drawing.style.display = "none";
        timeDifference.style.display = "none";
        solves.style.display = "none";
    }
    else {
        scramble.style.display = "flex";
        modeSelect.style.display = "inline";
        if (mode === "driller") {
            setSelect.style.display = "inline";
        }
        drawing.style.display = "inline-grid";
        timeDifference.style.display = "block";   
        solves.style.display = "block";
    }
}

function updateTimeDifference() {
    let difference;
    const timeDifference = document.getElementById("timeDifference");
    if (!(previousTime === undefined)) {
        difference = time - previousTime;
        difference = difference.toPrecision(2);
    }
    else {
        difference = time - solveData.solves[currentSolveIndex].time;
        difference = difference.toPrecision(2);
        }
    if (difference >= 0) {
        timeDifference.innerHTML = "+" + difference;
        timeDifference.style.color = "red";
    }
    else {
        if (difference < 0) {
            timeDifference.innerHTML = difference;
            timeDifference.style.color = "lightGreen";
        }
        else {
            timeDifference.innerHTML = "";
        }
    }
}