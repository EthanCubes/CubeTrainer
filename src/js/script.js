alert("Warning: This page is under construction. There may be some bugs and some features may be broken or unavailible.");

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