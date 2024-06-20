/*
Imagine que você trabalha num banco e sua missão é fazer um algoritmo para prever o aumento de salário de seus clientes.
1 - Peça para seu cliente informar seu nome, idade e salário atual e exiba essas informações em tela. Feito

2 - Peça para que seu cliente confirme as informações, se ele informar que digitou errado,
peça para colocar TODAS as informações novamente
repita as perguntas até o usuário informar que digitou as informações corretamente.

3 - Faça a previsão do salário dele para os próximos 10 anos considerando que:
- O cliente recebe anualmente aumento salarial. 
- Sabe-se que: no primeiro ano, ele receberá um aumento de 1,5%, sobre o seu salário atual; A partir do segundo
ano, os aumentos salariais sempre corresponderam ao dobro do percentual do ano anterior. Apresente todos os
valores com o ano correspondente. Ex: 2024 - R$1600.
*/ 


let nome = prompt("Digite seu nome:");
let idade = Number(prompt("Digite sua idade:"));
let salario = parseFloat(prompt("Informe seu salário atual:"));
window.alert("Olá, "+nome+", Você tem "+idade+" Anos de idade"+", Seu salário é de R$: "+salario);

let confirmacao = prompt("As informações estão corretas? (s/n)");
if(confirmacao == "s"){
    confirmacao = false;
}
else{
    confirmacao = true;
}
while(confirmacao){
    nome = prompt("Digite seu nome:");
    idade = Number(prompt("Digite sua idade:"));
    salario = parseFloat(prompt("Informe seu salário atual:"));
    window.alert("Olá, "+nome+", Você tem "+idade+" Anos de idade"+", Seu salário é de R$: "+salario);
    let confirm =  prompt("As informações estão corretas? (s/n)");
    if(confirm == "s"){
        confirmacao = false;
    }
    else{
        confirmacao = true;
    }
}

// Previsão de aumento salárial em 10 anos

let aumento = 0.015;

for(let i = 2024; i<= 2034; i++){
        let salarioNovo = salario * aumento;
        console.log(i+" R$: "+(salario+salarioNovo)+" Aumento de: "+aumento+"%");
        aumento *= 2;
    }
    
