import { Animal } from "./IAnimal";

export class Gato implements Animal{
    private machoHembra:string;

    constructor(machoHembra:string){
        this.machoHembra = machoHembra;
    }

    hacerSonido(): void {
        console.log("Miau..... ");    
    }
    moverse(): void {
        console.log("El gato se mueve"); 
    }
}