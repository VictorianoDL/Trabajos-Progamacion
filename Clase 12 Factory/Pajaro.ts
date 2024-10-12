import { Animal } from "./IAnimal";

export class Pajaro implements Animal{
    private region:string;

    constructor(pRegion:string){
        this.region = pRegion;
    }

    hacerSonido(): void {
        console.log("Twitt..... ");    
    }
    moverse(): void {
        console.log("El pajaro se mueve"); 
    }
}