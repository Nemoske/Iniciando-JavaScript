
let nome;
let idade;
let cartaDeMotorista = false;
let carro = false;



//Pedindo informações
nome = prompt("Digite seu nome:");
idade = Number(prompt("Digite sua idade:"));
let opcaoCarta = prompt("Você tem carta de motorista? (s/n)")
if(opcaoCarta == "s"){
    cartaDeMotorista = true;
}
let opcaoCarro = prompt("Você tem carro? (s/n)");
if(opcaoCarro == "s"){
    carro = true;
}


if(idade < 18 || !cartaDeMotorista){
    console.log(nome+", você não pode dirigir")
}
else if (idade >= 18 && cartaDeMotorista  && !carro){
    console.log(nome+", você pode dirigir, mas não tem um carro")
}
else{
    console.log(nome+", você será o motorista!");
}





