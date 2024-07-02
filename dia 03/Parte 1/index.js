// SWITCH CASE
// Utilizado para diversos tipos de alternativas

let idade = Number(prompt("Digite sua idade"))

switch (idade){
    case 10:
        console.log("Você tem 10 anos")
        break; // Encerra o código
    case 15:
        console.log("Você tem 15 anos")
        break;
    default: // Igual ao else, caso nenhuma resposta esteja na condição
        console.log("default");
        break;
}