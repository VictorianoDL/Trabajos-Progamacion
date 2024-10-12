// Ejercicio 1: Construcción de Computadoras
// Consigna:
// Crea una clase Computadora que tenga los siguientes atributos opcionales:
//      Procesador
//      RAM
//      Almacenamiento
//      Tarjeta gráfica
//      Sistema operativo
// Implementa un patrón Builder que permita a los usuarios construir una computadora personalizada paso a paso.

import * as readlineSync from "readline-sync";

import { ComputadoraBuilder } from "./ComputadoraBuilder";

const computadora = new ComputadoraBuilder();

let a:string = readlineSync.question("Ingrese su procesador o bien deje en blanco para dejar el predeterminado: ")
if(a !== ""){
    computadora.setProcesador(a);
}

let b:number = readlineSync.questionInt("Ingrese su Ram o bien ponga '0' para dejar el predeterminado: ")
if(b !== 0){
    computadora.setRam(b);
}

let c:number = readlineSync.questionInt("Ingrese su Almacenamiento o bien bien ponga '0' para dejar el predeterminado: ")
if(c !== 0){
    computadora.setAlmacenamiento(c);
}

let d:string = readlineSync.question("Ingrese su Targeta grafica o bien deje en blanco para dejar el predeterminado: ")
if(d !== ""){
    computadora.setTargetaGrafica(d);
}

let e:string = readlineSync.question("Ingrese su Sistema Operativo o bien deje en blanco para dejar el predeterminado: ")
if(e !== ""){
    computadora.setSistemaOperativo(e);
}

let miComputadora = computadora.build();

console.log(miComputadora.toString());





