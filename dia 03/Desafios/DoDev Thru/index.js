//POSTO DE GASOLINA
let opcao = Number(prompt("Abastecer com gasolina (1), com alcool (2) ou calibrar os pneus (3) ? \nQual opção desejada?"));
let valor;
let quantidadeAbastecida;
switch (opcao){
    case 1:
    let gasolina = 5;
        valor = Number(prompt("Digite o valor R$:"));
        quantidadeAbastecida = valor / gasolina;
        console.log("Você abasteceu seu carro com:  "+quantidadeAbastecida+ " Litros de gasolina.\nA conta ficou em R$: "+ valor);
        break;

    case 2:
        let alcool = 3;
        valor = Number(prompt("Digite o valor R$:"));
        quantidadeAbastecida = valor / alcool;
        console.log("Você abasteceu seu carro com: "+quantidadeAbastecida.toFixed(2)+ " Litros de álcool.\nA conta ficou em R$: "+ valor);
        break;

    case 3:
        console.log("Pneus calibrados com sucesso!");
        break;

    default:
        console.log("Opção invalida");
}