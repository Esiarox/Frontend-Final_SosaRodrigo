import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionC: Educacion[] = [];
  educacion!: Educacion;
  anio: number = 0;
  titulo: string = '';
  institucion: string = '';


  constructor(private educacionService: EducacionService, private tokenService: TokenService, private modalService: ModalService) { }

  isLogged = false;
  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.educacionService.listaEdu().subscribe(data => { this.educacionC = data });
  }

  crear(): void {
    const educ = new Educacion(this.anio, this.titulo, this.institucion);
    this.educacionService.crear(educ).subscribe(
      data => {
        //alert("Nueva Educación añadida");
        this.cargarEducacion();
      }, err => {
        alert("Error al agregar la nueva Educación");
      }
    )
    this.closeModal('crear-edu');
  }

  borrar(id?: number) {
    if (id != undefined) {
      this.educacionService.borrar(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("Ha ocurrido un error al borrar la educación");
        }
      )
    }
  }

  actualizar(): void {
    this.educacion.anio = this.anio;
    this.educacion.titulo = this.titulo;
    this.educacion.institucion = this.institucion;
    this.educacionService.editar(this.educacion).subscribe(
      data => {
        //this.cargarEducacion();
      }, err => {
        alert("Ha ocurrido un error al modificar la educación");
      }
    )
    this.cargarEducacion();
    this.closeModal('editar-edu');
  }

  openUpdateModal(id: string, edu: Educacion) {
    this.anio = edu.anio;
    this.titulo = edu.titulo;
    this.institucion= edu.institucion;
    this.educacion = edu;
    this.modalService.open(id);
  }

  openCreateModal(id: string) {
    this.anio = 0;
    this.titulo = "";
    this.institucion = "";
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }


}
