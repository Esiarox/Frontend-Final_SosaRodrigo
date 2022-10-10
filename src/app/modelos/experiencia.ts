export class Experiencia {
    id?: number;
    nombreExp: string;
    descripcion: string;
    duracion: number;

    constructor(nombreExp: string, descripcion: string, duracion: number) {
        this.nombreExp = nombreExp;
        this.descripcion = descripcion;
        this.duracion = duracion;
    }
}
