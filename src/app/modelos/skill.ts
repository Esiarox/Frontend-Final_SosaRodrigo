export class Skill {
    id?: number;
    titulo: string;
    nivel: number;
    
    constructor(titulo: string, nivel: number, ) {
        this.titulo = titulo;
        this.nivel = nivel;
    }
}
