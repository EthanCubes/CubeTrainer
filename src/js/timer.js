let solveData = {timer: [], driller: []};
let currentSolve = { time: undefined, scramble: undefined };

let startTime;
let stopTime;

let previousTime;

let timerStatus = "idle";
// Idle, Prepping, Ready, Timing, Stopped

let prepStartTime;

let time = 0;

const touchTrigger = document.getElementById("touchTrigger");

let mouseDown;

setInterval(updateTimer, 10);

function startTimer() {
    startTime = Date.now();
}

function stopTimer() {
    stopTime = Date.now();
    time = stopTime - startTime;
    time = time / 1000;
    console.log(time);

    currentSolve.time = time;
    currentSolve.scramble = scramble;
    solveData[mode].push(JSON.parse(JSON.stringify(currentSolve)));
    console.log(solveData);
    updateLocalSolvesStorage();

    updateTimeDifference();
    updateSolvesGUI();
    generateScramble(); // From scramble.js
    previousTime = time;
}

function updateTimer() {
    const timer = document.getElementById("timer");
    if (timerStatus === "timing") {
        time = Date.now() - startTime;
        time = time / 1000;
        if (programSettings.theme === "dark_mode") {
            timer.style.color = "white";
        }
        else {
            timer.style.color = "black";
        }
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
                if (programSettings.theme === "dark_mode") {
                    timer.style.color = "white";
                }
                else {
                    timer.style.color = "black";
                }
            }
        }
    }

    if (mouseDown) {
        triggerDown();
    }

    timer.innerHTML = "<h1>" + time + "</h1>";
    toggleElements();
}

document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        triggerDown();
    }
})

touchTrigger.addEventListener("pointerdown", function () {
    mouseDown = true;
});

document.addEventListener("keyup", function (event) {
    if (event.code === "Space") {
        triggerUp();
    }
})

touchTrigger.addEventListener("pointerup", function () {
    mouseDown = false;
    triggerUp();
});

function triggerDown() {
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
                    console.log("Ready...");
                }
            }
        }
    }
}

function triggerUp() {
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

function toggleElements() {
    const scramble = document.getElementById("scrambleContainer");
    const modeSelect = document.getElementById("modeSelect");
    const setSelect = document.getElementById("setSelect");
    const drawing = document.getElementById("drawing");
    const solves = document.getElementById("solves")
    const timeDifference = document.getElementById("timeDifference");
    const menus = document.getElementById("menus");
    if (timerStatus === "timing") {
        scramble.style.display = "none";
        modeSelect.style.display = "none";
        setSelect.style.display = "none";
        drawing.style.display = "none";
        timeDifference.style.display = "none";
        solves.style.display = "none";
        menus.style.display = "none";
    }
    else {
        modeSelect.style.display = "inline";
        if (mode === "driller") {
            setSelect.style.display = "inline";
        }
        timeDifference.style.display = "block";
        if (!(programSettings.toggle.hideDrawing)) {
            drawing.style.display = "inline-grid";
        } else {
            drawing.style.display = "none";
        }
        if (!(programSettings.toggle.hideSolves)) {
            solves.style.display = "block";
        } else {
            solves.style.display = "none";
        }
        if (!(programSettings.toggle.hideScramble)) {
            scramble.style.display = "flex";
        } else {
            scramble.style.display = "none";
        }
        menus.style.display = "block"
    }
}

function updateTimeDifference() {
    let difference;
    const timeDifference = document.getElementById("timeDifference");
    if (!(previousTime === undefined)) {
        difference = time - previousTime;
        difference = difference.toFixed(3);
    }
    else {
        if (!(solveData[mode][currentSolveIndex] === undefined)) {
            difference = time - solveData[mode][currentSolveIndex].time;
        difference = difference.toFixed(3);
        }
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