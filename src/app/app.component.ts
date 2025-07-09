import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UserAuthService } from './services/user-auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pop-corn-base';
  currentYear = new Date().getFullYear();

  private UserAuthService = inject(UserAuthService);
  ngOnInit(): void {
    this.UserAuthService.initSession();
  }
}
