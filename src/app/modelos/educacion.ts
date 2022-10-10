export class Educacion {
    id?: number;
    anio: number;
    titulo: string;
    institucion: string;
    
    constructor(anio: number, titulo: string, institucion: string) {
        this.titulo = titulo;
        this.institucion = institucion;
        this.anio = anio;
    }
}
