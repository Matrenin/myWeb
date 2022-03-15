let words = ["нефть", "норма", "танец", "пизда", "фокус", "пират", ];
let n = Math.round(Math.random() * (words.length - 1));
let word = words[n];
word = word.split("");
let btn = document.querySelector(".wordle__btn");

document.querySelector("#play").addEventListener("click", function() {
    window.location.reload();
});

let inputsOne = document.querySelectorAll(".one input");
let inputsTwo = document.querySelectorAll(".two input");
let inputsThree = document.querySelectorAll(".three input");
let inputsFour = document.querySelectorAll(".four input");
let inputsFive = document.querySelectorAll(".five input");
let inputsSix = document.querySelectorAll(".six input");

function checkAnswer(inputs) {
    for (let i = 0; i < word.length; i++) {
        let answer = inputs[i].value;
        if (word.includes(answer)) {
            inputs[i].style.backgroundColor = "yellow";
        }
        if (word[i] == answer) {
            inputs[i].style.backgroundColor = "#42B745";
        }
    }
}

btn.addEventListener("click", function() {
    checkAnswer(inputsOne);
    checkAnswer(inputsTwo);
    checkAnswer(inputsThree);
    checkAnswer(inputsFour);
    checkAnswer(inputsFive);
    checkAnswer(inputsSix);
});


