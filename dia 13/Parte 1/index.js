/*Funções de arrays*/ 

//Função index
let arraysNumeros = [1,2,3,4,5];
console.log(arraysNumeros.indexOf(4))
//Utilizando para achar o index do array

//Função push
console.log(arraysNumeros.push(6))
console.log(arraysNumeros)
//Utilizado para adicionar um novo elemento no array

//Função include
console.log(arraysNumeros.includes(0))
console.log(arraysNumeros)
//Utilizado para verificar se existe um determinado valor no array

//Função splice

let result;
result = arraysNumeros.splice(1,2);
console.log(result);
console.log(arraysNumeros);

//Ele modifica o array Original removendo os elementos que indicamos aparti do indice
//O primeiro indice tem o papel de indicar o inicio da remoção sem incluir ele mesmo, o último indica o a quantidade de elementos a se remover
// se vamos começar do indice 1 entao iriamos remover os numeros 2 e 3 

