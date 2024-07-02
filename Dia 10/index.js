// OBJETOS
//CLASSE
class Aluno{
    //ATRIBUTOS
    nome
    idade   
    areaDeAtuacao
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }

    //Metodos
    apresentar(){
        console.log("Olá, "+this.nome+" Você tem " +this.idade+ " anos "+" Você trabalha com "+this.areaDeAtuacao);
    }
}
console.log("Cadastro de alunos")

let alunos = [];
let continuar = true;
let indexAluno = 0;

while(continuar){
let nome = prompt("Digite o nome do aluno:");
let idade = parseInt(prompt("Digite a idade do aluno"));
let aluno = new Aluno(nome,idade);

let temAreaDeAtuacao = prompt("Insira a área de atuação do aluno");
aluno.areaDeAtuacao = temAreaDeAtuacao;
let desejaContinuar = prompt("Insira (1) Caso deseje continuar");
alunos[indexAluno] = aluno;
if(desejaContinuar != 1){
    continuar = false;
    continue;
}

indexAluno++;
}

for(let i = 0; i <= indexAluno; i++){
    alunos[i].apresentar();
}