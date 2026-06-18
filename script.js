// Declare variables below to save the different divs of your story.
let startButton = document.querySelector(".start-button");
let meetMaggieButton = document.querySelector(".meetMaggieButton");
let charmanderButton = document.querySelector(".charmanderButton");
let squirtleButton = document.querySelector(".squirtleButton");
let bulbasaurButton = document.querySelector(".bulbasaurButton");
let battleWithCharmanderButton = document.querySelector(".battleWithCharmanderButton");
let battleWithSquirtleButton = document.querySelector(".battleWithSquirtleButton");
let battleWithBulbasaurButton = document.querySelector(".battleWithBulbasaurButton");
let scratchButton = document.querySelector(".scratchButton");
let emberButton = document.querySelector(".emberButton");
let runAwayButton = document.querySelector(".runAwayButton");
let tackleButtonSquirtle = document.querySelector(".tackleButtonSquirtle");
let waterGunButton = document.querySelector(".waterGunButton");
let tackleButtonBulbasaur = document.querySelector(".tackleButtonBulbasaur");
let vineWhipButton = document.querySelector(".vineWhipButton");
let storyOpening = document.querySelector(".story-opening");
let rivalIntroduction = document.querySelector(".rival-introduction");
let starterChoice = document.querySelector(".starter-choice");
let charmanderChoice = document.querySelector(".charmanderChoice");
let squirtleChoice = document.querySelector(".squirtleChoice");
let bulbasaurChoice = document.querySelector(".bulbasaurChoice");
let battleScreenCharmander = document.querySelector(".battleScreenCharmander");
let battleScreenSquirtle = document.querySelector(".battleScreenSquirtle");
let battleScreenBulbasaur = document.querySelector(".battleScreenBulbasaur");
let runAwayScreen = document.querySelector(".runAwayScreen");
let losingScreen = document.querySelector(".losingScreen");
let winningScreen = document.querySelector(".winningScreen");

// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


startButton.addEventListener('click', function(){
    storyOpening.style.display = "none";
    rivalIntroduction.style.display = "block";
});

meetMaggieButton.addEventListener("click", function(){
    rivalIntroduction.style.display = "none";
    starterChoice.style.display = "block";
})

charmanderButton.addEventListener("click", function() {
    starterChoice.style.display = "none";
    charmanderChoice.style.display = "block";
})

squirtleButton.addEventListener('click', function(){
    starterChoice.style.display = "none";
    squirtleChoice.style.display = "block";
});

bulbasaurButton.addEventListener('click', function(){
    starterChoice.style.display = "none";
    bulbasaurChoice.style.display = "block";
});

battleWithCharmanderButton.addEventListener('click', function(){
    charmanderChoice.style.display = "none";
    battleScreenCharmander.style.display = "block";
});

battleWithSquirtleButton.addEventListener('click', function(){
    squirtleChoice.style.display = "none";
    battleScreenSquirtle.style.display = "block";
});

battleWithBulbasaurButton.addEventListener('click', function(){
    bulbasaurChoice.style.display = "none";
    battleScreenBulbasaur.style.display = "block";
});

// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });