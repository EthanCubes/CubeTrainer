const moves = ["U", "L", "F", "R", "B", "D"];
const modifyers = [" ", "2 ", "' "]

let scramble;
let scrambleMoveList = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

let lastMove;

let random;

generateScramble();

function generateScramble() {
    scramble = "";
    for (let i = 0; i < 15; i++) {
        for (let goodMove = false; !(goodMove); ) {
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
    console.log(scramble)
    changeScrambleText();
    changeDrawing();
}

function changeScrambleText() {
    const scrambleText = document.getElementById("scramble");
    scrambleText.innerHTML = scramble;
}