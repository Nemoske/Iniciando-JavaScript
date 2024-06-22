/*
Crie um algoritmo que receba um número inteiro positivo e um array. 
Popule o array e no final exiba os índices em que número inserido aparece nesse array.
Para testes do exercício use até 10 elementos no array.
*/ 

let numero = Number(prompt("Digite seu número favorito"));
let arrayNumeros = [];
let contador = 0;
let indice = [];
for(let i = 0; i < 10 ; i++){
    arrayNumeros[i] = Number(prompt("Digite os seus números"));
}

for(let i = 0; i < 10 ; i++){
    console.log("indice: "+(i)+ " Números do array: "+(arrayNumeros[i]));
    
    if(arrayNumeros[i] == numero ){
      indice[contador] = i;
      contador++;
    }
}

console.log("Seu número: "+numero+" indice dele: "+(indice));







