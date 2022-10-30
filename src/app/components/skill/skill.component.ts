import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/modelos/skill';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills: Skill[] = [];
  skill!: Skill;
  titulo: string = '';
  nivel: number = 0;

  constructor(private skillService: SkillService, private tokenService: TokenService, private modalService: ModalService) { }

  isLogged = false;
  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillService.listaSkill().subscribe(data => { this.skills = data });
  }

  crear(): void {
    const skill = new Skill(this.titulo, this.nivel);
    this.skillService.crear(skill).subscribe(
      data => {
        alert("Nueva Skill añadida");
        this.cargarSkills();
      }, err => {
        alert("Error al agregar la nueva skill");
      }
    )
    this.closeModal('crear-skill');
  }

  borrar(id?: number) {
    if (id != undefined) {
      this.skillService.borrar(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("Ha ocurrido un error al borrar la skill");
        }
      )
    }
  }

  actualizar(): void {
    this.skill.titulo = this.titulo;
    this.skill.nivel = this.nivel;
    this.skillService.editar(this.skill).subscribe(
      data => {
      }, err => {
        alert("Ha ocurrido un error al modificar la skill");
      }
    )
    this.closeModal('editar-skill');
  }

  openUpdateModal(id: string, skill: Skill) {
    this.titulo = skill.titulo;
    this.nivel= skill.nivel;
    this.skill = skill;
    this.modalService.open(id);
  }

  openCreateModal(id: string) {
    this.titulo = "";
    this.nivel = 0;
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
