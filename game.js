


var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  playSound(randomChosenColour );
}


$(".btn").on("click", function(){

  var userChosenColor = $( this ).attr("id");
  
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);

  console.log(userClickedPattern);
});


function playSound (name){
 
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
 
};



