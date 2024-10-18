"use strict";
// Consigna:
// Tienes un sistema de música en el que los dispositivos de reproducción pueden ser de diferentes tipos. Todos los dispositivos 
// deberían implementar la interfaz ReproductorMusica, que contiene los métodos reproducir() y detener().
// Sin embargo, tienes una clase llamada Vinilo que tiene métodos incompatibles con la interfaz ReproductorMusica: colocarAguja() y levantarAguja().
// Tu tarea es crear un adaptador, llamado AdaptadorVinilo, que permita utilizar un objeto de tipo Vinilo como si fuera un objeto 
// de tipo ReproductorMusica, adaptando sus métodos para que sean compatibles con la interfaz ReproductorMusica.
// Requisitos:
//      Define la interfaz ReproductorMusica con los métodos reproducir() y detener().
//      Crea la clase Vinilo con los métodos colocarAguja() y levantarAguja().
//      Crea la clase AdaptadorVinilo que implemente la interfaz ReproductorMusica y use una instancia de Vinilo para "adaptar" los métodos.
//      Usa el adaptador para reproducir y detener música usando un Vinilo a través de la interfaz ReproductorMusica.
Object.defineProperty(exports, "__esModule", { value: true });
var Vinilo_1 = require("./Vinilo");
var AdaptadorVinilo_1 = require("./AdaptadorVinilo");
var miVinilo = new Vinilo_1.Vinilo();
var miReproductor = new AdaptadorVinilo_1.AdaptadorVinilo(miVinilo);
miReproductor.reproducir();
miReproductor.detener();
miReproductor.detener();
miReproductor.reproducir();
miReproductor.reproducir();
