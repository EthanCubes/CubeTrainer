let programSettings = {
    "toggle": {
        "hideDrawing": false,
        "hideSolves": false,
        "hideScramble": false
    },
    "theme": "default",
    "themeIndex": {
        "default": {
            "color1": "rgb(22, 96, 136)",
            "color2": "rgb(171, 218, 252)",
            "textColor": "rgb(0, 0, 0)"
        },
        "light_mode": {
            "color1": "rgb(255, 255, 255)",
            "color2": "rgb(200, 200, 200)",
            "textColor": "rgb(0, 0, 0)"
        },
        "dark_mode": {
            "color1": "rgb(0, 0, 0)",
            "color2": "rgb(55, 55, 55)",
            "textColor": "rgb(255, 255, 255)"
        }
    }
}

const hideDrawing = document.getElementById("hideDrawing");
const hideSolves = document.getElementById("hideSolves");
const hideScramble = document.getElementById("hideScramble");

const themeSelector = document.getElementById("themeSelector");

const color1 = document.querySelectorAll(".color1");
const color2 = document.querySelectorAll(".color2");

function updateSettings() {
    // I tried using .value for so long until I gave up and used DeepSeek to search up what the correct thing was. Sorry.
    programSettings.toggle.hideDrawing = hideDrawing.checked;
    programSettings.toggle.hideSolves = hideSolves.checked;
    programSettings.toggle.hideScramble = hideScramble.checked;

    programSettings.theme = themeSelector.value;

    color1.forEach(element => {
        element.style.backgroundColor = programSettings.themeIndex[programSettings.theme].color1;
    });
    color2.forEach(element => {
        element.style.backgroundColor = programSettings.themeIndex[programSettings.theme].color2;
    });
    document.body.style.color = programSettings.themeIndex[programSettings.theme].textColor;

    toggleElements();
    updateLocalSettingsStorage();
}