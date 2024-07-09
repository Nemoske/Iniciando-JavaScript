
let nomes = [];
let senhas = [];

function inicio(){
let opcao = prompt("O que você deseja fazer?\n Cadastrar(1)\n Fazer login(2) \n Excluir cadastro(3)\n Editar cadasto (4)\n Encerrar o programa (5)");

return opcao;
}

function cadastrar(){
    nomes.push(prompt("Digite seu nome:"));
    senhas.push(prompt("Digite sua senha:"));
}

function editarCadastro(nome,senha){
    let indice = nomes.indexOf(nome);
    if(indice !== -1 && senhas[indice] == senha){
        let novoNome = prompt("Digite seu novo nome:");
        let novaSenha = prompt("Digite sua nova senha:");
        nomes[indice] = novoNome;
        senhas[indice] = novaSenha;
        return true;
    }
    else{
        return false;
    }
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
        alert("Não foi possível excluir");
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
            let nome = prompt("Digite seu nome:");
            let senha = prompt("Digite sua senha:");
            let login = fazerLogin(nome,senha);
            if(login){
                alert("Welcome")
            }
            else{
                alert("Não foi possível realizar o login");
            }
            break;
        case "3":
            let nomeExcluir = prompt("Digite seu nome");
            excluirCadastro(nomeExcluir);
            break;
        case "4":
            let user = prompt("Digite o seu nome");
            let password = prompt("Digite sua senha");
            let editar = editarCadastro(user,password);
            if(editar){
                alert("Usuário alterado com sucesso!");
            }
            else{
                alert("Não foi possível alterar o usuário!");
            }
            break;
        case "5":
            continuar = false;
            break;
        default:
            alert("Opção inválida");
            break;
    }
}
