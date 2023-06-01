import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import {AskLoginRegisterPageModule} from "../ask-login-register/ask-login-register.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    AskLoginRegisterPageModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
