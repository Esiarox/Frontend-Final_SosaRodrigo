import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona : Persona = new Persona("","","","","","");

  constructor(public personaService : PersonaService, private tokenService: TokenService, private modalService: ModalService) { }

  isLogged = false;
  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  actualizar(): void {
    this.personaService.editar(this.persona).subscribe(
      data => {
      }, err => {
        alert("Ha ocurrido un error al modificar los datos");
      }
    )
    this.closeModal('editar-persona');
  }

  cargarPersona(){
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

  openUpdateModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
