/*
Escreva um algoritmo onde seu usuário deve informar nome, idade, peso, altura e profissão, a
partir disso você deve exibir um texto com todas essas informações. Ex: Usuário inseriu nome:
Giovanni, idade: 21, peso: 74kg, profissão: Programador, altura: 1.83, Você exibe: Olá Giovanni,
você tem 21 anos, é programador, tem 1.83M de altura e pesa 74kg.

Verifique se o usuário é maior ou menor de idade, se ele for maior exiba na tela
“Está liberado para tomar umas geladas”,
se ele for menor exiba “Sem gelada para você”.

Utilize a idade informada pelo usuário, e mostre sua idade em meses, semanas e dias.
Considere ano com 365 dias, mês com 30 dias e semana com 7 dias. 

*/
let reiniciarTudo = true;
while(reiniciarTudo){
let nome = prompt("Digite seu nome:");
let idade = Number(prompt("Digite sua idade:"));
let peso = parseFloat(prompt("Digite seu peso:"));
let altura = parseFloat(prompt("Digite sua altura:"));
let profissao = (prompt("Digite sua profissão:"));
let imc = peso/(altura*altura);
console.log("Olá, Seu nome é "+nome+", você tem "+idade+" anos, pesa "+peso+"kg, sua profissão é "+profissao+", sua altura: "+altura);


if(idade>=18){
    console.log("Você pode tomar umas geladas!\n");
}
else{
    console.log("Você é de menor, não pode beber!\n");
}
let ano = 2024;
anoDeNascimento = ano-idade;
console.log("Você nasceu no ano de "+anoDeNascimento);
console.log("Sua idade em meses: "+(idade*12));
console.log("Sua idade em semanas: "+(idade*52));
console.log("Sua idade em dias: "+(idade*365));
// Calcule o IMC do seu usuário e informe a faixa dele.
console.log("Iremos calcular seu IMC\n");


if(imc < 18.5 ){
    console.log("Situação: Magreza\n");
}
else if(imc >= 18.5 && imc < 24.9){
    console.log("Situação: Normal\n");
}
else if(imc >= 24.9 && imc <= 30){
    console.log("Situação: Sobrepeso\n");
}
else if(imc > 30){
    console.log("Situação: Obesidade\n");
} 
else{
    console.log("Idade ou peso inválida\n");
}

// Agora você deve exibir todos os anos que o usuário já viveu até o ano atual e informar qual a idade dele no determinado ano.
console.log("Exibindo todos os anos que você já viveu\n");

for(let i = anoDeNascimento ; i <= 2024; i ++){
    
    console.log(i+" Anos de idade : "+(i-anoDeNascimento));

}


let reiniciar = prompt("Deseja tentar novamente? (s/n)");
if(reiniciar == "s"){
    reiniciarTudo = true;

}
else{
    reiniciarTudo = false;
    console.log("Finalizando...\n");
}
}