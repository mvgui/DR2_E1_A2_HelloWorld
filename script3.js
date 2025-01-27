//Entrada
let valorGasto = Number(prompt("Digite o valor a ser gasto"));
let precoLitro = Number(prompt("Digite o valor do litro de combustível"));

//Processamento
let litros = valorGasto / precoLitro;

//Saída
alert("Será possível colocar " + litros.toFixed(2) + " litros");
//Substitua o "." por "de", "do" ou "da" para leitura de código
