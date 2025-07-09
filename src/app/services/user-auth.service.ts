import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { ApiService } from './api.services';

import { DUMMY_USER } from '../data/dummy-user';
import { Observable, switchMap } from 'rxjs';

type TokenResponse = {
  success: boolean,
  expires_at: string,
  request_token: String;
}

type SessionResponse = {
  success: boolean,
  session_id: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  isLoggedIn: boolean = false;
  user: User | null = null;
  sessionId: string | null = null;

  private apiService = inject(ApiService);

  requestToken(): Observable<TokenResponse>{
    return this.apiService.getData<TokenResponse>('authentication/token/new');
  }

  initSession() {
    const currentSession = localStorage.getItem('session_id');
    const currentExpiration = localStorage.getItem('expires_at');

    if (!currentSession || !currentExpiration || new Date() >= new Date(currentExpiration)){
      return;
    }

    this.sessionId = currentSession
    this.apiService.getData<User>(`account?session_id=${this.sessionId}`).subscribe({
      next: response => {
        if (!response){
          return
        }
        this.user = response
        this.isLoggedIn = !!response.id
      },
      error: err => console.log('Error', err)
    })
  }

  login(username: String, password: String): Observable<User> {
    
    return this.requestToken().pipe(
      switchMap(token => {
        const body = {
          username,
          password,
          request_token: token.request_token
        };
        return this.apiService.postData<TokenResponse>('authentication/token/validate_with_login', body).pipe(
          switchMap(() => {
            return this.apiService.postData<SessionResponse>('authentication/session/new', {
              request_token: token.request_token
            })
          }),
          switchMap(response => {
            this.sessionId = response.session_id;
            localStorage.setItem('session_id', this.sessionId);
            localStorage.setItem('expires_at', token.expires_at);
            return this.apiService.getData<User>(`account?session_id=${this.sessionId}`)
          })
        )
      })
    );
  }

  logout() {
    this.isLoggedIn = false;
    this.user = null;
    localStorage.setItem('session_id', '');
    localStorage.setItem('expires_at', '');
  }
}
