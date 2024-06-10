// CALCULADORA com SWITCH CASE


let numero1 = Number(prompt("Digite um número:"));
let numero2 = Number(prompt("Digite outro número:"));
let operador = prompt("Qual operador?");

switch (operador){
    case "-":
        console.log(numero1+" - "+numero2+" Resultado: "+ (numero1-numero2));
        break;
    case "+":
        console.log(numero1+" + "+numero2+" Resultado: "+ (numero1+numero2));
        break;
    case "*":
        console.log(numero1+" X "+numero2+" Resultado: "+ (numero1*numero2));
        break;
    case "/":
        console.log(numero1+" ÷ "+numero2+" Resultado: "+ (numero1/numero2));
        break;        
    case "%":
        console.log(numero1+" ÷ "+numero2+" Resultado: "+ (numero1%numero2));
        break; 
    default:
        console.log("Inválido");
        break;
}