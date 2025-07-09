import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../envs/env';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = env.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getData<T>(endpoint: string): Observable<T> {
    // quel <T> ci dice: questa funzione restituisce dati di un tipo che decideremo in fase di utilizzo
    return this.httpClient.get<T>(`${this.baseUrl}/${endpoint}`);
  }

  postData<T>(endpoint: string, body: any): Observable<T>{
    return this.httpClient.post<T>(`${this.baseUrl}/${endpoint}`, body);
  }
}
