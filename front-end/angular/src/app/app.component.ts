import { Component } from '@angular/core';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(
    private auth: AuthService
  ) { }

  get isLoggedIn(): boolean {
    return this.auth.isAuthenticated();
  }
}
