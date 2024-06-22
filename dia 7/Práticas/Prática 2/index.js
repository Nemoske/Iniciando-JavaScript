/*
Crie um algoritmo que peça 5 números ao usuário, coloque eles em um array, depois exiba
esse array. Modifique os elementos do array de modo que a sequência de números fique ao
contrário.
*/ 

let numeros = [];

for(let i = 0 ; i < 5; i++){
    numeros[i] = Number(prompt("Digite alguns números"));
}

for(i = 4 ; i >= 0; i--){
    console.log(numeros[i]);
}

console.log("/////////////////////////////");

for(let i = 0 ; i < 5; i++){
    console.log(numeros[i]);
}

