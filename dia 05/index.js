// Funções
// sem retorno
function somar(){
    console.log(2 +2);
    console.log("Estou na função somar");
}

//ESCOPO
let num1 = '2.1'
function somar2(){
    //variaveis criadas dentro da função só podem ser acessadas dentro do escopo
    let num = '2.1';
    console.log(Number(num + num1));
    console.log("Estou na função somar");
}




//Chamando função:
somar();
somar2();


//Função com parametro e return
// retorn basicamente retorna algo quando a função é chamada
function somar3(num,num1){
  
  return num + num1;
}

//Usando variavel para pegar o resultado

function somar4(num2,num3){
    return num2 + num3;
  }
// podemos atriburir o return a uma variavel também
  let resultadoSoma = somar4(1 ,2);


