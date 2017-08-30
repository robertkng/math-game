var playing = false;
var score;
var action;
var timeremaining;

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
    show("timeremaining");
    timeremaining = 60;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;

    // change button to reset
    document.getElementById("startreset").innerHTML = "Reset Game";

    // start countdown
    startCountdown();
  }
}

function startCountdown() {
  action = setInterval(function() {
    timeremaining -= 1;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;
    if(timeremaining === 0) {
      // game over
      stopCountdown();
      show("gameover");
      document.getElementById("gameover").innerHTML = "<p>Game Over</p> <p>Your Score is " + score + "</p>";
      hide("timeremaining");
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(action);
}

function hide(Id) {
  document.getElementById(Id).style.display = "none";
}

function show(Id) {
  document.getElementById(Id).style.display = "block";
}
