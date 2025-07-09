import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie.model';

@Pipe({
  name: 'movieAlt',
  standalone: true,
})
export class MovieAltPipe implements PipeTransform {
  transform(movie: Movie): string {
    return 'Poster of ' + movie.title;
  }
}
