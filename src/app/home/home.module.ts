import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {AskLoginRegisterPageModule} from "../ask-login-register/ask-login-register.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        AskLoginRegisterPageModule
    ],
  declarations: [HomePage]
})
export class HomePageModule {}
