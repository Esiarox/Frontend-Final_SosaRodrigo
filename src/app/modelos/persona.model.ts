export class Persona{
    id? : Number;
    nombre : string;
    apellido : string;
    imagen : string;

    constructor(nombre : string, apellido : string, imagen : string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.imagen = imagen;
    }
}