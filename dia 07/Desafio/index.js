/*
Crie um algoritmo que peça um número inteiro positivo para o usuário. 
Em seguida, popule um array com os números de Fibonacci (o próximo número da sequência é a soma dos 2 números anteriores).
Na hora de somar com os termos anteriores, some com elementos anteriores do array. 
Faça com que o array tenha no máximo 10 elementos
Para iniciar a sequência use o (número inserido - 1).

   Ex.: inseriu o número 8, a sequência deve começar da

       seguinte maneira 7 8 15 23 ...
*/ 


let numero = Number(prompt("Digite um número:"));
let arrayFibonacci = [];
arrayFibonacci [0] = numero - 1;
arrayFibonacci [1] = numero;

for(let i = 2; i < 10; i++){
    arrayFibonacci[i] = arrayFibonacci[i -1 ] + arrayFibonacci [i-2]
    }

    console.log(" Sequência: "+arrayFibonacci);
