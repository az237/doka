import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassementPageRoutingModule } from './classement-routing.module';

import { ClassementPage } from './classement.page';
import {StatistiquePageModule} from "../statistique/statistique.module";
import {AskLoginRegisterPageModule} from "../ask-login-register/ask-login-register.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassementPageRoutingModule,
    StatistiquePageModule,
    AskLoginRegisterPageModule
  ],
  declarations: [ClassementPage]
})
export class ClassementPageModule {}
