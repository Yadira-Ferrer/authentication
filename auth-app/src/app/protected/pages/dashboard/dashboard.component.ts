import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  items: MenuItem[];

  constructor() {
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
      },
      { separator: true },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
      },
    ];
  }

  ngOnInit(): void {}
}
