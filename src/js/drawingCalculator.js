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

function u() {
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
    console.log(cubePos);
    renderDrawing();
}

function uPrime() {
    // white
    cubePosTemp[0] = cubePos[2];
    cubePosTemp[1] = cubePos[5];
    cubePosTemp[2] = cubePos[8];
    cubePosTemp[3] = cubePos[1];
    cubePosTemp[4] = cubePos[4];
    cubePosTemp[5] = cubePos[7];
    cubePosTemp[6] = cubePos[0];
    cubePosTemp[7] = cubePos[3];
    cubePosTemp[8] = cubePos[6];

    // orange
    cubePosTemp[9] = cubePos[36];
    cubePosTemp[10] = cubePos[37];
    cubePosTemp[11] = cubePos[38];
    cubePosTemp[12] = cubePos[12];
    cubePosTemp[13] = cubePos[13];
    cubePosTemp[14] = cubePos[14];
    cubePosTemp[15] = cubePos[15];
    cubePosTemp[16] = cubePos[16];
    cubePosTemp[17] = cubePos[17];

    // green
    cubePosTemp[18] = cubePos[9];
    cubePosTemp[19] = cubePos[10];
    cubePosTemp[20] = cubePos[11];
    cubePosTemp[21] = cubePos[21];
    cubePosTemp[22] = cubePos[22];
    cubePosTemp[23] = cubePos[23];
    cubePosTemp[24] = cubePos[24];
    cubePosTemp[25] = cubePos[25];
    cubePosTemp[26] = cubePos[26];

    // red
    cubePosTemp[27] = cubePos[18];
    cubePosTemp[28] = cubePos[19];
    cubePosTemp[29] = cubePos[20];
    cubePosTemp[30] = cubePos[30];
    cubePosTemp[31] = cubePos[31];
    cubePosTemp[32] = cubePos[32];
    cubePosTemp[33] = cubePos[33];
    cubePosTemp[34] = cubePos[34];
    cubePosTemp[35] = cubePos[35];

    // blue
    cubePosTemp[36] = cubePos[27];
    cubePosTemp[37] = cubePos[28];
    cubePosTemp[38] = cubePos[29];
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
    console.log(cubePos);
    renderDrawing();
}

function r() {
    // white
    cubePosTemp[0] = cubePos[0];
    cubePosTemp[1] = cubePos[1];
    cubePosTemp[2] = cubePos[20];
    cubePosTemp[3] = cubePos[3];
    cubePosTemp[4] = cubePos[4];
    cubePosTemp[5] = cubePos[23];
    cubePosTemp[6] = cubePos[6];
    cubePosTemp[7] = cubePos[7];
    cubePosTemp[8] = cubePos[26];

    // orange
    for (let i = 0; i < 9; i++) {
        cubePosTemp[i + 9] = cubePos[i + 9];
    }

    // green
    cubePosTemp[18] = cubePos[18];
    cubePosTemp[19] = cubePos[19];
    cubePosTemp[20] = cubePos[47];
    cubePosTemp[21] = cubePos[21];
    cubePosTemp[22] = cubePos[22];
    cubePosTemp[23] = cubePos[50];
    cubePosTemp[24] = cubePos[24];
    cubePosTemp[25] = cubePos[25];
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
    cubePosTemp[37] = cubePos[37];
    cubePosTemp[38] = cubePos[38];
    cubePosTemp[39] = cubePos[5];
    cubePosTemp[40] = cubePos[40];
    cubePosTemp[41] = cubePos[41];
    cubePosTemp[42] = cubePos[2];
    cubePosTemp[43] = cubePos[43];
    cubePosTemp[44] = cubePos[44];

    // yellow
    cubePosTemp[45] = cubePos[45];
    cubePosTemp[46] = cubePos[46];
    cubePosTemp[47] = cubePos[42];
    cubePosTemp[48] = cubePos[48];
    cubePosTemp[49] = cubePos[49];
    cubePosTemp[50] = cubePos[39];
    cubePosTemp[51] = cubePos[51];
    cubePosTemp[51] = cubePos[52];
    cubePosTemp[53] = cubePos[36];

    cubePos = JSON.parse(JSON.stringify(cubePosTemp));
    console.log(cubePos);
    renderDrawing();
}

function rPrime() {
    // white
    cubePosTemp[0] = cubePos[0];
    cubePosTemp[1] = cubePos[1];
    cubePosTemp[2] = cubePos[42];
    cubePosTemp[3] = cubePos[3];
    cubePosTemp[4] = cubePos[4];
    cubePosTemp[5] = cubePos[39];
    cubePosTemp[6] = cubePos[6];
    cubePosTemp[7] = cubePos[7];
    cubePosTemp[8] = cubePos[36];

    // orange
    for (let i = 0; i < 9; i++) {
        cubePosTemp[i + 9] = cubePos[i + 9];
    }

    // green
    cubePosTemp[18] = cubePos[18];
    cubePosTemp[19] = cubePos[19];
    cubePosTemp[20] = cubePos[2];
    cubePosTemp[21] = cubePos[21];
    cubePosTemp[22] = cubePos[22];
    cubePosTemp[23] = cubePos[5];
    cubePosTemp[24] = cubePos[24];
    cubePosTemp[25] = cubePos[25];
    cubePosTemp[26] = cubePos[8];

    // red
    cubePosTemp[27] = cubePos[29];
    cubePosTemp[28] = cubePos[32];
    cubePosTemp[29] = cubePos[35];
    cubePosTemp[30] = cubePos[28];
    cubePosTemp[31] = cubePos[31];
    cubePosTemp[32] = cubePos[34];
    cubePosTemp[33] = cubePos[27];
    cubePosTemp[34] = cubePos[30];
    cubePosTemp[35] = cubePos[33];

    // blue
    cubePosTemp[36] = cubePos[53];
    cubePosTemp[37] = cubePos[37];
    cubePosTemp[38] = cubePos[38];
    cubePosTemp[39] = cubePos[50];
    cubePosTemp[40] = cubePos[40];
    cubePosTemp[41] = cubePos[41];
    cubePosTemp[42] = cubePos[47];
    cubePosTemp[43] = cubePos[43];
    cubePosTemp[44] = cubePos[44];

    // yellow
    cubePosTemp[45] = cubePos[45];
    cubePosTemp[46] = cubePos[46];
    cubePosTemp[47] = cubePos[20];
    cubePosTemp[48] = cubePos[48];
    cubePosTemp[49] = cubePos[49];
    cubePosTemp[50] = cubePos[23];
    cubePosTemp[51] = cubePos[51];
    cubePosTemp[51] = cubePos[52];
    cubePosTemp[53] = cubePos[26];

    cubePos = JSON.parse(JSON.stringify(cubePosTemp));
    console.log(cubePos);
    renderDrawing();
}