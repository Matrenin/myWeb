var btn = document.getElementById("btn");
var play = document.getElementById("play");

play.addEventListener("click", function() {
    window.location.reload();
});

function getRandomNumber(max) {
    return Math.round(Math.random() * max);
}

function generateText(letter, length) {
    var text = "";
    for(var i = 0; i < length; i++) {
        var n = getRandomNumber(letter.length - 1);
        text = text + letter[n];
    }
    return text;
}

function addText(id, text) {
    document.getElementById(id).innerHTML = text;
}

var text = generateText(["a", "f", "s", "d"], 20);
addText("text", text);

function userAnswer() {
    return document.getElementById("userAnswer").value;
}


btn.addEventListener("click", function() {
    var answer = userAnswer();
    if(answer == text) {
        addText("info", "Поздравляю, у вас получилось.");
    } else {
        addText("info", "Вы допустили ошибку, попробуйте еще раз.");
    }
});

