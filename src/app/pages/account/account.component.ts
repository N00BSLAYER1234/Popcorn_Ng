import { Component } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  constructor(public UserAuthService: UserAuthService) {}

  get firstLetter() {
    return this.UserAuthService.user?.username.charAt(0);
  }

  onSubmit(formData: NgForm) {
    console.log('FORM DATA', formData.form.value);
    this.UserAuthService.login(
      formData.form.value.username,
      formData.form.value.password
    ).subscribe({
      next: response => {
        if (!response) return;
        console.log('Request token response', response);
        this.UserAuthService.isLoggedIn = !!response.id;
        this.UserAuthService.user = response;
      },
      error: err => console.log('Error:', err)
    });
  }
}
