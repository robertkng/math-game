var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

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
  var y = 1 + Math.round(9*Math.random());
  correctAnswer = x*y;

  document.getElementById("question").innerHTML = x + "x" + y;
  var correctPosition = 1 + Math.round(3*Math.random());

  // correct answer will be in a random box
  document.getElementById("box" + correctPosition).innerHTML = correctAnswer;

  // fill other boxes with wrong answers
  for (i = 1; i < 5; i ++) {
    if (i !== correctPosition) {
      var wrongAnswer = (1 + Math.round(9*Math.random())) * (1 + Math.round(9*Math.random()));

      document.getElementById("box" + i).innerHTML = wrongAnswer;
    }
  }
}
