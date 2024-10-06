let gameSeq = [];
let userSeq = [];

let btns = ["red", "green", "blue", "orange"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game has started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let ranIdn = Math.floor(Math.random() * 4); // Corrected to include 4 buttons
    let randColor = btns[ranIdn];
    gameSeq.push(randColor); // Add to game sequence

    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randColor);  // Log the color for debugging
    gameFlash(randBtn);
}

function btnPress() {
    let btn = this;
    let userChosenColor = btn.classList[1]; // Assuming the second class is the color name
    userSeq.push(userChosenColor);
    userFlash(btn);

    checkUserInput(userSeq.length - 1); // Compare input at the current level
}

function checkUserInput(currentLevel) {
    if (userSeq[currentLevel] === gameSeq[currentLevel]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(function () {
                levelUp(); // Proceed to the next level after a brief delay
            }, 1000);
            userSeq = []; // Reset the user sequence for the next level
        }
    } else {
        console.log("Wrong choice. Game Over!");
        resetGame(); // Reset the game on wrong input
    }
}

function resetGame() {
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
    h2.innerText = "Press Any Key to Start"; // Reset the heading text
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress); // Add event listener to each button
}
