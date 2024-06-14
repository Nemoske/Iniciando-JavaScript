/*
Desenvolva um algoritmo que receba a nota e o sexo do aluno, usando a estrutura WHILE, e pergunte ao usuario se ele deseja cadastrar outra nota. No final, exiba no console:


 - A média geral dos alunos
 - Quantos homens enviaram as notas
 - Quantas mulheres tiveram nota acima de 7
 - Qual a maior nota entre os homens
*/

let condicao = true;
let media = 0;
let soma = 0;
let alunos = 0;
let homem = 0;
let mulher = 0;
notaMaisAltaHomem = 0;
while(condicao){

let nota = Number(prompt("Digite a nota do aluno"));
let mf = prompt("Digite o sexo do aluno");
if(mf == "M" || mf == "m"){
homem++;
if(notaMaisAltaHomem < nota){
    notaMaisAltaHomem = nota;
}

}
if(mf == "F" || mf == "f"){
    if(nota > 7){
        mulher++;
    }
}
cont++;
soma += nota;
media = soma/cont;


let resp = prompt("Deseja cadastrar mais uma nota? (s/n)");
if(resp == 'n'){
    condicao = false;
}
}
console.log("Média geral da turma: "+media.toFixed(2));
console.log("Quantidade homens que fizeram a prova: "+homem);
console.log("Quantidade de mulheres que tiveram a nota acima de 7: "+mulher);
console.log("Nota mais alta entre os homens: "+notaMaisAltaHomem);