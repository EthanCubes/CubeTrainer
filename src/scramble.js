const moves = ["R", "R'", "U", "U'", "L", "L'", "F", "F'", "D", "D'", "B", "B'"];
let scramble = "";
let selectedMove;

function generateScramble() {
    scramble = "";
    for (let i = 0; i < 15; i++) {
        random = Math.floor(Math.random() * 12);
        console.log(random);
        selectedMove = moves[random];
        console.log(selectedMove);
        scramble = scramble + selectedMove;
    }
    console.log(scramble)
}