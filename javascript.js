var playing = false;
var score;
var action;
var timeRemaining;

// if we click on the start/reset button
document.getElementById("startreset").onclick = function () {
  // if we are playing
  if (playing === true) {
    // reload page
    location.reload();
  } else {
    // change mode to playing
    playing = true;
    // if we are not playing, set score to 0
    // score = 0;
    score = 1;
    document.getElementById("scorevalue").innerHTML = score;

    // show countdown box
    document.getElementById("timeremaining").style.display = "block";

    // change button to reset
    document.getElementById("startreset").innerHTML = "Reset Game";

    // start countdown
    startCountdown();
  }
}

function startCountdown() {
  action = setInterval(function() {

  }, 1000);
}
