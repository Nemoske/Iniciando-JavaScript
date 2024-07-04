/*
Crie uma função que pergunte o nome e o salário de um colaborador;

Depois crie uma função que deve ser chamada dentro da função que solicita as informações, essa função irá calcular o aumento de salário conforme a seguinte tabela:
       - ATÉ R$1.500,00 : aumento de 20%

       - R$1.501,00 até R$2.000,00 : aumento de 15%

       - R$2.001,00 até R$3.000,00 : aumento de 10%

       - R$3.001,00 em diante : aumento de 5%
*/ 

function nomeDoColaborador(){

    let nomeCola = prompt("Digite seu nome;");
    let salarioCola = parseFloat(prompt(" Digite seu salário?"));

   aumentoSalarial(nomeCola,salarioCola);

}

function aumentoSalarial(nome,salario){
    let salarioAumento = parseFloat(salario);
    let nomeColaborador = nome;
    if(salarioAumento <= 1500){
        let aumento;
        aumento = salarioAumento * 0.2
         console.log(nomeColaborador+", Seu aumento é de R$"+aumento.toFixed(2)+" Seu salário após o aumento R$: "+(aumento+salarioAumento)+", Seu salário anterior R$: "+salarioAumento);
         return refazerCalculo();
    }
    else if(salarioAumento > 1500 && salarioAumento <= 2000){
        let aumento;
        aumento = salarioAumento * 0.15
        console.log(nomeColaborador+", Seu aumento é de R$"+aumento.toFixed(2)+" Seu salário após o aumento R$: "+(aumento+salarioAumento)+", Seu salário anterior R$: "+salarioAumento);
         return refazerCalculo();
    }
    else if(salarioAumento > 2000 && salarioAumento <= 3000){
        let aumento;
        aumento = salarioAumento * 0.1
        console.log(nomeColaborador+", Seu aumento é de R$"+aumento.toFixed(2)+" Seu salário após o aumento R$: "+(aumento+salarioAumento)+", Seu salário anterior R$: "+salarioAumento);
         return refazerCalculo();
    }
      else if(salarioAumento > 3000 ){
        let aumento;
        aumento = salarioAumento * 0.05
        console.log(nomeColaborador+", Seu aumento é de R$"+aumento.toFixed(2)+" Seu salário após o aumento R$: "+(aumento+salarioAumento)+", Seu salário anterior R$: "+salarioAumento);
           return refazerCalculo(); 
    }
}

function refazerCalculo(){
    let repetir = prompt("Deseja refazer os cálculos? (s/n)")
    if(repetir != "s"){
        alert("Cálculos encerrados.")
        
        
    }
    else{
        nomeDoColaborador();
    }
}

nomeDoColaborador();