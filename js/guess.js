let number = parseInt(Math.random() * 15);
let tryCount = 0;
let maxTryCount = 3;
let guessBtn = document.getElementById("guessBtn");
let guessPlay = document.getElementById("guessPlay");

function readInt() {
    return +document.getElementById("userAnswer").value;
}

function newText(text) {
    document.getElementById("info").innerHTML = text;
}

function hide(id) {
    document.getElementById(id).style.display = "none";
}

function play() {
    window.location.reload();
}

function declination(count, one, two) {
    if (count == 2) {
        return one;
    }
    return two;
}

guessPlay.addEventListener("click", function() {
    play();
});

guessBtn.addEventListener("click", function() {
    tryCount++;
    let answer = readInt();
    let declinationTry = declination(tryCount, "попытка", "попытки");
    if(answer == number) {
        newText("Поздравляю, вы угадали число.");
        hide("guessBtn");
        hide("userAnswer");
    } else if(tryCount >= maxTryCount) {
        newText("Bы проиграли, у вас кончились попытки. Правильный ответ: " + number);
        hide("guessBtn");
        hide("userAnswer");
    } else if(answer > number) {
        newText("Ваше число больше нужного. У вас осталось " + (maxTryCount - tryCount) + " " + declinationTry);
    } else {
        newText("Ваше число меньше нужного. У вас осталось " + (maxTryCount - tryCount) + " " + declinationTry);
    }
});