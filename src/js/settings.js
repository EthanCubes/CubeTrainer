let programSettings = {
    "toggle": {
        "hideDrawing": false,
        "hideSolves": false,
        "hideScramble": false
    },
    "theme": {
        "color1": "rgb(22, 96, 236)",
        "color2": "rgb(171, 218, 252)",
        "textColor": "rgb(0, 0, 0)"
    }
}

const hideDrawing = document.getElementById("hideDrawing");
const hideSolves = document.getElementById("hideSolves");
const hideScramble = document.getElementById("hideScramble");

function updateSettings() {
    // I tried using .value for so long until I gave up and used DeepSeek to search up what the correct thing was. Sorry.
    programSettings.toggle.hideDrawing = hideDrawing.checked;
    programSettings.toggle.hideSolves = hideSolves.checked;
    programSettings.toggle.hideScramble = hideScramble.checked;

    toggleElements();
    updateLocalSettingsStorage();
}

function resetColor() {
    programSettings.theme = {"color1": "rgb(22, 96, 236)","color2": "rgb(171, 218, 252)","textColor": "rgb(0, 0, 0)"}
}