let opAritmetico = document.getElementById('opAritmetico');
let opLogico = document.getElementById('opLogico');
let x1 = document.getElementById('x1');
let x2 = document.getElementById('x2'); 
let l1 = document.getElementById('l1');
let l2 = document.getElementById('l2');
let resultado = document.getElementById('resultado');



function calculadoraAritmetica(operacao, x1, x2) {
    let resultado = 0;
    if (operacao === '+') {
        resultado = x1 + x2;
    } else if (operacao === '-') {
        resultado = x1 - x2;
    } else if (operacao === '*') {
        resultado = x1 * x2;
    } else if (operacao === '/') {
        resultado = x1 / x2;
    }
    document.getElementById('resultado').innerHTML = resultado;
}

function calculadoraLogica(operacao, x1, x2) {
    let resultado = 0;
    if (operacao === '&&') {
        resultado = x1 && x2;
    } else if (operacao === '||') {
        resultado = x1 || x2;
    } else if (operacao === '!') {
        resultado = !x1;
    }
    document.getElementById('resultadoLogico').innerHTML = resultado;
}

x1.addEventListener('input', function() {
    calculadoraAritmetica(opAritmetico.value, parseFloat(x1.value), parseFloat(x2.value));
});
x2.addEventListener('input', function() {
    calculadoraAritmetica(opAritmetico.value, parseFloat(x1.value), parseFloat(x2.value));
});
opAritmetico.addEventListener('input', function() {
    calculadoraAritmetica(opAritmetico.value, parseFloat(x1.value), parseFloat(x2.value));
});
opLogico.addEventListener('input', function() {
    calculadoraLogica(opLogico.value, l1.checked, l2.checked);
});