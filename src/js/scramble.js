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
            flipScramble();
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

function flipScramble() {
    let flippedMoveScramble;
    const flippedMoves = {
        "U": "U'",
        "U'": "U",
        "U2": "U2",

        "L": "L'",
        "L'": "L",
        "L2": "L2",

        "F": "F'",
        "F'": "F",
        "F2": "F2",

        "R": "R'",
        "R'": "R",
        "R2": "R2",

        "B": "B'",
        "B'": "B",
        "B2": "B2",

        "D": "D'",
        "D'": "D",
        "D2": "D2",


        "u": "u'",
        "u'": "u",
        "u2": "u2",
        
        "l": "l'",
        "l'": "l",
        "l2": "l2",

        "f": "f'",
        "f'": "f",
        "f2": "f2",

        "r": "r'",
        "r'": "r",
        "r2": "r2",

        "b": "b'",
        "b'": "b",
        "b2": "b2",

        "d": "d'",
        "d'": "d",
        "d2": "d2",

        "Uw": "Uw'",
        "Uw'": "Uw",
        "Uw2": "Uw2",

        "Lw": "Lw'",
        "Lw'": "Lw",
        "Lw2": "Lw2",

        "Fw": "Fw'",
        "Fw'": "Fw",
        "Fw2": "Fw2",

        "Rw": "Rw'",
        "Rw'": "Rw",
        "Rw2": "Rw2",

        "Bw": "Bw'",
        "Bw'": "Bw",
        "Bw2": "Bw2",

        "Dw": "Dw'",
        "Dw'": "Dw",
        "Dw2": "Dw2",


        "M": "M'",
        "M'": "M",
        "M2": "M2",

        "E": "E'",
        "E'": "E",
        "E2": "E2",

        "S": "S'",
        "S'": "S",
        "S2": "S2",


        "x": "x'",
        "x'": "x",
        "x2": "x2",

        "y": "y'",
        "y'": "y",
        "y2": "y2",

        "z": "z'",
        "z'": "z",
        "z2": "z2",
    }

    for (let i = 0; i < scrambleMoveList.length; i++) {
        scrambleMoveList[i] = flippedMoves[scrambleMoveList[i]];
    }
    scrambleMoveList.reverse();
    for (let i = 0; i < scrambleMoveList.length; i++) {
        flippedMoveScramble += scrambleMoveList[i] + " "
    }
}