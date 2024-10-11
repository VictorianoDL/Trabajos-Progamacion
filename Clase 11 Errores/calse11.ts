import * as readlineSync from "readline-sync";

function dividirNumeros(n1:number,n2:number):number{
    if(n2 == 0){
        throw new Error("No se puede dividir por cero")
    }
    console.log("en la funcion")

    return n1/n2
}

let numero1:number = readlineSync.questionInt("Ingrese Numero 1: ");
let numero2:number = readlineSync.questionInt("Ingrese Numero 2: ");

let resultado:number;

try{
    resultado = dividirNumeros(numero1,numero2);
}catch(Error){
    console.log("No se puede dividir por cero");
    resultado = 0;
}

console.log(resultado);