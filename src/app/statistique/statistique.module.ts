import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatistiquePageRoutingModule } from './statistique-routing.module';

import { StatistiquePage } from './statistique.page';
import {HeaderComponent} from "../shared/header/header.component";
import {AskLoginRegisterPageModule} from "../ask-login-register/ask-login-register.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatistiquePageRoutingModule,
    AskLoginRegisterPageModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [StatistiquePage, HeaderComponent]
})
export class StatistiquePageModule {}
