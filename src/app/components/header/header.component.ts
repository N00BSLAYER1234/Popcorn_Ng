import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserAuthService } from '../../services/user-auth.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isClicked = false;
  user: User | null = null;
  logo = 'Logo.svg';

  constructor(
    public userAuthService: UserAuthService,
    private router: Router
  ) {}

  get imagePath() {
    return 'assets/' + this.logo;
  }

  onUserClick() {
    this.router.navigate(['/account']);
  }
}
