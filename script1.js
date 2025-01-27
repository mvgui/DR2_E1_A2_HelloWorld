//Crie um programa que receba o valor da altura e do peso de uma pessoa e retorne o seu IMC - Índice de Massa Corporal.
//IMC = peso / altura ao quadrado
//altura em metros e peso em quilos

//Entrada
let alturaString = prompt("Digite sua altura em metros"); //string
let peso = Number(prompt("Digite seu peso em quilogramas"));
//Substituindo a vírgula por ponto
alturaString = alturaString.replace(",", "."); //string
altura = Number(alturaString); //number

//Processamento
//let imc = peso / (altura * altura);
let imc = peso / altura ** 2;

//Saida
alert("Seu Índice de Massa Corporal é " + imc.toFixed(2));

//.tofixed() limita qtd de casa decimal
