let fome = prompt("Você está com fome?")
let dinheiro = prompt("Você tem dinheiro?")
let restaurante = prompt("Restaurante está aberto?")

if(fome === 'Não' || fome === 'não' || dinheiro === "Não" || dinheiro === "não"){
    console.log("Hoje a janta será em casa")
}
else if(fome === "Sim" || fome === "sim" && dinheiro === "Sim" || dinheiro === "sim" && restaurante === "Não" || restaurante === "não"){
    console.log("Peça um delivey!")
}
else{
    console.log("Hoje o jantar será no seu restaurante prefirido!")
}