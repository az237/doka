import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParametrePageRoutingModule } from './parametre-routing.module';

import { ParametrePage } from './parametre.page';
import {StatistiquePageModule} from "../statistique/statistique.module";
import {AskLoginRegisterPageModule} from "../ask-login-register/ask-login-register.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParametrePageRoutingModule,
    StatistiquePageModule,
    AskLoginRegisterPageModule
  ],
  declarations: [ParametrePage]
})
export class ParametrePageModule {}
