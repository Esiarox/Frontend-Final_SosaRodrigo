export class Experiencia {
    id? : number;
    nombreExp : string;
    descripcion : string;

    constructor(nombreExp:string,descripcion:string){
        this.nombreExp = nombreExp;
        this.descripcion = descripcion;
    }
}
