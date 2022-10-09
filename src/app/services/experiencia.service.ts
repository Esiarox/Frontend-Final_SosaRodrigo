import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  expURL = 'http://localhost:8080/exp/';

  constructor(private httpClient: HttpClient) { }

  public listaExp(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.expURL + 'buscarExp');
  }

  public buscarExp(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.expURL + `exp/${id}`);
  }

  public crear(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.expURL + 'crearExp', experiencia);
  }

  public editar(experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.expURL + `editar/${experiencia.id}`, experiencia);
  }

  public borrar(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `borrar/${id}`);
  }
}
