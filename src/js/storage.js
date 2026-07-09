let currentSolveIndex;

function loadStoredSolves() {
    solveData = JSON.parse(localStorage.getItem("storedSolves"));
    if (solveData === null) {
        solveData = {solves: []};
    }
}

function updateLocalSolvesStorage() {
    localStorage.setItem("storedSolves", JSON.stringify(solveData));
}

function clearStoredSolves() { // dangerous
    solveData = {solves: []};
    localStorage.clear();
    updateSolvesGUI();
}


function updateSolvesGUI() {
    document.querySelectorAll(".listElement").forEach(el => el.remove());
    currentSolveIndex = solveData.solves.length - 1;
    for (let i = 0; i < currentSolveIndex + 1; i++) {
        let solveContainer = document.getElementById("solves");
        let listElement = document.createElement("li");
        let node = solveData.solves[i].time;
        listElement.append(node);
        listElement.classList.add("listElement");
        listElement.id = i;
        const child = document.getElementById("child");
        solveContainer.insertBefore(listElement, solveContainer.children[1]);
    }
}


function loadStoredSettings() {
    if (JSON.parse(localStorage.getItem("storedSettings") === null)) { // getItem returns null if nothing
        programSettings = JSON.parse(localStorage.getItem("storedSettings"));
    }
}

function updateLocalSettingsStorage() {
    localStorage.setItem("storedSettings", JSON.stringify(programSettings));
}