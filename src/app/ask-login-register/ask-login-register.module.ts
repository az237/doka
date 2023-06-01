import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AskLoginRegisterPageRoutingModule } from './ask-login-register-routing.module';

import { AskLoginRegisterPage } from './ask-login-register.page';
import {FooterComponent} from "../shared/footer/footer.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AskLoginRegisterPageRoutingModule
  ],
  exports: [
    FooterComponent
  ],
  declarations: [AskLoginRegisterPage, FooterComponent]
})
export class AskLoginRegisterPageModule {}
