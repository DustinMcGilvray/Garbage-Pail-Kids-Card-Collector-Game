//Global Variables
var goal = randomNum(19, 120);
$("#goal-value").text(goal);
var win = 0;
$("#win-value").text(win);
var lose = 0;
$("#lose-value").text(lose);
var score = 0;
$("#score-value").text(score);
var image1 = randomNum(1, 12);
var image2 = randomNum(1, 12);
var image3 = randomNum(1, 12);
var image4 = randomNum(1, 12);

//Random Number Function 
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Start Function
function gameStart() {
  score = 0;
  $("#score-value").text(score);
  goal = randomNum(19, 120);
  $("#goal-value").text(goal);
  image1 = randomNum(1, 12);
  image2 = randomNum(1, 12);
  image3 = randomNum(1, 12);
  image4 = randomNum(1, 12);
  randomImage1();
  randomImage2();
  randomImage3();
  randomImage4();
}

//Win Counter Function
function winCounter() {
  win++;
  $("#win-value").text(win);
  alert("Congratulations! You chose wisely.")
  gameStart();
  gameRestart();
}

//Lose Counter Function
function loseCounter() {
  lose++;
  $("#lose-value").text(lose);
  alert("You Chose Poorly.")
  gameStart();
  gameRestart();
}

// Re-start Function (Reset)
function gameRestart() {
  if (win > 4) {
    win = 0;
    $("#win-value").text(win);
    lose = 0;
    $("#lose-value").text(lose);
    gameStart();
    randomImage1();
    randomImage2();
    randomImage3();
    randomImage4();
  } else if (lose > 4) {
    win = 0;
    $("#win-value").text(win);
    lose = 0;
    $("#lose-value").text(lose);
    gameStart();
    randomImage1();
    randomImage2();
    randomImage3();
    randomImage4();
  }
}

//On-Click Event for Images
$("#image-card-1").on("click", function () {
  score += image1;
  $("#score-value").text(score);
  if (score === goal) {
    winCounter();
  } else if (score >= goal) {
    loseCounter();
  }
});

$("#image-card-2").on("click", function () {
  score += image2;
  $("#score-value").text(score);
  if (score === goal) {
    winCounter();
  } else if (score > goal) {
    loseCounter();
  }
});

$("#image-card-3").on("click", function () {
  score += image3;
  $("#scorevalue").text(score);
  if (score === goal) {
    winCounter();
  } else if (score > goal) {
    loseCounter();
  }
});

$("#image-card-4").on("click", function () {
  score += image4;
  $("#score-value").text(score);
  if (score === goal) {
    winCounter();
  } else if (score > goal) {
    loseCounter();
  }
});

//Instruction Slide In and Out
$(document).ready(function () {
  $(".fa-times").click(function () {
    $(".sidebar_menu").addClass("hide_menu");
    $(".toggle_menu").addClass("opacity_one");
  });

  $(".toggle_menu").click(function () {
    $(".sidebar_menu").removeClass("hide_menu");
    $(".toggle_menu").removeClass("opacity_one");
  });
});


//Random Image Generators for Cards
function randomImage1() {
  var randomImage = randomNum(1, 120)
  
  var image = document.getElementById("myImage1");
  var path = "./assets/images/random_cards/gpk_" + randomImage + ".jpg";
  image.src = path;
}

function randomImage2() {
  var randomImage = randomNum(1, 120)
  
  var image = document.getElementById("myImage2");
  var path = "./assets/images/random_cards/gpk_" + randomImage + ".jpg";
  
  image.src = path;
}

function randomImage3() {
  var randomImage = randomNum(1, 120)
  
  var image = document.getElementById("myImage3");
  var path = "./assets/images/random_cards/gpk_" + randomImage + ".jpg";
  image.src = path;
}

function randomImage4() {
  var randomImage = randomNum(1, 120)
  
  var image = document.getElementById("myImage4");
  var path = "./assets/images/random_cards/gpk_" + randomImage + ".jpg";
  image.src = path;
}