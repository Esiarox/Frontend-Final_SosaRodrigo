export class persona{
    id? : Number;
    nombre : String;
    apellido : String;
    imagen : String;

    constructor(nombre : String, apellido : String, imagen : String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.imagen = imagen;
    }
}