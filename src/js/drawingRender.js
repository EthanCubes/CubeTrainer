function changeSticker(element, color) {
    if (color === 1) {
        element.style.backgroundColor = "white";
    }
    else {
        if (color === 2) {
            element.style.backgroundColor = "orange";
        }
        else {
            if (color === 3) {
                element.style.backgroundColor = "green";
            }
            else {
                if (color === 4) {
                    element.style.backgroundColor = "red";
                }
                else {
                    if (color === 5) {
                        element.style.backgroundColor = "blue";
                    }
                    else {
                        element.style.backgroundColor = "yellow";
                    }
                }
            }
        }
    }
}

function renderDrawing() {
    for (let i = 0; i < 54; i++) {
        let sticker = document.getElementById("grid" + (i));
        changeSticker(sticker, cubePos[i]);
    }
}

renderDrawing();