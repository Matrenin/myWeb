let btn = document.getElementById("btn");
let play = document.getElementById("play");
let inputLetters = document.querySelector(".letters");


play.addEventListener("click", function() {
    window.location.reload();
});

function getRandomNumber(max) {
    return Math.round(Math.random() * max);
}

function generateText(letter, length) {
    let text = "";
    for(let i = 0; i < length; i++) {
        let n = getRandomNumber(letter.length - 1);
        text = text + letter[n];
    }
    return text;
}

function addText(id, text) {
    document.getElementById(id).innerHTML = text;
}


document.querySelector(".add__text-btn").addEventListener("click", () => {
    let letters = inputLetters.value.split(",");
    let text = generateText(letters, 20);   
    addText("text", text);
    addText("info", "");
});

function userAnswer(id) {
    return document.querySelector(id).value;
}

btn.addEventListener("click", function() {
    let answer = userAnswer("#userAnswer");
    let text = document.querySelector("#text").textContent;
    if(answer == text) {
        addText("info", "Поздравляю, у вас получилось.");
    } else {
        addText("info", "Вы допустили ошибку, попробуйте еще раз.");
    }
});

