export class Tarea {
    nombre: string = '';
    estado: boolean = false;

    constructor(nombre: string, estado: boolean) {
        this.nombre = nombre;
        this.estado = estado;
    }
}