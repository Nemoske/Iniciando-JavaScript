/*Crie uma classe para representar o seu computador:*/ 
/*Tipo - desktop ou notebook;
Processador - nome do seu processador, ex: Ryzen 5
Video - Integrado ou Dedicado;
Armazenamento - número em GB de memória, ex: 500 ou 1000;
MemoriaRam - número em GB de memória, ex: 4, 8 ou 16;
SSD - True ou False*/ 

// CLASSE
class Computador{
    //ATRIBUTOS
    tipo;
    processador;
    video;
    armazenamento;
    memoriaRam;
    ssd;

    //CONSTRUTOR com PARÂMETROS
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.tipo = tipo;
        this.processador = processador;
        this.video = video;
        this.armazenamento = armazenamento;
        this.memoriaRam = memoriaRam;
        this.ssd = ssd;
    };

    //METODOS
    apresentar(){
        console.log("O tipo do seu computador é "+this.tipo+ ", seu processador é um "+this.processador+ 
        ", seu computador tem vídeo "+this.video+ ", ele possui "+this.armazenamento+"GB, "+" memória RAM "+this.memoriaRam+"GB"+ ", SSD: "+this.ssd);
    };
}
let tipo = prompt("DESKTOP ou NOTEBOOK?");
let processador = prompt("Nome do processador");
let video = prompt("Vídeo integrado ou Dedicado?");
let armazenamento = parseInt(prompt("Quantos GB de armazenamento?"));
let memoriaRAM = parseInt(prompt("Quantos GB de memória RAM?"));

let ssd = prompt("Você usa SSD? (s/n)");
if(ssd != "n"){
    ssd = false;
}
else{
    ssd = true;
}

let computador = new Computador(tipo,processador,video,armazenamento,memoriaRAM,ssd);

computador.apresentar();