import { Component, inject, OnInit, signal } from '@angular/core';
import { ActorListComponent } from '../../components/actor-list/actor-list.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { RandomMovieComponent } from '../../components/random-movie/random-movie.component';
import { Movie } from '../../models/movie.model';
import { ActorService } from '../../services/actor.service';
import { MovieService } from '../../services/movie.service';
import { Actor } from '../../models/actor.model';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RandomMovieComponent, MovieListComponent, ActorListComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit {
  movies: Movie[] = [];
  fourMovies : Movie[] = [];
  isFetching: boolean = false;
  actors: Actor[] = [];
  private actorService = inject(ActorService);
  private movieService = inject(MovieService);
  ngOnInit(): void {
    this.isFetching = true;
    this.movieService.getMovies().subscribe({
      next: (movies) => {
        if (!movies) {
          this.movies = [];
          return;
        }
        this.movies = movies.results;
        this.fourMovies = this.bestFourMovies();
      },

      complete: () => {
        this.isFetching = false;
      },
      error: (err) => {
        console.error('Errore:', err);
        this.movies = [];
      },
    });
    this.actorService.getActors().subscribe({
      next: (actors) => {
        if(!actors) return;
        this.actors = actors.results
            .map((actor) => this.actorService.normalize(actor))
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 4);
      }
    })
  }

bestFourMovies() {
    return [...this.movies]
      .sort((a, b) => (b.vote_average ?? 0) - (a.vote_average ?? 0))
      .slice(0, 4);
  }

  get bestFourActors() {
    return [...this.actors]
      .map((actor) => this.actorService.normalize(actor))
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 4);
  }
}
