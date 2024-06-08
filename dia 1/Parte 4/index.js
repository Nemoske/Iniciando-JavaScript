//Conversão de valores e entrada de dados
//Usuário consegue digitar:
window.alert("Digite sua idade:")
let entradaDoUsuario = prompt();
console.log("Sua idade: "+(entradaDoUsuario)+"\nVocê nasceu em: "+( 2024 - (entradaDoUsuario)));

//Usando parseInt
let entradaDoUsuario2 = parseInt(prompt("Insira um valor tipo float:"));
console.log(entradaDoUsuario2);
//Ele converte qualquer número para inteiro

//Usando o parseFloat
let entradaDoOutroUsuario = parseFloat(prompt("Insira um valor tipo inteiro:"));
console.log(entradaDoOutroUsuario)

//Usando o Number
//Basicamente aceita todo tipo de valor númerico
let entradaDeOutroUsuario = Number(prompt("Digite um número qualquer"));
console.log(entradaDeOutroUsuario)