let highestZ = 1;

function sendToTop(element) {
    element.style.zIndex = highestZ + 1;
    highestZ += 1;
}

function dimWindow() {
    const dim = document.getElementById("dim");
    timerStatus = "disabled";
    dim.style.display = "block";
    sendToTop(dim);
}

function undim() {
    const dim = document.getElementById("dim");
    dim.style.display = "none";
    timerStatus = "idle";
}

function helpWindow(status) {
    const help = document.getElementById("help");
    switch (status) {
        case "open":
            dimWindow();
            help.style.display = "block";
            sendToTop(help);
            break;
        case "close":
            help.style.display = "none";
            undim();
            break;
    }
}

function settingsWindow(status) {
    const settings = document.getElementById("settings");
    switch (status) {
        case "open":
            dimWindow();
            settings.style.display = "block";
            sendToTop(settings);
            break;
        case "close":
            settings.style.display = "none";
            undim();
            break;
    }
}