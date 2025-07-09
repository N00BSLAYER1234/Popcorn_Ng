import { Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MovieComponent } from './pages/movie/movie.component';
import { SearchComponent } from './page/search/search.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'movies/:movieId',
    component: MovieComponent,
  },
  {
    path: 'cerca-film',
    component: SearchComponent,
  },
];
