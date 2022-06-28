'use strict';

let highScore = 0;
let score = 20;
let myNumber = random();
function random() {
    return Math.floor(Math.random() * 20 + 1);
}

document.querySelector(".check").addEventListener("click", function () {
    if (score === 0) {
        changeValues(score, "Game Over", "red", myNumber);
        toggleDisable(true);
        return;
    }
    let guessNo = Number(document.querySelector(".guess").value);
    if (guessNo === myNumber) {
        changeValues(score, "Correct", "#60b347", myNumber);
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").innerText = `${score}`;
        }
    } else if (guessNo < myNumber) {
        document.querySelector(".message").innerText = "Guess Higher";
        document.querySelector(".score").innerText = `${--score}`;
    } else {
        document.querySelector(".message").innerText = "Guess Lower";
        document.querySelector(".score").innerText = `${--score}`;
    }
});

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    toggleDisable(false);
    myNumber = random();
    document.querySelector(".guess").value = "";
    changeValues(score, "Start guessing...", "#222", "?");
});

function changeValues(setScore, setMsg, setBody, setNumber) {
    document.querySelector(".score").innerText = setScore;
    document.querySelector(".message").innerText = setMsg;
    document.querySelector("body").style.backgroundColor = setBody;
    document.querySelector(".number").innerText = setNumber;
}

function toggleDisable(value) {
    document.querySelector(".guess").disabled = value;
    document.querySelector(".check").disabled = value;
}
