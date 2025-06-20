import { Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MovieComponent } from './pages/movie/movie.component';

export const routes: Routes = [
    {
        path: 'account',
        component: AccountComponent
    },
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'movie/:movieId',
        component: MovieComponent
    }
];
