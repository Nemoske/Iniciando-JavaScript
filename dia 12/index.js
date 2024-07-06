/*Crie dois arrays: arrayA e arrayB. Preencha os dois arrays com 10 números cada, pode declarar já com valores;
  let arrayA = [13,20,10,22,24,20,27,17,19,14]

  let arrayB = [24,22,23,11,15,17,29,14,16,21]
  
  Implemente uma função que receba dois arrays como parâmetro. 
  Essa função deve retornar um array que contenha apenas os números em comum nos dois arrays recebidos como parâmetro.
  */


  let arrayA = [13,20,10,22,24,20,27,17,19,14];
  let arrayB = [24,22,23,11,15,17,29,14,16,21];

      function numerosIguais(arry1,arry2){
        let array1 = [];
        let array2 = [];
        let contador = 0;
        array1 = arry1
        array2 = arry2
        let numeros = [];
        for(let i = 0; i < array1.length; i++){
            for(let j = 0; j < array2.length; j++ ){
            if(array1[i] == array2[j]){
                numeros[contador] = array2[j]
                contador++
            }
          }
          }
          return numeros
        }
   
        
      

  console.log(numerosIguais(arrayA,arrayB))


