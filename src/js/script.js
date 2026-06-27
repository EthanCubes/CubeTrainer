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
            break;
        case "driller":
            setSelect.style.display = "inline-block";
            break;
    }
}