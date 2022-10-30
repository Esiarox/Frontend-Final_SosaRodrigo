import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/modelos/login.model';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = true;
  login!: Login;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  mensaje!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin() {
    this.login = new Login(this.nombreUsuario,this.password);
    this.authService.loginU(this.login).subscribe(data=>{
      this.isLogged=true;
      this.tokenService.setToken(data.token);
      this.tokenService.setUsername(data.usuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate(['']);
    },err =>{
      this.isLogged=false;
      this.mensaje = err.error.mensaje;
      console.log(this.mensaje);
      alert("Error al iniciar sesión. Verifique sus datos");
    })
  }
}
