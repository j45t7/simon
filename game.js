var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var started = false;
var level = 0;

$(document).keydown(function(){
  if (!started){
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;


  };
});

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);


});

function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    if (userClickedPattern.length === gamePattern.length){

      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);

    } }

    else {

   console.log("wrong");

  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  }, 200);
  $("#level-title").text("Game Over, Press Any Key to Restart");
  startOver();

  }
};

function startOver(){
  gamePattern = [];
  level = 0;
  started = false;

};

function nextSequence(){
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
  animatePress(randomChosenColour);


 };


 function playSound(name){
   var audio = new Audio("sounds/" + name + ".mp3");
   audio.play();
 };

 function animatePress(currentColour) {
   $("#" + currentColour).addClass("pressed");

    setTimeout(function(){
      $("#" + currentColour).removeClass("pressed");
     }, 100);
 };















// $("#" + randomChosenColour).on("click", function(){
//   $("button").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// });

// var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//   audio.play();
// setInterval(nextSequence,2000);
