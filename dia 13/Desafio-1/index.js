let nomes = [];
let senhas = [];

function inicio(){
    let opcaos = prompt("Cadastrar(1)\nFazer login(2)\nEditar Cadastro(3)\nDeletar Cadastro(4)\nEncerrar(5)");
    return opcaos;
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

function editarCadastro(nome,senha){
    let indice = nomes.indexOf(nome);
    if(indice !== -1 && senhas[indice] == senha){
        let nomeNovo = prompt("Digite seu novo nome:");
        let senhaNova = prompt("Digite sua nova senha");
        nomes[indice] = nomeNovo;
        senhas[indice] = senhaNova;
        return true;
    }
    else{
        return false;
    }
}

function excluirCadastro(nome,senha){
    let indice = nomes.indexOf(nome);
    if(indice !== -1 && senhas[indice] == senha){
        nomes.splice(indice,1);
        senhas.splice(indice,1)
        return true;
    }
    else{
        return false;
    }
}

let continuar = true;
while(continuar){
let opcao = inicio();

switch(opcao){
    case "1":
        cadastrar()
    break;

    case "2":
        let nome = prompt("Digite seu nome:");
        let senha = prompt("Sua senha:");
        let login = fazerLogin(nome,senha);

        if(login){
            alert("Login realizado com sucesso!");
        }
        else{
            alert("Erro ao realizar o login");
        }
    break;

    case "3":
        let nomeEdit = prompt("Digite seu nome:");
        let senhaEdit = prompt("Digite sua senha:");
        let editar = editarCadastro(nomeEdit,senhaEdit);
        if(editar){
            alert("Usuário editado com sucesso!");
        }
        else{
            alert("Não foi possível alterar usuário!")
        }
    break;

    case "4":
        let nomeDel = prompt("Digite seu nome:");
        let senhaDel = prompt("Digite sua senha:")
        let deletar = excluirCadastro(nomeDel,senhaDel);
        if(deletar){
            alert("Usuário deletado do sistema!");
        }
        else{
            alert("Não foi possível deletar!");
        }
    break;

    case "5":
        continuar = false;
    break;

    default:
        alert("Opção inválida");
    break
}



}