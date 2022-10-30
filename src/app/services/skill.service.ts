import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../modelos/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  //skillURL = 'http://localhost:8080/skill/';
  skillURL = 'https://ap-backend-rs.herokuapp.com/skill/';

  constructor(private httpClient: HttpClient) { }

  public listaSkill(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.skillURL + 'buscarSkill');
  }

  public buscarSkill(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.skillURL + `skill/${id}`);
  }

  public crear(skill: Skill): Observable<any> {
    return this.httpClient.post<any>(this.skillURL + 'crearSkill', skill);
  }

  public editar(skill: Skill): Observable<any> {
    return this.httpClient.put<any>(this.skillURL + `editar/${skill.id}`, skill);
  }

  public borrar(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.skillURL + `borrar/${id}`);
  }
}
