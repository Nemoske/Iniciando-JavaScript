/* Faça um algoritmo utilizando a estrutura de repetição FOR que receba 1 número e exiba na tela qual o resultado da sua tabuada e dos próximos 2 números.
*/


let numero = Number(prompt("Digite um número para tabuada:"));

for(let contador = numero; contador <= numero + 2; contador++){

    console.log("Tabuada do número: "+contador);
    for( let contador2 = 0; contador2<=10; contador2++){
        console.log(contador+ " X "+ contador2 + " = "+ (contador*contador2))
    }
}







