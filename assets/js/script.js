var currentNumberWrapper = document.getElementById('currentNumber'); //Faz a busca do elemento HTML e relaciona a uma variável
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;              //Soma 1 número ao "currentNumber"
    currentNumberWrapper.innerHTML = currentNumber; //Faz a alteração no HTML
}

function decrement() {
    currentNumber = currentNumber - 1;              //Diminui 1 número ao "currentNumber"
    currentNumberWrapper.innerHTML = currentNumber; //Faz a alteração no HTML
}