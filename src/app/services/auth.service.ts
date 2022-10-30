import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../modelos/jwt-dto.model';
import { Login } from '../modelos/login.model';
import { UsuarioNuevo } from '../modelos/usuario-nuevo.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //authURL = 'http://localhost:8080/auth/';
  authURL = 'https://ap-backend-rs.herokuapp.com/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevoU(usuarioNuevo: UsuarioNuevo): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'new', usuarioNuevo);
  }

  public loginU(login: Login): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', login);
  }
}
