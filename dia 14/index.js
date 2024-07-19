// Criar classes:

class Hotel {

    Id;
    Nome;
    Categoria;
    Endereco;
    Telefone;

    constructor(id,nome,categoria,endereco,telefone){
        this.Id = id;
        this.Nome = nome;
        this.Categoria = categoria;
        this.Endereco = endereco;
        this.Telefone = telefone;
    }
}

class Reserva {

    Id;
    IdHotel;
    Responsavel;
    DiaDeEntrada;
    DiaDeSaida;

    constructor(id,idHotel,responsavel,diaDeEntrada,diaDeSaida){
        this.Id = id;
        this.IdHotel = idHotel;
        this.Responsavel = responsavel;
        this.DiaDeEntrada = diaDeEntrada;
        this.DiaDeSaida = diaDeSaida;
    }
}

//Arrays e variáveis:

let hoteis = [];
let reservas = [];
let id = 1;
let idReserva = 1;

//Funções de cadastro:

function cadastroHoteis(){
    let nome =  prompt("Digite o nome do hotel:");
    let categoria = prompt("Digite a categoria do hotel:");
    let endereco = prompt("Digite o endereço do hotel:");
    let telefone = prompt("Digite o telefone do hotel:");
    let hotel = new Hotel(id,nome,categoria,endereco,telefone);
    id++;
    
    hoteis.push(hotel);
    
}



function cadastroReservas(){
   let idHotel;
   let existe = false;
   do{
    idHotel = parseInt(prompt("Digite o id do hotel:"));
    for(let i = 0; i < hoteis.length; i++){
        if(idHotel == hoteis[i].Id){
            i = hoteis.length
            existe = true
        } else if(i == hoteis.length - 1){
            console.log("Id de hotel não cadastrado");
        }
    }
   } while(!existe);

   let nome = prompt("Digite o nome do responsável");
   let diaEntrada = parseInt(prompt("Digite o dia de entrada"));
   let diaSaida
   do {
    diaSaida = parseInt(prompt("Digite o dia de saída"));
    if(diaSaida < diaEntrada) {
        console.log("O dia de saída deve ser maior que o dia de entrada");
    }
   } while (diaSaida < diaEntrada);

   let reserva = new Reserva(idReserva, idHotel, nome, diaEntrada, diaSaida);
   idReserva++;
   reservas.push(reserva);

}

//Função de exibir
function exibirInformacoes(idHotel){

    reservas.forEach(reserva =>{
        if(idHotel == reserva.IdHotel){
            let i = idHotel - 1;

            console.log("Nome do hotel: ",hoteis[i].Nome);
            console.log("Nome do responsáveç: ",reservas.Responsavel);
            console.log("Dia de entrada: ",reservas.DiaDeEntrada);
            console.log("Dia de saida: ",reservas.diaDeSaida);
        }
    })

}


//Função de exibir 2
function localizarHotel(idReserva) {

    let idHotel = reservas[idReserva - 1].IdHotel
    console.log("Hotel:",hoteis[idHotel - 1].Nome);
    console.log("Endereço:",hoteis[idHotel - 1].Endereco)
    console.log("Dia de entrada:",reservas[idReserva - 1].DiaDeEntrada)
    console.log("Dia de saida:",reservas[idReserva].DiaDeSaida)

};

//Função de exibir 3
function todasReservas(nome){
   for(let i = 0; reservas.length; i++){
        if(nome == reservas.Nome){
            console.log("Id da reserva: "+ reservas[i].idReserva);
            console.log("Hotel: "+ hoteis[(reservas[i].IdHotel)- 1].Nome);
    }
   }   
}
//Função de exibir 4
function ProcurarHotelPorCategoria(categoria){
    let hotelProcurados = [];

    for(let i = 0; i < hoteis.length; i++){
        if(categoria == hoteis[i].Categoria){
            hotelProcurados.push(hoteis[i].Nome);
        }
    }
    return hotelProcurados;
}

function AtualizarTelefone(idHotell,telefone){
    hoteis[idHotell - 1].Telefone = telefone;
    console.log("Número atualizado");
}

let continuar = true;
do{
    let opcao = prompt("Escolha uma opção: \n1 - Cadastrar Hotel \n2 - Cadastrar Reserva \n3 - Procurar reserva pelo hotel" +
        "\n4 - Procurar hotel pela reserva \n5 - Procurar reserva pelo responsável \n6 - Procurar hotéis por categoria" +
        "\n7 - Atualizar telefone de um hotel \n8 - Encerrar o programa")


        switch(opcao) {
            case "1":
                cadastroHoteis()
                break;
            case "2":
                cadastroReservas()
                break;
            case "3":
                exibirInformacoes(prompt("Digite o id do hotel:"));
                break;
            case "4":
                localizarHotel(prompt("Digite o id da reserva:"));
                break;
            case "5":
                todasReservas(prompt("Digite o nome do responsável pela reserva:"));
                break;
            case "6":
                let hoteiss = ProcurarHotelPorCategoria(prompt("Digite a categoria do hotel:"));
                console.log(hoteiss);
                break;
            case "7":
                let idHotel = parseInt(prompt("Digite o id do hotel:"));
                let numero = prompt("Digite o número novo:");
                AtualizarTelefone(idHotel,numero)
                break;
            case "8":
                console.log("Programa encerrando!");
                continuar = false;
                break;
            default:
                console.log("Opção inválida");
                break;
        }
    }while (continuar);
   
    





