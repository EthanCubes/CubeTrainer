let algorithmSet;

const setSelect = document.getElementById("setSelect");
let set = setSelect.value;

function getAlgorithms() {
    reset();
    // Partially copied from W3Schools
    // https://www.geeksforgeeks.org/javascript/read-json-file-using-javascript/
    fetch("https://raw.githubusercontent.com/EthanCubes/CubeTrainer/main/assets/" + set + ".json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {algorithmSet = data; generateScramble();})
        .catch(error => {console.error('Failed to fetch data:', error); alert("You appear to be offline");});
}

function pickScramble() {
    let setLength = algorithmSet.algorithms.length;
    let random = Math.floor((Math.random() * setLength));
    return algorithmSet.algorithms[random];
}