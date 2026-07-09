const modeSelect = document.getElementById("modeSelect");
let mode;

modeSelect.addEventListener("change", modeChanged);
setSelect.addEventListener("change", setChanged);

function modeChanged() {
    mode = modeSelect.value;
    console.log(mode);
    switch (mode) {
        case "timer":
            setSelect.style.display = "none";
            generateScramble();
            break;
        case "driller":
            setSelect.style.display = "inline-block";
            getAlgorithms(); // generate scramble used to be here, but will now be placed inide of getalgorithms so it only runs after the algorithms have loaded.
            break;
    }
}

function setChanged() {
    set = setSelect.value;
    console.log(set);
    getAlgorithms();
}

loadStoredSolves();
updateSolvesGUI();
modeChanged();

if (mode === "driller") {
    setChanged();
}

updateSettings();