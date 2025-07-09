import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie.model';

@Pipe({
  name: 'moviePoster',
  standalone: true,
})
export class MoviePosterPipe implements PipeTransform {
  transform(movie: Movie): string {
    return 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
  }
}
