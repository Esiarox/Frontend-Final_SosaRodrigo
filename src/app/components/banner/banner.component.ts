import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  persona : Persona = new Persona("","","","","","");
  banner : String = "";

  constructor(public personaService : PersonaService, private tokenService: TokenService, private modalService: ModalService) { }

  isLogged = false;
  ngOnInit(): void {
    this.cargarPersona()
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(){
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

  actualizar(): void {
    this.personaService.editar(this.persona).subscribe(
      data => {
      }, err => {
        alert("Ha ocurrido un error al modificar los datos");
      }
    )
    this.closeModal('editar-banner');
  }

  openUpdateModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
