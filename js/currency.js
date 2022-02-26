let btnRubles = document.getElementById("btnRubles");
let btnCurrency = document.getElementById("btnCurrency");
let change = document.getElementById("change");
let currency = document.getElementById("selectCurrency");

function showObject(id) {
    let obj = document.getElementById(id);
    if (obj.style.display == "none") {
        obj.style.display = "flex";
    } else {
        obj.style.display = "none";
    }
}

function hideObject(id) {
    let obj = document.getElementById(id);
    if (obj.style.display == "flex") {
        obj.style.display = "none";
    } else {
        obj.style.display = "flex";
    }
}

change.addEventListener("click", function() {
    showObject("textCurrency");
    showObject("userCurrency");
    showObject("btnCurrency");
    hideObject("textRubles");
    hideObject("userRubles");
    hideObject("btnRubles");
});

function selectCurrency() {
    if (currency.value == "dollars") {
        return 91;
    } else if (currency.value == "euro") {
        return 101;
    } else {
        return NaN;
    }
}

function readInput(id) {
    return +document.getElementById(id).value;
}

function addText(text) {
    document.getElementById("result").innerHTML = text;
}

btnRubles.addEventListener("click", function() {
    let userMoney = readInput("userRubles");
    let nameCurrency = selectCurrency();
    let result = userMoney / nameCurrency;
    addText(userMoney + " рублей = " + result.toFixed(2) + " " + currency.value);
});

btnCurrency.addEventListener("click", function() {
    let userMoney = readInput("userCurrency");
    let nameCurrency = selectCurrency();
    let result = userMoney * nameCurrency;
    addText(userMoney + " " + currency.value + " = " + result.toFixed(2) + " рублей");
});