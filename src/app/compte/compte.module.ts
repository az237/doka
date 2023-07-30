import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComptePageRoutingModule } from './compte-routing.module';

import { ComptePage } from './compte.page';
import {AskLoginRegisterPageModule} from "../ask-login-register/ask-login-register.module";
import {StatistiquePageModule} from "../statistique/statistique.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComptePageRoutingModule,
    AskLoginRegisterPageModule,
    StatistiquePageModule
  ],
  declarations: [ComptePage]
})
export class ComptePageModule {}
