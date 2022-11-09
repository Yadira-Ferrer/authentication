import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({
  declarations: [DashboardComponent, ProfileComponent],
  imports: [CommonModule, ProtectedRoutingModule, PrimengModule],
})
export class ProtectedModule {}
