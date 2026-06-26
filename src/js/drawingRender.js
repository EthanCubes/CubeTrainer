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

function changeDrawing() { // Difficult to read regular scramble, so I'm going make it read a revised version that is easer for a computer to process.
    for (let i = 0; i < 15; i++) {
        let currentMove = scrambleMoveList[i];
        switch(currentMove) {
            case "U ":
                uMove(1);
                break;
            case "U2 ":
                uMove(2);
                break;
            case "U' ":
                uPrime(3);
                break;
            
            case "L ":
                lMove(1);
                break;
            case "L2 ":
                lMove(2);
                break;
            case "L' ":
                lPrime(1);
                break;
            
            case "F ":
                fMove(1);
                break;
            case "F2 ":
                fMove(2);
                break;
            case "F' ":
                fPrime(1);
                break;
            
            case "R ":
                rMove(1);
                break;
            case "R2 ":
                rMove(2);
                break;
            case "R' ":
                rPrime(1);
                break;
            
            case "B ":
                bMove(1);
                break;
            case "B2 ":
                bMove(2);
                break;
            case "B' ":
                bPrime(1);
                break;

            case "D ":
                dMove(1);
                break;
            case "D2 ":
                dMove(2);
                break;
            case "D' ":
                dPrime(1);
                break;
        }
    }
}