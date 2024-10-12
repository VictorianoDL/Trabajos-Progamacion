import { Animal } from "./IAnimal";

export class Perro implements Animal{
    private raza:string;

    constructor(pRaza:string){
        this.raza = pRaza;
    }

    hacerSonido(): void {
        console.log("Guau..... ");
    }
    moverse(): void {
        console.log("El perro se mueve");  
    }
}