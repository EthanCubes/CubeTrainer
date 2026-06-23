const moves = ["R", "U", "L", "F", "D", "B"];
const modifyers = [" ", "2 ", "' "]

let scramble;
let selectedMove;
let modifyer;

let lastMove;

let random;

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

        scramble = scramble + selectedMove;
    }
    console.log(scramble)
}

function changeScrambleText() {
    const scrambleText = document.getElementById("scramble");
    scrambleText.innerHTML = scramble;
}