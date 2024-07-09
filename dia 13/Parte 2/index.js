/*Funções de arrays*/ 

let arraysNumeros = [1,2,3,4,5];

arraysNumeros.forEach(numero => {
    arraysNumeros.push(numero+2-1)
})
console.log(arraysNumeros)
//Lista todos os elementos do array é igual ao um for, porém mais simples, podemos colocar condições dentro do forEach

//Filtra os elementos de acordo com a condição estabelecida, no caso estamos querendo números pares
console.log(arraysNumeros.filter(numero => numero%2==0))

//Organiza os elementos em ordem crescente
console.log(arraysNumeros.sort())


