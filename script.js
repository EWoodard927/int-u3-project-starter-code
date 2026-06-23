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
let runAwayButtonCharmander = document.querySelector(".runAwayButtonCharmander");
let runAwayButtonSquirtle = document.querySelector(".runAwayButtonSquirtle");
let runAwayButtonBulbasaur = document.querySelector(".runAwayButtonBulbasaur");
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
let battleHeaderCharmander = document.querySelector(".battleHeaderCharmander");
let battleHeaderSquirtle = document.querySelector(".battleHeaderSquirtle");
let battleHeaderBulbasaur = document.querySelector(".battleHeaderBulbasaur");
let playerHealthC = document.querySelector(".playerHealthC"); 
let rivalHealthS = document.querySelector(".rivalHealthS");
let playerHealthS = document.querySelector(".playerHealthS"); 
let rivalHealthB = document.querySelector(".rivalHealthB");
let playerHealthB = document.querySelector(".playerHealthB"); 
let rivalHealthC = document.querySelector(".rivalHealthC");
let enemySquirtleHealth = 25;
let enemyBulbasaurHealth = 25;
let enemyCharmanderHealth = 25;
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
    rivalHealthS.textContent = enemySquirtleHealth;
});

battleWithSquirtleButton.addEventListener('click', function(){
    squirtleChoice.style.display = "none";
    battleScreenSquirtle.style.display = "block";
});

battleWithBulbasaurButton.addEventListener('click', function(){
    bulbasaurChoice.style.display = "none";
    battleScreenBulbasaur.style.display = "block";
});

runAwayButtonCharmander.addEventListener('click', function(){
    battleScreenCharmander.style.display = "none";
    runAwayScreen.style.display = "block";
})

runAwayButtonSquirtle.addEventListener('click', function(){
    battleScreenSquirtle.style.display = "none";
    runAwayScreen.style.display = "block";
})

runAwayButtonBulbasaur.addEventListener('click', function(){
    battleScreenBulbasaur.style.display = "none";
    runAwayScreen.style.display = "block";
})

scratchButton.addEventListener('click', function(){
    battleHeaderCharmander.innerHTML = "Charmander used Scratch! It deals 9 damage!";
    enemySquirtleHealth -= 9;
    rivalHealthS.textContent = enemySquirtleHealth;

    if(enemySquirtleHealth <= 0) {
    battleScreenCharmander.style.display = "none";
    winningScreen.style.display = "block";
    }
});

emberButton.addEventListener('click', function(){
    battleHeaderCharmander.innerHTML = "Charmander used Ember! It's not very effective. It deals 5 damage!";
    enemySquirtleHealth -= 5;
    rivalHealthS.textContent = enemySquirtleHealth;

    if(enemySquirtleHealth <= 0) {
    battleScreenCharmander.style.display = "none";
    winningScreen.style.display = "block";
    }
});

tackleButtonSquirtle.addEventListener('click', function(){
    battleHeaderSquirtle.innerHTML = "Squirtle used Tackle! It deals 9 damage!";
    enemyBulbasaurHealth -= 9;
    rivalHealthB.textContent = enemyBulbasaurHealth;

    if(enemyBulbasaurHealth <= 0) {
    battleScreenSquirtle.style.display = "none";
    winningScreen.style.display = "block";
    }
});

waterGunButton.addEventListener('click', function(){
    battleHeaderSquirtle.innerHTML = "Squirtle used Water Gun! It's not very effective. It deals 5 damage.";
    enemyBulbasaurHealth -= 5;
    rivalHealthB.textContent = enemyBulbasaurHealth;

    if(enemyBulbasaurHealth <= 0) {
    battleScreenSquirtle.style.display = "none";
    winningScreen.style.display = "block";
    }
});

tackleButtonBulbasaur.addEventListener('click', function(){
    battleHeaderBulbasaur.innerHTML = "Bulbasaur used Tackle! It deals 9 damage!";
    enemyCharmanderHealth -= 9;
    rivalHealthC.textContent = enemyCharmanderHealth;

    if(enemyCharmanderHealth <= 0) {
    battleScreenBulbasaur.style.display = "none";
    winningScreen.style.display = "block";
    }
});

vineWhipButton.addEventListener('click', function(){
    battleHeaderBulbasaur.innerHTML = "Bulbasaur used Vine Whip! It's not very effective. It deals 5 damage.";
    enemyCharmanderHealth -= 5;
    rivalHealthC.textContent = enemyCharmanderHealth;

    if(enemyCharmanderHealth <= 0) {
    battleScreenBulbasaur.style.display = "none";
    winningScreen.style.display = "block";
    }
});


// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });