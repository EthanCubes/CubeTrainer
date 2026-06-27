const dropDown = document.getElementById("dropDown");
let mode;

dropDown.addEventListener("change", function() {mode = dropDown.value; console.log(mode);});