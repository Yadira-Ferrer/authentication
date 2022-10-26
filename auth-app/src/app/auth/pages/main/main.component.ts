import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  theme = 'arya-blue';

  constructor(private themeService: ThemeService) {}

  handleChangeTheme() {
    this.themeService.switchTheme(this.theme);
  }

  changeTheme(theme: string) {
    this.theme = theme;
    this.themeService.switchTheme(theme);
  }
}
