import { Injectable } from '@angular/core';
import { Local, Remoto } from '../model/url.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private UrlRemoto = new Remoto();
  private UrlLocal = new Local();

  private loginUser = this.UrlLocal.host+'/usuario/login';
  private buscarParam = this.UrlRemoto.host+'/web/buscar/parametros';
  private alterarParam = this.UrlRemoto.host+'/alterar/parametro';

  constructor(private httpClient:HttpClient) { }

  realizarLogin(login:string,senha:string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append("login", login);
    headers = headers.append("senha", senha);
    return this.httpClient.get<Usuario>(this.loginUser,{headers});
  }
}
