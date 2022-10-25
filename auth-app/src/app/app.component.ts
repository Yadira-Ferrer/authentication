import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'auth-app';
  currentTheme = 'arya-blue';

  constructor(private themeService: ThemeService) {}

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }
}
