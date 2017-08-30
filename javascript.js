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
    timeRemaining = 60;
    document.getElementById("timeremainingvalue").innerHTML = timeRemaining;

    // change button to reset
    document.getElementById("startreset").innerHTML = "Reset Game";

    // start countdown
    startCountdown();
  }
}

function startCountdown() {
  action = setInterval(function() {
    timeRemaining -= 1;
    document.getElementById("timeremainingvalue").innerHTML = timeRemaining;
    if(timeRemaining === 0) {
      // game over
      stopCountdown();
      document.getElementById("gameover").style.display = "block";
      document.getElementById("gameover").innerHTML = "<p>Game Over</p> <p>Your Score is " + score + "</p>";
      document.getElementById("timeRemaining").style.display = "none";
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(action);
}
