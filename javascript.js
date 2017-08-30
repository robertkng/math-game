var playing = false;
var score;

// if we click on the start reset button
document.getElementById("startreset").onclick = function () {
  // if we are playing
  if (playing === true) {
    // reload page
    location.reload();
  } else {
    // if we are not playing
    score = 0;
    document.getElementById("scorevalue").innerHTML = score;
  }
}
