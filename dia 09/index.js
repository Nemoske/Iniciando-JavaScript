// Crie 2 arrays: um para nomes e um para senhas
// Solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer login, excluir um cadastro ou encerrar o programa.
// Faça o fluxo de funcionamento do código, considere que o usuário pode escolher quando encerrar o programa conforme as opções.
// Se a opção escolhida for cadastro, solicite dois valores ao usuário, um nome e uma senha e guarde cada um no seu respectivo array.
/*
Se a opção escolhida for login solicite ao usuário um nome e uma senha, depois procure o nome recebido no array de nomes e em caso positivo
compare a senha no array de senhas.
Se as duas comparações forem válidas exiba uma mensagem de sucesso
*/ 
let nomes = [];
let senhas = [];
let rodando = true;
let contador = 0;

while(rodando){
    let acao = parseInt(prompt("(1) Você deseja Cadastar?\n (2) Fazer login?\n (3) Excluir um cadastro? \n (4) Encerrar o programa?"));
switch(acao){
    case 1:
        window.alert("Realizando cadastro...");
        
        nomes[contador] = prompt("Digite seu nome:");
        senhas[contador] = prompt("Digite sua senha");   
        contador++;   
    break;

    case 2:
        window.alert("Realizando Login...");
        let nomeLogin = prompt("Digite seu nome:");
        let senhaLogin = parseInt(prompt("Digite sua senha:"));
        let confirm = false
        for(let i = 0; i < nomes.length; i++){
            if(nomeLogin == nomes[i] && senhaLogin == senhas[i]){
                confirm = true;
            }
        }
            if (confirm){
                alert("Welcome")
            } else{
                alert("Login ou senha incorretos!")
            }
         
    break;

    case 3:
        window.alert("Deletando conta...")
        let deleteLogin = prompt("Digite seu nome:");
        let senhaDelete = parseInt(prompt("Digite sua senha:"));
        let confirmDelet = false
            for(let i =0; i < nomes.length; i++){
                if(deleteLogin == nomes[i] && senhaDelete == senhas[i]){
                    confirmDelet = true;
                    if(confirmDelet){
                        alert("Conta deletada com sucesso!");
                        nomes[i] = "";
                        senhas[i] = "";
                    }
                }
                else{
                    alert("Conta não encontrada")
                }
            }
    break;
    case 4:
        alert("Encerrando programa...");
        rodando = false;
   default:
        console.log("Alternativa errada...")
        
}
}
