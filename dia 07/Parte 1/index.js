// Arrays

let nomes = [];
let continuar = true;
let posicaoDoArray = 0;
while(continuar){
    let nomeInserido = prompt("Insira um nome:");
    nomes[posicaoDoArray] = nomeInserido;

    let desejaContinuar = prompt("Insira 1 caso deseje continuar/ 2 para encerrar");
    if(desejaContinuar == '1'){
        continuar = true;
        posicaoDoArray++;
    }
    else{
       continuar = false;
    }
    

}