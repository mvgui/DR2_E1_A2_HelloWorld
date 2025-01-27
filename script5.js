//Entrada de Dados
let precoLitro = Number(prompt("igite o preço do litro de combustível"));
let valorAGastar = Number(prompt("Digite o valor a gastar"));

//Processamento de Dados
let litros = valorAGastar / precoLitro;
let mensagem = `
Gastando ${valorAGastar} com o preço por litro de ${precoLitro.toFixed(
  2
)} dá pra colocar ${litros.toFixed(2)}`;

//Saída de dados
