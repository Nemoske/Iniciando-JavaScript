/*
Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array.
Depois, o usuário vai preenchendo elemento por elemento do vetor,
ao final, exiba o array e o array ao contrário
*/ 

let quantidade = Number(prompt("Quantos números você deseja inserir?"));
let numeros = [];

for(let i = 0; i < quantidade; i++){

    numeros[i] = Number(prompt("Digite seus números:"));
}

for(i = quantidade; i >= 0; i-- ){

    console.log(numeros[i]);
}

