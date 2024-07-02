//OPERADORES 'E' 'OU'
console.log(2 === 2 && 3 === 3) // OPERADOR 'E' RETORNA TRUE
console.log(2 === 2 && 3 === 4) // OPERADOR 'E' RETORNA FALSE
// SO RETORNA VERDADEIRO SE TODAS AS CONDIÇÕES FOREM VERDADEIRAS

console.log(2 === 2 || 3 === 3) // OPERADOR 'OU' RETORNA TRUE
console.log(2 === 1 || 3 === 4) // OPERADOR 'OU' RETORNA FALSE
// SO RETORNA TRUE SE AMBAS OU UMA FOREM VERDADEIRAS, CASO SEJA AMBAS FALSAS
//RETORNARÁ FALSO

let idade = Number(prompt("Digite sua idade:"));
let nome = prompt("Digite seu nome:")
if(idade === 20 && nome === "Luan"){
console.log("Seu nome é Luan e você tem 20 anos")
}
//CASO NÃO SEJA ATENDIDA UMA CONDIÇÃO PODEMOS USAR O 'OU'
if(idade === 20 || nome === "Luan"){
    console.log("Seu nome é Luan ou você tem 20 anos")
}
else{
    console.log("Você não tem 20 anos e o seu nome não é Luan")
}

//Outra maneira mais interessante de se fazer isso:

let idadeDois = Number(prompt("Digite sua idade:"));
let nomeDois = prompt("Digite seu nome:")

if(idadeDois === 20 && nomeDois === "Luan"){
console.log("Seu nome é Luan e você tem 20 anos")
}
else if(idadeDois === 20 || nomeDois === "Luan"){
    console.log("Seu nome é Luan ou você tem 20 anos")
}
else{
    console.log("Você não tem 20 anos e o seu nome não é Luan")
}

//Estamos usando uma condição encandeada, só executará apenas uma das condições caso ambas as respostas sejam corretas