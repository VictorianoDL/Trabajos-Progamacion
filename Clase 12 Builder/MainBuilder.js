"use strict";
// Ejercicio 1: Construcción de Computadoras
// Consigna:
// Crea una clase Computadora que tenga los siguientes atributos opcionales:
//      Procesador
//      RAM
//      Almacenamiento
//      Tarjeta gráfica
//      Sistema operativo
// Implementa un patrón Builder que permita a los usuarios construir una computadora personalizada paso a paso.
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var ComputadoraBuilder_1 = require("./ComputadoraBuilder");
var computadora = new ComputadoraBuilder_1.ComputadoraBuilder();
var a = readlineSync.question("Ingrese su procesador o bien deje en blanco para dejar el predeterminado: ");
if (a !== "") {
    computadora.setProcesador(a);
}
var b = readlineSync.questionInt("Ingrese su Ram o bien ponga '0' para dejar el predeterminado: ");
if (b !== 0) {
    computadora.setRam(b);
}
var c = readlineSync.questionInt("Ingrese su Almacenamiento o bien bien ponga '0' para dejar el predeterminado: ");
if (c !== 0) {
    computadora.setAlmacenamiento(c);
}
var d = readlineSync.question("Ingrese su Targeta grafica o bien deje en blanco para dejar el predeterminado: ");
if (d !== "") {
    computadora.setTargetaGrafica(d);
}
var e = readlineSync.question("Ingrese su Sistema Operativo o bien deje en blanco para dejar el predeterminado: ");
if (e !== "") {
    computadora.setSistemaOperativo(e);
}
var miComputadora = computadora.build();
console.log(miComputadora.toString());
