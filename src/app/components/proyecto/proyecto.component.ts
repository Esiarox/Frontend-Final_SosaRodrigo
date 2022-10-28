import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/modelos/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TokenService } from 'src/app/services/token.service';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectos: Proyecto[] = [];
  proyecto!: Proyecto;
  titulo: string = '';
  descripcion: string = '';
  imagen: string = '';

  constructor(private proyectoService: ProyectoService, private tokenService: TokenService, private modalService: ModalService) { }

  isLogged = false;
  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.proyectoService.listaProy().subscribe(data => { this.proyectos = data });
  }

  crear(): void {
    const proy = new Proyecto(this.titulo, this.descripcion, this.imagen);
    this.proyectoService.crear(proy).subscribe(
      data => {
        //alert("Nuevo Proyecto añadido");
        this.cargarProyecto();
      }, err => {
        alert("Error al agregar el nuevo Proyecto");
      }
    )
    this.closeModal('crear-proy');
  }

  borrar(id?: number) {
    if (id != undefined) {
      this.proyectoService.borrar(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("Ha ocurrido un error al borrar el proyecto");
        }
      )
    }
  }

  actualizar(): void {
    this.proyecto.titulo = this.titulo;
    this.proyecto.descripcion = this.descripcion;
    this.proyecto.imagen = this.imagen;
    this.proyectoService.editar(this.proyecto).subscribe(
      data => {
        this.cargarProyecto();
      }, err => {
        alert("Ha ocurrido un error al modificar el proyecto");
      }
    )
    this.cargarProyecto();
    this.closeModal('editar-proy');
  }

  openUpdateModal(id: string, proy: Proyecto) {
    this.titulo = proy.titulo;
    this.descripcion= proy.descripcion;
    this.imagen = proy.imagen;
    this.proyecto = proy;
    this.modalService.open(id);
  }

  openCreateModal(id: string) {
    this.titulo = "";
    this.descripcion = "";
    this.imagen = "";
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }


}
