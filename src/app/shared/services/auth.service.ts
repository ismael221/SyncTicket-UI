import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { User } from "../model/User";


@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private http: HttpClient){}

     //Método para fazer login
  async login(user: User) {
    const result = await this.http
      .post<any>(`${environment.baseUrl}/auth/login`, user)
      .toPromise();
    console.log(`Base URL: ${environment.baseUrl}`);
    if (result && result.token) {
      window.sessionStorage.setItem('token', result.token);
      return true;
    } else {
      return false;
    }
  }

  setLoggedUser(userData: any) {
    try {
      let userDataString = JSON.stringify(userData);
      sessionStorage.setItem('usuario', userDataString);
    } catch (error) {
      console.log(error);
    }
  }

  getLoggedUser() {
    try {
      let userDataString: any = sessionStorage.getItem('usuario');
      let userData = JSON.parse(userDataString);
      return userData;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  //Método para criar um novo usuário
  //Verificar se existe endpoint
  /* async createAccount(account: any) {
    const result = await this.http.post<any>(`${environment.baseUrl}/`, account).toPromise();

    return result;
  } */

  //Método para pegar o token
  public getToken() {
    const token = window.sessionStorage.getItem('token');
    return token;
  }

  //Método para pegar o RID do usuário
  public getUserRID() {
    const UserRID = window.sessionStorage.getItem('user');
    return UserRID;
  }

  //Método para pegar a data de expiração do token
  //Verificar implementação se o token expira
  /* getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token);

    if(decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }


  //Método que confere se o token expirou
  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }*/

  //Método que confere se o usuário está logado
  isUserLoggedIn() {
    const token = this.getToken();

    if (!token) {
      return false;
    } else {
      return true;
    }
  }

  //Método para deslogar o usuário
  logout() {
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('user');
  }
}