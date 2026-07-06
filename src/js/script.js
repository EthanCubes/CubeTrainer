const modeSelect = document.getElementById("modeSelect");
let mode;

const setSelect = document.getElementById("setSelect");

modeSelect.addEventListener("change", modeChanged);

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

loadStoredSolves();
updateSolvesGUI();
modeChanged();