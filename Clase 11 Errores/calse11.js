"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function dividirNumeros(n1, n2) {
    if (n2 == 0) {
        throw new Error("No se puede dividir por cero");
    }
    console.log("en la funcion");
    return n1 / n2;
}
var numero1 = readlineSync.questionInt("Ingrese Numero 1: ");
var numero2 = readlineSync.questionInt("Ingrese Numero 2: ");
var resultado;
try {
    resultado = dividirNumeros(numero1, numero2);
}
catch (Error) {
    console.log("No se puede dividir por cero");
    resultado = 0;
}
console.log(resultado);
