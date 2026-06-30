function loadStoredSolves() {
    solveData = JSON.parse(localStorage.getItem("storedSolves"));
    if (solveData === null) {
        solveData = {solves: []};
    }
}

function updateLocalStorage() {
    localStorage.setItem("storedSolves", JSON.stringify(solveData));
}

function clearStoredSolves() { // dangerous
    solveData = {solves: []};
    localStorage.setItem("storedSolves", null);
}