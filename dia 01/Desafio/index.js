//Obtendo informações:
let nome = prompt("Digite seu nome:");
let idade = parseInt(prompt("Digite sua idade:"));
let altura = parseFloat(prompt("Digite sua altura:"));
let peso = parseInt(prompt("Digite seu peso:"))
let imc = peso/(altura*altura);
let anoDeNascimento = 2024-idade;
//Exibir:
console.log("Olá, "+nome+" Você tem "+idade+" anos, Nasceu no ano de "+anoDeNascimento+ ", tem "+altura+", pesa "+peso+
" kg seu IMC é "+imc.toFixed(2)+" Kg/m2")


