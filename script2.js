/*
//Entrada
let valorConta = Number(prompt("Digite o valor da conta"));

//Processamento
let gorjeta = valorConta * 0.1;

//Saída
alert(
  "O valor da conta é " +
    valorConta.toFixed(2) +
    " e a gorjeta é de " +
    gorjeta.toFixed(2)
);
*/

//Entrada
let valorConta = Number(prompt("Digite o valor da conta"));
let quantasPessoas = Number(prompt("Quantas pessoas?"));

//Processamento
let gorjeta = valorConta * 0.1;
let total = valorConta + gorjeta;
let totalPessoa = total / quantasPessoas;

//Saída
alert(
  "O valor da conta é " +
    valorConta.toFixed(2) +
    " e a gorjeta é de " +
    gorjeta.toFixed(2) +
    " e por pessoa " +
    totalPessoa.toFixed(2)
);
