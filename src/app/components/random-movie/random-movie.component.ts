import { Component, Input } from '@angular/core';
import { DUMMY_MOVIES } from '../../data/dummy-movies';
import { ButtonComponent } from '../button/button.component';
import { PopcornRatingComponent } from "../popcorn-rating/popcorn-rating.component";

const randomIdx = Math.floor(Math.random() * DUMMY_MOVIES.length);

@Component({
  selector: 'app-random-movie',
  standalone: true,
  imports: [ButtonComponent, PopcornRatingComponent],
  templateUrl: './random-movie.component.html',
  styleUrl: './random-movie.component.scss'
})
export class RandomMovieComponent {
  movie = DUMMY_MOVIES[randomIdx];

  onGetRandomMovie() {
    const randomIdx = Math.floor(Math.random() * DUMMY_MOVIES.length);
    this.movie = DUMMY_MOVIES[randomIdx];
  }

  get posterPath() {
    return 'https://image.tmdb.org/t/p/w500/' + this.movie.poster_path;
  }
  get posterAlt() {
    return 'Poster di ' + this.movie.title;
  }
}
