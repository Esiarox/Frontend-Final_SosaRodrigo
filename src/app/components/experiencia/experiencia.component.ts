import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[] = [];
  experiencia!: Experiencia;
  nombreExp: string = '';
  descripcion: string = '';
  duracion: number = 0;

  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService, private modalService: ModalService) { }

  isLogged = false;
  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.experienciaService.listaExp().subscribe(data => { this.experiencias = data });
  }

  crear(): void {
    const expe = new Experiencia(this.nombreExp, this.descripcion, this.duracion);
    this.experienciaService.crear(expe).subscribe(
      data => {
        alert("Nueva Experiencia Laboral añadida");
        this.cargarExperiencia();
      }, err => {
        alert("Error al agregar la nueva Experiencia Laboral");
      }
    )
    this.closeModal('crear-exp');
  }

  borrar(id?: number) {
    if (id != undefined) {
      this.experienciaService.borrar(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("Ha ocurrido un error al borrar la experiencia laboral");
        }
      )
    }
  }

  actualizar(): void {
    this.experiencia.nombreExp = this.nombreExp;
    this.experiencia.descripcion = this.descripcion;
    this.experiencia.duracion = this.duracion;
    this.experienciaService.editar(this.experiencia).subscribe(
      data => {
      }, err => {
        alert("Ha ocurrido un error al modificar la experiencia laboral");
      }
    )
    this.closeModal('editar-exp');
  }

  openUpdateModal(id: string, exp: Experiencia) {
    this.nombreExp = exp.nombreExp;
    this.descripcion = exp.descripcion;
    this.duracion = exp.duracion;
    this.experiencia = exp;
    this.modalService.open(id);
  }

  openCreateModal(id: string) {
    this.nombreExp = "";
    this.descripcion = "";
    this.duracion = 0;
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
