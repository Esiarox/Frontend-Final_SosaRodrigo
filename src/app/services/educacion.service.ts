import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../modelos/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  //eduURL = 'http://localhost:8080/edu/';
  eduURL = 'https://ap-backend-rs.herokuapp.com/edu/';

  constructor(private httpClient: HttpClient) { }

  public listaEdu(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.eduURL + 'buscarEdu');
  }

  public buscarEdu(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.eduURL + `edu/${id}`);
  }

  public crear(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.eduURL + 'crearEdu', educacion);
  }

  public editar(educacion: Educacion): Observable<any> {
    return this.httpClient.put<any>(this.eduURL + `editar/${educacion.id}`, educacion);
  }

  public borrar(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.eduURL + `borrar/${id}`);
  }
}
