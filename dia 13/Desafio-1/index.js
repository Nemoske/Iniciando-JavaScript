
let nomes = [];
let senhas = [];

function inicio(){
let opcao = prompt("O que você deseja fazer?\n Cadastrar(1)\n Fazer login(2)\n Excluir cadastro(3)\n Encerrar o programa (4)");

return opcao;
}

function cadastrar(){
    nomes.push(prompt("Digite seu nome:"));
    senhas.push(prompt("Digite sua senha:"));
}

function fazerLogin(nome,senha){
    let indice = nomes.indexOf(nome);
    if(indice !== -1 && senhas[indice] == senha){
        return true;
    }
    else{
        return false;
    }
}

function excluirCadastro(nome){
    let indice = nomes.indexOf(nome);
    if(indice !== -1){
        nomes.splice(indice, 1);
        senhas.splice(indice, 1);
        alert("Cadastro excluído com sucesso!");
    }
    else{
        alert("Não foi possível excluir")
    }
}

let continuar = true;
while(continuar){
    let opcao = inicio();

    switch (opcao) {
        case "1":
            cadastrar();
            break;
        case "2":
            let nome = prompt("Digite seu nome:")
            let senha = prompt("Digite sua senha:")
            let login = fazerLogin(nome,senha);
            if(login){
                alert("Welcome")
            }
            else{
                alert("Não foi possível realizar o login")
            }
            break;
        case "3":
            let nomeExcluir = prompt("Digite seu nome");
            excluirCadastro(nomeExcluir);
            break;
        case "4":
            continuar = false;
            break;
        default:
            alert("Opção inválida");
            break;
    }
}
