import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: Experiencia[] = [];
  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService) { }

  isLogged = false;
  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia():void{
    this.experienciaService.listaExp().subscribe(data => {this.experiencia = data});
  }

  borrar(id?: number){
    if(id != undefined){
      this.experienciaService.borrar(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("Ha ocurrido un error al borrar la experiencia laboral");
        }
      )
    }
  }

}
