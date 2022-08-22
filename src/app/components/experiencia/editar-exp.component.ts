import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent implements OnInit {
  experiencia!: Experiencia;
  constructor(private experienciaService: ExperienciaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.buscarExp(id).subscribe(
      data =>{
        this.experiencia = data;
      }, err =>{
        alert("Ha ocurrido un error al modificar la experiencia laboral");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.editar(id, this.experiencia).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Ha ocurrido un error al modificar la experiencia laboral");
         this.router.navigate(['']);
      }
    )
  }
}
