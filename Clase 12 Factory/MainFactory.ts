// Consigna:
// Crea una interfaz Animal con métodos hacerSonido() y mover(). 
// Implementa clases como Perro, Gato y Pajaro. 
// Luego, crea una fábrica que devuelva instancias de estos animales.

import { AnimalFactory } from "./AnimalFactory";

const fabrica = new AnimalFactory();

try{
    let miPerro = fabrica.crearAnimal("Perro",{raza:"Caniche"}); 
    console.log(miPerro);   
}catch{
    console.log("Error, tipo de animal no soportado")
}

try{
    let miGato = fabrica.crearAnimal("Gato",{machoHembra:"Hembra"}); 
    console.log(miGato);  
}catch{
    console.log("Error, tipo de animal no soportado")
}

try{
    let miPajaro = fabrica.crearAnimal("Pajaro",{region:"Aranaguey"}); 
    console.log(miPajaro); 
}catch{
    console.log("Error, tipo de animal no soportado")
}

try{
    let miCaballo = fabrica.crearAnimal("Caballo",{color:"Negro"});
    console.log(miCaballo);    
}catch{
    console.log("Error, tipo de animal no soportado")
}



