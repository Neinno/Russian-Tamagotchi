var mainImage = document.querySelector("#main_image");

var buttonRefresh = document.querySelector(".refresh");

var titleEl = document.querySelector(".title");

// Button group one
var buttonGroupOne = document.querySelector(".buttons_character_one");
var buttonMoodHappyOne = document.querySelector(".button_1_1");
var buttonMoodNeutralOne = document.querySelector(".button_2_1");
var buttonMoodAngryOne = document.querySelector(".button_3_1");

// Button group two
var buttonGroupTwo = document.querySelector(".buttons_character_two");
var buttonMoodHappyTwo = document.querySelector(".button_1_2");
var buttonMoodNeutralTwo = document.querySelector(".button_2_2");
var buttonMoodAngryTwo = document.querySelector(".button_3_2");

// Button group three
var buttonGroupThree = document.querySelector(".buttons_character_three");
var buttonMoodHappyThree = document.querySelector(".button_1_3");
var buttonMoodNeutralThree = document.querySelector(".button_2_3");
var buttonMoodAngryThree = document.querySelector(".button_3_3");

// Audio
var happyAudio = new Audio('./audio/happyAudio.mp3');
var neutralAudio = new Audio('./audio/neutralAudio.mp3');
var angryAudio = new Audio('./audio/angryAudio.mp3');

buttonGroupOne.classList.remove("button_inactive");

function title(characterName){
    titleEl.textContent = "Angry Russian " + characterName;
}

function randomCharacter(){
    var randomGetal = Math.floor(Math.random()*3);   

    if (randomGetal == 0){
        title("Reshala");
        mainImage.src = "images/character1Neutral.png";
        buttonGroupOne.classList.remove("button_inactive");
        buttonGroupTwo.classList.add("button_inactive");
        buttonGroupThree.classList.add("button_inactive");
    } 
    
    if (randomGetal == 1) {
        title("Shturman");
        mainImage.src = "images/character2Neutral.png";
        buttonGroupOne.classList.add("button_inactive");
        buttonGroupTwo.classList.remove("button_inactive");
        buttonGroupThree.classList.add("button_inactive");
    } 
    
    if (randomGetal == 2) {
        title("Glukhar");
        mainImage.src = "images/character3Neutral.png";
        buttonGroupOne.classList.add("button_inactive");
        buttonGroupTwo.classList.add("button_inactive");
        buttonGroupThree.classList.remove("button_inactive");
    }
};

// Functions Character 1
function moodHappyOne(){
    mainImage.src = "images/character1Happy.png";
    happyAudio.play();
};

function moodNeutralOne(){
    mainImage.src = "images/character1Neutral.png";
    neutralAudio.play();
};

function moodAngryOne(){
    mainImage.src = "images/character1Angry.png";
    angryAudio.play();
};

// Functions Character 2
function moodHappyTwo(){
    mainImage.src = "images/character2Happy.png";
    happyAudio.play();
};

function moodNeutralTwo(){
    mainImage.src = "images/character2Neutral.png";
    neutralAudio.play();
};

function moodAngryTwo(){
    mainImage.src = "images/character2Angry.png";
    angryAudio.play();
};

// Functions Character 3
function moodHappyThree(){
    mainImage.src = "images/character3Happy.png";
    happyAudio.play();
};

function moodNeutralThree(){
    mainImage.src = "images/character3Neutral.png";
    neutralAudio.play();
};

function moodAngryThree(){
    mainImage.src = "images/character3Angry.png";
    angryAudio.play();
};

buttonMoodHappyOne.addEventListener("click", moodHappyOne, false);
buttonMoodNeutralOne.addEventListener("click", moodNeutralOne, false);
buttonMoodAngryOne.addEventListener("click", moodAngryOne, false);
 
buttonMoodHappyTwo.addEventListener("click", moodHappyTwo, false);
buttonMoodNeutralTwo.addEventListener("click", moodNeutralTwo, false);
buttonMoodAngryTwo.addEventListener("click", moodAngryTwo, false);

buttonMoodHappyThree.addEventListener("click", moodHappyThree, false);
buttonMoodNeutralThree.addEventListener("click", moodNeutralThree, false);
buttonMoodAngryThree.addEventListener("click", moodAngryThree, false);

buttonRefresh.addEventListener("click", randomCharacter, false);