import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {AskLoginRegisterPageModule} from "../ask-login-register/ask-login-register.module";
import {StatistiquePageModule} from "../statistique/statistique.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        AskLoginRegisterPageModule,
        StatistiquePageModule
    ],
  declarations: [HomePage]
})
export class HomePageModule {}
