//Entrada de Dados
//let nome = prompt("digite seu nome");

//Processamento de Dados
//let mensagem = "Seja Bem Vindo(a), " + nome;

//Saída de Dados
//alert(mensagem);

//Isso é um comentário

/*

Isso é um bloco 

de várias linhas 

de comentário

*/

/*
Aula do dia 16 de outobro de 2024
*/
/*
//teste abrangente com outros testes dentro
let estado = "novo";
let assustado = true;
//Aqui testamos o estado para saber se o aluno é novo
if (estado === "new") {
  console.log("Bem Vindo ao JavaScript!");
  //Depois testamos se o aluno é assustado ou não
  if (assustado) {
    console.log("Não se preocupe: logo você domina.");
  } else {
    console.log("Assim é que se faz: vai dar certo!");
  }
} else {
    //Essa mensagem será exibida se o aluno não é novo
  console.log("Bem Vindo de volta!");
}
*/
/*
//ponto e virgula
// entrada de Dados - a função prompt e alert na sequencia recebem parametros
let cidade = prompt("Digite o nome de uma cidade");
let adjetivo = prompt("Digite uma adjetivo para a cidade");

//Processamento de Dados
// let = seja
let mensagem = cidade + ", cidade " + adjetivo;

//Saída de Dados
alert(mensagem);
*/

//Crie um programa que leia 3 notas de 0 a 10 e mostre a media
//Entrada de Dados
//CUIDADO: prompt retorna STRING!!! o q for digitado, sera transformado em numero
// maneira 1: nota1 = Number(nota1); maneira 2 abaixo:
let nota1 = Number(prompt("Digite a primeira nota"));
let nota2 = Number(prompt("Digite a segunda nota"));
let nota3 = Number(prompt("Digite a terceira nota"));

//Processamento de Dados
//Sinal de + quando é string, concatena Dados
//Sinal de + quando é número, soma
let media = (nota1 + nota2 + nota3) / 3;

// Saida de Dados
alert(media);
