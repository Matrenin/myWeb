let btn = document.getElementById("btn");
let select = document.getElementById("currency-select");

function addText(text) {
    document.getElementById("result").innerHTML = text;
}

function readInput() {
    return +document.getElementById("userRubles").value;
}

function selectCurrency(nameCurrency) {
    let result;
    if(nameCurrency == "dollars") {
        result = 81;
        return result;
    } else if(nameCurrency == "euro") {
        result = 91;
        return result;
    }
}

btn.addEventListener("click", function() {
    let wellCurrency = selectCurrency(select.value);
    let rubles = readInput();
    let result = (rubles / wellCurrency).toFixed(2);
    addText(rubles + " рублей = " + result + " " + select.value);
});