// conversao de tipos
// conversao implicita
const numero = 456;
const numeroString = "456";
console.log(numero === numeroString);
console.log(numero == numeroString);
console.log(numero + numeroString);
// conversao explicita
console.log(numero + Number(numeroString));
console.log(numero + parseInt(numeroString));
console.log(numero + parseFloat(numeroString));
console.log(numero + numeroString);

