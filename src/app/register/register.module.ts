import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import {AskLoginRegisterPageModule} from "../ask-login-register/ask-login-register.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    AskLoginRegisterPageModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
