const moves = ["U", "L", "F", "R", "B", "D"];
const modifyers = [" ", "2 ", "' "]

let scramble;
let scrambleMoveList = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

let lastMove;

let random;

function generateScramble() {
    scramble = "";
    switch (mode) {
        case "timer":
            for (let i = 0; i < 20; i++) {
                for (let goodMove = false; !(goodMove);) {
                    random = Math.floor(Math.random() * 6);
                    selectedMove = moves[random];
                    if (!(lastMove === selectedMove)) {
                        goodMove = true;
                    }
                }

                lastMove = selectedMove;

                random = Math.floor(Math.random() * 3);
                modifyer = modifyers[random];

                selectedMove = selectedMove + modifyer;

                scrambleMoveList[i] = selectedMove;

                scramble = scramble + selectedMove;
            }
            break;
        case "driller":
            scramble = "INCOMPLETE CODE";
            break;
    }
    console.log(scramble)
    changeScrambleText();
    changeDrawing();
}

function changeScrambleText() {
    const scrambleText = document.getElementById("scramble");
    scrambleText.innerHTML = scramble;
}