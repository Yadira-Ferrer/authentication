import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [],
  exports: [ButtonModule, InputSwitchModule, InputTextModule, PasswordModule],
})
export class PrimengModule {}
