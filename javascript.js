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

    // hide gameover box
    hide("gameover");

    // change button to reset
    document.getElementById("startreset").innerHTML = "Reset Game";

    // start countdown
    startCountdown();

    // generate question and multiple answers
    generateQA();
  }
}

// functions
// start counter
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
      hide("correct");
      hide("wrong");
      playing = false;
      document.getElementById("startreset").innerHTML = "Start Game";
    }
  }, 10);
}

// stop counter
function stopCountdown() {
  clearInterval(action);
}

// hide element
function hide(Id) {
  document.getElementById(Id).style.display = "none";
}

// show element
function show(Id) {
  document.getElementById(Id).style.display = "block";
}


// generate question and multiple answers
function generateQA() {
  var x = 1 + Math.round(9*Math.random());
}
