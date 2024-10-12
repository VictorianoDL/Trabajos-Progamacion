"use strict";
// Consigna:
// Crea una interfaz Animal con métodos hacerSonido() y mover(). 
// Implementa clases como Perro, Gato y Pajaro. 
// Luego, crea una fábrica que devuelva instancias de estos animales.
Object.defineProperty(exports, "__esModule", { value: true });
var AnimalFactory_1 = require("./AnimalFactory");
var fabrica = new AnimalFactory_1.AnimalFactory();
try {
    var miPerro = fabrica.crearAnimal("Perro", { raza: "Caniche" });
    console.log(miPerro);
}
catch (_a) {
    console.log("Error, tipo de animal no soportado");
}
try {
    var miGato = fabrica.crearAnimal("Gato", { machoHembra: "Hembra" });
    console.log(miGato);
}
catch (_b) {
    console.log("Error, tipo de animal no soportado");
}
try {
    var miPajaro = fabrica.crearAnimal("Pajaro", { region: "Aranaguey" });
    console.log(miPajaro);
}
catch (_c) {
    console.log("Error, tipo de animal no soportado");
}
try {
    var miCaballo = fabrica.crearAnimal("Caballo", { color: "Negro" });
    console.log(miCaballo);
}
catch (_d) {
    console.log("Error, tipo de animal no soportado");
}
