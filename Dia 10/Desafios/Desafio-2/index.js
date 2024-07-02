/*Crie uma classe Carro com as seguintes propriedades:
Nome - qual a equipe do carro Ferrari, Mercedes, McLaren, etc;
Potencia - número de cavalos de potência do carro;
VelocidadeMaxima - qual a maior velocidade que o carro pode alcançar;
Aceleracao - o tempo em segundos que o carro leva para ir de 0 a 100 km/h

Adicione na classe carro um método que recebe como parâmetro uma distância em metros e calcula o tempo em segundos para percorrer essa distância.
Use a seguinte fórmula para o cálculo: 

resultado = distância / (VelocidadeMaxima / Aceleracao). 

A função deve retornar esse resultado;
*/

class Carro{
    nome;
    potencia;
    velocidadeMaxima;
    acelaracao;
    constructor(nome,potencia,velocidadeMaxima,acelaracao){
        this.nome = nome;
        this.potencia = potencia;
        this.velocidadeMaxima = velocidadeMaxima;
        this.acelaracao = acelaracao;
    }

    //Metodo

    tempoParaPercorrer(distância){
        let resultado;
        resultado = distância / (this.velocidadeMaxima / this.acelaracao);
        return resultado.toFixed(2);
    }
}

let continuar = true;
let arrayCarro = [];
let indexCarro= 0;
let distancia = 0;
while(continuar){
let nome = prompt("Qual a marca do veículo?");
let potencia = parseInt(prompt("Digite quantos cavalos possui?"));
let velocidadeMaxima = parseFloat(prompt("Qual a velocidade máxima o carro pode alcançar?"));
let acelaracao = parseFloat(prompt("Quantos segundos para o carro ir  de 0 a 100 km/h"));
distancia = Number(prompt("Digite uma distância:"));
let carro = new Carro(nome,potencia,velocidadeMaxima,acelaracao);
arrayCarro[indexCarro] = carro;
let adicionar = prompt("Deseja adicionar mais um veículo? (s/n)");
if(adicionar == "s"){
    continuar = true;
    indexCarro++;
}
else{
    continuar = false;
    for(let i = 0; i <= indexCarro; i++ ){
        console.log("O carro: "+arrayCarro[i].nome+" percorre essa distância: "+distancia+ " Em "+arrayCarro[i].tempoParaPercorrer(distancia));
    }
}
}

/*3 - Crie uma classe Corrida com as seguintes propriedades:
Nome - nome do local da corrida;
Tipo - uma corrida pode ser Fórmula 1, Stock Car, Rally, etc;
Distancia - o total em metros da corrida;
Participantes - um array de objetos da classe Carro
Vencedor - qual a equipe que ganhou a corrida;
*/

//Classe
class Corrida{
    //Atributos
    nome;
    tipo;
    distancia;
    participantes;
    vencedor;
    
    //Construtor
    constructor(nome,tipo,distancia){
        this.nome = nome;
        this.tipo = tipo;
        this.distancia = distancia;
        this.participantes = [];
        this.vencedor = "";
    }

    //Metodos
    DefinirVencedor(){
        let menorTempo = this.participantes[0].tempoParaPercorrer(this.distancia);
        let vencedor = this.participantes[0];

        for(let i = 1; i < this.participantes.length; i++){
            let tempo = this.participantes[i].tempoParaPercorrer(this.distancia);

        if(tempo < menorTempo){
          menorTempo = tempo;
          vencedor = this.participantes[i];
        }   
    }
    return this.vencedor = vencedor;
    }

    Vencedor(){
        alert("Vencedor: "+this.vencedor.nome);
    }
}


let corrida = new Corrida("Monza","Fórmula 1",60000);

corrida.participantes[0] = new Carro("Bugatti",1600,420,2.5);
corrida.participantes[1] = new Carro("Porsche",394,290,7.5);
corrida.participantes[2] = new Carro("Fiat Uno 2000",47,300,10);

corrida.DefinirVencedor();
corrida.Vencedor();