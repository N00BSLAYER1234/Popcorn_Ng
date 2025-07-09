import { Input, OnInit } from '@angular/core';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { Genres, Genre } from '../../models/utility.models';
import { FormUtilsService } from '../../services/formUtils.service';


import { MovieCardComponent } from '../../components/movie-card/movie-card.component';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, MovieCardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  movies: Movie[] = [];
  genres: Genre[] = [];
  years: string[] = [];

  @Input({ required: true }) movie!: Movie;
  private movieService = inject(MovieService);
  private formUtilsService = inject(FormUtilsService);

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1900; year--) {
      this.years.push(year.toString());
    }
    console.log(this.years);
    this.formUtilsService.getGenres().subscribe({
      next: (genres) => {
        if (!genres) return;
        this.genres = genres.genres;
      },
      error: (err) => console.log(err),
    });
  }
  onSubmit(formData: NgForm){
    console.log(formData);
    console.log(formData.form.value);

    this.movieService.searchMovies(formData.form.value.search, false, formData.form.value.year).subscribe({
      next: (movies) => {
        if (!movies) return;
        this.movies = movies.results;
      },
      error: (error) => {
        console.log(error);
      }
    })


    // Da correggere


    
// if (formData.form.value.sort != 'Predefinito') {
//   if(formData.form.value.sort == 'popularity'){
//     this.movies.sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0));
//   }else if (formData.form.value.sort == 'vote_average')
//   this.movies.sort((a, b) => (b.vote_average ?? 0) - (a.vote_average ?? 0));
//   else{
//       this.movies.sort(
//       (a, b) =>
//       new Date(b.release_date ?? '').getTime() -
//       new Date(a.release_date ?? '').getTime()
//   );

//   }
// }

  }

  
}
