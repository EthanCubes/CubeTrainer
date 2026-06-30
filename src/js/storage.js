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


function updateSolvesGUI() {
    document.querySelectorAll(".listElement").forEach(el => el.remove());
    for (let i = 0; i < solveData.solves.length; i++) {
        let solveContainer = document.getElementById("solves");
        let listElement = document.createElement("li");
        let node = solveData.solves[i].time;
        listElement.append(node);
        listElement.classList.add("listElement");
        const child = document.getElementById("child");
        solveContainer.insertBefore(listElement, solveContainer.children[1]);
    }
}