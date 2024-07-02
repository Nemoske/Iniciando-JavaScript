//Escopo
let idade = Number(prompt("Digite sua idade"));

if(idade <= 10){
    console.log(idade)
    let dentroDoEscopo = 'Luan';
    console.log(dentroDoEscopo);
    console.log("Você tem mais ou 10 anos")
if(true){
    console.log("Terceito escopo");
    console.log(dentroDoEscopo);
    //Consigo usar tranquilamente a variável criada no escopo do if
}
}

else{
    console.log(idade)
    console.log("Você tem menos de 10 anos");
}

console.log("Testando variável criada dentro do if");
console.log(dentroDoEscopo);
// Aqui eu não consigo, está fora do escopo do IF

// Caso seja utilizado o VAR em vez de let ou const seria possível usar 
// todas as variáveis, o VAR não respeita o escopo e isso é um problema.