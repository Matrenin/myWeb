let balance = +1000;
let btnGame = document.getElementById("btnGame");
let btnNumber = document.getElementById("btnNumber");
let btnColor = document.getElementById("btnColor");
let play = document.getElementById("play");

function getRandomNumber(to) {
    return Math.round(Math.random() * to);
}

function fortuna(rnd) {
    let array0 = [0, "цвет"];
    let array1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];
    for(let i = 0; i < array1.length; i++) {
        array1[i] = +array1[i];
        if(rnd == array1[i]) {
            array0 = [rnd, "красное"];
            return array0;
        }
    }

    let array2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];
    for(let i = 0; i < array2.length; i++) {
        array2[i] = +array2[i];
        if(rnd == array2[i]) {
            array0 = [rnd, "черное"];
            return array0;
        }
    }

    let array3 = [0];
    for(let i = 0; i < array3.length; i++) {
        array3[i] = +array3[i];
        if(rnd == array3[i]) {
            array0 = [0, "зеро"];
            return array0;
        }
    }
}

function readInput(id) {
    return document.getElementById(id).value;
}

play.addEventListener("click", function() {
    window.location.reload();
});

function newText(id, text) {
    document.getElementById(id).innerHTML = text;
}

function addText(id, text) {
    document.getElementById(id).append(text);
}

function hide(id) {
    document.getElementById(id).style.display = "none";
}

function show(id) {
    document.getElementById(id).style.display = "flex";
}

btnGame.addEventListener("click", function() {
    let game = readInput("userGame");
    if(game == "1") {
        hide("boxGame");
        show("numberGame");
    } else if(game == "2") {
        hide("boxGame");
        show("colorGame");
    } else if(game == "quit") {
        hide("boxGame");
        hide("btnGame");
        newText("info", "Игра окончена.");
    }
});

btnNumber.addEventListener("click", function() {
    let cifra = readInput("userNumber");
    let stavka = readInput("stavkaNumber");
    if(stavka <= balance && stavka > 0) {
        balance -= stavka;
        let result = getRandomNumber(36);
        let array00 = fortuna(result);
        newText("info", "Выпало число " + array00[0] + ", " + array00[1] + ". Вы выбрали число " + cifra + ", размер вашей ставки равен " + stavka + " фишек.");
        if(cifra == result) {
            balance += stavka * 35;
            addText("info", "Поздравляю, вы угадали число. Ваш выигрышь составил " + stavka * 35 + " фишек.");
            hide("numberGame");
            show("boxGame");
            newText("mainText", "Ваш баланс равен " + balance +  " фишек, выберите игру. Нажмите 1 - для угадывания числа, 2 - для угадывания цвета. Если хотите закончить игру введите слово quit.");
        } else if(cifra != result) {
            hide("numberGame");
            show("boxGame");
            newText("mainText", "Ваш баланс равен " + balance +  " фишек, выберите игру. Нажмите 1 - для угадывания числа, 2 - для угадывания цвета. Если хотите закончить игру введите слово quit.");
        }
    } else {
        newText("info", "Вы указали не корректную сумму.");
    }
});

btnColor.addEventListener("click", function() {
    let cvet = readInput("userColor");
    let color;
    if(cvet == 1) {
        color = "черное";
    } else if(cvet == 2) {
        color = "красное";
    }
    let stavka = readInput("stavkaColor");
    if(stavka <= balance && stavka > 0) {
        let result = getRandomNumber(36);
        let array00 = fortuna(result);
        balance -= stavka;
        newText("info", "Выпало число " + array00[0] + ", " + array00[1] + ". Вы выбрали цвет " + color + ", размер вашей ставки равен " + stavka + " фишек.");
        if(color == array00[1]) {
            balance += stavka * 2;
            addText("info", "Поздравляю, вы угадали цвет. Ваш выигрышь равен " + stavka * 2 + " фишек.");
            hide("colorGame");
            show("boxGame");
            newText("mainText", "Ваш баланс равен " + balance +  " фишек, выберите игру. Нажмите 1 - для угадывания числа, 2 - для угадывания цвета. Если хотите закончить игру введите слово quit.");
        } else if(array00[1] == "зеро") {
            balance += stavka / 2;
            addText("info", "Так как выпало зеро, размер вашего выиграша равен " + stavka / 2 + " фишек.");
            hide("colorGame");
            show("boxGame");
            newText("mainText", "Ваш баланс равен " + balance +  " фишек, выберите игру. Нажмите 1 - для угадывания числа, 2 - для угадывания цвета. Если хотите закончить игру введите слово quit.");
        } else if(color != array00[1]) {
            hide("colorGame");
            show("boxGame");
            newText("mainText", "Ваш баланс равен " + balance +  " фишек, выберите игру. Нажмите 1 - для угадывания числа, 2 - для угадывания цвета. Если хотите закончить игру введите слово quit.");
        }
    } else {
        newText("info", "Вы указали не корректную сумму.");
    }
});