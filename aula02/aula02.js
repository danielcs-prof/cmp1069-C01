let select = document.getElementById('operador');


select.addEventListener('change',function (){
    let operacao = document.getElementById('operador').value;
    let resultado = 0;
    let x1 = parseFloat(document.getElementById('x1').value);
    let x2 = parseFloat(document.getElementById('x2').value);
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
})
