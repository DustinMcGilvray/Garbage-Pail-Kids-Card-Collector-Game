//Global Variables
var goal = randomNum(19, 120);
$("#goalvalue").text(goal);
var win = 0;
$("#winvalue").text(win);
var lose = 0;
$("#losevalue").text(lose);
var score = 0;
$("#scorevalue").text(score);
var image1 = randomNum(1, 12);
var image2 = randomNum(1, 12);
var image3 = randomNum(1, 12);
var image4 = randomNum(1, 12);

//Random Number Funtion 
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Start Function
function gameStart() {
goal = randomNum(19, 120);
$("#goalvalue").text(goal);
score = 0;
$("#scorevalue").text(score);
image1 = randomNum(1, 12);
image2 = randomNum(1, 12);
image3 = randomNum(1, 12);
image4 = randomNum(1, 12);
}

//Win Counter Function
function wincounter() {
  win++;
  $("#winvalue").text(win);
  alert("Congratulations! You chose wisely.")
  gameStart();
}

//Lose Counter Function
function losecounter() {
  lose++;
  $("#losevalue").text(lose);
  alert("You Chose Poorly.")
  gameStart();
}

// Re-start Function
function gameRestart() {
  if (win<4) {
    win=0;
    $("#winvalue").text(win);
    lose=0;
    $("#losevalue").text(lose);

    gameStart();
  }
  else if (lose<4) {
    win=0;
    $("#winvalue").text(win);
    lose=0;
    $("#losevalue").text(lose);
    gameStart();
  }
}

//On-Click Event for Images
$("#image-card-1").on("click", function () {
  score += image1;
  $("#scorevalue").text(score);
  if (score === goal) {
    wincounter();
  }
  else if (score > goal) {
    losecounter();
  }
});

$("#image-card-2").on("click", function() {
  score += image2;
  $("#scorevalue").text(score);
  if (score === goal) {
    wincounter();
  }
  else if (score > goal) {
    losecounter();
  }
});

$("#image-card-3").on("click", function() {
  score += image3;
  $("#scorevalue").text(score);
  if (score === goal) {
    wincounter();
  }
  else if (score > goal) {
    losecounter();
  }
});

$("#image-card-4").on("click", function() {
  score += image4;
  $("#scorevalue").text(score);
  if (score === goal) {
    wincounter();
  }
  else if (score > goal) {
    losecounter();
  }
});

//Instruction Slide In and Out
$(document).ready(function(){
  $(".fa-times").click(function(){
      $(".sidebar_menu").addClass("hide_menu");
      $(".toggle_menu").addClass("opacity_one");
  });

  $(".toggle_menu").click(function(){
      $(".sidebar_menu").removeClass("hide_menu");
      $(".toggle_menu").removeClass("opacity_one");
  });
});