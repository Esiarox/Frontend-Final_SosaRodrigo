import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //urlBase = 'http://localhost:8080/personas/';
  urlBase = 'https://ap-backend-rs.herokuapp.com/personas/';

  constructor(private http:HttpClient) { }

  public getPersona(): Observable<Persona>{
    return this.http.get<Persona>(this.urlBase + 'buscar/perfil')
  }

  public editar(persona: Persona): Observable<any> {
    return this.http.put<any>(this.urlBase + `editar/${persona.id}`, persona);
  }
}
