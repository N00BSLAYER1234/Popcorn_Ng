import { Injectable } from '@angular/core';
import { Genres } from '../models/utility.models';
import { ApiService } from './api.services';

import { Observable } from 'rxjs';
import { DUMMY_MOVIES } from '../data/dummy-movies';

@Injectable({
  providedIn: 'root',
})
export class FormUtilsService {
  constructor(private apiService: ApiService) {}

  getGenres(): Observable<Genres> {
    return this.apiService.getData<Genres>('/genre/movie/list ');
  }
}
