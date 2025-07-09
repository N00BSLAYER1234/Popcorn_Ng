import { Component, inject, Input, OnInit, AfterViewInit, viewChild, ElementRef, ViewChild } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MovieAltPipe } from '../../pipes/movie-alt.pipe';
import { MoviePosterPipe } from '../../pipes/movie-poster.pipe';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [MovieAltPipe, MoviePosterPipe],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent implements OnInit, AfterViewInit{
 
  @Input({ required: true }) movieId!: string;
  movie!: Movie;
  isLoading: boolean =  false
  @ViewChild('loader') loader!: ElementRef

  movieService = inject(MovieService);

   ngOnInit(): void {
    this.isLoading = true
    this.movieService.getCurrentMovie(parseInt(this.movieId)).subscribe({
      next: (movie) => {
        if (!movie) return
        this.movie = movie
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.isLoading = false
      }
    })
  }

ngAfterViewInit(): void {
  this.isLoading ? (this.loader.nativeElement.style.display = 'none')
   : (this.loader.nativeElement.style.display = 'block')
    
}

// get movieGenre(): string {
//   return (this.movie.genre_ids as number[])
//     .map(id => this.movie.genre_ids[id])
//     .filter(Boolean)
//     .join(', ');
// }
    
  }

  // get movie() {
  //   return this.movieService.getCurrentMovie(parseInt(this.movieId));
  // }

