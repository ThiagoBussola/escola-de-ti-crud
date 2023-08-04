import { Injectable } from '@angular/core';
import { AuthStorage } from './auth.storage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SingIn {
  email: string;
  password: string;
}

export interface Token {
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(readonly authStorage: AuthStorage, private http: HttpClient) {}
  singIn(value: SingIn) {
    this.http.post<Token>('/api/auth/login', value).subscribe((token) => {
      this.authStorage.accessToken = token.access_token;
      console.log(token.access_token);
    });
  }
}
