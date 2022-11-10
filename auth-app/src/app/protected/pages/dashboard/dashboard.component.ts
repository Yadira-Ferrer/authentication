import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'My Profile',
        icon: 'pi pi-user',
      },
      {
        label: 'Chat Group',
        icon: 'pi pi-users',
      },
      {
        label: 'Dark',
        icon: 'pi pi-moon',
        command: () => this.changeTheme(),
      },
      { separator: true },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
      },
    ];
  }

  changeTheme() {
    const darkTheme = this.themeService.darktheme;
    if (darkTheme) {
      this.themeService.switchTheme('saga-blue');
      this.items[2] = { ...this.items[2], label: 'Light', icon: 'pi pi-sun' };
    } else {
      this.themeService.switchTheme('arya-blue');
      this.items[2] = { ...this.items[2], label: 'Dark', icon: 'pi pi-moon' };
    }
  }
}
