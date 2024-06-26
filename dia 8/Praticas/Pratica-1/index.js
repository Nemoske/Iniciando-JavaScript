/*
 Crie um array para receber os nomes dos alunos e outro para receber as notas;
 Para cada aluno inserido pergunte o nome e a nota da prova;
 Seu usuário deve ter a opção de parar de inserir informações quando desejar;
 No final exiba a nota de cada aluno, a soma das notas e a média geral da turma. 
 Para calcular a média deve dividir a soma das notas pelo total de alunos.
*/ 

let nomes = [];
let notas = [];
let contador = 0;
let media = 0;
let repetidor = true;
let soma = 0;
while(repetidor){
nomes[contador] = prompt("Digite o nome do aluno");
notas[contador] = Number(prompt("Digite a nota do aluno"));

soma += notas[contador]


contador++;
if(contador >= 3){
    let respo = prompt("Deseja continuar registrando? (s/n)");
    if(respo == "s"){
        repetidor = true;
    }
    else{
        repetidor = false;
    }
}
}
media = soma/contador;
for(let i = 0; i  < contador; i++){
    console.log("Aluno "+nomes[i]+" Nota "+notas[i]);
}

console.log("Soma das notas: "+soma);
console.log("Media geral da turma: "+media.toFixed(2));