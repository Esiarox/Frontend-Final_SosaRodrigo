export class Persona{
    id? : Number;
    nombre : string;
    apellido : string;
    titulo : string;
    imagen : string;
    acercaDe : string;
    imagenBanner : string;

    constructor(nombre : string, apellido : string, titulo : string, imagen : string, acercaDe : string, imagenBanner : string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.imagen = imagen;
        this.acercaDe = acercaDe;
        this.imagenBanner = imagenBanner;
    }
}