import { Gato } from "./Gato";
import { Animal } from "./IAnimal";
import { Pajaro } from "./Pajaro";
import { Perro } from "./Perro";

export class AnimalFactory{
    crearAnimal(tipo:string,atributos:any):Animal{
        switch(tipo){
            case "Perro":
                return new Perro(atributos.raza)
            break;
            case "Gato":
                return new Gato(atributos.machoHembra)
            break;
            case "Pajaro":
                return new Pajaro(atributos.region)
            break;

            default: throw new Error("Tipo de animal incorrecto")
        } 
    }

}