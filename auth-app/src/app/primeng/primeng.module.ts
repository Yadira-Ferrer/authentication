import { NgModule } from '@angular/core';

import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [],
  exports: [
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    InputSwitchModule,
    InputTextModule,
    MenuModule,
    PasswordModule,
  ],
})
export class PrimengModule {}
