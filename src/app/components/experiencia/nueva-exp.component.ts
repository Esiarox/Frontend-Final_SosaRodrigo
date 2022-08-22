import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-nueva-exp',
  templateUrl: './nueva-exp.component.html',
  styleUrls: ['./nueva-exp.component.css']
})
export class NuevaExpComponent implements OnInit {

  nombreExp: string = '';
  descripcion: string = '';

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreExp, this.descripcion);
    this.experienciaService.crear(expe).subscribe(
      data => {
        alert("Nueva Experiencia Laboral añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Error al agregar la nueva Experiencia Laboral");
        this.router.navigate(['']);
      }
    )
  }
}
