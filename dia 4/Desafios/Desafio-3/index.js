//  Agora faça com que o algoritmo do exercício anterior exiba a mesma contagem mas na ordem inversa.
// Ex.: 50 45 40 35 30 25 … 5 0 Fim!

let numero = Number(prompt("Digite um número"));

for(let contador = numero; contador >= 0; contador-=5){
    console.log(contador);
}