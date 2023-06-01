import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  listTareas: Tarea[] = [];
  nombreTarea = '';


  agregarTarea() {
    //Crear un objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }
    //Agregar un objeto a la lista tareas
    this.listTareas.    push(tarea);
    //Reset Form
    this.nombreTarea = '';
  }
  eliminarTarea(index : number):void{
    this.listTareas.splice(index, 1);
  }
  actualizarTarea(tarea: Tarea, index: number):void{
    this.listTareas[index].estado = !tarea.estado;
  }
}
