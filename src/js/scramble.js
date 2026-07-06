const moves = ["U", "L", "F", "R", "B", "D"];
const modifyers = [" ", "2 ", "' "]

let scramble;
let scrambleMoveList;

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

                scramble = scramble + selectedMove;
            }
            scrambleMoveList = scramble.split(/\s+/);
            console.log(scramble);
            changeScrambleText();
            changeDrawing();
            break;
        case "driller":
            let scrambleObj = pickScramble();
            let scrambleEnd = scrambleObj.endPos;
            scrambleEnd = algorithmSet[scrambleEnd];
            scramble = scrambleObj.algorithm;
            scrambleMoveList = scramble.split(/\s+/);
            console.log(scramble);
            changeScrambleText();
            changeDrawing(scrambleEnd);
            break;
    }
}

function changeScrambleText() {
    const scrambleText = document.getElementById("scramble");
    scrambleText.innerHTML = scramble;
}

function copyScramble() {
    navigator.clipboard.writeText(scramble);
    alert("Scramble Copied!");
}