import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.services';
import { Movie, MovieApiRes } from '../models/movie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private apiService: ApiService) {}
  movie: Movie | null = null;

  getMovies(): Observable<MovieApiRes> {
    return this.apiService.getData<MovieApiRes>(
      `movie/popular?language=it-IT&page=1`
    );
  }

  getCurrentMovie(id: number): Observable<Movie> {
    return this.apiService.getData<Movie>(`movie/${id}?language=it-IT&page=1`);
  }
  // UTILS
  getPosterPath(movie: Movie): string {
    return 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
  }

  getPosterAlt(movie: Movie): string {
    return 'Poster di ' + movie.title;
  }

  searchMovies(
    query: string,
    include_adult: boolean = false,
    year?: string
  ): Observable<MovieApiRes> {
    const params = new URLSearchParams({
      query,
      include_adult: String(include_adult),
      language: 'it-IT',
      page: '1',
    });

    if (year) {
      params.append('year', year);
    }

    return this.apiService.getData<MovieApiRes>(
      `/search/movie?${params.toString()}`
    );
  }
}
