let gameSeq = [];
let userSeq = [];

let btns = ["red", "green", "blue", "orange"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2")
document.addEventListener("keypress" , function(){
    if (started == false){
        console.log("Game has started");
        started = true
        levelUp()
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
       btn.classList.remove("flash"); 
    },250);

}

function levelUp() {
    level++
    h2.innerText = `level ${level}`;
    let ranIdn = Math.floor(Math.random() * 3);
    let randColor = btns[ranIdn];
    let randBtn =  document.querySelector(`.${randColor}`);
    console.log(ranIdn);
    console.log(randBtn);
    console.log(randColor);
    btnFlash(randBtn);
}