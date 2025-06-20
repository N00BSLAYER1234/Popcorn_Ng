import { Component, inject, Input } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  @Input({required: true}) movieId!: string

  private movieService = inject(MovieService)

  get movie() {
    return this.movieService.getCurrentMovie(parseInt(this.movieId))
  }
}
