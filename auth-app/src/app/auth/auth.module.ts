import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { PrimengModule } from '../primeng/primeng.module';
import { SocialButtonsComponent } from './components/social-buttons/social-buttons.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, MainComponent, SocialButtonsComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, PrimengModule],
})
export class AuthModule {}
