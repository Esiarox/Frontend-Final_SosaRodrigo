import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../modelos/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  //proyURL = 'http://localhost:8080/proy/';
  proyURL = 'https://ap-backend-rs.herokuapp.com/proy/';

  constructor(private httpClient: HttpClient) { }

  public listaProy(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.proyURL + 'buscarProy');
  }

  public buscarProy(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.proyURL + `proy/${id}`);
  }

  public crear(proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.proyURL + 'crearProy', proyecto);
  }

  public editar(proyecto: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.proyURL + `editar/${proyecto.id}`, proyecto);
  }

  public borrar(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.proyURL + `borrar/${id}`);
  }
}
