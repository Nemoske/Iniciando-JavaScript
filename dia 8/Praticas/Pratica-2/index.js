/*
 Crie três arrays, um para guardar  os modelos, um para guardar os anos e um para guardar os valores do carro
 Utilizando o WHILE, peça para o usuário cadastrar novos carros(modelo, ano e valor), popule os 3 arrays nas mesmas posições.
Seu usuário deve definir quando parar de inserir informações

Exiba o nome, ano e valor dos carros inseridos.
       ex: Celta, 2020 Valor: 50.000
       
 Ordene seus vetores pelo preço dos carros. (Aqui você deve usar seu algoritmo de ordenação, não use os nativos do javascript, como o OrderBy)
*/ 

let modelos = [];
let anos = [];
let valores = [];
let continuar = true;
let contador = 0;
let maior = [];
while(continuar){
modelos[contador] = prompt("Digite o modelo do carro:");
anos[contador] = Number(prompt("Digite o ano do modelo:"));
valores[contador] = parseFloat(prompt("Digite o valor do modelo:"));
contador++;
if(contador >= 3){
    let resp = prompt("Deseja continuar cadastrando?");
    if(resp != "n"){
        continuar = true;
    }
    else{
        continuar = false;
    }
}
}

for(let i = 0; i < valores.length - 1; i++){ // vai ate o penultimo elemento do array
    for(let j = 0; j < valores.length - i - 1; j++){
        if(valores[j] > valores[j + 1]){

            let modeloMaiorValor = modelos[j] 
            modelos[j] = modelos[j + 1]
            modelos[ j + 1 ] = modeloMaiorValor
            
            let anoMaiorValor = anos[j]
            anos[j] = anos[j + 1]
            anos[ j + 1 ] = anoMaiorValor

            let maiorValor = valores[j]
            valores[j] = valores[j + 1]
            valores[j + 1] = maiorValor;
        }
    }
}

console.log("Carros ordenados pelo preço:");
for(let i = 0; i < modelos.length; i++){
    console.log(modelos[i] + " - "+ anos[i] + " - " + valores[i])
}

