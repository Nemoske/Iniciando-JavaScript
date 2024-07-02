// Caixa eletrônico DoDev (DOWHILE)
/*
Solicite o nome e o cpf do seu cliente.
Pergunte um valor.
Ofereça a opção de saque ou depósito.
Caso a opção de saque seja a escolhida, remova o valor inserido do saldo total.
Caso a opção de depósito seja escolhida, adicione o valor inserido do saldo total.
Pergunte se o seu usuário deseja continuar. (Insira 1 para continuar e 2 para parar).
Exiba o saldo total.
Exiba o maior valor inserido(independente de ser depósito ou saque).
Exiba a média dos valores inseridos(independente de ser depósito ou saque).
*/
let resp;
let saldoTotal = 100;
let nome = prompt("Digite seu nome");
let cpf = Number(prompt("Digite seu CPF"));
let maiorValor = 0;
let mediaDosValores = 0;
let valor = 0;
let contValor = 0;
let soma = 0;
do {
    
     valor = parseFloat(prompt("Insira um valor:"));   
     contValor++;
        if(maiorValor < valor){
            maiorValor = valor;
        }

        if(valor > 0 ){
            soma += valor;
            mediaDosValores = soma / contValor;
        }
       
    let opcao = prompt("Cliente: "+nome+", do CPF: "+cpf+"\n Você deseja sacar ou depositar esse valor? (SAQUE (1) DEPOSITAR (2)");
        if(opcao == 1 || opcao == 2){
            if(opcao == 1){
                if(valor > saldoTotal){
                    window.alert("Não é possível sacar o valor solicitado ")
                }
                else{
                    saldoTotal -= valor;
                    window.alert("Valor sacado com sucesso!\n Saldo em conta R$: " +saldoTotal);
                }
                
            }
            else if(opcao == 2){
                if(valor <= 0 ){
                    window.alert("Não é possível depositar esse valor!")
                }
                else{
                    saldoTotal += valor;
                    window.alert("Valor depositado com sucesso!\n Saldo em conta R$: "+saldoTotal);
                }
                
            }
        }

     resp = prompt("Deseja continuar? (1 = s) (2 = n)");
      
} while (resp == "s");

console.log("Saldo total da conta: "+saldoTotal);
console.log("Maior valor: "+maiorValor);
console.log("Média dos valores: "+mediaDosValores.toFixed(2));