import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

import { DUMMY_USER } from '../data/dummy-user';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  isLoggedIn = false;
  user: User | null = null;

  login() {
    this.isLoggedIn = true;
    this.user = DUMMY_USER;
  }

  logout() {
    this.isLoggedIn = false;
    this.user = null;
  }

}
