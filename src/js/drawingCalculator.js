// dumb ahh code

const cubePosDefault = [1, 1, 1, 1, 1, 1, 1, 1, 1,
    2, 2, 2, 2, 2, 2, 2, 2, 2,
    3, 3, 3, 3, 3, 3, 3, 3, 3,
    4, 4, 4, 4, 4, 4, 4, 4, 4,
    5, 5, 5, 5, 5, 5, 5, 5, 5,
    6, 6, 6, 6, 6, 6, 6, 6, 6
];
let cubePosTemp = [];
let cubePos = [1, 1, 1, 1, 1, 1, 1, 1, 1,
    2, 2, 2, 2, 2, 2, 2, 2, 2,
    3, 3, 3, 3, 3, 3, 3, 3, 3,
    4, 4, 4, 4, 4, 4, 4, 4, 4,
    5, 5, 5, 5, 5, 5, 5, 5, 5,
    6, 6, 6, 6, 6, 6, 6, 6, 6
];

// 9 stickers on each side.
// Top: white
// Center: orange, green, red, blue
// Bottom: yellow
// Colors: 1, 2, 3, 4, 5, 6

function reset() {
    cubePos = JSON.parse(JSON.stringify(cubePosDefault));
    renderDrawing();
}

function xMove(repeat) {
    if (repeat === undefined)  {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        // white
        cubePosTemp[0] = cubePos[18];
        cubePosTemp[1] = cubePos[19];
        cubePosTemp[2] = cubePos[20];
        cubePosTemp[3] = cubePos[21];
        cubePosTemp[4] = cubePos[22];
        cubePosTemp[5] = cubePos[23];
        cubePosTemp[6] = cubePos[24];
        cubePosTemp[7] = cubePos[25];
        cubePosTemp[8] = cubePos[26];

        // orange
        cubePosTemp[9] = cubePos[11];
        cubePosTemp[10] = cubePos[14];
        cubePosTemp[11] = cubePos[17];
        cubePosTemp[12] = cubePos[10];
        cubePosTemp[13] = cubePos[13];
        cubePosTemp[14] = cubePos[16];
        cubePosTemp[15] = cubePos[9];
        cubePosTemp[16] = cubePos[12];
        cubePosTemp[17] = cubePos[15];

        // greem
        cubePosTemp[18] = cubePos[45];
        cubePosTemp[19] = cubePos[46];
        cubePosTemp[20] = cubePos[47];
        cubePosTemp[21] = cubePos[48];
        cubePosTemp[22] = cubePos[49];
        cubePosTemp[23] = cubePos[50];
        cubePosTemp[24] = cubePos[51];
        cubePosTemp[25] = cubePos[52];
        cubePosTemp[26] = cubePos[53];

        // red
        cubePosTemp[27] = cubePos[33];
        cubePosTemp[28] = cubePos[30];
        cubePosTemp[29] = cubePos[27];
        cubePosTemp[30] = cubePos[34];
        cubePosTemp[31] = cubePos[31];
        cubePosTemp[32] = cubePos[28];
        cubePosTemp[33] = cubePos[35];
        cubePosTemp[34] = cubePos[32];
        cubePosTemp[35] = cubePos[29];

        // blue
        cubePosTemp[36] = cubePos[8];
        cubePosTemp[37] = cubePos[7];
        cubePosTemp[38] = cubePos[6];
        cubePosTemp[39] = cubePos[5];
        cubePosTemp[40] = cubePos[4];
        cubePosTemp[41] = cubePos[3];
        cubePosTemp[42] = cubePos[2];
        cubePosTemp[43] = cubePos[1];
        cubePosTemp[44] = cubePos[0];

        // yellow
        cubePosTemp[45] = cubePos[44];
        cubePosTemp[46] = cubePos[43];
        cubePosTemp[47] = cubePos[42];
        cubePosTemp[48] = cubePos[41];
        cubePosTemp[49] = cubePos[40];
        cubePosTemp[50] = cubePos[39];
        cubePosTemp[51] = cubePos[38];
        cubePosTemp[52] = cubePos[37];
        cubePosTemp[53] = cubePos[36];

        cubePos = JSON.parse(JSON.stringify(cubePosTemp));
    }
    renderDrawing();
}

function yMove(repeat) {
    if (repeat === undefined)  {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        // white
        cubePosTemp[0] = cubePos[6];
        cubePosTemp[1] = cubePos[3];
        cubePosTemp[2] = cubePos[0];
        cubePosTemp[3] = cubePos[7];
        cubePosTemp[4] = cubePos[4];
        cubePosTemp[5] = cubePos[1];
        cubePosTemp[6] = cubePos[8];
        cubePosTemp[7] = cubePos[5];
        cubePosTemp[8] = cubePos[2];

        // orange
        cubePosTemp[9] = cubePos[18];
        cubePosTemp[10] = cubePos[19];
        cubePosTemp[11] = cubePos[20];
        cubePosTemp[12] = cubePos[21];
        cubePosTemp[13] = cubePos[22];
        cubePosTemp[14] = cubePos[23];
        cubePosTemp[15] = cubePos[24];
        cubePosTemp[16] = cubePos[25];
        cubePosTemp[17] = cubePos[26];

        // greem
        cubePosTemp[18] = cubePos[27];
        cubePosTemp[19] = cubePos[28];
        cubePosTemp[20] = cubePos[29];
        cubePosTemp[21] = cubePos[30];
        cubePosTemp[22] = cubePos[31];
        cubePosTemp[23] = cubePos[32];
        cubePosTemp[24] = cubePos[33];
        cubePosTemp[25] = cubePos[34];
        cubePosTemp[26] = cubePos[35];

        // red
        cubePosTemp[27] = cubePos[36];
        cubePosTemp[28] = cubePos[37];
        cubePosTemp[29] = cubePos[38];
        cubePosTemp[30] = cubePos[39];
        cubePosTemp[31] = cubePos[40];
        cubePosTemp[32] = cubePos[41];
        cubePosTemp[33] = cubePos[42];
        cubePosTemp[34] = cubePos[43];
        cubePosTemp[35] = cubePos[44];

        // blue
        cubePosTemp[36] = cubePos[9];
        cubePosTemp[37] = cubePos[10];
        cubePosTemp[38] = cubePos[11];
        cubePosTemp[39] = cubePos[12];
        cubePosTemp[40] = cubePos[13];
        cubePosTemp[41] = cubePos[14];
        cubePosTemp[42] = cubePos[15];
        cubePosTemp[43] = cubePos[16];
        cubePosTemp[44] = cubePos[17];

        // yellow
        cubePosTemp[45] = cubePos[47];
        cubePosTemp[46] = cubePos[50];
        cubePosTemp[47] = cubePos[53];
        cubePosTemp[48] = cubePos[46];
        cubePosTemp[49] = cubePos[49];
        cubePosTemp[50] = cubePos[52];
        cubePosTemp[51] = cubePos[45];
        cubePosTemp[52] = cubePos[48];
        cubePosTemp[53] = cubePos[51];

        cubePos = JSON.parse(JSON.stringify(cubePosTemp));
    }
    renderDrawing();
}

function zMove(repeat) {
    if (repeat === undefined)  {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        // white
        cubePosTemp[0] = cubePos[15];
        cubePosTemp[1] = cubePos[12];
        cubePosTemp[2] = cubePos[9];
        cubePosTemp[3] = cubePos[16];
        cubePosTemp[4] = cubePos[13];
        cubePosTemp[5] = cubePos[10];
        cubePosTemp[6] = cubePos[17];
        cubePosTemp[7] = cubePos[14];
        cubePosTemp[8] = cubePos[11];

        // orange
        cubePosTemp[9] = cubePos[51];
        cubePosTemp[10] = cubePos[48];
        cubePosTemp[11] = cubePos[45];
        cubePosTemp[12] = cubePos[52];
        cubePosTemp[13] = cubePos[49];
        cubePosTemp[14] = cubePos[46];
        cubePosTemp[15] = cubePos[53];
        cubePosTemp[16] = cubePos[50];
        cubePosTemp[17] = cubePos[47];

        // greem
        cubePosTemp[18] = cubePos[24];
        cubePosTemp[19] = cubePos[21];
        cubePosTemp[20] = cubePos[18];
        cubePosTemp[21] = cubePos[25];
        cubePosTemp[22] = cubePos[22];
        cubePosTemp[23] = cubePos[19];
        cubePosTemp[24] = cubePos[26];
        cubePosTemp[25] = cubePos[23];
        cubePosTemp[26] = cubePos[20];

        // red
        cubePosTemp[27] = cubePos[6];
        cubePosTemp[28] = cubePos[3];
        cubePosTemp[29] = cubePos[0];
        cubePosTemp[30] = cubePos[7];
        cubePosTemp[31] = cubePos[4];
        cubePosTemp[32] = cubePos[1];
        cubePosTemp[33] = cubePos[8];
        cubePosTemp[34] = cubePos[5];
        cubePosTemp[35] = cubePos[2];

        // blue
        cubePosTemp[36] = cubePos[38];
        cubePosTemp[37] = cubePos[41];
        cubePosTemp[38] = cubePos[44];
        cubePosTemp[39] = cubePos[37];
        cubePosTemp[40] = cubePos[40];
        cubePosTemp[41] = cubePos[43];
        cubePosTemp[42] = cubePos[36];
        cubePosTemp[43] = cubePos[39];
        cubePosTemp[44] = cubePos[42];

        // yellow
        cubePosTemp[45] = cubePos[33];
        cubePosTemp[46] = cubePos[30];
        cubePosTemp[47] = cubePos[27];
        cubePosTemp[48] = cubePos[34];
        cubePosTemp[49] = cubePos[31];
        cubePosTemp[50] = cubePos[28];
        cubePosTemp[51] = cubePos[35];
        cubePosTemp[52] = cubePos[32];
        cubePosTemp[53] = cubePos[29];

        cubePos = JSON.parse(JSON.stringify(cubePosTemp));
    }
    renderDrawing();
}

function xPrime(repeat) {
    if (repeat === undefined)  {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        xMove(3);
    }
}

function yPrime(repeat) {
    if (repeat === undefined)  {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        yMove(3);
    }
}

function zPrime(repeat) {
    if (repeat === undefined)  {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        zMove(3);
    }
}

function uMove(repeat) {
    if (repeat === undefined)  {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        // white
        cubePosTemp[0] = cubePos[6];
        cubePosTemp[1] = cubePos[3];
        cubePosTemp[2] = cubePos[0];
        cubePosTemp[3] = cubePos[7];
        cubePosTemp[4] = cubePos[4];
        cubePosTemp[5] = cubePos[1];
        cubePosTemp[6] = cubePos[8];
        cubePosTemp[7] = cubePos[5];
        cubePosTemp[8] = cubePos[2];

        // orange
        cubePosTemp[9] = cubePos[18];
        cubePosTemp[10] = cubePos[19];
        cubePosTemp[11] = cubePos[20];
        cubePosTemp[12] = cubePos[12];
        cubePosTemp[13] = cubePos[13];
        cubePosTemp[14] = cubePos[14];
        cubePosTemp[15] = cubePos[15];
        cubePosTemp[16] = cubePos[16];
        cubePosTemp[17] = cubePos[17];

        // green
        cubePosTemp[18] = cubePos[27];
        cubePosTemp[19] = cubePos[28];
        cubePosTemp[20] = cubePos[29];
        cubePosTemp[21] = cubePos[21];
        cubePosTemp[22] = cubePos[22];
        cubePosTemp[23] = cubePos[23];
        cubePosTemp[24] = cubePos[24];
        cubePosTemp[25] = cubePos[25];
        cubePosTemp[26] = cubePos[26];

        // red
        cubePosTemp[27] = cubePos[36];
        cubePosTemp[28] = cubePos[37];
        cubePosTemp[29] = cubePos[38];
        cubePosTemp[30] = cubePos[30];
        cubePosTemp[31] = cubePos[31];
        cubePosTemp[32] = cubePos[32];
        cubePosTemp[33] = cubePos[33];
        cubePosTemp[34] = cubePos[34];
        cubePosTemp[35] = cubePos[35];

        // blue
        cubePosTemp[36] = cubePos[9];
        cubePosTemp[37] = cubePos[10];
        cubePosTemp[38] = cubePos[11];
        cubePosTemp[39] = cubePos[39];
        cubePosTemp[40] = cubePos[40];
        cubePosTemp[41] = cubePos[41];
        cubePosTemp[42] = cubePos[42];
        cubePosTemp[43] = cubePos[43];
        cubePosTemp[44] = cubePos[44];

        // yellow
        for (let i = 0; i < 9; i++) {
            cubePosTemp[i + 45] = cubePos[i + 45];
        }

        cubePos = JSON.parse(JSON.stringify(cubePosTemp));
    }
    renderDrawing();
}

function uPrime(repeat) {
    if (repeat === undefined)  {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        uMove(3);        
    }
}

function lMove(repeat) {
    if (repeat === undefined)  {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        zMove(1);
        uMove(1);
        zMove(3);
    }
}

function lPrime(repeat) {
    if (repeat === undefined)  {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        lMove(3);
    }
}

function fMove(repeat) {
    if (repeat === undefined)  {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        xMove(1);
        uMove(1);
        xMove(3);
    }
}

function fPrime(repeat) {
    if (repeat === undefined)  {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        fMove(3);
    }
}

function rMove(repeat) {
    if (repeat === undefined)  {
        repeat = 1;
    }
    for(let i = 0; i < repeat; i++) {
        zMove(3);
        uMove(1);
        zMove(1);
    }
}

function rPrime(repeat) {
    if (repeat === undefined)  {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        rMove(3);
    }
}

function bMove(repeat) {
    if (repeat === undefined)  {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        xMove(3);
        uMove(1);
        xMove(1);
    }
}

function bPrime(repeat) {
    if (repeat === undefined)  {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        bMove(3);
    }
}

function dMove(repeat) {
    if (repeat === undefined)  {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        xMove(2);
        uMove(1);
        xMove(2);
    }
}

function dPrime(repeat) {
    if (repeat === undefined)  {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        dMove(3);
    }
}

function uWide(repeat) {
    if (repeat === undefined) {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        dMove();
        yMove();
    }
}

function uWidePrime(repeat) {
    if (repeat === undefined) {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        dPrime();
        yPrime();
    }
}

function lWide(repeat) {
    if (repeat === undefined) {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        rMove();
        xPrime();
    }
}

function lWidePrime(repeat) {
    if (repeat === undefined) {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        rPrime();
        xMove();
    }
}

function fWide(repeat) {
    if (repeat === undefined) {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        bMove();
        zMove();
    }
}

function fWidePrime(repeat) {
    if (repeat === undefined) {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        bPrime();
        zPrime();
    }
}

function rWide(repeat) {
    if (repeat === undefined) {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        lMove();
        xMove();
    }
}

function rWidePrime(repeat) {
    if (repeat === undefined) {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        lPrime();
        xPrime();
    }
}

function bWide(repeat) {
    if (repeat === undefined) {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        fMove();
        zPrime();
    }
}

function bWidePrime(repeat) {
    if (repeat === undefined) {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        fPrime();
        zMove();
    }
}

function dWide(repeat) {
    if (repeat === undefined) {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        uMove();
        yPrime();
    }
}

function dWidePrime(repeat) {
    if (repeat === undefined) {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        uPrime();
        yMove();
    }
}

function mMove(repeat) {
    if (repeat === undefined) {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        rWidePrime();
        rMove();
    }
}

function mPrime(repeat) {
    if (repeat === undefined) {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        mMove(3);
    }
}

function eMove(repeat) {
    if (repeat === undefined) {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        uWidePrime();
        uMove();
    }
}

function ePrime(repeat) {
    if (repeat === undefined) {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        eMove(3);
    }
}

function sMove(repeat) {
    if (repeat === undefined) {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        fWide();
        fPrime();
    }
}

function sPrime(repeat) {
    if (repeat === undefined) {
        repeat = 1;
    }
    for (let i = 0; i < repeat; i++) {
        sMove(3);
    }
}

function changeDrawing() {
    reset();
    for (let i = 0; i < scrambleMoveList.length; i++) {
        let currentMove = scrambleMoveList[i];
        switch(currentMove) {
            case "U":
                uMove(1);
                break;
            case "U2":
                uMove(2);
                break;
            case "U'":
                 uPrime(1);
                break;
            
            case "L":
                lMove(1);
                break;
            case "L2":
                lMove(2);
                break;
            case "L'":
                lPrime(1);
                break;
            
            case "F":
                fMove(1);
                break;
            case "F2":
                fMove(2);
                break;
            case "F'":
                fPrime(1);
                break;
            
            case "R":
                rMove(1);
                break;
            case "R2":
                rMove(2);
                break;
            case "R'":
                rPrime(1);
                break;
            
            case "B":
                bMove(1);
                break;
            case "B2":
                bMove(2);
                break;
            case "B'":
                bPrime(1);
                break;

            case "D":
                dMove(1);
                break;
            case "D2":
                dMove(2);
                break;
            case "D'":
                dPrime(1);
                break;

            case "x":
                xMove(1);
                break;
            case "x2":
                xMove(2);
                break;
            case "x'":
                xMove(3);
                break;
            
            case "y":
                yMove(1);
                break;
            case "y2":
                yMove(2);
                break;
            case "y'":
                yMove(3);
                break;

            case "z":
                zMove(1);
                break;
            case "z2":
                zMove(2);
                break;
            case "z'":
                zMove(3);
                break;

            case "Uw":
            case "u":
                uWide();
                break;
            case "Uw2":
            case "u2":
                uWide(2);
                break;
            case "Uw'":
            case "u'":
                uWidePrime();
                break;
            
            case "Lw":
            case "l":
                lWide();
                break;
            case "Lw2":
            case "l2":
                lWide(2);
                break;
            case "Lw'":
            case "l'":
                lPrime();
                break;
            
            case "Fw":
            case "f":
                fWide();
                break;
            case "Fw2":
            case "f2":
                fWide(2);
                break;
            case "Fw'":
            case "f'":
                fWidePrime();
                break;
            
            case "Rw":
            case "r":
                rWide();
                break;
            case "Rw2":
            case "r2":
                rWide(2);
                break;
            case "Rw'":
            case "r'":
                rWidePrime();
                break;
            
            case "Bw":
            case "b":
                bWide();
                break;
            case "Bw2":
            case "b2":
                bWide(2);
                break;
            case "Bw'":
            case "b'":
                bWidePrime();
                break;
            
            case "Dw":
            case "d":
                dWide();
                break;
            case "Dw2":
            case "d2":
                dWide(2);
                break;
            case "Dw'":
            case "d'":
                dWidePrime();
                break;
        }
    }
}